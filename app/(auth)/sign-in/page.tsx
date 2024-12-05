"use client";

import { useState, useEffect } from "react";
import { Browser } from "@capacitor/browser";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginWithSVN() {
  const clientId = process.env.NEXT_PUBLIC_SVN_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_SVN_REDIRECT_URI!;
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!clientId || !redirectUri) {
      setError("Missing clientId or redirectUri configuration.");
    }
  }, [clientId, redirectUri]);

  const handleLogin = async () => {
    try {
      const state = Math.random().toString(36).substring(7);
      sessionStorage.setItem("oauth_state", state); // Store state securely for validation
      const url = `https://www.svn.haus/api/auth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&state=${state}`;

      await Browser.open({ url });

      // Assuming the redirect flow handles successful login
      router.push("/"); // Redirect to success page
    } catch (err) {
      console.error("Error during login:", err);
      setError("Failed to initiate login. Please try again.");
    } finally {
      await Browser.close(); // Ensure Browser closes
    }
  };

  if (error) {
    return <p className="text-red-500 mt-2">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 pt-20">
      <Button onClick={handleLogin} className="w-full p-2 text-white rounded">
        Login
      </Button>
    </div>
  );
}
