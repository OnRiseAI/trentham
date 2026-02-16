import "./globals.css";

export const metadata = {
  title: "Trentham Electrical & Solar — AI Receptionist Demo",
  description:
    "Demo: Meet Sam, the AI receptionist built for Trentham Electrical & Solar. Try the live voice assistant.",
  metadataBase: new URL("https://trentham.onrise.ai"),
  openGraph: {
    title: "Trentham Electrical & Solar — AI Voice Assistant",
    description:
      "Speak with our AI assistant about solar, electrical services, heat pumps, and rebates. Available 24/7.",
    url: "https://trentham.onrise.ai",
    siteName: "Trentham Electrical & Solar",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
