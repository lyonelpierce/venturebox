import "@capacitor-community/safe-area";
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.venturevox.app",
  appName: "venturebox",
  server: {
    url: "http://localhost:3000",
    cleartext: true,
  },
  plugins: {
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: "#ffffff",
      statusBarContent: "light",
      navigationBarColor: "#ffffff",
      navigationBarContent: "light",
    },
  },
  ios: {
    contentInset: "automatic",
  },
};

export default config;
