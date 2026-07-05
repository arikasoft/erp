"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Users,
  Globe2,
  Boxes,
  Award,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    title: "Projects Delivered",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    title: "Happy Clients",
    color: "from-indigo-600 to-blue-500",
  },
  {
    icon: Globe2,
    value: 12,
    suffix: "+",
    title: "Countries Served",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Boxes,
    value: 30,
    suffix: "+",
    title: "Software Products",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    title: "Years Experience",
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    title: "Support Available",
    color: "from-red-600 to-pink-500",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Numbers That Speak
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            We build enterprise-grade software that helps businesses
            grow faster with secure, scalable and innovative technology.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .45,
                  delay: index * .05,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-black text-cyan-300">
                  {inView && (
                    <CountUp
                      end={item.value}
                      duration={2.5}
                    />
                  )}
                  {item.suffix}
                </h3>

                <p className="mt-4 text-lg text-slate-300">
                  {item.title}
                </p>
              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}