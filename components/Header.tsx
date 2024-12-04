import Logo from "./logo";
import { MenuIcon } from "lucide-react";
import SettingsMenu from "./SettingsMenu";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import UserButton from "./UserButton";

const Header = () => {
  return (
    <header className="fixed bg-white top-0 left-0 flex items-center justify-center w-full h-14 border-y border-gray-300 z-20">
      <div className="w-full justify-between items-center px-4 h-full flex sm:hidden">
        <MenuIcon className="cursor-pointer" />
        <Logo />
        <SettingsMenu />
      </div>
      <div className="hidden sm:flex w-full justify-between items-center px-4 h-full">
        <Link href="/" className="w-1/3 flex justify-start">
          <h2 className="capitalized text-2xl font-bold uppercase font-museo text-gray-800">
            Venture Vox
          </h2>
        </Link>
        <div className="w-1/3 flex justify-center">
          <DesktopMenu />
        </div>
        {/* <div className="w-64 relative">
          <Input
            placeholder="Search"
            className="w-full rounded-full border-gray-300 bg-gray-50"
          />
          <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#2600ff] cursor-pointer" />
        </div> */}
        <div className="w-1/3 flex justify-end">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
