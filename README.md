# Onboardy

A website for an AI automation service concept aimed at small service businesses. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Scope

This repository contains the marketing website: service descriptions, navigation, visual workflow examples, and a contact section. It does not implement an AI receptionist, SMS delivery, CRM, or booking backend.

Unverified client testimonials and outcome statistics are not presented as results. Contact opens the visitor's email application; the website does not claim a request was delivered.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

```bash
npm run build
npm run start
```

## Deployment

Import the repository into Vercel using the Next.js preset. No environment variables are needed for the website. Confirm contact details before using it for business enquiries.

## Structure

- `app/page.tsx`: page composition.
- `components/sections/`: hero, services, and contact.
- `lib/data.ts`: service copy and shared data.
- `app/globals.css`: design tokens and styling.

## Status

Website prototype. Service integrations and verified customer case studies are separate work. No uptime, revenue, conversion, or response-time guarantees are implied by the website.
