"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
} from "lucide-react";
import { MainNav } from "@/components/MainNav";
import { WhyChooseUsSection } from "../components/WhyChooseUsSection";
import { FeaturedDestinationsSection } from "../components/FeaturedDestinationsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CallToActionSection } from "../components/CallToActionSection";

const HERO_IMAGES = [
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600", // Tropical beach
  "https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&w=1600", // Mountain lake
  "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1600", // City skyline
];

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate hero background images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const parallaxStyle: React.CSSProperties = {
    transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <main className="relative min-h-screen bg-black text-white">
      <section className="relative isolate h-screen overflow-hidden">
        {/* Parallax Background Slider */}
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          {HERO_IMAGES.map((image, index) => (
            <div
              key={image}
              className={`hero-bg absolute inset-0 will-change-transform transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...parallaxStyle,
              }}
            />
          ))}
        </div>

        {/* Overlays for readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        {/* Nav */}
        <MainNav active="home" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col px-10 pb-10 pt-24 md:flex-row md:items-center md:pb-16 md:pt-32">
          {/* Left content */}
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
              Your journey begins here
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Discover the World&apos;s{" "}
              <span className="text-amber-300">Most Exquisite</span>{" "}
              Destinations
            </h1>

            <p className="max-w-lg text-sm text-white/80 md:text-base">
              Experience luxury travel redefined. From pristine beaches to
              ancient wonders, we craft bespoke journeys that transform your
              dreams into unforgettable memories.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="btn-primary">
                <span>Book an Appointment</span>
              </button>

              <button className="btn-outline-light">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-300">
                  <Play className="ml-0.5 h-4 w-4" />
                </span>
                <span>Explore Destinations</span>
              </button>
            </div>
          </div>

          {/* Right side slider controls */}
          <div className="pointer-events-none relative mt-10 hidden flex-1 items-center justify-end md:mt-0 md:flex">
            <div className="pointer-events-auto flex flex-col items-center gap-6">
              <button className="slider-arrow" onClick={handlePrev}>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="slider-arrow" onClick={handleNext}>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Bottom center slider indicators */}
          <div className="pointer-events-none absolute bottom-16 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {HERO_IMAGES.map((_, index) => (
              <button
                key={index}
                className={`pointer-events-auto slider-dot ${
                  index === activeIndex ? "slider-dot-active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-none absolute bottom-10 left-10 flex items-center gap-3 text-xs text-white/70">
            <div className="scroll-indicator">
              <span className="scroll-indicator-dot" />
            </div>
            <span className="flex items-center gap-1 tracking-[0.3em] uppercase">
              Scroll
              <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FeaturedDestinationsSection />
      <TestimonialsSection />
      <CallToActionSection />
    </main>
  );
}
