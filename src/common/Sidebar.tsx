"use client";

import { useState, useEffect } from "react";
import { Close, Hamburger } from "src/assets/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookie, deleteCookie } from "@api/http";

const MENU_ITEMS = [
  { href: "/voting", label: "VOTING" },
  { href: "/members", label: "MEMBERS" },
  { href: "/aboutus", label: "ABOUT US" },
] as const;

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("accessToken");
    setIsLogin(!!token);
  }, [isOpen]);

  const handleLogout = () => {
    deleteCookie("accessToken");
    window.localStorage.clear();
    setIsLogin(false);
    setIsOpen(false);
    router.push("/");
  };

  return (
    <div className="pc:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="absolute top-8 right-5 z-10"
      >
        <Hamburger width={36} height={36} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-20" onClick={() => setIsOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-Grey-900 shadow-lg w-72
          transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-5"
        >
          <Close width={36} height={36} />
        </button>
        <nav className="flex flex-col items-end absolute top-32 right-12 gap-8">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="Headline_3 text-white hover:text-Main_Blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {isLogin ? (
            <button
              className="Headline_3 text-white hover:text-Main_Blue transition-colors"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <Link
              href="/login"
              className="Headline_3 text-white hover:text-Main_Blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              LOGIN
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};
