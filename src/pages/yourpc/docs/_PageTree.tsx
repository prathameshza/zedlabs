/* File location: src/pages/yourpc/docs/_PageTree.tsx */
import { whatIsYourPCData, yourPCConfigProperties, type PageData } from "./_page/what-is-yourpc";
import { howToLaunchData } from "./_page/how-to-launch";

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
  { type: 'page', id: 'how-to-launch', title: 'How to launch Linux Desktop' }
];

// 2. Page Database Map
export const pages: Record<string, PageData> = {
  "what-is-yourpc": whatIsYourPCData,
  "how-to-launch": howToLaunchData
};