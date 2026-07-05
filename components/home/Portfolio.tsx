"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Building2,
  GraduationCap,
  HeartPulse,
  HandHeart,
  ShoppingCart,
} from "lucide-react";

const projects = [
  {
    title: "ArikaSoft ERP",
    category: "Enterprise Software",
    description:
      "Complete ERP platform with Finance, HR, Inventory & CRM modules.",
    icon: Building2,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "School ERP",
    category: "Education",
    description:
      "Student, Attendance, Fees, Examination & Parent Portal.",
    icon: GraduationCap,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Hospital ERP",
    category: "Healthcare",
    description:
      "Hospital Management with OPD, IPD, Billing & Pharmacy.",
    icon: HeartPulse,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "NGO ERP",
    category: "NGO",
    description:
      "Donation, Accounting, Projects & Compliance Management.",
    icon: HandHeart,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "E-Commerce Platform",
    category: "Retail",
    description:
      "Modern eCommerce solution with inventory and online payments.",
    icon: ShoppingCart,
    color: "from-violet-600 to-purple-500",
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    description:
      "High-performance corporate websites optimized for SEO.",
    icon: Globe,
    color: "from-sky-600 to-blue-500",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Explore some of our enterprise software, digital products
            and transformation projects delivered across industries.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => {

            const Icon = project.icon;

            return (

              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .45,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-56 items-center justify-center bg-gradient-to-br ${project.color}`}
                >

                  <Icon
                    size={72}
                    className="text-white"
                  />

                </div>

                <div className="p-8">

                  <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">

                    {project.category}

                  </span>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">

                    {project.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">

                    {project.description}

                  </p>

                  <Link
                    href="/portfolio"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
                  >

                    View Project

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            View All Projects

            <ArrowRight
              className="ml-2"
              size={20}
            />
          </Link>

        </div>

      </div>

    </section>
  );
}