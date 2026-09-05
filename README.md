# Next Chair Regional

Cloudflare Worker serving regional Next Chair launch-offer pages.

## Routes

- `/next-chair-md` — Maryland
- `/next-chair-va` — Virginia

## Lead notifications

Lead forms post to `/api/lead` and send notifications to `hello@businessdatagurus.com` through Resend. Before deployment, configure the Worker secret:

```bash
npx wrangler secret put RESEND_API_KEY
```

The Resend `from` address defaults to `onboarding@resend.dev`. Replace it with a verified Next Chair or Business Data Gurus sender domain when available.

## Local development

```bash
npm install
npm run dev
```
