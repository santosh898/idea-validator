import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idea Validator Bot",
  description: "Validate your idea for the upcoming hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="cupcake" lang="en">
      <body>{children}</body>
    </html>
  );
}
