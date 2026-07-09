"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen overflow-hidden items-center justify-center bg-gradient-to-b from-sky-950 via-blue-900 to-cyan-700">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />

      {/* Floating Bubbles */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/20 animate-pulse"
            style={{
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}

      </div>

      {/* Center */}

      <div className="relative z-10 text-center">

        {/* Ripple */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="h-52 w-52 animate-ping rounded-full border border-cyan-300/30" />

        </div>

        {/* Logo */}

        <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 shadow-[0_0_60px_rgba(34,211,238,.6)]">

          <span className="text-6xl font-black text-white">

            A

          </span>

        </div>

        {/* Company */}

        <h1 className="mt-8 text-5xl font-black tracking-wide text-white">

          ArikaSoft

        </h1>

        <p className="mt-3 text-cyan-100">

          Enterprise Software Solutions

        </p>

        {/* Loader */}

        <div className="mt-10 flex justify-center gap-3">

          <div className="h-4 w-4 rounded-full bg-cyan-300 animate-bounce" />

          <div
            className="h-4 w-4 rounded-full bg-white animate-bounce"
            style={{ animationDelay: ".2s" }}
          />

          <div
            className="h-4 w-4 rounded-full bg-sky-300 animate-bounce"
            style={{ animationDelay: ".4s" }}
          />

        </div>

        <p className="mt-8 text-sm uppercase tracking-[6px] text-cyan-100">

          Initializing Experience...

        </p>

      </div>

      {/* Sea Waves */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

        <svg
          className="relative block w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >

          <path
            fill="rgba(255,255,255,.15)"
            d="M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,112C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
              M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,112C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z;

              M0,192L80,186C160,180,320,160,480,170C640,181,800,224,960,213C1120,202,1280,138,1360,128L1440,117L1440,320L0,320Z;

              M0,224L60,218.7C120,213,240,203,360,176C480,149,600,107,720,112C840,117,960,171,1080,181.3C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z
              "
            />
          </path>

        </svg>

      </div>

    </main>
  );
}
