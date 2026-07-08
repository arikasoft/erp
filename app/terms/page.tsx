"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    FileText,
    Scale,
    ShieldCheck,
    ArrowRight,
} from "lucide-react";

export default function TermsPage() {
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

                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-cyan-300">

                            <Scale size={18} />

                            Terms & Conditions

                        </span>

                        <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

                            Terms of

                            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                                Service

                            </span>

                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">

                            Please read these Terms & Conditions carefully before
                            using ArikaSoft Technologies products, websites,
                            ERP platforms and cloud services.

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
                                "Introduction",
                                "Acceptance",
                                "Services",
                                "Payments",
                                "User Responsibilities",
                                "Intellectual Property",
                                "Termination",
                                "Limitation of Liability",
                                "Privacy",
                                "Contact",
                            ].map((item) => (

                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="block rounded-xl px-4 py-3 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                                >
                                    {item}
                                </a>

                            ))}

                        </nav>

                    </aside>

                    {/* Main */}

                    <div className="space-y-8 lg:col-span-3">

                        <div className="rounded-3xl bg-white p-8 shadow-xl">

                            <div className="flex items-center justify-between">

                                <div>

                                    <h2 className="text-3xl font-black">
                                        Terms & Conditions
                                    </h2>

                                    <p className="mt-2 text-slate-500">
                                        Last Updated: July 2026
                                    </p>

                                </div>

                                <FileText
                                    className="text-blue-600"
                                    size={40}
                                />

                            </div>

                        </div>

                        {/* Introduction */}

                        <motion.section
                            id="introduction"
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
                                    Introduction
                                </h2>

                            </div>

                            <p className="mt-6 leading-8 text-slate-600">

                                These Terms & Conditions govern your use of
                                ArikaSoft Technologies websites,
                                ERP software,
                                mobile applications,
                                cloud platforms,
                                APIs and related services.

                            </p>

                            <p className="mt-6 leading-8 text-slate-600">

                                By accessing or using our services,
                                you agree to comply with these terms.
                                If you do not agree,
                                please discontinue use of our services.

                            </p>

                        </motion.section>

                        {/* Acceptance */}

                        <motion.section
                            id="acceptance"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Acceptance of Terms
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">

                                By creating an account, purchasing a product,
                                subscribing to our services or using our website,
                                you confirm that you have read,
                                understood and accepted these Terms & Conditions.

                            </p>

                        </motion.section>

                        {/* Services */}

                        <motion.section
                            id="services"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Services
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                ArikaSoft Technologies provides ERP solutions, CRM systems,
                                mobile applications, website development, cloud hosting,
                                AI solutions, software consulting and related digital services.
                                The scope of each service is governed by the applicable proposal,
                                quotation or service agreement.
                            </p>

                        </motion.section>

                        {/* Payment Terms */}

                        <motion.section
                            id="payments"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Payment Terms
                            </h2>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Payments must be made according to the agreed quotation or invoice.",
                                    "Subscription services renew according to the selected billing cycle unless cancelled.",
                                    "Late payments may result in suspension of services.",
                                    "Applicable taxes, including GST, are charged separately where required.",
                                    "Payment gateway processing fees are subject to the provider's terms.",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="rounded-xl bg-blue-50 p-5"
                                    >
                                        {item}
                                    </div>

                                ))}

                            </div>

                        </motion.section>

                        {/* User Responsibilities */}

                        <motion.section
                            id="user-responsibilities"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                User Responsibilities
                            </h2>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">

                                {[
                                    "Provide accurate account information.",
                                    "Keep login credentials confidential.",
                                    "Use the services in compliance with applicable laws.",
                                    "Maintain backups where appropriate.",
                                    "Report security issues promptly.",
                                    "Avoid unauthorized access attempts.",
                                    "Respect intellectual property rights.",
                                    "Use services responsibly.",
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

                        {/* Prohibited Uses */}

                        <motion.section
                            id="prohibited-uses"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Prohibited Uses
                            </h2>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Attempting unauthorized access to systems or data.",
                                    "Using our services for illegal, fraudulent or harmful activities.",
                                    "Uploading malware, viruses or malicious code.",
                                    "Reverse engineering software where prohibited by law or agreement.",
                                    "Violating the rights or privacy of other users.",
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

                        {/* Intellectual Property */}

                        <motion.section
                            id="intellectual-property"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Intellectual Property
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                All trademarks, logos, software, source code, documentation,
                                designs and other intellectual property remain the property
                                of ArikaSoft Technologies or its licensors unless expressly
                                transferred through a written agreement.
                            </p>

                        </motion.section>

                        {/* Limitation of Liability */}

                        <motion.section
                            id="limitation-of-liability"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Limitation of Liability
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                To the maximum extent permitted by applicable law,
                                ArikaSoft Technologies shall not be liable for indirect,
                                incidental, special or consequential damages arising
                                from the use or inability to use our services.
                            </p>

                        </motion.section>

                        {/* Privacy */}

                        <motion.section
                            id="privacy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Privacy & Data Protection
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                Your use of our services is also governed by our Privacy Policy.
                                We implement appropriate technical and organizational measures
                                to safeguard personal information and comply with applicable
                                data protection requirements.
                            </p>

                        </motion.section>

                        {/* Termination */}

                        <motion.section
                            id="termination"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-500 p-10 text-white shadow-xl"
                        >

                            <h2 className="text-4xl font-black">
                                Termination
                            </h2>

                            <p className="mt-6 leading-8 text-cyan-100">
                                We may suspend or terminate access to our services if these
                                Terms & Conditions are materially violated, or where required
                                to protect our systems, customers or comply with legal obligations.
                            </p>

                        </motion.section>
{/* FAQ */}

<section className="rounded-3xl bg-white p-10 shadow-xl">

  <h2 className="text-center text-4xl font-black text-slate-900">
    Frequently Asked Questions
  </h2>

  <div className="mt-10 space-y-5">

    {[
      [
        "Can these Terms & Conditions change?",
        "Yes. We may update these Terms from time to time. The latest version will always be published on this page."
      ],
      [
        "What happens if I violate these terms?",
        "We may suspend or terminate access to our services if there is a material breach of these Terms or applicable law."
      ],
      [
        "Do these terms apply to all products?",
        "Yes. These Terms apply to our websites, ERP software, mobile applications, cloud services and related offerings unless a separate agreement states otherwise."
      ],
      [
        "Where can I read your Privacy Policy?",
        "Please visit our Privacy Policy page to understand how we collect, use and protect your information."
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

{/* Governing Law */}

<section className="rounded-3xl bg-white p-10 shadow-xl">

  <h2 className="text-3xl font-black text-slate-900">
    Governing Law
  </h2>

  <p className="mt-6 leading-8 text-slate-600">
    These Terms & Conditions are governed by the applicable laws of
    India. Any disputes arising from the use of our services shall
    be subject to the jurisdiction specified in the applicable
    agreement or as required by law.
  </p>

</section>

{/* Changes To Terms */}

<section className="rounded-3xl bg-white p-10 shadow-xl">

  <h2 className="text-3xl font-black text-slate-900">
    Changes To These Terms
  </h2>

  <p className="mt-6 leading-8 text-slate-600">
    We may revise these Terms & Conditions periodically to reflect
    changes in our services, technology or legal requirements.
    Continued use of our services after updated Terms become
    effective constitutes acceptance of those changes.
  </p>

</section>

{/* Contact */}

<section
  id="contact"
  className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-10 text-white shadow-xl"
>

  <h2 className="text-4xl font-black">
    Contact Us
  </h2>

  <p className="mt-5 max-w-3xl leading-8 text-cyan-100">
    If you have any questions regarding these Terms & Conditions,
    please contact our team.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <h3 className="text-xl font-bold">📧 Email</h3>
      <p className="mt-3 break-all text-cyan-100">
        legal@arikasoft.com
      </p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <h3 className="text-xl font-bold">📞 Phone</h3>
      <p className="mt-3 text-cyan-100">
        +91 9155751363
      </p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <h3 className="text-xl font-bold">📍 Office</h3>
      <p className="mt-3 text-cyan-100">
        Darbhanga, Bihar, India
      </p>
    </div>

    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <h3 className="text-xl font-bold">🕒 Office Hours</h3>
      <p className="mt-3 text-cyan-100">
        Monday – Saturday
        <br />
        09:00 AM – 06:00 PM
      </p>
    </div>

  </div>

</section>

{/* CTA */}

<section className="mt-10 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center text-white shadow-xl">

  <h2 className="text-5xl font-black">
    Questions About Our Terms?
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
    Our team is available to explain our agreements, licensing,
    subscriptions and enterprise software services.
  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-5">

    <Link
      href="/contact"
      className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-700 hover:bg-slate-100"
    >
      Contact Us
    </Link>

    <Link
      href="/privacy-policy"
      className="rounded-xl border border-white px-10 py-4 text-lg font-bold text-white hover:bg-white/10"
    >
      Privacy Policy
    </Link>

  </div>

</section>

{/* Footer Note */}

<footer className="mt-10 rounded-3xl bg-slate-950 px-8 py-10 text-center text-slate-400">

  <h3 className="text-2xl font-bold text-white">
    ArikaSoft Technologies
  </h3>

  <p className="mt-4">
    ERP • CRM • HRMS • Mobile Apps • AI • Cloud Solutions
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