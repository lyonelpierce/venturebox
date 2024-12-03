import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const settingsMenu = [
  {
    label: "My account",
    href: "/account",
  },
  {
    label: "Withdrawal",
    href: "/withdrawal",
  },
  {
    label: "Add Funds",
    href: "/add-funds",
  },
  {
    label: "Log Out",
    href: "/log-out",
  },
];

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SettingsIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="p-4 px-0 border-gray-300 focus:ring-0"
      >
        <SheetHeader>
          <SheetTitle className="flex px-4 justify-start text-lg font-medium uppercase text-gray-400">
            Settings
          </SheetTitle>
          <Separator />
          <VisuallyHidden>
            <SheetDescription>Prediction market for startups</SheetDescription>
          </VisuallyHidden>
        </SheetHeader>
        <div className="flex flex-col justify-center w-full gap-3 divide-gray-300 mt-4">
          {settingsMenu.map((item) => (
            <>
              <Link
                href={item.href}
                key={item.href}
                className="px-4 uppercase font-semibold text-[#382ff7] flex h-full"
              >
                {item.label}
              </Link>
              <Separator />
            </>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
