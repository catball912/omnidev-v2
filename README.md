# 🚀 OmniDev: The Next-Generation AI Coding Agent

<div align="center">
  <p><strong>OmniDev</strong> is a terminal-native, editor-agnostic AI coding agent built for the 2026 developer era. We analyzed the top 100 open-source agents and combined all their strengths while eliminating their weaknesses.</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

  <p>🌍 <strong><a href="./README.zh-TW.md">繁體中文版介紹 (Traditional Chinese)</a></strong></p>
</div>

## 🌟 Why OmniDev is Superior

> **🔥 HOT: Read our new tutorial: [Crash-Proof Demo: Why OmniDev is #1](./docs/tutorials/crash-proof-demo.md)**
> See how OmniDev survives a fatal system crash and seamlessly resumes from exactly where it left off, saving you time and API tokens.

> **💡 FAQ: [Top 10 Soul-Searching Questions: Why this is the last AI Agent you'll need](./docs/FAQ.md)**
> We answer the top 10 most critical questions comparing OmniDev against OpenClaw, Devin, Aider, and Codex CLI.

> **📘 Guide: [Step-by-Step Usage Guide](./docs/tutorials/usage-guide.md)**
> Learn how to install, configure your API keys, and run OmniDev.

We stand on the shoulders of giants. OmniDev incorporates the best paradigms from leading projects:

1. **🧠 Persistent Memory (Inspired by `agentmemory` & `claude-mem`)**
   OmniDev doesn't suffer from "Context Loss." It retains long-term memory across sessions using local vector storage. It remembers your codebase quirks and personal preferences.
2. **📁 Crash-Proof File Planning (Inspired by `planning-with-files`)**
   Instead of keeping multi-step plans in ephemeral RAM, OmniDev generates a deterministic `.omnidev/plan.md`. If your computer crashes, OmniDev reads the file and resumes exactly where it left off.
3. **🎨 Extreme Terminal Aesthetics (Inspired by `crush` & `pi`)**
   Powered by `Ink`, `ink-gradient`, and `ink-spinner`, our Terminal UI is more beautiful than most IDE extensions. You get a rich, interactive, animated dashboard.
4. **⚙️ Robust State Machine Orchestration (Inspired by `ruflo` & `goose`)**
   We don't reinvent the wheel. Under the hood, OmniDev uses `XState` to manage complex multi-agent swarms deterministically.
5. **🌳 Git-Centric Automation (Inspired by `aider`)**
   Every successful node execution is auto-committed with rich context.
6. **🌍 Editor Agnostic (Inspired by `OpenHands`)**
   You get the rich UI of `Cline` without being locked into VS Code. Use Neovim, Zed, or whatever you want.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/catball912/omnidev-v2.git
cd omnidev-v2

# Install dependencies
npm install

# Build
npm run build

# Run the agent
node dist/index.js
```

## 📜 License
MIT License - free to use and modify for the developer community!
