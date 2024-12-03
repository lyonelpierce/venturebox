// import BetCard from "@/components/BetCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyBetsPage = () => {
  return (
    <Tabs defaultValue="active">
      <TabsList className="w-full bg-white border-b border-gray-300 h-12 p-0">
        <TabsTrigger
          value="active"
          className="w-1/2 font-bold uppercase h-full"
        >
          Active
        </TabsTrigger>
        <TabsTrigger
          value="history"
          className="w-1/2 font-bold uppercase h-full"
        >
          History
        </TabsTrigger>
      </TabsList>
      <div className="bg-white border-b border-gray-300 h-14 flex items-center px-6">
        <p className="text-gray-500 text-lg">Balance: +204 USDC</p>
      </div>
      <TabsContent value="active">
        <Card className="m-4 overflow-hidden">
          <CardContent className="p-0">{/* <BetCard active /> */}</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="history">
        <Card className="m-4 overflow-hidden">
          <CardContent className="p-0">
            {/* <BetCard active={false} /> */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default MyBetsPage;
