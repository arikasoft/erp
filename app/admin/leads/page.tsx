"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Leads",
    value: "1,286",
    color: "from-blue-600 to-cyan-500",
    icon: Users,
  },
  {
    title: "New Leads",
    value: "328",
    color: "from-green-600 to-emerald-500",
    icon: UserPlus,
  },
  {
    title: "Converted",
    value: "845",
    color: "from-purple-600 to-pink-500",
    icon: CheckCircle2,
  },
  {
    title: "Lost",
    value: "113",
    color: "from-red-600 to-orange-500",
    icon: XCircle,
  },
];

export default function LeadsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>

              <h1 className="text-5xl font-black text-white">
                Leads Management
              </h1>

              <p className="mt-3 text-lg text-cyan-100">
                Manage all customer leads from one dashboard.
              </p>

            </div>

            <div className="flex gap-4">

              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

                <Download size={20} />

                Export

              </button>

              <Link
                href="/admin/leads/new"
                className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105"
              >

                <Plus size={20} />

                Add Lead

              </Link>

            </div>

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
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >

                <div
                  className={`bg-gradient-to-r ${item.color} p-6 text-white`}
                >

                  <Icon size={34} />

                  <h2 className="mt-6 text-4xl font-black">
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
                size={20}
                className="absolute left-4 top-4 text-slate-400"
              />

              <input
                placeholder="Search lead..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none transition focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4 outline-none">

              <option>All Status</option>

              <option>New</option>

              <option>Qualified</option>

              <option>Interested</option>

              <option>Converted</option>

              <option>Lost</option>

            </select>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">

              <Filter size={18} />

              Apply Filter

            </button>

          </div>

        </div>

      </section>

      {/* Table Part Coming Next */}

    </main>
  );
}