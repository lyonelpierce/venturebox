"use client";

// import BetCard from "@/components/BetCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Preferences } from "@capacitor/preferences";

const MyBetsPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const storeTokens = async () => {
      const access_token = searchParams.get("access_token");
      const refresh_token = searchParams.get("refresh_token");
      const expires_in = searchParams.get("expires_in");

      if (access_token && refresh_token && expires_in) {
        await Preferences.set({ key: "access_token", value: access_token });
        await Preferences.set({ key: "refresh_token", value: refresh_token });
        await Preferences.set({ key: "expires_in", value: expires_in });

        // Clean up URL parameters after storing
        window.history.replaceState({}, "", "/mybets");
      }
    };

    storeTokens();
  }, [searchParams]);

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
