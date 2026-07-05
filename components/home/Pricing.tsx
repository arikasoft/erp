"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Crown,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/project",
    popular: false,
    features: [
      "Business Website",
      "Responsive Design",
      "Basic SEO",
      "SSL Security",
      "Email Support",
    ],
  },
  {
    name: "Business",
    price: "₹49,999",
    period: "/project",
    popular: true,
    features: [
      "Custom Software",
      "ERP / CRM",
      "Database",
      "API Integration",
      "Admin Panel",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    popular: false,
    features: [
      "Enterprise ERP",
      "AI Solutions",
      "Cloud Deployment",
      "Unlimited Users",
      "Dedicated Manager",
      "24×7 Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            PRICING PLANS
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Flexible Pricing for Every Business
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
            Choose a plan that fits your business needs. Custom enterprise
            solutions are also available.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular
                  ? "border-blue-600 bg-gradient-to-b from-blue-600 to-cyan-500 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >

              {plan.popular && (

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-slate-900">

                  <Crown className="mr-1 inline" size={16} />

                  Most Popular

                </div>

              )}

              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <div className="mt-8">

                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                <span className="ml-2">
                  {plan.period}
                </span>

              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      className={
                        plan.popular
                          ? "text-green-200"
                          : "text-green-600"
                      }
                      size={20}
                    />

                    {feature}

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className={`mt-10 flex items-center justify-center rounded-xl px-6 py-4 font-semibold transition ${
                  plan.popular
                    ? "bg-white text-blue-700 hover:bg-slate-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >

                Get Started

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}