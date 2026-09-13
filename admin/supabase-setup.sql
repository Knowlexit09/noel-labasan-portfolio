-- ============================================================================
-- Noel Labasan Portfolio Maintenance — Supabase setup
-- Run once in the target Supabase project.
--
-- SECURITY MODEL
-- 1) Public visitors may read ONLY the `live` portfolio state.
-- 2) Only the authenticated owner email below may read/write `draft` or `live`.
-- 3) Passwords/tokens are never stored in the GitHub repository.
-- 4) Testimonial media uploads are write-protected; the media bucket is public-read.
-- ============================================================================

create table if not exists public.portfolio_states (
  scope text primary key check (scope in ('live','draft')),
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid null
);

alter table public.portfolio_states enable row level security;

create or replace function public.set_portfolio_state_audit()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists trg_portfolio_state_audit on public.portfolio_states;
create trigger trg_portfolio_state_audit
before insert or update on public.portfolio_states
for each row execute function public.set_portfolio_state_audit();

-- Recreate policies so this script is safe to run again.
drop policy if exists "Public can read live portfolio" on public.portfolio_states;
drop policy if exists "Owner can read portfolio states" on public.portfolio_states;
drop policy if exists "Owner can insert portfolio states" on public.portfolio_states;
drop policy if exists "Owner can update portfolio states" on public.portfolio_states;
drop policy if exists "Owner can delete portfolio states" on public.portfolio_states;

create policy "Public can read live portfolio"
on public.portfolio_states
for select
to anon
using (scope = 'live');

create policy "Owner can read portfolio states"
on public.portfolio_states
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com');

create policy "Owner can insert portfolio states"
on public.portfolio_states
for insert
to authenticated
with check ((auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com');

create policy "Owner can update portfolio states"
on public.portfolio_states
for update
to authenticated
using ((auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com')
with check ((auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com');

create policy "Owner can delete portfolio states"
on public.portfolio_states
for delete
to authenticated
using ((auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com');

-- Public testimonial/media bucket. Public read is intentional because published
-- portfolio images must load for recruiters; uploads/deletes remain owner-only.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'portfolio-media',
  'portfolio-media',
  true,
  3145728,
  array['image/jpeg','image/png','image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Owner can upload portfolio media" on storage.objects;
drop policy if exists "Owner can update portfolio media" on storage.objects;
drop policy if exists "Owner can delete portfolio media" on storage.objects;

create policy "Owner can upload portfolio media"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'portfolio-media'
  and (auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com'
);

create policy "Owner can update portfolio media"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'portfolio-media'
  and (auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com'
)
with check (
  bucket_id = 'portfolio-media'
  and (auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com'
);

create policy "Owner can delete portfolio media"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'portfolio-media'
  and (auth.jwt() ->> 'email') = 'noel.ochoa.labasan@gmail.com'
);

-- Optional indexes are unnecessary here: only two state rows exist by design.
-- The primary-key lookup on scope is O(log n), with n fixed at <= 2.
