"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  IndianRupee,
  CheckCircle2,
  Eye,
  Search,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Services",
    value: "48",
    icon: Briefcase,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Active",
    value: "42",
    icon: CheckCircle2,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: IndianRupee,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Views",
    value: "86K",
    icon: Eye,
    color: "from-purple-600 to-pink-500",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
              🚀 Services Management
            </span>

            <h1 className="mt-6 text-5xl font-black text-white">
              Services Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-cyan-100">
              Manage company services, pricing,
              categories and customer offerings.
            </p>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

              <Download size={20} />

              Export

            </button>

            <Link
              href="/admin/services/new"
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3 font-bold text-black transition hover:scale-105"
            >

              <Plus size={20} />

              Add Service

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
                initial={{ opacity: 0, y: 20 }}
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

      {/* Search */}

      <section className="mx-auto mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-6 shadow-lg">

          <div className="grid gap-5 lg:grid-cols-5">

            <div className="relative lg:col-span-2">

              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search services..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Categories</option>
              <option>Software</option>
              <option>Website</option>
              <option>Mobile App</option>
              <option>ERP</option>
              <option>NGO</option>

            </select>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Draft</option>

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
        name: "ERP Software Development",
        category: "Software",
        price: "₹25,000",
        status: "Active",
        image: "https://picsum.photos/700/450?11",
      },
      {
        id: 2,
        name: "School ERP",
        category: "Education",
        price: "₹18,000",
        status: "Active",
        image: "https://picsum.photos/700/450?12",
      },
      {
        id: 3,
        name: "NGO MIS Portal",
        category: "NGO",
        price: "₹22,000",
        status: "Active",
        image: "https://picsum.photos/700/450?13",
      },
      {
        id: 4,
        name: "Website Development",
        category: "Website",
        price: "₹12,000",
        status: "Draft",
        image: "https://picsum.photos/700/450?14",
      },
      {
        id: 5,
        name: "Android App",
        category: "Mobile App",
        price: "₹35,000",
        status: "Active",
        image: "https://picsum.photos/700/450?15",
      },
      {
        id: 6,
        name: "Digital Marketing",
        category: "Marketing",
        price: "₹15,000",
        status: "Inactive",
        image: "https://picsum.photos/700/450?16",
      },
    ].map((service) => (

      <motion.div
        key={service.id}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden rounded-3xl bg-white shadow-xl"
      >

        {/* Image */}

        <div className="relative">

          <img
            src={service.image}
            alt={service.name}
            className="h-56 w-full object-cover"
          />

          <span
            className={`absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-bold ${
              service.status === "Active"
                ? "bg-green-500 text-white"
                : service.status === "Draft"
                ? "bg-yellow-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {service.status}
          </span>

          <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-white">

            {service.category}

          </span>

        </div>

        {/* Content */}

        <div className="p-6">

          <h2 className="text-2xl font-black text-slate-900">

            {service.name}

          </h2>

          <p className="mt-3 text-slate-500">

            Premium business solution with complete
            implementation and support.

          </p>

          <div className="mt-6 flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                Starting From
              </p>

              <h3 className="text-3xl font-black text-blue-700">

                {service.price}

              </h3>

            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

              Featured

            </span>

          </div>

          {/* Buttons */}

          <div className="mt-8 grid grid-cols-3 gap-3">

            <Link
              href={`/admin/services/${service.id}`}
              className="rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              View
            </Link>

            <Link
              href={`/admin/services/${service.id}/edit`}
              className="rounded-xl bg-yellow-500 py-3 text-center font-bold text-white transition hover:bg-yellow-600"
            >
              Edit
            </Link>

            <button
              className="rounded-xl bg-red-500 py-3 font-bold text-white transition hover:bg-red-600"
            >
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

    {/* Revenue */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black text-slate-900">
        Revenue Overview
      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <div className="mb-2 flex justify-between">

            <span>Total Revenue</span>

            <span className="font-bold text-green-600">
              ₹12.8L
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[92%] rounded-full bg-green-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Completed Orders</span>

            <span className="font-bold text-blue-600">
              186
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[78%] rounded-full bg-blue-500"></div>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Pending Orders</span>

            <span className="font-bold text-orange-600">
              24
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[24%] rounded-full bg-orange-500"></div>

          </div>

        </div>

      </div>

    </div>

    {/* Categories */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Service Categories
      </h2>

      <div className="mt-8 space-y-5">

        {[
          ["ERP Software",12],
          ["Website",10],
          ["Mobile Apps",8],
          ["NGO MIS",9],
          ["Digital Marketing",5],
          ["SEO",4],
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

    {/* Summary */}

    <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-xl">

      <h2 className="text-2xl font-black">
        Business Summary
      </h2>

      <div className="mt-8 space-y-8">

        <div>

          <p className="text-cyan-100">
            Total Clients
          </p>

          <h3 className="text-5xl font-black">
            420
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Active Services
          </p>

          <h3 className="text-5xl font-black">
            42
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Customer Satisfaction
          </p>

          <h3 className="text-5xl font-black">
            99%
          </h3>

        </div>

      </div>

    </div>

  </div>

  {/* Recent Services */}

  <div className="mt-10 rounded-3xl bg-white shadow-xl">

    <div className="border-b px-8 py-6">

      <h2 className="text-2xl font-black">
        Recent Services
      </h2>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">Service</th>
            <th className="px-6 py-4 text-left">Category</th>
            <th className="px-6 py-4 text-left">Price</th>
            <th className="px-6 py-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {[
            ["ERP Software","Software","₹25,000","Active"],
            ["School ERP","Education","₹18,000","Active"],
            ["NGO MIS","NGO","₹22,000","Active"],
            ["Website","Website","₹12,000","Draft"],
            ["Android App","Mobile","₹35,000","Active"],
          ].map((item,index)=>(

            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >

              <td className="px-6 py-5 font-semibold">
                {item[0]}
              </td>

              <td className="px-6 py-5">
                {item[1]}
              </td>

              <td className="px-6 py-5 font-bold text-blue-700">
                {item[2]}
              </td>

              <td className="px-6 py-5">

                <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">

                  {item[3]}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  {/* Bottom CTA */}

  <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h2 className="text-3xl font-black text-slate-900">
          Ready to launch a new service?
        </h2>

        <p className="mt-3 text-slate-500">
          Add new business services, manage pricing, track performance,
          and grow your business from one dashboard.
        </p>

      </div>

      <div className="flex gap-4">

        <Link
          href="/admin/services/new"
          className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
        >
          + Add Service
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