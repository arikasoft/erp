"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Users,
  MousePointerClick,
  Plus,
  Search,
  Filter,
  Download,
} from "lucide-react";

const stats = [
  {
    title: "Total Campaigns",
    value: "128",
    color: "from-blue-600 to-cyan-500",
    icon: Mail,
  },
  {
    title: "Sent",
    value: "96",
    color: "from-green-600 to-emerald-500",
    icon: Send,
  },
  {
    title: "Subscribers",
    value: "18,452",
    color: "from-purple-600 to-pink-500",
    icon: Users,
  },
  {
    title: "Avg. Open Rate",
    value: "68%",
    color: "from-orange-500 to-red-500",
    icon: MousePointerClick,
  },
];

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h1 className="text-5xl font-black text-white">
                Newsletter Campaigns
              </h1>

              <p className="mt-3 text-lg text-cyan-100">
                Create, schedule and monitor email campaigns.
              </p>

            </div>

            <div className="flex gap-4">

              <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

                <Download size={20} />

                Export

              </button>

              <Link
                href="/admin/newsletter/campaigns/new"
                className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105"
              >

                <Plus size={20} />

                New Campaign

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
                placeholder="Search Campaign..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Campaigns</option>
              <option>Draft</option>
              <option>Scheduled</option>
              <option>Sent</option>
              <option>Paused</option>

            </select>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">

              <Filter size={18} />

              Apply Filter

            </button>

          </div>

        </div>

      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 pb-10">

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="overflow-hidden rounded-3xl bg-white shadow-xl"
  >

    <div className="border-b px-8 py-6">

      <h2 className="text-2xl font-black text-slate-900">
        Email Campaigns
      </h2>

      <p className="mt-2 text-slate-500">
        Monitor campaign performance and delivery.
      </p>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr className="text-left">

            <th className="px-6 py-4">Campaign</th>

            <th className="px-6 py-4">Audience</th>

            <th className="px-6 py-4">Status</th>

            <th className="px-6 py-4">Open Rate</th>

            <th className="px-6 py-4">Click Rate</th>

            <th className="px-6 py-4">Scheduled</th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {[
            {
              id: 1,
              name: "Education Support Campaign",
              audience: 15240,
              status: "Sent",
              open: "72%",
              click: "28%",
              date: "12 Jul 2026",
            },
            {
              id: 2,
              name: "Healthcare Initiative",
              audience: 10450,
              status: "Scheduled",
              open: "--",
              click: "--",
              date: "15 Jul 2026",
            },
            {
              id: 3,
              name: "Water Project Update",
              audience: 8420,
              status: "Draft",
              open: "--",
              click: "--",
              date: "-",
            },
            {
              id: 4,
              name: "Women Empowerment",
              audience: 19120,
              status: "Sent",
              open: "69%",
              click: "21%",
              date: "08 Jul 2026",
            },
          ].map((item) => (

            <tr
              key={item.id}
              className="border-b transition hover:bg-slate-50"
            >

              <td className="px-6 py-5">

                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  Campaign #{item.id}
                </p>

              </td>

              <td className="px-6 py-5 font-semibold">

                {item.audience.toLocaleString()}

              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    item.status === "Sent"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Scheduled"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td className="px-6 py-5 font-bold text-blue-700">
                {item.open}
              </td>

              <td className="px-6 py-5 font-bold text-cyan-700">
                {item.click}
              </td>

              <td className="px-6 py-5">
                {item.date}
              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button className="rounded-xl bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200">
                    View
                  </button>

                  <button className="rounded-xl bg-green-100 px-4 py-2 text-green-700 hover:bg-green-200">
                    Edit
                  </button>

                  <button className="rounded-xl bg-purple-100 px-4 py-2 text-purple-700 hover:bg-purple-200">
                    Send
                  </button>

                  <button className="rounded-xl bg-red-100 px-4 py-2 text-red-700 hover:bg-red-200">
                    Delete
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </motion.div>

</section>
{/* Analytics */}

<section className="mx-auto mt-10 max-w-7xl px-6 pb-12">

  <div className="grid gap-6 lg:grid-cols-3">

    {/* Delivery */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black text-slate-900">
        Delivery Report
      </h2>

      <div className="mt-8 space-y-5">

        <div>

          <div className="mb-2 flex justify-between">

            <span>Delivered</span>

            <span className="font-bold text-green-600">
              96%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[96%] rounded-full bg-green-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Bounced</span>

            <span className="font-bold text-red-600">
              2%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[2%] rounded-full bg-red-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Spam</span>

            <span className="font-bold text-orange-600">
              1%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[1%] rounded-full bg-orange-500"></div>

          </div>

        </div>

      </div>

    </div>

    {/* Subscribers */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Subscribers
      </h2>

      <div className="mt-8">

        <div className="flex items-center justify-between border-b py-4">

          <span>Total</span>

          <span className="font-black text-blue-700">
            18,452
          </span>

        </div>

        <div className="flex items-center justify-between border-b py-4">

          <span>Active</span>

          <span className="font-black text-green-700">
            17,984
          </span>

        </div>

        <div className="flex items-center justify-between border-b py-4">

          <span>Unsubscribed</span>

          <span className="font-black text-red-700">
            468
          </span>

        </div>

      </div>

    </div>

    {/* Performance */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Performance
      </h2>

      <div className="mt-8 space-y-5">

        <div className="rounded-2xl bg-blue-50 p-5">

          <h3 className="text-3xl font-black text-blue-700">
            68%
          </h3>

          <p className="text-slate-600">
            Average Open Rate
          </p>

        </div>

        <div className="rounded-2xl bg-cyan-50 p-5">

          <h3 className="text-3xl font-black text-cyan-700">
            24%
          </h3>

          <p className="text-slate-600">
            Average Click Rate
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* Pagination */}

  <div className="mt-10 flex items-center justify-between rounded-3xl bg-white p-6 shadow">

    <p className="text-slate-500">
      Showing 1 - 10 of 128 Campaigns
    </p>

    <div className="flex gap-2">

      <button className="rounded-xl border px-5 py-2 hover:bg-slate-100">
        Previous
      </button>

      <button className="rounded-xl bg-blue-600 px-5 py-2 text-white">
        1
      </button>

      <button className="rounded-xl border px-5 py-2 hover:bg-slate-100">
        2
      </button>

      <button className="rounded-xl border px-5 py-2 hover:bg-slate-100">
        3
      </button>

      <button className="rounded-xl border px-5 py-2 hover:bg-slate-100">
        Next
      </button>

    </div>

  </div>

</section>

    </main>
  );
}