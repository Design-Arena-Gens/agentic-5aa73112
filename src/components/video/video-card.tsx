import Image from "next/image";
import { VideoResource } from "./video-data";

type VideoCardProps = {
  video: VideoResource;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-neutral-900/70 ring-1 ring-neutral-800 transition hover:scale-[1.01] hover:shadow-[0_20px_45px_-20px_rgba(16,24,40,0.6)] hover:ring-neutral-700">
      <div className="relative aspect-video overflow-hidden">
        <Image
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          src={video.poster}
          alt={video.title}
          width={720}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
            {video.duration}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
            {video.resolution}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
            {video.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            {video.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-neutral-400">
          <span>{video.released}</span>
          <span className="text-neutral-500">•</span>
          <span>{video.views} views</span>
        </div>

        <div className="-mb-1 flex flex-wrap gap-2">
          {video.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
