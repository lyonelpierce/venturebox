import BetCard from "@/components/BetCard";
import StartupAvatar from "@/components/StartupAvatar";
import { Startup } from "@/constants/startup";
import { ShareIcon, StarIcon } from "lucide-react";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  try {
    const startups = await fetch(
      "https://www.stadium.science/api/venture_vox/get_all_companies"
    ).then((res) => res.json());

    return startups.map((startup: Startup) => ({ id: startup.id }));
  } catch (error) {
    console.log(error);
  }
}

const getStartup = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.stadium.science/api/venture_vox/${id}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const StartupsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const startup = await getStartup(id);

  return (
    <>
      <div className="bg-white border-b border-gray-300 h-32 flex items-center p-8">
        <div className="flex gap-3 w-full">
          <StartupAvatar imageUrl={startup.company_image} />
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between">
              <h2 className="uppercase font-bold text-xl">
                {startup.company_name}
              </h2>
            </div>
            <p>{startup.company_tagline}</p>
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
