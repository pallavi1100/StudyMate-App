"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
export default function AuthCallback() {
  const [error, setError] = useState('');
  useEffect(() => {
    let cancelled = false;
    async function complete() {
      const params = new URLSearchParams(window.location.search);
      const oauthError = params.get('error_description') || params.get('error');
      if (oauthError) { setError(oauthError); return; }
      const db = createClient();
      if (!db) { setError('Supabase is not configured.'); return; }
      const code = params.get('code');
      if (code) {
        const { error: exchangeError } = await db.auth.exchangeCodeForSession(code);
        if (exchangeError) { setError(exchangeError.message); return; }
      }
      const { data, error: userError } = await db.auth.getUser();
      if (!cancelled) {
        if (userError || !data.user) setError('Could not complete sign in. Please return to login.');
        else window.location.replace('/dashboard');
      }
    }
    void complete();
    return () => { cancelled = true; };
  }, []);
  return <main className="loading-view"><div>{error ? <><h2>Sign-in could not finish</h2><p>{error}</p><Link href="/login">Try again</Link></> : <p>Completing your sign-in…</p>}</div></main>;
}
