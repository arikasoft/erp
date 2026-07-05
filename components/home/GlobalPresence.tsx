"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  MapPinned,
  Building2,
  Users,
  Server,
  Cloud,
} from "lucide-react";

const stats = [
  {
    value: "12+",
    title: "Countries Served",
    icon: Globe2,
  },
  {
    value: "150+",
    title: "Happy Clients",
    icon: Users,
  },
  {
    value: "500+",
    title: "Projects Delivered",
    icon: Building2,
  },
  {
    value: "99.9%",
    title: "Cloud Uptime",
    icon: Server,
  },
];

const offices = [
  "India",
  "UAE",
  "Singapore",
  "United Kingdom",
  "United States",
  "Australia",
];

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

            GLOBAL PRESENCE

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Delivering Technology Worldwide

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">

            We empower startups, enterprises, NGOs and government
            organizations with secure and scalable digital solutions
            across the globe.

          </p>

        </motion.div>

        {/* World Map Placeholder */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <div className="flex flex-col items-center justify-center">

            <Globe2
              size={180}
              className="text-cyan-400"
            />

            <h3 className="mt-8 text-3xl font-bold">

              Global Delivery Network

            </h3>

            <p className="mt-4 max-w-2xl text-center text-slate-300">

              Cloud-native infrastructure enabling worldwide
              software deployment and enterprise support.

            </p>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
              >

                <Icon
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-5xl font-black">

                  {item.value}

                </h3>

                <p className="mt-2 text-slate-300">

                  {item.title}

                </p>

              </div>

            );

          })}

        </div>

        {/* Offices */}

        <div className="mt-20">

          <h3 className="text-center text-3xl font-bold">

            Markets We Serve

          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {offices.map((office) => (

              <div
                key={office}
                className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3"
              >

                <MapPinned
                  size={18}
                  className="text-cyan-300"
                />

                {office}

              </div>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 p-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <h3 className="text-4xl font-black">

                Global Cloud Infrastructure

              </h3>

              <p className="mt-5 text-lg text-blue-100">

                Secure cloud deployment, enterprise monitoring,
                worldwide CDN, AI infrastructure and
                high availability architecture.

              </p>

            </div>

            <div className="flex justify-center">

              <Cloud
                size={120}
                className="text-white"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}