import { Startup } from "../../constants/startup";
import StartupCard from "../../components/StartupCard";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import CheckAuth from "../../components/CheckAuth";

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
    <>
      <CheckAuth />
      <Tabs
        defaultValue="all"
        className="max-w-screen-xl mx-auto sm:bg-white sm:border sm:border-gray-300 sm:rounded-lg sm:overflow-hidden py-8 sm:py-0"
      >
        <TabsList className="p-0 fixed sm:relative mt-14 sm:mt-0 z-20 sm:z-10 top-0 left-0 w-full bg-white border-b border-gray-300 h-12 px-0 rounded-none sm:rounded-none">
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
        <TabsContent value="all">
          <Card className="sm:mx-0 mx-4 my-2 overflow-hidden sm:border-0 sm:shadow-none">
            <CardContent className="flex flex-col p-0 divide-y divide-gray-300">
              {orderedStartups?.map((startup: Startup) => (
                <StartupCard startup={startup} key={startup.id} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="followed" className="sm:pb-12">
          <Card className="sm:mx-0 mx-4 my-2 overflow-hidden sm:border-0 sm:shadow-none">
            <CardContent className="flex flex-col p-0 divide-y divide-gray-300">
              <div className="text-center my-10 sm:my-0 sm:mt-10">
                You haven&apos;t followed any startups yet.
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default LandingPage;
