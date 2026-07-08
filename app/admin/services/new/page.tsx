"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Upload,
  Briefcase,
  IndianRupee,
  Clock,
  FileText,
  Globe,
} from "lucide-react";

export default function NewServicePage() {
  const [status, setStatus] = useState("Active");

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-black text-white">
              Create New Service
            </h1>

            <p className="mt-2 text-cyan-100">
              Add a new service to your website.
            </p>

          </div>

          <Link
            href="/admin/services"
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

            {/* Service Name */}

            <div>

              <label className="mb-2 block font-semibold">
                Service Name
              </label>

              <input
                type="text"
                placeholder="ERP Software Development"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />

            </div>

            {/* Category */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Briefcase size={18} />

                  Category

                </label>

                <select className="w-full rounded-xl border border-slate-300 px-4 py-3">

                  <option>Software Development</option>

                  <option>Website Design</option>

                  <option>Mobile App</option>

                  <option>Digital Marketing</option>

                  <option>NGO ERP</option>

                  <option>School ERP</option>

                </select>

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <IndianRupee size={18} />

                  Starting Price

                </label>

                <input
                  type="number"
                  placeholder="25000"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Duration */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Clock size={18} />

                  Delivery Time

                </label>

                <input
                  type="text"
                  placeholder="15 Days"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Service Code
                </label>

                <input
                  type="text"
                  placeholder="ERP-001"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

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
                placeholder="https://arikasoft.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
              />

            </div>

            {/* Thumbnail */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <Upload size={18} />

                Service Image

              </label>

              <input
                type="file"
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
                placeholder="Short description..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            {/* Description */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <FileText size={18} />

                Full Description

              </label>

              <textarea
                rows={8}
                placeholder="Complete service details..."
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            {/* Features */}

            <div>

              <label className="mb-2 block font-semibold">
                Service Features
              </label>

              <textarea
                rows={5}
                placeholder="• Feature 1
• Feature 2
• Feature 3"
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
                <option>Active</option>
                <option>Inactive</option>
                <option>Draft</option>
              </select>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 pt-6">

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
              >
                <Save size={18} />
                Save Service
              </button>

              <Link
                href="/admin/services"
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