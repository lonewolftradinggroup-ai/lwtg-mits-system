# LWTG MITS System

**Lone Wolf Trading Group 🐺 — Multi-Instrument Trading System**

Fully automated, rules-based futures trading system for prop firm accounts. Runs on TradingView, executes through Ghost Bot, logs everything automatically to Google Sheets, and sends live trade alerts via Telegram.

This system represents hundreds of hours of development, backtesting, optimization, live trading, and iteration. It is provided to this community free of charge. Please read the documentation before asking questions — the answers are almost certainly already there.

---

## 🛑 READ THIS FIRST

**Seriously. Read it before you do anything else.**

Every common setup mistake, every "why isn't it working" question, every timezone issue, every webhook failure — it's covered in the User Guide. Five minutes of reading saves hours of troubleshooting.

1. **Download the latest release** → [Releases](https://github.com/lonewolftradinggroup-ai/lwtg-mits-system/releases)
2. **Read `LWTG_MITS_README_FIRST.docx`** — it's in the release assets. Short, direct, essential.
3. **Read `LWTG_MITS_User_Guide.docx`** — also in the release assets. Every setting, every component, every troubleshooting step is in there. If you have a question, check here first.
4. **Copy the Trading Log template** → [Click here to copy to your Google Drive](https://docs.google.com/spreadsheets/d/1v7EnR1MQfvfV01oCR74omKWT3sHnV07AdzfMAaucpZQ/edit?usp=sharing)

> ⚠️ **NEVER download the Trading Log as `.xlsx`** — importing xlsx into Google Sheets corrupts all date columns, breaks every Daily Summary formula, and causes phantom open positions in the Trade Manager. Always use the Google Sheets copy link above. This is not a suggestion.

---

## 📦 What's in the Release

Files are named with a version suffix (e.g. `_v4_1_17`). The **latest version is always the highest number in the release assets.** When a new version drops, the old one is kept for reference. Always use the highest-numbered version of each file.

| File | Description |
|---|---|
| `LWTG_MITS_v3_x_xx.pine` | Strategy script — paper trading / strategy tester only |
| `LWTG_MITS_v4_x_xx.pine` | Indicator script — live Ghost execution path |
| `LWTG_MITS_Trade_Logging_vX_X_XX.js` | Google Apps Script — webhook logging + Telegram alerts |
| `LWTG_MITS_Trade_Manager_vX_X.html` | Live position dashboard |
| `LWTG_MITS_Journal_vX_X.html` | Historical trade journal |
| `LWTG_MITS_README_FIRST.docx` | Start here — install guide and v3/v4 comparison |
| `LWTG_MITS_User_Guide.docx` | Full system documentation — read this |

---

## 🔬 Backtest & Validation Suite

For developers and advanced users who want to verify the published results or run their own optimizations.

The validation suite includes the full Python backtest engine, corrected instrument presets, per-instrument walk-forward optimizers (MES, MNQ, MGC, M2K), and the Pine v3.x strategy script for TradingView strategy tester validation.

This is the exact engine used to produce the published results. Hundreds of hours of development went into building, testing, and validating it. It is shared here because transparency matters — if you want to verify the numbers, here are the tools to do it.

**Included:**
- `mits_backtest_v2.py` — core engine, all 9 confluences, RSI/ADX filters, EOD gate, ATR bracket
- `corrected_presets.py` — source-of-truth instrument parameters with full optimization history
- `mits_optimizer.py` — Phase 2 sequential parameter optimizer (all instruments)
- `optimize_mes.py`, `optimize_mnq.py`, `optimize_mgc.py`, `optimize_m2k.py` — per-instrument walk-forward optimizers
- `LWTG_MITS_v3_x_xx.pine` — Pine strategy script for TV strategy tester
- Full README with Databento data setup, timezone notes, known limitations, and 4-step optimization workflow

Contact via [GitHub Discussions](https://github.com/lonewolftradinggroup-ai/lwtg-mits-system/discussions) to request access.

---

## 🛠 System Overview

| Component | What it does |
|---|---|
| **TradingView Pine v3.x** | Scores market conditions, fires signals on bar close. Paper/validation only. |
| **TradingView Pine v4.x** | Same logic, fires intrabar. Live execution path to Ghost + GAS logging. |
| **Ghost Bot** | Receives execution alerts, places bracket orders at Tradovate/Apex. |
| **Google Apps Script** | *(Optional)* Receives logging alerts, writes AlertLog + TradeLog, sends Telegram alerts. Not required for live trading. |
| **Google Sheets** | Stores all trade history. AlertLog, TradeLog, Daily Summary, Session Analysis. |
| **Trade Manager** | Live dashboard — positions, P&L, exit controls. |
| **Trade Journal** | Calendar view of historical trades. |

> 💡 **GAS logging is optional.** The trading system works without it — TradingView fires signals, Ghost executes orders at your broker. GAS adds trade logging, performance tracking, Telegram alerts, and the Trade Manager dashboard. If you just want signals and execution, skip GAS entirely and add it later when you're ready.

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
| M2K | 15m | ❌ OFF | 13:00–18:00 |

All settings are baked into the preset — selecting your instrument loads the optimized configuration automatically. The settings panel in TradingView shows override inputs, not active values. See the User Guide for a full explanation. The HUD on your chart is the source of truth.

---

## ⚙️ Architecture Rules

These are non-negotiable. Violating them breaks things in ways that are hard to debug:

- **v4.x indicator** = live Ghost execution path. Always.
- **v3.x strategy** = paper trading / strategy tester only. NEVER point to a real Ghost URL.
- **GAS deployment** = always publish to the EXISTING versioned deployment. NEVER create a new one. The URL must never change.
- **TradeLog edits** = always make directly in Google Sheets. NEVER import from xlsx.
- **Google Sheets template** = always copy via the Sheets link above. NEVER download as xlsx.
- **Sheet timezone** = America/Chicago. Must match GAS project timezone. Mismatch causes 2-hour timestamp offsets and phantom open positions.
- **keepWarm trigger** = must point to your versioned deployment, not Head. GAS cold starts cause webhook timeouts.

---

## 💬 Community

Questions, issues, and discussion → [GitHub Discussions](https://github.com/lonewolftradinggroup-ai/lwtg-mits-system/discussions)

Please search existing discussions before posting. If your question is about setup, the answer is in the User Guide.

---

*Not financial advice. Past performance is not indicative of future results. 🐺*
*LWTG MITS — built by a trader, for traders, given freely to the community.*
