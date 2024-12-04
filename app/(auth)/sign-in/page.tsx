"use client";

import { useState } from "react";
import { App } from "@capacitor/app";
import { Browser } from "@capacitor/browser";
import { Button } from "@/components/ui/button";

export default function LoginWithSVN() {
  const clientId = process.env.NEXT_PUBLIC_SVN_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_SVN_REDIRECT_URI!;

  // eslint-disable-next-line
  const [error, setError] = useState("");

  if (!clientId || !redirectUri) {
    setError("Missing clientId or redirectUri configuration.");
    return;
  }

  const handleLogin = async () => {
    const state = Math.random().toString(36).substring(7);
    const url = `https://www.svn.haus/api/auth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&state=${state}`;

    // Use Capacitor Browser instead of window.location
    await Browser.open({ url });

    // Listen for app open events (deep links)
    App.addListener("appUrlOpen", async ({ url }) => {
      console.log("App opened with URL:", url);
      await Browser.close();
      // Handle the callback URL here
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-20">
      <Button onClick={handleLogin} className="w-full p-2 text-white rounded">
        Login
      </Button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
