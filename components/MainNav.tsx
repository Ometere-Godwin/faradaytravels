"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

type NavItem = "home" | "about" | "services" | "destinations" | "contact";

interface MainNavProps {
  active?: NavItem;
}

export function MainNav({ active }: MainNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuContent = mobileMenuOpen && (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/60 md:hidden"
        aria-hidden
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 z-[9999] flex w-full max-w-xs flex-col border-l border-white/10 bg-[#0b3a56]/98 backdrop-blur-md md:hidden">
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-6 py-4">
          <Link href="/" className="block shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/assets/FE Logo .png"
              alt="Focus Escape Travel and Tour"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-auto p-4">
          <Link
            href="/"
            className={`rounded-lg px-4 py-3 text-white ${active === "home" ? "bg-white/15 font-medium" : "hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`rounded-lg px-4 py-3 text-white ${active === "about" ? "bg-white/15 font-medium" : "hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`rounded-lg px-4 py-3 text-white ${active === "services" ? "bg-white/15 font-medium" : "hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/destinations"
            className={`rounded-lg px-4 py-3 text-white ${active === "destinations" ? "bg-white/15 font-medium" : "hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            href="/contact"
            className={`rounded-lg px-4 py-3 text-white ${active === "contact" ? "bg-white/15 font-medium" : "hover:bg-white/10"}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/contact"
              className="btn-primary inline-flex justify-center py-3 text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book an Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

  return (
    <header className="relative z-10 flex items-center justify-between px-10 pt-6 text-sm">
      <Link href="/" className="block shrink-0">
        <Image
          src="/assets/FE Logo .png"
          alt="Focus Escape Travel and Tour"
          width={200}
          height={48}
          className="h-7 w-auto object-contain md:h-10"
          priority
        />
      </Link>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
        <Link
          href="/"
          className={`nav-link ${active === "home" ? "nav-link-active" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`nav-link ${active === "about" ? "nav-link-active" : ""}`}
        >
          About
        </Link>
        <Link
          href="/services"
          className={`nav-link ${
            active === "services" ? "nav-link-active" : ""
          }`}
        >
          Services
        </Link>
        <Link
          href="/destinations"
          className={`nav-link ${
            active === "destinations" ? "nav-link-active" : ""
          }`}
        >
          Destinations
        </Link>
        <Link
          href="/contact"
          className={`nav-link ${
            active === "contact" ? "nav-link-active" : ""
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
        <button className="hidden items-center gap-2 text-sm font-medium text-white/80 md:flex">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40">
            <Phone className="h-4 w-4" />
          </span>
          <span>Call Us</span>
        </button>
        <Link
          href="/contact"
          className="btn-primary hidden text-sm font-semibold md:inline-flex"
        >
          Book an Appointment
        </Link>
      </div>

      {/* Mobile menu: render in portal so it's above hero and other content */}
      {typeof document !== "undefined" &&
        createPortal(mobileMenuContent || null, document.body)}
    </header>
  );
}
