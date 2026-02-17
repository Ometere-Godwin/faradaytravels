import Image from "next/image";
import { CalendarDays, MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  imageUrl: string;
  country: string;
  title: string;
  priceLabel: string;
  description: string;
  categoryLabel?: string;
  durationLabel?: string;
  rating?: number;
  onExplore?: () => void;
}

export function DestinationCard({
  imageUrl,
  country,
  title,
  priceLabel,
  description,
  categoryLabel,
  durationLabel,
  rating,
  onExplore,
}: DestinationCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/0" />

        <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-2">
            {categoryLabel && (
              <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                {categoryLabel}
              </span>
            )}
            <div className="inline-flex items-center gap-1 rounded-full bg-black/45 px-3 py-1 text-white/90 backdrop-blur-sm">
              <MapPin className="h-3 w-3" />
              <span>{country}</span>
            </div>
          </div>

          <div className="inline-flex items-center rounded-full bg-amber-400 px-3 py-1 text-[11px] font-semibold text-black shadow-md">
            From {priceLabel}
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-lg font-semibold text-white drop-shadow-sm">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            {durationLabel && (
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                <span>{durationLabel}</span>
              </span>
            )}
          </div>
          {rating && (
            <div className="inline-flex items-center gap-1 text-amber-500">
              <Star className="h-3.5 w-3.5 fill-amber-500" />
              <span className="text-xs font-semibold text-slate-700">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0b3a56] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0c4568]"
        >
          Explore Tour
          <span className="ml-1">→</span>
        </button>
      </div>
    </article>
  );
}

