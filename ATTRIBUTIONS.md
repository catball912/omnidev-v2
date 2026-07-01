# Attributions and Prior Art

OmniDev is built on the shoulders of giants. While all code in this repository is an independent implementation (clean-room), our architectural decisions were deeply influenced by studying the following outstanding open-source projects. 

Per our workspace rules (`AGENTS.md`), we actively attribute any external design choices here.

| Project Name | License | What Was Adapted / Inspired |
|--------------|---------|-----------------------------|
| **Aider** (`paul-gauthier/aider`) | Apache-2.0 | Git-centric automation. The concept of auto-committing with rich LLM-generated commit messages upon task completion. |
| **OpenHands** (`All-Hands-AI/OpenHands`) | MIT | Editor-agnostic philosophy. Decoupling the agent from VS Code extensions to run natively in any terminal/environment. |
| **AgentMemory** | MIT | Persistent memory concepts for LLMs. Our `.omnidev/memory.json` approach was inspired by their vectors and short/long-term memory strategies. |
| **Claude-Mem** | MIT | The lightweight local JSON-based approach for persistent context retention across sessions. |
| **Planning-with-files** | MIT | The core "Crash-Proof File Planning" system. Translating ephemeral LLM planning steps into a concrete `.omnidev/plan.md` file to prevent context loss on crashes. |
| **Crush / Pi** | MIT | Extreme terminal aesthetics. Using `Ink` and gradients to build a rich UI within the terminal environment. |
| **Goose** (`block/goose`) | Apache-2.0 | State machine orchestration for robust developer agents. Our use of `XState` to cleanly control the agent lifecycle draws from this paradigm. |
