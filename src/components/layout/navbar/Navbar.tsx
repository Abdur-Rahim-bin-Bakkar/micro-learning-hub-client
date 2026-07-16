"use client";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, GraduationCap, LayoutDashboardIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useUserSession } from "@/lib/sessions/session";

export default function Navbar() {
  const router = useRouter();
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
  };

  const { session, isPending } = useUserSession();
  const user = session?.user;
  console.log(session, 'session');

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
    ...(user?.role === 'admin' || user?.role === 'student' || user?.role === 'teacher'
      ? [
        {
          title: "Help Desk",
          href: "/help-desk",
        },
      ]
      : []),
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#0F172A]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 active:scale-95 transition-transform">
          <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-2 shadow-lg shadow-cyan-500/20">
            <GraduationCap className="text-slate-950" size={20} strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-wider">
            M<span className="text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">L</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`transition-all duration-300 ${active
                    ? "text-cyan-400 font-semibold"
                    : "text-slate-400 group-hover:text-slate-100"
                    }`}
                >
                  {item.title}
                </span>

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-500 shadow-[0_0_12px_#06b6d4] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-600 shadow-md shadow-cyan-500/10 active:scale-95"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {user?.role !== 'user' && (
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all duration-200 hover:bg-cyan-500/10 active:scale-95"
                >
                  <LayoutDashboardIcon size={16} />
                  Dashboard
                </Link>
              )}

              {/* Profile Card (Now a standard Div, NOT linkable) */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-1.5 select-none">
                {user?.image ? (
                  <Image
                    src={user.image}
                    unoptimized
                    alt={user.name}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-800"
                  />
                ) : (
                  <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-cyan-500">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 line-clamp-1 max-w-[120px]">
                    {user.name}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                    {user?.role || "Member"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={signOut}
                className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500/10 active:scale-95"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-400 hover:text-white transition md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-800/60 bg-[#0F172A]"
          >
            <div className="md:hidden space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium transition-colors ${pathname === item.href
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  {item.title}
                </Link>
              ))}

              <div className="border-t border-slate-800/80 pt-5 space-y-4">
                {!user ? (
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="text-center py-2.5 text-sm font-medium text-slate-400 hover:text-white transition"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="text-center py-2.5 rounded-xl bg-cyan-500 text-sm font-bold text-slate-950 transition"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {user?.role !== 'user' && (
                      <Link
                        href="/dashboard"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-2.5 text-sm font-medium text-cyan-400"
                      >
                        <LayoutDashboardIcon size={16} />
                        Dashboard
                      </Link>
                    )}

                    {/* Mobile Profile Display (Non-linkable Div) */}
                    <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 select-none">
                      {user?.image ? (
                        <Image
                          src={user.image}
                          unoptimized
                          alt={user.name}
                          width={36}
                          height={36}
                          className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-800"
                        />
                      ) : (
                        <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-cyan-500">
                          {user?.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-200">{user.name}</span>
                        <span className="text-[10px] uppercase font-bold text-slate-500">{user?.role}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        signOut();
                      }}
                      className="w-full rounded-xl border border-red-500/20 bg-red-500/5 py-2.5 text-sm font-semibold text-red-400 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}