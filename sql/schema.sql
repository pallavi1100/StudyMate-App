begin;
-- Run in Supabase SQL Editor. Each user sees/edits only their own records.
create table if not exists public.student_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 city text not null default 'Berlin',
 language text not null default 'English',
 updated_at timestamptz not null default now()
);
create table if not exists public.student_progress (
 user_id uuid not null references auth.users(id) on delete cascade,
 step_id text not null,
 done boolean not null default false,
 updated_at timestamptz not null default now(),
 primary key (user_id, step_id)
);
create table if not exists public.student_documents (
 user_id uuid not null references auth.users(id) on delete cascade,
 item_id text not null,
 ready boolean not null default false,
 updated_at timestamptz not null default now(),
 primary key (user_id, item_id)
);
alter table public.student_profiles enable row level security;
alter table public.student_progress enable row level security;
alter table public.student_documents enable row level security;
drop policy if exists "profile_owner_all" on public.student_profiles;
create policy "profile_owner_all" on public.student_profiles for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "progress_owner_all" on public.student_progress;
create policy "progress_owner_all" on public.student_progress for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists "documents_owner_all" on public.student_documents;
create policy "documents_owner_all" on public.student_documents for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

commit;
