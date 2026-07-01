# 🚀 OmniDev: 次世代 AI 寫扣助理

<div align="center">
  <p><strong>OmniDev</strong> 是一個原生終端機、不綁定編輯器的 AI Coding Agent，專為 2026 年的開發者打造。我們分析了市面上前 100 大開源 Agent，結合了它們的所有優點，並徹底消除了它們的致命缺陷。</p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)](https://www.typescriptlang.org/)

  <p>🌍 <strong><a href="./README.md">English Version</a></strong></p>
</div>

## 🌟 為什麼 OmniDev 是最強的？

> **🔥 熱門：閱讀我們的最新實戰教學：[防斷線實戰展示：OmniDev 為何是同類產品第一名？](./docs/tutorials/crash-proof-demo.zh-TW.md)**
> 見證 OmniDev 如何在系統遭遇致命當機後，一秒無縫恢復狀態，為您節省大量時間與 API Token。

> **💡 常見問題：[十大靈魂拷問：為什麼這將是你需要的最後一個 AI Agent？](./docs/FAQ.zh-TW.md)**
> 我們針對 OpenClaw, Devin, Aider 與 Codex CLI 進行了深度對比與解答。

> **📘 教學：[OmniDev 完整使用教學](./docs/tutorials/usage-guide.zh-TW.md)**
> 學習如何安裝、設定 API Key 以及使用 OmniDev。

我們站在巨人的肩膀上。OmniDev 融合了各大頂尖專案的最佳典範：

1. **🧠 持久化記憶 (靈感來自 `agentmemory` & `claude-mem`)**
   OmniDev 沒有「失憶症」。它透過本地儲存保留了跨會話的長期記憶，能記住你程式碼庫的怪癖與你的個人偏好。
2. **📁 防崩潰檔案規劃系統 (靈感來自 `planning-with-files`)**
   OmniDev 不會把多步驟計畫放在隨時會消失的 RAM 裡面，而是產生一個實體的 `.omnidev/plan.md` 檔案。如果你的電腦當機，OmniDev 會讀取檔案並從中斷的地方精準接續。
3. **🎨 極致終端美學 (靈感來自 `crush` & `pi`)**
   透過 `Ink`、`ink-gradient` 與 `ink-spinner`，我們的終端機 UI 比大多數的 IDE 擴充套件還要美觀，帶給您豐富、互動式且具備動畫的儀表板。
4. **⚙️ 穩健的狀態機編排 (靈感來自 `ruflo` & `goose`)**
   我們不重複造輪子。在底層，OmniDev 使用 `XState` 來決定性地管理複雜的多智能體協作。
5. **🌳 以 Git 為中心的自動化 (靈感來自 `aider`)**
   每一個成功執行的節點都會自動附帶豐富的上下文並進行 Git Commit。
6. **🌍 不綁定編輯器 (靈感來自 `OpenHands`)**
   您能享有如 `Cline` 般華麗的 UI，卻不需要被綁死在 VS Code 裡。隨心所欲地使用 Neovim、Zed 或任何您喜歡的編輯器。

## 🚀 快速開始

```bash
# Clone 專案
git clone https://github.com/catball912/omnidev-v2.git
cd omnidev-v2

# 安裝依賴
npm install

# 編譯
npm run build

# 執行 Agent
node dist/index.js
```

## 📜 授權條款
MIT License - 免費供開發者社群使用與修改！
