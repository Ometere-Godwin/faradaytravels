import Link from "next/link";
import { Heart, Award, UserRound, Globe2, Phone } from "lucide-react";
import { MainNav } from "@/components/MainNav";

const ABOUT_HERO_IMAGE =
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero / Intro */}
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${ABOUT_HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/70" />

        {/* Nav (same as home, About active) */}
        <MainNav active="about" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-10 pb-20 pt-24 md:pb-24 md:pt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            About Us
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Crafting Dreams into{" "}
            <span className="text-amber-300">Extraordinary Journeys</span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-100/90 md:text-base">
            Focus Escape Travel and Tour Limited is a premium travel agency
            dedicated to creating bespoke travel experiences for discerning
            travelers worldwide.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#f3f2eb] py-16 text-slate-900 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
              Our Story
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              A Decade of Transforming Travel Dreams
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
              <p>
                For over ten years, Focus Escape has been curating immersive
                journeys that go far beyond standard travel packages. From the
                first consultation to your final flight home, every detail is
                meticulously planned to reflect your tastes, interests, and
                preferred pace of travel.
              </p>
              <p>
                Our team of seasoned travel specialists partners with trusted
                global suppliers to secure exclusive access, premium
                accommodations, and once-in-a-lifetime experiences—from private
                safaris and overwater villas to heritage tours and gourmet
                dining.
              </p>
              <p>
                Whether you&apos;re celebrating a milestone, planning a
                honeymoon, or simply craving a much-needed escape, we design
                journeys that feel effortless, deeply personal, and truly
                unforgettable.
              </p>
            </div>

            <div className="grid gap-4 text-sm text-slate-800 md:text-base">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Our Philosophy
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Every traveler is unique. We listen first, then craft
                  itineraries that reflect who you are—not a one-size-fits-all
                  template.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  What Sets Us Apart
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Bespoke planning, round-the-clock support, and access to
                  insider experiences that most travelers never see.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Our Promise
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  To handle every detail with care so you can focus on what
                  matters most—making memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f3f2eb] pb-20 text-slate-900 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white px-8 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                ●
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                To deliver unparalleled travel experiences that exceed expectations,
                creating lasting memories through personalized service, expert
                knowledge, and genuine care for every traveler who entrusts us with
                their journey.
              </p>
            </div>

            <div className="rounded-3xl bg-white px-8 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                ●
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                To be the most trusted name in luxury travel, known globally for our
                exceptional service, innovative experiences, and the transformative
                journeys we create for travelers seeking the extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#f3f2eb] pb-20 text-slate-900 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            Our Values
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            What Drives Us Forward
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a56] text-white">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Passion for Travel
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                We live and breathe travel, bringing genuine enthusiasm to every
                journey we craft.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a56] text-white">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Excellence in Service
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                We strive for perfection in every detail, ensuring nothing short
                of extraordinary.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a56] text-white">
                <UserRound className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Customer First
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                Your dreams and preferences are at the heart of everything we
                do.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a56] text-white">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                Global Expertise
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                Our extensive network spans the globe, opening doors to exclusive
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

