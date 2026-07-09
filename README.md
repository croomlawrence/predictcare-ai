# PredictCare.ai

Static export of the current PredictCare.ai website, prepared for GitHub + Vercel management.

## Current source

- Imported from Netlify deploy ZIP: `deploy-6a149630749b3fcbf163495c.zip`
- The ZIP contained one file: `index.html`
- This is the deployed/static artifact, not the original Replit source project.

## Local development

```bash
npm install
npm run dev
```

## Deployment

This repo can be imported directly into Vercel as a static site.

Recommended Vercel settings:

- Framework preset: Other / Static
- Build command: `npm run build` or blank
- Output directory: `.`
- Install command: `npm install`
