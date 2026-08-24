# Proofoya Static Vite Site

This is a **React + Vite + Tailwind CSS** static website. **Framer Motion** drives viewport entrances, hero transitions, dashboard content transitions, and interaction feedback. It does not require Express or a Node server runtime.

## Local development

Run `pnpm install`, followed by `pnpm dev`. Open the Vite URL printed in the terminal. Build production assets with `pnpm build`, which emits a static bundle into `dist/`. Use `pnpm preview` to test that production bundle locally.

## Vercel deployment

Import the repository in Vercel with the repository root as the project root. The included `vercel.json` runs `pnpm build` and deploys the `dist/` output. No server entrypoint, API route, or Express process is required.

## Component map

The page is split into `client/src/components/proofoya/`: `Header`, `HeroSection`, `Dashboard`, `ProblemSection`, `StepsSection`, `FeaturesSection`, `CreativesSection`, `AfricaSection`, `GuaranteeSection`, `ComparisonSection`, `WaitlistSection`, and `Footer`. Shared content records live in `data.ts`; shared Framer Motion viewport helpers live in `motion.tsx`.

## Managed image paths

The hosted Manus project uses managed asset paths. The accompanying local source export includes matching image files and a post-extraction instruction, so an external Vite or Vercel deployment can work without the Manus environment.
