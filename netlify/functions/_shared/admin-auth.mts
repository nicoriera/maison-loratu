import { getUser } from '@netlify/identity'

export const getAdminUser = async () => {
  const user = await getUser()
  const roles = Array.isArray(user?.app_metadata?.roles) ? user.app_metadata.roles : []
  return user && roles.includes('admin') ? user : null
}

export const unauthorizedResponse = () => new Response('Authentication required', { status: 401 })
export const forbiddenResponse = () => new Response('Admin role required', { status: 403 })
