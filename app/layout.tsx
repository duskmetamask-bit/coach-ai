import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoachAI — Your AI Coaching Assistant",
  description: "The AI agent built for certified coaches. Automate client follow-ups, session notes, and progress tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 font-sans min-h-screen">{children}</body>
    </html>
  );
}