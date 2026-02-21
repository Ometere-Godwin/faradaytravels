import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0b3a56] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Brand + intro */}
          <div className="space-y-5">
            <Link href="/" className="block w-fit">
              <Image
                src="/assets/FE Logo .png"
                alt="Focus Escape Travel and Tour"
                width={200}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm text-slate-200/90">
              Crafting extraordinary journeys for discerning travelers. Experience the
              world&apos;s most captivating destinations with our bespoke travel services.
            </p>
            <div className="flex items-center gap-3 text-slate-200/80">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-100">
                f
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-100">
                in
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-100">
                ig
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-100">
                X
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-slate-100/85">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Destinations</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold text-white">Our Services</h4>
            <ul className="space-y-2 text-slate-100/85">
              <li>Luxury Tours</li>
              <li>Safari Adventures</li>
              <li>Honeymoon Packages</li>
              <li>Custom Itineraries</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 text-sm">
            <h4 className="text-base font-semibold text-white">Contact Us</h4>
            <div className="space-y-3 text-slate-100/85">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-amber-400" />
                <span>
                  123 Travel Street, Suite 100
                  <br />
                  Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>+234 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>hello@focusescape.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/60 bg-[#082a3f] py-4 text-[11px] text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row md:px-12">
          <p>© 2026 Focus Escape Travel and Tour Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="text-slate-200/85">Privacy Policy</button>
            <button className="text-slate-200/85">Terms &amp; Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

