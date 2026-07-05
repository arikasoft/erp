"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Clock3,
  Users,
  ArrowUpRight,
} from "lucide-react";

const stories = [
  {
    title: "Manufacturing ERP",
    before: "Manual Operations",
    after: "Fully Automated ERP",
    result: "40% Productivity Increase",
    icon: TrendingUp,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "School ERP",
    before: "Paper Records",
    after: "Digital Campus",
    result: "15,000+ Students Managed",
    icon: Users,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Hospital ERP",
    before: "Manual Billing",
    after: "Digital Healthcare",
    result: "60% Faster Billing",
    icon: Clock3,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Business CRM",
    before: "Excel Leads",
    after: "Smart CRM",
    result: "3× Sales Growth",
    icon: DollarSign,
    color: "from-orange-500 to-amber-500",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            SUCCESS STORIES
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Real Business Transformation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Our software solutions deliver measurable business outcomes
            across multiple industries.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {stories.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400"
              >

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-3xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-6">

                  <div className="rounded-2xl bg-red-500/10 p-5">

                    <p className="text-sm text-red-300">
                      Before
                    </p>

                    <h4 className="mt-2 font-bold">
                      {item.before}
                    </h4>

                  </div>

                  <div className="rounded-2xl bg-green-500/10 p-5">

                    <p className="text-sm text-green-300">
                      After
                    </p>

                    <h4 className="mt-2 font-bold">
                      {item.after}
                    </h4>

                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl bg-cyan-500/10 p-5">

                  <div>

                    <p className="text-sm text-cyan-300">
                      Business Result
                    </p>

                    <h4 className="mt-2 text-2xl font-black">
                      {item.result}
                    </h4>

                  </div>

                  <ArrowUpRight
                    className="text-cyan-300"
                    size={32}
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}