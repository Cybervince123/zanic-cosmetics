# Zanic Cosmetics — Lighthouse readiness report

**Audit date:** 5 October 2026  
**Audited URL:** `http://localhost:3000/`  
**Audit modes:** Lighthouse navigation audit on desktop and mobile

## Results

| Category | Desktop | Mobile |
| --- | ---: | ---: |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| Agentic Browsing | 100 | 100 |
| Failed audits | 0 | 0 |

## Performance trace

The Chrome performance trace recorded:

- Largest Contentful Paint: **454 ms**
- Cumulative Layout Shift: **0.00**
- CPU throttling: 1×
- Network throttling: none

The trace was run against the local development server. A final numeric Lighthouse Performance score should be captured against the deployed Vercel URL using a consistent Lighthouse environment before presenting it as a production guarantee.

## Fixes made during the audit

- Corrected the low-contrast wholesale catalogue message that reduced mobile Accessibility to 96.
- Removed the conflicting header link accessible label that failed the label/content-name audit.
- Re-ran lint successfully.
- Verified that the optimized Next.js production build completes successfully.

## Google visibility note

The SEO score is 100 for the audited homepage. That score supports technical discoverability, but it does not guarantee Google inclusion or ranking. After deployment, submit the live sitemap in Google Search Console, request indexing for the homepage, and verify the production URL—not localhost—before sharing the final public report.

