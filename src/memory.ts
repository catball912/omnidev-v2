import * as fs from 'fs';
import * as path from 'path';

const MEMORY_DIR = path.join(process.cwd(), '.omnidev');
const MEMORY_FILE = path.join(MEMORY_DIR, 'memory.json');

interface MemoryContext {
    pastTasks: string[];
    userPreferences: Record<string, string>;
}

export function ensureMemoryDir() {
    if (!fs.existsSync(MEMORY_DIR)) {
        fs.mkdirSync(MEMORY_DIR, { recursive: true });
    }
}

export function loadMemory(): MemoryContext {
    if (!fs.existsSync(MEMORY_FILE)) {
        return { pastTasks: [], userPreferences: {} };
    }
    const content = fs.readFileSync(MEMORY_FILE, 'utf8');
    try {
        return JSON.parse(content);
    } catch {
        return { pastTasks: [], userPreferences: {} };
    }
}

export function saveMemory(memory: MemoryContext) {
    ensureMemoryDir();
    fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2), 'utf8');
}
