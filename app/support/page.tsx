"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LifeBuoy,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700">

        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-cyan-300">

              <LifeBuoy size={18} />

              Customer Support

            </span>

            <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

              We're Here

              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                To Help You

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">

              Need assistance with ERP, CRM, Billing,
              Website, Mobile Apps or Cloud Solutions?
              Our support team is available to help.

            </p>

            {/* Search */}

            <div className="mx-auto mt-12 flex max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">

              <div className="flex items-center px-5">

                <Search className="text-slate-400" />

              </div>

              <input
                type="text"
                placeholder="Search help articles..."
                className="flex-1 px-4 py-5 text-slate-700 outline-none"
              />

              <button className="bg-gradient-to-r from-blue-700 to-cyan-500 px-8 font-bold text-white">

                Search

              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Quick Support */}

      <section className="mx-auto -mt-10 max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: Phone,
              title: "Call Support",
              value: "+91 9155751363",
            },
            {
              icon: Mail,
              title: "Email",
              value: "support@arikasoft.com",
            },
            {
              icon: MessageCircle,
              title: "Live Chat",
              value: "Available",
            },
            {
              icon: Clock,
              title: "Working Hours",
              value: "Mon-Sat 9AM-6PM",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-500 text-white">

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-black">

                  {item.title}

                </h3>

                <p className="mt-3 text-slate-600">

                  {item.value}

                </p>

              </motion.div>

            );

          })}

        </div>

      </section>

      {/* Support Categories */}

<section className="mx-auto mt-16 max-w-7xl px-6 pb-20">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
      Support Services
    </span>

    <h2 className="mt-6 text-5xl font-black text-slate-900">
      How Can We Help You?
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
      Choose the support category that best matches your issue.
      Our experts are ready to assist you.
    </p>

  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        icon: "🎫",
        title: "Submit Ticket",
        desc: "Create a support ticket and track its status.",
      },
      {
        icon: "💬",
        title: "Live Chat",
        desc: "Chat with our support team in real time.",
      },
      {
        icon: "🛠",
        title: "Technical Support",
        desc: "Get help with ERP, CRM and software issues.",
      },
      {
        icon: "☁️",
        title: "Cloud Support",
        desc: "Hosting, deployment and infrastructure support.",
      },
      {
        icon: "💳",
        title: "Billing Support",
        desc: "Invoices, subscriptions and payment assistance.",
      },
      {
        icon: "🔐",
        title: "Account Recovery",
        desc: "Recover your account or reset credentials.",
      },
      {
        icon: "📚",
        title: "Knowledge Base",
        desc: "Browse user guides and documentation.",
      },
      {
        icon: "🚀",
        title: "Priority Support",
        desc: "Fast response for enterprise customers.",
      },
    ].map((item, index) => (

      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ y: -10 }}
        className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-blue-600 hover:shadow-2xl"
      >

        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 text-5xl">

          {item.icon}

        </div>

        <h3 className="mt-8 text-2xl font-black text-slate-900">
          {item.title}
        </h3>

        <p className="mt-5 leading-8 text-slate-600">
          {item.desc}
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-cyan-600"
        >
          Get Support
          <ArrowRight size={18} />
        </Link>

      </motion.div>

    ))}

  </div>

</section>

