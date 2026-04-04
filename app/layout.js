import "./globals.css";

export const metadata = {
  title: "ReachEmpireBot",
  description: "Trading Bot Marketplace and License Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}