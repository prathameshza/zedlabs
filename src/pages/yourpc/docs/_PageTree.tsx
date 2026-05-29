/* File location: src/pages/yourpc/docs/_PageTree.tsx */
import { whatIsYourPCData, yourPCConfigProperties, type PageData } from "./_page/what-is-yourpc";
import { howToLaunchData } from "./_page/how-to-launch";
import { howToUseTerminalData } from "./_page/how_to_use_terminal";
import { howToUseVNCData } from "./_page/how_to_use_vnc";
import { foregroundServiceData } from "./_page/foreground_service";
import { androidPhantomKillerData } from "./_page/android_phantom_killer";

// Re-export the core content interfaces for complete strict TypeScript typing
export type { PageData, SectionData } from "./_page/what-is-yourpc";
export { yourPCConfigProperties };

export type DocNode =
  | { type: 'separator'; title: string }
  | { type: 'page'; id: string; title: string }
  | { type: 'folder'; title: string; children: DocNode[] };

// Default Page ID when landing on the documentation portal
export const defaultPageId = "what-is-yourpc";

// 1. Navigation Tree Structure
export const pageTree: DocNode[] = [
  { type: 'separator', title: 'Introduction' },
  { type: 'page', id: 'what-is-yourpc', title: 'What is YourPC' },
  { type: 'separator', title: 'Getting Started' },
  { type: 'page', id: 'how-to-launch', title: 'How to launch Linux Desktop' },
  { type: 'page', id: 'how-to-use-terminal', title: 'How to use Terminal?' },
  { type: 'page', id: 'how-to-use-vnc', title: 'How to use VNC?' },
  { type: 'page', id: 'foreground-service', title: 'Foreground Service' },
  { type: 'separator', title: 'Known limitations and Issues' },
  { type: 'page', id: 'android-phantom-killer', title: 'Android Phantom Killer' }
];

// 2. Page Database Map
export const pages: Record<string, PageData> = {
  "what-is-yourpc": whatIsYourPCData,
  "how-to-launch": howToLaunchData,
  "how-to-use-terminal": howToUseTerminalData,
  "how-to-use-vnc": howToUseVNCData,
  "foreground-service": foregroundServiceData,
  "android-phantom-killer": androidPhantomKillerData
};