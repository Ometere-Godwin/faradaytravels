import Link from "next/link";
import { DESTINATIONS } from "@/lib/destinations";
import { SectionHeader } from "./SectionHeader";
import { DestinationCard } from "./DestinationCard";

/** Same trio as the first entries in `DESTINATIONS` — single source of truth. */
const FEATURED_DESTINATION_IDS = [
  "african-safari",
  "santorini-escape",
  "bali-retreat",
] as const;

const FEATURED_DESTINATIONS = FEATURED_DESTINATION_IDS.map((id) => {
  const d = DESTINATIONS.find((item) => item.id === id);
  if (!d) throw new Error(`Unknown destination id: ${id}`);
  return d;
});

export function FeaturedDestinationsSection() {
  return (
    <section className="bg-[#f3f2eb] pb-20 pt-10 text-slate-900 md:pb-24 md:pt-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Featured Destinations"
            title="Where Dreams Come Alive"
            description="Handpicked journeys that capture the very best of each destination, curated for unforgettable memories."
            align="left"
          />

          <Link
            href="/destinations"
            className="btn-outline-light inline-flex text-slate-900 hover:text-slate-900"
          >
            <span>View All Destinations</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              exploreHref={`/destinations/${destination.id}`}
              {...destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
