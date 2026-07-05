"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  Boxes,
  Workflow,
  ShieldCheck,
  Globe,
  Layers3,
  Binary,
} from "lucide-react";

const stack = [
  {
    name: "Next.js",
    icon: Globe,
    color: "from-slate-900 to-slate-700",
  },
  {
    name: "React",
    icon: Atom,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "TypeScript",
    icon: Code2,
    color: "from-blue-700 to-indigo-600",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "from-green-600 to-emerald-500",
  },
  {
    name: "Laravel",
    icon: Layers3,
    color: "from-red-600 to-orange-500",
  },
  {
    name: "PHP",
    icon: Binary,
    color: "from-indigo-700 to-violet-600",
  },
  {
    name: "Python",
    icon: Cpu,
    color: "from-yellow-500 to-orange-400",
  },
  {
    name: "MySQL",
    icon: Database,
    color: "from-sky-600 to-blue-500",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "from-blue-800 to-cyan-600",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "from-green-700 to-green-500",
  },
  {
    name: "Docker",
    icon: Boxes,
    color: "from-cyan-600 to-blue-600",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Azure",
    icon: Cloud,
    color: "from-blue-700 to-cyan-500",
  },
  {
    name: "Google Cloud",
    icon: Cloud,
    color: "from-green-600 to-blue-500",
  },
  {
    name: "Supabase",
    icon: Workflow,
    color: "from-emerald-600 to-green-500",
  },
  {
    name: "Enterprise Security",
    icon: ShieldCheck,
    color: "from-slate-700 to-slate-900",
  },
];

export default function TechStack() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            TECHNOLOGY STACK
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Technologies We Work With
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            We build enterprise applications using modern frameworks,
            cloud platforms and secure technologies.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {stack.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.color} text-white`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {tech.name}
                </h3>

                <p className="mt-4 text-slate-500">
                  Enterprise-grade development powered by {tech.name}.
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}