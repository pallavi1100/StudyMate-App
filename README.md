# StudyMate Germany 2.0 — Next.js + Supabase starter

A separate, responsive redesign inspired by the **editorial luxury**, full-width visual composition, refined typography and muted colours of the Valora Heights Dribbble reference. This is an independent StudyMate design, not a reproduction of the original artwork.

## Current scope

- Responsive public landing page and mobile-friendly dashboard
- Sign up / email-password sign in, optional Google OAuth through Supabase
- Private saved onboarding checklist and document-readiness checkboxes
- City selector with verified entry points for Bremen, Berlin, Hamburg and Munich; federal fallback for other locations
- Housing directory, appointment guide and official resources
- PWA manifest and app icon (full offline support and cross-device installation testing NOT yet completed)
- Account-level data isolation with Supabase Row Level Security SQL

**Not yet migrated:** full source-backed AI, complete translations, appointment integrations, real property listings, advanced user profile questions, and the richer content from the prior Streamlit prototype. The language preference selector saves the choice but does not translate the app yet.

## Step 1 — Install Node.js

Install current Node.js LTS from https://nodejs.org/ then restart VS Code.

## Step 2 — Open this folder

Extract ZIP, open **studymate-germany-2** (folder containing `package.json`) in VS Code. Use **Terminal → New Terminal**. Check terminal shows this folder, not just Downloads.

```powershell
npm install
```

## Step 3 — Create Supabase project

1. Go to https://supabase.com/dashboard and create a new project.
2. Open **SQL Editor**, paste `sql/schema.sql` and run it **once** on a new database. This configures private tables and RLS.
3. Under Project settings/API (or Connect), copy **Project URL** and **publishable key**. Never use a service-role or secret key in the browser.
4. Copy `.env.example` to `.env.local` and replace the two placeholders:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-real-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-public-publishable-key
```

5. In **Authentication → URL Configuration**, set Site URL to `http://localhost:3000` while developing, and add redirect URL `http://localhost:3000/auth/callback`.
6. Supabase email confirmation might be enabled. If so, sign up and click your confirmation email before signing in. Set a real hosted redirect URL when you deploy.
7. To use **Continue with Google**, enable Google provider in Supabase and configure its OAuth credentials/redirect URI with Google. Without this setup, use email/password.

## Step 4 — Run

```powershell
npm run dev
```

Open **[https://studymate-app-1.onrender.com]**. Click **Get started** to create your account. After login, use dashboard and test persistence by reloading.

Stop server: Ctrl+C in terminal.

## Step 5 — Deploy a separate app

Keep your existing Streamlit site live. Make a **new GitHub repository**, such as `studymate-germany-2`, and deploy this Next.js project separately (e.g. Vercel). Add the two environment variables to hosting settings. In Supabase Auth add `https://YOUR-NEW-DOMAIN/auth/callback` as an allowed redirect URL and update Site URL. **Never commit `.env.local`.**

## Privacy and safety

No passports, health records, banking details or ID uploads. RLS restricts progress rows by signed-in user. This is a starter; before public launch, add a privacy notice, account deletion, full auth/session regression testing, accessibility review, rate limits where needed, security review, and verify all public guidance/source links. Since protected dashboard views run client-side, do not treat client redirects alone as the security boundary; database RLS is essential. Local auth demos are not a production security audit.

## Why not use old Streamlit ZIP directly?

The old version is Python/Streamlit. This app uses Next.js/React/TypeScript. Product requirements and content migrate, but not Python UI files. Maintain the old app separately until the new version passes testing.
