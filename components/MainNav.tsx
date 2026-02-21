import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

type NavItem = "home" | "about" | "services" | "destinations" | "contact";

interface MainNavProps {
  active?: NavItem;
}

export function MainNav({ active }: MainNavProps) {
  return (
    <header className="relative z-10 flex items-center justify-between px-10 pt-6 text-sm">
      <Link href="/" className="block shrink-0">
        <Image
          src="/assets/FE Logo .png"
          alt="Focus Escape Travel and Tour"
          width={200}
          height={48}
          className="h-10 w-auto object-contain"
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
          className={`nav-link ${
            active === "about" ? "nav-link-active" : ""
          }`}
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
    </header>
  );
}
