import Image from "next/image";
import { Check } from "lucide-react";

interface ServiceCardProps {
  imageUrl: string;
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  onLearnMore?: () => void;
}

export function ServiceCard({
  imageUrl,
  label,
  title,
  description,
  bullets,
  onLearnMore,
}: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 50vw, 100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center rounded-xl bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
          {label}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className="text-base font-semibold text-slate-900 md:text-lg">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>

        <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onLearnMore}
          className="mt-4 inline-flex items-center text-sm font-semibold text-amber-500"
        >
          Learn More
          <span className="ml-1">→</span>
        </button>
      </div>
    </article>
  );
}

