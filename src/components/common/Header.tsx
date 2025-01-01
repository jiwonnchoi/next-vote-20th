"use client";
import { useState } from "react";
import Link from "next/link";

interface HeaderProp {
  tab: number;
}

export default function Header({ tab }: HeaderProp) {
  const [isActive, setIsActive] = useState(tab);

  const menus = [
    { id: 1, name: "VOTING", href: "/voting" },
    { id: 2, name: "MEMBERS", href: "/members" },
    { id: 3, name: "ABOUT US", href: "/aboutus" },
    { id: 4, name: "LOGIN", href: "/login" },
  ];
  return (
    <span className="flex pt-9 w-[90%] mx-auto">
      <span className="flex w-[50%] px-7 py-2 border-solid border-4 items-center border-grey-900 body-2-bold">
        2024 CEOS AWARD
      </span>
      <span
        className={`flex w-[50%] px-7 py-2 bg-grey-900 justify-between items-center body-2-bold`}
      >
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.href}
            passHref
            onClick={() => setIsActive(menu.id)}
            className={`${
              menu.id === isActive ? "text-main-blue" : "text-grey-50"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </span>
    </span>
  );
}
