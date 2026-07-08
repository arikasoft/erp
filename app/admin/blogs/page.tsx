"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Eye,
  Pencil,
  Trash2,
  Calendar,
  User,
  FileText,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Welcome to ArikaSoft ERP",
    author: "Admin",
    category: "Technology",
    status: "Published",
    date: "10 Jul 2026",
  },
  {
    id: 2,
    title: "How ERP Improves Business",
    author: "Guddu Kumar",
    category: "ERP",
    status: "Draft",
    date: "08 Jul 2026",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-black text-slate-900">
              Blog Management
            </h1>

            <p className="mt-1 text-slate-500">
              Create and manage blog posts.
            </p>

          </div>

          <Link
            href="/admin/blogs/new"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={18} />
            New Blog
          </Link>

        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow">

            <FileText className="text-blue-600" />

            <h2 className="mt-4 text-3xl font-black">
              {blogs.length}
            </h2>

            <p className="text-slate-500">
              Total Blogs
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <Eye className="text-green-600" />

            <h2 className="mt-4 text-3xl font-black">
              25K
            </h2>

            <p className="text-slate-500">
              Views
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <Calendar className="text-orange-600" />

            <h2 className="mt-4 text-3xl font-black">
              8
            </h2>

            <p className="text-slate-500">
              Drafts
            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow">

            <User className="text-purple-600" />

            <h2 className="mt-4 text-3xl font-black">
              3
            </h2>

            <p className="text-slate-500">
              Authors
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <div className="relative">

            <Search
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              placeholder="Search blog..."
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none focus:border-blue-600"
            />

          </div>

        </div>

        {/* Table */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 overflow-hidden rounded-2xl bg-white shadow"
        >

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Author
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {blogs.map((blog) => (

                <tr
                  key={blog.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4 font-semibold">
                    {blog.title}
                  </td>

                  <td className="p-4">
                    {blog.author}
                  </td>

                  <td className="p-4">
                    {blog.category}
                  </td>

                  <td className="p-4">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        blog.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.status}
                    </span>

                  </td>

                  <td className="p-4">
                    {blog.date}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/admin/blogs/${blog.id}`}
                        className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                      >
                        <Eye size={18} />
                      </Link>

                      <Link
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="rounded-lg bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </motion.div>

      </div>

    </div>
  );
}