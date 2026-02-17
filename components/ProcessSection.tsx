export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Share your dreams and preferences with our travel experts.",
    },
    {
      number: "02",
      title: "Custom Planning",
      description:
        "We design a bespoke itinerary tailored just for you.",
    },
    {
      number: "03",
      title: "Booking",
      description:
        "We handle all reservations, from flights to experiences.",
    },
    {
      number: "04",
      title: "Travel & Support",
      description:
        "Enjoy your journey with our 24/7 dedicated support.",
    },
  ];

  return (
    <section className="bg-[#f3f2eb] py-16 text-slate-900 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
          Our Process
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          How We Create Your Perfect Journey
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
          From initial consultation to your safe return home, we handle every
          detail with precision and care.
        </p>

        <div className="mt-10 grid gap-10 text-left md:grid-cols-4 md:text-center">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-start gap-3 md:items-center"
            >
              <div className="text-3xl font-semibold text-amber-200 md:text-4xl">
                {step.number}
              </div>
              <div className="text-sm font-semibold text-slate-900 md:text-base">
                {step.title}
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

