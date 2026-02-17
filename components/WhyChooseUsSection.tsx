import { Clock3, ShieldCheck, Star, UserRound } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FeatureCard } from "./FeatureCard";

export function WhyChooseUsSection() {
  const features = [
    {
      title: "Premium Experiences",
      description:
        "Handpicked luxury accommodations and exclusive access to world-class destinations.",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Personalized Service",
      description:
        "Dedicated travel consultants crafting bespoke itineraries tailored to your preferences.",
      icon: <UserRound className="h-5 w-5" />,
    },
    {
      title: "Trusted & Reliable",
      description:
        "Licensed and insured with a proven track record of delivering exceptional journeys.",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance ensuring peace of mind throughout your entire journey.",
      icon: <Clock3 className="h-5 w-5" />,
    },
  ];

  return (
    <section className="bg-[#f3f2eb] py-20 text-slate-900 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 md:px-12">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Travel with Confidence"
          description="At Focus Escape, we go beyond ordinary travel. Every detail is meticulously planned to ensure your journey is nothing short of extraordinary."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

