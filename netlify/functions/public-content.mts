import { getStore } from '@netlify/blobs'
import type { Config, Context } from '@netlify/functions'
import { createInitialAdminContent } from '../../src/config/adminContent.js'

const store = getStore({ name: 'maison-loratu-content', consistency: 'strong' })

export default async (_request: Request, _context: Context) => {
  const content = (await store.get('site-content', { type: 'json' })) ?? createInitialAdminContent()
  return Response.json(
    {
      public: content.public,
      offers: content.offers,
      faq: content.faq,
      articles: Array.isArray(content.articles)
        ? content.articles.filter((article) => article.status === 'published')
        : [],
    },
    { headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' } },
  )
}

export const config: Config = {
  path: '/api/content',
}
