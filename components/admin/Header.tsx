"use client";

import {
  Bell,
  Search,
  Settings,
  Menu,
} from "lucide-react";

import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-slate-200 bg-white">

      <div className="flex h-full items-center justify-between px-8">

        {/* Left */}

        <div className="flex items-center gap-5">

          <button className="rounded-xl border border-slate-200 p-3 lg:hidden">

            <Menu size={22} />

          </button>

          <div className="relative hidden md:block">

            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-96 rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="relative rounded-xl border border-slate-200 p-3 hover:bg-slate-100">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          <button className="rounded-xl border border-slate-200 p-3 hover:bg-slate-100">

            <Settings size={20} />

          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">

            <Image
              src="/avatar.png"
              alt="Admin"
              width={42}
              height={42}
              className="rounded-full"
            />

            <div className="hidden md:block">

              <h4 className="font-semibold text-slate-900">
                Guddu Kumar
              </h4>

              <p className="text-sm text-slate-500">
                Super Admin
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}