"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  Globe,
  Briefcase,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 py-28 text-white">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        </div>

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

              CONTACT ARIKASOFT

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Let's Build Your

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-300 bg-clip-text text-transparent">

                Digital Future

              </span>

              Together

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

              Looking for ERP, CRM, HRMS, Mobile Apps,
              AI Solutions or Custom Software Development?

              Our experts are ready to help your business grow.

            </p>

            <div className="mt-10">

              <Link
                href="#contact-form"
                className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
              >

                Contact Our Team

                <ArrowRight className="ml-2" size={20} />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT CARDS ================= */}
      

      {/* ================= CONTACT FORM ================= */}

<section
  id="contact-form"
  className="py-24"
>
  <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5">

    {/* Left */}

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-3"
    >

      <div className="rounded-3xl bg-white p-10 shadow-xl">

        <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
          SEND MESSAGE
        </span>

        <h2 className="mt-5 text-4xl font-black text-slate-900">
          Get Free Consultation
        </h2>

        <p className="mt-4 text-slate-500">
          Fill out the form below and our team will contact you within 24
          hours.
        </p>

        <form className="mt-10 space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name *"
              className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <input
              type="email"
              placeholder="Email Address *"
              className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number *"
              className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <select className="rounded-xl border border-slate-200 px-5 py-4 outline-none">

              <option>Select Service</option>

              <option>ERP Development</option>

              <option>CRM Software</option>

              <option>HRMS</option>

              <option>Website Development</option>

              <option>Mobile App Development</option>

              <option>Cloud Solutions</option>

              <option>AI Solutions</option>

              <option>Custom Software</option>

            </select>

            <select className="rounded-xl border border-slate-200 px-5 py-4 outline-none">

              <option>Project Budget</option>

              <option>Below ₹50,000</option>

              <option>₹50K - ₹2L</option>

              <option>₹2L - ₹10L</option>

              <option>Above ₹10L</option>

            </select>

          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
          />

          <textarea
            rows={6}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-cyan-500"
          />

          <label className="flex items-center gap-3 text-sm text-slate-600">

            <input type="checkbox" />

            I agree to the Privacy Policy and Terms & Conditions.

          </label>

          <button
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            Send Message
          </button>

        </form>

      </div>

    </motion.div>

    {/* Right */}

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-6 lg:col-span-2"
    >

      <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-8 text-white shadow-xl">

        <h3 className="text-2xl font-bold">

          Why Choose ArikaSoft?

        </h3>

        <div className="mt-6 space-y-4">

          {[
            "500+ Successful Projects",
            "150+ Happy Clients",
            "24×7 Technical Support",
            "Enterprise Security",
            "Dedicated Project Manager",
            "Affordable Pricing",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                className="text-cyan-400"
                size={20}
              />

              {item}

            </div>

          ))}

        </div>

      </div>

      <div className="rounded-3xl bg-white p-8 shadow-xl">

        <h3 className="text-2xl font-bold">

          Business Hours

        </h3>

        <div className="mt-6 space-y-3 text-slate-600">

          <div className="flex justify-between">

            <span>Monday - Friday</span>

            <strong>09:00 - 18:00</strong>

          </div>

          <div className="flex justify-between">

            <span>Saturday</span>

            <strong>09:00 - 16:00</strong>

          </div>

          <div className="flex justify-between">

            <span>Sunday</span>

            <strong>Closed</strong>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>
{/* ================= GOOGLE MAP ================= */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-3xl shadow-2xl"
    >

      <iframe
        title="ArikaSoft Office"
        src="https://maps.google.com/maps?q=Darbhanga%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        className="border-0"
      />

    </motion.div>

  </div>

</section>

{/* ================= FAQ ================= */}

<section className="bg-slate-100 py-24">

  <div className="mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold text-cyan-700">
        FAQs
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="mt-16 space-y-5">

      {[
        {
          q: "How quickly do you respond to enquiries?",
          a: "Our team usually responds within one business day.",
        },
        {
          q: "Do you develop custom ERP software?",
          a: "Yes. We build ERP, CRM, HRMS and completely customized business software.",
        },
        {
          q: "Do you provide AMC & Support?",
          a: "Yes, we offer Annual Maintenance Contracts and 24×7 technical support.",
        },
        {
          q: "Can you develop mobile applications?",
          a: "Yes. Android, iOS and Cross Platform Apps.",
        },
      ].map((faq) => (

        <div
          key={faq.q}
          className="rounded-2xl bg-white p-8 shadow-lg"
        >

          <h3 className="text-xl font-bold">

            {faq.q}

          </h3>

          <p className="mt-3 text-slate-600">

            {faq.a}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* ================= CTA ================= */}

<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-24 text-white">

  <div className="mx-auto max-w-7xl px-6 text-center">

    <h2 className="text-5xl font-black">

      Ready To Start Your Project?

    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">

      Let's discuss your ERP, CRM, Website, Mobile App,
      AI or Digital Transformation project.

    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="tel:+919296971363"
        className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-900 transition hover:bg-cyan-400"
      >

        Call Now

      </Link>

      <Link
        href="mailto:info@arikasoft.com"
        className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/20"
      >

        Email Us

      </Link>

    </div>

  </div>

</section>

{/* ================= Floating Buttons ================= */}

<a
  href="https://wa.me/919296971363"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white shadow-2xl transition hover:scale-110"
>
  💬
</a>

<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-xl transition hover:bg-blue-700"
>
  ↑
</button>
<section className="py-24 bg-white">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number:"500+",
          title:"Projects Delivered"
        },
        {
          number:"150+",
          title:"Happy Clients"
        },
        {
          number:"12+",
          title:"Years Experience"
        },
        {
          number:"24×7",
          title:"Technical Support"
        }
      ].map((item)=>(
        <motion.div
          key={item.title}
          whileHover={{y:-8}}
          className="rounded-3xl bg-slate-50 p-10 text-center shadow-lg"
        >

          <h2 className="text-5xl font-black text-cyan-600">

            {item.number}

          </h2>

          <p className="mt-4 text-lg font-medium">

            {item.title}

          </p>

        </motion.div>
      ))}

    </div>

  </div>

