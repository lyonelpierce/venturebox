"use client";
import { useEffect } from "react";
import { Preferences } from "@capacitor/preferences";

const CheckAuth = () => {
  useEffect(() => {
    const checkAndStoreTokens = async () => {
      // Get URL parameters
      const params = new URLSearchParams(window.location.search);
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");
      const expires_in = params.get("expires_in");

      if (access_token && refresh_token && expires_in) {
        try {
          // Store tokens in Preferences
          await Preferences.set({
            key: "access_token",
            value: access_token,
          });

          await Preferences.set({
            key: "refresh_token",
            value: refresh_token,
          });

          await Preferences.set({
            key: "expires_in",
            value: expires_in,
          });

          // Optional: Clear URL params after storing
          window.history.replaceState({}, "", window.location.pathname);
        } catch (error) {
          console.error("Error storing tokens:", error);
        }
      }
    };

    checkAndStoreTokens();
  }, []);

  return <div>CheckAuth</div>;
};

export default CheckAuth;
