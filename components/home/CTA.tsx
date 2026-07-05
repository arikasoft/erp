"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CalendarCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500" />

      {/* Glow */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white">

            START YOUR DIGITAL TRANSFORMATION

          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight text-white lg:text-6xl">

            Let's Build Your

            <span className="block text-cyan-200">

              Next Big Software

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">

            Whether you need an Enterprise ERP,
            CRM, HRMS, Mobile App,
            AI Platform or Custom Software,

            ArikaSoft is ready to transform
            your business digitally.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:scale-105"
            >

              <CalendarCheck
                className="mr-2"
                size={20}
              />

              Book Free Demo

              <ArrowRight
                className="ml-2"
                size={18}
              />

            </Link>

            <a
              href="https://wa.me/919296971363"
              target="_blank"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >

              <MessageCircle
                className="mr-2"
                size={20}
              />

              WhatsApp Us

            </a>

            <a
              href="tel:+919296971363"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >

              <Phone
                className="mr-2"
                size={20}
              />

              Call Now

            </a>

          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 md:grid-cols-4">

            {[
              ["500+", "Projects"],
              ["150+", "Clients"],
              ["30+", "Products"],
              ["24×7", "Support"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
              >

                <h3 className="text-5xl font-black text-white">

                  {value}

                </h3>

                <p className="mt-3 text-blue-100">

                  {label}

                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}