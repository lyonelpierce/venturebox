import { HomeIcon, SearchIcon, User2Icon } from "lucide-react";
import Link from "next/link";

const menu = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "My bets",
    href: "/mybets",
    icon: <User2Icon />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <SearchIcon />,
  },
];

const Navbar = () => {
  return (
    <div className="bg-white w-full fixed bottom-0 left-0 border-t border-gray-300 flex justify-evenly h-20 items-center z-20">
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex flex-col items-center justify-center gap-1 uppercase text-xs font-semibold"
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
