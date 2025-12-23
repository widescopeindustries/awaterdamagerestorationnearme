import { Phone, CheckCircle2, ShieldCheck, Clock, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Keyword: water damage restoration near me */}
      <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-8 border border-red-500/20 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Emergency Response Teams Available Now
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Water Damage Restoration <br className="hidden md:block" />
            <span className="text-blue-500">Near Me</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-10">
            Immediate 24/7 emergency water removal and cleanup.
            We are the top-rated local experts arriving in 60 minutes or less to protect your property.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:1-800-555-0000"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)] hover:shadow-[0_0_60px_-15px_rgba(239,68,68,0.6)]"
            >
              <Phone className="h-6 w-6 fill-current" />
              CALL FOR FREE ESTIMATE
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip - Speed & Reliability */}
      <div className="border-y border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, label: "60 Min Response", sub: "On-site fast" },
              { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully certified" },
              { icon: CheckCircle2, label: "Direct Billing", sub: "We handle insurance" },
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

      {/* Service Focus - Keywords: water damage restoration service/services near me */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Premium Water Damage Restoration Service Near Me
            </h2>
            <p className="text-lg text-slate-600">
              When disaster strikes, you need professional water damage restoration services near you that you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Water Removal",
                desc: "Rapid extraction of standing water from flooded basements, burst pipes, and storm damage."
              },
              {
                title: "Structural Drying",
                desc: "Industrial-grade dehumidifiers and air movers to dry walls, floors, and furniture completely."
              },
              {
                title: "Damage Repair & Cleanup",
                desc: "Full restoration of your property to pre-loss condition. We handle the mess."
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all bg-white hover:-translate-y-1">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <DropletsIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Comparison - Keywords: water damage restoration companies/company near me */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                Why We Are The #1 Water Damage Restoration Company Near Me
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600">
                  Searching for "water damage restoration companies near me" yields many results, but we stand out through speed and quality.
                  We don't just pump water; we restore your home.
                </p>
                <ul className="space-y-3">
                  {[
                    "Free, No-Obligation Estimates",
                    "We Bill Your Insurance Directly",
                    "IICRC Certified Technicians",
                    "Locally Owned & Operated"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <a href="tel:1-800-555-0000" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700">
                    Get Your Free Quote Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Trust Element - Simulated 'Card' */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-white rounded-3xl opacity-50 blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">A</div>
                  <div>
                    <div className="font-bold text-lg">A Water Damage Restoration</div>
                    <div className="text-yellow-400 flex text-sm">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="italic text-slate-600 mb-4">
                  "They arrived in 45 minutes and saved my hardwood floors. Best water damage restoration service I've ever used."
                </p>
                <div className="text-sm font-bold text-slate-900">- Sarah J., Verified Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Water Emergency? Don't Wait.</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Time is critical. Every minute counts when water is damaging your property.
            Call the best water damage restoration company near you immediately.
          </p>
          <a
            href="tel:1-800-555-0000"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
          >
            <Phone className="h-6 w-6 fill-current" />
            CALL 1-800-555-0000
          </a>
        </div>
      </section>
    </div>
  );
}

function DropletsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}
