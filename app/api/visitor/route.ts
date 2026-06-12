import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const DEV_MOCK = [
  { country_code: 'IN', count: 12 },
  { country_code: 'US', count: 5 },
  { country_code: 'GB', count: 3 },
  { country_code: 'SG', count: 2 },
  { country_code: 'DE', count: 1 },
]

function getRedis() {
  if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
    return null
  }
  return Redis.fromEnv()
}

// GET — return all visitor country counts
export async function GET() {
  const redis = getRedis()
  if (!redis) return NextResponse.json(DEV_MOCK)

  try {
    const countries = await redis.smembers('visitors:all') as string[]
    if (!countries || countries.length === 0) {
      return NextResponse.json([])
    }

    // Pipeline — one round trip for all counts
    const pipeline = redis.pipeline()
    countries.forEach((cc) => pipeline.get(`visitors:${cc}`))
    const counts = await pipeline.exec()

    const result = countries.map((cc, i) => ({
      country_code: cc,
      count: Number(counts[i]) || 0,
    }))

    return NextResponse.json(result)
  } catch (err) {
    console.error('[visitor GET]', err)
    return NextResponse.json([])
  }
}

// POST — track a new visit
export async function POST(req: NextRequest) {
  const redis = getRedis()
  if (!redis) return NextResponse.json({ dev: true })

  // Skip if already tracked this session
  const cookie = req.cookies.get('vg_visited')
  if (cookie) return NextResponse.json({ skipped: true })

  try {
    // Get real IP from Vercel headers
    const forwarded = req.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0].trim()

    const geoUrl = ip
      ? `https://ipapi.co/${ip}/json/`
      : 'https://ipapi.co/json/'

    const geoRes = await fetch(geoUrl, {
      headers: { 'User-Agent': 'aryanpachori.live' },
      signal: AbortSignal.timeout(3000),
    })

    if (!geoRes.ok) throw new Error('ipapi failed')

    const geo = await geoRes.json()
    const cc = geo.country_code as string

    if (!cc || cc === 'undefined' || cc.length !== 2) {
      throw new Error(`Bad country code: ${cc}`)
    }

    // Write to Upstash
    await redis.incr(`visitors:${cc}`)
    await redis.sadd('visitors:all', cc)

    console.log(`[visitor] +1 from ${cc} (${geo.country_name})`)

    const res = NextResponse.json({
      country_code: cc,
      country_name: geo.country_name,
    })

    res.cookies.set('vg_visited', '1', {
      httpOnly: true,
      maxAge: 3600,
      sameSite: 'lax',
      path: '/',
    })

    return res
  } catch (err) {
    console.error('[visitor POST]', err)
    // Silent fail — never crash the page
    return NextResponse.json({ error: 'tracking_failed' }, { status: 200 })
  }
}
