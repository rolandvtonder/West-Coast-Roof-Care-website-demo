/**
 * Builds the demo and publishes it to the repo's gh-pages branch, which
 * GitHub Pages serves at https://rolandvtonder.github.io/West-Coast-Roof-Care-website-demo/
 * The branch only ever holds the latest build, so it is force-pushed.
 */
import {execSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const REPO = 'https://github.com/rolandvtonder/West-Coast-Roof-Care-website-demo.git';
const run = (cmd, cwd) => execSync(cmd, {stdio: 'inherit', cwd});

run('node scripts/build-demo.mjs');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wcrc-pages-'));
fs.cpSync('dist-demo', tmp, {recursive: true});
run('git init -q -b gh-pages', tmp);
run('git add -A', tmp);
run(`git commit -q -m "Deploy demo ${new Date().toISOString().slice(0, 16).replace('T', ' ')}"`, tmp);
run(`git push -f ${REPO} gh-pages`, tmp);
fs.rmSync(tmp, {recursive: true, force: true});
console.log('\nDemo published: https://rolandvtonder.github.io/West-Coast-Roof-Care-website-demo/');
