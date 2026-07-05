"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "Guddu Kumar",
    role: "Founder & CEO",
    image: "/team/ceo.jpg",
  },
  {
    name: "Puja Paswan",
    role: "Managing Director",
    image: "/team/md.jpg",
  },
  {
    name: "Rahul Kumar",
    role: "Lead Software Engineer",
    image: "/team/dev.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI / UX Designer",
    image: "/team/ui.jpg",
  },
];

export default function Team() {
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
            OUR TEAM
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Meet Our Leadership Team
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Experienced professionals dedicated to delivering innovative,
            secure and scalable digital solutions.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-400">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-blue-600">
                  {member.role}
                </p>

                <div className="mt-6 flex gap-4">

                  <button
                    type="button"
                    className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </button>

                  <button
                    type="button"
                    className="rounded-full bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
                  >
                    <Mail size={18} />
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-16 text-center">

          <a
            href="/career"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Join Our Team

            <ArrowRight
              className="ml-2"
              size={18}
            />

          </a>

        </div>

      </div>
    </section>
  );
}