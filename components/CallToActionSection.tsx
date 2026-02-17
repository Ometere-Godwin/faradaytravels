export function CallToActionSection() {
  return (
    <section className="bg-[#f3f2eb] py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#0a334e] via-[#0b3f62] to-[#0a334e] px-8 py-10 shadow-[0_26px_70px_rgba(15,23,42,0.55)] md:px-12 md:py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Left side: text + buttons */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Start Your Journey
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Ready to Create{" "}
                <span className="text-amber-300">Unforgettable</span>{" "}
                Memories?
              </h2>
              <p className="mt-4 text-sm text-slate-100/90 md:text-base">
                Let our expert travel consultants design your perfect escape.
                From romantic getaways to adventure expeditions, we bring your
                travel dreams to life.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button className="btn-primary">
                  Book an Appointment
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-slate-900">
                  Plan My Trip
                </button>
              </div>
            </div>

            {/* Right side: stat cards grid */}
            <div className="mt-6 grid flex-1 gap-4 text-sm text-slate-100/90 md:mt-0 md:grid-cols-2">
              <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Worldwide
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  50+ Destinations
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Experience
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  10+ Years
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Happy Travelers
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  1000+
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 px-6 py-5 backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Itineraries
                </div>
                <div className="mt-3 text-lg font-semibold text-white">
                  Fully Custom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

