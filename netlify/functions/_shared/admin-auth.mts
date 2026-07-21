import { getUser } from '@netlify/identity'

export const getAdminUser = async () => {
  const user = await getUser()
  const metadata = user?.appMetadata ?? user?.app_metadata
  const roles = Array.isArray(metadata?.roles) ? metadata.roles : []
  return user && roles.includes('admin') ? user : null
}

export const unauthorizedResponse = () => new Response('Authentication required', { status: 401 })
export const forbiddenResponse = () => new Response('Admin role required', { status: 403 })
