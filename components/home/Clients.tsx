"use client";

import { motion } from "framer-motion";

const clients = [
  "Microsoft",
  "Google",
  "AWS",
  "Oracle",
  "Meta",
  "GitHub",
  "Supabase",
  "Razorpay",
  "Next.js",
  "Docker",
];

export default function Clients() {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            TRUSTED TECHNOLOGY PARTNER
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Trusted by Businesses
            <span className="block text-blue-600">
              Across Multiple Industries
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            We deliver secure, scalable and enterprise-grade software
            solutions for startups, SMEs, NGOs and large organizations.
          </p>

        </motion.div>

        {/* Logo Slider */}

        <div className="relative mt-14 overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >

            {[...clients, ...clients].map((item, index) => (

              <div
                key={index}
                className="flex h-24 w-52 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <span className="text-lg font-bold tracking-wide text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </motion.div>

        </div>

        {/* Stats */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["500+", "Projects Delivered"],
            ["150+", "Happy Clients"],
            ["30+", "Software Products"],
            ["24×7", "Technical Support"],
          ].map(([value, title]) => (

            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:border-blue-500 hover:bg-white hover:shadow-xl"
            >

              <h3 className="text-4xl font-black text-blue-600">
                {value}
              </h3>

              <p className="mt-3 text-slate-600">
                {title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}