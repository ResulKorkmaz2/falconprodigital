import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://falconprodigital.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        // Services
        {
            url: `${baseUrl}/services/search-ads`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/performance-max`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/display-ads`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/youtube-ads`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/keyword-analysis`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services/software`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // Countries
        {
            url: `${baseUrl}/countries/saudi-arabia`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/countries/qatar`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/countries/kuwait`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/countries/bahrain`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.95,
        },
    ];
}
