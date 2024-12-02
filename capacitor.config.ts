import type { CapacitorConfig } from "@capacitor/cli";
import "@capacitor-community/safe-area";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "venturebox",
  webDir: "out",
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
