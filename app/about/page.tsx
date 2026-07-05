"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Award,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 py-28 text-white">

        <div className="absolute inset-0">

          <div className="absolute -left-56 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

          <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-700/20 blur-[140px]" />

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

              ABOUT ARIKASOFT

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Transforming

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">

                Businesses

              </span>

              Through Technology

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

              ArikaSoft Private Limited is an innovative technology company
              delivering ERP, CRM, HRMS, Mobile Apps, AI Solutions,
              Cloud Platforms and Enterprise Software for businesses,
              NGOs, educational institutions and government organizations.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur hover:bg-white/20"
              >
                Our Services

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= COMPANY INTRO ================= */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

              COMPANY OVERVIEW

            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Building Future Ready
              Software Solutions

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              We specialize in custom software development,
              enterprise applications, ERP platforms,
              AI-powered automation, cloud solutions and
              digital transformation services.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Our mission is to empower organizations with
              secure, scalable and modern technology that
              improves productivity and accelerates growth.

            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <div className="grid gap-8 sm:grid-cols-2">

                <div>

                  <Building2 className="text-cyan-600" size={34} />

                  <h3 className="mt-4 text-xl font-bold">

                    Headquarters

                  </h3>

                  <p className="mt-2 text-slate-500">

                    Darbhanga, Bihar

                  </p>

                </div>

                <div>

                  <Users className="text-cyan-600" size={34} />

                  <h3 className="mt-4 text-xl font-bold">

                    Clients

                  </h3>

                  <p className="mt-2 text-slate-500">

                    150+ Worldwide

                  </p>

                </div>

                <div>

                  <Briefcase className="text-cyan-600" size={34} />

                  <h3 className="mt-4 text-xl font-bold">

                    Projects

                  </h3>

                  <p className="mt-2 text-slate-500">

                    500+ Delivered

                  </p>

                </div>

                <div>

                  <Award className="text-cyan-600" size={34} />

                  <h3 className="mt-4 text-xl font-bold">

                    Support

                  </h3>

                  <p className="mt-2 text-slate-500">

                    24×7 Assistance

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="bg-slate-100 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >

            <Target
              className="text-blue-600"
              size={42}
            />

            <h3 className="mt-6 text-3xl font-bold">

              Our Mission

            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              To empower businesses with innovative,
              secure and scalable enterprise software
              solutions that enable growth,
              automation and digital excellence.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >

            <Eye
              className="text-cyan-600"
              size={42}
            />

            <h3 className="mt-6 text-3xl font-bold">

              Our Vision

            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              To become India's most trusted
              enterprise technology company by
              delivering world-class software
              products and digital transformation
              solutions.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["500+", "Projects"],
            ["150+", "Clients"],
            ["25+", "Industries"],
            ["24×7", "Support"],
          ].map(([value, label]) => (

            <motion.div
              key={label}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-10 text-center shadow-xl"
            >

              <h2 className="text-5xl font-black text-cyan-600">

                {value}

              </h2>

              <p className="mt-4 font-semibold text-slate-600">

                {label}

              </p>

            </motion.div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

<section className="bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-800 py-24 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
        WHY CHOOSE US
      </span>

      <h2 className="mt-6 text-5xl font-black">
        Why Businesses Choose ArikaSoft
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        We combine innovation, modern technology and enterprise expertise to
        deliver reliable software solutions.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Enterprise Software",
          desc: "Scalable ERP, CRM and HRMS platforms."
        },
        {
          title: "Experienced Team",
          desc: "Skilled developers, designers and cloud engineers."
        },
        {
          title: "Secure Architecture",
          desc: "Modern security standards and data protection."
        },
        {
          title: "Cloud Ready",
          desc: "Deploy on AWS, Azure and modern cloud platforms."
        },
        {
          title: "24×7 Support",
          desc: "Dedicated support and maintenance services."
        },
        {
          title: "Affordable Pricing",
          desc: "Flexible pricing suitable for every business."
        },
      ].map((item) => (

        <motion.div
          key={item.title}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >

          <CheckCircle2
            className="text-cyan-400"
            size={34}
          />

          <h3 className="mt-6 text-2xl font-bold">

            {item.title}

          </h3>

          <p className="mt-4 leading-7 text-slate-300">

            {item.desc}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= CORE VALUES ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        OUR VALUES
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Core Values
      </h2>

    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        "Innovation",
        "Integrity",
        "Quality",
        "Customer First",
        "Transparency",
        "Continuous Learning",
      ].map((value) => (

        <motion.div
          key={value}
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg"
        >

          <h3 className="text-2xl font-bold text-slate-900">

            {value}

          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= TECHNOLOGY ================= */}

<section className="bg-slate-100 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        TECHNOLOGIES
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Technology Expertise
      </h2>

    </div>

    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

      {[
        "Next.js",
        "React",
        "Laravel",
        "Node.js",
        "Flutter",
        "Supabase",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "AWS",
        "Azure",
        "AI",
      ].map((tech) => (

        <motion.div
          key={tech}
          whileHover={{ y: -5 }}
          className="rounded-2xl bg-white py-8 text-center shadow-lg"
        >

          <h3 className="font-bold text-slate-900">
            {tech}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= INDUSTRIES ================= */}

<section className="py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        INDUSTRIES
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Industries We Serve
      </h2>

    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {[
        "Healthcare",
        "Education",
        "NGO",
        "Government",
        "Retail",
        "Manufacturing",
        "Finance",
        "Real Estate",
      ].map((industry) => (

        <motion.div
          key={industry}
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg"
        >

          <h3 className="text-xl font-bold">
            {industry}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* ================= COMPANY JOURNEY ================= */}

<section className="bg-slate-950 py-24 text-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-semibold text-cyan-300">
        OUR JOURNEY
      </span>

      <h2 className="mt-6 text-5xl font-black">
        Company Timeline
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        Every milestone reflects our commitment to innovation, customer success,
        and continuous growth.
      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          year: "2024",
          title: "Company Founded",
          desc: "Started with a vision to build enterprise software.",
        },
        {
          year: "2025",
          title: "100+ Clients",
          desc: "Successfully delivered solutions across India.",
        },
        {
          year: "2026",
          title: "500+ Projects",
          desc: "Expanded ERP, CRM and AI platforms.",
        },
        {
          year: "Future",
          title: "Global Expansion",
          desc: "Building products for international markets.",
        },
      ].map((item) => (

        <motion.div
          key={item.year}
          whileHover={{ y: -10 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >

          <h3 className="text-5xl font-black text-cyan-300">
            {item.year}
          </h3>

          <h4 className="mt-6 text-2xl font-bold">
            {item.title}
          </h4>

          <p className="mt-4 text-slate-300 leading-7">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= LEADERSHIP ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        LEADERSHIP TEAM
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Meet Our Leadership
      </h2>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          name: "Guddu Kumar",
          role: "Founder & CEO",
        },
        {
          name: "Puja Paswan",
          role: "Managing Director",
        },
        {
          name: "Technical Team",
          role: "Software Engineers",
        },
        {
          name: "Support Team",
          role: "Customer Success",
        },
      ].map((member) => (

        <motion.div
          key={member.name}
          whileHover={{ y: -8 }}
          className="overflow-hidden rounded-3xl bg-white shadow-xl"
        >

          <div className="h-72 bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-400" />

          <div className="p-8 text-center">

            <h3 className="text-2xl font-bold text-slate-900">
              {member.name}
            </h3>

            <p className="mt-2 text-cyan-600 font-medium">
              {member.role}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= CERTIFICATIONS ================= */}

<section className="bg-slate-100 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        CERTIFICATIONS
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Registrations & Certifications
      </h2>

    </div>

    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        "Private Limited Company",
        "Startup India",
        "MSME Registered",
        "GST Registered",
        "CIN Registered",
        "ISO Ready",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl bg-white p-8 text-center shadow-lg"
        >

          <Award
            className="mx-auto text-cyan-600"
            size={42}
          />

          <h3 className="mt-6 text-xl font-bold">
            {item}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* ================= INFRASTRUCTURE ================= */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-12 lg:grid-cols-2">

      <motion.div
        whileHover={{ y: -8 }}
        className="rounded-3xl bg-slate-50 p-10 shadow-xl"
      >

        <h2 className="text-4xl font-black text-slate-900">
          Modern Infrastructure
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">

          Our development center is equipped with modern cloud infrastructure,
          collaborative tools, secure environments and enterprise-grade
          deployment pipelines.

        </p>

      </motion.div>

      <motion.div
        whileHover={{ y: -8 }}
        className="rounded-3xl bg-gradient-to-br from-blue-700 via-cyan-500 to-sky-400"
      >

        <div className="flex h-full items-center justify-center text-center text-4xl font-black text-white">

          Office Preview

        </div>

      </motion.div>

    </div>

  </div>

</section>

    </main>
  );
}