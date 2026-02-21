import { SectionHeader } from "./SectionHeader";
import { DestinationCard } from "./DestinationCard";

const DESTINATIONS = [
  {
    imageUrl:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600", // African safari
    country: "Kenya & Tanzania",
    title: "African Safari",
    priceLabel: "$4,500",
    description:
      "Witness the majesty of the wild in luxury tented camps beneath endless African skies.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600", // Santorini
    country: "Greece",
    title: "Santorini Escape",
    priceLabel: "$3,700",
    description:
      "Romance and breathtaking views in the Mediterranean, from cliffside sunsets to hidden coves.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1600", // Bali rice fields
    country: "Indonesia",
    title: "Bali Retreat",
    priceLabel: "$2,900",
    description:
      "Serenity and spirituality in tropical paradise, nestled among lush rice terraces and temples.",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600", // Bali rice fields
    country: "Indonesia",
    title: "Mali Retreat",
    priceLabel: "$6,900",
    description:
      "Serenity and spirituality in tropical paradise, nestled among lush rice terraces and temples.",
  },
];

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

          <button className="btn-outline-light text-slate-900 hover:text-slate-900">
            <span>View All Destinations</span>
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
