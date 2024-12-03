"use client";

import { useState } from "react";

export default function LoginWithSVN() {
  const clientId = process.env.NEXT_PUBLIC_SVN_CLIENT_ID!;
  const redirectUri = process.env.NEXT_PUBLIC_SVN_REDIRECT_URI!;

  // eslint-disable-next-line
  const [error, setError] = useState("");

  if (!clientId || !redirectUri) {
    setError("Missing clientId or redirectUri configuration.");
    return;
  }

  const handleLogin = () => {
    const state = Math.random().toString(36).substring(7);

    window.location.href = `https://www.svn.haus/api/auth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&state=${state}`;
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Login with SVN</h1>
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
