"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Database,
  ShieldCheck,
  BarChart3,
  LayoutDashboard,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Active Companies",
    value: "500+",
    icon: Users,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Daily Transactions",
    value: "2M+",
    icon: Database,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "System Uptime",
    value: "99.99%",
    icon: ShieldCheck,
    color: "from-purple-600 to-indigo-500",
  },
  {
    title: "Reports Generated",
    value: "50K+",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
  },
];

export default function ERPPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-cyan-300">
                🚀 Enterprise ERP Solution
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
                Smart ERP
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  For Modern Business
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
                Manage HR, CRM, Accounts, Inventory, Sales,
                Purchase, Projects, Payroll, Billing,
                Reports and everything from a single dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105"
                >
                  Request Demo
                </Link>

                <Link
                  href="/pricing"
                  className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-bold text-white hover:bg-white/10"
                >
                  View Pricing

                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">

                {[
                  "Cloud Based ERP",
                  "Role Based Access",
                  "Real-time Reports",
                  "Multi Company Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2
                      className="text-green-400"
                      size={20}
                    />

                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="rounded-[32px] bg-white p-8 shadow-2xl">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-black text-slate-900">
                    ERP Dashboard
                  </h2>

                  <LayoutDashboard
                    className="text-blue-600"
                    size={34}
                  />

                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {[
                    {
                      title: "Revenue",
                      value: "₹18.5L",
                      icon: IndianRupee,
                    },
                    {
                      title: "Employees",
                      value: "152",
                      icon: Users,
                    },
                    {
                      title: "Projects",
                      value: "48",
                      icon: BarChart3,
                    },
                    {
                      title: "Security",
                      value: "100%",
                      icon: ShieldCheck,
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (

                      <div
                        key={item.title}
                        className="rounded-2xl bg-slate-100 p-6"
                      >

                        <Icon
                          className="text-blue-600"
                          size={30}
                        />

                        <h3 className="mt-4 text-3xl font-black">

                          {item.value}

                        </h3>

                        <p className="mt-2 text-slate-500">

                          {item.title}

                        </p>

                      </div>

                    );

                  })}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >

                <div className={`bg-gradient-to-r ${item.color} p-8 text-white`}>

                  <Icon size={36} />

                  <h2 className="mt-6 text-4xl font-black">
                    {item.value}
                  </h2>

                  <p className="mt-2">
                    {item.title}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </section>

      {/* ERP Modules */}

<section className="mx-auto mt-16 max-w-7xl px-6 pb-16">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
      Enterprise Modules
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      Complete ERP Modules
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      Everything your business needs in one powerful ERP platform.
      Manage operations, finance, HR, customers, inventory and much more.
    </p>

  </div>

  <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        icon: "👥",
        title: "HRMS",
        desc: "Employees, Attendance, Leave & Payroll",
      },
      {
        icon: "💼",
        title: "CRM",
        desc: "Leads, Customers & Sales Pipeline",
      },
      {
        icon: "💰",
        title: "Accounts",
        desc: "Accounting, Ledger & GST",
      },
      {
        icon: "📦",
        title: "Inventory",
        desc: "Products, Stock & Warehouse",
      },
      {
        icon: "🛒",
        title: "Sales",
        desc: "Quotation, Invoice & Orders",
      },
      {
        icon: "📑",
        title: "Purchase",
        desc: "Vendor & Purchase Orders",
      },
      {
        icon: "💵",
        title: "Payroll",
        desc: "Salary & Employee Benefits",
      },
      {
        icon: "⏰",
        title: "Attendance",
        desc: "Daily Attendance Tracking",
      },
      {
        icon: "📋",
        title: "Projects",
        desc: "Tasks, Timeline & Progress",
      },
      {
        icon: "🎯",
        title: "Leads",
        desc: "Lead Management & Conversion",
      },
      {
        icon: "🎫",
        title: "Support",
        desc: "Help Desk & Ticket System",
      },
      {
        icon: "🧾",
        title: "Billing",
        desc: "Invoice & Payment Management",
      },
      {
        icon: "📊",
        title: "Reports",
        desc: "Charts, MIS & Analytics",
      },
      {
        icon: "🏦",
        title: "Banking",
        desc: "Transactions & Reconciliation",
      },
      {
        icon: "📂",
        title: "Documents",
        desc: "Digital File Management",
      },
      {
        icon: "❤️",
        title: "Donations",
        desc: "Donation & 80G Management",
      },
      {
        icon: "🙋",
        title: "Volunteers",
        desc: "Volunteer Registration & Tasks",
      },
      {
        icon: "📰",
        title: "Newsletter",
        desc: "Campaign & Email Marketing",
      },
      {
        icon: "✍️",
        title: "Blog CMS",
        desc: "Manage Website Articles",
      },
      {
        icon: "⚙️",
        title: "Settings",
        desc: "Roles, Permissions & Config",
      },
    ].map((module, index) => (

      <motion.div
        key={module.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.03 }}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-blue-500 hover:shadow-2xl"
      >

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-5xl">

          {module.icon}

        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900 group-hover:text-blue-700">

          {module.title}

        </h3>

        <p className="mt-4 leading-7 text-slate-600">

          {module.desc}

        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-cyan-600"
        >

          Learn More

          <ArrowRight size={18} />

        </Link>

      </motion.div>

    ))}

  </div>

