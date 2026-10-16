# StudyMate Germany 2.0 — Windows beginner setup

## 1. Keep your Streamlit app
This is a **separate** Next.js project. Your existing public Streamlit app is unchanged.

## 2. Extract and open
Extract ZIP. In VS Code use **File → Open Folder** and select **studymate-germany-2**, the inner folder with `package.json`. Then **Terminal → New Terminal**.

## 3. Configure Supabase safely
Copy `.env.example` to a new file `.env.local` in the same folder as `package.json`.
Paste these two lines and fill in values using **the same** Supabase project:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_YOUR_KEY
```

Get the project URL from Supabase **Project Settings → Data API** (do not include `/rest/v1/`). Get the key from **Project Settings → API Keys → Publishable key**. Do not use a service_role or secret key. Never upload `.env.local` to GitHub.

## 4. Create database tables
In Supabase **SQL Editor → New query**, paste all of `sql/schema.sql` and run. It can be run again without the duplicate-policy error. Confirm RLS is enabled on all 3 tables under Table Editor. Before a public launch, test with 2 accounts to confirm each user's records are separate.

## 5. Start website
In VS Code's terminal (inside folder containing `package.json`):

```
npm.cmd install
npm.cmd run dev
```

Go to `http://localhost:3000/login`. Keep this terminal open. If the port is occupied, use the localhost URL displayed in the terminal.

## 6. Email registration first
Supabase **Authentication → Sign In / Providers → Email**: ensure email sign-in/sign-up is enabled. In **Authentication → URL Configuration**, set **Site URL** to `http://localhost:3000` and add `http://localhost:3000/**` as an additional redirect URL. Register and confirm your email if confirmation is enabled. Look under **Authentication → Users** to verify creation.

## 7. Google login (optional until email works)
Supabase **Authentication → Sign In / Providers → Google**. Create an OAuth **Web application** in Google Cloud and copy the **Supabase callback URL from the Google provider page** into the Google client's authorized redirect URIs. Store Google's Client ID and **Client Secret in Supabase only**, not `.env.local`. Add your Google account as a test user if the OAuth app is in testing mode. This app's callback page is `http://localhost:3000/auth/callback`; allow `http://localhost:3000/**` in Supabase redirect URLs.

## 8. Common errors
- `package.json not found`: open the inner project folder, not Downloads.
- PowerShell blocks `npm.ps1`: use `npm.cmd`.
- `Preview mode`: `.env.local` names must match `.env.example`; restart server.
- `DNS_PROBE_FINISHED_NXDOMAIN`: re-copy the exact Supabase Project URL; do not guess spelling.
- `Invalid API key`: re-copy the publishable key from the **same** project as URL.
- `Unsupported provider`: enable Google and set both Client ID and Client Secret in Supabase.
- `OAuth redirect error`: check Google authorized callback URL and Supabase additional redirect URLs.
- `Email not confirmed`: check mailbox and spam; follow verification link.

## 9. Test before inviting others
Create two **test** accounts. Confirm that their progress and document checkboxes do not overlap. Avoid uploading identity documents. Recheck administrative links and local requirements before public use. This starter is not a completed security audit.
