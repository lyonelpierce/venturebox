import BetCard from "@/components/BetCard";
import CreateBetModal from "@/components/CreateBetModal";
import StartupAvatar from "@/components/StartupAvatar";
import { Bet, BetData } from "@/constants/startup";
import { ShareIcon, StarIcon } from "lucide-react";

type Params = Promise<{ id: string }>;

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

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;

  const metadata = await getStartup(id);

  return {
    title: metadata.company_name,
  };
}

const getBetIds = async (id: string) => {
  try {
    const response = await fetch(
      `https://www.stadium.science/api/venture_vox/${id}/get_bet`
    );

    const data = await response.json();

    return data.map((bet: Bet) => bet.bet_id);
  } catch (error) {
    console.log(error);
  }
};

const getBets = async (betIds: string[]) => {
  try {
    const responses = await Promise.all(
      betIds.map((betId) =>
        fetch(`https://www.stadium.science/api/stadium/bets/${betId}`).then(
          (res) => res.json()
        )
      )
    );
    return responses;
  } catch (error) {
    console.log(error);
  }
};

const StartupsPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const [startup, betIds] = await Promise.all([getStartup(id), getBetIds(id)]);

  const bets = await getBets(betIds);
  // Sort bets by created_at
  const orderedBets = bets?.sort((a: BetData, b: BetData) => {
    return (
      new Date(b.protocol_created_at).getTime() -
      new Date(a.protocol_created_at).getTime()
    );
  });

  return (
    <>
      <div className="fixed z-20 top-0 left-0 mt-14 bg-white border-b border-gray-300 h-32 flex items-center p-8">
        <div className="flex gap-3 w-full">
          <StartupAvatar imageUrl={startup.company_image} />
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between">
              <h2 className="uppercase font-bold text-xl">
                {startup.company_name}
              </h2>
            </div>
            <p className="text-sm">{startup.company_tagline}</p>
            <div className="flex justify-between items-center w-full mt-2">
              <CreateBetModal startupId={startup.id} />
              <div className="flex gap-4 w-full justify-end text-gray-400">
                <StarIcon className="size-4" />
                <ShareIcon className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="m-4 flex flex-col gap-4 pt-44 pb-24">
          {orderedBets && orderedBets.length > 0 ? (
            orderedBets.map((bet: BetData) => (
              <BetCard active key={bet.protocol_id} betData={bet} />
            ))
          ) : (
            <div className="flex flex-col h-full grow w-full justify-center items-center gap-2">
              <p>There are no bets yet on this startup</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StartupsPage;
