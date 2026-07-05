"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  LayoutDashboard,
  Briefcase,
  Boxes,
  FolderKanban,
  Newspaper,
  Users,
  MessageSquare,
  Mail,
  Image,
  Search,
  Settings,
  Shield,
  UserCog,
  LogOut,
  ChevronRight,
  Building2,
  GraduationCap,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },

  {
    title: "Services",
    href: "/admin/services",
    icon: Briefcase,
  },

  {
    title: "Products",
    href: "/admin/products",
    icon: Boxes,
  },

  {
    title: "Portfolio",
    href: "/admin/portfolio",
    icon: FolderKanban,
  },

  {
    title: "Blogs",
    href: "/admin/blogs",
    icon: Newspaper,
  },

  {
    title: "Team",
    href: "/admin/team",
    icon: Users,
  },

  {
    title: "Clients",
    href: "/admin/clients",
    icon: Building2,
  },

  {
    title: "Testimonials",
    href: "/admin/testimonials",
    icon: MessageSquare,
  },

  {
    title: "Career",
    href: "/admin/careers",
    icon: GraduationCap,
  },

  {
    title: "Contact Leads",
    href: "/admin/leads",
    icon: Mail,
  },

  {
    title: "Media",
    href: "/admin/media",
    icon: Image,
  },

  {
    title: "SEO",
    href: "/admin/seo",
    icon: Search,
  },

  {
    title: "Users",
    href: "/admin/users",
    icon: UserCog,
  },

  {
    title: "Roles",
    href: "/admin/roles",
    icon: Shield,
  },

  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto bg-slate-950 text-white">

      {/* Logo */}

      <div className="border-b border-slate-800 p-8">

        <h2 className="text-3xl font-black text-cyan-400">
          ArikaSoft
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Enterprise CMS
        </p>

      </div>

      {/* Menu */}

      <div className="p-5 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          return (

            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center justify-between rounded-xl px-4 py-3 transition",

                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "hover:bg-slate-800 text-slate-300"
              )}
            >

              <div className="flex items-center gap-3">

                <Icon size={20} />

                {item.title}

              </div>

              <ChevronRight size={16} />

            </Link>

          );

        })}

      </div>

      {/* Bottom */}

      <div className="absolute bottom-0 w-full border-t border-slate-800 p-5">

        <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700">

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}