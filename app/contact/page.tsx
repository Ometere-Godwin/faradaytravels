"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { MainNav } from "@/components/MainNav";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0b3a56] text-white">
        <MainNav active="contact" />

        {/* Hero copy */}
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

      {/* Contact content */}
      <section className="bg-[#f3f2eb] pb-24 pt-12 text-slate-900 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:px-12">
          {/* Left: text */}
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
                  123 Travel Street, Suite 100
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>hello@focusescape.com</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] md:p-8">
            <h3 className="text-base font-semibold text-slate-900 md:text-lg">
              Send Us a Message
            </h3>
            <p className="mt-1.5 text-xs text-slate-500 md:text-sm">
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            <form className="mt-5 space-y-4 text-sm">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="+234..."
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-[#0b3a56] focus:ring-2 focus:ring-[#0b3a56]/20"
                  placeholder="Tell us about your ideal trip..."
                />
              </div>
              <button type="submit" className="btn-primary mt-2 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

