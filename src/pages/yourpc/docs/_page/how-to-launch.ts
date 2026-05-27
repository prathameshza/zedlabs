/* File location: src/pages/yourpc/docs/_page/how-to-launch.ts */
import { type PageData } from "./what-is-yourpc";

// Import step screenshots dynamically from your assets directory
import homeScreenImg from "../../../../assets/products/yourpc/docs-assets/HowToDesktop/HomeScreen.png";
import mainScreenImg from "../../../../assets/products/yourpc/docs-assets/HowToDesktop/MainScreen.png";
import playButtonGreenImg from "../../../../assets/products/yourpc/docs-assets/HowToDesktop/PlayButtonGreen.png";
import debianDesktopImg from "../../../../assets/products/yourpc/docs-assets/HowToDesktop/DebianDesktop.png";

export const howToLaunchData: PageData = {
  id: "how-to-launch",
  title: "How to launch Linux Desktop",
  category: "Getting Started",
  tagline: "Follow these step-by-step instructions to initialize and run a fully operational Linux Desktop experience.",
  breadcrumbs: ["Getting Started", "How to launch Linux Desktop"],
  outline: [
    { id: "step-1", title: "Step 1: Open YourPC" },
    { id: "step-2", title: "Step 2: Download the Rootfs" },
    { id: "step-3", title: "Step 3: Start the Renderer" },
    { id: "step-4", title: "Step 4: Launching Debian" },
    { id: "why-only-debian", title: "Why only Debian?" }
  ],
  sections: [
    {
      id: "step-1",
      title: "Step 1: Open YourPC",
      text: "When you open the app, you will be greeted with this playful dino dashboard illustration. Click on the Debian option visible on this page to load its parameters.",
      imageSrc: homeScreenImg.src
    },
    {
      id: "step-2",
      title: "Step 2: Download the Rootfs",
      text: "You will see this Dashboard. Click on the play icon (play-button image), you will be prompted to download the Debian rootfs. Proceed and it will download and extract the rootfs in the app's Linux directory. Then when extraction is complete click on the play button again.",
      imageSrc: mainScreenImg.src
    },
    {
      id: "step-3",
      title: "Step 3: Start the Renderer",
      text: "Wait for the play icon button indicator to turn solid green. When it displays green, click on it once more to initialize the YPC Renderer system process.",
      imageSrc: playButtonGreenImg.src
    },
    {
      id: "step-4",
      title: "Step-4: Launching Debian",
      text: "And voilà! Enjoy a highly stable, performance-optimized Debian desktop environment running natively inside your Android sandbox environment.",
      imageSrc: debianDesktopImg.src
    },
    {
      id: "why-only-debian",
      title: "Why only Debian?",
      text: "Other Linux distributions will be added over time once the foundational system architecture matures and reaches extreme stability.\n\nFurthermore, we plan to modify the architecture to allow custom rootfs loading rather than simply hardcoding default download targets. The ultimate goal is to cater to everyone's custom requirements, which wouldn't be possible simply by providing predefined static options."
    }
  ]
};