</section>
{/* Why Choose ERP */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700">
        Why Choose Our ERP
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Enterprise ERP Built For Growth
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Our ERP is designed for startups, SMEs, NGOs, educational
        institutions and enterprises with modern architecture,
        cloud deployment and enterprise-grade security.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          icon: "⚡",
          title: "Fast Performance",
          desc: "Lightning-fast dashboard and optimized database queries.",
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          desc: "Role-based permissions, encryption and audit logs.",
        },
        {
          icon: "☁️",
          title: "Cloud Ready",
          desc: "Deploy on AWS, Azure, DigitalOcean or Hostinger.",
        },
        {
          icon: "📱",
          title: "Responsive",
          desc: "Works perfectly on desktop, tablet and mobile devices.",
        },
        {
          icon: "🤖",
          title: "AI Ready",
          desc: "Integrate AI assistants, analytics and automation.",
        },
        {
          icon: "🔄",
          title: "Workflow Automation",
          desc: "Reduce manual work with approval workflows.",
        },
        {
          icon: "📊",
          title: "Real-Time Reports",
          desc: "Interactive dashboards with live analytics.",
        },
        {
          icon: "🌍",
          title: "Multi Company",
          desc: "Manage multiple businesses from one ERP.",
        },
      ].map((feature, index) => (

        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-blue-500 hover:bg-white hover:shadow-xl"
        >

          <div className="text-5xl">

            {feature.icon}

          </div>

          <h3 className="mt-6 text-2xl font-black text-slate-900">

            {feature.title}

          </h3>

          <p className="mt-4 leading-8 text-slate-600">

            {feature.desc}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* Technology Stack */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">

        Built With Modern Technology

      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

        We use the latest technologies to build scalable,
        secure and future-ready ERP solutions.

      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3 xl:grid-cols-6">

      {[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Laravel",
        "Prisma",
        "Supabase",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "AWS",
      ].map((tech) => (

        <motion.div
          key={tech}
          whileHover={{
            scale: 1.05,
          }}
          className="rounded-2xl bg-white p-6 text-center font-bold shadow-lg"
        >

          {tech}

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ERP Workflow */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-20 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black">

        Simple ERP Workflow

      </h2>

      <p className="mt-5 text-cyan-100">

        From lead generation to reporting in one seamless workflow.

      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

      {[
        "Lead",
        "Quotation",
        "Invoice",
        "Payment",
        "Analytics",
      ].map((step, index) => (

        <motion.div
          key={step}
          whileHover={{
            y: -8,
          }}
          className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl font-black text-black">

            {index + 1}

          </div>

          <h3 className="mt-6 text-2xl font-black">

            {step}

          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}