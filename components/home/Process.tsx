"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Bug,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business goals, challenges and software requirements.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
  },
  {
    step: "02",
    title: "UI / UX Design",
    description:
      "Modern, responsive and user-friendly interface design for the best experience.",
    icon: PenTool,
    color: "from-violet-600 to-purple-500",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile development using modern technologies and enterprise architecture.",
    icon: Code2,
    color: "from-green-600 to-emerald-500",
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Comprehensive testing to ensure quality, security and performance.",
    icon: Bug,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Secure cloud deployment with monitoring and production optimization.",
    icon: Rocket,
    color: "from-cyan-600 to-blue-700",
  },
  {
    step: "06",
    title: "Support & Growth",
    description:
      "Continuous maintenance, updates and technical support after delivery.",
    icon: Headphones,
    color: "from-pink-600 to-rose-500",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            From Idea to Enterprise Solution
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We follow a structured development process to deliver reliable,
            scalable and secure software solutions.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {process.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white`}
                  >
                    <Icon size={30} />
                  </div>

                  <span className="text-5xl font-black text-slate-100">
                    {item.step}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600">
                  Learn More
                  <ArrowRight size={18} />
                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}