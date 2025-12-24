
import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | A Water Damage Restoration Near Me",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">1. Introduction</h2>
                    <p>
                        Welcome to A Water Damage Restoration Near Me ("we," "our," or "us").
                        We respect your privacy and are committed to protecting it through our compliance with this policy.
                        This policy describes the types of information we may collect from you or that you may provide when you visit the website
                        and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
                    <p>We collect several types of information from and about users of our Website, including:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Personal Information:</strong> Name, phone number, email address, and property address when you voluntarily provide it to request a quote.</li>
                        <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our Website, and usage details (via cookies/analytics).</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
                    <p>We use information that we collect about you or that you provide to us:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>To present our Website and its contents to you.</li>
                        <li>To connect you with third-party service providers (water damage restoration contractors) in your area.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                    </ul>
                    <p className="mt-2 text-red-600 font-semibold">
                        IMPORTANT: By submitting your information, you expressly consent to be contacted by us or our third-party partners via phone, email, or text message, even if you are on a state or federal Do Not Call list.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">4. Disclosure of Your Information</h2>
                    <p>
                        We may disclose personal information that we collect or you provide as described in this privacy policy:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>To our network of third-party service providers (contractors) so they can contact you to provide the requested services.</li>
                        <li>To comply with any court order, law, or legal process.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">5. CCPA Rights (California Residents)</h2>
                    <p>
                        If you are a California resident, you have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.
                        You also have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us via the phone number listed on this website.
                    </p>
                </section>
            </div>
        </div>
    );
}
