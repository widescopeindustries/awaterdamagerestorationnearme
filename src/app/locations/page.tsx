import Link from "next/link";
import { ALL_LOCATIONS } from "@/lib/locations";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Locations | A Water Damage Restoration Near Me",
    description: "Find your local water damage restoration experts. Serving 140+ cities across the US with 24/7 emergency response.",
    alternates: {
        canonical: "https://www.awaterdamagerestorationnearme.com/locations",
    },
};

// Helper to group by state
const groupByState = (locations: string[]) => {
    const groups: Record<string, string[]> = {};
    locations.forEach(slug => {
        const parts = slug.split("-");
        const state = parts.pop()?.toUpperCase() || "Other";
        if (!groups[state]) groups[state] = [];
        groups[state].push(slug);
    });
    return groups;
};

// Helper to format city name
const formatCity = (slug: string) => {
    const parts = slug.split("-");
    parts.pop(); // Remove state
    return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
};

const stateNames: Record<string, string> = {
    "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",
    "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",
    "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",
    "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",
    "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",
    "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",
    "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",
    "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",
    "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",
    "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming"
};

export default function LocationsPage() {
    const grouped = groupByState(ALL_LOCATIONS);
    const sortedStates = Object.keys(grouped).sort();

    return (
        <div className="bg-slate-50 min-h-screen py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Service Locations</h1>
                    <p className="text-lg text-slate-600">
                        We provide rapid 24/7 water damage restoration across the following regions.
                        Find your city below to contact your local emergency response team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedStates.map(state => (
                        <div key={state} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b border-slate-100 pb-2 flex items-center gap-2">
                                <span className="text-3xl text-blue-200">{state}</span>
                                {stateNames[state] || state}
                            </h2>
                            <ul className="space-y-2">
                                {grouped[state].sort().map(slug => (
                                    <li key={slug}>
                                        <Link 
                                            href={`/locations/${slug}`}
                                            className="block py-2 px-3 rounded hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                                        >
                                            {formatCity(slug)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
