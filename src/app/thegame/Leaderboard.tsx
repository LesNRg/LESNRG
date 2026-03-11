import { Trophy } from "lucide-react";

type Score = { name: string; company: string; score: number };

async function getWeeklyScores(): Promise<Score[]> {
  const d = new Date();
  const day = d.getDay();
  d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
  d.setHours(0, 0, 0, 0);

  try {
    const res = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/scores?select=name,company,score&created_at=gte.${d.toISOString()}&order=score.desc&limit=10`,
      {
        headers: {
          apikey: process.env.SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY!}`,
        },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

const RANK_COLORS = ["text-[#F5C500]", "text-white/50", "text-[#cd7f32]"];

export default async function Leaderboard() {
  const scores = await getWeeklyScores();

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 xl:px-12 pb-20">
      <div className="flex items-center gap-3 mb-6">
        <Trophy size={18} className="text-[#F5C500]" />
        <h2
          className="font-black text-white text-xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          This Week&apos;s Top 10
        </h2>
      </div>

      {scores.length === 0 ? (
        <p className="text-white/30 text-sm">
          No scores yet this week — play the game to get on the board.
        </p>
      ) : (
        <div className="rounded-xl overflow-hidden border border-white/8 max-w-xl">
          {scores.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 px-5 py-3 ${
                i < scores.length - 1 ? "border-b border-white/6" : ""
              } ${i < 3 ? "bg-white/4" : ""}`}
            >
              <span
                className={`w-5 text-sm font-black tabular-nums ${
                  RANK_COLORS[i] ?? "text-white/25"
                }`}
              >
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-white text-sm font-semibold truncate">
                  {s.name}
                </span>
                {s.company && (
                  <span className="text-white/35 text-sm ml-2">{s.company}</span>
                )}
              </div>
              <span className="text-[#F5C500] font-black text-sm tabular-nums">
                {s.score} pts
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
