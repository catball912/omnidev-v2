# 🚀 Reddit Promotional Post Drafts

This document contains pre-written promotional posts optimized for various Reddit communities. You can copy and paste these directly.

## Target Subreddits
- **r/LocalLLaMA** (Loves technical details, local storage, avoiding context window limits)
- **r/ChatGPTCoding** (Loves practical coding tools, productivity)
- **r/SideProject** (Loves indie hackers, beautiful UI, problem-solving stories)
- **r/programming** / **r/webdev** (Loves open-source, CLI tools, editor-agnostic workflows)

---

## 📝 Option A: The "Pain-Point & Tech" Angle (Best for r/LocalLLaMA & r/ChatGPTCoding)

**Title:** We analyzed 69+ open-source AI Agents. They all suffer from "Context Loss" on crash. So I built a Crash-Proof Agent using XState.

**Body:**
Hey everyone,

I’ve been heavily using tools like Cline, Aider, and OpenHands recently. They are amazing, but I noticed a fatal flaw when working on long, multi-step tasks: **Ephemeral In-Memory Context**. 

If the agent is on step 12 of a 15-step LLM plan and my terminal crashes, my SSH disconnects, or my power drops—*boom*. Thousands of API tokens and 30 minutes of context are instantly wiped out. You have to start completely from scratch.

To solve this, I built **OmniDev v2.0**.

It’s a terminal-native, editor-agnostic AI coding agent, but its core architecture is totally different. We use `XState` to orchestrate the LLM and implemented **Crash-Proof File Planning**.

**How it works:**
1. Instead of holding the master plan in RAM, OmniDev physicalizes its brain state into a deterministic `.omnidev/plan.md` file.
2. It maintains persistent long-term memory across sessions via a `.omnidev/memory.json` file.
3. If you literally pull the plug on the process mid-execution, upon restart, it reads the plan file and seamlessly resumes from the *exact second* it was interrupted. No starting over. No re-prompting the LLM for the architecture.

**Other features:**
* **Editor Agnostic:** Runs purely in your terminal. You get the rich UI of Cline without being locked into VS Code (great for Neovim/Zed users).
* **Extreme TUI:** Built with `Ink` and React. It has gorgeous gradients and spinners but is highly optimized.
* **Auto-Commits:** Like Aider, it auto-commits successful executions with rich LLM logs.

It’s 100% open-source and MIT licensed. Bring your own Gemini/OpenAI keys.

Check out the repo (and the Crash-Recovery Demo): [https://github.com/catball912/omnidev-v2](https://github.com/catball912/omnidev-v2)

Would love to hear your thoughts or architectural roasts!

---

## 📝 Option B: The "Short & Punchy" Angle (Best for r/SideProject)

**Title:** I got tired of VS-Code locked AI Agents losing their memory when my computer crashed. So I built an Editor-Agnostic, Crash-Proof Agent for the terminal.

**Body:**
Hey r/SideProject!

AI coding agents are great, but I hated two things:
1. Most of the good ones force you to use VS Code. I want to use my own editor.
2. If they are in the middle of a long task and your connection drops, they lose all their in-memory context and you waste API tokens starting over.

Meet **[OmniDev](https://github.com/catball912/omnidev-v2)**.

I built it as a native CLI tool using React `Ink` for a beautiful, gradient-rich Terminal UI. 
Under the hood, it uses an `XState` state machine that writes every single LLM planning step to a physical `.omnidev/plan.md` file. If you force-kill the process, you can boot it back up and it resumes exactly where it left off.

It also supports persistent memory across different projects and auto-git commits.

**Tech stack:** Node.js, TypeScript, XState, Ink, Google Gemini API (pluggable).

Repo link: [https://github.com/catball912/omnidev-v2](https://github.com/catball912/omnidev-v2)

Let me know what you think! Does anyone else find the "lost context" issue annoying?
