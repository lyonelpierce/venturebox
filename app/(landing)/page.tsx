import { Startup } from "@/constants/startup";
import StartupCard from "@/components/StartupCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fetch all startups from Product Hunt XML Feed
const getStartups = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ENV_URL}/api/startups`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const LandingPage = async () => {
  const startups = await getStartups();

  const orderedStartups =
    startups?.sort((a: Startup, b: Startup) => {
      const dateA = new Date(a.published);
      const dateB = new Date(b.published);
      return dateB.getTime() - dateA.getTime(); // Orde by most recent first
    }) || [];

  return (
    <Tabs defaultValue="all">
      <TabsList className="w-full bg-white border-b border-gray-300 h-12 p-0 rounded-none">
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
      <TabsContent value="all" className="pb-20">
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
