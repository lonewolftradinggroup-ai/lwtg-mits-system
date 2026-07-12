# 🐺 LWTG MITS — Automated Futures Trading System

**A fully automated, rules-based trading system built for prop firm accounts.**  
Set it up once. It finds signals, places trades, logs everything, and keeps you informed — on any device, anywhere.

---

## What Is MITS?

MITS (Multi-Indicator Trading System) is a 9-point confluence scoring engine that runs on your TradingView charts 23 hours a day, 5 days a week. When market conditions align across all required criteria — momentum, trend, volatility, volume, and regime — it fires a signal. Ghost Bot places the bracket order at your broker automatically. You get a Telegram notification on your phone. The trade logs itself.

You don't watch screens. You don't click buttons. You run the system.

---

## Who Is This For?

- **Prop firm traders** on Apex Trader Funding or similar platforms using Tradovate
- **New traders** who want a structured, rules-based approach without coding experience
- **Experienced traders** who want a fully automated system with rigorous backtesting behind it

No coding required. No manual order entry. No screen-watching. Everything in this repo is copy-paste and point-and-click.

---

## What's In The System

| Component | What It Does |
|---|---|
| **MITS Pine Script v3.x** | Runs on TradingView. Powers the paper trading panel and strategy tester |
| **MITS Pine Script v4.x** | Runs on TradingView. Handles live Ghost execution via intrabar signals |
| **Google Apps Script (GAS)** | Receives trade signals and logs everything to your Google Sheet automatically |
| **Google Sheets Trading Log** | Your complete trade history, daily summary, session analysis, and performance data |
| **Trade Manager** | Live web dashboard — open positions, P&L, exit controls. Works on phone and desktop |
| **Trade Journal** | Calendar view of your trade history. Green days profitable, red days losing |
| **Fund Manager** | NAV tracker for managing capital across multiple accounts or partners |
| **Telegram Alerts** | Push notifications for every entry, exit, DLL warning, and daily summary |

---

## Instruments Traded

| Instrument | Description |
|---|---|
| **MES** | Micro E-mini S&P 500 |
| **MNQ** | Micro E-mini Nasdaq-100 |
| **M2K** | Micro E-mini Russell 2000 |
| **MGC** | Micro Gold Futures |

QC Signals (an optional second strategy) also covers MNQ and MGC on additional timeframes.

---

## Key Features

**🛡️ Layered Risk Management**  
Three independent protection layers: your personal Daily Loss Limit gate (blocks new entries automatically), a Telegram warning alert at your chosen threshold, and your prop firm's hard limit as the final floor. No single point of failure.

**📱 Full Mobile Monitoring**  
The Trade Manager and Trade Journal are web apps that work on any device. Add them to your phone's home screen and they feel like native apps — no installation required.

**📡 Telegram Push Alerts**  
Every entry, every exit, every DLL warning, and a daily EOD summary pushed directly to your phone. You always know what the system is doing.

**📊 Regime-Aware Signals**  
MITS scores market regime on a ±6 scale (STRONG BULL → STRONG BEAR) and gates entries accordingly. Counter-regime trades are blocked. The system only trades with the market, not against it.

**🔄 Fully Automated Pipeline**  
TradingView → Ghost Bot → Tradovate broker → GAS logging → Google Sheets → Trade Manager → Telegram. Every link in the chain is automated. Once set up, the system runs without you.

---

## Performance (Live — Jun 22 to Jul 11, 2026)

| Metric | MITS | QC Signals | Combined |
|---|---|---|---|
| Trades | 41 | 15 | 56 |
| Win Rate | 68% | 60% | 66% |
| Net P&L | +$472.75 | +$380.88 | +$853.63 |

*Live prop account results, current week. Past performance does not guarantee future results.*

---

## Live Apps

| App | Link |
|---|---|
| 🖥️ Trade Manager | [lonewolftradinggroup-ai.github.io/lwtg-trade-manager](https://lonewolftradinggroup-ai.github.io/lwtg-trade-manager) |
| 📅 Trade Journal | [lonewolftradinggroup-ai.github.io/lwtg-journal](https://lonewolftradinggroup-ai.github.io/lwtg-journal) |

---

## Getting Started

**Step 1 — Read first**  
Download and read `LWTG_MITS_README_FIRST_v2.docx` from the latest release. It takes 5 minutes and will save you hours of confusion.

**Step 2 — Install the Pine Scripts from TradingView**  
Add both scripts to your charts directly from TradingView — this is the recommended install path for all users. You'll receive updates automatically whenever a new version is published.

| Script | TradingView Link |
|---|---|
| 🔵 LWTG MITS Indicator (v4.x) — live execution | [Install from TradingView](https://www.tradingview.com/script/arf9Umyg-LWTG-MITS-Indicator/) |
| ⚪ LWTG MITS Strategy (v3.x) — paper trading | [Install from TradingView](https://www.tradingview.com/script/rgTN5rob-LWTG-MITS-Strategy/) |

> ⚠️ **Do NOT paste the `.pine` source files manually** unless you are an advanced user who needs a specific version. Installing from TradingView ensures you always receive the latest updates automatically.

**Step 3 — Get everything else from the latest release**  
Go to [Releases](../../releases) and download the most recent version for the GAS script, User Guide, README FIRST, and Trading Log template.

**Step 4 — Follow the User Guide**  
`LWTG_MITS_User_Guide_v4_3.docx` walks through every setup step in order. Four phases, each building on the last. Phase 1 alone gets you trading live.

---

## Current Release

**[→ Latest Release](../../releases/latest)**

| Component | Version | Install |
|---|---|---|
| Pine Script Indicator (v4.x) — live execution | v4.1.16 | [TradingView](https://www.tradingview.com/script/arf9Umyg-LWTG-MITS-Indicator/) |
| Pine Script Strategy (v3.x) — paper trading | v3.1.16 | [TradingView](https://www.tradingview.com/script/rgTN5rob-LWTG-MITS-Strategy/) |
| Google Apps Script | v7.9.33 | Download from release |
| User Guide | v4.3 | Download from release |
| README FIRST | v2 | Download from release |
| Trading Log Template | v3 | Download from release |

---

## What You'll Need

- **TradingView** account (Pro or higher recommended for multiple alerts)
- **Ghost Bot** subscription at [Quantcrawler.com](https://quantcrawler.com)
- **Apex Trader Funding** (or similar prop firm) account using Tradovate
- **Google account** (for Sheets and Apps Script — both free)
- **Telegram** account (free)

---

## Important Notes

- This system is designed for **micro futures** on prop firm accounts
- Always **paper trade first** — run the system in paper mode for at least 2 weeks before going live
- MITS does **not** guarantee profitable trading. It is a rules-based system with validated backtesting results. All trading involves risk
- Prop firm rules vary — always verify instrument availability and daily loss limits for your specific account

---

## Support & Community

Questions, bug reports, and feature requests are welcome via [GitHub Issues](../../issues).

---

*Not financial advice · Lone Wolf Trading Group · 🐺*
