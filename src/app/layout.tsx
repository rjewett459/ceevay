import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChatSites AI Portal",
  description: "A demo app from ChatSites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
