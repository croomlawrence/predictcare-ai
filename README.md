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
- Output directory: `public`
- Install command: `npm install`

## Updating the homepage video

Add the selected HealthFounderOS video at:

```text
public/media/healthfounderos-feature.mp4
```

Recommended export:

- MP4 / H.264
- 16:9 aspect ratio
- 60–180 seconds for homepage use
- Keep file size under ~50–100MB if possible

## Updating the creative portfolio

Add screenshots to:

```text
public/portfolio/assets/
```

Use filename order to control display order, for example:

```text
01-acurist-landing-page.png
02-healthfounderos-masterclass-slide.png
03-vascumind-quiz-flow.png
```

Then run:

```bash
npm run build
```

The build script generates `public/portfolio/portfolio.json` automatically.
