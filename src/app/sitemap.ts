import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://awaterdamagerestorationnearme.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },

        ...[
            "los-angeles-ca", "san-diego-ca", "san-jose-ca", "san-francisco-ca",
            "fresno-ca", "sacramento-ca", "long-beach-ca", "oakland-ca",
            "bakersfield-ca", "anaheim-ca", "santa-ana-ca", "riverside-ca",
            "stockton-ca", "chula-vista-ca", "irvine-ca", "fremont-ca",
            "san-bernardino-ca", "modesto-ca", "fontana-ca", "santa-clarita-ca"
        ].map((slug) => ({
            url: `https://awaterdamagerestorationnearme.com/locations/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        })),
    ]
}
