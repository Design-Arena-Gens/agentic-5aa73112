"use client";

import { useMemo, useState } from "react";
import { VideoCard } from "./video-card";
import { videoCatalog, VideoCategory } from "./video-data";

type FilterCategory = "All" | VideoCategory;

const categories: FilterCategory[] = [
  "All",
  ...(Array.from(new Set(videoCatalog.flatMap((video) => video.categories))) as VideoCategory[]),
];

export function VideoShowcase() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return videoCatalog.filter((video) => {
      const matchesCategory =
        selectedCategory === "All" || video.categories.includes(selectedCategory);

      if (!matchesCategory) return false;

      if (!normalizedQuery) return true;

      const haystack = `${video.title} ${video.description} ${video.categories.join(" ")}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query, selectedCategory]);

  const highlightedVideo = videoCatalog[0];

  return (
    <div className="flex flex-col gap-16">
      <section className="min-h-[420px] rounded-4xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-1 shadow-[0_35px_70px_-35px_rgba(15,23,42,0.6)] ring-1 ring-white/10 lg:grid lg:grid-cols-[1.65fr,1fr]">
        <div className="relative overflow-hidden rounded-[30px] bg-neutral-950">
          <video
            key={highlightedVideo.id}
            className="h-full w-full object-cover"
            src={highlightedVideo.src}
            poster={highlightedVideo.poster}
            controls
            playsInline
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-x-10 bottom-10 max-w-xl space-y-4 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Featured Premiere</p>
            <h2 className="text-4xl font-semibold leading-tight">{highlightedVideo.title}</h2>
            <p className="text-sm leading-relaxed text-white/80">
              {highlightedVideo.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/70">
              <span>{highlightedVideo.duration}</span>
              <span className="text-white/50">•</span>
              <span>{highlightedVideo.resolution}</span>
              <span className="text-white/50">•</span>
              <span>{highlightedVideo.views} views</span>
              <span className="text-white/50">•</span>
              <span>{highlightedVideo.released}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-[30px] bg-neutral-950/80 p-10">
          <div>
            <h3 className="text-2xl font-semibold text-white">This week&apos;s highlights</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Handpicked releases and cinematic shorts from emerging storytellers around the globe.
              Tune in live or queue them for later.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-6 text-sm text-neutral-300">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500">Curations</dt>
              <dd className="mt-1 text-2xl font-medium text-white">65</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500">Creators</dt>
              <dd className="mt-1 text-2xl font-medium text-white">420</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500">Watch time</dt>
              <dd className="mt-1 text-2xl font-medium text-white">48 hrs</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-neutral-500">New drops</dt>
              <dd className="mt-1 text-2xl font-medium text-white">12</dd>
            </div>
          </dl>

          <div className="space-y-1 text-xs text-neutral-500">
            <p>Join premiere watch parties with synchronized playback, live chat, and behind-the-scenes access.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Discover more cinema</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
              Filter editorial picks by genre and search across our short-form libraries to find the
              next film to add to your queue.
            </p>
          </div>
          <div className="relative">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, genre, or keyword"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500/40 lg:min-w-[320px]"
            />
            <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.3em] text-neutral-600">
              Search
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition ${
                  isActive
                    ? "border-white bg-white text-neutral-900 shadow-[0_20px_40px_-25px_rgba(255,255,255,0.8)]"
                    : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredVideos.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[.04] p-12 text-center text-sm text-neutral-400">
            No videos found for your filters. Try another combination.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
