# 📘 OmniDev Step-by-Step Usage Guide

Welcome to the future of AI coding. This guide will walk you through installing and using OmniDev in your own projects.

🌍 **[繁體中文版 (Traditional Chinese)](./usage-guide.zh-TW.md)**

## 1. Prerequisites

- **Node.js**: v18.0.0 or higher.
- **Git**: Installed and configured.
- **API Key**: Currently, we default to the Google Gemini API. Get yours at [Google AI Studio](https://aistudio.google.com/).

## 2. Installation

Clone the repository and install it globally (or run it locally):

```bash
git clone https://github.com/catball912/omnidev-v2.git
cd omnidev-v2
npm install
npm run build
```

## 3. Configuration

OmniDev needs to know your API key to operate. In the root of the OmniDev project (or your target workspace), create a `.env` file:

```bash
touch .env
```

Open `.env` and add your Gemini API Key:

```env
GEMINI_API_KEY=AIzaSy...
```

## 4. Running OmniDev

Navigate to the codebase you want OmniDev to work on, and execute the agent:

```bash
node /path/to/omnidev-v2/dist/index.js
```

### The Agent Loop

Once started, OmniDev follows a strict, safe `XState` loop:

1. **Restoring Memory**: It checks for `.omnidev/memory.json` to recall past contexts and `.omnidev/plan.md` for crash recovery.
2. **Planning**: If no active plan exists, it contacts the LLM to analyze your workspace and writes a step-by-step checklist to `.omnidev/plan.md`.
3. **Reviewing (Human-in-the-loop)**: OmniDev pauses and shows you the plan. 
   - **Press `Enter`** to approve.
   - (Coming soon) Press `R` to reject and ask for a revision.
4. **Acting**: OmniDev uses MCP tools to read/write files and execute commands.
5. **Completed**: It auto-commits to Git and updates the memory.

## 5. Crash Recovery

Try the crash recovery feature yourself! When OmniDev is on the "Reviewing" step, press `Ctrl+C` to kill the process. 
When you run it again, it will skip the API call and immediately resume exactly where you left off.

Enjoy building software at the speed of thought!
