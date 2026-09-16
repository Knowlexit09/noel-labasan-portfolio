# Noel Labasan Portfolio

Personal developer/application-support portfolio with a GitHub Pages frontend and a Supabase-backed private Maintenance Console.

## Live Sites

- Public portfolio: `https://knowlexit09.github.io/noel-labasan-portfolio/`
- Maintenance Console: `https://knowlexit09.github.io/noel-labasan-portfolio/admin/`

## Main Features

- Draft → Preview → Publish workflow
- Configurable public modules/content/media
- Resume/document management
- Contact delivery + Admin Inbox
- Owner authentication with TOTP MFA and AAL2-protected writes
- Recovery codes + delayed emergency recovery
- Privacy-aware portfolio analytics
- Public counter format: `@knowlexit · N visit(s)`

## Operations Documentation

- [Portfolio Maintenance Guide](docs/PORTFOLIO_MAINTENANCE_GUIDE.md)
- [Backup & Recovery Checklist](docs/BACKUP_RECOVERY_CHECKLIST.md)
- [Final QA Checklist](docs/FINAL_QA_CHECKLIST.md)

## Security Note

Public browser code must contain only public configuration such as the Supabase project URL and publishable key. Never commit service-role keys, passwords, recovery codes, TOTP secrets, or other private credentials.
