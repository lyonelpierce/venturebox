import StartupCard from "@/components/StartupCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LandingPage = () => {
  return (
    <div className="max-w-screen-2xl">
      <Tabs defaultValue="all">
        <TabsList className="w-full bg-white border-b border-gray-300 h-10">
          <TabsTrigger value="all" className="w-1/2 font-bold uppercase">
            All
          </TabsTrigger>
          <TabsTrigger value="followed" className="w-1/2 font-bold uppercase">
            Followed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card className="m-4 overflow-hidden">
            <CardContent className="p-0">
              <StartupCard />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LandingPage;
