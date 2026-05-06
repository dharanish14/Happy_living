-- Supabase schema for Happy Living blog CMS
-- Replace the admin email below if you want a different account to manage the CMS.

create extension if not exists pgcrypto;

create table if not exists public.blogs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  content text not null,
  author text not null,
  published_date date not null,
  featured boolean not null default false,
  image_url text,
  image_path text,
  image_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blogs enable row level security;

create policy "Public can read blogs"
  on public.blogs
  for select
  using (true);

create policy "Admin can insert blogs"
  on public.blogs
  for insert
  with check ((auth.jwt() ->> 'email') = 'dharaanish@gmail.com');

create policy "Admin can update blogs"
  on public.blogs
  for update
  using ((auth.jwt() ->> 'email') = 'dharaanish@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'dharaanish@gmail.com');

create policy "Admin can delete blogs"
  on public.blogs
  for delete
  using ((auth.jwt() ->> 'email') = 'dharaanish@gmail.com');

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do update
set public = true;

create policy "Public can read blog images"
  on storage.objects
  for select
  using (bucket_id = 'blog-images');

create policy "Admin can upload blog images"
  on storage.objects
  for insert
  with check (
    bucket_id = 'blog-images'
    and (auth.jwt() ->> 'email') = 'dharaanish@gmail.com'
  );

create policy "Admin can update blog images"
  on storage.objects
  for update
  using (
    bucket_id = 'blog-images'
    and (auth.jwt() ->> 'email') = 'dharaanish@gmail.com'
  )
  with check (
    bucket_id = 'blog-images'
    and (auth.jwt() ->> 'email') = 'dharaanish@gmail.com'
  );

create policy "Admin can delete blog images"
  on storage.objects
  for delete
  using (
    bucket_id = 'blog-images'
    and (auth.jwt() ->> 'email') = 'dharaanish@gmail.com'
  );
