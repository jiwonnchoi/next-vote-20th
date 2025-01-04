"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCookie, deleteCookie } from "@api/http";

const MENU_ITEMS = [
  { href: "/voting", label: "VOTING" },
  { href: "/members", label: "MEMBERS" },
  { href: "/aboutus", label: "ABOUT US" },
] as const;

export const Header = () => {
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
    window.location.reload();
  };

  return (
    <div className="hidden pc:flex absolute w-[90%] border-4 border-Grey-900 justify-between items-center mt-9 z-30 max-w-[85rem]">
      <Link className="w-1/2 Body_2_bold px-7 py-2" href="/">
        2024 CEOS AWARD{" "}
      </Link>
      <div className="w-1/2 bg-gray-900 px-7 py-2">
        <nav className="flex flex-row justify-between">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="Body_2_bold text-white hover:text-Main_Blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {isLogin ? (
            <button
              className="Body_2_bold text-white  hover:text-Main_Blue transition-colors"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          ) : (
            <Link
              href="/login"
              className="Body_2_bold text-white hover:text-Main_Blue transition-colors"
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
