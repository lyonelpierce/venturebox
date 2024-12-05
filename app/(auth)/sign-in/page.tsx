"use client";

import { useState } from "react";
import { Browser } from "@capacitor/browser";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginWithSVN() {
  const clientId = process.env.NEXT_PUBLIC_SVN_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_SVN_REDIRECT_URI!;
  const [error, setError] = useState("");
  const router = useRouter();

  // Move the check into useEffect to avoid re-render loop
  const handleLogin = async () => {
    if (!clientId || !redirectUri) {
      setError("Missing clientId or redirectUri configuration.");
      return;
    }

    const state = Math.random().toString(36).substring(7);
    const url = `https://www.svn.haus/api/auth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&state=${state}`;

    await Browser.open({ url });

    // State updates are asynchronous, so we need to use useEffect or wait for the next render
    // to see the updated value. The console.log here will show the previous value (false)
    setTimeout(async () => {
      await Browser.close();

      // After closing browser and setting state to false, navigate to success
      router.push("/");
    }, 5000);
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
