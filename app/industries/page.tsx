"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  HeartHandshake,
  GraduationCap,
  Landmark,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Industries Served",
    value: "25+",
    icon: Factory,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Projects Delivered",
    value: "500+",
    icon: Building2,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Happy Clients",
    value: "350+",
    icon: HeartHandshake,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Success Rate",
    value: "99%",
    icon: CheckCircle2,
    color: "from-purple-600 to-pink-500",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
            >

              <span className="rounded-full bg-white/10 px-5 py-2 text-cyan-300">
                🌍 Industries We Serve
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

                Digital Solutions For

                <span className="block text-cyan-300">

                  Every Industry

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-cyan-100">

                ArikaSoft delivers ERP,
                CRM,
                Mobile Apps,
                Websites,
                NGO Portals,
                AI Solutions,
                Automation,
                and Enterprise Software
                across multiple industries.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black hover:bg-yellow-300"
                >
                  Get Consultation
                </Link>

                <Link
                  href="/services"
                  className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-bold text-white hover:bg-white/10"
                >
                  View Services

                  <ArrowRight size={18} />

                </Link>

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >

              <div className="grid gap-5 md:grid-cols-2">

                {[
                  {
                    icon: GraduationCap,
                    title: "Education",
                  },
                  {
                    icon: HeartHandshake,
                    title: "NGO",
                  },
                  {
                    icon: Landmark,
                    title: "Government",
                  },
                  {
                    icon: Truck,
                    title: "Logistics",
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
                initial={{ opacity: 0, y: 25 }}
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

      {/* Industries */}

<section className="mx-auto mt-14 max-w-7xl px-6 pb-14">

  <div className="mb-12 text-center">

    <h2 className="text-5xl font-black text-slate-900">
      Industries We Empower
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      We build modern ERP, CRM, Mobile Apps, AI Solutions,
      Websites and Enterprise Software for businesses
      across multiple industries.
    </p>

  </div>

  <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        title: "Healthcare",
        icon: "🏥",
        desc: "Hospital ERP, Clinic Management, Pharmacy, Laboratory Systems.",
      },
      {
        title: "Education",
        icon: "🎓",
        desc: "School ERP, College ERP, LMS, Online Examination Systems.",
      },
      {
        title: "NGO & Trust",
        icon: "❤️",
        desc: "Donation Portal, MIS, Accounting, Volunteer Management.",
      },
      {
        title: "Manufacturing",
        icon: "🏭",
        desc: "Inventory, Production Planning, Purchase & Quality Control.",
      },
      {
        title: "Retail",
        icon: "🛒",
        desc: "POS, Billing, Inventory, CRM and Customer Loyalty.",
      },
      {
        title: "Finance",
        icon: "💰",
        desc: "Accounting, GST, Payroll, Loan & Financial Management.",
      },
      {
        title: "Hospitality",
        icon: "🏨",
        desc: "Hotel Booking, Restaurant POS, Staff & Guest Management.",
      },
      {
        title: "Logistics",
        icon: "🚚",
        desc: "Fleet Tracking, Delivery, Warehouse & Route Management.",
      },
      {
        title: "Agriculture",
        icon: "🌾",
        desc: "Farmer Portal, Procurement, Crop & Supply Chain Solutions.",
      },
      {
        title: "Government",
        icon: "🏛",
        desc: "Citizen Services, e-Governance, Workflow Automation.",
      },
      {
        title: "IT Company",
        icon: "💻",
        desc: "Project Management, HRMS, CRM and Billing Software.",
      },
      {
        title: "Construction",
        icon: "🏗",
        desc: "Project Tracking, Contractor Billing and Material Management.",
      },
    ].map((industry, index) => (

      <motion.div
        key={industry.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="rounded-[30px] bg-white p-8 shadow-xl transition-all duration-300"
      >

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-5xl">

          {industry.icon}

        </div>

        <h3 className="mt-8 text-3xl font-black text-slate-900">

          {industry.title}

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          {industry.desc}

        </p>

        <ul className="mt-6 space-y-3">

          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={18} />
            ERP Solutions
          </li>

          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={18} />
            CRM Integration
          </li>

          <li className="flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={18} />
            Cloud Deployment
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

<section className="mx-auto max-w-7xl px-6 py-16">

  <div className="text-center">

    <h2 className="text-5xl font-black text-slate-900">
      Why Choose ArikaSoft?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      We provide enterprise-grade software solutions with modern technology,
      security, scalability and outstanding support.
    </p>

  </div>

  <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        title: "Custom Development",
        icon: "💻",
        desc: "Tailor-made ERP, CRM and Web Applications."
      },
      {
        title: "Cloud Ready",
        icon: "☁️",
        desc: "Deploy securely on AWS, Azure or Hostinger."
      },
      {
        title: "Data Security",
        icon: "🔒",
        desc: "Enterprise security with backup and encryption."
      },
      {
        title: "24×7 Support",
        icon: "🎧",
        desc: "Dedicated support and maintenance services."
      }
    ].map((item) => (

      <motion.div
        key={item.title}
        whileHover={{ y: -8 }}
        className="rounded-3xl bg-white p-8 shadow-xl"
      >

        <div className="text-6xl">
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

</section>

{/* Development Process */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black">
        Our Development Process
      </h2>

      <p className="mt-5 text-lg text-slate-500">
        A proven process for successful software delivery.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-6">

      {[
        "Requirement",
        "Planning",
        "Design",
        "Development",
        "Testing",
        "Deployment"
      ].map((step, index) => (

        <motion.div
          key={step}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * .08 }}
          className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-xl font-black text-white">

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

{/* Technologies */}

<section className="mx-auto max-w-7xl px-6 py-16">

  <div className="text-center">

    <h2 className="text-5xl font-black text-slate-900">
      Technologies We Use
    </h2>

  </div>

  <div className="mt-12 grid gap-6 md:grid-cols-3 xl:grid-cols-6">

    {[
      "Next.js",
      "React",
      "Laravel",
      "Node.js",
      "MySQL",
      "Supabase",
      "Prisma",
      "Docker",
      "Tailwind CSS",
      "Flutter",
      "AWS",
      "Firebase",
    ].map((tech) => (

      <div
        key={tech}
        className="rounded-2xl bg-white p-6 text-center font-bold shadow-lg transition hover:-translate-y-1"
      >
        {tech}
      </div>

    ))}

  </div>

</section>

{/* Success Metrics */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-20 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        ["500+", "Projects Delivered"],
        ["350+", "Happy Clients"],
        ["25+", "Industries"],
        ["99%", "Client Satisfaction"],
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