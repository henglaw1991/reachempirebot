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
    markets: ["XAUUSD", "Gold", "Metal"],
    timeframe: "M5 / M15",
    risk: "Medium",
  },
  {
    slug: "forex-trend-hunter",
    name: "Forex Trend Hunter",
    category: "Forex",
    price: 129,
    badge: "Forex",
    shortDescription:
      "Trend-following bot for structured entries, clean flow, and stable trade management.",
    markets: ["EURUSD", "GBPUSD", "USDJPY"],
    timeframe: "M15 / H1",
    risk: "Low to Medium",
  },
  {
    slug: "crypto-momentum-bot",
    name: "Crypto Momentum Bot",
    category: "Crypto",
    price: 179,
    badge: "Crypto",
    shortDescription:
      "Built for volatility with breakout logic, alert-driven action, and faster reaction.",
    markets: ["BTCUSD", "ETHUSD"],
    timeframe: "M5 / M15",
    risk: "High",
  },
  {
    slug: "metal-precision-ea",
    name: "Metal Precision EA",
    category: "Metal",
    price: 159,
    badge: "Metal",
    shortDescription:
      "Balanced automation for metal traders who want better filtering and controlled execution.",
    markets: ["XAUUSD", "XAGUSD"],
    timeframe: "M15 / H1",
    risk: "Medium",
  },
  {
    slug: "scalp-master-ea",
    name: "Scalp Master EA",
    category: "Scalping",
    price: 139,
    badge: "Scalping",
    shortDescription:
      "Short-term precision entries with strong stop logic and fast trade management for active traders.",
    markets: ["EURUSD", "GBPUSD", "XAUUSD"],
    timeframe: "M1 / M5",
    risk: "Medium to High",
  },
  {
    slug: "smart-grid-bot",
    name: "Smart Grid Bot",
    category: "Grid",
    price: 189,
    badge: "Advanced",
    shortDescription:
      "Grid-style recovery structure with smarter spacing, trade layering, and improved protection logic.",
    markets: ["Forex Majors", "Gold"],
    timeframe: "M15 / H1",
    risk: "High",
  },
];

const categories = ["All", "Crypto", "Forex", "Metal", "Scalping", "Grid"];

