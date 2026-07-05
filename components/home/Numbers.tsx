"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Award,
  Globe2,
  Server,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Projects Completed",
    value: 500,
    suffix: "+",
    icon: Briefcase,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Happy Clients",
    value: 150,
    suffix: "+",
    icon: Users,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Software Products",
    value: 30,
    suffix: "+",
    icon: Award,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Countries Served",
    value: 12,
    suffix: "+",
    icon: Globe2,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud Uptime",
    value: 99.9,
    suffix: "%",
    icon: Server,
    color: "from-sky-600 to-blue-700",
  },
  {
    title: "Support",
    value: 24,
    suffix: "/7",
    icon: Clock3,
    color: "from-pink-600 to-rose-500",
  },
];

export default function Numbers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
            BUSINESS NUMBERS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Trusted by Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Delivering reliable software solutions with measurable business outcomes.
          </p>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
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
                      decimals={item.value % 1 ? 1 : 0}
                    />
                  )}
                  {item.suffix}
                </h3>

                <p className="mt-3 text-lg text-slate-300">
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