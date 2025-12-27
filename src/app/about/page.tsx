import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-900">About Us</h1>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
                <div className="w-full md:w-1/2 max-w-lg relative aspect-square rounded-xl overflow-hidden shadow-2xl">
                    <Image
                        src="/my-story.jpg"
                        alt="My Story"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="w-full md:w-1/2 prose prose-slate text-slate-700">
                    <p className="text-lg leading-relaxed">
                        We are dedicated to providing the best water damage restoration services.
                        Our team is here to help you recover and restore your property with care and expertise.
                    </p>
                </div>
            </div>
        </div>
    );
}
