"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Testimonial = {
  imageUrl: string;
  quote: string;
  name: string;
  location: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    imageUrl:
      "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote:
      "Focus Escape transformed our honeymoon into a fairy tale. Every detail was perfect, from the private villa in Bali to the surprise candlelit dinner on the beach.",
    name: "Amelia & James Carter",
    location: "Bali Retreat, Indonesia",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote:
      "We felt like celebrities in Santorini. The cliffside views, yacht cruise, and curated dining experiences were beyond anything we imagined.",
    name: "Sophia Martinez",
    location: "Santorini Escape, Greece",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote:
      "Our African safari was seamless from start to finish. Expert guides, luxurious tents, and wildlife encounters that left us speechless.",
    name: "David & Lauren King",
    location: "African Safari, Kenya & Tanzania",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote:
      "From the moment we landed, everything was handled. The city tours, rooftop dinners, and cultural experiences were perfectly paced.",
    name: "Michael Chen",
    location: "European City Lights Tour",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote:
      "The team anticipated our needs before we even expressed them. It was the most relaxed we’ve ever felt on vacation.",
    name: "Isabella Rossi",
    location: "Amalfi Coast Getaway, Italy",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="bg-[#0b3a56] py-20 text-white md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-12">
        <SectionHeader
          eyebrow="Testimonials"
          title="Stories from Our Travelers"
          description="Don’t just take our word for it. Hear from the discerning travelers who have experienced the Focus Escape difference."
          align="center"
          className="text-white [&_h2]:text-white [&_p]:text-slate-100/90"
        />

        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/60">
            {/* Background image */}
            <div className="relative h-[360px] w-full md:h-[380px]">
              <Image
                key={active.imageUrl}
                src={active.imageUrl}
                alt={active.location}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 800px, 100vw"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/85 via-slate-950/65 to-slate-900/10" />
            </div>

            {/* Content overlay */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end rounded-3xl px-7 pb-8 pt-10 md:px-10 md:pb-10">
              <div className="flex items-center gap-3 text-amber-400">
                <Quote className="h-7 w-7" />
                <div className="flex gap-1 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-100 md:text-base">
                “{active.quote}”
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-100/90">
                <div>
                  <div className="font-semibold">{active.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-200/80">
                    {active.location}
                  </div>
                </div>

                <div className="pointer-events-auto flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-md ring-1 ring-white/15 transition hover:bg-white hover:text-slate-900"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-md ring-1 ring-white/15 transition hover:bg-white hover:text-slate-900"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-amber-400"
                    : "w-3 bg-slate-200/40 hover:bg-slate-200/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

