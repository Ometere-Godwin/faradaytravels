"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DestinationCard } from "@/components/DestinationCard";
import { DESTINATIONS } from "@/lib/destinations";
import { MainNav } from "@/components/MainNav";

const DESTINATION_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "adventure", label: "Adventure" },
  { id: "romance", label: "Romance" },
  { id: "wellness", label: "Wellness" },
  { id: "beach", label: "Beach" },
  { id: "cultural", label: "Cultural" },
] as const;

export default function DestinationsPage() {
  const router = useRouter();
  const [activeCategoryId, setActiveCategoryId] =
    useState<string>("all");

  const visibleDestinations =
    activeCategoryId === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter(
          (destination) => destination.categoryId === activeCategoryId,
        );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b3a56] text-white">
        {/* Top nav */}
        <MainNav active="destinations" />

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-10 pb-16 pt-20 md:pb-20 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Destinations
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Explore the World&apos;s{" "}
            <span className="text-amber-300">Finest Destinations</span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-100/90 md:text-base">
            From pristine beaches to ancient wonders, discover our curated
            collection of the world&apos;s most captivating destinations.
          </p>
        </div>
      </section>

      {/* Category pills row */}
      <section className="bg-[#f3f2eb] pb-4 pt-0 text-slate-900 md:pb-6 md:pt-0">
        <div className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f3f2eb]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 md:px-12 md:py-5">
            {DESTINATION_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  activeCategoryId === category.id
                    ? "border-[#0b3a56] bg-[#0b3a56] text-white"
                    : "border-slate-300 bg-white text-slate-800 hover:border-[#0b3a56]/70 hover:text-[#0b3a56]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="bg-[#f3f2eb] pb-20 pt-6 text-slate-900 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                onExplore={() =>
                  router.push(`/destinations/${destination.id}`)
                }
                {...destination}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

