/* File location: src/pages/yourpc/docs/_page/how_to_use_vnc.ts */
import { type PageData } from "./what-is-yourpc";

// Import VNC step screenshots dynamically from your assets directory
import vncScreenImg from "../../../../assets/products/yourpc/docs-assets/VNC/VNCSCreen.jpeg";
import vncStartImg from "../../../../assets/products/yourpc/docs-assets/VNC/VNCStart.jpeg";
import newConnectionImg from "../../../../assets/products/yourpc/docs-assets/VNC/NewConnection.jpeg";
import vncViewerExampleImg from "../../../../assets/products/yourpc/docs-assets/VNC/VNCViewerExample.jpeg";

export const howToUseVNCData: PageData = {
  id: "how-to-use-vnc",
  title: "How to use VNC?",
  category: "Getting Started",
  tagline: "Learn how to start the graphic display server in YourPC and connect to your Linux desktop environment using a VNC viewer.",
  breadcrumbs: ["Getting Started", "How to use VNC?"],
  outline: [
    { id: "vnc-menu", title: "Step 1: Open VNC Screen" },
    { id: "vnc-start", title: "Step 2: Start VNC Server" },
    { id: "vnc-client-setup", title: "Step 3: Setup Client Application" },
    { id: "vnc-new-connection", title: "Step 4: Establish Connection" },
    { id: "vnc-connection-success", title: "Step 5: Successful Display" }
  ],
  sections: [
    {
      id: "vnc-menu",
      title: "Step 1: Open VNC Screen",
      text: "First, select the connect icon displayed on your main dashboard, and then select the VNC window card from the list of options to open its parameters page.",
      imageSrc: vncScreenImg.src
    },
    {
      id: "vnc-start",
      title: "Step 2: Start VNC Server",
      text: "Once you are on the VNC configuration dashboard, click on the 'Run Server' option. Wait a moment for the background server system to initialize until the status indicator displays 'Running'.",
      imageSrc: vncStartImg.src
    },
    {
      id: "vnc-client-setup",
      title: "Step 3: Setup Client Application",
      text: "After the VNC server starts inside YourPC, you can download any third-party VNC viewer application on your phone to view and interact with your Linux desktop GUI.\n\nBecause the display server listens on local network ports, you can also connect to your Linux desktop from other devices on your network, such as your desktop PC, laptop, or tablet.",
      note: "You must be connected to the exact same Wi-Fi or hotspot network on both your Android host and your client device (PC, laptop, or other phone) for local network connection loops to bridge successfully.",
      noteType: "info"
    },
    {
      id: "vnc-new-connection",
      title: "Step 4: Establish Connection",
      text: "Once you open your preferred VNC application, start a new connection configured with the matching host IP and port settings.\n\nHere, we are using the 'VNC Viewer' application as an example, but you are free to use any third-party software. (Please note we are not affiliated with or sponsored by them, though we would certainly welcome the opportunity!).",
      imageSrc: newConnectionImg.src
    },
    {
      id: "vnc-connection-success",
      title: "Step 5: Successful Display",
      text: "Once the address and port parameters are entered and the connection is initiated, you will see a fully operational, responsive desktop workspace running straight on your mobile client.",
      imageSrc: vncViewerExampleImg.src
    }
  ]
};