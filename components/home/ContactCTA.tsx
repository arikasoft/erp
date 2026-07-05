"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 py-24 text-white">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
              CONTACT US
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              Ready to Start
              <span className="block text-cyan-300">
                Your Digital Journey?
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Let's discuss your project and build secure,
              scalable and enterprise-grade software together.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">

                <Phone className="text-cyan-400" />

                <span>+91 92969 71363</span>

              </div>

              <div className="flex items-center gap-4">

                <Mail className="text-cyan-400" />

                <span>info@arikasoft.com</span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin className="text-cyan-400" />

                <span>Darbhanga, Bihar, India</span>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-10 text-slate-900 shadow-2xl"
          >

            <h3 className="text-3xl font-black">
              Book a Free Consultation
            </h3>

            <p className="mt-3 text-slate-500">
              Our experts will contact you within 24 hours.
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
              />

              <button className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700">

                <Calendar className="mr-2" />

                Schedule Meeting

                <ArrowRight className="ml-2" />

              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}