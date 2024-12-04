"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

const PlaceBetButtons = ({ betId }: { betId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isAuthenticated } = useAuth();

  const router = useRouter();

  const handlePlaceBet = async (bet: boolean) => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    }

    const token = localStorage.getItem("CapacitorStorage.access_token");

    try {
      setIsLoading(true);
      const response = await fetch("/api/bets/place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bet,
          betId,
          token,
        }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full gap-2">
      <Button
        className="w-1/2 gap-1 h-10 rounded-xl bg-green-400 font-semibold text-[#225d40]"
        onClick={() => handlePlaceBet(true)}
        disabled={isLoading}
      >
        <ThumbsUpIcon className="size-4" />
        Buy Yes
      </Button>
      <Button
        className="w-1/2 gap-1 h-10 rounded-xl bg-red-300 font-semibold text-[#d54b4f]"
        onClick={() => handlePlaceBet(false)}
      >
        <ThumbsDownIcon className="size-4" />
        Buy No
      </Button>
    </div>
  );
};

export default PlaceBetButtons;
