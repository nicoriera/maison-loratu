import type { Config, Context } from '@netlify/functions'

const RESALIB_PROFILE_URL = 'https://www.resalib.fr/praticien/136767-maison-loratu-sophrologue-certifiee-sophrologue-bayonne'

export default async (_request: Request, _context: Context) => {
  try {
    const response = await fetch(RESALIB_PROFILE_URL, { headers: { 'User-Agent': 'Maison Loratu reviews counter/1.0' } })
    if (!response.ok) throw new Error(`Resalib returned ${response.status}`)
    const html = await response.text()
    const reviewMatch = html.match(/(?:>|\s)(\d+)\s+avis(?:\s+sur|\s*[<])/i)
    const ratingMatch = html.match(/(?:>|\s)([0-5](?:[.,]\d)?)\s*(?:\/\s*5|★)/i)
    if (!reviewMatch) throw new Error('Review count not found')

    return new Response(JSON.stringify({
      reviewCount: Number(reviewMatch[1]),
      rating: ratingMatch ? Number(ratingMatch[1].replace(',', '.')) : null,
    }), { headers: { 'Cache-Control': 'public, max-age=300, s-maxage=1800', 'Content-Type': 'application/json; charset=utf-8' } })
  } catch {
    return new Response(JSON.stringify({ error: 'Resalib reviews unavailable' }), { status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8' } })
  }
}

export const config: Config = {
  path: '/api/resalib-reviews',
}
