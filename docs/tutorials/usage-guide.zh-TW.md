# 📘 OmniDev 完整使用教學

歡迎來到 AI 寫程式的未來。這份教學將引導您如何在自己的專案中安裝並使用 OmniDev。

🌍 **[English Version](./usage-guide.md)**

## 1. 系統需求

- **Node.js**: v18.0.0 或更高版本。
- **Git**: 已安裝並完成基本設定。
- **API Key**: 目前我們預設使用 Google Gemini API。請前往 [Google AI Studio](https://aistudio.google.com/) 獲取金鑰。

## 2. 安裝步驟

複製專案庫並安裝依賴：

```bash
git clone https://github.com/catball912/omnidev-v2.git
cd omnidev-v2
npm install
npm run build
```

## 3. 環境變數設定

OmniDev 需要您的 API Key 才能運作。請在 OmniDev 專案的根目錄下建立一個 `.env` 檔案：

```bash
touch .env
```

打開 `.env` 並填入您的 Gemini API Key：

```env
GEMINI_API_KEY=AIzaSy...
```

## 4. 執行 OmniDev

在終端機中執行以下指令來啟動 Agent：

```bash
node /path/to/omnidev-v2/dist/index.js
```

### 智能體生命週期 (The Agent Loop)

啟動後，OmniDev 會遵循嚴謹且安全的 `XState` 狀態機流程：

1. **恢復記憶 (Restoring Memory)**: 它會檢查 `.omnidev/memory.json` 來喚醒過往的上下文，並檢查 `.omnidev/plan.md` 以進行防斷線恢復。
2. **規劃 (Planning)**: 如果目前沒有未完成的計畫，它會呼叫 LLM 分析您的工作區，並將分步計畫寫入實體的 `.omnidev/plan.md` 檔案。
3. **人類審核 (Reviewing)**: OmniDev 會暫停並在畫面上顯示計畫。
   - **按下 `Enter` 鍵** 表示同意並開始執行。
   - (即將推出) 按下 `R` 退回並要求修改。
4. **執行 (Acting)**: OmniDev 透過 MCP 工具讀寫檔案或執行指令。
5. **完成 (Completed)**: 自動進行 Git Commit 並將本次經驗存入長期記憶。

## 5. 測試防斷線續傳 (Crash Recovery)

您可以親自測試這項殺手級功能！當 OmniDev 停留在「人類審核 (Reviewing)」階段等待您按下 Enter 時，請直接按下 `Ctrl+C` 強制關閉程式。

接著再次執行啟動指令，您會發現它完全跳過了呼叫 API 的規劃階段，瞬間從剛剛中斷的地方完美接續。

祝您在 OmniDev 的幫助下開發愉快！
