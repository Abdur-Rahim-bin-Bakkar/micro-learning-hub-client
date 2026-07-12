"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#0B0F14]/90 px-5 backdrop-blur-xl lg:hidden">
        <h1 className="text-lg font-bold text-white">
          Admin Dashboard
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform transition-transform duration-300 ease-in-out lg:hidden ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="relative h-full">

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-xl border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {/* Sidebar */}
          <Sidebar onLinkClick={() => setOpen(false)} />
        </div>
      </aside>
    </>
  );
}