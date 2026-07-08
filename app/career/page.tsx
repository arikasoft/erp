"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  MapPin,
  Building2,
  Users,
  Award,
  HeartHandshake,
} from "lucide-react";

const departments = [
  "All Departments",
  "Software Development",
  "UI / UX Design",
  "Digital Marketing",
  "Sales",
  "Human Resource",
  "Finance",
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-cyan-300">

              <Briefcase size={18} />

              Join Our Team

            </span>

            <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

              Careers at ArikaSoft

            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-cyan-100">

              Build innovative solutions, grow your career,
              work with talented professionals and create
              technology that makes a real impact.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Search */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="rounded-3xl bg-white p-6 shadow-xl">

          <div className="grid gap-5 lg:grid-cols-4">

            <div className="relative lg:col-span-2">

              <Search
                className="absolute left-4 top-4 text-slate-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
              />

            </div>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              {departments.map((dept) => (
                <option key={dept}>{dept}</option>
              ))}

            </select>

            <select className="rounded-xl border border-slate-300 px-4 py-4">

              <option>All Locations</option>
              <option>Remote</option>
              <option>Darbhanga</option>
              <option>Patna</option>
              <option>Delhi</option>

            </select>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Briefcase,
              value: "24",
              title: "Open Positions",
            },
            {
              icon: Users,
              value: "150+",
              title: "Employees",
            },
            {
              icon: Award,
              value: "12+",
              title: "Awards",
            },
            {
              icon: HeartHandshake,
              value: "98%",
              title: "Employee Satisfaction",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >

                <Icon
                  className="text-blue-600"
                  size={34}
                />

                <h2 className="mt-5 text-4xl font-black text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.title}
                </p>

              </motion.div>

            );

          })}

        </div>

      </section>

      {/* Open Positions */}

<section className="mx-auto mt-14 max-w-7xl px-6 pb-14">

  <div className="mb-10 flex items-center justify-between">

    <div>

      <h2 className="text-4xl font-black text-slate-900">
        Current Openings
      </h2>

      <p className="mt-2 text-slate-500">
        Find the perfect opportunity and join our growing team.
      </p>

    </div>

    <Link
      href="/contact"
      className="font-bold text-blue-600 hover:text-blue-800"
    >
      Can't find your role?
    </Link>

  </div>

  <div className="grid gap-8 lg:grid-cols-2">

    {[
      {
        id: 1,
        title: "Full Stack Developer",
        department: "Software Development",
        location: "Remote",
        salary: "₹6 - ₹10 LPA",
        type: "Full Time",
        featured: true,
      },
      {
        id: 2,
        title: "UI / UX Designer",
        department: "Design",
        location: "Patna",
        salary: "₹4 - ₹7 LPA",
        type: "Full Time",
        featured: false,
      },
      {
        id: 3,
        title: "React / Next.js Developer",
        department: "Frontend",
        location: "Remote",
        salary: "₹5 - ₹9 LPA",
        type: "Remote",
        featured: true,
      },
      {
        id: 4,
        title: "Laravel Developer",
        department: "Backend",
        location: "Darbhanga",
        salary: "₹5 - ₹8 LPA",
        type: "Full Time",
        featured: false,
      },
      {
        id: 5,
        title: "Digital Marketing Executive",
        department: "Marketing",
        location: "Delhi",
        salary: "₹3 - ₹5 LPA",
        type: "Full Time",
        featured: false,
      },
      {
        id: 6,
        title: "HR Executive",
        department: "Human Resource",
        location: "Remote",
        salary: "₹3 - ₹4 LPA",
        type: "Hybrid",
        featured: false,
      },
    ].map((job, index) => (

      <motion.div
        key={job.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -8 }}
        className="rounded-3xl bg-white p-8 shadow-xl transition-all"
      >

        <div className="flex items-start justify-between">

          <div>

            {job.featured && (

              <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-bold text-yellow-700">

                ⭐ Featured

              </span>

            )}

            <h3 className="mt-4 text-3xl font-black text-slate-900">
              {job.title}
            </h3>

          </div>

          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white">
            {job.type}
          </span>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3">

            <Building2 className="text-blue-600" size={20} />

            <div>

              <p className="text-sm text-slate-500">
                Department
              </p>

              <h4 className="font-semibold">
                {job.department}
              </h4>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <MapPin className="text-red-500" size={20} />

            <div>

              <p className="text-sm text-slate-500">
                Location
              </p>

              <h4 className="font-semibold">
                {job.location}
              </h4>

            </div>

          </div>

        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5">

          <div className="flex items-center justify-between">

            <span className="text-slate-500">
              Salary
            </span>

            <span className="text-2xl font-black text-green-600">
              {job.salary}
            </span>

          </div>

        </div>

        <p className="mt-6 leading-7 text-slate-600">

          We are looking for passionate professionals
          who love innovation, teamwork and continuous
          learning to build world-class digital products.

        </p>

        <div className="mt-8 flex gap-4">

          <Link
            href={`/career/${job.id}`}
            className="flex-1 rounded-xl border border-blue-600 py-3 text-center font-bold text-blue-600 hover:bg-blue-50"
          >
            View Details
          </Link>

          <Link
            href={`/career/apply/${job.id}`}
            className="flex-1 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 py-3 text-center font-bold text-white hover:opacity-90"
          >
            Apply Now
          </Link>

        </div>

      </motion.div>

    ))}

  </div>

