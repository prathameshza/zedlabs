/* File location: src/pages/yourpc/docs/_page/what-is-yourpc.ts */

export interface SectionData {
  id: string;
  title: string;
  text: string;
  listItems?: string[];
  showConfigTable?: boolean;
  note?: string;
  noteType?: "info" | "warning" | "success" | "error";
  imageSrc?: string;
  codeblock?: { lang: string; code: string };
}

export interface PageData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  breadcrumbs: string[];
  outline: { id: string; title: string }[];
  sections: SectionData[];
}

export interface TypeProperty {
  name: string;
  type: string;
  description: string;
  remarks?: string;
}

// Config table properties
export const yourPCConfigProperties: TypeProperty[] = [];

export const whatIsYourPCData: PageData = {
  id: "what-is-yourpc",
  title: "What is YourPC",
  category: "Introduction",
  tagline: "YourPC is an app that lets users run Debian and other Linux distros in one click. It is developed such that anyone, whether familiar with Linux or not, can use it.",
  breadcrumbs: ["Introduction", "What is YourPC"],
  outline: [
    { id: "why-name-it", title: "Why name it YourPC?" },
    { id: "what-is-planned", title: "What is planned?" }
  ],
  sections: [
    {
      id: "why-name-it",
      title: "Why name it YourPC?",
      text: "Well, the idea was to make an app that gives the concept of using a mini PC. I was going to add a bootloader like GRUB that loads the Linux distro, make a small VM, etc., but due to some technical and time limitations, I dropped it over time.\n\nYourPC or YPC are both the same thing.",
      note: "Currently YourPC is a very early product which will change over time. It is being developed by a single solo developer."
    },
    {
      id: "what-is-planned",
      title: "What is planned?",
      text: "Well, many things. I was not able to implement all of them because of time constraints, but here is what I have in mind:",
      listItems: [
        "YPC SHELL - This will be a default shell which will support core Linux.",
        "Terminal extension support - since the Terminal is written in React, I will later try to make it modular enough to add extensions and fully customize it.",
        "GPU Support for YPC Renderer.",
        "Replace PRoot.",
        "Custom Rootfs.",
        "Custom Scripts."
      ]
    }
  ]
};