"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function VideoHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/80 to-cyan-900/70" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-cyan-300">

              <Sparkles size={18} />

              Enterprise Software Company

            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">

              Digital

              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">

                Transformation

              </span>

              Starts Here

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              We develop ERP,
              CRM,
              HRMS,
              AI Platforms,
              Cloud Applications
              and Enterprise Software
              for organizations worldwide.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400"
              >

                Get Started

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl hover:bg-white/20"
              >

                <PlayCircle
                  className="mr-2"
                  size={20}
                />

                Watch Demo

              </Link>

            </div>

            <div className="mt-12 grid grid-cols-2 gap-5">

              {[
                "ERP & CRM",
                "Cloud Native",
                "AI Automation",
                "24×7 Support",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-white"
                >

                  <CheckCircle2
                    className="text-cyan-400"
                    size={18}
                  />

                  {item}

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

              <h3 className="text-3xl font-bold text-white">

                Enterprise Dashboard

              </h3>

              <div className="mt-10 space-y-6">

                <div className="rounded-2xl bg-white/10 p-5">

                  <div className="flex justify-between">

                    <span className="text-slate-300">
                      Revenue Growth
                    </span>

                    <span className="font-bold text-cyan-300">
                      +42%
                    </span>

                  </div>

                  <div className="mt-4 h-3 rounded-full bg-white/10">

                    <div className="h-3 w-4/5 rounded-full bg-cyan-400" />

                  </div>

                </div>

                <div className="rounded-2xl bg-white/10 p-5">

                  <div className="flex justify-between">

                    <span className="text-slate-300">
                      Cloud Performance
                    </span>

                    <span className="font-bold text-green-400">
                      99.9%
                    </span>

                  </div>

                  <div className="mt-4 h-3 rounded-full bg-white/10">

                    <div className="h-3 w-full rounded-full bg-green-400" />

                  </div>

                </div>

                <div className="rounded-2xl bg-white/10 p-5">

                  <div className="flex justify-between">

                    <span className="text-slate-300">
                      Security
                    </span>

                    <span className="font-bold text-yellow-300">
                      Enterprise
                    </span>

                  </div>

                  <div className="mt-4 h-3 rounded-full bg-white/10">

                    <div className="h-3 w-full rounded-full bg-yellow-300" />

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}