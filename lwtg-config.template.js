// ============================================================
// lwtg-config.template.js — LWTG MITS User Configuration
// Quant Crawler Community 🐺  |  Powered by LWTG
// ============================================================
//
// SETUP INSTRUCTIONS:
//   1. Rename this file to: lwtg-config.js
//   2. Fill in YOUR values below (see comments on each field)
//   3. Place it in the same folder as your Trade Manager
//   4. Never share this file — it contains your Ghost secrets
//
// ⚠️  lwtg-config.js is gitignored and must NEVER be committed
//     or posted in Discord. This template is safe to share.
//
// See User Guide Section 6.4 for full setup walkthrough.
// ============================================================

const LWTG_CONFIG = {

  // ── GAS /exec URL ───────────────────────────────────────────
  // Your Google Apps Script deployment URL.
  // Found in: Apps Script → Deploy → Manage Deployments → URL
  // Must point to a VERSIONED deployment — never Head.
  gas_url: "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",

  // ── Fees & Risk Thresholds ──────────────────────────────────
  // fee_per_contract: round-trip commission per contract in USD
  // dll_warn:  P&L level that triggers a Telegram warning alert
  // dll_block: P&L level that blocks new MITS entries via Pine
  fee_per_contract: 1.90,
  dll_warn:         -500,
  dll_block:        -750,

  // ── NT8 Price Server ────────────────────────────────────────
  // Local NinjaTrader 8 price server URL.
  // Leave as default unless you've changed the NT8 port.
  nt8_url: "http://localhost:8765",

  // ── Poll Interval ───────────────────────────────────────────
  // How often (ms) the Trade Manager polls for position updates.
  // Default 5000 (5 seconds). Lower = more frequent, more load.
  poll_interval_ms: 5000,

  // ── Instrument Cards ────────────────────────────────────────
  // One entry per instrument/preset you are running.
  // Delete or comment out any instruments you are NOT using.
  //
  // Fields:
  //   id:     unique identifier shown in Trade Manager UI
  //   strat:  "MITS" | "QC Signals" | "QC Trend"
  //   tf:     timeframe string (display only)
  //   ticker: TradingView ticker symbol
  //   tick:   USD value per tick
  //   url:    Ghost webhook URL (null = paper trading / no execution)
  //   qcs:    true if QC Signals preset (omit or false otherwise)
  //
  // ⚠️  Ghost webhook URLs contain your secret — never share them.
  //     Get yours from your Ghost dashboard.
  // ────────────────────────────────────────────────────────────
  instruments: [

    // ── MITS ──────────────────────────────────────────────────
    {
      id:     "MES",
      strat:  "MITS",
      tf:     "15m",
      ticker: "MES1!",
      tick:   5.00,
      url:    "https://quantcrawler.com/api/ghost/webhook/YOUR_WEBHOOK_ID?secret=YOUR_SECRET",
    },
    {
      id:     "MNQ",
      strat:  "MITS",
      tf:     "15m",
      ticker: "MNQ1!",
      tick:   2.00,
      url:    "https://quantcrawler.com/api/ghost/webhook/YOUR_WEBHOOK_ID?secret=YOUR_SECRET",
    },
    {
      id:     "MGC",
      strat:  "MITS",
      tf:     "5m",
      ticker: "MGC1!",
      tick:   10.00,
      url:    "https://quantcrawler.com/api/ghost/webhook/YOUR_WEBHOOK_ID?secret=YOUR_SECRET",
    },
    {
      id:     "M2K",
      strat:  "MITS",
      tf:     "15m",
      ticker: "M2K1!",
      tick:   5.00,
      url:    "https://quantcrawler.com/api/ghost/webhook/YOUR_WEBHOOK_ID?secret=YOUR_SECRET",
    },

    // ── QC Signals ────────────────────────────────────────────
    {
      id:     "MNQ-4m",
      strat:  "QC Signals",
      tf:     "4m",
      ticker: "MNQ1!",
      tick:   2.00,
      url:    null,   // QCS uses GAS signal routing — no Ghost URL needed
      qcs:    true,
    },
    {
      id:     "MES-5m",
      strat:  "QC Signals",
      tf:     "5m",
      ticker: "MES1!",
      tick:   5.00,
      url:    null,
      qcs:    true,
    },

    // ── QC Trend ──────────────────────────────────────────────
    {
      id:     "MNQ-4m-QCT",
      strat:  "QC Trend",
      tf:     "4m",
      ticker: "MNQ1!",
      tick:   2.00,
      url:    null,   // set to your Ghost URL when going live
      qcs:    false,
    },
    {
      id:     "MGC-2m-QCT",
      strat:  "QC Trend",
      tf:     "2m",
      ticker: "MGC1!",
      tick:   10.00,
      url:    null,   // set to your Ghost URL when going live
      qcs:    false,
    },

  ],

};
