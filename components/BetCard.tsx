import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

const BetCard = ({ active, status }: { active: boolean; status?: string }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-2 w-full">
        <div className="aspec-square size-20 bg-gray-900 aspect-square" />
        <CardTitle className="flex gap-2">
          <p>Will neuron release a new product in Q1 2025?</p>
          {active && (
            <div className="flex flex-col">
              <p className="text-xs uppercase">50%</p>
              <Progress value={50} />
              <p className="text-xs font-light uppercase text-gray-400">
                Chance
              </p>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <Separator className="bg-gray-300 h-px full" />
      <CardContent className="flex flex-col gap-2 pt-4 pb-3">
        {active ? (
          <div className="flex w-full gap-2">
            <Button className="w-1/2 h-12 rounded-xl bg-green-400 text-lg font-semibold text-[#3a9769]">
              Buy Yes
            </Button>
            <Button className="w-1/2 h-12 rounded-xl bg-red-300 text-lg font-semibold text-[#d54b4f]">
              Buy No
            </Button>
          </div>
        ) : (
          <Button
            className={cn(
              "h-12 rounded-xl",
              status === "win"
                ? "bg-green-400 text-lg text-[#3a9769]"
                : "bg-red-300 text-[#d54b4f]"
            )}
          >
            {status === "win" ? (
              <p className="uppercase tracking-wide font-bold">
                You win 90 USDC!
              </p>
            ) : (
              <p className="uppercase tracking-wide font-bold">20 USDC Lost</p>
            )}
          </Button>
        )}
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>$19k Vol.</p>
          <StarIcon className="size-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default BetCard;
