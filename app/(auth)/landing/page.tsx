import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full gap-2 p-4 py-24">
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <h2 className="capitalized text-5xl text-[#2600FF] font-bold uppercase font-museo">
            Venture Vox
          </h2>
          <p className="text-[#2600FF] text-xl">
            Prediction Markets for Start Ups
          </p>
        </div>
        <Button className="rounded-lg h-11 uppercase font-semibold bg-[#2600FF] text-lg w-full">
          Sign Up
        </Button>
        <Button
          className="rounded-lg h-11 uppercase font-semibold text-lg w-full border-[#2600FF] bg-transparent text-[#2600ff]"
          variant="outline"
        >
          Login
        </Button>
        <Button
          className="rounded-lg h-11 uppercase font-semibold text-lg w-full border-[#2600FF] bg-transparent text-[#2600ff]"
          variant="outline"
        >
          Login with Gmail
        </Button>
        <Button
          className="rounded-lg h-11 uppercase font-semibold text-lg w-full border-[#2600FF] bg-transparent text-[#2600ff]"
          variant="outline"
        >
          Login with Apple
        </Button>
      </div>
    </>
  );
};

export default LandingPage;
