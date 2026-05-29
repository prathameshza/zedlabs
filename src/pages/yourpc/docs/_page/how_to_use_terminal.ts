/* File location: src/pages/yourpc/docs/_page/how_to_use_terminal.ts */
import { type PageData } from "./what-is-yourpc";

// Import terminal step screenshots dynamically from your assets directory
import terminalMatrixImg from "../../../../assets/products/yourpc/docs-assets/Terminal/TerminalMatrix.jpeg";
import neofetchImg from "../../../../assets/products/yourpc/docs-assets/Terminal/NewoFetch.jpeg";
import lazygitImg from "../../../../assets/products/yourpc/docs-assets/Terminal/lazygit.jpeg";

export const howToUseTerminalData: PageData = {
  id: "how-to-use-terminal",
  title: "How to use Terminal?",
  category: "Getting Started",
  tagline: "Learn how to access, configure, and maximize the high-performance xterm-compliant shell interface in YourPC.",
  breadcrumbs: ["Getting Started", "How to use Terminal?"],
  outline: [
    { id: "distro-requirement", title: "Direct Connection & Requirements" },
    { id: "xterm-compliance", title: "ANSI & Color Fidelity" },
    { id: "neofetch-view", title: "System Monitoring (Neofetch)" },
    { id: "lazygit-view", title: "TUI Clients (lazygit)" },
    { id: "multi-terminal", title: "Multi-Terminal Workspaces" },
    { id: "toolbar-actions", title: "Toolbar Operations" }
  ],
  sections: [
    {
      id: "distro-requirement",
      title: "Direct Connection & Requirements",
      text: "Before you can open your terminal, you must first download and extract the Linux distribution rootfs (following the Getting Started instructions).\n\nOnce the rootfs installation is complete, launching the Terminal option opens a direct shell connection straight into your local Linux distribution environment. There are no virtual machines or emulation translation layers; you are communicating directly with the PRoot user-space environment, allowing you to run compilers, package managers, and text editors with native performance."
    },
    {
      id: "xterm-compliance",
      title: "ANSI & Color Fidelity",
      text: "The built-in terminal is fully xterm-compliant, meaning it supports 256-color spaces, dynamic window resizing, and ANSI escape sequences. This compliance ensures that colors, highlights, and layouts render precisely the way your active Linux distro displays them, allowing you to run complex utilities like cmatrix without graphical glitches.",
      imageSrc: terminalMatrixImg.src
    },
    {
      id: "neofetch-view",
      title: "System Monitoring (Neofetch)",
      text: "You can execute popular monitoring and information tools such as neofetch or fastfetch. The ASCII art, system stats, and theme configurations align seamlessly, mirroring a physical terminal workspace.",
      imageSrc: neofetchImg.src
    },
    {
      id: "lazygit-view",
      title: "TUI Clients (lazygit)",
      text: "Interactive terminal user interfaces (TUIs) such as lazygit, htop, vim, and neovim render with full keyboard support and clear color separation. This lets you manage files, view Git commits, or edit code on the go without requiring a graphical desktop environment.",
      imageSrc: lazygitImg.src
    },
    {
      id: "multi-terminal",
      title: "Multi-Terminal Workspaces",
      text: "The terminal interface supports opening multiple concurrent shell tabs. This enables powerful multitasking options, letting you manage complex development structures simultaneously.\n\nFor example, you can spin up a local development web server (like a Python HTTP server or Node.js runtime) in your first terminal tab, monitor background database systems in your second tab, and perform standard file manipulations or Git operations in your third tab without interrupting any active processes."
    },
    {
      id: "toolbar-actions",
      title: "Toolbar Operations",
      text: "At the top of the active terminal session, you will find a dedicated action toolbar designed to simplify common console workflows:\n\n• **Copy Button** (icon:content_copy): Clicking this copies the entire active scrollback buffer of your terminal directly to your Android system clipboard.\n\n• **Close (Cross) Button** (icon:close): Tapping this safely terminates the current active session. This button signals a clean interrupt to your running subprocesses, preventing orphaned threads from continuing to consume system memory in the background.",
      note: "Always use the top close button to terminate active terminal sessions. This ensures the underlying PRoot process tree dismantles and stops cleanly.",
      noteType: "info"
    }
  ]
};