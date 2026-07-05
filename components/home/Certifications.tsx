"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  FileCheck,
  Award,
  Lock,
} from "lucide-react";

const certifications = [
  {
    title: "ISO Ready",
    description: "Enterprise software development following quality standards.",
    icon: Award,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "MSME Registered",
    description: "Recognized MSME technology company delivering IT solutions.",
    icon: Building2,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "GST Compliant",
    description: "GST compliant billing and accounting software solutions.",
    icon: FileCheck,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Startup Ready",
    description: "Technology partner for startups and digital businesses.",
    icon: BadgeCheck,
    color: "from-indigo-600 to-violet-500",
  },
  {
    title: "Secure Development",
    description: "Security-first software engineering and deployment.",
    icon: Lock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Enterprise Standards",
    description: "Scalable architecture following modern best practices.",
    icon: ShieldCheck,
    color: "from-slate-800 to-blue-700",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            CERTIFICATIONS & COMPLIANCE
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted & Compliant Technology Company
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We follow industry standards, security best practices and
            enterprise-grade software engineering principles.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {certifications.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .45,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}