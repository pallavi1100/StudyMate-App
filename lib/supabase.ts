import { createBrowserClient } from '@supabase/ssr';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const key = (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)?.trim();

export function configError(): string | null {
  if (!url || !key) return 'Supabase is not configured. Check .env.local next to package.json and restart npm.cmd run dev.';
  try {
    const address = new URL(url);
    if (address.protocol !== 'https:' || !address.hostname.endsWith('.supabase.co') || address.pathname !== '/') {
      return 'Project URL must look like https://your-project-id.supabase.co (without /rest/v1).';
    }
  } catch { return 'Supabase Project URL is invalid. Copy it from Supabase Project Settings → Data API.'; }
  if (url.includes('YOUR-') || key.includes('YOUR_') || key.includes('PASTE_')) return 'Replace example values in .env.local with your actual Supabase project values.';
  if (!(key.startsWith('sb_publishable_') || key.startsWith('eyJ'))) return 'The Supabase key format looks incorrect. Use the publishable key from the same project.';
  return null;
}
export function isSupabaseConfigured() { return configError() === null; }
export function createClient() {
  if (configError()) return null;
  return createBrowserClient(url!, key!);
}
