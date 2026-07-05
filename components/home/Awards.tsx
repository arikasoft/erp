"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Star,
  Award,
  Target,
  Rocket,
} from "lucide-react";

const awards = [
  {
    title: "Best ERP Solution",
    year: "2026",
    description: "Recognized for delivering scalable ERP solutions.",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Innovation Excellence",
    year: "2025",
    description: "Awarded for innovation in AI and automation.",
    icon: Rocket,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Customer Choice",
    year: "2025",
    description: "Trusted by businesses across multiple industries.",
    icon: Star,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Quality Excellence",
    year: "2024",
    description: "Committed to enterprise-grade software quality.",
    icon: Medal,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Technology Leadership",
    year: "2024",
    description: "Building modern cloud-native software solutions.",
    icon: Award,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Digital Transformation",
    year: "2023",
    description: "Helping organizations embrace digital growth.",
    icon: Target,
    color: "from-red-600 to-pink-500",
  },
];

export default function Awards() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            AWARDS & RECOGNITION
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Celebrating Excellence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Our journey is driven by innovation, customer success and
            continuous improvement.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {awards.map((award, index) => {

            const Icon = award.icon;

            return (

              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${award.color} text-white`}
                >
                  <Icon size={30} />
                </div>

                <span className="mt-6 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {award.year}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {award.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {award.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}