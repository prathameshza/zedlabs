/* File location: src/pages/yourpc/docs/_page/foreground_service.ts */
import { type PageData } from "./what-is-yourpc";

// Import step screenshots dynamically from your assets directory
import notificationPermissionImg from "../../../../assets/products/yourpc/docs-assets/ForeGroundService/NotificationPermission.jpeg";
import foregroundServiceBarImg from "../../../../assets/products/yourpc/docs-assets/ForeGroundService/ForegroundServiceinBar.jpeg";

export const foregroundServiceData: PageData = {
  id: "foreground-service",
  title: "Foreground Service",
  category: "Getting Started",
  tagline: "Learn how the Foreground Service keeps your PRoot environment active, responsive, and immune to background process freezing.",
  breadcrumbs: ["Getting Started", "Foreground Service"],
  outline: [
    { id: "about-foreground-service", title: "What is a Foreground Service?" },
    { id: "notification-permission", title: "Notification Permission" },
    { id: "active-monitoring", title: "Foreground Service Activation" },
    { id: "background-freezing", title: "Why This Service Is Necessary" },
    { id: "closing-service", title: "Stopping the Service" }
  ],
  sections: [
    {
      id: "about-foreground-service",
      title: "What is a Foreground Service?",
      text: "A Foreground Service is a specialized Android system component used to perform long-running background tasks that are noticeable to the user. In YourPC, the foreground service acts as a persistent shield for your PRoot environment, preventing the operating system from suspending or killing user-space Linux processes when you navigate away from the app."
    },
    {
      id: "notification-permission",
      title: "Notification Permission",
      text: "When you open YourPC for the first time, you will be greeted by an 'Allow Notification' system popup. It is essential to click 'Allow' so that Android can display the active persistent notification required to keep the foreground service running.",
      imageSrc: notificationPermissionImg.src,
      note: "Be sure to allow this permission. If notifications are blocked, Android will not allow the foreground service to execute, which directly impacts background environment stability.",
      noteType: "info"
    },
    {
      id: "active-monitoring",
      title: "Foreground Service Activation",
      text: "Anytime you initialize the Linux Desktop, load the Terminal, or start the VNC server, this foreground service is automatically activated. You will see an active, persistent entry in your device's notification bar indicating that the environment is currently active.",
      imageSrc: foregroundServiceBarImg.src
    },
    {
      id: "background-freezing",
      title: "Why This Service Is Necessary",
      text: "Although YourPC will technically function fine without this service while the app is actively on your screen, you will face issues when the app goes into the background.\n\nWithout an active foreground service, Android will immediately freeze YourPC's background processes to conserve system resources. This halts your running terminals, pauses compilation tasks, and suspends drawing buffers, leaving you confused as to why your Linux environment has stopped responding."
    },
    {
      id: "closing-service",
      title: "Stopping the Service",
      text: "You do not need to manually manage the lifecycle of this service under normal operation. Once you properly close the Linux Desktop, exit the Terminal, or stop the VNC server, the foreground service will dismantle itself and close automatically.\n\nAlternatively, if you ever need to forcefully terminate the environment, you can stop the service immediately by clicking the 'Stop' or 'Close' action directly from the persistent notification itself.",
      note: "Force-closing the service from the notification bar will immediately terminate all active PRoot subprocesses, which may cause unsaved data in your Linux session to be lost.",
      noteType: "warning"
    }
  ]
};