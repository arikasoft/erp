"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Top Gradient */}

      <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500" />

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* Company */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black">

              ArikaSoft

            </h2>

            <p className="mt-2 text-cyan-400">

              Private Limited

            </p>

            <p className="mt-8 leading-8 text-slate-300">

              Delivering Enterprise ERP,
              CRM, HRMS,
              AI,
              Cloud &
              Digital Transformation
              Solutions.

            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <Phone
                  className="text-cyan-400"
                  size={18}
                />

                +91 92969 71363

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  className="text-cyan-400"
                  size={18}
                />

                info@arikasoft.com

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  className="mt-1 text-cyan-400"
                  size={18}
                />

                Darbhanga,
                Bihar,
                India

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600"
              >
                <FaGithub />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-blue-600"
              >
                <FaYoutube />
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Company

            </h3>

            <div className="space-y-3">

              <Link href="/about" className="block hover:text-cyan-400">
                About Us
              </Link>

              <Link href="/services" className="block hover:text-cyan-400">
                Services
              </Link>

              <Link href="/products" className="block hover:text-cyan-400">
                Products
              </Link>

              <Link href="/portfolio" className="block hover:text-cyan-400">
                Portfolio
              </Link>

              <Link href="/career" className="block hover:text-cyan-400">
                Career
              </Link>

            </div>

          </div>

          {/* Products */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Products

            </h3>

            <div className="space-y-3">

              <Link href="#" className="block hover:text-cyan-400">
                ERP
              </Link>

              <Link href="#" className="block hover:text-cyan-400">
                CRM
              </Link>

              <Link href="#" className="block hover:text-cyan-400">
                HRMS
              </Link>

              <Link href="#" className="block hover:text-cyan-400">
                Billing
              </Link>

              <Link href="#" className="block hover:text-cyan-400">
                Inventory
              </Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Support

            </h3>

            <div className="space-y-3">

              <Link href="/contact" className="block hover:text-cyan-400">
                Contact
              </Link>

              <Link href="/support" className="block hover:text-cyan-400">
                Help Center
              </Link>

              <Link href="/privacy-policy" className="block hover:text-cyan-400">
                Privacy Policy
              </Link>

              <Link href="/terms" className="block hover:text-cyan-400">
                Terms & Conditions
              </Link>

              <Link href="/refund-policy" className="block hover:text-cyan-400">
                Refund Policy
              </Link>

            </div>

          </div>

        </div>

        {/* Newsletter */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="grid items-center gap-8 lg:grid-cols-2">

            <div>

              <h3 className="text-3xl font-bold">

                Subscribe Newsletter

              </h3>

              <p className="mt-3 text-slate-300">

                Get latest updates about ERP,
                AI,
                Cloud,
                Technology &
                Business Solutions.

              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-4 outline-none"
              />

              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-900 hover:bg-cyan-400">

                Subscribe

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-400 lg:flex-row">

          <p>

            © {new Date().getFullYear()} ArikaSoft Private Limited.
            All Rights Reserved.

          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-cyan-500"
          >

            <ArrowUp size={18} />

            Back to Top

          </button>

        </div>

      </div>

    </footer>
  );
}