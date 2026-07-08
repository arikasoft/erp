"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

export default function NewBlogPage() {
  const [status, setStatus] = useState("Published");

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="border-b bg-white shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-black text-slate-900">
              Create New Blog
            </h1>

            <p className="mt-1 text-slate-500">
              Add a new blog article.
            </p>

          </div>

          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

      </div>

      <div className="mx-auto max-w-5xl px-6 py-8">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <form className="space-y-6">

            {/* Title */}

            <div>

              <label className="mb-2 block font-semibold">
                Blog Title
              </label>

              <input
                type="text"
                placeholder="Enter Blog Title"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            {/* Slug */}

            <div>

              <label className="mb-2 block font-semibold">
                Slug
              </label>

              <input
                type="text"
                placeholder="blog-title"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            {/* Category + Author */}

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold">
                  Category
                </label>

                <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

                  <option>Technology</option>

                  <option>Education</option>

                  <option>Healthcare</option>

                  <option>CSR</option>

                  <option>NGO</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Author
                </label>

                <input
                  type="text"
                  placeholder="Admin"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Image */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <ImageIcon size={18} />

                Featured Image URL

              </label>

              <input
                type="text"
                placeholder="https://..."
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            {/* Short Description */}

            <div>

              <label className="mb-2 block font-semibold">
                Short Description
              </label>

              <textarea
                rows={3}
                placeholder="Write short description..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            {/* Content */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FileText size={18} />

                Blog Content

              </label>

              <textarea
                rows={12}
                placeholder="Write full blog content..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            {/* Status */}

            <div>

              <label className="mb-2 block font-semibold">
                Status
              </label>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              >

                <option>Published</option>

                <option>Draft</option>

              </select>

            </div>

            {/* Buttons */}

            <div className="flex gap-4">

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                <Save size={18} />
                Save Blog
              </button>

              <Link
                href="/admin/blogs"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100"
              >
                Cancel
              </Link>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}