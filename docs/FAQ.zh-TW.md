# 💡 OmniDev 十大靈魂拷問 (FAQ)

這份 Q&A 將解答你對 OmniDev 的所有疑惑，並告訴你為什麼這是你需要的最後一個 AI Coding Agent。

🌍 **[English Version](./FAQ.md)**

---

### Q1: 市面上已經有 OpenClaw、Devin 等全自動 Agent，為什麼我還要用 OmniDev？
**A:** 全自動 Agent（如 OpenClaw）通常依賴如同黑盒子般的無限迴圈，一旦 LLM 產生幻覺（Hallucination），它可能會陷入無限修改同一個檔案的死結，甚至清空你的程式碼。OmniDev 採用業界標準的 **XState 狀態機**，加上 **Human-in-the-loop (人類審核)**，AI 每個大動作前都會先寫好實體計畫 (`plan.md`) 讓你點頭。我們是「可控的結對程式設計夥伴」，絕不暴走。

### Q2: 為什麼不用 Codex CLI 或 Aider 就好？
**A:** Codex CLI 與 Aider 本質上是「搬進終端機的對話框」。當任務跨越多個檔案與長篇幅時，它們會受限於 LLM 短暫的 Context Window，走到第 10 步就忘了第 1 步。OmniDev 擁有 **Crash-Proof 防崩潰檔案規劃系統** 與 **持久化記憶 (`memory.json`)**，不只解決了「金魚腦」問題，還能為你省下海量的 API 費用。

### Q3: 什麼是「防斷線續傳 (Crash-Proof)」？有這麼神奇嗎？
**A:** 想像你正在跑一個大型重構任務，突然不小心關掉終端機或停電。對於其他工具，剛才花費幾萬 Token 建立的 Context 就全沒了。OmniDev 將大腦狀態實體化，重開機後它會瞬間讀取 `.omnidev/plan.md`，無縫接軌從上一秒中斷的地方繼續工作，連 LLM 都不用重新呼叫！

### Q4: 介面看起來很華麗，但這會不會讓工具變得肥大？
**A:** 完全不會。我們採用了 React 的終端機渲染引擎 `Ink`，它非常輕量。流暢的漸層色 (Gradient) 與旋轉動畫 (Spinner) 只是在純文字上加上了精緻的 ANSI 渲染。它讓你擁有極致的 Developer Experience (DX)，但資源消耗與普通 Node.js 腳本無異。

### Q5: 我一定要用 VS Code 才能跑 OmniDev 嗎？
**A:** **完全不需要！** OmniDev 是 Editor-Agnostic（編輯器中立）的。市面上很紅的 Cline 只能在 VS Code 裡面用，但 OmniDev 是一個原生的 CLI 工具。不管你用的是 VS Code、WebStorm、Zed 還是最硬核的 Vim/Neovim，只要能開終端機就能用。

### Q6: OmniDev 會把我的 API Key 或程式碼偷偷上傳嗎？
**A:** 不會。OmniDev 是一個 100% 開源且在 Local 端執行的工具。你的程式碼只會透過官方 SDK (如 `@google/genai` 或 Vercel AI SDK) 傳送到你指定的 LLM 提供商。我們沒有遙測 (Telemetry)，也沒有中介伺服器。

### Q7: OmniDev 支援哪些 LLM？只能用 GPT-4 嗎？
**A:** 我們在底層設計了抽象的 `llm.ts` 介面，目前預設支援 Google 最新的 Gemini 2.5 系列 (因為它速度極快且擁有超大 Context Window)。未來你可以透過修改 `.env` 輕鬆接入 Claude 3.5 Sonnet 或 OpenAI 的模型 (Bring Your Own Key)。

### Q8: 如果我有很多個專案，OmniDev 會搞混嗎？
**A:** 不會。OmniDev 的記憶體結構 (`.omnidev/` 資料夾) 是跟著「專案目錄」走的。在 A 專案裡它會記得 A 專案的技術棧與你的喜好；切換到 B 專案時，它就是一個專屬於 B 專案的專家。

### Q9: 它能幫我自動 Commit 到 Git 嗎？
**A:** 當然！我們吸收了 Aider 的優點。當 OmniDev 成功執行完一個大計畫的節點並經過你同意後，它可以被配置為自動將修改進行 `git commit`，並附上詳盡的修改日誌，讓你的 Git 歷史紀錄乾淨又專業。

### Q10: 這個專案未來的 Roadmap 是什麼？
**A:** 我們目前的架構已經具備了最強的「防崩潰」與「狀態機」底層。下一步是接入完整的 **MCP (Model Context Protocol)**，讓 OmniDev 可以直接操作檔案系統、執行終端機指令、甚至自己去查官方文件。最終目標是成為 AI 時代的終極 CLI 標準配備！
