import { CapacitorConfig } from '@capacitor/cli';



const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'free-sticker-app',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.178.31:3000',
    cleartext: true,
  }
};
export default config;
