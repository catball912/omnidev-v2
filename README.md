# 🚀 OmniDev: The Next-Generation AI Coding Agent

<div align="center">
  <p><strong>OmniDev</strong> is a terminal-native, editor-agnostic AI coding agent built for the 2026 developer era. We analyzed the top 100 open-source agents and combined all their strengths while eliminating their weaknesses.</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)
</div>

## 🌟 Why OmniDev is Superior

> **🔥 HOT: Read our new tutorial: [實戰展示：OmniDev 為何是同類產品第一名？](./docs/tutorials/crash-proof-demo.md)**
> See how OmniDev survives a fatal system crash and seamlessly resumes from exactly where it left off, saving you time and API tokens.

> **💡 FAQ: [十大靈魂拷問：為什麼這將是你需要的最後一個 AI Agent？](./docs/FAQ.md)**
> We answer the top 10 most critical questions comparing OmniDev against OpenClaw, Devin, Aider, and Codex CLI.

We stand on the shoulders of giants. OmniDev incorporates the best paradigms from leading projects:

1. **🧠 Persistent Memory (Inspired by `agentmemory` & `claude-mem`)**
   OmniDev doesn't suffer from "Context Loss." It retains long-term memory across sessions using local vector storage. It remembers your codebase quirks and personal preferences.
2. **📁 Crash-Proof File Planning (Inspired by `planning-with-files`)**
   Instead of keeping multi-step plans in ephemeral RAM, OmniDev generates a deterministic `.omnidev/plan.md`. If your computer crashes, OmniDev reads the file and resumes exactly where it left off. **[👉 See the Demo](./docs/tutorials/crash-proof-demo.md)**
3. **🎨 Extreme Terminal Aesthetics (Inspired by `crush` & `pi`)**
   Powered by `Ink`, `ink-gradient`, and `ink-spinner`, our Terminal UI is more beautiful than most IDE extensions. You get a rich, interactive, animated dashboard.
4. **⚙️ Robust State Machine Orchestration (Inspired by `ruflo` & `goose`)**
   We don't reinvent the wheel. Under the hood, OmniDev uses `XState` and LangGraph to manage complex multi-agent swarms deterministically.
5. **🌳 Git-Centric Automation (Inspired by `aider`)**
   Every successful node execution is auto-committed with rich context.
6. **🌍 Editor Agnostic (Inspired by `OpenHands`)**
   You get the rich UI of `Cline` without being locked into VS Code. Use Neovim, Zed, or whatever you want.

## 🚀 Quick Start

```bash
# Install globally
npm install -g omnidev

# Run in any project directory
omnidev start
```

## 📜 License
MIT License - free to use and modify for the developer community!
