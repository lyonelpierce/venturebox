import { Startup } from "@/constants/startup";
import StartupCard from "@/components/StartupCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fetch all startups from Product Hunt XML Feed
const getStartups = async () => {
  try {
    const response = await fetch(
      `https://www.stadium.science/api/venture_vox/get_all_companies`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const LandingPage = async () => {
  const startups = await getStartups();

  const orderedStartups = startups?.sort((a: Startup, b: Startup) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime(); // Orde by most recent first
  });

  return (
    <Tabs defaultValue="all">
      <TabsList className="fixed z-20 top-0 left-0 mt-14 w-full bg-white border-b border-gray-300 h-12 p-0 rounded-none">
        <TabsTrigger value="all" className="w-1/2 font-bold uppercase h-full">
          All
        </TabsTrigger>
        <TabsTrigger
          value="followed"
          className="w-1/2 font-bold uppercase h-full"
        >
          Followed
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="pt-24 pb-20">
        <Card className="mx-4 my-2 overflow-hidden">
          <CardContent className="flex flex-col p-0 divide-y divide-gray-300">
            {orderedStartups?.map((startup: Startup) => (
              <StartupCard startup={startup} key={startup.id} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default LandingPage;
