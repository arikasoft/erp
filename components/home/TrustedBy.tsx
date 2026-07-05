"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/logos/client1.svg",
  "/logos/client2.svg",
  "/logos/client3.svg",
  "/logos/client4.svg",
  "/logos/client5.svg",
  "/logos/client6.svg",
  "/logos/client7.svg",
  "/logos/client8.svg",
];

export default function TrustedBy() {
  return (
    <section className="bg-slate-50 py-20 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            TRUSTED BY
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Trusted by Organizations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Businesses, educational institutions, NGOs and enterprises
            rely on ArikaSoft for secure and scalable software solutions.
          </p>

        </motion.div>

        <div className="relative mt-16 overflow-hidden">

          <div className="flex animate-[scroll_30s_linear_infinite] gap-10">

            {[...logos, ...logos].map((logo, index) => (

              <div
                key={index}
                className="flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm"
              >

                <Image
                  src={logo}
                  alt="Client Logo"
                  width={150}
                  height={60}
                  className="h-12 w-auto object-contain grayscale transition hover:grayscale-0"
                />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}