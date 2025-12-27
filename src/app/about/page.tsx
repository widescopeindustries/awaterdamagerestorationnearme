import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Built on a Foundation of Service</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        A Water Damage Restoration Near Me is dedicated to bringing transparency, quality, and trust to the restoration industry.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/my-story.jpg"
                                alt="Service-Disabled Veteran Business Owner"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="font-serif italic text-lg leading-relaxed">
                                "New Uniform, New Mission, Same Honor and Integrity throughout."
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                            <p className="text-slate-600 leading-relaxed">
                                To empower homeowners with reliable, unbiased information and connect them with the most qualified, certified restoration experts.
                                We believe in integrity, service, and a transparent process — because protecting your home is one of the most important investments you'll make for your future.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Serving with Honor</h2>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <p className="font-semibold text-slate-900 mb-2">A Service-Disabled Veteran-Owned Small Business</p>
                                <p className="text-slate-600 text-sm mb-4">
                                    Owned and operated by Widescope Industries LLC, a Texas-based SDVOSB certified by the U.S. Small Business Administration.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    This certification is more than a credential — it's a reflection of our core values: integrity, discipline, and an unwavering commitment to service.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Drives Us</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                    <p className="text-slate-600"><span className="font-semibold text-slate-900">Purpose:</span> To provide a comprehensive resource for finding trusted local restoration experts.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                    <p className="text-slate-600"><span className="font-semibold text-slate-900">Values:</span> Honesty, transparency, and a commitment to quality like our veteran leadership.</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                                    <p className="text-slate-600"><span className="font-semibold text-slate-900">Community:</span> We are neighbors helping neighbors. Our goal is to strengthen communities by supporting swift recovery.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Mobile quote for better layout */}
                <div className="md:hidden bg-blue-600 text-white p-8 rounded-xl shadow-xl mb-12">
                    <p className="font-serif italic text-lg leading-relaxed text-center">
                        "New Uniform, New Mission, Same Honor and Integrity throughout."
                    </p>
                </div>
            </div>
        </div>
    );
}
