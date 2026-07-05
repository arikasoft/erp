"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden xl:block bg-gradient-to-r from-slate-950 via-blue-900 to-blue-700 text-white">

      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-6 text-sm">

          <a
            href="tel:+919296971363"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Phone size={14} />
            +91 92969 71363
          </a>

          <a
            href="mailto:info@arikasoft.com"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Mail size={14} />
            info@arikasoft.com
          </a>

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            Darbhanga, Bihar
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5 text-sm">

          <div className="flex items-center gap-2">
            <Clock3 size={14} />
            Mon - Sat : 9:00 AM - 6:00 PM
          </div>

          <div className="h-5 w-px bg-white/30" />

          <button className="flex items-center gap-1 hover:text-cyan-300 transition">
            <Globe size={14} />
            EN
          </button>

          <div className="h-5 w-px bg-white/30" />

          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <FaFacebookF size={14} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <FaLinkedinIn size={14} />
          </Link>

          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <FaGithub size={14} />
          </Link>

          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-cyan-300 transition"
          >
            <FaYoutube size={14} />
          </Link>

          <div className="h-5 w-px bg-white/30" />

          <Link
            href="/career"
            className="hover:text-cyan-300 transition"
          >
            Career
          </Link>

          <Link
            href="/support"
            className="hover:text-cyan-300 transition"
          >
            Support
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-4 py-1.5 font-semibold text-slate-900 hover:bg-cyan-300 transition"
          >
            Get Quote
          </Link>

        </div>

      </div>
    </div>
  );
}