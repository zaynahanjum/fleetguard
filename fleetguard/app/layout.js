import "./globals.css";

export const metadata = {
  title: "FleetGuard",
  description: "Fleet Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
