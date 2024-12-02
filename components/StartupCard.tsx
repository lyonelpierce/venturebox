import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ShareIcon, StarIcon } from "lucide-react";

const StartupCard = () => {
  return (
    <Card className="rounded-none shadow-none flex flex-col p-4 justify-between pb-2 border-none">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 items-start">
          <div className="aspec-square size-20 bg-[#2600ff]" />
          <CardHeader className="p-0">
            <CardTitle className="font-bold">Startup Name</CardTitle>
            <CardDescription className="text-black text-sm">
              Startup Description
            </CardDescription>
          </CardHeader>
        </div>
        <div className="text-gray-400 text-sm">20 Bets</div>
      </div>
      <div className="text-gray-400 justify-between items-center mt-1 flex">
        <p className="text-sm">$19K Vol.</p>
        <div className="flex gap-4">
          <StarIcon className="size-4" />
          <ShareIcon className="size-4" />
        </div>
      </div>
    </Card>
  );
};

export default StartupCard;
