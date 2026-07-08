"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const categories = [
  "All",
  "Education",
  "Healthcare",
  "NGO",
  "CSR",
  "Environment",
  "Technology",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-cyan-300">

              <BookOpen size={18} />

              Latest Articles

            </span>

            <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

              Our Blog

            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">

              Read inspiring stories, NGO activities,
              technology updates, education initiatives,
              healthcare programs and community impact.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Search */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-6 shadow-xl">

          <div className="grid gap-5 lg:grid-cols-4">

            <div className="relative lg:col-span-3">

              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search blog..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <button className="rounded-xl bg-blue-600 py-4 font-bold text-white hover:bg-blue-700">

              Search

            </button>

          </div>

          {/* Categories */}

          <div className="mt-6 flex flex-wrap gap-3">

            {categories.map((cat) => (

              <button
                key={cat}
                className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                {cat}
              </button>

            ))}

          </div>

        </div>

      </section>

      {/* Featured Blog */}

      <section className="mx-auto mt-10 max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="overflow-hidden rounded-3xl bg-white shadow-xl"
        >

          <div className="grid lg:grid-cols-2">

            <img
              src="https://picsum.photos/900/600"
              alt="Featured Blog"
              className="h-full w-full object-cover"
            />

            <div className="p-10">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

                Featured

              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900">

                Transforming Rural Education Through Digital Learning

              </h2>

              <div className="mt-6 flex flex-wrap gap-6 text-slate-500">

                <div className="flex items-center gap-2">

                  <Calendar size={18} />

                  08 July 2026

                </div>

                <div className="flex items-center gap-2">

                  <User size={18} />

                  Admin

                </div>

              </div>

              <p className="mt-6 leading-8 text-slate-600">

                Discover how technology is helping
                children in rural India receive quality
                education through digital classrooms,
                smart devices and innovative learning methods.

              </p>

              <Link
                href="/blog/digital-learning"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
              >

                Read Full Article

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

        </motion.div>

      </section>

      {/* Latest Blogs */}

<section className="mx-auto mt-14 max-w-7xl px-6 pb-14">

  <div className="mb-10 flex items-center justify-between">

    <div>

      <h2 className="text-4xl font-black text-slate-900">
        Latest Articles
      </h2>

      <p className="mt-2 text-slate-500">
        Read our latest news, success stories and updates.
      </p>

    </div>

    <Link
      href="/blog/archive"
      className="font-bold text-blue-600 hover:text-blue-800"
    >
      View All →
    </Link>

  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        id: 1,
        title: "Digital Education for Every Child",
        category: "Education",
        image: "https://picsum.photos/700/450?1",
        author: "Admin",
        date: "08 Jul 2026",
        time: "5 min read",
      },
      {
        id: 2,
        title: "Healthcare Camp Success Story",
        category: "Healthcare",
        image: "https://picsum.photos/700/450?2",
        author: "Team AJF",
        date: "06 Jul 2026",
        time: "4 min read",
      },
      {
        id: 3,
        title: "Safe Drinking Water Initiative",
        category: "NGO",
        image: "https://picsum.photos/700/450?3",
        author: "Editor",
        date: "05 Jul 2026",
        time: "6 min read",
      },
      {
        id: 4,
        title: "Women Skill Development Program",
        category: "Women",
        image: "https://picsum.photos/700/450?4",
        author: "Admin",
        date: "03 Jul 2026",
        time: "7 min read",
      },
      {
        id: 5,
        title: "CSR Partnership Opportunities",
        category: "CSR",
        image: "https://picsum.photos/700/450?5",
        author: "AJF Team",
        date: "01 Jul 2026",
        time: "8 min read",
      },
      {
        id: 6,
        title: "Tree Plantation Drive",
        category: "Environment",
        image: "https://picsum.photos/700/450?6",
        author: "Volunteer",
        date: "29 Jun 2026",
        time: "4 min read",
      },
      {
        id: 7,
        title: "Technology for Rural India",
        category: "Technology",
        image: "https://picsum.photos/700/450?7",
        author: "IT Team",
        date: "27 Jun 2026",
        time: "6 min read",
      },
      {
        id: 8,
        title: "Community Development Program",
        category: "NGO",
        image: "https://picsum.photos/700/450?8",
        author: "Project Team",
        date: "24 Jun 2026",
        time: "5 min read",
      },
      {
        id: 9,
        title: "Nutrition Awareness Campaign",
        category: "Healthcare",
        image: "https://picsum.photos/700/450?9",
        author: "Medical Team",
        date: "22 Jun 2026",
        time: "4 min read",
      },
    ].map((blog, index) => (

      <motion.article
        key={blog.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all"
      >

        <img
          src={blog.image}
          alt={blog.title}
          className="h-56 w-full object-cover"
        />

        <div className="p-6">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {blog.category}
          </span>

          <h3 className="mt-5 text-2xl font-black leading-snug text-slate-900">
            {blog.title}
          </h3>

          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">

            <span className="flex items-center gap-2">
              <User size={16} />
              {blog.author}
            </span>

            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {blog.date}
            </span>

          </div>

          <p className="mt-5 text-slate-600">
            {blog.time}
          </p>

          <Link
            href={`/blog/${blog.id}`}
            className="mt-6 inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
          >
            Read More
            <ArrowRight size={18} />
          </Link>

        </div>

      </motion.article>

    ))}

  </div>

