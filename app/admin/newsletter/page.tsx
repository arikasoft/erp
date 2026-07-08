"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Users,
  Send,
  MousePointerClick,
  FileText,
  Plus,
  UserPlus,
  LayoutTemplate,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Subscribers",
    value: "18,452",
    color: "from-blue-600 to-cyan-500",
    icon: Users,
  },
  {
    title: "Campaigns",
    value: "128",
    color: "from-purple-600 to-pink-500",
    icon: Mail,
  },
  {
    title: "Emails Sent",
    value: "246K",
    color: "from-green-600 to-emerald-500",
    icon: Send,
  },
  {
    title: "Open Rate",
    value: "68%",
    color: "from-orange-500 to-red-500",
    icon: MousePointerClick,
  },
];

const actions = [
  {
    title: "New Campaign",
    href: "/admin/newsletter/campaigns/new",
    icon: Plus,
    color: "bg-blue-600",
  },
  {
    title: "Subscribers",
    href: "/admin/newsletter/subscribers",
    icon: UserPlus,
    color: "bg-green-600",
  },
  {
    title: "Templates",
    href: "/admin/newsletter/templates",
    icon: LayoutTemplate,
    color: "bg-purple-600",
  },
  {
    title: "Reports",
    href: "/admin/newsletter/reports",
    icon: TrendingUp,
    color: "bg-orange-600",
  },
];

export default function NewsletterDashboard() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto max-w-7xl px-6 py-14">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div>

              <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
                📧 Newsletter Dashboard
              </span>

              <h1 className="mt-6 text-5xl font-black text-white">
                Email Marketing Center
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-cyan-100">
                Create campaigns, manage subscribers,
                send newsletters and track engagement
                from one powerful dashboard.
              </p>

            </div>

            <Link
              href="/admin/newsletter/campaigns/new"
              className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              + Create Campaign
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

      {/* Quick Actions */}

      <section className="mx-auto mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <h2 className="text-3xl font-black text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-2 text-slate-500">
            Frequently used newsletter management tools.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {actions.map((item) => {

              const Icon = item.icon;

              return (

                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
                >

                  <div
                    className={`inline-flex rounded-2xl ${item.color} p-4 text-white`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Open {item.title.toLowerCase()}
                  </p>

                </Link>

              );

            })}

          </div>

        </div>

      </section>

      {/* Dashboard Content */}

<section className="mx-auto mt-10 max-w-7xl px-6 pb-10">

  <div className="grid gap-8 lg:grid-cols-3">

    {/* Recent Campaigns */}

    <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-slate-900">
            Recent Campaigns
          </h2>

          <p className="mt-2 text-slate-500">
            Latest email marketing campaigns.
          </p>

        </div>

        <Link
          href="/admin/newsletter/campaigns"
          className="font-semibold text-blue-600"
        >
          View All →
        </Link>

      </div>

      <div className="mt-8 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="pb-4">Campaign</th>
              <th className="pb-4">Audience</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Open</th>

            </tr>

          </thead>

          <tbody>

            {[
              {
                name: "Education Support",
                audience: "15,240",
                status: "Sent",
                open: "72%",
              },
              {
                name: "Healthcare Program",
                audience: "10,520",
                status: "Scheduled",
                open: "--",
              },
              {
                name: "CSR Newsletter",
                audience: "8,410",
                status: "Draft",
                open: "--",
              },
              {
                name: "Women Empowerment",
                audience: "19,200",
                status: "Sent",
                open: "68%",
              },
            ].map((item) => (

              <tr
                key={item.name}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-5 font-bold">
                  {item.name}
                </td>

                <td>{item.audience}</td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${
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

                <td className="font-bold text-blue-600">
                  {item.open}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

    {/* Right Sidebar */}

    <div className="space-y-8">

      {/* Subscriber */}

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="text-2xl font-black">
          Subscribers
        </h2>

        <div className="mt-6 space-y-5">

          <div className="flex justify-between">

            <span>Total</span>

            <span className="font-black text-blue-700">
              18,452
            </span>

          </div>

          <div className="flex justify-between">

            <span>Active</span>

            <span className="font-black text-green-700">
              17,984
            </span>

          </div>

          <div className="flex justify-between">

            <span>Unsubscribed</span>

            <span className="font-black text-red-700">
              468
            </span>

          </div>

        </div>

      </div>

      {/* Templates */}

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="text-2xl font-black">
          Templates
        </h2>

        <div className="mt-6 space-y-4">

          {[
            "Monthly Newsletter",
            "Donation Appeal",
            "Volunteer Update",
            "Event Invitation",
          ].map((item) => (

            <div
              key={item}
              className="rounded-xl border p-4 transition hover:bg-slate-50"
            >

              <h3 className="font-bold">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
{/* Analytics */}

<section className="mx-auto max-w-7xl px-6 pb-12">

  <div className="grid gap-8 lg:grid-cols-3">

    {/* Performance */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black text-slate-900">
        Campaign Performance
      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <div className="mb-2 flex justify-between">

            <span>Open Rate</span>

            <span className="font-bold text-green-600">
              68%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[68%] rounded-full bg-green-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Click Rate</span>

            <span className="font-bold text-blue-600">
              24%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[24%] rounded-full bg-blue-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Delivery</span>

            <span className="font-bold text-purple-600">
              96%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[96%] rounded-full bg-purple-500"></div>

          </div>

        </div>

      </div>

    </div>

    {/* Activity */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Recent Activity
      </h2>

      <div className="mt-8 space-y-6">

        {[
          "Education Campaign Sent",
          "120 New Subscribers",
          "Donation Appeal Scheduled",
          "Monthly Newsletter Published",
          "Healthcare Campaign Completed",
        ].map((item, i) => (

          <div
            key={i}
            className="flex items-start gap-4"
          >

            <div className="mt-2 h-3 w-3 rounded-full bg-blue-600"></div>

            <div>

              <h3 className="font-semibold text-slate-900">
                {item}
              </h3>

              <p className="text-sm text-slate-500">
                {i + 1} hour ago
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* Quick Stats */}

    <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-xl">

      <h2 className="text-2xl font-black">
        Newsletter Summary
      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <p className="text-cyan-100">
            Total Emails
          </p>

          <h3 className="text-4xl font-black">
            246K
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Total Subscribers
          </p>

          <h3 className="text-4xl font-black">
            18,452
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Campaign Success
          </p>

          <h3 className="text-4xl font-black">
            96%
          </h3>

        </div>

      </div>

    </div>

  </div>

  {/* Bottom */}

  <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-2xl font-black">
          Ready to launch your next campaign?
        </h2>

        <p className="mt-2 text-slate-500">
          Create beautiful newsletters and reach thousands of subscribers instantly.
        </p>

      </div>

      <div className="flex gap-4">

        <Link
          href="/admin/newsletter/templates"
          className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
        >
          Templates
        </Link>

        <Link
          href="/admin/newsletter/campaigns/new"
          className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
        >
          Create Campaign
        </Link>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}