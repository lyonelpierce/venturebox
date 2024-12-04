import "@capacitor-community/safe-area";
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.venturevox.app",
  appName: "venturebox",
  server: {
    url: "https://1720-162-83-251-221.ngrok-free.app",
    // cleartext: true,
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
    scheme: "venturebox",
  },
};

export default config;