</section>
{/* Job Application */}

<section className="mx-auto max-w-7xl px-6 pb-16">

  <div className="grid gap-10 lg:grid-cols-2">

    {/* Apply Form */}

    <div className="rounded-[32px] bg-white p-10 shadow-xl">

      <h2 className="text-4xl font-black text-slate-900">
        Apply Online
      </h2>

      <p className="mt-3 text-slate-500">
        Fill out the form below and upload your resume.
      </p>

      <form className="mt-8 space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
        />

        <input
          type="text"
          placeholder="Current Location"
          className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-600"
        />

        <select className="w-full rounded-xl border border-slate-300 px-5 py-4">

          <option>Select Position</option>
          <option>Full Stack Developer</option>
          <option>React Developer</option>
          <option>Laravel Developer</option>
          <option>UI / UX Designer</option>
          <option>HR Executive</option>

        </select>

        <textarea
          rows={5}
          placeholder="Tell us about yourself..."
          className="w-full rounded-xl border border-slate-300 p-5 outline-none focus:border-blue-600"
        />

        <input
          type="file"
          className="w-full rounded-xl border border-slate-300 p-4"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 py-4 text-lg font-bold text-white hover:opacity-90"
        >
          Submit Application
        </button>

      </form>

    </div>

    {/* Benefits */}

    <div>

      <div className="rounded-[32px] bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-10 text-white shadow-xl">

        <h2 className="text-4xl font-black">
          Why Join ArikaSoft?
        </h2>

        <div className="mt-8 space-y-5">

          {[
            "Competitive Salary",
            "Remote Work Options",
            "Medical Insurance",
            "Performance Bonus",
            "Paid Leave",
            "Learning & Certification",
            "Friendly Team",
            "Career Growth",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white/10 p-4"
            >

              <span className="text-green-300">✔</span>

              <span>{item}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Hiring Process */}

      <div className="mt-8 rounded-[32px] bg-white p-10 shadow-xl">

        <h2 className="text-3xl font-black">
          Hiring Process
        </h2>

        <div className="mt-8 space-y-6">

          {[
            "Application Review",
            "HR Interview",
            "Technical Round",
            "Final Discussion",
            "Offer Letter",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-5"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-white">

                {index + 1}

              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

  {/* FAQ */}

  <div className="mt-14 rounded-[32px] bg-white p-10 shadow-xl">

    <h2 className="text-4xl font-black text-center">
      Frequently Asked Questions
    </h2>

    <div className="mt-10 space-y-5">

      {[
        [
          "Can I apply for multiple positions?",
          "Yes, you can apply for multiple relevant openings.",
        ],
        [
          "Do you offer remote jobs?",
          "Yes, many technical positions are fully remote.",
        ],
        [
          "How long is the hiring process?",
          "Usually between 7 and 15 working days.",
        ],
        [
          "Do freshers apply?",
          "Yes, internship and fresher opportunities are available.",
        ],
      ].map(([q, a]) => (

        <div
          key={q}
          className="rounded-2xl border border-slate-200 p-6"
        >

          <h3 className="text-xl font-bold text-slate-900">
            {q}
          </h3>

          <p className="mt-3 leading-7 text-slate-600">
            {a}
          </p>

        </div>

      ))}

    </div>

  </div>

  {/* CTA */}

  <div className="mt-16 rounded-[32px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center text-white shadow-xl">

    <h2 className="text-5xl font-black">
      Ready to Build the Future?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-100">
      Join our passionate team and work on innovative projects
      that impact businesses, NGOs, schools and communities
      across India.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-700 hover:bg-slate-100"
      >
        Contact HR
      </Link>

      <Link
        href="/about"
        className="rounded-xl border border-white px-10 py-4 text-lg font-bold hover:bg-white/10"
      >
        Learn More
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}