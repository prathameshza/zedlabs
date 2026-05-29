/* File location: src/pages/yourpc/docs/_page/android_phantom_killer.ts */
import { type PageData } from "./what-is-yourpc";

// Import step screenshots dynamically from your assets directory
import softwareVersionImg from "../../../../assets/products/yourpc/docs-assets/AndroidPhantomKiller/SoftwareVersion.png";
import searchDeveloperOptionsImg from "../../../../assets/products/yourpc/docs-assets/AndroidPhantomKiller/SearchDeveloperOptions.png";
import enableDeveloperOptionsImg from "../../../../assets/products/yourpc/docs-assets/AndroidPhantomKiller/EnableDevelopereOptions.png";
import disableChildProcessRestrictionsImg from "../../../../assets/products/yourpc/docs-assets/AndroidPhantomKiller/DisableChildProcessRestrictions.png";

export const androidPhantomKillerData: PageData = {
  id: "android-phantom-killer",
  title: "Android Phantom Killer",
  category: "Known limitations and Issues",
  tagline: "Understand why background Linux environment processes sometimes crash and learn how to prevent Android from aggressively terminating your PRoot environment.",
  breadcrumbs: ["Known limitations and Issues", "Android Phantom Killer"],
  outline: [
    { id: "what-is-phantom-killer", title: "What is Android Phantom Killer?" },
    { id: "disable-via-adb", title: "Disable via ADB" },
    { id: "enable-developer-options", title: "Step 1: Enable Developer Options" },
    { id: "search-developer-options", title: "Step 2: Find Developer Options" },
    { id: "toggle-developer-options", title: "Step 3: Toggle Developer Options" },
    { id: "disable-child-restrictions", title: "Step 4: Disable Restrictions" }
  ],
  sections: [
    {
      id: "what-is-phantom-killer",
      title: "What is Android Phantom Killer?",
      text: "The Android Phantom Killer is a process monitoring system introduced in Android 12. It aggressively tracks background processes and automatically terminates child subprocesses spawned by applications—such as terminal processes running inside PRoot containers—if they exceed system-defined process or resource thresholds.\n\nBecause YourPC utilizes PRoot to provide an environment for Linux to run on inside an Android application sandbox, these background threads can be flagged as 'phantom processes' and terminated abruptly, leading to unexpected desktop or terminal connection drops."
    },
    {
      id: "disable-via-adb",
      title: "Disable via ADB",
      text: "The most robust method to prevent phantom process termination is to disable the feature entirely using ADB (Android Debug Bridge).\n\nConnect your mobile device to a computer with ADB set up, open your terminal, and execute the following command:\n\n(code-block)\n\nThis flag disables the global phantom process monitor on Android, allowing your Linux desktop to run stable in the background.",
      codeblock: {
        lang: "bash",
        code: 'adb shell "settings put global settings_enable_monitor_phantom_procs false"'
      },
      note: "For detailed commands and extensive background info, you can [see this docs on this topic](https://github.com/agnostic-apollo/Android-Docs/blob/master/en/docs/apps/processes/phantom-cached-and-empty-processes.md#commands-to-disable-phantom-process-killing-and-tldr).",
      noteType: "info"
    },
    {
      id: "enable-developer-options",
      title: "Step 1: Enable Developer Options",
      text: "Alternatively, you can manually disable child process restrictions directly from your device options.\n\nFirst, go to Settings -> About phone -> Version info, and tap multiple times at 'Software Version' or 'Build number' until Developer Options are unlocked.",
      imageSrc: softwareVersionImg.src,
      note: "Please note that this option is laid out differently across different device manufacturers. Check the specific navigation path for your own device model if it differs.",
      noteType: "info"
    },
    {
      id: "search-developer-options",
      title: "Step 2: Find Developer Options",
      text: "After enabling Developer Options, open your main Settings app and use the top search bar to search for 'Developer options' to quickly locate and access the hidden menu.",
      imageSrc: searchDeveloperOptionsImg.src
    },
    {
      id: "toggle-developer-options",
      title: "Step 3: Toggle Developer Options",
      text: "Open the Developer Options page, ensure the main Developer options toggle is enabled, and click 'OK' if prompted with any warning message.",
      imageSrc: enableDeveloperOptionsImg.src
    },
    {
      id: "disable-child-restrictions",
      title: "Step 4: Disable Restrictions",
      text: "Navigate down towards the Apps section and locate the 'Disable Child Process Restrictions' option. Enable the toggle to prevent the system from aggressively terminating your background workloads.",
      imageSrc: disableChildProcessRestrictionsImg.src,
      note: "Enabling this option provides significant relief and prevents many common background crashes, but it may not completely guarantee full immunity against background termination depending on your manufacturer's specific battery optimizer settings.",
      noteType: "info"
    }
  ]
};