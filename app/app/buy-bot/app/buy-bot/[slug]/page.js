"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const bots = [
  {
    slug: "gold-scalper-pro",
    name: "Gold Scalper Pro",
    category: "Metal",
    price: 149,
    badge: "Best Seller",
    shortDescription:
      "Fast-entry EA for XAUUSD with disciplined execution, smart protection, and premium logic.",
    fullDescription:
      "Gold Scalper Pro is designed for traders who want a cleaner, faster entry model on gold. It focuses on disciplined execution, tighter decision logic, and more controlled trade management. This product is positioned as a premium XAUUSD solution for traders who want speed with structure.",
    markets: ["XAUUSD", "Gold", "Metal"],
    timeframe: "M5 / M15",
    risk: "Medium",
    setup: "MT5 + VPS recommended",
    delivery: "License sent by Email or Telegram",
    features: [
      "Fast-entry execution style",
      "Smart protection logic",
      "Structured trade management",
      "Built for XAUUSD / Gold workflow",
      "Premium bot delivery positioning",
    ],
  },
  {
    slug: "forex-trend-hunter",
    name: "Forex Trend Hunter",
    category: "Forex",
    price: 129,
    badge: "Forex",
    shortDescription:
      "Trend-following bot for structured entries, clean flow, and stable trade management.",
    fullDescription:
      "Forex Trend Hunter is built for traders who prefer directional structure over aggressive short-term noise. It is presented as a cleaner, more stable bot product that fits users looking for organized trend-following automation on major forex pairs.",
    markets: ["EURUSD", "GBPUSD", "USDJPY"],
    timeframe: "M15 / H1",
    risk: "Low to Medium",
    setup: "MT5 + VPS optional",
    delivery: "License sent by Email or Telegram",
    features: [
      "Trend-focused entry logic",
      "Cleaner directional structure",
      "Supports major forex pairs",
      "Stable presentation for buyers",
      "Good for lower-noise automation",
    ],
  },
  {
    slug: "crypto-momentum-bot",
    name: "Crypto Momentum Bot",
    category: "Crypto",
    price: 179,
    badge: "Crypto",
    shortDescription:
      "Built for volatility with breakout logic, alert-driven action, and faster reaction.",
    fullDescription:
      "Crypto Momentum Bot is positioned for users who want exposure to fast-moving crypto conditions. It emphasizes breakout behavior, stronger reaction to volatility, and a product identity suited for high-energy automated crypto trading.",
    markets: ["BTCUSD", "ETHUSD"],
    timeframe: "M5 / M15",
    risk: "High",
    setup: "MT5 / crypto-compatible symbol feed",
    delivery: "License sent by Email or Telegram",
    features: [
      "Momentum-focused bot behavior",
      "Built for volatile markets",
      "Breakout-oriented logic",
      "Crypto-friendly product identity",
      "Designed for faster reaction flow",
    ],
  },
  {
    slug: "metal-precision-ea",
    name: "Metal Precision EA",
    category: "Metal",
    price: 159,
    badge: "Metal",
    shortDescription:
      "Balanced automation for metal traders who want better filtering and controlled execution.",
    fullDescription:
      "Metal Precision EA is designed as a more balanced metal-trading product. It focuses on controlled execution, cleaner filtering, and a buyer-friendly positioning for traders who want order and discipline rather than aggressive bot behavior.",
    markets: ["XAUUSD", "XAGUSD"],
    timeframe: "M15 / H1",
    risk: "Medium",
    setup: "MT5 + VPS recommended",
    delivery: "License sent by Email or Telegram",
    features: [
      "Balanced automation style",
      "Cleaner entry filtering",
      "Built for gold and silver workflows",
      "Controlled execution design",
      "Premium presentation for metal traders",
    ],
  },
  {
    slug: "scalp-master-ea",
    name: "Scalp Master EA",
    category: "Scalping",
    price: 139,
    badge: "Scalping",
    shortDescription:
      "Short-term precision entries with strong stop logic and fast trade management for active traders.",
    fullDescription:
      "Scalp Master EA is designed for active traders who prefer shorter timeframes and quicker movement. It is positioned as a higher-energy product for users who want compact entries and faster management flow.",
    markets: ["EURUSD", "GBPUSD", "XAUUSD"],
    timeframe: "M1 / M5",
    risk: "Medium to High",
    setup: "MT5 + low-latency VPS recommended",
    delivery: "License sent by Email or Telegram",
    features: [
      "Short-term precision structure",
      "Fast trade management flow",
      "Supports active trader behavior",
      "Compact timeframes",
      "Designed for faster market rhythm",
    ],
  },
  {
    slug: "smart-grid-bot",
    name: "Smart Grid Bot",
    category: "Grid",
    price: 189,
    badge: "Advanced",
    shortDescription:
      "Grid-style recovery structure with smarter spacing, trade layering, and improved protection logic.",
    fullDescription:
      "Smart Grid Bot is presented as an advanced product for users who want layered trade management and more complex automation behavior. It is best positioned as a premium advanced bot for experienced buyers.",
    markets: ["Forex Majors", "Gold"],
    timeframe: "M15 / H1",
    risk: "High",
    setup: "MT5 + VPS strongly recommended",
    delivery: "License sent by Email or Telegram",
    features: [
      "Grid-style layered management",
      "Smarter spacing structure",
      "Recovery-oriented logic",
      "Advanced product positioning",
      "Built for experienced automation buyers",
    ],
  },
];

