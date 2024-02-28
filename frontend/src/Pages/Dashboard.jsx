import { lazy } from "react";
import { useLocation } from "react-router";

// import DesktopDashboard from "../Components/DesktopDashboard";
const DesktopDashboard = lazy(() => import("../Components/DesktopDashboard"));

const Dashboard = () => {
  const location = useLocation();
  // console.log("route data passed", location.state);
  return (
    <section className="mt-[30px] pt-2 lg:px-4  lg:py-8 mx-auto max-w-[1600px]">
      <p className=" text-white font-bold text-2xl md:text-3xl font-title  md:pt-0 mb-4 ml-3 px-2 md:px-4">
        Welcome to Dashboard
      </p>
      <DesktopDashboard
        userNetworth={location.state?.userNetworth}
        availableCoins={location.state?.availableCoins}
      />
    </section>
  );
};

export default Dashboard;
