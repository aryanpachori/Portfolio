import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Rate-limit: skip if already tracked this session
  const visited = req.cookies.get("vg_visited");
  if (visited) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const geo = await fetch("https://ipapi.co/json/", {
      next: { revalidate: 0 },
    }).then((r) => r.json());

    const code: string = (geo.country_code ?? "XX").toUpperCase();
    const name: string = geo.country_name ?? "Unknown";

    await Promise.all([
      kv.incr(`visitors:${code}`),
      kv.sadd("visitors:all", code),
      kv.hset("visitors:names", { [code]: name }),
    ]);

    const count = await kv.get<number>(`visitors:${code}`);

    const res = NextResponse.json({ country_code: code, country_name: name, count });
    res.cookies.set("vg_visited", "1", { httpOnly: true, maxAge: 3600, path: "/" });
    return res;
  } catch {
    return NextResponse.json({ ok: true, error: "tracking_failed" });
  }
}

export async function GET() {
  try {
    const codes = await kv.smembers<string[]>("visitors:all");
    if (!codes || codes.length === 0) {
      return NextResponse.json([], { headers: { "Cache-Control": "s-maxage=60" } });
    }

    const pipeline = kv.pipeline();
    for (const code of codes) pipeline.get(`visitors:${code}`);
    const counts = await pipeline.exec<number[]>();

    const names = await kv.hgetall<Record<string, string>>("visitors:names") ?? {};

    const data = codes.map((code, i) => ({
      country_code: code,
      country_name: names[code] ?? code,
      count: counts[i] ?? 0,
    }));

    return NextResponse.json(data, { headers: { "Cache-Control": "s-maxage=60" } });
  } catch {
    return NextResponse.json([]);
  }
}
