"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  HandHeart,
  ShoppingBag,
  Factory,
  Landmark,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    title: "Enterprise ERP",
    description:
      "Complete ERP for manufacturing, trading and service businesses.",
    icon: Building2,
    color: "from-blue-700 to-cyan-500",
  },
  {
    title: "School ERP",
    description:
      "Admissions, Fees, Attendance, Examination and Parent Portal.",
    icon: GraduationCap,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Hospital ERP",
    description:
      "OPD, IPD, Pharmacy, Billing and Laboratory Management.",
    icon: HeartPulse,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "NGO ERP",
    description:
      "Donation, Projects, Accounts and Compliance Management.",
    icon: HandHeart,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Retail & POS",
    description:
      "GST Billing, Inventory, Barcode and Multi-Store Management.",
    icon: ShoppingBag,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Manufacturing",
    description:
      "Production Planning, Inventory and Supply Chain Automation.",
    icon: Factory,
    color: "from-sky-600 to-blue-500",
  },
  {
    title: "Government Solutions",
    description:
      "e-Governance, Citizen Services and Digital Transformation.",
    icon: Landmark,
    color: "from-indigo-600 to-blue-700",
  },
];

export default function Solutions() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            BUSINESS SOLUTIONS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Industry Specific Software Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Enterprise software designed for businesses,
            educational institutions,
            hospitals,
            NGOs and government organizations.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
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

                <Link
                  href="/solutions"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
                >
                  Explore Solution

                  <ArrowRight size={18} />

                </Link>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}