import BetCard from "@/components/BetCard";
import CreateBetModal from "@/components/CreateBetModal";
import StartupAvatar from "@/components/StartupAvatar";
import { Button } from "@/components/ui/button";
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

// TODO
export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;

  const metadata = await getStartup(id);

  return {
    title: metadata.company_name,
  };
}

const getBets = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.stadium.science/api/venture_vox/${id}/get_bet`
    );

    console.log(response);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const StartupsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const startup = await getStartup(id);
  const bets = await getBets(id);

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
        {bets && bets.length > 0 ? (
          <BetCard active />
        ) : (
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <p>There are no bets yet on this startup</p>
            <CreateBetModal startupId={startup.id}>
              <Button className="tracking-wide font-bold uppercase h-12 bg-green-400 text-lg text-[#3a9769]">
                Create a Bet
              </Button>
            </CreateBetModal>
          </div>
        )}
      </div>
    </>
  );
};

export default StartupsPage;
