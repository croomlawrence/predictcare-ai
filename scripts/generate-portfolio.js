const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'portfolio', 'assets');
const outputFile = path.join(__dirname, '..', 'public', 'portfolio', 'portfolio.json');
const allowed = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);

fs.mkdirSync(assetsDir, { recursive: true });
fs.mkdirSync(path.dirname(outputFile), { recursive: true });

const files = fs.readdirSync(assetsDir)
  .filter(file => allowed.has(path.extname(file).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

const items = files.map((file, index) => {
  const name = path.basename(file, path.extname(file));
  const title = name
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  return {
    title: title || `Creative ${index + 1}`,
    file: `/portfolio/assets/${file}`,
    category: 'Creative Portfolio',
    description: 'Healthcare commercialization creative asset.'
  };
});

fs.writeFileSync(outputFile, JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2));
console.log(`Portfolio manifest generated with ${items.length} item(s).`);
