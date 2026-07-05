"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const menus = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Products", href: "/products", dropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-24 z-30 bg-slate-900 text-white shadow-lg">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            {menus.map((menu) => (
              <div
                key={menu.name}
                className="relative group"
              >
                <Link
                  href={menu.href}
                  className={`flex items-center gap-1 py-5 transition
                    ${
                      pathname === menu.href
                        ? "text-cyan-400"
                        : "hover:text-cyan-400"
                    }`}
                >
                  {menu.name}

                  {menu.dropdown && (
                    <ChevronDown
                      size={16}
                      className="transition group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown */}

                {menu.dropdown && (
                  <div className="invisible absolute left-0 top-full w-64 rounded-2xl bg-white p-4 text-slate-800 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

                    <Link
                      href="#"
                      className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                    >
                      ERP Software
                    </Link>

                    <Link
                      href="#"
                      className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                    >
                      CRM Software
                    </Link>

                    <Link
                      href="#"
                      className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                    >
                      HRMS
                    </Link>

                    <Link
                      href="#"
                      className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                    >
                      Inventory
                    </Link>

                    <Link
                      href="#"
                      className="block rounded-lg px-3 py-2 hover:bg-slate-100"
                    >
                      Billing
                    </Link>

                  </div>
                )}

              </div>
            ))}

          </div>

          {/* CTA */}

          <Link
            href="/demo"
            className="hidden rounded-full bg-cyan-500 px-6 py-2 font-semibold text-slate-900 transition hover:bg-cyan-400 lg:block"
          >
            Book Demo
          </Link>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <Menu />
          </button>

        </div>

      </nav>

      {/* Mobile Drawer */}

      <div
        className={`fixed inset-0 z-50 bg-black/50 transition ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-5">

            <h2 className="text-xl font-bold">
              ArikaSoft
            </h2>

            <button onClick={() => setOpen(false)}>
              <X />
            </button>

          </div>

          <div className="p-5">

            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 hover:bg-slate-100"
              >
                {menu.name}
              </Link>
            ))}

            <Link
              href="/demo"
              className="mt-5 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Book Demo
            </Link>

          </div>

        </div>
      </div>
    </>
  );
}