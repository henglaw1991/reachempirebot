"use client";

import Link from "next/link";

export default function Marketplace() {
  const bots = [
    {
      id: "gold-scalper-pro",
      name: "Gold Scalper Pro",
      price: "$299",
      desc: "High-frequency XAUUSD scalping bot.",
    },
    {
      id: "btc-sniper-ai",
      name: "BTC Sniper AI",
      price: "$399",
      desc: "AI Bitcoin sniper strategy.",
    },
    {
      id: "forex-swing-master",
      name: "Forex Swing Master",
      price: "$199",
      desc: "Stable forex swing bot.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bot Marketplace</h1>

      <div style={styles.grid}>
        {bots.map((bot) => (
          <div key={bot.id} style={styles.card}>
            <h2>{bot.name}</h2>
            <p>{bot.desc}</p>
            <h3>{bot.price}</h3>

            <Link href={`/buy-bot/${bot.id}`}>
              <button style={styles.btn}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    minHeight: "100vh",
    background: "#020617",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "20px",
  },
  card: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
  },
  btn: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "white",
  },
};