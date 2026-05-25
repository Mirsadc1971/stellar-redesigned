# Stellar Property Group — Website

Modern React + TypeScript marketing site for Stellar Property Group, Chicago's
condominium, HOA, and townhome property management company.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router 7
- lucide-react icons

## Local development

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Build for production: `npm run build`
4. Type-check: `npm run typecheck`

## Forms & email

All three forms — **Contact**, **Violation Report**, and **Board Nomination** —
submit directly to **mirsad@stellarpropertygroup.com** via FormSubmit.co.
No API keys or environment variables are required.

**One-time activation:** the first time a form is submitted after deployment,
FormSubmit.co sends a confirmation email to mirsad@stellarpropertygroup.com.
Click the activation link in that email once — every form delivers from then on.

To change the destination address, edit the `FORM_ENDPOINT` constant near the
top of `src/components/ContactForm.tsx`, `src/components/ViolationReportForm.tsx`,
and `src/components/BoardNominationForm.tsx`.

## Deployment

Configured for Vercel via `vercel.json` (SPA routing). Push to the connected
repository and Vercel builds and deploys automatically.
