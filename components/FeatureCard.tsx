import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-900 md:text-lg">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}

