"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isActive, setIsActive] = useState();

  const menus = [
    { id: 1, name: "VOTING", href: "/voting" },
    { id: 2, name: "MEMBERS", href: "/members" },
    { id: 3, name: "ABOUT US", href: "/aboutus" },
    { id: 4, name: "LOGOUT", href: "/" },
  ];
  return (
    <span className="flex px-[3.88rem] pt-9 w-full">
      <span className="flex w-[50%] px-7 py-2 border-solid border-4 border-grey-900 text-sm font-bold tracking-[-0.00088rem]">
        2024 CEOS AWARD
      </span>
      <span className="flex w-[50%] px-7 py-2 text-grey-50 bg-grey-900 justify-between text-sm font-bold tracking-[-0.00088rem]">
        {menus.map((menu) => (
          <Link key={menu.id} href={menu.href} passHref>
            {menu.name}
          </Link>
        ))}
      </span>
    </span>
  );
}
