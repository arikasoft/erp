"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Building2,
  UserCog,
  Receipt,
  Package,
  Settings,
  FolderKanban,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Clients", href: "/clients", icon: Building2 },
  { name: "Employees", href: "/employees", icon: UserCog },
  { name: "Users", href: "/users", icon: Users },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Accounts", href: "/accounts", icon: Receipt },
  { name: "Inventory", href: "/inventory", icon: Package },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="h-16 flex items-center justify-center border-b border-slate-700">
        <h1 className="text-xl font-bold">
          ArikaSoft ERP
        </h1>
      </div>

      <nav className="p-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}