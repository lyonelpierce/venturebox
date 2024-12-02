import axios from "axios";
import { JSDOM } from "jsdom";
import { Startup } from "@/constants/startup";
import StartupCard from "@/components/StartupCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Fetch all startups from Product Hunt XML Feed
const getStartups = async () => {
  try {
    const response = await axios.get("https://www.producthunt.com/feed", {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
      transformResponse: [
        (data) => {
          const dom = new JSDOM(data);
          const document = dom.window.document;

          const feed = document.getElementsByTagName("feed")[0];
          const entries = feed.getElementsByTagName("entry");

          const jsonData = {
            entries: Array.from(entries).map((entry) => ({
              id: (entry as Element).getElementsByTagName("id")[0]?.textContent,
              name: (entry as Element).getElementsByTagName("title")[0]
                ?.textContent,
              description:
                (entry as Element)
                  .getElementsByTagName("content")[0]
                  ?.textContent?.match(/<p>\s*(.*?)\s*<\/p>/)?.[1] || "",
              published: (entry as Element).getElementsByTagName("published")[0]
                ?.textContent,
            })),
          };

          return jsonData.entries;
        },
      ],
    });

    return response.data;
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
      <TabsList className="w-full bg-white border-b border-gray-300 h-12">
        <TabsTrigger value="all" className="w-1/2 font-bold uppercase">
          All
        </TabsTrigger>
        <TabsTrigger value="followed" className="w-1/2 font-bold uppercase">
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
