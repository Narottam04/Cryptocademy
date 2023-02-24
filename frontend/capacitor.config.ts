import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.cryptocademy.android",
  appName: "Cryptocademy",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },
    LocalNotifications: {
      smallIcon: "ic_stat_attach_money",
      iconColor: "#999999"
      // sound: "beep.wav",
    },
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 3000,
      showSpinner: false
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"]
    }
  }
};

export default config;
