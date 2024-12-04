"use client";

import { useAuth } from "@/hooks/useAuth";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import SheetMenu from "./SettingsMenu";

const UserButton = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {!isAuthenticated ? (
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "default" })}
        >
          Sign In
        </Link>
      ) : (
        <SheetMenu />
      )}
    </div>
  );
};

export default UserButton;
