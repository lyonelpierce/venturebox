"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return (
    <Link href="/">
      <h2 className="capitalized text-2xl font-bold uppercase font-museo">
        {pathname === "/" && "Venture Vox"}
        {pathname === "/startup" && "Start Up Name"}
        {pathname === "/mybets" && "My Bets"}
      </h2>
    </Link>
  );
};

export default Logo;
