"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Check if running in mobile app
      const userAgent = window.navigator.userAgent;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

      if (isMobile) {
        // Get tokens from Capacitor Preferences
        const accessToken = await Preferences.get({ key: "access_token" });
        const refreshToken = await Preferences.get({ key: "refresh_token" });
        const expiresIn = await Preferences.get({ key: "expires_in" });

        setIsAuthenticated(
          Boolean(accessToken.value && refreshToken.value && expiresIn.value)
        );
      } else {
        // Use API for web
        const response = await fetch("/api/auth");
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

    if (isMobile) {
      // Clear tokens from Capacitor Preferences
      await Preferences.remove({ key: "access_token" });
      await Preferences.remove({ key: "refresh_token" });
      await Preferences.remove({ key: "expires_in" });
      setIsAuthenticated(false);
      router.push("/");
    } else {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (response.ok) {
        setIsAuthenticated(false);
        router.push("/");
      }
    }
  };

  return { isAuthenticated, isLoading, logout };
}
