"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Workflow,
  BarChart3,
  BrainCircuit,
  Server,
} from "lucide-react";

const services = [
  {
    title: "Custom Software",
    icon: Code2,
    desc: "Enterprise software tailored for your business.",
  },
  {
    title: "Website Development",
    icon: Globe,
    desc: "Modern, responsive and SEO-friendly websites.",
  },
  {
    title: "Mobile Apps",
    icon: Smartphone,
    desc: "Android & iOS applications with premium UX.",
  },
  {
    title: "ERP Solutions",
    icon: Database,
    desc: "Complete ERP for SMEs and Enterprises.",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    desc: "Scalable cloud infrastructure & deployment.",
  },
  {
    title: "AI Automation",
    icon: BrainCircuit,
    desc: "AI-powered automation for business growth.",
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    desc: "Enterprise security & compliance solutions.",
  },
  {
    title: "Business Workflow",
    icon: Workflow,
    desc: "Automate operations with smart workflows.",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    desc: "Business intelligence & reporting dashboards.",
  },
  {
    title: "Server Management",
    icon: Server,
    desc: "Secure server deployment & monitoring.",
  },
  {
    title: "Cloud Computing",
    icon: Cpu,
    desc: "High-performance cloud architecture.",
  },
  {
    title: "IT Consulting",
    icon: ArrowRight,
    desc: "Technology consulting for digital transformation.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR SERVICES
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Enterprise IT Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We help startups, businesses, NGOs and enterprises
            build secure, scalable and future-ready digital solutions.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition group-hover:gap-4"
                >
                  Learn More

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