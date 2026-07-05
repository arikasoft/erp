"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [step, setStep] = useState<1 | 2>(1);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  async function sendOTP() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message);
        return;
      }

      setMessage("OTP sent successfully.");
      setStep(2);
    } catch {
      setMessage("Unable to send OTP.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyOTP() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          code: otp,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setMessage(data.message);
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setMessage("Verification failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 px-6">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

        {/* LEFT */}

        <div className="hidden bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-600 p-12 text-white lg:flex lg:flex-col lg:justify-center">

          <span className="w-fit rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
            ArikaSoft ERP
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight">
            Secure OTP
            <br />
            Login
          </h1>

          <p className="mt-6 text-slate-300">
            Login securely using your registered mobile number.
          </p>

          <div className="mt-12 space-y-4">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" />
              Enterprise Security
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" />
              OTP Authentication
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" />
              24×7 Secure Access
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-10 lg:p-14">

          <h2 className="text-center text-4xl font-black">
            Login
          </h2>

          <p className="mt-3 text-center text-slate-500">
            Login using your registered mobile number
          </p>

          {message && (
            <div className="mt-6 rounded-xl bg-slate-100 p-4 text-center text-sm">
              {message}
            </div>
          )}

          {step === 1 && (
            <div className="mt-10 space-y-6">

              <div>

                <label className="mb-2 block font-medium">
                  Mobile Number
                </label>

                <div className="flex items-center rounded-xl border px-4">

                  <Smartphone
                    size={20}
                    className="text-slate-400"
                  />

                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3 py-4 outline-none"
                  />

                </div>

              </div>

              <button
                onClick={sendOTP}
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white"
              >
                {loading ? "Sending..." : "Send OTP"}

                <ArrowRight className="ml-2" size={18} />
              </button>

            </div>
          )}

          {step === 2 && (
            <div className="mt-10 space-y-6">

              <div>

                <label className="mb-2 block font-medium">
                  OTP
                </label>

                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  placeholder="Enter 6 digit OTP"
                  className="w-full rounded-xl border px-5 py-4 text-center text-2xl tracking-[10px] outline-none"
                />

              </div>

              <button
                onClick={verifyOTP}
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 py-4 font-semibold text-white"
              >
                {loading ? "Verifying..." : "Verify & Login"}
              </button>

              <button
                onClick={sendOTP}
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl border py-4"
              >
                <RefreshCw
                  size={18}
                  className="mr-2"
                />

                Resend OTP
              </button>

            </div>
          )}

          <p className="mt-10 text-center text-sm text-slate-500">
            Need help?

            <Link
              href="/contact"
              className="ml-2 font-semibold text-blue-600"
            >
              Contact Support
            </Link>
          </p>

        </div>

      </div>

    </main>
  );
}