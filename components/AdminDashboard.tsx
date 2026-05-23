"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import {
  ArrowLeft,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  User,
} from "lucide-react";
import type { ContactSubmission } from "@/lib/contact";

function formatSubmittedAt(iso: string) {
  return new Intl.DateTimeFormat("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

interface AdminDashboardProps {
  initialSubmissions: ContactSubmission[];
  initialError: string | null;
}

export function AdminDashboard({
  initialSubmissions,
  initialError,
}: AdminDashboardProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [submissions, setSubmissions] =
    useState<ContactSubmission[]>(initialSubmissions);
  const [error, setError] = useState<string | null>(initialError);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/contacts", { cache: "no-store" });
      const json = (await res.json()) as {
        data?: ContactSubmission[];
        error?: string;
      };

      if (!res.ok) {
        setError(json.error ?? "Failed to load submissions");
        setSubmissions([]);
      } else {
        setSubmissions(json.data ?? []);
        setError(null);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load submissions",
      );
      setSubmissions([]);
    } finally {
      setRefreshing(false);
      startTransition(() => router.refresh());
    }
  }, [router]);

  const loading = refreshing || isPending;

  return (
    <main className="min-h-screen bg-[#f3f2eb] text-slate-900">
      <header className="bg-[#0b3a56] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
              Admin
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Contact Submissions
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-100/90">
              Messages sent from the contact page, saved on this server.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={refresh}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/20 disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              Refresh
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-amber-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to site
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">
              {loading ? "—" : submissions.length}
            </span>{" "}
            submission{submissions.length === 1 ? "" : "s"}
          </p>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#0b3a56] underline-offset-2 hover:underline"
          >
            View public contact page
          </Link>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
            <p className="font-semibold">Could not load submissions</p>
            <p className="mt-1">{error}</p>
          </div>
        )}

        {!error && submissions.length === 0 && (
          <div className="rounded-3xl bg-white px-8 py-16 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <MessageSquare className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-4 text-lg font-semibold text-slate-900">
              No submissions yet
            </p>
            <p className="mt-2 text-sm text-slate-600">
              When visitors submit the contact form, entries will appear here.
            </p>
          </div>
        )}

        {submissions.length > 0 && (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <article
                key={submission.id}
                className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {submission.full_name}
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Submitted {formatSubmittedAt(submission.created_at)}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Full name
                      </dt>
                      <dd className="mt-0.5 text-slate-800">
                        {submission.full_name}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Email
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${submission.email}`}
                          className="text-[#0b3a56] hover:underline"
                        >
                          {submission.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Phone
                      </dt>
                      <dd className="mt-0.5">
                        <a
                          href={`tel:${submission.phone_number.replace(/\s/g, "")}`}
                          className="text-[#0b3a56] hover:underline"
                        >
                          {submission.phone_number}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-5 rounded-2xl bg-[#f3f2eb] px-4 py-4">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                    <MessageSquare className="h-3.5 w-3.5 text-amber-500" />
                    Message
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-slate-800">
                    {submission.message}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
