"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-6 font-museo font-bold text-2xl uppercase">
      <Link
        href="/"
        className={pathname === "/" ? "text-[#2600ff]" : "text-gray-800"}
      >
        Start ups
      </Link>
      <Link
        href="/my-bets"
        className={pathname === "/my-bets" ? "text-[#2600ff]" : "text-gray-800"}
      >
        My Bets
      </Link>
    </div>
  );
};

export default DesktopMenu;
