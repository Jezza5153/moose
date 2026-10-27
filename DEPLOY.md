# Deploying the Ontwerpboek to Vercel

Target: a separate Vercel project called **lazy-louis**, so the public link is
**https://lazy-louis.vercel.app** (no "moose", no login wall). Do not deploy this into the existing
`moose` Vercel project.

## Option A — Vercel dashboard (2 minutes)

1. vercel.com → **Add New → Project → Import** `Jezza5153/moose`.
2. Project name **lazy-louis**, framework preset **Other**, leave build settings empty → **Deploy**.
3. **Settings → Git → Production Branch** → `lazy-louis-mockups` → Save.
   **Deployments** → newest deployment → **⋯ → Redeploy**.

## Option B — from a session with a Vercel token

Needs `VERCEL_TOKEN` set in the environment (never pasted into chat).

```bash
# Deploy from a clean folder named lazy-louis, so the CLI creates/links a project with that name
# (running it inside the repo folder would link to the project named after the folder: "moose").
rm -rf /tmp/lazy-louis && mkdir /tmp/lazy-louis
cp -r index.html 0*.html 10-*.html assets book /tmp/lazy-louis/
cd /tmp/lazy-louis
npx -y vercel@latest deploy --prod --yes --token "$VERCEL_TOKEN"
```

Then check that the link opens without a login:

```bash
curl -s https://lazy-louis.vercel.app | grep -o '<title>[^<]*'   # expect: Lazy Louis Ontwerpboek
```

## After it is live

A Gmail draft to info@lazylouis.nl is waiting in the BoekEerlijk account, subject
"Tien ontwerpen voor de nieuwe website van Lazy Louis". It links to https://lazy-louis.vercel.app —
update the link first if Vercel assigned a different domain, then send it.
