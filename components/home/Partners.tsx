"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  CreditCard,
  Database,
  ShieldCheck,
  Globe,
  Cpu,
  Building2,
  Server,
} from "lucide-react";

const partners = [
  {
    name: "AWS Cloud",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
    category: "Cloud",
  },
  {
    name: "Microsoft Azure",
    icon: Server,
    color: "from-blue-700 to-cyan-500",
    category: "Cloud",
  },
  {
    name: "Google Cloud",
    icon: Globe,
    color: "from-green-600 to-blue-500",
    category: "Cloud",
  },
  {
    name: "Supabase",
    icon: Database,
    color: "from-emerald-600 to-green-500",
    category: "Database",
  },
  {
    name: "Razorpay",
    icon: CreditCard,
    color: "from-indigo-600 to-blue-500",
    category: "Payments",
  },
  {
    name: "PhonePe",
    icon: CreditCard,
    color: "from-violet-600 to-fuchsia-500",
    category: "Payments",
  },
  {
    name: "Enterprise Security",
    icon: ShieldCheck,
    color: "from-red-600 to-pink-500",
    category: "Security",
  },
  {
    name: "AI Platform",
    icon: Cpu,
    color: "from-slate-800 to-blue-700",
    category: "Artificial Intelligence",
  },
];

export default function Partners() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            TECHNOLOGY PARTNERS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted Technology Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We build modern software using globally trusted cloud,
            database, AI and payment technologies.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {partners.map((partner, index) => {

            const Icon = partner.icon;

            return (

              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .45,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${partner.color} text-white`}
                >
                  <Icon size={30} />
                </div>

                <span className="mt-6 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {partner.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {partner.name}
                </h3>

                <p className="mt-4 text-slate-500">
                  Enterprise-ready integration for secure, scalable and
                  reliable business applications.
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-12 text-center text-white">

          <Building2
            className="mx-auto"
            size={48}
          />

          <h3 className="mt-6 text-4xl font-black">
            Building the Future with Trusted Technologies
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            ArikaSoft combines modern frameworks, cloud infrastructure,
            enterprise security and AI to deliver world-class software
            solutions.
          </p>

        </div>

      </div>

    </section>
  );
}