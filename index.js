#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');

const vars = { name: `laurent` };
const inDir = path.join(__dirname, `template`);
const outDir = path.join(process.cwd(), `output`);
console.log('inDir: ', inDir);

copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err
    createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
    console.log('done!')
  })