import type { CapacitorConfig } from "@capacitor/cli";
import "@capacitor-community/safe-area";

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
      statusBarColor: "#000000",
      statusBarContent: "light",
      navigationBarColor: "#000000",
      navigationBarContent: "light",
    },
  },
};

export default config;
