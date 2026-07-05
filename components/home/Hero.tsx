"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#071B45] to-blue-900 text-white">

      {/* Background */}
      {/* Floating Shapes */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-20 top-32 h-16 w-16 rounded-2xl bg-cyan-400/20 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-32 top-44 h-24 w-24 rounded-full bg-blue-500/20 backdrop-blur-xl"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-1/2 h-14 w-14 rotate-45 rounded-xl bg-indigo-500/20"
      />

      <div className="absolute inset-0">

        <div className="absolute -left-44 top-16 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute right-0 top-0 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[150px]" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-[95vh] max-w-7xl items-center px-6 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 backdrop-blur-xl">

              <Sparkles size={16} />

              India's Trusted Software Development Company

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Build Your

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">

                Digital Future

              </span>

              With

              <span className="block">

                ArikaSoft

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Enterprise ERP, CRM, HRMS, AI Solutions,
              Mobile Applications, Cloud Platforms,
              Government Projects and Business Automation
              built with world-class technology.

            </p>

            {/* Features */}

            <div className="mt-10 grid grid-cols-2 gap-4">

              {[
                "ERP Software",
                "CRM Solutions",
                "Cloud Computing",
                "AI Automation",
                "Enterprise Security",
                "Mobile Apps",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >

                  <CheckCircle2
                    size={18}
                    className="text-cyan-400"
                  />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl transition hover:scale-105"
              >

                Get Free Consultation

                <ArrowRight
                  size={20}
                  className="ml-2 transition group-hover:translate-x-1"
                />

              </Link>

              <Link
                href="/products"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/20"
              >

                <PlayCircle
                  size={20}
                  className="mr-2"
                />

                Explore Products

              </Link>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-5xl font-black text-cyan-400">

                  500+

                </h2>

                <p className="mt-2 text-slate-300">

                  Projects

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-cyan-400">

                  150+

                </h2>

                <p className="mt-2 text-slate-300">

                  Clients

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-cyan-400">

                  24×7

                </h2>

                <p className="mt-2 text-slate-300">

                  Support

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8, delay: .2 }}
            className="relative hidden lg:block"
          >

            {/* Main Dashboard */}

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold">

                    ArikaSoft ERP

                  </h3>

                  <p className="mt-1 text-sm text-slate-300">

                    Live Analytics Dashboard

                  </p>

                </div>

                <div className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold">

                  LIVE

                </div>

              </div>

              {/* Revenue */}

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6">

                <p className="text-sm text-white/80">

                  Revenue

                </p>

                <h2 className="mt-2 text-4xl font-black">

                  ₹12.8 Cr

                </h2>

                <p className="mt-2 text-sm">

                  +26% this month

                </p>

              </div>

              {/* Stats */}

              <div className="mt-6 grid grid-cols-2 gap-4">

                {[
                  {
                    title: "Projects",
                    value: "524",
                  },
                  {
                    title: "Clients",
                    value: "148",
                  },
                  {
                    title: "Employees",
                    value: "84",
                  },
                  {
                    title: "Countries",
                    value: "12",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <p className="text-sm text-slate-300">

                      {item.title}

                    </p>

                    <h3 className="mt-2 text-3xl font-black">

                      {item.value}

                    </h3>

                  </div>

                ))}

              </div>

              {/* Fake Chart */}

              <div className="mt-8">

                <div className="flex items-end gap-2 h-40">

                  {[35, 55, 42, 80, 65, 95, 72, 100].map((h, i) => (

                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: i * .08,
                        duration: .5,
                      }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-400"
                    />

                  ))}

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-12 top-20 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
            >

              <p className="text-sm text-slate-300">

                New Orders

              </p>

              <h3 className="mt-2 text-3xl font-black text-cyan-400">

                +326

              </h3>

            </motion.div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-10 bottom-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
            >

              <p className="text-sm text-slate-300">

                Active Users

              </p>

              <h3 className="mt-2 text-3xl font-black text-green-400">

                18.5K

              </h3>

            </motion.div>

          </motion.div>

          <div>

            {/* Dashboard UI Part-2 */}

          </div>

        </div>

      </div>
      {/* Bottom Trust Section */}

      <div className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-8 lg:flex-row">

          {/* Left */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">

              Trusted By Businesses Worldwide

            </p>

            <h3 className="mt-3 text-3xl font-bold">

              Empowering Digital Transformation

            </h3>

          </div>

          {/* Badges */}

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {[
              {
                title: "ISO Ready",
                value: "Certified",
              },
              {
                title: "Projects",
                value: "500+",
              },
              {
                title: "Clients",
                value: "150+",
              },
              {
                title: "Support",
                value: "24×7",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-center backdrop-blur-xl"
              >

                <h4 className="text-3xl font-black text-cyan-400">

                  {item.value}

                </h4>

                <p className="mt-2 text-sm text-slate-300">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Client Logos */}

      <div className="relative overflow-hidden bg-slate-950 py-10">

        <div className="mx-auto max-w-7xl">

          <div className="marquee flex items-center gap-16">

            {[
              "Microsoft",
              "Oracle",
              "AWS",
              "Google",
              "SAP",
              "Zoho",
              "Meta",
              "IBM",
              "Cisco",
              "Dell",
              "Adobe",
              "MongoDB",
            ].map((company) => (

              <div
                key={company}
                className="text-2xl font-black text-white/40 transition hover:text-cyan-400"
              >

                {company}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Wave */}

      <div className="relative">

        <svg
          viewBox="0 0 1440 120"
          className="block w-full fill-slate-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,32L80,48C160,64,320,96,480,101.3C640,107,800,85,960,69.3C1120,53,1280,43,1360,37.3L1440,32L1440,160L0,160Z" />
        </svg>

      </div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >

        <Mouse
          size={30}
          className="text-cyan-400"
        />

      </motion.div>
    </section>
  );
}