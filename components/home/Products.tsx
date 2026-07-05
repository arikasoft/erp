"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Users,
  Building2,
  Package,
  Receipt,
  GraduationCap,
  HeartPulse,
  HandHeart,
  BrainCircuit,
} from "lucide-react";

const products = [
  {
    title: "ArikaSoft ERP",
    description: "Complete Enterprise Resource Planning Solution.",
    icon: Database,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "CRM",
    description: "Customer Relationship Management Platform.",
    icon: Users,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "HRMS",
    description: "Human Resource & Payroll Management.",
    icon: Building2,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Inventory",
    description: "Inventory & Warehouse Management System.",
    icon: Package,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Billing Software",
    description: "GST Ready Billing & Accounting Software.",
    icon: Receipt,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "School ERP",
    description: "Complete School Management Platform.",
    icon: GraduationCap,
    color: "from-sky-600 to-cyan-500",
  },
  {
    title: "Hospital ERP",
    description: "Hospital & Clinic Management System.",
    icon: HeartPulse,
    color: "from-red-600 to-rose-500",
  },
  {
    title: "NGO ERP",
    description: "Donation, Projects & Compliance Management.",
    icon: HandHeart,
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "AI Platform",
    description: "AI Automation & Business Intelligence.",
    icon: BrainCircuit,
    color: "from-slate-800 to-blue-700",
  },
];

export default function Products() {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
            OUR PRODUCTS
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Enterprise Software Products
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Powerful software solutions designed to simplify business
            operations, improve productivity and accelerate digital growth.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (

              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: .45,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color} text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {product.description}
                </p>

                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
                >
                  Explore Product
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