"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PhoneCall,
  Mail,
  Search,
  User,
  ArrowRight,
} from "lucide-react";

export default function MainHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.svg"
            alt="ArikaSoft"
            width={55}
            height={55}
            priority
          />

          <div>

            <h2 className="text-2xl font-black text-slate-900">
              ArikaSoft
            </h2>

            <p className="text-xs text-slate-500">
              Private Limited
            </p>

          </div>

        </Link>

        {/* Search */}

        <div className="hidden lg:flex flex-1 max-w-xl mx-10">

          <div className="relative w-full">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search Products, ERP, Services..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 outline-none transition focus:border-blue-600 focus:bg-white"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          {/* Phone */}

          <div className="hidden xl:flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">

              <PhoneCall
                size={20}
                className="text-blue-700"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Call Us
              </p>

              <a
                href="tel:+919296971363"
                className="font-semibold text-slate-800"
              >
                +91 92969 71363
              </a>

            </div>

          </div>

          {/* Email */}

          <div className="hidden xl:flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">

              <Mail
                size={20}
                className="text-cyan-700"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500">
                Email
              </p>

              <a
                href="mailto:info@arikasoft.com"
                className="font-semibold text-slate-800"
              >
                info@arikasoft.com
              </a>

            </div>

          </div>

          {/* Login */}

          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 font-medium transition hover:border-blue-600 hover:text-blue-600"
          >

            <User size={18} />

            Login

          </Link>

          {/* CTA */}

          <Link
            href="/contact"
            className="group inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >

            Get Free Demo

            <ArrowRight
              size={18}
              className="ml-2 transition group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </header>
  );
}