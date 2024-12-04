import Logo from "./logo";
import { MenuIcon } from "lucide-react";
import SettingsMenu from "./SettingsMenu";

const Header = () => {
  return (
    <header className="header fixed bg-white top-0 left-0 flex items-center justify-center w-full h-14 border-y border-gray-300 z-20">
      <div className="flex w-full justify-between items-center px-4 h-full">
        <MenuIcon className="cursor-pointer" />
        <Logo />
        <SettingsMenu />
      </div>
    </header>
  );
};

export default Header;
