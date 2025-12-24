
import Link from "next/link";

export const metadata = {
    title: "Terms of Service | A Water Damage Restoration Near Me",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of the Terms</h2>
                    <p>
                        These terms of use are entered into by and between You and A Water Damage Restoration Near Me ("Company," "we," or "us").
                        By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">2. Service Description</h2>
                    <p>
                        This Website acts as a referral service/lead generation platform. We are NOT a construction or water damage restoration company.
                        We do not provide any physical services at your property. We connect you with local independent contractors who pay us for leads or advertising.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">3. No Professional Advice or Warranty</h2>
                    <p>
                        We do not endorse, warrant, or guarantee the work of any third-party contractor you connect with through this site.
                        Any agreement you enter into is strictly between you and the third-party service provider.
                        We are not liable for any damages, disputes, or claims arising from the work performed by these third parties.
                    </p>
                    <p className="mt-2 font-semibold">
                        It is your sole responsibility to verify the license, insurance, and bonding of any contractor you hire.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">4. TCPA Consent</h2>
                    <p>
                        By submitting your phone number, you consent to receive calls and text messages from us and our partners at the number provided,
                        including via automated dialing systems. Content is not a condition of purchase.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">5. Limitation of Liability</h2>
                    <p>
                        In no event will the Company, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind,
                        under any legal theory, arising out of or in connection with your use, or inability to use, the Website or any services obtained through the Website.
                    </p>
                </section>
            </div>
        </div>
    );
}