</section>
{/* Newsletter */}

<section className="mx-auto max-w-7xl px-6 pb-16">

  <div className="rounded-[32px] bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-10 text-white shadow-2xl">

    <div className="grid items-center gap-10 lg:grid-cols-2">

      <div>

        <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
          📧 Newsletter
        </span>

        <h2 className="mt-6 text-4xl font-black">
          Never Miss Our Latest Articles
        </h2>

        <p className="mt-5 leading-8 text-cyan-100">
          Subscribe to receive NGO updates,
          education initiatives, healthcare projects,
          CSR news and technology articles directly
          in your inbox.
        </p>

      </div>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-cyan-100 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-cyan-100 outline-none"
        />

        <button
          className="w-full rounded-xl bg-yellow-400 py-4 text-lg font-bold text-black transition hover:scale-[1.02]"
        >
          Subscribe Now
        </button>

      </form>

    </div>

  </div>

  {/* Statistics */}

  <div className="mt-12 grid gap-6 md:grid-cols-4">

    {[
      ["250+", "Published Blogs"],
      ["50K+", "Monthly Readers"],
      ["18", "Categories"],
      ["99%", "Positive Feedback"],
    ].map(([value, label]) => (

      <div
        key={label}
        className="rounded-3xl bg-white p-8 text-center shadow-lg"
      >

        <h3 className="text-4xl font-black text-blue-700">
          {value}
        </h3>

        <p className="mt-3 text-slate-500">
          {label}
        </p>

      </div>

    ))}

  </div>

  {/* Pagination */}

  <div className="mt-12 flex flex-wrap items-center justify-center gap-3">

    <button className="rounded-xl border px-5 py-3 hover:bg-slate-100">
      Previous
    </button>

    {[1,2,3,4,5].map((page)=>(

      <button
        key={page}
        className={`rounded-xl px-5 py-3 font-bold ${
          page===1
          ? "bg-blue-600 text-white"
          : "border hover:bg-slate-100"
        }`}
      >
        {page}
      </button>

    ))}

    <button className="rounded-xl border px-5 py-3 hover:bg-slate-100">
      Next
    </button>

  </div>

  {/* CTA */}

  <div className="mt-16 rounded-[32px] bg-white p-12 text-center shadow-xl">

    <h2 className="text-4xl font-black text-slate-900">
      Want to Support Our Mission?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
      Your contribution helps us provide education,
      healthcare, drinking water, women empowerment,
      environmental protection and community welfare
      across India.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/donate"
        className="rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 px-10 py-4 text-lg font-bold text-white hover:opacity-90"
      >
        Donate Now
      </Link>

      <Link
        href="/contact"
        className="rounded-xl border border-slate-300 px-10 py-4 text-lg font-bold hover:bg-slate-100"
      >
        Contact Us
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}