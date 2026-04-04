"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("re-theme") : null;
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

  const sidebarItems = [
    "Dashboard",
    "Marketplace",
    "Signals",
    "Server",
    "Learning",
    "About",
    "Contact",
  ];

  const statCards = [
    { title: "Active Bots", value: "25+", note: "+12% this month" },
    { title: "Signals Sent", value: "48.2K", note: "Live delivery" },
    { title: "Clients Online", value: "1,284", note: "Global access" },
    { title: "License Sales", value: "$18.4K", note: "Monthly flow" },
  ];

  const markets = [
    { name: "BTCUSD", price: "$67,240", change: "+3.42%", bars: [44, 56, 52, 70, 78, 92, 88, 104, 120, 128] },
    { name: "EURUSD", price: "1.0842", change: "+0.87%", bars: [24, 28, 34, 38, 44, 48, 52, 60, 64, 72] },
    { name: "XAUUSD", price: "$2,312", change: "+1.96%", bars: [30, 36, 42, 40, 54, 58, 66, 82, 90, 98] },
  ];

  const bots = [
    { title: "Gold Scalper Pro", tag: "Best Seller", price: "$149", desc: "XAUUSD scalping EA with strong protection and disciplined execution." },
    { title: "Forex Trend Hunter", tag: "Forex", price: "$129", desc: "Trend-following EA for cleaner entries and stable trade management." },
    { title: "Crypto Momentum Bot", tag: "Crypto", price: "$179", desc: "Volatility-focused bot with breakout logic and faster reaction flow." },
    { title: "Metal Precision EA", tag: "Metal", price: "$159", desc: "Balanced automation for traders who want filters and controlled execution." },
  ];

  const signals = [
    { label: "NEW SIGNAL", pair: "XAUUSD BUY", time: "2 min ago" },
    { label: "TP HIT", pair: "BTCUSD LONG", time: "8 min ago" },
    { label: "UPDATE", pair: "SL moved to BE", time: "16 min ago" },
    { label: "LICENSE", pair: "Monthly activated", time: "27 min ago" },
  ];

  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        :root {
          --bg: #f4f7fb;
          --panel: rgba(255,255,255,0.92);
          --panel-2: #ffffff;
          --border: rgba(15,23,42,0.08);
          --text: #111827;
          --muted: #6b7280;
          --accent: linear-gradient(135deg,#12a4ff,#3b5dff);
          --accent-solid: #2463ff;
          --soft: rgba(36,99,255,0.08);
          --shadow: 0 16px 36px rgba(15,23,42,0.08);
          --sidebar: #ffffff;
        }
        html[data-theme='dark'] {
          --bg: #0b1020;
          --panel: rgba(16,22,41,0.92);
          --panel-2: #121933;
          --border: rgba(255,255,255,0.08);
          --text: #ffffff;
          --muted: #9aa5cf;
          --accent: linear-gradient(135deg,#12a4ff,#5468ff);
          --accent-solid: #3d6bff;
          --soft: rgba(18,164,255,0.10);
          --shadow: 0 18px 42px rgba(0,0,0,0.28);
          --sidebar: #0f152b;
        }
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 20%),
            radial-gradient(circle at left, rgba(18,164,255,0.08), transparent 18%),
            var(--bg);
        }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; cursor: pointer; }
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
          box-shadow: 0 12px 28px rgba(61,107,255,0.25);
        }
        .brand-title { font-size: 18px; font-weight: 700; }
        .brand-sub { margin-top: 4px; color: var(--muted); font-size: 12px; }
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
        .sidebar-box h4 { margin: 0 0 10px; font-size: 16px; }
        .sidebar-box p { margin: 0; color: var(--muted); line-height: 1.7; font-size: 14px; }
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
        .toggle, .btn-outline, .btn-primary {
          border-radius: 14px;
          padding: 11px 16px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text);
        }
        .btn-primary {
          color: white;
          border: 0;
          background: var(--accent);
          box-shadow: 0 12px 24px rgba(61,107,255,0.22);
        }
        .hero {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 20px;
        }
        .hero-panel, .card, .product-card, .signal-card {
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .hero-panel {
          border-radius: 30px;
          padding: 28px;
          overflow: hidden;
          position: relative;
        }
        .hero-panel::before {
          content: '';
          position: absolute;
          inset: auto -80px -80px auto;
          width: 240px;
          height: 240px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(18,164,255,0.18), transparent 65%);
          pointer-events: none;
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
        .hero h1 {
          margin: 18px 0 0;
          font-size: 52px;
          line-height: 1.06;
          letter-spacing: -1.6px;
        }
        .hero p {
          margin: 18px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
          max-width: 720px;
        }
        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .stats {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
        }
        .card {
          border-radius: 22px;
          padding: 20px;
        }
        .card-title { color: var(--muted); font-size: 13px; }
        .card-value { margin-top: 10px; font-size: 30px; font-weight: 700; }
        .card-note { margin-top: 8px; color: #22c55e; font-size: 13px; }
        .market-wrap {
          display: grid;
          gap: 14px;
        }
        .market-card {
          padding: 18px;
          border-radius: 22px;
          background: color-mix(in srgb, var(--panel-2) 85%, transparent);
          border: 1px solid var(--border);
        }
        .market-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .market-name { font-size: 18px; font-weight: 700; }
        .market-price { color: var(--muted); margin-top: 4px; font-size: 14px; }
        .market-change { color: #22c55e; font-weight: 700; }
        .bars {
          height: 132px;
          display: flex;
          align-items: end;
          gap: 8px;
          padding: 12px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(61,107,255,0.12), rgba(61,107,255,0));
        }
        .bar {
          flex: 1;
          min-width: 8px;
          border-radius: 10px 10px 0 0;
          background: var(--accent);
        }
        .section {
          margin-top: 20px;
          display: grid;
          gap: 20px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .section-head h2 { margin: 0; font-size: 34px; }
        .section-head p { margin: 8px 0 0; color: var(--muted); }
        .grid-2 {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 20px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
        }
        .product-card {
          border-radius: 26px;
          overflow: hidden;
        }
        .product-image {
          height: 180px;
          background: linear-gradient(135deg, rgba(18,164,255,0.12), rgba(84,104,255,0.12));
          display: grid;
          place-items: center;
          color: var(--muted);
        }
        .product-body { padding: 22px; }
        .product-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .product-head h3 { margin: 0; font-size: 22px; }
        .tag {
          padding: 7px 11px;
          border-radius: 999px;
          background: var(--soft);
          color: var(--accent-solid);
          border: 1px solid var(--border);
          font-size: 12px;
          font-weight: 700;
        }
        .price { margin-top: 14px; font-size: 28px; font-weight: 700; }
        .product-body p { margin: 12px 0 0; color: var(--muted); line-height: 1.8; }
        .product-actions { margin-top: 18px; display: flex; gap: 12px; }
        .fill { flex: 1; }
        .signal-list {
          display: grid;
          gap: 14px;
        }
        .signal-card {
          border-radius: 22px;
          padding: 18px;
        }
        .signal-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
        }
        .signal-label {
          padding: 7px 10px;
          border-radius: 999px;
          background: var(--soft);
          color: var(--accent-solid);
          border: 1px solid var(--border);
          font-size: 12px;
          font-weight: 700;
        }
        .signal-time { color: var(--muted); font-size: 12px; }
        .signal-pair { margin-top: 12px; font-size: 18px; font-weight: 700; }
        .split-panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .panel-box {
          border-radius: 28px;
          padding: 24px;
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .panel-box h3 { margin: 12px 0 0; font-size: 30px; }
        .panel-box p { margin: 14px 0 0; color: var(--muted); line-height: 1.8; }
        .list {
          display: grid;
          gap: 14px;
          margin-top: 20px;
        }
        .list-item {
          border-radius: 18px;
          padding: 18px;
          background: color-mix(in srgb, var(--panel-2) 85%, transparent);
          border: 1px solid var(--border);
        }
        .list-item strong { display: block; font-size: 18px; }
        .list-item span { display: block; margin-top: 10px; color: var(--muted); line-height: 1.7; }
        .step {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .num {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: var(--accent);
          color: white;
          font-weight: 700;
          flex-shrink: 0;
        }
        @media (max-width: 1200px) {
          .app-shell { grid-template-columns: 1fr; }
          .sidebar { position: relative; height: auto; }
          .hero, .grid-2, .split-panels, .product-grid, .stats { grid-template-columns: 1fr; }
        }
        @media (max-width: 860px) {
          .topbar { flex-wrap: wrap; }
          .nav-menu { display: none; }
          .search { min-width: 0; width: 100%; }
          .hero h1 { font-size: 38px; }
          .section-head { flex-direction: column; align-items: flex-start; }
          .main { padding: 14px; }
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
            {sidebarItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`menu-item ${index === 0 ? "active" : ""}`}>
                <span>{item}</span>
                {index === 0 ? <span className="menu-dot" /> : null}
              </a>
            ))}
          </nav>

          <div className="sidebar-box">
            <h4>Bot Delivery Flow</h4>
            <p>Buy bot, complete payment, receive license by email or Telegram, then activate on MT5.</p>
            <button className="sidebar-btn">Buy Bot Now</button>
          </div>
        </aside>

        <div className="main">
          <div className="topbar">
            <input className="search" placeholder="Search bots, signals, markets..." />
            <div className="top-actions">
              <button className="toggle" onClick={toggleTheme}>
                {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Theme"}
              </button>
              <button className="btn-outline">Login</button>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>

          <section className="hero" id="dashboard">
            <div className="hero-panel">
              <div className="pill">Hybrid FinLab Style</div>
              <h1>Trading Bot Marketplace With Real Dashboard Feeling</h1>
              <p>
                This version is no longer a simple landing page. It uses a dashboard-style public layout so the site feels closer to FinLab while still staying frontend-only.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Explore Bots</button>
                <button className="btn-outline">Watch Demo</button>
              </div>
              <div className="stats">
                {statCards.map((card) => (
                  <div className="card" key={card.title}>
                    <div className="card-title">{card.title}</div>
                    <div className="card-value">{card.value}</div>
                    <div className="card-note">{card.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="section-head" style={{ marginBottom: 16 }}>
                <div>
                  <h2 style={{ fontSize: 28, margin: 0 }}>Live Markets</h2>
                  <p style={{ margin: '8px 0 0' }}>Crypto, Forex, and Metal chart-style blocks</p>
                </div>
              </div>
              <div className="market-wrap">
                {markets.map((market) => (
                  <div className="market-card" key={market.name}>
                    <div className="market-top">
                      <div>
                        <div className="market-name">{market.name}</div>
                        <div className="market-price">{market.price}</div>
                      </div>
                      <div className="market-change">{market.change}</div>
                    </div>
                    <div className="bars">
                      {market.bars.map((value, idx) => (
                        <span key={`${market.name}-${idx}`} className="bar" style={{ height: `${value}px` }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="marketplace">
            <div className="grid-2">
              <div className="hero-panel">
                <div className="section-head">
                  <div>
                    <h2>Bot Marketplace</h2>
                    <p>Public product cards with stronger dashboard-style presentation.</p>
                  </div>
                  <button className="btn-outline">View All</button>
                </div>
                <div className="product-grid">
                  {bots.map((bot) => (
                    <div className="product-card" key={bot.title}>
                      <div className="product-image">Bot Preview</div>
                      <div className="product-body">
                        <div className="product-head">
                          <h3>{bot.title}</h3>
                          <span className="tag">{bot.tag}</span>
                        </div>
                        <div className="price">{bot.price}</div>
                        <p>{bot.desc}</p>
                        <div className="product-actions">
                          <button className="btn-primary fill">Buy Now</button>
                          <button className="btn-outline">Details</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-panel" id="signals">
                <div className="section-head">
                  <div>
                    <h2>Signal Activity</h2>
                    <p>Show live-style signal cards instead of marketing-only sections.</p>
                  </div>
                </div>
                <div className="signal-list">
                  {signals.map((signal) => (
                    <div className="signal-card" key={`${signal.label}-${signal.pair}`}>
                      <div className="signal-top">
                        <span className="signal-label">{signal.label}</span>
                        <span className="signal-time">{signal.time}</span>
                      </div>
                      <div className="signal-pair">{signal.pair}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="server">
            <div className="split-panels">
              <div className="panel-box">
                <div className="pill">Server</div>
                <h3>Server and VPS Guidance</h3>
                <p>
                  Keep the frontend premium, but use this space for buyer-facing server education instead of backend admin widgets.
                </p>
                <div className="list">
                  <div className="list-item"><strong>24/7 VPS Hosting</strong><span>Explain why continuous runtime matters for bots and why serious traders should use a VPS.</span></div>
                  <div className="list-item"><strong>Fast Bot Deployment</strong><span>Make setup simple for clients who want to connect quickly and go live faster.</span></div>
                  <div className="list-item"><strong>Reliable Runtime</strong><span>Show that your service is serious about uptime, speed, and stable operation.</span></div>
                </div>
              </div>

              <div className="panel-box" id="learning">
                <div className="pill">Buy Flow</div>
                <h3>Clear Client Purchase Journey</h3>
                <p>Buyers should understand the process without seeing admin control elements.</p>
                <div className="list">
                  {["Choose a bot from the marketplace.", "Click Buy Now and complete payment.", "Receive license by email or Telegram.", "Activate the bot on MT5 and start trading."].map((item, index) => (
                    <div className="list-item step" key={item}>
                      <div className="num">{index + 1}</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section" id="about">
            <div className="split-panels">
              <div className="panel-box">
                <div className="pill">About Us</div>
                <h3>Frontend Public Design, Backend Separate</h3>
                <p>
                  This hybrid layout borrows FinLab dashboard energy, but it stays public-facing. Admin control remains part of the backend only.
                </p>
              </div>
              <div className="panel-box" id="contact">
                <div className="pill">Contact</div>
                <h3>Convert Visitors Into Buyers</h3>
                <div className="list">
                  <div className="list-item"><strong>Website</strong><span>www.reachempirebot.com</span></div>
                  <div className="list-item"><strong>Telegram</strong><span>@reachempirebot</span></div>
                  <div className="list-item"><strong>Email</strong><span>support@reachempirebot.com</span></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
