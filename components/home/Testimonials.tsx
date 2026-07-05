"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "ABC Manufacturing",
    review:
      "ArikaSoft transformed our business with a modern ERP solution. The implementation was smooth and the support team is excellent.",
  },
  {
    name: "Priya Sharma",
    company: "Bright Future School",
    review:
      "The School ERP has simplified admissions, attendance and fee management. Highly recommended.",
  },
  {
    name: "Amit Verma",
    company: "City Care Hospital",
    review:
      "The Hospital ERP helped us digitize patient records, billing and pharmacy management efficiently.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Our commitment to quality, innovation and customer success
            has earned the trust of businesses across industries.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .45,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <Quote
                className="text-blue-600"
                size={42}
              />

              <div className="mt-5 flex">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-xl font-bold text-white">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}