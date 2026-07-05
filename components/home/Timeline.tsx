"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileSearch,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const timeline = [
  {
    year: "01",
    title: "Discovery",
    description: "Understanding business goals and project requirements.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "02",
    title: "Planning",
    description: "Architecture, roadmap and technology planning.",
    icon: FileSearch,
    color: "from-blue-600 to-cyan-500",
  },
  {
    year: "03",
    title: "UI / UX",
    description: "Modern, responsive and user-centric interface design.",
    icon: PenTool,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    year: "04",
    title: "Development",
    description: "Agile development with enterprise technologies.",
    icon: Code2,
    color: "from-green-600 to-emerald-500",
  },
  {
    year: "05",
    title: "Testing",
    description: "Security, quality assurance and performance optimization.",
    icon: ShieldCheck,
    color: "from-red-600 to-pink-500",
  },
  {
    year: "06",
    title: "Launch",
    description: "Cloud deployment with ongoing maintenance and support.",
    icon: Rocket,
    color: "from-sky-600 to-blue-700",
  },
];

export default function Timeline() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            PROJECT JOURNEY
          </span>

          <h2 className="mt-6 text-5xl font-black">
            How We Build Your Software
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            A proven development process focused on quality, transparency,
            security and long-term success.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-cyan-500 to-blue-700 lg:block" />

          <div className="space-y-12">

            {timeline.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className={`flex ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } items-center gap-10`}
                >

                  <div className="flex-1">

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                      >
                        <Icon size={30} />
                      </div>

                      <span className="mt-6 inline-block text-cyan-300 font-bold">
                        STEP {item.year}
                      </span>

                      <h3 className="mt-3 text-3xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-300 leading-7">
                        {item.description}
                      </p>

                    </div>

                  </div>

                  <div className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 border-4 border-slate-950" />

                  <div className="flex-1" />

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}