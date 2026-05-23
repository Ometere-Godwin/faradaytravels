"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { MainNav } from "@/components/MainNav";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.full_name.trim() ||
      !formData.email.trim() ||
      !formData.phone_number.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(json.error ?? "Failed to submit message");
      }

      toast({
        title: "Thank you!",
        description:
          "We've received your message and will be in touch soon.",
      });
      setFormData({ full_name: "", email: "", phone_number: "", message: "" });
    } catch (err) {
      const error = err as Error;
      console.error("Error submitting contact form:", error);
      toast({
        title: "Submission failed",
        description:
          error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-[#0b3a56] text-white">
        <MainNav active="contact" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-10 pb-20 pt-20 md:pb-24 md:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
            Contact Us
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Let&apos;s Start Your{" "}
            <span className="text-amber-300">Adventure</span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-100/90 md:text-base">
            Have questions or ready to plan your next journey? We&apos;re here
            to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="bg-[#f3f2eb] pb-24 pt-12 text-slate-900 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-12">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 md:text-base">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Get in Touch
            </h2>
            <p>
              Whether you&apos;re dreaming of a tropical escape, planning an
              adventure, or seeking a custom itinerary, our travel specialists
              are ready to help. Share your ideas and we&apos;ll handle the
              details.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-800">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-amber-500" />
                <span>
                  2 Mike Ogunka street Rukpakulusi new layout, Airforce-Eliozu,
                  Port Harcourt, Rivers State
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+2348067445131</span>
                <span>+2347066619001</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>focusescape21st@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              Send Us a Message
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 md:text-sm">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form
              className="mt-5 space-y-4 text-sm"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, full_name: e.target.value }))
                  }
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="Enter your name"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, phone_number: e.target.value }))
                  }
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="+234..."
                  autoComplete="tel"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="Tell us about your ideal trip..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary mt-2 w-full disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
