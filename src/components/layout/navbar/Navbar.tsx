"use client";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, GraduationCap, LayoutDashboard, LayoutDashboardIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useUserSession } from "@/lib/sessions/session";
// import { useUserToken } from "@/lib/sessions/token";

// নিজের auth hook import করবে
// import { useSession } from "@/lib/auth-client";

type User = {
  name: string;
  email: string;
  image: string;
};

export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }


  /*
    নিজের session বসাবে

    const { data: session, status } = useSession();

    const user = session?.user;
  */

  // Demo

  const { session, isPending } = useUserSession()

  const user = session?.user;
  console.log(session, 'session')

  // const user: User | null = null;

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
    {
      title: "Contact",
      href: "/contact",
    },
    ...(user?.role === 'user'
      ? [
        {
          title: "Apply",
          href: "/apply",
        },
      ]
      : []),
      ...(user?.role === 'admin' || user?.role === 'student'  || user?.role === 'teacher'
      ? [
        {
          title: "Help Desk",
          href: "/help-desk",
        },
      ]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070B14]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2">
            <GraduationCap className="text-white" size={20} />
          </div>

          <h2 className="text-2xl font-bold text-white">
            Micro
            <span className="text-cyan-400">Learn</span>
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
                  className={`transition-all duration-300 ${active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-white"
                    }`}
                >
                  {item.title}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}

        <div className="hidden items-center gap-6 md:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-slate-400 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-semibold text-white transition hover:scale-105"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {
                user?.role !== 'user' && <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 font-medium text-cyan-400 transition hover:bg-cyan-500/20"
                >
                  <LayoutDashboardIcon size={18} />
                  Dashboard
                </Link>
              }

              <Link
                href="/profile"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-white/10"
              >

                <Image
                  src={user?.image}
                  unoptimized
                  alt={user.name}
                  width={42}
                  height={42}
                  className="h-10 w-10 rounded-full object-cover"
                />



                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {user.name}
                  </span>

                  <span className="text-xs text-slate-400">
                    View Profile
                  </span>
                </div>
              </Link>

              <button
                type="button"
                onClick={signOut}
                className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
              >
                Logout
              </button>
            </>

          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="overflow-hidden border-t border-white/5 bg-[#070B14]"
          >
            <div className="md:hidden space-y-5 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-lg ${pathname === item.href
                    ? "text-cyan-400"
                    : "text-slate-400"
                    }`}
                >
                  {item.title}
                </Link>
              ))}

              <div className="border-t border-white/10 pt-5">
                {!user ? (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-slate-300"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="block py-2 font-semibold text-cyan-400"
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    {
                      user?.role !== 'user' && <Link
                        href="/dashboard"
                        className="inline-flex my-3 w-full items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 font-medium text-cyan-400 transition hover:bg-cyan-500/20"
                      >
                        <LayoutDashboardIcon size={18} />
                        Dashboard
                      </Link>
                    }
                    <Link
                      href="/profile"
                      className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <Image
                        src={user?.image}
                        unoptimized
                        alt={user.name}
                        width={42}
                        height={42}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">
                          {user.name}
                        </span>

                        <span className="text-xs text-slate-400">
                          View Profile
                        </span>
                      </div>
                    </Link>

                    <button
                      type="button"
                      onClick={signOut}
                      className="rounded-xl border w-full border-red-500/30 mt-3 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}