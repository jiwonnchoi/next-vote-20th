"use client";

import { useState } from "react";
import { Close, Hamburger } from "src/assets/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { href: "/voting", label: "VOTING" },
  { href: "/members", label: "MEMBERS" },
  { href: "/aboutus", label: "ABOUT US" },
  { href: "/login", label: "LOGIN" },
] as const;

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="pc:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-5 z-10"
      >
        <Hamburger width={36} height={36} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)} />
      )}
      <div
        className={`
          fixed top-0 right-0 h-full bg-Grey-900 shadow-lg w-72
          transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-5"
        >
          <Close width={36} height={36} />
        </button>
        <nav className="flex flex-col items-end absolute top-32 right-12 gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`Headline_3 ${
                pathname === item.href ? "text-Main_Blue" : "text-white"
              } hover:text-Main_Blue transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
