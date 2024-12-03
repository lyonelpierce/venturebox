import { cn } from "@/lib/utils";
import { BetData } from "@/constants/startup";
import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CircleHelpIcon, StarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PlaceBetButtons from "./PlaceBetButtons";

const BetCard = ({
  active,
  status,
  betData,
}: {
  active: boolean;
  status?: string;
  betData: BetData;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-2 w-full p-2">
        <div className="aspect-square size-20 bg-muted flex justify-center items-center">
          <CircleHelpIcon className="size-12" />
        </div>
        <CardTitle className="flex gap-2 justify-between w-full">
          <p>{betData.protocol_title}</p>
          <div className="flex flex-col gap-2 items-end">
            {/* {active && (
              <div className="flex flex-col">
                <p className="text-xs uppercase">50%</p>
                <Progress value={50} />
                <p className="text-xs font-light uppercase text-gray-400">
                  Chance
                </p>
              </div>
            )} */}
            <StarIcon className="size-4 text-gray-400" />
          </div>
        </CardTitle>
      </CardHeader>
      <Separator className="bg-gray-300 h-px full" />
      <CardContent className="flex flex-col gap-2 p-2">
        {active ? (
          <PlaceBetButtons betId={betData.protocol_id} />
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
      </CardContent>
    </Card>
  );
};

export default BetCard;
