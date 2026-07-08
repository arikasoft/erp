"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  User,
  Mail,
  Phone,
  Lock,
  Shield,
  MapPin,
  Calendar,
  Upload,
} from "lucide-react";

export default function NewUserPage() {
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Active");

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-black text-white">
              Create New User
            </h1>

            <p className="mt-2 text-cyan-100">
              Add a new ERP user account.
            </p>

          </div>

          <Link
            href="/admin/users"
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

            {/* Profile Image */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <Upload size={18} />

                Profile Photo

              </label>

              <input
                type="file"
                className="w-full rounded-xl border border-slate-300 p-3"
              />

            </div>

            {/* Name */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <User size={18} />

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Mail size={18} />

                  Email Address

                </label>

                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Mobile */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Phone size={18} />

                  Mobile Number

                </label>

                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Calendar size={18} />

                  Joining Date

                </label>

                <input
                  type="date"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Address */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-semibold">

                <MapPin size={18} />

                Address

              </label>

              <textarea
                rows={3}
                placeholder="Enter complete address"
                className="w-full rounded-xl border border-slate-300 p-4"
              />

            </div>

            {/* Password */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Lock size={18} />

                  Password

                </label>

                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Lock size={18} />

                  Confirm Password

                </label>

                <input
                  type="password"
                  placeholder="********"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                />

              </div>

            </div>

            {/* Role & Status */}

            <div className="grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 flex items-center gap-2 font-semibold">

                  <Shield size={18} />

                  User Role

                </label>

                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  <option>Super Admin</option>
                  <option>Admin</option>
                  <option>Manager</option>
                  <option>Editor</option>
                  <option>User</option>
                </select>

              </div>

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
                  <option>Suspended</option>
                </select>

              </div>

            </div>

            {/* Permissions */}

            <div>

              <label className="mb-4 block text-lg font-bold">
                Permissions
              </label>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {[
                  "Dashboard",
                  "Users",
                  "Donations",
                  "Services",
                  "Portfolio",
                  "Blogs",
                  "Newsletter",
                  "Reports",
                  "Settings",
                ].map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                  >

                    <input
                      type="checkbox"
                      className="h-5 w-5"
                    />

                    <span>{item}</span>

                  </label>

                ))}

              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 pt-6">

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white hover:bg-blue-700"
              >
                <Save size={18} />
                Save User
              </button>

              <Link
                href="/admin/users"
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