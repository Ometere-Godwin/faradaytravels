"use client";

import { useToast } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[10000] flex w-full max-w-sm flex-col gap-2 px-4 sm:px-0"
      aria-live="polite"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`pointer-events-auto rounded-lg border px-4 py-3 shadow-lg ${
            t.variant === "destructive"
              ? "border-red-200 bg-red-50 text-red-900"
              : "border-slate-200 bg-white text-slate-900"
          }`}
        >
          <div className="flex justify-between gap-3">
            <div className="min-w-0 flex-1 text-sm">
              {t.title ? (
                <p className="font-semibold leading-tight">{t.title}</p>
              ) : null}
              {t.description ? (
                <p className="mt-1 text-xs leading-relaxed opacity-90">
                  {t.description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              className="shrink-0 rounded p-1 text-sm opacity-60 hover:opacity-100"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
