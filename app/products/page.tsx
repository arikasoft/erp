"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  MonitorSmartphone,
  Cloud,
  Smartphone,
  ArrowRight,
  Users,
  Star,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    title: "Products",
    value: "25+",
    icon: Package,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Customers",
    value: "500+",
    icon: Users,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Rating",
    value: "4.9★",
    icon: Star,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Secure",
    value: "100%",
    icon: ShieldCheck,
    color: "from-purple-600 to-pink-500",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
            >

              <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
                🚀 Enterprise Software Products
              </span>

              <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

                Powerful Digital

                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                  Products

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-cyan-100">

                Discover our complete range of ERP,
                CRM, Billing Software,
                Mobile Apps,
                NGO Management Systems,
                School ERP,
                AI Solutions and Cloud Platforms.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
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

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="grid gap-5 md:grid-cols-2">

                {[
                  {
                    icon: MonitorSmartphone,
                    title: "ERP Software",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud SaaS",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Apps",
                  },
                  {
                    icon: Package,
                    title: "Custom Solutions",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="rounded-3xl bg-white/10 p-8 backdrop-blur"
                    >

                      <Icon
                        className="text-cyan-300"
                        size={42}
                      />

                      <h3 className="mt-5 text-2xl font-black text-white">

                        {item.title}

                      </h3>

                    </div>

                  );

                })}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .08 }}
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

      {/* Products */}

