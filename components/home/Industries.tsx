"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Factory,
  ShoppingCart,
  Landmark,
  Truck,
  Hotel,
  Shield,
  HandHeart,
  Briefcase,
  Cpu,
} from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    icon: Factory,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "NGO",
    icon: HandHeart,
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "Government",
    icon: Landmark,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Logistics",
    icon: Truck,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Hospitality",
    icon: Hotel,
    color: "from-purple-600 to-violet-500",
  },
  {
    title: "Banking",
    icon: Shield,
    color: "from-cyan-600 to-blue-700",
  },
  {
    title: "Corporate",
    icon: Building2,
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Professional Services",
    icon: Briefcase,
    color: "from-sky-600 to-cyan-500",
  },
  {
    title: "Artificial Intelligence",
    icon: Cpu,
    color: "from-violet-700 to-fuchsia-600",
  },
];

export default function Industries() {
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
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Solutions for Every Industry
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Our enterprise software is designed to meet the unique needs of
            businesses across multiple industries.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

          {industries.map((industry, index) => {

            const Icon = industry.icon;

            return (

              <motion.div
                key={industry.title}
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
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.color} text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-500">
                  Enterprise-grade digital solutions tailored for the {industry.title.toLowerCase()} sector.
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}