"use client";

import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSection } from "@/components/ProcessSection";
import { MainNav } from "@/components/MainNav";

const SERVICES = [
  {
    id: "flights",
    categoryId: "flights",
    imageUrl:
      "https://images.pexels.com/photos/4835425/pexels-photo-4835425.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Flights",
    title: "Flight Bookings",
    shortDescription:
      "Premium flight arrangements with access to first and business class cabins on leading airlines.",
    longDescription:
      "Experience travel at its finest with our premium flight booking service. We partner with the world's leading airlines to secure the best seats, routes, and prices for your journey. Whether you're traveling for business or pleasure, our team ensures every flight is comfortable, convenient, and tailored to your preferences.",
    included: [
      "First & Business Class",
      "Multi-city Itineraries",
      "Airport Lounge Access",
    ],
    highlights: [
      "Priority check-in and boarding",
      "Flexible booking and cancellation",
      "24/7 flight support",
      "Exclusive airline partnerships",
    ],
  },
  {
    id: "stays",
    categoryId: "accommodations",
    imageUrl:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Stays",
    title: "Luxury Accommodations",
    shortDescription:
      "Handpicked 5-star hotels, boutique resorts, and exclusive villas in the world's most coveted locations.",
    longDescription:
      "Stay in style with accommodations curated to match your taste, from beachfront villas to city-center penthouses. Every property we recommend is vetted for exceptional comfort, service, and location.",
    included: ["5-Star Hotels", "Private Villas", "Boutique Resorts"],
    highlights: [
      "VIP check-in and welcome amenities",
      "Late check-out where available",
      "Room upgrades when possible",
      "Curated local recommendations",
    ],
  },
  {
    id: "itineraries",
    categoryId: "experiences",
    imageUrl:
      "https://images.pexels.com/photos/106155/pexels-photo-106155.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Planning",
    title: "Custom Itineraries",
    shortDescription:
      "Bespoke travel plans designed around your preferences, interests, and travel dreams.",
    longDescription:
      "No two journeys are the same. We design fully custom itineraries that reflect your interests, pace, and style of travel—ensuring every day feels intentional, effortless, and inspiring.",
    included: ["Personalized Planning", "Local Experiences", "Flexible Scheduling"],
    highlights: [
      "End-to-end trip management",
      "On-trip adjustments when needed",
      "Insider tips and must-see spots",
      "Seamless coordination across providers",
    ],
  },
  {
    id: "safari",
    categoryId: "adventures",
    imageUrl:
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Safari",
    title: "Safari Adventures",
    shortDescription:
      "Extraordinary African safari journeys with expert guides, luxury camps, and unforgettable wildlife.",
    longDescription:
      "Embark on a once-in-a-lifetime safari crafted with care. From sunrise game drives to starlit dinners in the bush, we partner with trusted operators to deliver safe, immersive, and awe-inspiring wildlife experiences.",
    included: ["Expert Guides", "Luxury Camps", "Wildlife Photography"],
    highlights: [
      "Small-group or private safaris",
      "Tailored to seasons and migrations",
      "Conservation-conscious partners",
      "Optional extensions to nearby cities and beaches",
    ],
  },
  {
    id: "transport",
    categoryId: "transport",
    imageUrl:
      "https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Transfers",
    title: "Chauffeur & Transfers",
    shortDescription:
      "Seamless ground transportation with private drivers, luxury vehicles, and airport meet-and-greet.",
    longDescription:
      "Arrive relaxed and on time with our curated ground transportation network. From airport pickups to full-day chauffeured service, we coordinate every transfer so you never have to worry about logistics or timing.",
    included: [
      "Airport Meet & Greet",
      "Private Chauffeurs",
      "Luxury Sedans & SUVs",
    ],
    highlights: [
      "24/7 transfer coordination",
      "Multi-stop daily service",
      "English-speaking drivers where available",
      "Safe, vetted partners worldwide",
    ],
  },
  {
    id: "visas",
    categoryId: "visas",
    imageUrl:
      "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Visas",
    title: "Visa & Travel Docs",
    shortDescription:
      "Guidance and assistance with visas, entry requirements, and essential travel documentation.",
    longDescription:
      "Navigate complex entry requirements with confidence. We provide up-to-date guidance on visas, health protocols, and travel documentation, and connect you with trusted partners where additional processing support is required.",
    included: [
      "Visa Requirement Checks",
      "Document Checklists",
      "Travel Insurance Guidance",
    ],
    highlights: [
      "Country-specific requirement briefs",
      "Reminders for key deadlines",
      "Coordination with visa centers where applicable",
      "Support for group applications",
    ],
  },
  {
    id: "education",
    categoryId: "education",
    imageUrl:
      "https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Study",
    title: "Educational Travel",
    shortDescription:
      "Curated study tours, language immersion programs, and academic travel experiences.",
    longDescription:
      "Inspire learning beyond the classroom with immersive educational journeys. From university tours to language immersion and cultural exchanges, we design programs that balance discovery, safety, and meaningful learning.",
    included: [
      "School & Campus Tours",
      "Language Immersion",
      "Cultural Excursions",
    ],
    highlights: [
      "Age-appropriate itineraries",
      "Group coordination and safety planning",
      "Local educational partners",
      "Flexible options for educators and parents",
    ],
  },
  {
    id: "careers",
    categoryId: "careers",
    imageUrl:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Careers",
    title: "Corporate Travel & MICE",
    shortDescription:
      "End-to-end planning for corporate trips, retreats, meetings, and incentive travel.",
    longDescription:
      "Support your business objectives with flawlessly executed corporate travel. We manage everything from executive trips to conferences and incentive programs, ensuring your team stays focused on what matters most.",
    included: [
      "Corporate Flight & Hotel Management",
      "Meetings & Events Logistics",
      "Team Retreats",
    ],
    highlights: [
      "Centralized trip coordination",
      "Budget-conscious planning",
      "On-site support options",
      "Brand-aligned experiences",
    ],
  },
] as const;

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "flights", label: "Flights" },
  { id: "accommodations", label: "Accommodations" },
  { id: "adventures", label: "Adventures" },
  { id: "experiences", label: "Experiences" },
  { id: "transport", label: "Transport" },
  { id: "visas", label: "Visas" },
  { id: "education", label: "Education" },
  { id: "careers", label: "Careers" },
] as const;

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const activeService = SERVICES.find((s) => s.id === activeServiceId) ?? null;

  const visibleServices =
    activeCategoryId === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.categoryId === activeCategoryId);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b3a56] text-white">
        {/* Top nav (matches other pages, Services active) */}
        <MainNav active="services" />

        {/* Hero copy */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-10 pb-16 pt-20 md:pb-20 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Our Services
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Premium Travel <span className="text-amber-300">Services</span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-100/90 md:text-base">
            From luxury flights to bespoke itineraries, we offer comprehensive
            travel services designed to make your journey exceptional from start
            to finish.
          </p>
        </div>
      </section>

      {/* Category pills row */}
      <section className="bg-[#f3f2eb] pb-4 pt-0 text-slate-900 md:pb-6 md:pt-0">
        <div className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f3f2eb]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-4 md:px-12 md:py-5">
            {CATEGORIES.map((category) => (
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

      {/* Services grid */}
      <section className="bg-[#f3f2eb] pb-20 pt-6 text-slate-900 md:pb-24 md:pt-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {visibleServices.map((service) => (
              <ServiceCard
                key={service.id}
                imageUrl={service.imageUrl}
                label={service.label}
                title={service.title}
                description={service.shortDescription}
                bullets={service.included}
                onLearnMore={() => setActiveServiceId(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <ProcessSection />

      {/* Bottom CTA */}
      <section className="bg-[#0b3a56] py-12 text-center text-white md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-3 text-sm text-slate-100/90 md:text-base">
            Contact our travel experts today and let us help you plan the trip
            of a lifetime.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button className="btn-primary">
              Book an Appointment
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-slate-900">
              Request a Custom Tour
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-10 md:px-0">
          <div className="max-h-full w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative h-52 w-full md:h-60">
              <Image
                src={activeService.imageUrl}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute left-6 right-6 top-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-3 rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-amber-400 text-xs font-bold text-slate-900">
                    {activeService.label[0]}
                  </span>
                  <span>{activeService.title}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveServiceId(null)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[420px] overflow-y-auto px-6 pb-6 pt-6 md:px-10 md:pb-8">
              <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                {activeService.longDescription}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {activeService.included.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                    Service Highlights
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {activeService.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

