"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const PlaceBetButtons = ({ betId }: { betId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePlaceBet = async (bet: boolean) => {
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
        className="w-1/2 h-10 rounded-xl bg-green-400 font-semibold text-[#3a9769]"
        onClick={() => handlePlaceBet(true)}
        disabled={isLoading}
      >
        Buy Yes
      </Button>
      <Button
        className="w-1/2 h-10 rounded-xl bg-red-300 font-semibold text-[#d54b4f]"
        onClick={() => handlePlaceBet(false)}
      >
        Buy No
      </Button>
    </div>
  );
};

export default PlaceBetButtons;
