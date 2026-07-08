"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Database,
    FileText,
    ArrowRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-100">

            {/* Hero */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700">

                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

                <div className="relative mx-auto max-w-7xl px-6 py-24">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .7 }}
                        className="text-center"
                    >

                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 text-cyan-300">

                            <ShieldCheck size={18} />

                            Privacy Policy

                        </span>

                        <h1 className="mt-8 text-5xl font-black text-white lg:text-7xl">

                            Your Privacy

                            <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">

                                Matters To Us

                            </span>

                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-100">

                            We are committed to protecting your personal
                            information and ensuring transparency about
                            how your data is collected, used and secured.

                        </p>

                    </motion.div>

                </div>

            </section>

            {/* Content */}

            <section className="mx-auto -mt-10 max-w-7xl px-6 pb-20">

                <div className="grid gap-8 lg:grid-cols-4">

                    {/* Sidebar */}

                    <aside className="rounded-3xl bg-white p-8 shadow-xl">

                        <h2 className="text-2xl font-black text-slate-900">

                            Contents

                        </h2>

                        <nav className="mt-8 space-y-4">

                            {[
                                "Introduction",
                                "Information We Collect",
                                "How We Use Information",
                                "Cookies Policy",
                                "Data Security",
                                "Third Party Services",
                                "User Rights",
                                "Children's Privacy",
                                "Policy Updates",
                                "Contact Us",
                            ].map((item) => (

                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}
                                    className="block rounded-xl px-4 py-3 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
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

                            <div className="flex flex-wrap items-center justify-between gap-4">

                                <div>

                                    <h2 className="text-3xl font-black text-slate-900">

                                        Privacy Policy

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

                                <Lock
                                    className="text-blue-600"
                                    size={34}
                                />

                                <h2 className="text-3xl font-black text-slate-900">

                                    Introduction

                                </h2>

                            </div>

                            <p className="mt-6 leading-8 text-slate-600">

                                ArikaSoft Technologies is committed to
                                protecting your privacy. This Privacy Policy
                                explains how we collect, use, store,
                                process and safeguard your personal
                                information when you visit our website,
                                use our ERP software, mobile applications,
                                cloud services or contact our team.

                            </p>

                            <p className="mt-6 leading-8 text-slate-600">

                                By using our services, you agree to the
                                practices described in this Privacy Policy.
                                We encourage you to read this policy
                                carefully before providing any personal data.

                            </p>

                        </motion.section>

                        {/* Information We Collect */}

                        <motion.section
                            id="information-we-collect"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <div className="flex items-center gap-4">

                                <Database
                                    className="text-blue-600"
                                    size={34}
                                />

                                <h2 className="text-3xl font-black text-slate-900">
                                    Information We Collect
                                </h2>

                            </div>

                            <p className="mt-6 leading-8 text-slate-600">

                                We may collect personal information such as your
                                full name, email address, phone number,
                                organization name, billing information,
                                account credentials and any information
                                you voluntarily provide through our website
                                or ERP platform.

                            </p>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">

                                {[
                                    "Full Name",
                                    "Email Address",
                                    "Phone Number",
                                    "Organization Name",
                                    "Billing Information",
                                    "Device Information",
                                    "Browser Details",
                                    "Usage Analytics",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl bg-slate-100 p-4"
                                    >

                                        <ShieldCheck
                                            className="text-green-600"
                                            size={18}
                                        />

                                        {item}

                                    </div>

                                ))}

                            </div>

                        </motion.section>

                        {/* How We Use Information */}

                        <motion.section
                            id="how-we-use-information"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                How We Use Your Information
                            </h2>

                            <div className="mt-8 space-y-5">

                                {[
                                    "Provide ERP software and cloud services.",
                                    "Process registrations and user accounts.",
                                    "Improve our products and customer experience.",
                                    "Respond to enquiries and support requests.",
                                    "Send important service updates.",
                                    "Ensure security and fraud prevention.",
                                    "Generate reports and analytics.",
                                    "Comply with legal obligations.",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-4 rounded-xl bg-blue-50 p-5"
                                    >

                                        <ShieldCheck
                                            className="mt-1 text-blue-600"
                                            size={18}
                                        />

                                        <p className="leading-7 text-slate-700">

                                            {item}

                                        </p>

                                    </div>

                                ))}

                            </div>

                        </motion.section>

                        {/* Cookies */}

                        <motion.section
                            id="cookies-policy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">

                                Cookies Policy

                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">

                                Our website uses cookies and similar technologies
                                to improve user experience, remember preferences,
                                analyze traffic and enhance website performance.
                                You may disable cookies through your browser settings,
                                although some features may not function properly.

                            </p>

                        </motion.section>

                        {/* Data Security */}

                        <motion.section
                            id="data-security"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">

                                Data Security

                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">

                                We implement industry-standard security measures
                                including SSL encryption, secure authentication,
                                access control, encrypted backups,
                                firewalls and continuous monitoring
                                to protect your information.

                            </p>

                        </motion.section>

                        {/* Third Party */}

                        <motion.section
                            id="third-party-services"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">

                                Third-Party Services

                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">

                                We may integrate trusted third-party services
                                including payment gateways, cloud hosting,
                                analytics, authentication providers
                                and communication services.
                                These providers maintain their own privacy policies.

                            </p>

                        </motion.section>

                        {/* User Rights */}

                        <motion.section
                            id="user-rights"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">

                                Your Rights

                            </h2>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">

                                {[
                                    "Access your personal information",
                                    "Correct inaccurate data",
                                    "Delete your account",
                                    "Request data export",
                                    "Withdraw consent",
                                    "Restrict processing",
                                    "Object to marketing",
                                    "Contact our privacy team",
                                ].map((right) => (

                                    <div
                                        key={right}
                                        className="flex items-center gap-3 rounded-xl bg-green-50 p-4"
                                    >

                                        <ShieldCheck
                                            className="text-green-600"
                                            size={18}
                                        />

                                        {right}

                                    </div>

                                ))}

                            </div>

                        </motion.section>
                        {/* Children's Privacy */}

                        <motion.section
                            id="childrens-privacy"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Children's Privacy
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                Our services are not intended for children under the
                                age of 13 without parental or guardian consent.
                                We do not knowingly collect personal information from
                                children. If such information is discovered, it will be
                                removed as soon as reasonably possible.
                            </p>

                        </motion.section>

                        {/* Policy Updates */}

                        <motion.section
                            id="policy-updates"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="rounded-3xl bg-white p-8 shadow-xl"
                        >

                            <h2 className="text-3xl font-black text-slate-900">
                                Changes To This Privacy Policy
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                We may update this Privacy Policy from time to time to
                                reflect changes in legal requirements, technology,
                                security practices or our services.
                                The latest version will always be available on this page.
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
                                        "Do you sell my personal data?",
                                        "No. We do not sell or rent your personal information to third parties."
                                    ],
                                    [
                                        "Can I request deletion of my data?",
                                        "Yes. You may contact us to request deletion, subject to legal obligations."
                                    ],
                                    [
                                        "How is my information protected?",
                                        "We use encryption, secure authentication, firewalls and regular backups."
                                    ],
                                    [
                                        "Do you use cookies?",
                                        "Yes. Cookies help improve website performance and user experience."
                                    ],
                                ].map(([question, answer]) => (

                                    <div
                                        key={question}
                                        className="rounded-2xl border border-slate-200 p-6"
                                    >

                                        <h3 className="text-xl font-bold text-slate-900">
                                            {question}
                                        </h3>

                                        <p className="mt-3 leading-7 text-slate-600">
                                            {answer}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </section>

                        {/* Contact */}

                        <section
                            id="contact-us"
                            className="rounded-3xl bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700 p-10 text-white shadow-xl"
                        >

                            <h2 className="text-4xl font-black">
                                Contact Our Privacy Team
                            </h2>

                            <p className="mt-5 max-w-3xl leading-8 text-cyan-100">
                                If you have any questions regarding this Privacy Policy
                                or your personal information, please contact us.
                            </p>

                            <div className="mt-10 grid gap-6 md:grid-cols-2">

                                <div className="rounded-2xl bg-white/10 p-6">

                                    <h3 className="text-xl font-bold">
                                        Email
                                    </h3>

                                    <p className="mt-3 text-cyan-100">
                                        privacy@arikasoft.com
                                    </p>

                                </div>

                                <div className="rounded-2xl bg-white/10 p-6">

                                    <h3 className="text-xl font-bold">
                                        Office
                                    </h3>

                                    <p className="mt-3 text-cyan-100">
                                        Darbhanga, Bihar - 846005, India
                                    </p>

                                </div>

                            </div>

                        </section>

                        {/* CTA */}

                        <section className="mt-10 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 to-cyan-500 p-12 text-center text-white shadow-xl">

                            <h2 className="text-5xl font-black">
                                Your Trust Is Our Priority
                            </h2>

                            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
                                We continuously improve our privacy and security
                                practices to keep your information safe and secure.
                            </p>

                            <div className="mt-10 flex flex-wrap justify-center gap-5">

                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-700 hover:bg-slate-100"
                                >
                                    Contact Us
                                </Link>

                                <Link
                                    href="/terms"
                                    className="rounded-xl border border-white px-10 py-4 text-lg font-bold hover:bg-white/10"
                                >
                                    Terms & Conditions
                                </Link>

                            </div>

                        </section>

                        {/* Legal Notice */}

                        <footer className="mt-10 rounded-3xl bg-white p-8 text-center shadow-xl">

                            <p className="text-slate-600 leading-7">
                                © {new Date().getFullYear()} <strong>ArikaSoft Technologies</strong>.
                                All rights reserved.
                                This Privacy Policy applies to our website, ERP platform,
                                mobile applications and related services.
                            </p>

                        </footer>

                    </div>

                </div>

            </section>

        </main>
    );
}