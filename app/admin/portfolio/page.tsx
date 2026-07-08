"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  FolderOpen,
  Eye,
  CheckCircle2,
  Search,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "156",
    icon: FolderOpen,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Completed",
    value: "128",
    icon: CheckCircle2,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "In Progress",
    value: "18",
    icon: Briefcase,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Views",
    value: "82K",
    icon: Eye,
    color: "from-purple-600 to-pink-500",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
              📁 Portfolio Management
            </span>

            <h1 className="mt-6 text-5xl font-black text-white">
              Portfolio Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-cyan-100">
              Manage projects, showcase completed work,
              upload images and maintain your portfolio.
            </p>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

              <Download size={20} />

              Export

            </button>

            <Link
              href="/admin/portfolio/new"
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3 font-bold text-black transition hover:scale-105"
            >

              <Plus size={20} />

              Add Portfolio

            </Link>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >

                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>

                  <Icon size={34} />

                  <h2 className="mt-5 text-4xl font-black">
                    {item.value}
                  </h2>

                  <p className="mt-2 opacity-90">
                    {item.title}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </section>

      {/* Search */}

      <section className="mx-auto mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-6 shadow-lg">

          <div className="grid gap-5 lg:grid-cols-4">

            <div className="relative lg:col-span-2">

              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search portfolio..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Categories</option>

              <option>NGO</option>

              <option>Education</option>

              <option>Healthcare</option>

              <option>IT Project</option>

              <option>CSR</option>

            </select>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">

              <Filter size={18} />

              Apply Filter

            </button>

          </div>

        </div>

      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 pb-12">

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        id: 1,
        title: "Smart School Project",
        client: "AJF Trust",
        category: "Education",
        status: "Completed",
        image: "https://picsum.photos/700/450?1",
        date: "12 Jul 2026",
      },
      {
        id: 2,
        title: "Medical Camp",
        client: "Anand Jivan Foundation",
        category: "Healthcare",
        status: "Running",
        image: "https://picsum.photos/700/450?2",
        date: "05 Jul 2026",
      },
      {
        id: 3,
        title: "Water Supply Project",
        client: "CSR Partner",
        category: "NGO",
        status: "Completed",
        image: "https://picsum.photos/700/450?3",
        date: "28 Jun 2026",
      },
      {
        id: 4,
        title: "Women Skill Training",
        client: "AJFT",
        category: "Women",
        status: "Completed",
        image: "https://picsum.photos/700/450?4",
        date: "18 Jun 2026",
      },
      {
        id: 5,
        title: "ERP Software",
        client: "ArikaSoft",
        category: "IT",
        status: "Running",
        image: "https://picsum.photos/700/450?5",
        date: "15 Jun 2026",
      },
      {
        id: 6,
        title: "Digital Classroom",
        client: "Government School",
        category: "Education",
        status: "Completed",
        image: "https://picsum.photos/700/450?6",
        date: "02 Jun 2026",
      },
    ].map((project) => (

      <motion.div
        key={project.id}
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-3xl bg-white shadow-xl transition-all"
      >

        {/* Image */}

        <div className="relative">

          <img
            src={project.image}
            alt={project.title}
            className="h-60 w-full object-cover"
          />

          <span
            className={`absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-bold ${
              project.status === "Completed"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }`}
          >
            {project.status}
          </span>

        </div>

        {/* Body */}

        <div className="p-6">

          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">

            {project.category}

          </span>

          <h2 className="mt-4 text-2xl font-black text-slate-900">

            {project.title}

          </h2>

          <p className="mt-2 text-slate-500">

            Client :
            <span className="font-semibold text-slate-700">
              {" "}
              {project.client}
            </span>

          </p>

          <p className="mt-2 text-sm text-slate-400">

            Completed :
            {" "}
            {project.date}

          </p>

          {/* Buttons */}

          <div className="mt-6 flex gap-3">

            <Link
              href={`/admin/portfolio/${project.id}`}
              className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              View
            </Link>

            <Link
              href={`/admin/portfolio/${project.id}/edit`}
              className="flex-1 rounded-xl bg-yellow-500 py-3 text-center font-bold text-white transition hover:bg-yellow-600"
            >
              Edit
            </Link>

            <button className="rounded-xl bg-red-500 px-5 py-3 font-bold text-white transition hover:bg-red-600">

              Delete

            </button>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* Analytics */}

<section className="mx-auto max-w-7xl px-6 pb-16">

  <div className="grid gap-8 lg:grid-cols-3">

    {/* Project Summary */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black text-slate-900">
        Project Summary
      </h2>

      <div className="mt-8 space-y-6">

        <div className="flex justify-between border-b pb-3">
          <span>Total Projects</span>
          <span className="font-black text-blue-700">
            156
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Completed</span>
          <span className="font-black text-green-600">
            128
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span>Running</span>
          <span className="font-black text-orange-600">
            18
          </span>
        </div>

        <div className="flex justify-between">
          <span>Draft</span>
          <span className="font-black text-red-600">
            10
          </span>
        </div>

      </div>

    </div>

    {/* Categories */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Categories
      </h2>

      <div className="mt-8 space-y-5">

        {[
          ["Education",42],
          ["Healthcare",25],
          ["NGO",38],
          ["IT Project",31],
          ["CSR",20],
        ].map(([name,total])=>(
          <div
            key={String(name)}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >
            <span className="font-semibold">
              {name}
            </span>

            <span className="rounded-full bg-blue-600 px-4 py-1 text-white">
              {total}
            </span>

          </div>
        ))}

      </div>

    </div>

    {/* Performance */}

    <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-xl">

      <h2 className="text-2xl font-black">
        Portfolio Performance
      </h2>

      <div className="mt-8 space-y-8">

        <div>

          <p className="text-cyan-100">
            Total Views
          </p>

          <h3 className="text-5xl font-black">
            82K
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Featured Projects
          </p>

          <h3 className="text-5xl font-black">
            18
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Success Rate
          </p>

          <h3 className="text-5xl font-black">
            98%
          </h3>

        </div>

      </div>

    </div>

  </div>

  {/* Bottom */}

  <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-3xl font-black text-slate-900">
          Ready to showcase your next project?
        </h2>

        <p className="mt-3 text-slate-500">
          Upload new portfolio items, manage galleries,
          track performance and present your work professionally.
        </p>

      </div>

      <div className="flex gap-4">

        <Link
          href="/admin/portfolio/new"
          className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
        >
          + Add Portfolio
        </Link>

        <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100">
          Export Report
        </button>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}