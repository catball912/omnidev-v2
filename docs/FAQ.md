# 💡 OmniDev Top 10 FAQ

This Q&A will resolve all your doubts about OmniDev and explain why it's the last AI Coding Agent you'll ever need.

🌍 **[繁體中文版 (Traditional Chinese)](./FAQ.zh-TW.md)**

---

### Q1: There are already fully autonomous agents like OpenClaw and Devin. Why should I use OmniDev?
**A:** Fully autonomous agents (like OpenClaw) often rely on black-box-like infinite loops. If the LLM hallucinates, it might get stuck in a loop repeatedly editing the same file, or even wipe out your codebase. OmniDev uses industry-standard **XState state machines** combined with **Human-in-the-loop validation**. Before making any major moves, the AI writes a physical plan (`plan.md`) for you to approve. We are a "controllable pair programming partner", preventing runaway AI execution.

### Q2: Why not just use Codex CLI or Aider?
**A:** Codex CLI and Aider are essentially "chatboxes inside a terminal." When a task spans multiple files and is lengthy, they suffer from the limits of the LLM's Context Window—by step 10, they've forgotten step 1. OmniDev features a **Crash-Proof File Planning System** and **Persistent Memory (`memory.json`)**, entirely eliminating this "goldfish memory" problem and saving you massive API costs.

### Q3: What is "Crash-Proof"? Is it really that magical?
**A:** Imagine running a massive refactoring task. Suddenly, you accidentally close your terminal or your power goes out. With other tools, the context built from spending thousands of tokens is gone. OmniDev physicalizes its brain state. Upon restart, it instantly reads `.omnidev/plan.md` and seamlessly resumes exactly where it left off, without even needing to call the LLM to remember what to do!

### Q4: The interface looks gorgeous, but doesn't that make the tool bloated?
**A:** Not at all. We use React's terminal rendering engine `Ink`, which is incredibly lightweight. The smooth gradients and spinners are simply elegant ANSI rendering on top of plain text. It gives you the ultimate Developer Experience (DX) while consuming no more resources than a standard Node.js script.

### Q5: Do I have to use VS Code to run OmniDev?
**A:** **Absolutely not!** OmniDev is Editor-Agnostic. While popular tools like Cline only work inside VS Code, OmniDev is a native CLI tool. Whether you use VS Code, WebStorm, Zed, or hardcore Vim/Neovim, as long as you can open a terminal, you can use OmniDev.

### Q6: Will OmniDev stealthily upload my API Keys or source code?
**A:** No. OmniDev is a 100% open-source tool that runs entirely locally. Your code is only sent to your specified LLM provider via official SDKs (like `@google/genai` or Vercel AI SDK). We have zero telemetry and no middleman servers.

### Q7: Which LLMs does OmniDev support? Is it only GPT-4?
**A:** We designed an abstract `llm.ts` interface under the hood. Currently, it defaults to Google's latest Gemini 2.5 series (due to its extreme speed and massive context window). In the future, you can easily connect Claude 3.5 Sonnet or OpenAI models just by tweaking the `.env` file (Bring Your Own Key).

### Q8: If I have multiple projects, will OmniDev get confused?
**A:** No. OmniDev's memory structure (the `.omnidev/` folder) is tied to the "project directory." In Project A, it remembers Project A's tech stack and your preferences; switch to Project B, and it becomes an exclusive expert for Project B.

### Q9: Can it automatically commit to Git for me?
**A:** Definitely! We absorbed Aider's best feature. When OmniDev successfully finishes a major step in the plan and you approve it, it can automatically perform a `git commit` with a detailed changelog, keeping your Git history pristine and professional.

### Q10: What is the future Roadmap for this project?
**A:** Our current architecture already boasts the strongest "crash-proof" and "state machine" foundations. The next step is integrating the full **MCP (Model Context Protocol)**, allowing OmniDev to directly manipulate file systems, execute terminal commands, and even search official docs on its own. The ultimate goal is to become the ultimate standard-issue CLI for the AI era!
