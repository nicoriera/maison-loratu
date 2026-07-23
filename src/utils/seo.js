import { siteConfig } from '../config/site.js'
import { seoByRoute } from '../config/seo.js'

const upsertMeta = (attribute, key, content) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const upsertStructuredData = (data) => {
  let element = document.head.querySelector('#local-business-schema')

  if (!element) {
    element = document.createElement('script')
    element.id = 'local-business-schema'
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  description: 'Séances et ateliers de sophrologie pour enfants, adolescentes, femmes et grand-mères.',
  areaServed: siteConfig.serviceArea.map((name) => ({
    '@type': 'City',
    name,
    addressCountry: 'FR',
  })),
  sameAs: [siteConfig.instagramUrl],
  serviceType: [
    'Atelier de sophrologie pour enfants',
    'Atelier de sophrologie pour seniors',
    'Atelier duo mère-fille ou grand-mère',
    'Accompagnement individuel en sophrologie',
  ],
})

export const getRouteSeo = (routeName) => seoByRoute[routeName] || seoByRoute.home

export const applyRouteSeo = (route) => {
  const metadata = getRouteSeo(route.name)
  const canonicalUrl = new URL(route.path || '/', siteConfig.siteUrl).toString()
  const robots = metadata.noindex ? 'noindex, nofollow' : 'index, follow'

  document.title = metadata.title
  document.documentElement.lang = 'fr'
  upsertMeta('name', 'description', metadata.description)
  upsertMeta('name', 'robots', robots)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', siteConfig.siteName)
  upsertMeta('property', 'og:title', metadata.title)
  upsertMeta('property', 'og:description', metadata.description)
  upsertMeta('property', 'og:url', canonicalUrl)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', metadata.title)
  upsertMeta('name', 'twitter:description', metadata.description)
  upsertLink('canonical', canonicalUrl)

  if (!metadata.noindex) {
    upsertStructuredData(createLocalBusinessSchema())
  } else {
    document.head.querySelector('#local-business-schema')?.remove()
  }
}
