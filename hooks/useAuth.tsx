"use client";

import { Preferences } from "@capacitor/preferences";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { value: accessToken } = await Preferences.get({
        key: "access_token",
      });
      setIsAuthenticated(!!accessToken);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("CapacitorStorage.access_token");

      await Preferences.remove({ key: "access_token" });
      await Preferences.remove({ key: "refresh_token" });
      await Preferences.remove({ key: "expires_in" });
      setIsAuthenticated(false);

      const response = await fetch(
        "https://www.stadium.science/api/oath/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: token,
          }),
        }
      );

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return { isAuthenticated, isLoading, logout };
}
