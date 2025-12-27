import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo / Brand - Optimized for "A" Strategy */}
                <Link href="/" className="flex items-center space-x-2 font-bold text-xl md:text-2xl text-slate-900">
                    <div className="relative h-12 w-12 shrink-0">
                        <Image
                            src="/logo.png"
                            alt="A Water Damage Restoration Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="hidden md:inline-block">A Water Damage Restoration</span>
                    <span className="md:hidden">A.W.D.R.</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/about" className="hover:text-red-600 transition-colors">
                        About
                    </Link>
                </nav>

                {/* Emergency CTA */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-col items-end text-sm">
                        <span className="font-semibold text-slate-900">24/7 Emergency Service</span>
                        <span className="text-slate-500">Arriving in 60 Minutes or Less</span>
                    </div>
                    <a
                        href="tel:888-472-6447"
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl animate-pulse-emergency"
                    >
                        <Phone className="h-5 w-5 fill-current" />
                        <span>CALL NOW</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