<section className="mx-auto mt-16 max-w-7xl px-6 pb-20">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
      Our Products
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      Software Built For Every Business
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      Powerful software products designed to automate
      business operations and accelerate digital growth.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        icon: "💼",
        title: "ERP Software",
        price: "Starting ₹999 / Month",
        desc: "Complete ERP including HR, Accounts, CRM, Inventory and Payroll.",
      },
      {
        icon: "❤️",
        title: "NGO Management ERP",
        price: "Starting ₹799 / Month",
        desc: "Donation, Volunteers, MIS, Projects, Receipts and 80G Management.",
      },
      {
        icon: "🎓",
        title: "School ERP",
        price: "Starting ₹1499 / Month",
        desc: "Student, Fee, Attendance, Result, Library and Transport Management.",
      },
      {
        icon: "🧾",
        title: "GST Billing",
        price: "Starting ₹499 / Month",
        desc: "Invoice, GST, Ledger, Reports and Inventory Management.",
      },
      {
        icon: "📱",
        title: "Android App",
        price: "Custom Pricing",
        desc: "Native and Flutter mobile applications for Android & iOS.",
      },
      {
        icon: "☁️",
        title: "Cloud SaaS",
        price: "Pay As You Go",
        desc: "Scalable cloud platform with secure hosting and backups.",
      },
      {
        icon: "🤖",
        title: "AI Solutions",
        price: "Custom Pricing",
        desc: "AI Chatbots, Automation, OCR and Intelligent Business Tools.",
      },
      {
        icon: "🌐",
        title: "Business Website",
        price: "Starting ₹9,999",
        desc: "Corporate websites, NGO portals, eCommerce and Landing Pages.",
      },
      {
        icon: "🛒",
        title: "Custom Software",
        price: "Quotation Based",
        desc: "Tailor-made enterprise software for any industry.",
      },
    ].map((product, index) => (

      <motion.div
        key={product.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl transition-all hover:border-blue-600"
      >

        <div className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-8 text-white">

          <div className="text-6xl">

            {product.icon}

          </div>

          <h3 className="mt-6 text-3xl font-black">

            {product.title}

          </h3>

          <p className="mt-5 text-cyan-100">

            {product.price}

          </p>

        </div>

        <div className="p-8">

          <p className="leading-8 text-slate-600">

            {product.desc}

          </p>

          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-3">

              <span className="text-green-600">✔</span>

              Cloud Ready

            </div>

            <div className="flex items-center gap-3">

              <span className="text-green-600">✔</span>

              Mobile Responsive

            </div>

            <div className="flex items-center gap-3">

              <span className="text-green-600">✔</span>

              Secure Authentication

            </div>

            <div className="flex items-center gap-3">

              <span className="text-green-600">✔</span>

              Technical Support

            </div>

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              href="/contact"
              className="flex-1 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 py-3 text-center font-bold text-white hover:opacity-90"
            >
              Request Demo
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-blue-600 px-5 py-3 font-bold text-blue-700 hover:bg-blue-50"
            >
              Pricing
            </Link>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* Why Choose Our Products */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700">
        Why Choose ArikaSoft
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Built For Performance & Growth
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Every product is designed using modern technologies,
        enterprise security and scalable cloud architecture.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          icon: "⚡",
          title: "Fast Performance",
          desc: "Optimized architecture with lightning-fast response time.",
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          desc: "SSL encryption, RBAC and secure cloud infrastructure.",
        },
        {
          icon: "☁️",
          title: "Cloud Ready",
          desc: "Deploy on AWS, Azure, DigitalOcean or Hostinger.",
        },
        {
          icon: "📱",
          title: "Mobile Friendly",
          desc: "Responsive UI for desktop, tablet and smartphones.",
        },
        {
          icon: "🤖",
          title: "AI Powered",
          desc: "AI automation, analytics and smart recommendations.",
        },
        {
          icon: "🔄",
          title: "Easy Integration",
          desc: "Integrates with payment gateways and third-party APIs.",
        },
        {
          icon: "📊",
          title: "Live Reports",
          desc: "Real-time dashboards and business analytics.",
        },
        {
          icon: "🎧",
          title: "24×7 Support",
          desc: "Professional support and regular software updates.",
        },
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition-all hover:border-blue-500 hover:bg-white"
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

{/* Technology Stack */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Technology Stack
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Modern frameworks and cloud technologies used
        in every ArikaSoft product.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3 xl:grid-cols-6">

      {[
        "Next.js",
        "React",
        "TypeScript",
        "Laravel",
        "Node.js",
        "Prisma",
        "Supabase",
        "MySQL",
        "PostgreSQL",
        "Flutter",
        "Docker",
        "AWS",
      ].map((tech) => (

        <motion.div
          key={tech}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-white p-6 text-center font-bold shadow-lg"
        >
          {tech}
        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* Product Comparison */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Product Comparison
      </h2>

    </div>

    <div className="mt-14 overflow-x-auto rounded-3xl shadow-xl">

      <table className="min-w-full bg-white">

        <thead className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 text-white">

          <tr>

            <th className="px-6 py-5 text-left">Feature</th>
            <th className="px-6 py-5 text-center">ERP</th>
            <th className="px-6 py-5 text-center">CRM</th>
            <th className="px-6 py-5 text-center">School ERP</th>

          </tr>

        </thead>

        <tbody>

          {[
            ["Dashboard", "✓", "✓", "✓"],
            ["Inventory", "✓", "—", "—"],
            ["HRMS", "✓", "—", "✓"],
            ["Billing", "✓", "✓", "✓"],
            ["Student Management", "—", "—", "✓"],
            ["Cloud Access", "✓", "✓", "✓"],
            ["Reports", "✓", "✓", "✓"],
            ["Mobile App", "✓", "✓", "✓"],
          ].map((row) => (

            <tr
              key={row[0]}
              className="border-b hover:bg-slate-50"
            >

              <td className="px-6 py-5 font-semibold">
                {row[0]}
              </td>

              <td className="px-6 py-5 text-center">{row[1]}</td>
              <td className="px-6 py-5 text-center">{row[2]}</td>
              <td className="px-6 py-5 text-center">{row[3]}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</section>

{/* Success Metrics */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-20 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        ["500+", "Clients"],
        ["25+", "Products"],
        ["99.9%", "Cloud Uptime"],
        ["24×7", "Technical Support"],
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
{/* Testimonials */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
        Testimonials
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Trusted By Businesses
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        Thousands of organizations rely on ArikaSoft products to
        manage their daily operations efficiently.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          name: "Rahul Kumar",
          company: "ABC Industries",
          review:
            "Excellent ERP solution with outstanding customer support. Highly recommended.",
        },
        {
          name: "Puja Paswan",
          company: "Anand Jivan Foundation Trust",
          review:
            "Our NGO operations became much easier after using the ERP platform.",
        },
        {
          name: "Amit Singh",
          company: "XYZ School",
          review:
            "School ERP has simplified attendance, fees and examination management.",
        },
      ].map((item) => (

        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-slate-50 p-8 shadow-lg"
        >

          <div className="mb-6 text-4xl">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="leading-8 text-slate-600">
            "{item.review}"
          </p>

          <div className="mt-8">

            <h3 className="text-xl font-black">
              {item.name}
            </h3>

            <p className="text-slate-500">
              {item.company}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* FAQ */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="mt-14 space-y-6">

      {[
        [
          "Can I request a free demo?",
          "Yes. Contact our sales team to schedule a live product demonstration.",
        ],
        [
          "Do you provide installation?",
          "Yes. We provide cloud deployment and on-premise installation.",
        ],
        [
          "Can modules be customized?",
          "Yes. Every ERP module can be customized according to your business requirements.",
        ],
        [
          "Is technical support included?",
          "Yes. All active plans include technical support and regular software updates.",
        ],
      ].map(([question, answer]) => (

        <div
          key={question}
          className="rounded-2xl bg-white p-6 shadow-lg"
        >

          <h3 className="text-xl font-bold text-slate-900">
            {question}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {answer}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* CTA */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-24">

  <div className="mx-auto max-w-6xl px-6 text-center text-white">

    <h2 className="text-5xl font-black">
      Ready To Transform Your Business?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
      Get started with ArikaSoft ERP, CRM, Billing,
      School ERP, NGO ERP and custom software solutions today.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="rounded-xl bg-yellow-400 px-10 py-4 text-lg font-bold text-black hover:bg-yellow-300"
      >
        Request Demo
      </Link>

      <Link
        href="/pricing"
        className="rounded-xl border border-white px-10 py-4 text-lg font-bold text-white hover:bg-white/10"
      >
        View Pricing
      </Link>

    </div>

  </div>

</section>

{/* Contact Sales */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="rounded-[36px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center text-white shadow-2xl">

      <h2 className="text-5xl font-black">
        Talk To Our Sales Team
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
        Need help selecting the right product?
        Our experts are ready to guide you.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <h3 className="text-xl font-bold">
            📞 Phone
          </h3>

          <p className="mt-3">
            +91 9155751363
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <h3 className="text-xl font-bold">
            📧 Email
          </h3>

          <p className="mt-3">
            info@arikasoft.com
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <h3 className="text-xl font-bold">
            🌐 Website
          </h3>

          <p className="mt-3">
            www.arikasoft.com
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Footer */}

<footer className="bg-slate-950 py-10 text-center text-slate-400">

  <p>
    © {new Date().getFullYear()} <strong>ArikaSoft Technologies</strong>. All Rights Reserved.
  </p>

  <p className="mt-2">
    ERP • CRM • Billing • Mobile Apps • Cloud Solutions • AI Products
  </p>

</footer>

    </main>
  );
}