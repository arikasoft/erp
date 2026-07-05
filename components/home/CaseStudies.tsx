"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const studies = [
  {
    title: "Manufacturing ERP",
    client: "Manufacturing Industry",
    result: "40% Faster Operations",
    description:
      "Integrated inventory, production planning and finance into one ERP platform.",
  },
  {
    title: "School ERP",
    client: "Education",
    result: "15,000+ Students Managed",
    description:
      "Admissions, attendance, fees, exams and parent communication in one system.",
  },
  {
    title: "NGO ERP",
    client: "NGO",
    result: "100% Donation Tracking",
    description:
      "Donations, projects, accounting and compliance managed digitally.",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-300">
            CASE STUDIES
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Real Business Success Stories
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            See how our software solutions improve productivity,
            efficiency and business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {studies.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .4,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <TrendingUp
                className="text-cyan-400"
                size={42}
              />

              <span className="mt-5 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
                {item.client}
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-300">
                {item.description}
              </p>

              <div className="mt-8 rounded-2xl bg-cyan-500/10 p-5">
                <p className="text-sm text-cyan-300">
                  Business Impact
                </p>

                <h4 className="mt-2 text-2xl font-bold">
                  {item.result}
                </h4>
              </div>

              <Link
                href="/portfolio"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 hover:gap-4"
              >
                Read Case Study

                <ArrowRight size={18} />
              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}