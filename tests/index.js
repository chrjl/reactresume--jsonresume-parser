import process from 'node:process';
import fs from 'node:fs';

import parser from '../src/index.js';

const arg = process.argv.at(-1);

try {
  const text = fs.readFileSync(arg, 'utf-8');
  const raw = JSON.parse(text);
  const res = parser(raw);

  console.dir(res, { depth: null });
} catch (e) {
  console.log('Input (valid) path to sample JSON as final CLI argument');
  throw e;
}
