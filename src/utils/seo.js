import { siteConfig } from '../config/site.js'
import { seoByRoute } from '../config/seo.js'

export const DEFAULT_SOCIAL_IMAGE = '/images/og-maison-loratu.jpg'

const absoluteUrl = (path) => new URL(path, siteConfig.siteUrl).toString()

const offer = (name, price) => ({
  '@type': 'Offer',
  price: String(price),
  priceCurrency: 'EUR',
  itemOffered: { '@type': 'Service', name },
})

export const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.siteUrl}/#maison-loratu`,
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  image: absoluteUrl(DEFAULT_SOCIAL_IMAGE),
  description: 'Séances et ateliers de sophrologie pour enfants, adolescentes, femmes et grand-mères.',
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: { '@type': 'PostalAddress', ...siteConfig.postalAddress },
  priceRange: '45 € – 80 €',
  areaServed: siteConfig.serviceArea.map((name) => ({
    '@type': 'City',
    name,
    addressCountry: 'FR',
  })),
  sameAs: [siteConfig.instagramUrl, siteConfig.resalibUrl.split('#')[0]],
  makesOffer: [
    offer('Les Petits Explorateurs — atelier de sophrologie pour enfants', 45),
    offer('Mamas & enfants — atelier de sophrologie par binôme', 45),
    offer('Parent-hèses à deux — atelier privé parent et enfant', 80),
    offer('Accompagnement individuel en sophrologie pour enfants', 60),
    offer('Accompagnement individuel en sophrologie pour femmes', 70),
  ],
})

export const getRouteSeo = (routeName) => seoByRoute[routeName] || seoByRoute.home

// Balises <head> d'une route, rendues au pré-rendu puis mises à jour à chaque navigation.
export const buildRouteHead = (route) => {
  const metadata = getRouteSeo(route.name)
  const canonicalUrl = absoluteUrl(route.path || '/')
  const imageUrl = absoluteUrl(metadata.image || DEFAULT_SOCIAL_IMAGE)

  return {
    title: metadata.title,
    htmlAttrs: { lang: 'fr' },
    meta: [
      { name: 'description', content: metadata.description },
      { name: 'robots', content: metadata.noindex ? 'noindex, nofollow' : 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:site_name', content: siteConfig.siteName },
      { property: 'og:title', content: metadata.title },
      { property: 'og:description', content: metadata.description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: metadata.title },
      { name: 'twitter:description', content: metadata.description },
      { name: 'twitter:image', content: imageUrl },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: metadata.noindex
      ? []
      : [{ key: 'local-business-schema', type: 'application/ld+json', innerHTML: JSON.stringify(createLocalBusinessSchema()) }],
  }
}

export const createFaqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
})
