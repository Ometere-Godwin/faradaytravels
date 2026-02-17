import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Star, Check } from "lucide-react";
import { DESTINATIONS } from "@/lib/destinations";
import { MainNav } from "@/components/MainNav";

interface DestinationDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { id } = await params;
  const destination = DESTINATIONS.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={destination.imageUrl}
            alt={destination.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/40" />

        {/* Top nav (simple version, consistent with other pages) */}
        <MainNav active="destinations" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 px-10 pb-16 pt-24 md:pb-24 md:pt-28">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-100/90">
            {destination.categoryLabel && (
              <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-white shadow-md">
                {destination.categoryLabel}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {destination.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100/90">
            <span>{destination.country}</span>
            {destination.durationLabel && (
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{destination.durationLabel}</span>
              </span>
            )}
            {typeof destination.rating === "number" && (
              <span className="inline-flex items-center gap-1 text-amber-300">
                <Star className="h-4 w-4 fill-amber-300" />
                <span>{destination.rating.toFixed(1)} Rating</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing + CTA band */}
      <section className="bg-[#0b3a56] py-8 text-white md:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-300">
              Starting from
            </p>
            <p className="mt-2 text-2xl font-semibold text-amber-300 md:text-3xl">
              From {destination.priceLabel}
            </p>
          </div>

          <div className="flex flex-1 flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-2 text-sm text-slate-100/90">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-xs">
                ⓘ
              </span>
              <span>
                Best time to visit: April - June, September - October
              </span>
            </div>
            <button className="btn-primary">
              Book This Tour
            </button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-[#f3f2eb] pb-24 pt-12 text-slate-900">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                {destination.overview ?? destination.description}
              </p>
            </div>

            <div className="rounded-3xl bg-white px-6 py-6 shadow-sm md:px-7 md:py-7">
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Highlights
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {(destination.highlights ?? []).map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {destination.galleryImages && destination.galleryImages.length > 0 && (
        <section className="bg-[#f3f2eb] pb-24 text-slate-900">
          <div className="mx-auto max-w-6xl px-6 md:px-12">
            <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight md:mb-8 md:text-3xl">
              Gallery
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {destination.galleryImages.map((src) => (
                <div
                  key={src}
                  className="relative h-52 overflow-hidden rounded-3xl md:h-60"
                >
                  <Image
                    src={src}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sample Itinerary */}
      {destination.itineraryDays && destination.itineraryDays.length > 0 && (
        <section className="bg-[#f3f2eb] pb-24 text-slate-900">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:mb-10 md:text-3xl">
              Sample Itinerary
            </h2>

            <div className="relative pl-6 md:pl-10">
              {/* Vertical line */}
              <div className="absolute left-2 top-0 bottom-0 w-px bg-[#0b3a56]/30 md:left-4" />

              <div className="space-y-4">
                {destination.itineraryDays.map((day) => (
                  <div
                    key={day.dayLabel + day.title}
                    className="relative flex items-stretch gap-4"
                  >
                    {/* Timeline dot */}
                    <div className="relative mt-6 flex w-4 items-center justify-center md:w-6">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0b3a56]" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-3xl bg-white px-6 py-5 shadow-sm md:px-7 md:py-6">
                      <span className="inline-flex items-center rounded-full bg-[#0b3a56] px-3 py-1 text-[11px] font-semibold text-white">
                        {day.dayLabel}
                      </span>
                      <h3 className="mt-3 text-sm font-semibold text-slate-900 md:text-base">
                        {day.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-[#0b3a56] py-12 text-center text-white md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to Experience {destination.title}?
          </h2>
          <p className="mt-3 text-sm text-slate-100/90 md:text-base">
            Let our travel experts craft your perfect adventure experience. Every
            detail customized to your preferences.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="btn-primary">
              Book This Tour
            </button>
            <button className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-amber-400 bg-transparent px-6 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-slate-900">
              Request Details
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

