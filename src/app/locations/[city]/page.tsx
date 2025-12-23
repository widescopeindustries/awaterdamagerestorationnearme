import { Phone, CheckCircle2, ShieldCheck, Clock, Award, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";


type Props = {
    params: Promise<{ city: string }>;
};

// Helper: Convert slug "austin-tx" to "Austin, TX"
function formatCity(slug: string): string {
    if (!slug) return "";
    const parts = slug.split("-");
    if (parts.length > 1 && parts[parts.length - 1].length === 2) {
        // Has state code
        const state = parts.pop()?.toUpperCase();
        const city = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
        return `${city}, ${state}`;
    }
    return slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: citySlug } = await params;
    const city = formatCity(citySlug);
    return {
        title: `Water Damage Restoration ${city} | 24/7 Emergency Service`,
        description: `Top-rated water damage restoration in ${city}. Rapid 60-minute response, direct insurance billing, and licensed experts. Call now for emergency cleanup near you using our local 888 number.`,
        alternates: {
            canonical: `https://www.awaterdamagerestorationnearme.com/locations/${citySlug}`,
        },
    };
}


// Helper: Get state-specific content
function getStateInfo(citySlug: string) {
    if (!citySlug) return {
        region: "California",
        alert: "Emergency Response Teams",
        climate: "In California, sudden storms and flash floods can cause devastating damage. We understand the local terrain and building codes.",
        common_issues: ["Flash flooding recovery", "Mudslide cleanup support", "Burst pipes (dry rot)", "Coastal storm surges"]
    };

    if (citySlug.endsWith("-wa")) {
        return {
            region: "Washington",
            alert: "Storm & Flood Recovery Teams",
            climate: "While the Pacific Northwest is known for rain, sudden storms and basement flooding require expert attention. We specialize in sump pump failures and heavy rain saturation.",
            common_issues: ["Basement flooding from heavy rains", "Sump pump failures", "Mold growth from moisture", "Storm drain backups"]
        };
    } else if (citySlug.endsWith("-or")) {
        return {
            region: "Oregon",
            alert: "Valley Flood Response",
            climate: "Oregon's seasonal rainfall can overwhelm drainage systems. We provide specialized drying for crawl spaces and basements common in the region.",
            common_issues: ["Crawl space water damage", "River flooding response", "Roof leaks from moss/debris", "Groundwater saturation"]
        };
    } else {
        // Default to CA
        return {
            region: "California",
            alert: "Emergency Response Teams",
            climate: "In California, sudden storms and flash floods can cause devastating damage. We understand the local terrain and building codes.",
            common_issues: ["Flash flooding recovery", "Mudslide cleanup support", "Burst pipes (dry rot)", "Coastal storm surges"]
        };
    }
}

export default async function CityPage({ params }: Props) {
    const { city: citySlug } = await params;
    const city = formatCity(citySlug);
    const stateInfo = getStateInfo(citySlug);

    return (
        <div className="flex flex-col min-h-screen">
            <JsonLd areaServed={city} />

            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-8 border border-red-500/20 animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        {stateInfo.alert} in {city} Available Now
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                        Water Damage Restoration <br className="hidden md:block" />
                        <span className="text-blue-500">{city}</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
                        Immediate 24/7 emergency water removal and cleanup for homes and businesses in {city}.
                        We are the top-rated local experts arriving in 60 minutes or less.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="tel:888-472-6447"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_-15px_rgba(239,68,68,0.6)]"
                        >
                            <Phone className="h-6 w-6 fill-current" />
                            CALL FOR FREE ESTIMATE
                        </a>
                    </div>
                </div>
            </section>

            {/* Trust Strip */}
            <div className="border-y border-slate-200 bg-slate-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { icon: Clock, label: "60 Min Response", sub: "Arriving in " + city },
                            { icon: ShieldCheck, label: "Licensed & Insured", sub: "Certified Pros" },
                            { icon: CheckCircle2, label: "Direct Billing", sub: "Insurance Accepted" },
                            { icon: Award, label: "Top Rated", sub: "5-Star Service" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="p-3 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{item.label}</div>
                                    <div className="text-sm text-slate-500">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Local Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Premium Water Damage Restoration Service in {city}
                        </h2>
                        <p className="text-lg text-slate-600">
                            When disaster strikes, you need professional water damage restoration services near you that you can trust.
                            Our local team is dedicated to serving the {city} community with speed and integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Why Choose Us in {city}?</h3>
                            <p className="text-slate-600">
                                Water damage requires immediate action to minimize structural damage and prevent mold growth.
                                {stateInfo.climate}
                            </p>
                            <ul className="space-y-4">
                                {[
                                    `Rapid response throughout ${city} area`,
                                    ...stateInfo.common_issues,
                                    "Content cleaning and restoration",
                                    "Mold remediation and prevention"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <MapPin className="text-red-500 h-5 w-5" />
                                Service Area Coverage
                            </h3>
                            <p className="text-slate-600 mb-6">
                                We proudly serve residential and commercial properties throughout {city} and the surrounding communities.
                                Our mobile units are stationed strategically to ensure we can reach any location within the area in under 60 minutes.
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-slate-200">
                                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Serving Zip Codes In & Around {city}</div>
                                <div className="font-mono text-slate-900">
                                    Call to verify your location: <a href="tel:888-472-6447" className="text-blue-600 hover:underline">888-472-6447</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Water Emergency in {city}?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                        Time is critical. Expert help is just a phone call away.
                    </p>
                    <a
                        href="tel:888-472-6447"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
                    >
                        <Phone className="h-6 w-6 fill-current" />
                        CALL 888-472-6447
                    </a>
                </div>
            </section>
        </div>
    );
}
