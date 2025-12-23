export function JsonLd({ areaServed = "United States" }: { areaServed?: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EmergencyService",
        "name": "A Water Damage Restoration Near Me",
        "image": "https://awaterdamagerestorationnearme.com/logo.png",
        "@id": "https://awaterdamagerestorationnearme.com",
        "url": "https://awaterdamagerestorationnearme.com",
        "telephone": "888-472-6447",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "N/A - Mobile Service",
            "addressLocality": "Online",
            "addressRegion": "US",
            "postalCode": "00000",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.0902,
            "longitude": -95.7129
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://awaterdamagerestorationnearme.com"
        ],
        "areaServed": {
            "@type": "Country",
            "name": areaServed
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
