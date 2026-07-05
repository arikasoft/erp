export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950">

      <div className="text-center">

        {/* Logo */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 shadow-2xl">

          <span className="text-4xl font-black text-white">
            A
          </span>

        </div>

        {/* Company */}

        <h2 className="mt-8 text-4xl font-black text-white">

          ArikaSoft

        </h2>

        <p className="mt-2 text-slate-400">

          Enterprise Software Solutions

        </p>

        {/* Loader */}

        <div className="mt-10 flex justify-center gap-3">

          <div className="h-4 w-4 animate-bounce rounded-full bg-cyan-400" />

          <div
            className="h-4 w-4 animate-bounce rounded-full bg-blue-500"
            style={{
              animationDelay: ".2s",
            }}
          />

          <div
            className="h-4 w-4 animate-bounce rounded-full bg-sky-400"
            style={{
              animationDelay: ".4s",
            }}
          />

        </div>

        <p className="mt-8 text-sm tracking-widest text-slate-500 uppercase">

          Loading Experience...

        </p>

      </div>

    </main>
  );
}