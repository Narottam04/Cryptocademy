import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router";

import Sidebar from "./Sidebar";
import TabNavigation from "./TabNavigation";
import { Suspense } from "react";
import Loader from "./Loader";
import {
  AdMob,
  BannerAdSize,
  BannerAdPosition,
  BannerAdPluginEvents
} from "@capacitor-community/admob";

const SidebarLayout = () => {
  // Define the banner function
  const banner = async () => {
    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      // Subscribe Banner Event Listener
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size) => {
      // Subscribe Change Banner Size
    });

    const options = {
      adId: "ca-app-pub-7061809165741443/2228569288",
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0
      // isTesting: true
      // npa: true
    };
    AdMob.showBanner(options);
  };
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    setCurrentLocation(location.pathname);

    banner();
  }, [location]);

  return (
    <div className="bg-black ">
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={currentLocation?.slice(5) === "" ? `home` : currentLocation?.slice(5)} />
        {/* page transitions */}
        <motion.div
          intial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black"
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </motion.div>
      </div>
      <TabNavigation />
    </div>
  );
};

export default SidebarLayout;
