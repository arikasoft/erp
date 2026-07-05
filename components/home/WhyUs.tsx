"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Headset,
  Cpu,
  Cloud,
  Lock,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Grade Security",
    description:
      "Built with industry-standard security practices to protect your business data.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Performance",
    description:
      "Optimized architecture delivering high-speed and reliable applications.",
    icon: Rocket,
  },
  {
    title: "24×7 Technical Support",
    description:
      "Dedicated support team available whenever you need assistance.",
    icon: Headset,
  },
  {
    title: "Modern Technologies",
    description:
      "Powered by Next.js, React, AI, Cloud and enterprise-grade frameworks.",
    icon: Cpu,
  },
  {
    title: "Cloud Ready",
    description:
      "Deploy seamlessly on cloud infrastructure with high scalability.",
    icon: Cloud,
  },
  {
    title: "Secure Infrastructure",
    description:
      "Advanced authentication, encryption and compliance-ready solutions.",
    icon: Lock,
  },
  {
    title: "On-Time Delivery",
    description:
      "Efficient project management ensuring timely software delivery.",
    icon: Clock3,
  },
  {
    title: "Trusted Partner",
    description:
      "Helping startups, businesses and enterprises accelerate digital growth.",
    icon: BadgeCheck,
  },
];

export default function WhyUs() {
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
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Why Businesses Choose ArikaSoft
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We combine innovation, technology and industry expertise to
            deliver secure, scalable and future-ready digital solutions.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .05,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-12 text-center text-white shadow-2xl">

          <h3 className="text-4xl font-black">
            Ready to Transform Your Business?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Partner with ArikaSoft to build secure, scalable and intelligent
            software solutions that drive business growth.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Get Free Consultation
          </a>

        </div>

      </div>

    </section>
  );
}