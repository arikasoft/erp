"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  User,
  ArrowRight,
  Tag,
} from "lucide-react";

const blogs = [
  {
    category: "ERP",
    title: "Why Every Growing Business Needs an ERP System",
    description:
      "Discover how ERP software improves productivity, reduces operational costs and streamlines business processes.",
    author: "ArikaSoft Team",
    date: "12 Jan 2026",
  },
  {
    category: "Artificial Intelligence",
    title: "AI is Transforming Modern Enterprises",
    description:
      "Learn how AI automation helps organizations improve decision making and customer experience.",
    author: "ArikaSoft Team",
    date: "08 Jan 2026",
  },
  {
    category: "Cloud Computing",
    title: "Cloud Migration Best Practices for Businesses",
    description:
      "A complete guide to securely migrating business applications to the cloud.",
    author: "ArikaSoft Team",
    date: "03 Jan 2026",
  },
];

export default function Blog() {
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
            LATEST BLOGS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Latest Insights & Technology Updates
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Stay updated with the latest trends in ERP, AI,
            Cloud Computing and Digital Transformation.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {blogs.map((blog, index) => (

            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .45,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="h-56 bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-400" />

              <div className="p-8">

                <div className="flex items-center gap-3 text-sm">

                  <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-700">

                    <Tag size={14} />

                    {blog.category}

                  </span>

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">

                  {blog.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-500">

                  {blog.description}

                </p>

                <div className="mt-8 flex items-center justify-between border-t pt-5">

                  <div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                      <User size={15} />

                      {blog.author}

                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                      <CalendarDays size={15} />

                      {blog.date}

                    </div>

                  </div>

                  <Link
                    href="/blog"
                    className="flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-4"
                  >

                    Read More

                    <ArrowRight size={18} />

                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}