export default function BotDetailsPage({ params }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("re-theme") : null;
    const initial = saved || "dark";
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("re-theme", next);
  };

  const bot = useMemo(
    () => bots.find((item) => item.slug === params.slug),
    [params.slug]
  );

  if (!bot) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#0b1020",
          color: "#fff",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Bot not found</h1>
          <p style={{ opacity: 0.75 }}>The requested product does not exist.</p>
          <Link
            href="/buy-bot"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "12px 18px",
              borderRadius: "12px",
              color: "#fff",
              background: "linear-gradient(135deg,#12a4ff,#5468ff)",
            }}
          >
            Back to Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        :root {
          --bg: #f4f7fb;
          --panel: rgba(255, 255, 255, 0.92);
          --panel-2: #ffffff;
          --border: rgba(15, 23, 42, 0.08);
          --text: #111827;
          --muted: #6b7280;
          --accent: linear-gradient(135deg, #12a4ff, #3b5dff);
          --accent-solid: #2463ff;
          --soft: rgba(36, 99, 255, 0.08);
          --shadow: 0 16px 36px rgba(15, 23, 42, 0.08);
          --sidebar: #ffffff;
        }
        html[data-theme="dark"] {
          --bg: #0b1020;
          --panel: rgba(16, 22, 41, 0.92);
          --panel-2: #121933;
          --border: rgba(255, 255, 255, 0.08);
          --text: #ffffff;
          --muted: #9aa5cf;
          --accent: linear-gradient(135deg, #12a4ff, #5468ff);
          --accent-solid: #3d6bff;
          --soft: rgba(18, 164, 255, 0.1);
          --shadow: 0 18px 42px rgba(0, 0, 0, 0.28);
          --sidebar: #0f152b;
        }
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.18), transparent 20%),
            radial-gradient(circle at left, rgba(18, 164, 255, 0.08), transparent 18%),
            var(--bg);
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        button {
          font: inherit;
          cursor: pointer;
        }
        .app-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 280px 1fr;
        }
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 24px 18px;
          background: color-mix(in srgb, var(--sidebar) 92%, transparent);
          border-right: 1px solid var(--border);
          backdrop-filter: blur(12px);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px 10px 24px;
        }
        .brand-logo {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--accent);
          color: white;
          font-size: 22px;
          font-weight: 700;
          box-shadow: 0 12px 28px rgba(61, 107, 255, 0.25);
        }
        .brand-title {
          font-size: 18px;
          font-weight: 700;
        }
        .brand-sub {
          margin-top: 4px;
          color: var(--muted);
          font-size: 12px;
        }
        .menu {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }
        .menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-radius: 16px;
          color: var(--muted);
          border: 1px solid transparent;
          transition: 0.2s ease;
        }
        .menu-item.active,
        .menu-item:hover {
          background: var(--soft);
          color: var(--text);
          border-color: var(--border);
        }
        .menu-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #22c55e;
          opacity: 0.9;
        }
        .sidebar-box {
          margin-top: 22px;
          padding: 18px;
          border-radius: 22px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .sidebar-box h4 {
          margin: 0 0 10px;
          font-size: 16px;
        }
        .sidebar-box p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }
        .sidebar-btn {
          margin-top: 14px;
          width: 100%;
          padding: 12px 14px;
          border: 0;
          border-radius: 14px;
          color: white;
          background: var(--accent);
        }
        .main {
          padding: 22px;
        }
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 20px;
          border-radius: 24px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .search {
          min-width: 280px;
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text);
        }
        .top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .toggle,
        .btn-outline,
        .btn-primary {
          border-radius: 14px;
          padding: 11px 16px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text);
          cursor: pointer;
        }
        .btn-primary {
          color: white;
          border: 0;
          background: var(--accent);
          box-shadow: 0 12px 24px rgba(61, 107, 255, 0.22);
        }
        .content-grid {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
        }
        .panel {
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          border-radius: 30px;
          padding: 28px;
        }
        .product-image {
          height: 280px;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(18, 164, 255, 0.12), rgba(84, 104, 255, 0.12));
          display: grid;
          place-items: center;
          color: var(--muted);
          margin-bottom: 22px;
        }
        .pill {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          background: var(--soft);
          color: var(--accent-solid);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid var(--border);
        }
        .panel h1 {
          margin: 18px 0 0;
          font-size: 44px;
          line-height: 1.08;
        }
        .desc {
          margin-top: 16px;
          color: var(--muted);
          line-height: 1.9;
          font-size: 16px;
        }
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }
        .chip {
          padding: 9px 12px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
          color: var(--muted);
          font-size: 13px;
        }
        .section-title {
          margin: 26px 0 14px;
          font-size: 24px;
        }
        .feature-list {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          padding: 16px 18px;
          border-radius: 18px;
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
          color: var(--muted);
        }
        .price-box {
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 22px;
        }
        .price-label {
          color: var(--muted);
          font-size: 14px;
        }
        .price-value {
          margin-top: 10px;
          font-size: 42px;
          font-weight: 700;
        }
        .buy-actions {
          margin-top: 20px;
          display: grid;
          gap: 12px;
        }
        .box-list {
          display: grid;
          gap: 12px;
          margin-top: 20px;
        }
        .box-item {
          padding: 16px 18px;
          border-radius: 18px;
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
        }
        .box-item strong {
          display: block;
          font-size: 15px;
        }
        .box-item span {
          display: block;
          margin-top: 8px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 14px;
        }
        .back-link {
          display: inline-block;
          margin-top: 20px;
          color: var(--accent-solid);
          font-weight: 700;
        }
        @media (max-width: 1200px) {
          .app-shell {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: relative;
            height: auto;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 860px) {
          .topbar {
            flex-wrap: wrap;
          }
          .search {
            min-width: 0;
            width: 100%;
          }
          .panel h1 {
            font-size: 34px;
          }
          .main {
            padding: 14px;
          }
        }
      `}</style>

      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand">
            <div className="brand-logo">R</div>
            <div>
              <div className="brand-title">ReachEmpireBot</div>
              <div className="brand-sub">FinLab-style public frontend</div>
            </div>
          </div>

          <nav className="menu">
            <Link href="/" className="menu-item">
              <span>Dashboard</span>
            </Link>
            <Link href="/buy-bot" className="menu-item active">
              <span>Marketplace</span>
              <span className="menu-dot" />
            </Link>
            <a href="/" className="menu-item">
              <span>Signals</span>
            </a>
            <a href="/" className="menu-item">
              <span>Server</span>
            </a>
            <a href="/" className="menu-item">
              <span>Learning</span>
            </a>
            <a href="/" className="menu-item">
              <span>About</span>
            </a>
            <a href="/" className="menu-item">
              <span>Contact</span>
            </a>
          </nav>

          <div className="sidebar-box">
            <h4>Need help before buying?</h4>
            <p>
              Contact support if you want help choosing the right bot, delivery
              method, or setup flow.
            </p>
            <button className="sidebar-btn">Contact Support</button>
          </div>
        </aside>

        <div className="main">
          <div className="topbar">
            <input className="search" placeholder="Search bots, guides, markets..." />

            <div className="top-actions">
              <button className="toggle" onClick={toggleTheme}>
                {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Theme"}
              </button>
              <button className="btn-outline">Login</button>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>

          <div className="content-grid">
            <div className="panel">
              <div className="product-image">Bot Product Preview</div>
              <div className="pill">{bot.badge}</div>
              <h1>{bot.name}</h1>
              <p className="desc">{bot.fullDescription}</p>

              <div className="chip-row">
                <div className="chip">Category: {bot.category}</div>
                <div className="chip">Timeframe: {bot.timeframe}</div>
                <div className="chip">Risk: {bot.risk}</div>
                <div className="chip">Setup: {bot.setup}</div>
              </div>

              <h3 className="section-title">Key Features</h3>
              <div className="feature-list">
                {bot.features.map((feature) => (
                  <div className="feature-item" key={feature}>
                    {feature}
                  </div>
                ))}
              </div>

              <h3 className="section-title">Supported Markets</h3>
              <div className="chip-row">
                {bot.markets.map((market) => (
                  <div className="chip" key={market}>
                    {market}
                  </div>
                ))}
              </div>

              <Link href="/buy-bot" className="back-link">
                ← Back to Marketplace
              </Link>
            </div>

            <div className="panel">
              <div className="price-box">
                <div className="price-label">Bot Price</div>
                <div className="price-value">${bot.price}</div>

                <div className="buy-actions">
                  <button className="btn-primary">Buy Now</button>
                  <button className="btn-outline">Request Setup Help</button>
                </div>
              </div>

              <div className="box-list">
                <div className="box-item">
                  <strong>Delivery Method</strong>
                  <span>{bot.delivery}</span>
                </div>

                <div className="box-item">
                  <strong>Setup Requirement</strong>
                  <span>{bot.setup}</span>
                </div>

                <div className="box-item">
                  <strong>Recommended For</strong>
                  <span>
                    Traders who want a professional EA product with cleaner presentation,
                    guided setup, and license-based delivery.
                  </span>
                </div>

                <div className="box-item">
                  <strong>Buy Flow</strong>
                  <span>
                    Choose the bot → complete payment → wait for license delivery by
                    Email or Telegram → activate on MT5.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}