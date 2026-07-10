const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'portfolio', 'assets');
const outputFile = path.join(__dirname, '..', 'public', 'portfolio', 'portfolio.json');
const allowed = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);

const caseStudyCopy = {
  '01-PredictCareAI-landing-page.png': {
    title: 'PredictCare.ai — Fractional CCO/CMO Positioning',
    category: 'PredictCare.ai',
    description: 'Principal-led healthcare commercialization positioning, conversion architecture, and HealthFounderOS operating-system narrative.'
  },
  '02-AcuristAI-landing-page.png': {
    title: 'Acurist AI — Cognitive Screening Platform',
    category: 'Diagnostics & Cognitive Health',
    description: 'Healthcare AI landing page architecture for cognitive screening, clinical credibility, and founder-facing commercial clarity.'
  },
  '03-Hemostemix-landing-page.png': {
    title: 'Hemostemix — Regenerative Medicine Commercial Story',
    category: 'Biotech & Regenerative Medicine',
    description: 'Investor and commercialization-oriented messaging for ACP-01, vascular disease, regenerative medicine, and clinical-stage biotech audiences.'
  },
  '04-Linzess-landing-page.png': {
    title: 'Linzess — Patient Education Landing Page',
    category: 'Pharma Brand Experience',
    description: 'Consumer-facing healthcare creative with clear condition education, treatment navigation, and conversion-focused page structure.'
  },
  '05-Humira-landing-page.png': {
    title: 'Humira — Patient Support & Brand Experience',
    category: 'Pharma Brand Experience',
    description: 'High-trust patient support creative emphasizing clarity, guided next steps, and approachable branded healthcare communication.'
  },
  '06-Rinvoq-landing-page.png': {
    title: 'Rinvoq — Specialty Pharma Launch Creative',
    category: 'Specialty Pharma',
    description: 'Specialty-brand landing page creative built around audience segmentation, benefit hierarchy, and polished digital execution.'
  },
  '07-City-of-Hope-landing-page.png': {
    title: 'City of Hope — Institutional Healthcare Creative',
    category: 'Health System / Institution',
    description: 'Mission-driven healthcare creative balancing institutional trust, emotional relevance, and clear audience pathways.'
  }
};

function fallbackTitle(file, index) {
  const name = path.basename(file, path.extname(file));
  return name
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase()) || `Case Study ${index + 1}`;
}

fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(path.dirname(outputFile), { recursive: true });

const files = fs.readdirSync(assetsDir)
  .filter(file => allowed.has(path.extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const items = files.map((file, index) => {
  const custom = caseStudyCopy[file] || {};
  return {
    title: custom.title || fallbackTitle(file, index),
    file: `/portfolio/assets/${file}`,
    category: custom.category || 'Healthcare Creative Case Study',
    description: custom.description || 'Healthcare commercialization creative example with launch-ready messaging and conversion-focused execution.'
  };
});

fs.writeFileSync(outputFile, JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2));
console.log(`Case study manifest generated with ${items.length} item(s).`);