</section>
<section className="bg-slate-100 py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-center text-5xl font-black">

Our Working Process

</h2>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

{[
"Requirement Analysis",

"UI / UX Design",

"Development",

"Deployment"
].map((step,index)=>(

<div
key={step}
className="rounded-3xl bg-white p-10 shadow-lg"
>

<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-2xl font-bold text-white">

0{index+1}

</div>

<h3 className="text-2xl font-bold">

{step}

</h3>

</div>

))}

</div>

</div>

</section>
<section className="py-24">

<div className="mx-auto max-w-7xl px-6">

<h2 className="text-center text-5xl font-black">

Technologies We Use

</h2>

<div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

{[
"React",

"Next.js",

"Laravel",

"Node.js",

"Flutter",

"MongoDB",

"MySQL",

"PostgreSQL",

"Supabase",

"AWS",

"Docker",

"AI"
].map((tech)=>(

<div
key={tech}
className="rounded-2xl bg-white py-8 text-center shadow-lg transition hover:-translate-y-2"
>

<h3 className="font-bold">

{tech}

</h3>

</div>

))}

</div>

</div>

</section>
<section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 py-24 text-white">

<div className="mx-auto max-w-7xl px-6">

<div className="grid gap-16 lg:grid-cols-2">

<div>

<h2 className="text-5xl font-black">

Why Businesses Choose ArikaSoft?

</h2>

<p className="mt-8 text-lg leading-8 text-slate-300">

We build secure, scalable and enterprise-grade
software solutions that help businesses automate,
grow and innovate.

</p>

</div>

<div className="grid gap-5">

{[
"Enterprise ERP Development",
"CRM Software",
"AI Automation",
"Government Projects",
"Cloud Infrastructure",
"24×7 Support"
].map((item)=>(

<div
key={item}
className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
>

✓ {item}

</div>

))}

</div>

</div>

</div>

</section>

    </main>
  );
}