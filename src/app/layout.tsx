import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Damage Restoration Near Me | 24/7 Emergency Service",
  description: "Immediate water damage restoration, cleanup, and removal. Licensed experts arriving in 60 mins. Direct insurance billing. Call for 24/7 emergency service.",
  keywords: "water damage restoration near me, water damage restoration service near me, water damage restoration companies near me, water damage restoration services near me, water damage restoration company near me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} A Water Damage Restoration Near Me. All rights reserved.</p>
            <p className="mt-2 text-sm text-slate-500">Licensed & Insured • 24/7 Emergency Response</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
