"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/">
      <h2 className="capitalized text-2xl font-bold uppercase font-museo">
        {pathname === "/" && "Venture Vox"}
        {pathname.includes("/startup") && "Start Up"}
        {pathname === "/mybets" && "My Bets"}
        {pathname === "/add-funds" && "Add Funds"}
      </h2>
    </Link>
  );
};

export default Logo;
