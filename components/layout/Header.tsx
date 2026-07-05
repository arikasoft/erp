"use client";

import {
  Bell,
  Search,
  Moon,
  Sun,
  LogOut,
  UserCircle2,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Left */}
      <div className="flex items-center gap-4">

        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-2 w-80">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="relative p-2 rounded-lg hover:bg-gray-100">

          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-2">

          <UserCircle2 size={34} />

          <div className="hidden md:block">
            <h3 className="font-semibold">
              Super Admin
            </h3>

            <p className="text-xs text-gray-500">
              admin@arikasoft.com
            </p>
          </div>

        </div>

        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </header>
  );
}