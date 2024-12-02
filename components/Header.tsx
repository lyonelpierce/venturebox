import Logo from "./logo";
import { MenuIcon, SettingsIcon } from "lucide-react";
import SheetMenu from "./SheetMenu";

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full h-14 border-y border-gray-300 bg-white">
      <div className="flex max-w-screen-2xl w-full justify-between items-center px-4">
        <SheetMenu>
          <MenuIcon />
        </SheetMenu>
        <Logo />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Header;
