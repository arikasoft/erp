"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const news = [
  {
    title: "ArikaSoft launches Enterprise ERP 2026",
    date: "15 January 2026",
    image: "/news/news1.jpg",
    category: "Product",
  },
  {
    title: "AI Powered CRM Released",
    date: "08 January 2026",
    image: "/news/news2.jpg",
    category: "AI",
  },
  {
    title: "Government e-Governance Solution",
    date: "01 January 2026",
    image: "/news/news3.jpg",
    category: "Government",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            LATEST NEWS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            News & Updates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Stay updated with the latest product releases,
            technology insights and company announcements.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {news.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition"
            >

              <div className="relative h-60">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                  {item.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-slate-500">

                  <CalendarDays size={18} />

                  {item.date}

                </div>

                <Link
                  href="/blog"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600"
                >
                  Read More

                  <ArrowRight size={18} />

                </Link>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}