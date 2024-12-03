import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AddFundsPage = () => {
  return (
    <div className="flex flex-col grow w-full h-full pb-20">
      <div className="flex flex-col gap-2 pt-20 h-min p-4">
        <div className="bg-gradient-to-t from-[#0011FFBF] to-[#606FF6BF] w-full h-14 rounded-md py-3 px-4 flex flex-col justify-center">
          <p className="text-white text-xs font-medium uppercase">
            Total balance
          </p>
          <p className="text-white text-lg font-bold">$263.67</p>
        </div>
        <div className="flex gap-2">
          <div className=" w-1/2 bg-gradient-to-t from-[#2600FF39] to-[#7D67FA39] h-14 rounded-md py-3 px-4 flex flex-col justify-center">
            <p className="text-[#2600FF] text-xs font-medium uppercase">
              Open Bets
            </p>
            <p className="text-[#2600FF] text-lg font-bold">$263.67</p>
          </div>
          <div className="w-1/2 bg-gradient-to-t from-[#2600FF39] to-[#7D67FA39] h-14 rounded-md py-3 px-4 flex flex-col justify-center">
            <p className="text-[#2600FF] text-xs font-medium uppercase">Cash</p>
            <p className="text-[#2600FF] text-lg font-bold">$263.67</p>
          </div>
        </div>
        <p className="text-gray-600 my-1 font-medium">
          Last month progression:{" "}
          <span className="font-black text-[#2600FF]">+240%</span>
        </p>
      </div>
      <Separator className="bg-gray-300 w-full" />
      <div className="flex flex-col gap-4 p-4 mb-4">
        <p className="uppercase font-bold text-gray-950">Deposit USDC</p>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="size-80 bg-black" />
          <p className="text-gray-600 text-sm">
            0x00000000000000000000000000000
          </p>
        </div>
        <Button className="rounded-lg h-11 uppercase font-medium bg-[#2600FF] text-lg">
          Copy
        </Button>
      </div>
      <div className="flex flex-col border-t border-gray-300">
        <div className="flex items-center justify-between gap-2 bg-[#EEEBFF] h-12 px-4">
          <p className="text-gray-600 font-semibold uppercase">Chain</p>
          <p className="text-[#2600FF] font-semibold uppercase border border-[#2600FF] rounded-full py-0.5 px-6">
            USDC
          </p>
        </div>
        <div className="flex items-center justify-between gap-2 bg-[#EEEBFF] h-12 px-4">
          <p className="text-gray-600 font-semibold uppercase">Token</p>
          <p className="text-[#2600FF] font-semibold uppercase border border-[#2600FF] rounded-full py-0.5 px-6">
            POLIGON
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddFundsPage;
