"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SettingsIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const settingsMenuItems = [
  {
    label: "My account",
    href: "/account",
    key: "my-account",
  },
  {
    label: "Withdrawal",
    href: "/withdrawal",
    key: "withdrawal",
  },
  {
    label: "Add Funds",
    href: "/add-funds",
    key: "add-funds",
  },
];

const SheetMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const [isAndroid, setIsAndroid] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsAndroid(/android/i.test(userAgent));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <SettingsIcon className="cursor-pointer" onClick={() => setOpen(true)} />
      <Sheet open={open} onOpenChange={handleClose}>
        <SheetContent side={"right"} className="p-4 px-0 border-gray-300">
          <SheetHeader className={cn(isAndroid && "pt-4")}>
            <SheetTitle className="flex px-4 justify-start text-lg font-medium uppercase text-gray-400">
              Settings
            </SheetTitle>
            <Separator />
            <VisuallyHidden>
              <SheetDescription>
                Prediction market for startups
              </SheetDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className="flex flex-col justify-center w-full gap-3 divide-gray-300 mt-4">
            {settingsMenuItems.map((item) => (
              <div key={item.key}>
                <Link
                  href={item.href!}
                  className="px-4 uppercase font-semibold text-[#382ff7] flex h-full"
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
                <Separator />
              </div>
            ))}
            {/* <div>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleClose();
                    logout();
                  }}
                  className="px-4 uppercase font-semibold text-[#382ff7] flex h-full text-left w-full"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  href="/sign-in"
                  className="px-4 uppercase font-semibold text-[#382ff7] flex h-full"
                  onClick={handleClose}
                >
                  Sign In
                </Link>
              )}
              <Separator />
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SheetMenu;
