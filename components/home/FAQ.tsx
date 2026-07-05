"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does ArikaSoft provide?",
    answer:
      "We provide ERP, CRM, HRMS, Mobile Apps, Website Development, AI Solutions, Cloud Services and Custom Software Development.",
  },
  {
    question: "Do you develop custom software?",
    answer:
      "Yes. We build fully customized enterprise software according to your business requirements.",
  },
  {
    question: "Do you provide ERP for NGOs, Schools and Hospitals?",
    answer:
      "Yes. We have specialized ERP solutions for NGOs, Educational Institutions, Hospitals, Manufacturing and Retail Businesses.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Our primary stack includes Next.js, React, Node.js, Laravel, PHP, Python, MySQL, PostgreSQL, Docker, AWS and Supabase.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Yes. We integrate Razorpay, PhonePe, Cashfree, PayU, Stripe and other payment gateways.",
  },
  {
    question: "Do you provide annual maintenance?",
    answer:
      "Yes. We provide Annual Maintenance Contracts (AMC), server monitoring, backups and software updates.",
  },
  {
    question: "How long does development take?",
    answer:
      "Depending on the project scope, development can take anywhere from 2 weeks to several months.",
  },
  {
    question: "Do you provide cloud deployment?",
    answer:
      "Yes. We deploy applications on AWS, Azure, DigitalOcean, Hostinger VPS and other cloud platforms.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FAQs
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Find answers to common questions about our software,
            development process and enterprise solutions.
          </p>

        </motion.div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
              >

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <h3 className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition ${
                      open ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >

                      <p className="px-8 pb-6 leading-8 text-slate-600">

                        {faq.answer}

                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}