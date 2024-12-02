import Link from "next/link";
import { Startup } from "@/constants/startup";
import { BotIcon, ShareIcon, StarIcon } from "lucide-react";

const StartupCard = ({ startup }: { startup: Startup }) => {
  return (
    <Link href="/startup" className="cursor-pointer">
      <div className="relative rounded-none shadow-none flex flex-col p-4 justify-between pb-2 border-none">
        <div className="flex gap-2 items-start justify-between">
          <div className="flex gap-2 items-start">
            <div className="aspect-square size-20 flex items-center justify-center">
              <BotIcon className="size-12" />
            </div>
            <div className="p-0">
              <h2 className="font-bold capitalize">{startup.name}</h2>
              <p className="text-black text-sm">{startup.description}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 text-gray-400 justify-end items-center mt-1 flex">
          <div className="flex gap-4 z-10">
            <StarIcon className="size-4 hover:text-yellow-500" />
            <ShareIcon className="size-4 hover:text-blue-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StartupCard;
