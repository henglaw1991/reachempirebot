"use client";

import Link from "next/link";

export default function Marketplace() {
  const bots = [
    {
      id: "gold-scalper-pro",
      name: "Gold Scalper Pro",
      price: "$299",
      desc: "High-frequency XAUUSD scalping bot with smart TP.",
    },
    {
      id: "btc-sniper-ai",
      name: "BTC Sniper AI",
      price: "$399",
      desc: "AI-powered Bitcoin sniper strategy.",
    },
    {
      id: "forex-swing-master",
      name: "Forex Swing Master",
      price: "$199",
      desc: "Stable swing trading bot for EURUSD & GBPUSD.",
    },
  ];

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Bot Marketplace
      </h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {bots.map((bot) => (
          <div
            key={bot.id}
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "#0f172a",
            }}
          >
            <h2>{bot.name}</h2>
            <p>{bot.desc}</p>
            <h3>{bot.price}</h3>

            <Link href={`/buy-bot/${bot.id}`}>
              <button style={{ marginTop: "10px" }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}