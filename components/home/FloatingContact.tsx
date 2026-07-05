"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
  Bot,
} from "lucide-react";

export default function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">

      {/* AI Assistant */}

      <Link
        href="/contact"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-2xl transition hover:scale-110"
        title="AI Assistant"
      >
        <Bot size={24} />
      </Link>

      {/* WhatsApp */}

      <a
        href="https://wa.me/919296971363"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Call */}

      <a
        href="tel:+919296971363"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition hover:scale-110"
        title="Call Us"
      >
        <Phone size={24} />
      </a>

      {/* Email */}

      <a
        href="mailto:info@arikasoft.com"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-2xl transition hover:scale-110"
        title="Email"
      >
        <Mail size={24} />
      </a>

      {/* Back To Top */}

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-2xl transition hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp size={22} />
        </button>
      )}

    </div>
  );
}