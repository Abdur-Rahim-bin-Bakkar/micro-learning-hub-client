"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/constants/navigation";

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({
  mobile = false,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {navigationLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              transition-all
              duration-300
              ${
                mobile
                  ? "block rounded-lg px-4 py-3"
                  : "px-3 py-2"
              }
              ${
                active
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}