# Trentham Electrical & Solar — AI Voice Demo

Live: [trentham.onrise.ai](https://trentham.onrise.ai)

AI voice assistant demo page for Trentham Electrical & Solar. Built with Next.js, Tailwind CSS, and RetellAI Web SDK.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Voice AI:** RetellAI Web SDK
- **Hosting:** Vercel
- **Domain:** trentham.onrise.ai (Cloudflare DNS)

## Setup

```bash
npm install
cp .env.example .env.local
# Add your RETELL_API_KEY to .env.local
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `RETELL_API_KEY` | RetellAI secret API key |
| `RETELL_AGENT_ID` | Trentham voice agent ID |

## Deployment

Deployed via Vercel. Push to `main` to auto-deploy.

### DNS (Cloudflare)

```
Type: CNAME
Name: trentham
Target: cname.vercel-dns.com
Proxy: DNS only (grey cloud)
```

---

Built by [OnRise AI](https://www.onrise.ai)
