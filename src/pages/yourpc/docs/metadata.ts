/* File location: src/pages/yourpc/docs/metadata.ts */

/**
 * Standard configuration options for YourPC's Linux execution environment.
 */
export interface YourPCConfig {
  /**
   * The target Linux distribution to execute inside the Android sandbox.
   * @remarks Stable Debian trixie or bookworm distribution formats.
   */
  distribution: 'debian-trixie' | 'debian-sid' | 'debian-bookworm';
  
  /**
   * The desktop workspace rendering mode.
   * @remarks Choose between headless terminal or XFCE graphic clients.
   */
  workspaceMode: 'headless' | 'xfce' | 'vnc';
  
  /**
   * Target VNC display server port allocation.
   * @remarks Maps local loopbacks on your unrooted Android client.
   */
  vncPort: number;
}

export interface TypeProperty {
  name: string;
  type: string;
  description: string;
  remarks?: string;
}

// Simulated AST property parser from the YourPCConfig TS interface definition above
export const yourPCConfigProperties: TypeProperty[] = [
  {
    name: "distribution",
    type: "'debian-trixie' | 'debian-sid' | 'debian-bookworm'",
    description: "The target Linux distribution to execute inside the Android sandbox.",
    remarks: "Defaults to 'debian-trixie'"
  },
  {
    name: "workspaceMode",
    type: "'headless' | 'xfce' | 'vnc'",
    description: "The desktop workspace rendering mode.",
    remarks: "Choose between headless terminal or graphic VNC clients"
  },
  {
    name: "vncPort",
    type: "number",
    description: "Target VNC display server port allocation.",
    remarks: "Maps local loopbacks on your unrooted Android client"
  }
];

// Low-Level Page Tree definitions conforming to official Fumadocs schemas
export type PageTreeItem =
  | { type: 'page'; id: string; title: string; url?: string }
  | { type: 'folder'; title: string; children: PageTreeItem[] }
  | { type: 'separator'; title: string };

export const pageTree: PageTreeItem[] = [
  { type: 'separator', title: 'Introduction' },
  { type: 'page', id: 'what-is-yourpc', title: 'What is YourPC' }
];

export const docPageMetadata = {
  id: "what-is-yourpc",
  title: "What is YourPC",
  category: "Introduction",
  breadcrumbs: ["Introduction", "What is YourPC"],
  outline: [
    { id: "overview", title: "Overview" },
    { id: "core-capabilities", title: "Core Capabilities" },
    { id: "configuration-api", title: "Configuration API" }
  ]
};