export default function BuyBotPage() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

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

  const filteredBots = useMemo(() => {
    let items = [...bots];

    if (category !== "All") {
      items = items.filter((bot) => bot.category === category);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (bot) =>
          bot.name.toLowerCase().includes(q) ||
          bot.category.toLowerCase().includes(q) ||
          bot.markets.join(" ").toLowerCase().includes(q) ||
          bot.shortDescription.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-low") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [search, category, sortBy]);

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
        button,
        input,
        select {
          font: inherit;
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
          cursor: pointer;
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
          outline: none;
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
        .hero-panel,
        .filter-panel,
        .product-card,
        .cta-panel {
          background: var(--panel);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .hero-panel {
          margin-top: 20px;
          border-radius: 30px;
          padding: 28px;
          position: relative;
          overflow: hidden;
        }
        .hero-panel::before {
          content: "";
          position: absolute;
          inset: auto -80px -80px auto;
          width: 240px;
          height: 240px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(18, 164, 255, 0.18), transparent 65%);
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
        .hero-panel h1 {
          margin: 18px 0 0;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -1.4px;
          max-width: 900px;
        }
        .hero-panel p {
          margin: 18px 0 0;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
          max-width: 850px;
        }
        .hero-meta {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-chip {
          padding: 10px 14px;
          border-radius: 14px;
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
          color: var(--muted);
          font-size: 14px;
        }
        .section {
          margin-top: 20px;
        }
        .filter-panel {
          border-radius: 24px;
          padding: 20px;
        }
        .filter-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.7fr 0.7fr;
          gap: 14px;
        }
        .filter-input,
        .filter-select {
          width: 100%;
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--panel-2);
          color: var(--text);
          outline: none;
        }
        .section-head {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin: 22px 0 16px;
        }
        .section-head h2 {
          margin: 0;
          font-size: 34px;
        }
        .section-head p {
          margin: 8px 0 0;
          color: var(--muted);
        }
        .results-note {
          color: var(--muted);
          font-size: 14px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .product-card {
          border-radius: 28px;
          overflow: hidden;
        }
        .product-image {
          height: 200px;
          background: linear-gradient(135deg, rgba(18, 164, 255, 0.12), rgba(84, 104, 255, 0.12));
          display: grid;
          place-items: center;
          color: var(--muted);
          font-size: 14px;
        }
        .product-body {
          padding: 22px;
        }
        .product-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .product-head h3 {
          margin: 0;
          font-size: 22px;
        }
        .tag {
          padding: 7px 11px;
          border-radius: 999px;
          background: var(--soft);
          color: var(--accent-solid);
          border: 1px solid var(--border);
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }
        .product-meta {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .meta-chip {
          padding: 8px 10px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--panel-2) 86%, transparent);
          border: 1px solid var(--border);
          color: var(--muted);
          font-size: 13px;
        }
        .price {
          margin-top: 16px;
          font-size: 30px;
          font-weight: 700;
        }
        .product-body p {
          margin: 12px 0 0;
          color: var(--muted);
          line-height: 1.8;
          min-height: 86px;
        }
        .product-actions {
          margin-top: 18px;
          display: flex;
          gap: 12px;
        }
        .fill {
          flex: 1;
        }
        .cta-panel {
          margin-top: 24px;
          border-radius: 28px;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .cta-panel h3 {
          margin: 0;
          font-size: 30px;
        }
        .cta-panel p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.8;
          max-width: 760px;
        }
        @media (max-width: 1200px) {
          .app-shell {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: relative;
            height: auto;
          }
          .filter-grid {
            grid-template-columns: 1fr;
          }
          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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
          .hero-panel h1 {
            font-size: 36px;
          }
          .product-grid {
            grid-template-columns: 1fr;
          }
          .cta-panel {
            flex-direction: column;
            align-items: flex-start;
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
            <h4>Bot Marketplace</h4>
            <p>
              Explore premium EA bots, compare categories, and choose the best
              strategy for your trading style.
            </p>
            <button className="sidebar-btn">Browse All Bots</button>
          </div>
        </aside>

        <div className="main">
          <div className="topbar">
            <input
              className="search"
              placeholder="Search bots, strategies, markets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="top-actions">
              <button className="toggle" onClick={toggleTheme}>
                {mounted ? (theme === "dark" ? "Light Mode" : "Dark Mode") : "Theme"}
              </button>
              <button className="btn-outline">Login</button>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>

          <section className="hero-panel">
            <div className="pill">Bot Marketplace</div>
            <h1>Choose the Right Trading Bot for Your Strategy</h1>
            <p>
              This marketplace is designed to showcase your EA products like real
              digital products. Visitors can browse categories, compare bot styles,
              and move smoothly from discovery to purchase.
            </p>

            <div className="hero-meta">
              <div className="hero-chip">Crypto Bots</div>
              <div className="hero-chip">Forex Bots</div>
              <div className="hero-chip">Metal Bots</div>
              <div className="hero-chip">Scalping & Grid</div>
            </div>
          </section>

          <section className="section">
            <div className="filter-panel">
              <div className="filter-grid">
                <input
                  className="filter-input"
                  placeholder="Search by bot name, market, or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <select
                  className="filter-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            <div className="section-head">
              <div>
                <h2>Available Bots</h2>
                <p>Explore products, compare setup style, and choose what fits you best.</p>
              </div>
              <div className="results-note">{filteredBots.length} results found</div>
            </div>

            <div className="product-grid">
              {filteredBots.map((bot) => (
                <div className="product-card" key={bot.slug}>
                  <div className="product-image">Bot Preview</div>

                  <div className="product-body">
                    <div className="product-head">
                      <h3>{bot.name}</h3>
                      <span className="tag">{bot.badge}</span>
                    </div>

                    <div className="product-meta">
                      <span className="meta-chip">{bot.category}</span>
                      <span className="meta-chip">{bot.timeframe}</span>
                      <span className="meta-chip">{bot.risk}</span>
                    </div>

                    <div className="price">${bot.price}</div>
                    <p>{bot.shortDescription}</p>

                    <div className="product-actions">
                      <Link href={`/buy-bot/${bot.slug}`} className="btn-primary fill">
                        View Details
                      </Link>
                      <button className="btn-outline">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cta-panel">
              <div>
                <h3>Need help choosing the right bot?</h3>
                <p>
                  You can guide buyers by category, risk level, or supported market
                  so they feel more confident before payment and license delivery.
                </p>
              </div>
              <button className="btn-primary">Contact Support</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}