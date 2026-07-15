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
  },
  '08-AMPEL-Biosolutions-homepage.png': {
    title: 'AMPEL Biosolutions — Precision Medicine Growth',
    category: 'Diagnostics & Precision Medicine',
    description: 'Resume-listed PredictCare client: AI-enabled precision medicine positioning across LuGENE, DermaGENE, and WellGENE solution narratives.'
  },
  '09-AltheaDx-homepage.png': {
    title: 'AltheaDx / IDgenetix — Pharmacogenomics Launch',
    category: 'Diagnostics & Pharmacogenomics',
    description: 'SVP Marketing experience launching mental-health pharmacogenomics, customer strategy, omnichannel activation, and commercial performance.'
  },
  '10-Castle-Biosciences-homepage.png': {
    title: 'Castle Biosciences — Diagnostics Exit Context',
    category: 'Diagnostics & Oncology',
    description: 'Commercial storyline connected to the AltheaDx / IDgenetix exit to Castle Biosciences and specialty diagnostics growth strategy.'
  },
  '11-HerpAlert-homepage.png': {
    title: 'HerpAlert — Digital Health Acquisition Funnel',
    category: 'Digital Health',
    description: 'Resume-listed PredictCare client: direct-to-patient digital health positioning, conversion flow, and care-access messaging.'
  },
  '12-Sanofi-homepage.png': {
    title: 'Sanofi — Omnichannel Patient Engagement',
    category: 'Pharma Omnichannel',
    description: 'Resume-listed client experience spanning performance marketing, adherence, patient growth, and large-scale healthcare CRM programs.'
  },
  '13-AbbVie-homepage.png': {
    title: 'AbbVie — Specialty Brand Strategy',
    category: 'Specialty Pharma',
    description: 'Resume-listed client and brand-highlight experience across immunology, rheumatology, dermatology, patient support, and specialty launches.'
  },
  '14-Takeda-homepage.png': {
    title: 'Takeda — Healthcare Strategy & Experience',
    category: 'Biopharma Strategy',
    description: 'Resume-listed Merkle Health client experience: customer strategy, segmentation, addressable media, and healthcare transformation planning.'
  },
  '15-BMS-homepage.png': {
    title: 'Bristol Myers Squibb — Biopharma Growth Strategy',
    category: 'Biopharma Strategy',
    description: 'Resume-listed client and brand-highlight experience across healthcare strategy, creative, oncology context, and omnichannel commercialization.'
  },
  '16-MD-Anderson-homepage.png': {
    title: 'MD Anderson — Institutional Healthcare Marketing',
    category: 'Health System / Institution',
    description: 'Resume-listed client experience: high-trust institutional healthcare positioning, patient pathways, and mission-driven marketing.'
  },
  '17-Northwell-homepage.png': {
    title: 'Northwell Health — Health System Growth',
    category: 'Health System / Institution',
    description: 'Resume-listed client experience: provider-system marketing, audience strategy, and healthcare experience architecture.'
  },
  '18-Biogen-homepage.png': {
    title: 'Biogen — MS Brand Strategy & Award-Winning Creative',
    category: 'Specialty Pharma / Neurology',
    description: 'Resume-listed Wunderman Health client experience with Tysabri and Avonex; includes Cannes Lion Health recognition for Biogen/Tysabri work.'
  },
  '19-Novo-Nordisk-homepage.png': {
    title: 'Novo Nordisk — Diabetes Launch Experience',
    category: 'Pharma Launch',
    description: 'Resume-listed client and brand experience around Victoza, diabetes, patient education, and growth-oriented launch planning.'
  },
  '20-Amgen-homepage.png': {
    title: 'Amgen — Biologic Brand Growth',
    category: 'Biotech / Biologics',
    description: 'Resume-listed client experience with biologic-brand acquisition-to-retention programs and performance-oriented healthcare marketing.'
  },
  '21-GSK-homepage.png': {
    title: 'GSK — Digital + TV Performance Campaigns',
    category: 'Pharma Performance Marketing',
    description: 'Resume-listed client experience including high-scale digital/TV campaign strategy, Levitra/Requip brand work, and measurable NRx lift.'
  },
  '22-Merck-homepage.png': {
    title: 'Merck — Digital Health Platform Foundations',
    category: 'Pharma Digital Transformation',
    description: 'Resume-listed Merck/MSD experience launching MerckSource and MerckMedicus and supporting e-marketing across major global brands.'
  },
  '23-Pfizer-homepage.png': {
    title: 'Pfizer / Wyeth — E-Marketing Center of Excellence',
    category: 'Pharma Digital Transformation',
    description: 'Wyeth/Pfizer-era experience building e-business capabilities across consumer communications, e-marketing, and major brand franchises.'
  },
  '24-Ironwood-Pharmaceuticals-homepage.png': {
    title: 'Ironwood — Linzess Customer Experience Launch',
    category: 'Pharma Launch',
    description: 'Senior Director experience guiding Linzess launch customer experience across patient/professional marketing, digital, search, social, and content.'
  },
  '25-AstraZeneca-homepage.png': {
    title: 'AstraZeneca / MedImmune — Specialty Brand Experience',
    category: 'Specialty Pharma',
    description: 'Resume-listed AstraZeneca/MedImmune experience connected to Synagis and specialty healthcare brand strategy.'
  },
  '26-Bayer-homepage.png': {
    title: 'Bayer / Berlex — Women’s Health + MS Experience',
    category: 'Pharma Brand Experience',
    description: 'Resume-listed Bayer/Berlex brand experience across Yaz, Betaseron, women’s health, multiple sclerosis, and branded healthcare communications.'
  },
  '27-AARP-homepage.png': {
    title: 'AARP — Senior Health Engagement',
    category: 'Senior Health / Nonprofit',
    description: 'Resume-listed AARP Health experience: senior-health audience strategy, consumer engagement, and trusted health-content positioning.'
  },
  '28-Leukemia-Lymphoma-Society-homepage.png': {
    title: 'Leukemia & Lymphoma Society — Nonprofit Health Growth',
    category: 'Nonprofit Healthcare',
    description: 'Resume-listed nonprofit healthcare client experience with mission-driven audience engagement and high-trust disease-area communications.'
  },
  '29-Susan-G-Komen-homepage.png': {
    title: 'Susan G. Komen — Mission-Driven Healthcare Marketing',
    category: 'Nonprofit Healthcare',
    description: 'Resume-listed nonprofit health experience: cancer mission storytelling, donor/patient audience relevance, and trusted healthcare communication.'
  },
  '30-National-MS-Society-homepage.png': {
    title: 'National MS Society — Neurology Community Engagement',
    category: 'Nonprofit Healthcare / Neurology',
    description: 'Resume-listed NMSS experience: multiple-sclerosis community education, advocacy-oriented communication, and audience strategy.'
  },
  '31-Boehringer-Ingelheim-homepage.png': {
    title: 'Boehringer Ingelheim — Healthcare Strategy Planning',
    category: 'Biopharma Strategy',
    description: 'Resume-listed Merkle Health client experience across healthcare strategy, planning, customer segmentation, and digital transformation roadmaps.'
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
