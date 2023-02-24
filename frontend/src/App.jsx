import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { PushNotifications } from "@capacitor/push-notifications";
import { LocalNotifications } from "@capacitor/local-notifications";

import "./App.css";

import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [notificationId, setNotificationId] = useState(0);
  const [notificationStatus, setNotificationStatus] = useState(false);

  useEffect(() => {
    const registerNotifications = async () => {
      try {
        let permStatus = await PushNotifications.checkPermissions();

        if (permStatus.receive === "prompt") {
          permStatus = await PushNotifications.requestPermissions();
        }

        if (permStatus.receive !== "granted") {
          console.log("User denied permissions!");
          return;
        }

        await PushNotifications.register();
      } catch (error) {
        console.log("push notification Error: ", error);
      }
    };
    registerNotifications();
  }, []);

  // local notification
  const scheduleNotification = async () => {
    const notification = await LocalNotifications.schedule({
      notifications: [
        {
          title: "Become a Trading Pro with Cryptocademy",
          largeBody:
            "Check the latest crypto prices and improve your trading skills with our curated resources. Stay informed and make smart decisions.",
          id: notificationId,
          schedule: { on: { hour: 19 } },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null
        }
      ]
    });
    setNotificationId(notification.notifications[0].id);
  };

  useEffect(() => {
    const registerLocalNotifications = async () => {
      try {
        let permStatus = await LocalNotifications.checkPermissions();
        console.log(permStatus);

        if (permStatus.display === "prompt") {
          permStatus = await LocalNotifications.requestPermissions();
          console.log(permStatus);
        }

        if (permStatus.display !== "granted") {
          console.log("User denied permissions!");
          return;
        }

        setNotificationStatus(true);
      } catch (error) {
        console.log("local notification Error: ", error);
      }
    };
    registerLocalNotifications();
  }, []);

  useEffect(() => {
    if (notificationStatus) {
      console.log(notificationStatus);
      scheduleNotification();
    }
  }, [notificationStatus]);

  return (
    <div className="App scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-black">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
