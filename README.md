# LWTG MITS System

**Lone Wolf Trading Group 🐺 — Multi-Instrument Trading System**

Fully automated, rules-based futures trading system for prop firm accounts. Runs on TradingView, executes through Ghost Bot, logs everything automatically to Google Sheets, and sends live trade alerts via Telegram.

---

## ⚡ Start Here

**New to LWTG MITS? Do these three things:**

1. **Download the latest release** → [Releases](https://github.com/lonewolftradinggroup-ai/lwtg-mits-system/releases)
2. **Read `README FIRST`** — it's in the release assets. Takes 5 minutes. Saves hours.
3. **Copy the Trading Log template** → [Click here to copy to your Google Drive](https://docs.google.com/spreadsheets/d/1DKvFmXK9rvjNVBEdb-dQ6eCoCNe9UOJ-r-tzGqT1elM/copy)

> ⚠️ **NEVER download the Trading Log as `.xlsx`** — importing xlsx into Google Sheets corrupts all date columns, breaks every Daily Summary formula, and causes phantom open positions in the Trade Manager. Always use the Google Sheets copy link above.

---

## 📦 What's in the Release

| File | Description |
|---|---|
| `LWTG_MITS_v3_1_16.pine` | Strategy script — paper trading / strategy tester only |
| `LWTG_MITS_v4_1_16.pine` | Indicator script — live Ghost execution path |
| `LWTG_MITS_Trade_Logging_v7_9_35.js` | Google Apps Script — webhook logging + Telegram alerts |
| `LWTG_MITS_README_FIRST_v2.docx` | Start here — install guide and v3/v4 comparison |
| `LWTG_MITS_User_Guide_v4_7.docx` | Full system documentation |

---

## 🛠 System Overview

| Component | What it does |
|---|---|
| **TradingView Pine v3.x** | Scores market conditions, fires signals on bar close. Paper/validation only. |
| **TradingView Pine v4.x** | Same logic, fires intrabar. Live execution path to Ghost + GAS logging. |
| **Ghost Bot** | Receives execution alerts, places bracket orders at Tradovate/Apex. |
| **Google Apps Script** | Receives logging alerts, writes AlertLog + TradeLog, sends Telegram alerts. |
| **Google Sheets** | Stores all trade history. AlertLog, TradeLog, Daily Summary, Session Analysis. |
| **Trade Manager** | Live dashboard — positions, P&L, exit controls. |
| **Trade Journal** | Calendar view of historical trades. |

---

## 📊 Live Apps

No download needed — runs in your browser:

| App | Link |
|---|---|
| Trade Manager | [Open](https://lonewolftradinggroup-ai.github.io/lwtg-trade-manager) |
| Trade Journal | [Open](https://lonewolftradinggroup-ai.github.io/lwtg-journal) |
| Fund Manager | [Open](https://lonewolftradinggroup-ai.github.io/lwtg-fund-manager) |
| Live Performance Dashboard | [Open](https://lonewolftradinggroup-ai.github.io/lwtg-performance) |

---

## 🎯 Instruments

| Instrument | Timeframe | Regime Gate | Block Window (CT) |
|---|---|---|---|
| MES | 15m | ✅ ON | None |
| MNQ | 15m | ❌ OFF | 10:00–12:00 |
| MGC | 5m | ✅ ON | 10:00–12:00 |
| M2K | 3m | ❌ OFF | 13:00–18:00 |

All settings are baked into the preset — selecting your instrument loads the optimized configuration automatically. See Section 4.5 of the User Guide for a full explanation of the override architecture.

---

## ⚙️ Architecture Rules

These are non-negotiable. Violating them breaks things in ways that are hard to debug:

- **v4.x indicator** = live Ghost execution path. Always.
- **v3.x strategy** = paper trading / strategy tester only. NEVER point to a real Ghost URL.
- **GAS deployment** = always publish to the EXISTING versioned deployment. NEVER create a new one. The URL must never change.
- **TradeLog edits** = always make directly in Google Sheets. NEVER import from xlsx.
- **Google Sheets template** = always copy via the Sheets link. NEVER download as xlsx.
- **Sheet timezone** = America/Chicago. Must match GAS project timezone. Mismatch causes 2-hour timestamp offsets and phantom open positions.

---

## 💬 Community

Questions, issues, and discussion → [GitHub Discussions](https://github.com/lonewolftradinggroup-ai/lwtg-mits-system/discussions)

---

*Not financial advice. Past performance is not indicative of future results. 🐺*
