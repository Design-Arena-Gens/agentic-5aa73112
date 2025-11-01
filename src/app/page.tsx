import Link from "next/link";
import { VideoShowcase } from "@/components/video/video-showcase";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 blur-[120px]">
        <div className="absolute left-1/2 top-32 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/30" />
        <div className="absolute left-[12%] top-[38%] h-[420px] w-[420px] rounded-full bg-blue-500/20" />
        <div className="absolute right-[10%] top-[40%] h-[360px] w-[360px] rounded-full bg-rose-500/20" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-neutral-900">
            AV
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              Aurora Vault
            </p>
            <p className="text-lg font-medium text-white">Curated cinematic stories</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 lg:flex">
          <Link href="#programming" className="transition hover:text-white">
            Programming
          </Link>
          <Link href="#curation" className="transition hover:text-white">
            Curation
          </Link>
          <Link href="#collective" className="transition hover:text-white">
            Collective
          </Link>
          <Link href="#support" className="transition hover:text-white">
            Support
          </Link>
        </nav>

        <Link
          href="#join"
          className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-900 transition hover:bg-white/90"
        >
          Join Premieres
        </Link>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24">
        <section className="space-y-10 pt-6">
          <div className="max-w-4xl space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              The independent cinema network
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white">
              Stream premiere-ready documentaries, animations, and travel shorts from emerging
              filmmakers around the globe.
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
              Aurora Vault elevates the next generation of storytellers with hand-picked programmes,
              synchronized watch parties, and real-time creator access. Watch now or build a
              collaborative queue with your crew.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Premiere ready titles", value: "320+" },
              { label: "Creator residencies", value: "28" },
              { label: "Community screenings", value: "5k" },
              { label: "Countries streaming", value: "42" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-neutral-900/70 p-5 text-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <VideoShowcase />

        <section
          id="programming"
          className="grid gap-8 rounded-[30px] border border-white/10 bg-neutral-900/70 p-10 lg:grid-cols-2"
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">Programming</p>
            <h2 className="text-3xl font-semibold text-white">
              Weekly drops tuned for creative teams, classrooms, and midnight-inspiration seekers.
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400">
              Build collections with your collaborators, sync playback across continents, and access
              creator toolkits that include scripts, shot breakdowns, and grade presets.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-neutral-300">
            {[
              "Live annotation overlays for remote critique sessions.",
              "Offline-first mobile apps for field teams on remote shoots.",
              "24-hour window premieres with interactive Q&A and polls.",
              "Curated learning paths for classrooms and workshops.",
            ].map((feature) => (
              <li
                key={feature}
                className="rounded-2xl border border-white/5 bg-white/[.04] px-5 py-4"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer
        id="support"
        className="border-t border-white/5 bg-neutral-950/80 py-12 text-center text-xs uppercase tracking-[0.35em] text-neutral-600"
      >
        Aurora Vault · © {new Date().getFullYear()} · Built for film collectives
      </footer>
    </div>
  );
}
