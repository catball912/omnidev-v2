import * as fs from 'fs';
import * as path from 'path';

const PLAN_DIR = path.join(process.cwd(), '.omnidev');
const PLAN_FILE = path.join(PLAN_DIR, 'plan.md');

export function ensurePlanDir() {
    if (!fs.existsSync(PLAN_DIR)) {
        fs.mkdirSync(PLAN_DIR, { recursive: true });
    }
}

export function writePlan(planItems: string[]) {
    ensurePlanDir();
    const content = `# OmniDev Persistent Plan\n\n` + planItems.map((item, i) => `- [ ] ${item}`).join('\n');
    fs.writeFileSync(PLAN_FILE, content, 'utf8');
}

export function readPlan(): string[] | null {
    if (!fs.existsSync(PLAN_FILE)) {
        return null;
    }
    const content = fs.readFileSync(PLAN_FILE, 'utf8');
    const lines = content.split('\n');
    const items = lines
        .filter(line => line.startsWith('- [ ]') || line.startsWith('- [x]'))
        .map(line => line.replace('- [ ] ', '').replace('- [x] ', '').trim());
    
    return items.length > 0 ? items : null;
}
