import BetCard from "@/components/BetCard";
import { ShareIcon, StarIcon } from "lucide-react";

export async function generateStaticParams() {
  const startups = await fetch("").then((res) => res.json());

  return startups.map((startup: any) => ({ id: startup.id })); // TODO: change startup type
}

const StartupsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <>
      <div className="bg-white border-b border-gray-300 h-32 flex items-center p-8">
        <div className="flex gap-3 w-full">
          <div className="aspec-square size-20 bg-gray-900 aspect-square" />
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between">
              <h2 className="uppercase font-bold text-xl">Name</h2>
              <p className="text-gray-400"># Bets</p>
            </div>
            <p>Start up description</p>
            <div className="flex gap-4 w-full justify-end text-gray-400">
              <StarIcon className="size-4" />
              <ShareIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="m-4">
        <BetCard active />
      </div>
    </>
  );
};

export default StartupsPage;
