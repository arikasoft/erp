"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IndianRupee,
  ShieldCheck,
  Users,
  Server,
  ArrowRight,
} from "lucide-react";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const stats = [
    {
      title: "Happy Clients",
      value: "500+",
      icon: Users,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "ERP Installations",
      value: "1200+",
      icon: Server,
      color: "from-green-600 to-emerald-500",
    },
    {
      title: "Success Rate",
      value: "99.9%",
      icon: ShieldCheck,
      color: "from-purple-600 to-indigo-500",
    },
    {
      title: "Starting Price",
      value: "₹999",
      icon: IndianRupee,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >

            <span className="inline-flex rounded-full bg-white/10 px-6 py-2 text-cyan-300">

              💎 Affordable Pricing Plans

            </span>

            <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

              Choose Your

              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                Perfect ERP Plan

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">

              Flexible pricing for Startups,
              SMEs, NGOs,
              Educational Institutions,
              Enterprises and Government Organizations.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
              >
                Request Quote
              </Link>

              <Link
                href="/erp"
                className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-bold text-white hover:bg-white/10"
              >
                View ERP

                <ArrowRight size={18} />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Billing Toggle */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h2 className="text-3xl font-black text-slate-900">

                Flexible Billing

              </h2>

              <p className="mt-2 text-slate-500">

                Save up to 20% with yearly billing.

              </p>

            </div>

            <div className="flex rounded-full bg-slate-100 p-2">

              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-8 py-3 font-bold transition ${
                  billing === "monthly"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBilling("yearly")}
                className={`rounded-full px-8 py-3 font-bold transition ${
                  billing === "yearly"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600"
                }`}
              >
                Yearly
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="mx-auto mt-10 max-w-7xl px-6">

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

                  <Icon size={38} />

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

      {/* Pricing Plans */}

<section className="mx-auto mt-16 max-w-7xl px-6 pb-20">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
      Pricing Plans
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      Simple & Transparent Pricing
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      Choose the plan that best fits your business.
      Upgrade anytime without losing your data.
    </p>

  </div>

  <div className="mt-16 grid gap-8 lg:grid-cols-3">

    {[
      {
        title: "Starter",
        badge: "",
        color: "from-slate-700 to-slate-900",
        monthly: "999",
        yearly: "9999",
        users: "5 Users",
        storage: "10 GB",
        support: "Email Support",
        features: [
          "Dashboard",
          "CRM",
          "Invoices",
          "Basic Reports",
          "Role Management",
          "Cloud Backup",
        ],
      },
      {
        title: "Professional",
        badge: "Most Popular",
        color: "from-blue-700 to-cyan-500",
        monthly: "2999",
        yearly: "29999",
        users: "25 Users",
        storage: "100 GB",
        support: "Priority Support",
        features: [
          "Everything in Starter",
          "HRMS",
          "Inventory",
          "Purchase",
          "Sales",
          "Payroll",
          "Attendance",
          "Analytics",
        ],
      },
      {
        title: "Enterprise",
        badge: "Unlimited",
        color: "from-purple-700 to-pink-500",
        monthly: "Custom",
        yearly: "Custom",
        users: "Unlimited",
        storage: "Unlimited",
        support: "24×7 Dedicated Support",
        features: [
          "Everything in Professional",
          "Multi Company",
          "API Access",
          "Custom Modules",
          "AI Automation",
          "Workflow Engine",
          "White Label",
          "Dedicated Server",
        ],
      },
    ].map((plan) => (

      <motion.div
        key={plan.title}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className={`relative overflow-hidden rounded-[32px] border bg-white shadow-xl ${
          plan.badge
            ? "border-blue-600"
            : "border-slate-200"
        }`}
      >

        {plan.badge && (

          <div className="absolute right-0 top-0 rounded-bl-2xl bg-blue-600 px-5 py-2 text-sm font-bold text-white">

            {plan.badge}

          </div>

        )}

        <div className={`bg-gradient-to-r ${plan.color} p-8 text-white`}>

          <h3 className="text-3xl font-black">

            {plan.title}

          </h3>

          <div className="mt-8">

            <span className="text-lg">₹</span>

            <span className="text-6xl font-black">

              {billing === "monthly"
                ? plan.monthly
                : plan.yearly}

            </span>

            {plan.monthly !== "Custom" && (

              <span className="ml-2 text-lg">

                / {billing}

              </span>

            )}

          </div>

        </div>

        <div className="space-y-5 p-8">

          <div className="rounded-2xl bg-slate-100 p-4">

            👥 {plan.users}

          </div>

          <div className="rounded-2xl bg-slate-100 p-4">

            💾 {plan.storage}

          </div>

          <div className="rounded-2xl bg-slate-100 p-4">

            🎧 {plan.support}

          </div>

          <div className="space-y-4 pt-2">

            {plan.features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-3"
              >

                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">

                  ✓

                </div>

                <span className="text-slate-700">

                  {feature}

                </span>

              </div>

            ))}

          </div>

          <Link
            href="/contact"
            className={`mt-8 block rounded-xl bg-gradient-to-r ${plan.color} py-4 text-center text-lg font-bold text-white transition hover:opacity-90`}
          >

            Get Started

          </Link>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* Feature Comparison */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
        Compare Plans
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Feature Comparison
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Compare all plans and choose the perfect ERP solution
        for your organization.
      </p>

    </div>

    <div className="mt-16 overflow-x-auto rounded-3xl bg-white shadow-xl">

      <table className="min-w-full">

        <thead className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 text-white">

          <tr>

            <th className="px-6 py-5 text-left">Features</th>
            <th className="px-6 py-5 text-center">Starter</th>
            <th className="px-6 py-5 text-center">Professional</th>
            <th className="px-6 py-5 text-center">Enterprise</th>

          </tr>

        </thead>

        <tbody>

          {[
            ["CRM", "✓", "✓", "✓"],
            ["HRMS", "—", "✓", "✓"],
            ["Inventory", "—", "✓", "✓"],
            ["Payroll", "—", "✓", "✓"],
            ["Attendance", "—", "✓", "✓"],
            ["Accounting", "✓", "✓", "✓"],
            ["GST Billing", "✓", "✓", "✓"],
            ["Reports", "Basic", "Advanced", "Unlimited"],
            ["API Access", "—", "Limited", "Unlimited"],
            ["Multi Company", "—", "—", "✓"],
            ["AI Automation", "—", "—", "✓"],
            ["Dedicated Support", "Email", "Priority", "24×7"],
          ].map((row) => (

            <tr
              key={row[0]}
              className="border-b hover:bg-slate-50"
            >

              <td className="px-6 py-5 font-semibold">
                {row[0]}
              </td>

              <td className="px-6 py-5 text-center">
                {row[1]}
              </td>

              <td className="px-6 py-5 text-center">
                {row[2]}
              </td>

              <td className="px-6 py-5 text-center font-bold text-blue-700">
                {row[3]}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</section>

{/* Benefits */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">

        Why Businesses Choose Our ERP

      </h2>

    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          icon: "☁️",
          title: "Cloud Based",
          desc: "Access your ERP from anywhere."
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          desc: "Bank-grade security & backups."
        },
        {
          icon: "⚡",
          title: "Fast Performance",
          desc: "Optimized for speed and scalability."
        },
        {
          icon: "📱",
          title: "Mobile Friendly",
          desc: "Responsive on every device."
        },
        {
          icon: "🤖",
          title: "AI Ready",
          desc: "AI-powered automation & insights."
        },
        {
          icon: "📊",
          title: "Real-time Reports",
          desc: "Interactive dashboards & analytics."
        },
        {
          icon: "🌍",
          title: "Multi Branch",
          desc: "Manage multiple offices easily."
        },
        {
          icon: "🎧",
          title: "24×7 Support",
          desc: "Dedicated technical assistance."
        },
      ].map((item) => (

        <motion.div
          key={item.title}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white p-8 shadow-xl"
        >

          <div className="text-5xl">

            {item.icon}

          </div>

          <h3 className="mt-6 text-2xl font-black">

            {item.title}

          </h3>

          <p className="mt-4 leading-8 text-slate-600">

            {item.desc}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ROI Stats */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-20 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        ["98%", "Customer Satisfaction"],
        ["40%", "Productivity Increase"],
        ["60%", "Manual Work Reduced"],
        ["99.99%", "Cloud Uptime"],
      ].map(([value, title]) => (

        <div
          key={title}
          className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur"
        >

          <h2 className="text-5xl font-black">

            {value}

          </h2>

          <p className="mt-4 text-cyan-100">

            {title}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}