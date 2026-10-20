import { MetadataRoute } from 'next'
import { projectsData } from '@/lib/projects-data'
import { siteConfig } from '@/lib/site-config'

function parseProjectDate(dateStr?: string): Date {
  if (!dateStr) return new Date('2026-01-01T00:00:00.000Z')
  // Parses "Aug 2025", "Feb 2026", "Jan 2026", etc.
  const parsed = Date.parse(`01 ${dateStr} UTC`)
  if (!isNaN(parsed)) {
    return new Date(parsed)
  }
  return new Date('2026-01-01T00:00:00.000Z')
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  // Stable audit/release date prevents artificial reindexing churn on crawlers
  const coreLastModified = new Date('2026-10-20T00:00:00.000Z')

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hire`,
      lastModified: coreLastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: coreLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work/research/ai-legal-contract`,
      lastModified: new Date('2026-02-15T00:00:00.000Z'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  // Dynamically derive all public case study projects from the single source of truth
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: parseProjectDate(project.date),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticRoutes, ...projectRoutes]
}
