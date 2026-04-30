const fs = require('fs');
const path = require('path');

const dataVariables = [
  'personal', 'links', 'blog', 'projects', 'experience', 'skills', 
  'research', 'lifeGallery', 'nonTechSkills', 'beme', 'githubFallback'
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Fix alias paths globally
  content = content.replace(/from ["']@\/data\/portfolioData["']/g, () => {
    const depth = filePath.split(path.sep).length - filePath.indexOf('portfolio') - 2;
    // this depth calculation might be tricky, let's just count path.sep from app/ to the file
    // file: app/components/About.jsx -> 2 folders -> ../../data/portfolioData
    // file: app/api/github/route.js -> 3 folders -> ../../../data/portfolioData
    // Better calculation:
    const relPath = path.relative(path.dirname(filePath), path.join(process.cwd(), 'data', 'portfolioData'));
    return `from "${relPath.replace(/\\/g, '/')}"`;
  });

  // Collect variables used in the file
  let usedVars = [];
  dataVariables.forEach(v => {
    // Basic regex to find if variable is used as an identifier
    const regex = new RegExp(`\\b${v}\\b`);
    if (regex.test(content)) {
      usedVars.push(v);
    }
  });

  // Find existing import from portfolioData
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+["'](\.\.\/)*\.\.\/data\/portfolioData["']/;
  const match = content.match(importRegex);
  
  if (match || usedVars.length > 0) {
    // If it has the import, update it with correct variables
    // Or if it doesn't have it but uses variables, add it.
    const relPath = path.relative(path.dirname(filePath), path.join(process.cwd(), 'data', 'portfolioData')).replace(/\\/g, '/');
    const newImportLine = `import { ${usedVars.join(', ')} } from "${relPath}";`;
    
    if (match) {
      // Don't replace if usedVars is empty and match exists? Actually, if match exists, replace it.
      if (usedVars.length > 0) {
          content = content.replace(importRegex, newImportLine);
      } else {
          // Remove unused import
          content = content.replace(importRegex, '');
      }
    } else if (usedVars.length > 0) {
      // Add after first import or at top
      content = newImportLine + '\n' + content;
    }
  }

  // Fix .map()
  // Match `variable.map` and replace with `(variable || []).map`
  // We only do this for variables from portfolioData that are arrays
  const arrayVars = ['projects', 'experience', 'research', 'blog', 'lifeGallery', 'nonTechSkills', 'beme'];
  
  arrayVars.forEach(v => {
    // v.map( -> (v || []).map(
    const mapRegex = new RegExp(`\\b${v}\\.map\\(`, 'g');
    content = content.replace(mapRegex, `(${v} || []).map(`);
    
    // Also handle nested ones if we can, like projects.tech.map
    // But it's easier to just do a blanket regex for something like `(\w+)\.map\(` if we want, but let's stick to user request.
  });

  // Blanket fix for mapping over specific known array properties
  // e.g. item.points.map -> (item.points || []).map
  content = content.replace(/\b([a-zA-Z0-9_]+)\.points\.map\(/g, '($1.points || []).map(');
  content = content.replace(/\b([a-zA-Z0-9_]+)\.tech\.map\(/g, '($1.tech || []).map(');
  content = content.replace(/\b([a-zA-Z0-9_]+)\.tags\.map\(/g, '($1.tags || []).map(');
  content = content.replace(/\b([a-zA-Z0-9_]+)\.focusAreas\.map\(/g, '($1.focusAreas || []).map(');
  content = content.replace(/\b([a-zA-Z0-9_]+)\.featuredRepos\.map\(/g, '($1.featuredRepos || []).map(');
  content = content.replace(/\bnavLinks\.map\(/g, '(navLinks || []).map(');
  content = content.replace(/\bdropdownLinks\.map\(/g, '(dropdownLinks || []).map(');
  content = content.replace(/\bFILTERS\.map\(/g, '(FILTERS || []).map(');
  content = content.replace(/\bCATEGORIES\.map\(/g, '(CATEGORIES || []).map(');
  content = content.replace(/\bitems\.map\(/g, '(items || []).map(');
  content = content.replace(/\bfiltered\.map\(/g, '(filtered || []).map(');
  content = content.replace(/\bdata\?\.featuredRepos\.map\(/g, '((data?.featuredRepos) || []).map(');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

processDirectory(path.join(process.cwd(), 'app'));
