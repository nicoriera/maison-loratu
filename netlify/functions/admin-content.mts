import { getStore } from '@netlify/blobs'
import type { Config, Context } from '@netlify/functions'
import { createInitialAdminContent, validateAdminContent } from '../../src/config/adminContent.js'
import { getAdminUser, forbiddenResponse, unauthorizedResponse } from './_shared/admin-auth.mts'

const store = getStore({ name: 'maison-loratu-content', consistency: 'strong' })
const contentKey = 'site-content'

const readContent = async () => (await store.get(contentKey, { type: 'json' })) ?? createInitialAdminContent()

export default async (request: Request, _context: Context) => {
  const user = await getAdminUser()
  if (!user) {
    const authenticatedUser = await (async () => {
      try { return await import('@netlify/identity').then(({ getUser: readUser }) => readUser()) } catch { return null }
    })()
    return authenticatedUser ? forbiddenResponse() : unauthorizedResponse()
  }

  if (request.method === 'GET') {
    return Response.json(await readContent(), { headers: { 'Cache-Control': 'no-store' } })
  }

  if (request.method !== 'PUT') return new Response('Method not allowed', { status: 405 })

  let payload
  try { payload = await request.json() } catch { return new Response('Invalid JSON', { status: 400 }) }
  const { sanitizedContent, issues } = validateAdminContent(payload)
  if (issues.length) return Response.json({ issues }, { status: 422 })

  await store.setJSON(contentKey, {
    ...sanitizedContent,
    updatedAt: new Date().toISOString(),
    updatedBy: user.email ?? user.id,
  })
  return Response.json(sanitizedContent, { headers: { 'Cache-Control': 'no-store' } })
}

export const config: Config = {
  path: '/api/admin/content',
}
