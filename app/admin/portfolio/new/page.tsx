"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Upload,
  Image as ImageIcon,
  Globe,
  Tag,
  FileText,
} from "lucide-react";

export default function NewPortfolioPage() {
  const [status, setStatus] = useState("Published");

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">

          <div>

            <h1 className="text-4xl font-black text-white">
              Create Portfolio
            </h1>

            <p className="mt-2 text-cyan-100">
              Add a new portfolio project.
            </p>

          </div>

          <Link
            href="/admin/portfolio"
            className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <form className="space-y-6">

            {/* Project Title */}

            <div>

              <label className="mb-2 block font-semibold">
                Project Title
              </label>

              <input
                type="text"
                placeholder="Enter Project Title"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            {/* Client + Category */}

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold">
                  Client Name
                </label>

                <input
                  type="text"
                  placeholder="Client Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Tag size={18} />

                  Category

                </label>

                <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

                  <option>NGO</option>
                  <option>Education</option>
                  <option>Healthcare</option>
                  <option>CSR</option>
                  <option>IT Project</option>

                </select>

              </div>

            </div>

            {/* Website */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <Globe size={18} />

                Website URL

              </label>

              <input
                type="url"
                placeholder="https://example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            {/* Completion Date */}

            <div>

              <label className="mb-2 block font-semibold">
                Completion Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            {/* Featured Image */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <ImageIcon size={18} />

                Featured Image

              </label>

              <input
                type="file"
                className="w-full rounded-xl border border-slate-300 p-3"
              />

            </div>

            {/* Gallery */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <Upload size={18} />

                Project Gallery

              </label>

              <input
                type="file"
                multiple
                className="w-full rounded-xl border border-slate-300 p-3"
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

            {/* Full Description */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FileText size={18} />

                Project Description

              </label>

              <textarea
                rows={8}
                placeholder="Write complete project details..."
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

            <div className="flex gap-4 pt-4">

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
              >
                <Save size={18} />
                Save Portfolio
              </button>

              <Link
                href="/admin/portfolio"
                className="rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:bg-slate-100"
              >
                Cancel
              </Link>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}