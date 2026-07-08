"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  RefreshCw,
  ShieldCheck,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function RefundPolicyPage() {
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

              <RefreshCw size={18} />

              Refund Policy

            </span>

            <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

              Refund &

              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                Cancellation Policy

              </span>

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">

              Please read our refund and cancellation policy
              carefully before purchasing any software,
              ERP subscription, cloud service or digital solution.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto -mt-10 max-w-7xl px-6 pb-20">

        <div className="grid gap-8 lg:grid-cols-4">

          {/* Sidebar */}

          <aside className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-2xl font-black">

              Contents

            </h2>

            <nav className="mt-8 space-y-4">

              {[
                "Overview",
                "Refund Eligibility",
                "Non-Refundable Items",
                "Cancellation",
                "Processing Time",
                "Exceptions",
                "Contact",
              ].map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                >

                  {item}

                </a>

              ))}

            </nav>

          </aside>

          {/* Main */}

          <div className="space-y-8 lg:col-span-3">

            {/* Last Updated */}

            <div className="rounded-3xl bg-white p-8 shadow-xl">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-black">

                    Refund Policy

                  </h2>

                  <p className="mt-2 text-slate-500">

                    Last Updated: July 2026

                  </p>

                </div>

                <FileText
                  className="text-blue-600"
                  size={38}
                />

              </div>

            </div>

            {/* Overview */}

            <motion.section
              id="overview"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <div className="flex items-center gap-4">

                <ShieldCheck
                  className="text-blue-600"
                  size={34}
                />

                <h2 className="text-3xl font-black">

                  Policy Overview

                </h2>

              </div>

              <p className="mt-6 leading-8 text-slate-600">

                At ArikaSoft Technologies,
                customer satisfaction is important to us.
                Since most of our offerings are digital products,
                software licenses,
                ERP subscriptions,
                cloud services,
                mobile applications and custom development,
                refunds are governed by the terms below.

              </p>

              <p className="mt-6 leading-8 text-slate-600">

                By purchasing any product or service,
                you acknowledge and agree to this Refund Policy.

              </p>

            </motion.section>

            {/* Refund Eligibility */}

            <motion.section
              id="refund-eligibility"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-3xl font-black text-slate-900">
                Refund Eligibility
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Refund requests may be considered only in situations where
                the purchased service cannot be delivered due to our inability
                to fulfill the agreed scope or where required by applicable law.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                {[
                  "Duplicate payment",
                  "Technical issue preventing activation",
                  "Incorrect billing caused by us",
                  "Order cancelled before work starts",
                  "Payment made by mistake (subject to verification)",
                  "Refund approved after internal review",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-green-50 p-4"
                  >

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white">

                      ✓

                    </span>

                    {item}

                  </div>

                ))}

              </div>

            </motion.section>

            {/* Non Refundable */}

            <motion.section
              id="non-refundable-items"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-3xl font-black text-slate-900">
                Non-Refundable Products & Services
              </h2>

              <div className="mt-8 space-y-4">

                {[
                  "Custom software development after work has started.",
                  "Website development after design approval.",
                  "ERP implementation and customization services already delivered.",
                  "Domain registration and web hosting charges.",
                  "Digital downloads, source code and software licenses.",
                  "Third-party subscriptions, API fees and payment gateway charges.",
                  "Consulting, training and implementation services already completed.",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border-l-4 border-red-500 bg-red-50 p-5"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </motion.section>

            {/* Cancellation */}

            <motion.section
              id="cancellation"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-3xl font-black text-slate-900">
                Cancellation Policy
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Orders may be cancelled before project execution or service
                activation. Once development, implementation or deployment has
                begun, cancellation requests may not be eligible for a refund.
              </p>

            </motion.section>

            {/* Refund Timeline */}

            <motion.section
              id="processing-time"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-3xl font-black text-slate-900">
                Refund Processing Time
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-3">

                {[
                  ["1", "Refund Request Submitted"],
                  ["2", "Verification & Review"],
                  ["3", "Approved Refund Processed"],
                ].map(([step, title]) => (

                  <div
                    key={title}
                    className="rounded-2xl bg-slate-100 p-8 text-center"
                  >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-black text-white">

                      {step}

                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {title}
                    </h3>

                  </div>

                ))}

              </div>

              <p className="mt-8 leading-8 text-slate-600">
                Approved refunds are generally processed within
                <strong> 7–14 business days</strong>, depending on the
                original payment method and banking timelines.
              </p>

            </motion.section>

            {/* Exceptions */}

            <motion.section
              id="exceptions"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <h2 className="text-3xl font-black text-slate-900">
                Exceptions
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Certain refunds may be approved at our sole discretion in
                exceptional circumstances such as duplicate payments,
                billing errors or legal obligations. Each request is reviewed
                individually.
              </p>

            </motion.section>

            {/* Refund Request */}

            <motion.section
              className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-10 text-white shadow-xl"
            >

              <h2 className="text-4xl font-black">
                How To Request A Refund
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  "Email our support team with your order details.",
                  "Provide your invoice or payment reference.",
                  "Explain the reason for the refund request.",
                  "Our team will review and respond within 3–5 business days.",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl bg-white/10 p-5 backdrop-blur"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </motion.section>
            {/* FAQ */}

            <section className="rounded-3xl bg-white p-10 shadow-xl">

              <h2 className="text-center text-4xl font-black text-slate-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-10 space-y-5">

                {[
                  [
                    "How do I request a refund?",
                    "Send your request with your invoice number and payment details to our support email. Our team will review your request and respond within 3–5 business days.",
                  ],
                  [
                    "How long does a refund take?",
                    "Approved refunds are generally processed within 7–14 business days depending on your payment provider.",
                  ],
                  [
                    "Are software licenses refundable?",
                    "Software licenses, source code, custom development and completed implementation services are generally non-refundable.",
                  ],
                  [
                    "Can I cancel my subscription?",
                    "Yes. Future renewals can be cancelled according to your subscription terms. Charges already incurred are generally not refundable unless required by law or otherwise agreed.",
                  ],
                ].map(([question, answer]) => (

                  <div
                    key={question}
                    className="rounded-2xl border border-slate-200 p-6"
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

            </section>

            {/* Contact */}

            <section
              id="contact"
              className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-10 text-white shadow-xl"
            >

              <h2 className="text-4xl font-black">
                Need Help With A Refund?
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-cyan-100">
                If you have any questions about payments, cancellations
                or refunds, our support team is ready to assist you.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-xl font-bold">
                    📧 Email
                  </h3>

                  <p className="mt-3 break-all text-cyan-100">
                    support@arikasoft.com
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-xl font-bold">
                    📞 Phone
                  </h3>

                  <p className="mt-3 text-cyan-100">
                    +91 9155751363
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-xl font-bold">
                    🕒 Support Hours
                  </h3>

                  <p className="mt-3 text-cyan-100">
                    Mon - Sat
                    <br />
                    9:00 AM – 6:00 PM
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-xl font-bold">
                    📍 Office
                  </h3>

                  <p className="mt-3 text-cyan-100">
                    Darbhanga,
                    Bihar - 846005,
                    India
                  </p>

                </div>

              </div>

            </section>

            {/* CTA */}

            <section className="mt-10 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center text-white shadow-xl">

              <h2 className="text-5xl font-black">
                Need More Information?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
                Contact our sales or support team for assistance with
                subscriptions, billing, ERP implementation and custom software services.
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
                  className="rounded-xl border border-white px-10 py-4 text-lg font-bold hover:bg-white/10"
                >
                  View Pricing
                </Link>

              </div>

            </section>

            {/* Legal Notice */}

            <section className="mt-10 rounded-3xl bg-white p-8 shadow-xl">

              <h2 className="text-2xl font-black text-slate-900">
                Legal Notice
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                This Refund & Cancellation Policy forms part of our Terms &
                Conditions. Refund decisions are made in accordance with the
                applicable agreement, governing law and the specific facts of
                each request. Nothing in this policy limits any rights that
                cannot be excluded under applicable consumer protection laws.
              </p>

            </section>

            {/* Footer */}

            <footer className="mt-10 rounded-3xl bg-slate-950 px-8 py-10 text-center text-slate-400">

              <h3 className="text-2xl font-bold text-white">
                ArikaSoft Technologies
              </h3>

              <p className="mt-4">
                ERP • CRM • Billing • Mobile Apps • Cloud Solutions • AI Software
              </p>

              <div className="mt-6 border-t border-slate-800 pt-6">

                <p>
                  © {new Date().getFullYear()} ArikaSoft Technologies.
                  All Rights Reserved.
                </p>

              </div>

            </footer>

          </div>

        </div>

      </section>

    </main>
  );
}