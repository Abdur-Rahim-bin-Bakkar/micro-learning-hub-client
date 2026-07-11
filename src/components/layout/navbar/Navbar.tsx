"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Announcement",
    href: "/announcement",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070B14]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2">
            <GraduationCap className="text-white" size={20} />
          </div>

          <h2 className="text-2xl font-bold text-white">
            Micro<span className="text-cyan-400">Learn</span>
          </h2>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2"
              >
                <span
                  className={`transition-all duration-300 ${
                    active
                      ? "text-white"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                >
                  {item.title}
                </span>

                {/* Active Underline */}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Auth */}

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/login"
            className="text-slate-400 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile */}

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-[#070B14]"
          >
            <div className="space-y-5 px-6 py-6">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block ${
                    pathname === item.href
                      ? "text-cyan-400"
                      : "text-slate-400"
                  }`}
                >
                  {item.title}
                </Link>
              ))}

              <div className="border-t border-white/5 pt-5">
                <Link
                  href="/login"
                  className="block py-2 text-slate-400"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="block py-2 font-semibold text-cyan-400"
                >
                  Register
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}