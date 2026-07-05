"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Database,
  Server,
  Cloud,
  Cpu,
  Code2,
  Globe,
  ShieldCheck,
  GitBranch,
  Workflow,
  Box,
  Layers3,
} from "lucide-react";

const technologies = [
  {
    title: "Next.js",
    icon: Globe,
    color: "from-slate-900 to-slate-700",
  },
  {
    title: "React",
    icon: Atom,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "TypeScript",
    icon: Code2,
    color: "from-blue-700 to-blue-500",
  },
  {
    title: "Node.js",
    icon: Server,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Laravel",
    icon: Layers3,
    color: "from-red-600 to-orange-500",
  },
  {
    title: "PHP",
    icon: Code2,
    color: "from-indigo-600 to-violet-500",
  },
  {
    title: "Python",
    icon: Cpu,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "MySQL",
    icon: Database,
    color: "from-sky-600 to-blue-500",
  },
  {
    title: "PostgreSQL",
    icon: Database,
    color: "from-blue-900 to-cyan-700",
  },
  {
    title: "Supabase",
    icon: Box,
    color: "from-emerald-600 to-green-500",
  },
  {
    title: "Docker",
    icon: Workflow,
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "AWS Cloud",
    icon: Cloud,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Technology() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-24 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

            TECHNOLOGY STACK

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Modern Technologies

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">

            We leverage the latest frameworks, cloud platforms and
            enterprise technologies to build secure, scalable and
            future-ready digital solutions.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {technologies.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.color} text-white shadow-lg`}
                >

                  <Icon size={30} />

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {tech.title}

                </h3>

                <p className="mt-4 text-slate-300">

                  Enterprise-grade development powered by {tech.title}.

                </p>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom */}

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-10 text-center">

          <ShieldCheck
            className="mx-auto text-cyan-400"
            size={48}
          />

          <h3 className="mt-6 text-3xl font-bold">

            Secure • Scalable • Enterprise Ready

          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">

            Every solution is built with security, scalability,
            performance and future expansion in mind.

          </p>

        </div>

      </div>

    </section>
  );
}