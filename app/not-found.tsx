import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="max-w-2xl text-center">

        <h1 className="text-8xl font-black text-cyan-400">

          404

        </h1>

        <h2 className="mt-6 text-5xl font-black text-white">

          Page Not Found

        </h2>

        <p className="mt-6 text-lg text-slate-400">

          Sorry, the page you're looking for doesn't exist
          or has been moved.

        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-400"
        >

          <ArrowLeft
            className="mr-2"
            size={20}
          />

          Back Home

        </Link>

      </div>

    </main>
  );
}