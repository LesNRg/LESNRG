import { NextResponse } from "next/server";

const SB_URL = process.env.SUPABASE_URL!;
const SB_KEY = process.env.SUPABASE_ANON_KEY!;

const hdrs = {
  "Content-Type": "application/json",
  apikey: SB_KEY,
  Authorization: `Bearer ${SB_KEY}`,
};

function getWeekStart() {
  const d = new Date();
  const day = d.getDay();
  d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day)); // Monday
  d.setHours(0, 0, 0, 0);
  return d.toISOString();
}

export async function GET() {
  const res = await fetch(
    `${SB_URL}/rest/v1/scores?select=name,company,score&created_at=gte.${getWeekStart()}&order=score.asc&limit=10`,
    { headers: hdrs, cache: "no-store" }
  );
  if (!res.ok) return NextResponse.json([]);
  return NextResponse.json(await res.json());
}

export async function POST(req: Request) {
  const { name, company, score } = await req.json();
  if (!name || typeof score !== "number") {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const res = await fetch(`${SB_URL}/rest/v1/scores`, {
    method: "POST",
    headers: { ...hdrs, Prefer: "return=minimal" },
    body: JSON.stringify({ name, company: company || "", score }),
  });
  return res.ok
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ error: "failed" }, { status: 500 });
}
