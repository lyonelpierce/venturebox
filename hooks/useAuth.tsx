"use client";

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
      const response = await fetch("/api/auth");
      const data = await response.json();

      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    const response = await fetch("/api/auth/logout", { method: "POST" });
    if (response.ok) {
      setIsAuthenticated(false);
      router.push("/sign-in");
    }
  };

  return { isAuthenticated, isLoading, logout };
}
