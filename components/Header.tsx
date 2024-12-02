import Logo from "./logo";
import { MenuIcon, SettingsIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-16 border-y border-gray-300 bg-white">
      <div className="flex max-w-screen-2xl w-full justify-between items-center px-4">
        <MenuIcon />
        <Logo />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Header;
