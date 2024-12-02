import { HomeIcon, SearchIcon, User2Icon } from "lucide-react";

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
    <div className="bg-white w-full fixed bottom-0 left-0 border-t border-gray-300 flex justify-evenly h-20 items-center">
      {menu.map((item) => (
        <div
          key={item.href}
          className="flex flex-col items-center justify-center gap-1 uppercase text-xs"
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
