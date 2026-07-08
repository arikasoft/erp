"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import TopBar from "@/components/layout/TopBar";
import MainHeader from "@/components/layout/MainHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  ArrowRight,
  Users,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    title: "Projects Delivered",
    value: "500+",
    icon: Briefcase,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Happy Clients",
    value: "350+",
    icon: Users,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Success Rate",
    value: "99%",
    icon: ShieldCheck,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Countries Served",
    value: "15+",
    icon: Globe,
    color: "from-orange-500 to-red-500",
  },
];

export default function ServicesPage() {
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

                🚀 Professional IT Services

              </span>

              <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

                Digital Services

                <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                  That Grow Business

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-cyan-100">

                From ERP Software and Mobile Apps
                to AI Automation and Cloud Solutions,
                we deliver modern digital products
                for startups, NGOs and enterprises.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
                >
                  Get Free Consultation
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
                    icon: Code2,
                    title: "Custom Software",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Apps",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud Solutions",
                  },
                  {
                    icon: Globe,
                    title: "Website Development",
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

      {/* Statistics */}

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

      {/* Services */}

<section className="mx-auto mt-16 max-w-7xl px-6 pb-20">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
      Our Services
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      Complete IT & Business Solutions
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      From startups to large enterprises, we deliver secure,
      scalable and modern digital solutions tailored to your
      business goals.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        icon: "💼",
        title: "ERP Development",
        desc: "Complete ERP solutions for finance, HR, inventory, CRM and operations.",
      },
      {
        icon: "🌐",
        title: "Website Development",
        desc: "Corporate websites, NGO portals, business sites and landing pages.",
      },
      {
        icon: "📱",
        title: "Mobile App Development",
        desc: "Android, iOS and Flutter applications with modern UI.",
      },
      {
        icon: "🛒",
        title: "eCommerce Solutions",
        desc: "Online stores with payment gateway and inventory integration.",
      },
      {
        icon: "☁️",
        title: "Cloud Solutions",
        desc: "Cloud deployment, hosting, backup and infrastructure management.",
      },
      {
        icon: "🤖",
        title: "AI Automation",
        desc: "Chatbots, OCR, workflow automation and AI-powered applications.",
      },
      {
        icon: "🎨",
        title: "UI / UX Design",
        desc: "Modern interfaces focused on usability and customer experience.",
      },
      {
        icon: "📈",
        title: "SEO & Digital Marketing",
        desc: "SEO optimization, Google Ads and digital growth strategies.",
      },
      {
        icon: "🔒",
        title: "Cyber Security",
        desc: "Security audits, SSL, firewall setup and vulnerability protection.",
      },
      {
        icon: "🗄",
        title: "Database Solutions",
        desc: "MySQL, PostgreSQL, MongoDB and enterprise database optimization.",
      },
      {
        icon: "🔄",
        title: "API Integration",
        desc: "Payment gateways, SMS, WhatsApp, Email and third-party APIs.",
      },
      {
        icon: "🏢",
        title: "CRM Development",
        desc: "Lead management, customer lifecycle and sales automation.",
      },
      {
        icon: "❤️",
        title: "NGO ERP",
        desc: "Donation management, volunteers, accounting and MIS solutions.",
      },
      {
        icon: "🎓",
        title: "School ERP",
        desc: "Student management, fees, attendance and examination system.",
      },
      {
        icon: "💰",
        title: "Billing Software",
        desc: "GST billing, invoicing, accounting and inventory software.",
      },
      {
        icon: "📊",
        title: "Business Intelligence",
        desc: "Interactive dashboards, KPIs and real-time reporting.",
      },
      {
        icon: "🚀",
        title: "DevOps Services",
        desc: "CI/CD pipelines, Docker, server deployment and monitoring.",
      },
      {
        icon: "🛠",
        title: "Maintenance & Support",
        desc: "Software maintenance, updates, monitoring and technical support.",
      },
      {
        icon: "💳",
        title: "Payment Gateway",
        desc: "Razorpay, PhonePe, PayU, Cashfree and Stripe integration.",
      },
      {
        icon: "📧",
        title: "Email & SMS Services",
        desc: "Transactional emails, OTP, newsletters and SMS integration.",
      },
    ].map((service, index) => (

      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-blue-600 hover:shadow-2xl"
      >

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-5xl">

          {service.icon}

        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900 group-hover:text-blue-700">

          {service.title}

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          {service.desc}

        </p>

        <ul className="mt-6 space-y-3">

          <li className="flex items-center gap-3">
            <span className="text-green-600">✔</span>
            Enterprise Ready
          </li>

          <li className="flex items-center gap-3">
            <span className="text-green-600">✔</span>
            Cloud Deployment
          </li>

          <li className="flex items-center gap-3">
            <span className="text-green-600">✔</span>
            Technical Support
          </li>

        </ul>

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
{/* Why Choose Us */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700">
        Why Choose ArikaSoft
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Trusted Technology Partner
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
        We combine innovation, security and industry expertise to
        deliver reliable software solutions that help organizations
        grow faster.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          icon: "⚡",
          title: "Fast Delivery",
          desc: "Agile development with rapid delivery cycles.",
        },
        {
          icon: "🔒",
          title: "Enterprise Security",
          desc: "Secure architecture with role-based access control.",
        },
        {
          icon: "☁️",
          title: "Cloud Ready",
          desc: "Deploy on AWS, Azure, DigitalOcean or private servers.",
        },
        {
          icon: "📱",
          title: "Responsive UI",
          desc: "Optimized for desktop, tablet and mobile devices.",
        },
        {
          icon: "🤖",
          title: "AI Integration",
          desc: "AI assistants, automation and predictive analytics.",
        },
        {
          icon: "📊",
          title: "Business Analytics",
          desc: "Real-time dashboards and intelligent reporting.",
        },
        {
          icon: "🔄",
          title: "Easy Integration",
          desc: "Payment gateways, SMS, WhatsApp and REST APIs.",
        },
        {
          icon: "🎧",
          title: "Dedicated Support",
          desc: "Professional technical support and maintenance.",
        },
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition hover:border-blue-600 hover:bg-white"
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

{/* Development Process */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Our Development Process
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        A transparent process that ensures quality and timely delivery.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-6">

      {[
        "Requirement",
        "Planning",
        "UI / UX",
        "Development",
        "Testing",
        "Deployment",
      ].map((step, index) => (

        <motion.div
          key={step}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white p-8 text-center shadow-lg"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-2xl font-black text-white">

            {index + 1}

          </div>

          <h3 className="mt-6 text-xl font-bold">
            {step}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* Technology Stack */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Technology Stack
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        Modern technologies powering our solutions.
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
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Flutter",
        "Docker",
        "AWS",
      ].map((tech) => (

        <motion.div
          key={tech}
          whileHover={{ scale: 1.05 }}
          className="rounded-2xl bg-slate-50 p-6 text-center font-bold shadow"
        >
          {tech}
        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* Success Metrics */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-20 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        ["500+", "Projects Completed"],
        ["350+", "Satisfied Clients"],
        ["99%", "Client Retention"],
        ["24×7", "Support Available"],
      ].map(([value, label]) => (

        <div
          key={label}
          className="rounded-3xl bg-white/10 p-10 text-center backdrop-blur"
        >

          <h2 className="text-5xl font-black">
            {value}
          </h2>

          <p className="mt-4 text-cyan-100">
            {label}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}