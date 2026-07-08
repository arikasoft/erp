"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  UserCheck,
  UserX,
  Search,
  Filter,
  Download,
  Plus,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "248",
    icon: Users,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Administrators",
    value: "12",
    icon: Shield,
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Active Users",
    value: "228",
    icon: UserCheck,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Inactive",
    value: "20",
    icon: UserX,
    color: "from-red-500 to-pink-500",
  },
];

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
              👥 User Management
            </span>

            <h1 className="mt-6 text-5xl font-black text-white">
              Users Dashboard
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-cyan-100">
              Manage administrators, employees,
              volunteers and system users.
            </p>

          </div>

          <div className="flex gap-4">

            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

              <Download size={20} />

              Export

            </button>

            <Link
              href="/admin/users/new"
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3 font-bold text-black transition hover:scale-105"
            >

              <Plus size={20} />

              Add User

            </Link>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
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

          <div className="grid gap-5 lg:grid-cols-5">

            <div className="relative lg:col-span-2">

              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search user..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Roles</option>

              <option>Super Admin</option>

              <option>Admin</option>

              <option>Manager</option>

              <option>Editor</option>

              <option>User</option>

            </select>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Status</option>

              <option>Active</option>

              <option>Inactive</option>

              <option>Suspended</option>

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
        name: "Guddu Kumar",
        role: "Super Admin",
        email: "admin@arikasoft.com",
        phone: "+91 9155751363",
        status: "Active",
        image: "https://i.pravatar.cc/400?img=12",
      },
      {
        id: 2,
        name: "Puja Paswan",
        role: "Administrator",
        email: "puja@ajftrust.org",
        phone: "+91 9876543210",
        status: "Active",
        image: "https://i.pravatar.cc/400?img=47",
      },
      {
        id: 3,
        name: "Rahul Kumar",
        role: "Manager",
        email: "rahul@example.com",
        phone: "+91 9123456789",
        status: "Active",
        image: "https://i.pravatar.cc/400?img=15",
      },
      {
        id: 4,
        name: "Amit Singh",
        role: "Editor",
        email: "amit@example.com",
        phone: "+91 9000011111",
        status: "Inactive",
        image: "https://i.pravatar.cc/400?img=18",
      },
      {
        id: 5,
        name: "Neha Kumari",
        role: "Volunteer",
        email: "neha@example.com",
        phone: "+91 9012345678",
        status: "Active",
        image: "https://i.pravatar.cc/400?img=25",
      },
      {
        id: 6,
        name: "Ravi Sharma",
        role: "User",
        email: "ravi@example.com",
        phone: "+91 9988776655",
        status: "Suspended",
        image: "https://i.pravatar.cc/400?img=33",
      },
    ].map((user) => (

      <motion.div
        key={user.id}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden rounded-3xl bg-white shadow-xl"
      >

        {/* Header */}

        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-600 p-8 text-center">

          <img
            src={user.image}
            alt={user.name}
            className="mx-auto h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"
          />

          <h2 className="mt-5 text-2xl font-black text-white">
            {user.name}
          </h2>

          <p className="mt-1 text-cyan-100">
            {user.role}
          </p>

        </div>

        {/* Body */}

        <div className="space-y-4 p-6">

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Email
            </span>

            <span className="font-semibold text-slate-900">
              {user.email}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Mobile
            </span>

            <span className="font-semibold text-slate-900">
              {user.phone}
            </span>

          </div>

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Status
            </span>

            <span
              className={`rounded-full px-4 py-1 text-sm font-bold ${
                user.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : user.status === "Inactive"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.status}
            </span>

          </div>

          {/* Buttons */}

          <div className="mt-6 grid grid-cols-3 gap-3">

            <Link
              href={`/admin/users/${user.id}`}
              className="rounded-xl bg-blue-600 py-3 text-center font-bold text-white hover:bg-blue-700"
            >
              View
            </Link>

            <Link
              href={`/admin/users/${user.id}/edit`}
              className="rounded-xl bg-yellow-500 py-3 text-center font-bold text-white hover:bg-yellow-600"
            >
              Edit
            </Link>

            <button
              className="rounded-xl bg-red-500 py-3 font-bold text-white hover:bg-red-600"
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

    {/* User Analytics */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black text-slate-900">
        User Analytics
      </h2>

      <div className="mt-8 space-y-6">

        <div>

          <div className="mb-2 flex justify-between">
            <span>Active Users</span>
            <span className="font-bold text-green-600">
              92%
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div className="h-3 w-[92%] rounded-full bg-green-500"></div>
          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">
            <span>Administrators</span>
            <span className="font-bold text-blue-600">
              12
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div className="h-3 w-[18%] rounded-full bg-blue-500"></div>
          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">
            <span>Suspended</span>
            <span className="font-bold text-red-600">
              8
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div className="h-3 w-[8%] rounded-full bg-red-500"></div>
          </div>

        </div>

      </div>

    </div>

    {/* Recent Login */}

    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-black">
        Recent Login
      </h2>

      <div className="mt-8 space-y-5">

        {[
          "Guddu Kumar",
          "Puja Paswan",
          "Rahul Kumar",
          "Amit Singh",
          "Neha Kumari",
        ].map((name, i) => (

          <div
            key={i}
            className="flex items-center justify-between border-b pb-4"
          >

            <div>

              <h3 className="font-semibold">
                {name}
              </h3>

              <p className="text-sm text-slate-500">
                Today, {9 + i}:15 AM
              </p>

            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Online
            </span>

          </div>

        ))}

      </div>

    </div>

    {/* Summary */}

    <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-xl">

      <h2 className="text-2xl font-black">
        User Summary
      </h2>

      <div className="mt-8 space-y-8">

        <div>

          <p className="text-cyan-100">
            Total Users
          </p>

          <h3 className="text-5xl font-black">
            248
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            Active Today
          </p>

          <h3 className="text-5xl font-black">
            63
          </h3>

        </div>

        <div>

          <p className="text-cyan-100">
            New This Month
          </p>

          <h3 className="text-5xl font-black">
            18
          </h3>

        </div>

      </div>

    </div>

  </div>

  {/* Users Table */}

  <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-xl">

    <div className="border-b px-8 py-6">

      <h2 className="text-2xl font-black">
        Users List
      </h2>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Role</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Status</th>

          </tr>

        </thead>

        <tbody>

          {[
            ["Guddu Kumar","Super Admin","admin@arikasoft.com","Active"],
            ["Puja Paswan","Admin","puja@ajftrust.org","Active"],
            ["Rahul Kumar","Manager","rahul@example.com","Active"],
            ["Amit Singh","Editor","amit@example.com","Inactive"],
            ["Neha Kumari","Volunteer","neha@example.com","Active"],
          ].map((user,index)=>(

            <tr
              key={index}
              className="border-b hover:bg-slate-50"
            >

              <td className="px-6 py-5 font-semibold">
                {user[0]}
              </td>

              <td className="px-6 py-5">
                {user[1]}
              </td>

              <td className="px-6 py-5">
                {user[2]}
              </td>

              <td className="px-6 py-5">

                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    user[3] === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user[3]}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  {/* Pagination */}

  <div className="mt-10 flex items-center justify-between rounded-3xl bg-white p-6 shadow">

    <p className="text-slate-500">
      Showing 1–10 of 248 Users
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