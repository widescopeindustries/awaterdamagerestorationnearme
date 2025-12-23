import { MetadataRoute } from 'next'

import { ALL_LOCATIONS } from '@/lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.awaterdamagerestorationnearme.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },

        ...ALL_LOCATIONS.map((slug) => ({
            url: `https://www.awaterdamagerestorationnearme.com/locations/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.8,
        })),
    ]
}
