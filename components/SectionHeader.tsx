import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps): ReactNode {
  const alignment =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-amber-500">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-600 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

