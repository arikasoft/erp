"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Laptop,
  HeartHandshake,
  GraduationCap,
  Hospital,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    title: "ERP Solutions",
    icon: Building2,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "CRM Software",
    icon: Briefcase,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Website Development",
    icon: Laptop,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "NGO ERP",
    icon: HeartHandshake,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "School ERP",
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Hospital ERP",
    icon: Hospital,
    color: "from-rose-600 to-pink-500",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-slate-50">

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-28 text-white">

        <div className="absolute inset-0">

          <div className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

              <CheckCircle2 size={18} />

              OUR PORTFOLIO

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Our Digital

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">

                Success Stories

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

              Explore our portfolio of ERP, CRM, HRMS,
              Websites, Mobile Apps and Enterprise Software
              successfully delivered across multiple industries.

            </p>

            <div className="mt-10 flex justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
              >
                Start Your Project
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
              >

                Explore Services

                <ArrowRight className="ml-2" size={18} />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="-mt-16 relative z-20">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "500+",
              title: "Projects",
            },
            {
              value: "150+",
              title: "Clients",
            },
            {
              value: "25+",
              title: "Industries",
            },
            {
              value: "24×7",
              title: "Support",
            },
          ].map((item) => (

            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 text-center shadow-xl"
            >

              <h2 className="text-5xl font-black text-cyan-600">

                {item.value}

              </h2>

              <p className="mt-3 font-semibold text-slate-600">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">

              CATEGORIES

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Explore Our Expertise

            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  whileHover={{ y: -10 }}
                  className="rounded-3xl bg-white p-8 shadow-xl transition"
                >

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                  >

                    <Icon
                      className="text-white"
                      size={30}
                    />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-4 text-slate-500">

                    Enterprise-grade software solutions
                    designed for modern businesses.

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* FEATURED PROJECTS */}

      <section className="pb-10">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

              FEATURED PROJECTS

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Some Of Our Best Work

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">

              From ERP platforms to enterprise web applications,
              our portfolio showcases scalable and innovative
              digital solutions.

            </p>

          </div>

        </div>

      </section>
      {/* ================= PORTFOLIO GRID ================= */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    {/* Filter */}

    <div className="mb-14 flex flex-wrap justify-center gap-4">

      {[
        "All",
        "ERP",
        "CRM",
        "Website",
        "Mobile App",
        "AI",
        "NGO",
      ].map((filter) => (

        <button
          key={filter}
          className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium transition hover:bg-blue-600 hover:text-white"
        >
          {filter}
        </button>

      ))}

    </div>

    {/* Projects */}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "AJFT ERP",
          category: "NGO ERP",
          image: "/portfolio/erp.jpg",
          tech: ["Next.js", "Supabase", "Tailwind"],
        },
        {
          title: "Hospital ERP",
          category: "Healthcare",
          image: "/portfolio/hospital.jpg",
          tech: ["React", "Node.js", "PostgreSQL"],
        },
        {
          title: "School Management",
          category: "Education",
          image: "/portfolio/school.jpg",
          tech: ["Laravel", "MySQL"],
        },
        {
          title: "CRM Platform",
          category: "Business",
          image: "/portfolio/crm.jpg",
          tech: ["Next.js", "Prisma"],
        },
        {
          title: "Inventory Software",
          category: "Retail",
          image: "/portfolio/inventory.jpg",
          tech: ["React", "Supabase"],
        },
        {
          title: "GST Billing",
          category: "Finance",
          image: "/portfolio/billing.jpg",
          tech: ["Next.js", "MySQL"],
        },
      ].map((project) => (

        <motion.div
          key={project.title}
          whileHover={{ y: -10 }}
          className="group overflow-hidden rounded-3xl bg-white shadow-xl transition"
        >

          {/* Image */}

          <div className="relative h-64 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-400" />

            <div className="absolute inset-0 flex items-center justify-center text-6xl font-black text-white/20">

              {project.category}

            </div>

          </div>

          {/* Content */}

          <div className="p-8">

            <span className="rounded-full bg-cyan-100 px-4 py-1 text-xs font-semibold text-cyan-700">

              {project.category}

            </span>

            <h3 className="mt-5 text-2xl font-bold">

              {project.title}

            </h3>

            <p className="mt-4 text-slate-500">

              Enterprise software designed for performance,
              automation and scalability.

            </p>

            {/* Tech */}

            <div className="mt-6 flex flex-wrap gap-2">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="rounded-lg bg-slate-100 px-3 py-1 text-sm"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-8 flex gap-4">

              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Live Demo
              </Link>

              <Link
                href="/portfolio"
                className="rounded-xl border px-5 py-3 font-medium transition hover:bg-slate-100"
              >
                Case Study
              </Link>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= TECHNOLOGY ================= */}

<section className="bg-slate-950 py-24 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">

        TECHNOLOGIES

      </span>

      <h2 className="mt-6 text-5xl font-black">

        Technology Stack

      </h2>

    </div>

    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

      {[
        "Next.js",
        "React",
        "Laravel",
        "Flutter",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
        "Azure",
        "AI",
      ].map((tech) => (

        <motion.div
          whileHover={{ scale: 1.05 }}
          key={tech}
          className="rounded-2xl border border-white/10 bg-white/5 py-8 text-center backdrop-blur-xl"
        >

          <h3 className="font-bold">

            {tech}

          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* ================= INDUSTRIES ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        INDUSTRIES WE SERVE
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Solutions Across Every Industry
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
        We develop enterprise software solutions tailored to different business sectors.
      </p>

    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {[
        "Healthcare",
        "Education",
        "NGO",
        "Manufacturing",
        "Finance",
        "Retail",
        "Government",
        "Real Estate",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg"
        >
          <h3 className="text-xl font-bold">{item}</h3>
        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= TESTIMONIALS ================= */}

<section className="bg-slate-100 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        TESTIMONIALS
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        What Our Clients Say
      </h2>

    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {[
        {
          name: "Ajay Kumar",
          company: "Education Trust",
        },
        {
          name: "Puja Paswan",
          company: "NGO",
        },
        {
          name: "Rahul Singh",
          company: "Manufacturing",
        },
      ].map((item) => (

        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white p-8 shadow-xl"
        >

          <div className="mb-6 text-yellow-500 text-xl">
            ★★★★★
          </div>

          <p className="leading-8 text-slate-600">
            ArikaSoft delivered an excellent enterprise solution
            that improved our productivity and workflow.
          </p>

          <div className="mt-8">

            <h4 className="font-bold text-xl">
              {item.name}
            </h4>

            <p className="text-slate-500">
              {item.company}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= PROJECT STATS ================= */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-24 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          value: "500+",
          title: "Projects Delivered",
        },
        {
          value: "150+",
          title: "Happy Clients",
        },
        {
          value: "98%",
          title: "Client Satisfaction",
        },
        {
          value: "24×7",
          title: "Support",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="text-center"
        >

          <h2 className="text-6xl font-black text-cyan-300">
            {item.value}
          </h2>

          <p className="mt-4 text-lg">
            {item.title}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= FAQ ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        FAQ
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="mt-16 space-y-6">

      {[
        "Can I request a live demo?",
        "Do you provide source code?",
        "Can software be customized?",
        "Do you provide support after delivery?",
      ].map((faq) => (

        <div
          key={faq}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
        >

          <h3 className="text-xl font-bold">
            {faq}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= FINAL CTA ================= */}

<section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-500 py-24 text-white">

  <div className="mx-auto max-w-6xl px-6 text-center">

    <h2 className="text-5xl font-black">
      Ready To Build Your Next Project?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
      Let's transform your business with enterprise-grade software solutions.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
      >
        Contact Us
      </Link>

      <Link
        href="/services"
        className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white/10"
      >
        Explore Services
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}