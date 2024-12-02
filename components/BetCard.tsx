import { StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

const BetCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-2 w-full">
        <div className="aspec-square size-20 bg-gray-900 aspect-square" />
        <CardTitle className="flex gap-2">
          <p>Will neuron release a new product in Q1 2025?</p>
          <div>
            <p className="text-xs uppercase">50%</p>
            <Progress value={50} />
            <p className="text-xs font-light uppercase text-gray-400">Chance</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 mt-2 pb-3">
        <div className="flex w-full gap-2">
          <Button className="w-1/2 h-12 rounded-xl bg-green-400 text-lg font-semibold text-[#3a9769]">
            Buy Yes
          </Button>
          <Button className="w-1/2 h-12 rounded-xl bg-red-300 text-lg font-semibold text-[#d54b4f]">
            Buy No
          </Button>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <p>$19k Vol.</p>
          <StarIcon className="size-4" />
        </div>
      </CardContent>
    </Card>
  );
};

export default BetCard;
