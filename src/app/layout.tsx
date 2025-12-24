import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Water Damage Restoration Near Me | 24/7 Emergency Service",
  description: "Immediate water damage restoration, cleanup, and removal. Licensed experts arriving in 60 mins. Direct insurance billing. Call 888-472-6447 for 24/7 emergency service.",
  keywords: "water damage restoration near me, water damage restoration service near me, water damage restoration companies near me, water damage restoration services near me, water damage restoration company near me",
  metadataBase: new URL('https://www.awaterdamagerestorationnearme.com'),
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <div className="bg-red-600 text-white px-4 py-2 text-center relative overflow-hidden animate-pulse">
          <div className="container mx-auto font-bold flex items-center justify-center gap-2 text-sm md:text-base">
            <AlertTriangle className="h-5 w-5 shrink-0" />
            <span className="uppercase tracking-wide">California Flood Alert: Emergency Response Teams Deployed</span>
          </div>
        </div>
        <JsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} A Water Damage Restoration Near Me. All rights reserved.</p>
            <p className="mt-4 text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
              A Water Damage Restoration Near Me is a referral service that connects homeowners with local service providers.
              All contractors are independent and represent their own companies. We do not warrant or guarantee any work performed.
              It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed.
            </p>
            <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
