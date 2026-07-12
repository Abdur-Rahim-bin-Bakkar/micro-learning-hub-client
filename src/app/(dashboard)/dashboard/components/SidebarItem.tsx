"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  href: string;
  title: string;
  icon: LucideIcon;
  onClick?: () => void;
};

export default function SidebarItem({
  href,
  title,
  icon: Icon,
  onClick,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        group flex items-center gap-3 rounded-2xl px-4 py-3
        transition-all duration-300

        ${
          active
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
            : "text-slate-300 hover:bg-white/10 hover:text-cyan-400"
        }
      `}
    >
      <Icon
        size={20}
        className={`transition ${
          active
            ? "text-white"
            : "text-slate-400 group-hover:text-cyan-400"
        }`}
      />

      <span className="font-medium">{title}</span>
    </Link>
  );
}