{/* Support Process */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-5xl font-black text-slate-900">
        Support Process
      </h2>

      <p className="mt-5 text-lg text-slate-600">
        We follow a simple and transparent support workflow.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          step: "1",
          title: "Raise Ticket",
          desc: "Submit your issue with complete details.",
        },
        {
          step: "2",
          title: "Investigation",
          desc: "Our engineers analyze the reported issue.",
        },
        {
          step: "3",
          title: "Resolution",
          desc: "We provide a solution or workaround.",
        },
        {
          step: "4",
          title: "Follow-up",
          desc: "Ensure your issue is fully resolved.",
        },
      ].map((item) => (

        <div
          key={item.step}
          className="rounded-3xl bg-slate-50 p-8 text-center shadow-lg"
        >

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-cyan-500 text-2xl font-black text-white">

            {item.step}

          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 text-slate-600 leading-7">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Knowledge Base */}

<section className="bg-slate-100 py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <HelpCircle className="mx-auto h-12 w-12 text-blue-600" />

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        Popular Help Topics
      </h2>

    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {[
        "ERP Installation Guide",
        "Account & Login Issues",
        "Billing & Subscription",
        "Payment Gateway Setup",
        "Cloud Deployment",
        "Database Backup & Restore",
      ].map((topic) => (

        <div
          key={topic}
          className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl"
        >

          <h3 className="text-xl font-bold text-slate-900">
            {topic}
          </h3>

          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-2 text-blue-700 font-semibold"
          >
            Read Article
            <ArrowRight size={16} />
          </Link>

        </div>

      ))}

    </div>

  </div>

</section>
{/* Customer Testimonials */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-cyan-100 px-5 py-2 font-semibold text-cyan-700">
        Customer Feedback
      </span>

      <h2 className="mt-6 text-5xl font-black text-slate-900">
        What Our Clients Say
      </h2>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          name: "Rahul Kumar",
          company: "ABC Industries",
          review:
            "Excellent support team. Our ERP issue was resolved within a few hours.",
        },
        {
          name: "Puja Paswan",
          company: "Anand Jivan Foundation Trust",
          review:
            "Professional guidance during ERP implementation and excellent after-sales support.",
        },
        {
          name: "Amit Singh",
          company: "XYZ School",
          review:
            "Very responsive technical team. School ERP support is outstanding.",
        },
      ].map((item) => (

        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-slate-50 p-8 shadow-lg"
        >
          <div className="mb-6 text-4xl">⭐⭐⭐⭐⭐</div>

          <p className="leading-8 text-slate-600">
            "{item.review}"
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-black">{item.name}</h3>
            <p className="text-slate-500">{item.company}</p>
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
          "How do I create a support ticket?",
          "You can contact us through the Contact page or your customer portal to raise a support request.",
        ],
        [
          "What are your support hours?",
          "Our standard support hours are Monday to Saturday, 9:00 AM to 6:00 PM IST.",
        ],
        [
          "Do you provide remote support?",
          "Yes. We provide secure remote support using approved remote access tools whenever required.",
        ],
        [
          "Is priority support available?",
          "Yes. Priority support is available for eligible enterprise customers under applicable support plans.",
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

{/* Contact Information */}

<section className="bg-white py-20">

  <div className="mx-auto max-w-7xl px-6">

    <div className="rounded-[36px] bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-12 text-white shadow-2xl">

      <h2 className="text-center text-5xl font-black">
        Contact Support
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

          <div className="text-4xl">📞</div>

          <h3 className="mt-4 text-xl font-bold">
            Phone
          </h3>

          <p className="mt-2 text-cyan-100">
            +91 9155751363
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

          <div className="text-4xl">📧</div>

          <h3 className="mt-4 text-xl font-bold">
            Email
          </h3>

          <p className="mt-2 break-all text-cyan-100">
            support@arikasoft.com
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

          <div className="text-4xl">🕒</div>

          <h3 className="mt-4 text-xl font-bold">
            Working Hours
          </h3>

          <p className="mt-2 text-cyan-100">
            Mon - Sat
            <br />
            09:00 AM – 06:00 PM
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">

          <div className="text-4xl">📍</div>

          <h3 className="mt-4 text-xl font-bold">
            Office
          </h3>

          <p className="mt-2 text-cyan-100">
            Darbhanga,
            <br />
            Bihar, India
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* CTA */}

<section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24">

  <div className="mx-auto max-w-5xl px-6 text-center text-white">

    <h2 className="text-5xl font-black">
      Still Need Assistance?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
      Our support engineers are ready to help you with ERP,
      CRM, Mobile Apps, Cloud Hosting, Billing Software,
      Website Development and other technical issues.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-700 hover:bg-slate-100"
      >
        Contact Support
      </Link>

      <Link
        href="/pricing"
        className="rounded-xl border border-white px-10 py-4 text-lg font-bold text-white hover:bg-white/10"
      >
        View Plans
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}