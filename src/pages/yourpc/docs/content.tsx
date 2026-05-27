/* File location: src/pages/yourpc/docs/content.tsx */
import React from "react";

// Official Fumadocs UI components loaded natively
import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";

// Core recursive node types
export type DocNode =
  | { type: 'separator'; title: string }
  | { type: 'page'; id: string; title: string }
  | { type: 'folder'; title: string; children: DocNode[] };

// Dynamic Page Tree mapping sections, pages, sub-sections, and sub-pages
export const pageTree: DocNode[] = [
  { type: 'separator', title: 'Introduction' },
  { type: 'page', id: 'what-is-yourpc', title: 'What is YourPC' },
  { type: 'separator', title: 'Writing' },
  { type: 'page', id: 'page-slugs', title: 'Page Slugs & Page Tree' },
  {
    type: 'folder',
    title: 'Markdown',
    children: [
      { type: 'page', id: 'markdown-math', title: 'Math' },
      { type: 'page', id: 'markdown-mermaid', title: 'Mermaid' },
      { type: 'page', id: 'markdown-twoslash', title: 'Twoslash' },
    ]
  }
];

export interface DocPage {
  id: string;
  title: string;
  category: string;
  breadcrumbs: string[];
  outline: { id: string; title: string }[];
  content: React.ReactNode;
}

export interface TypeProperty {
  name: string;
  type: string;
  description: string;
  remarks?: string;
}

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

function TypeTable({ properties }: { properties: TypeProperty[] }) {
  return (
    <div className="overflow-x-auto border border-fd-border rounded-lg bg-fd-card/40 mt-6 max-w-[720px]">
      <table className="w-full text-left border-collapse text-xs md:text-sm font-sans">
        <thead>
          <tr className="border-b border-fd-border bg-fd-muted text-fd-foreground font-semibold">
            <th className="p-3">Field</th>
            <th className="p-3">Type</th>
            <th className="p-3">Description</th>
          </tr>
        </thead>
        <tbody className="text-fd-muted-foreground divide-y divide-fd-border">
          {properties.map((prop) => (
            <tr key={prop.name} className="hover:bg-fd-muted/30 transition-colors">
              <td className="p-3 font-mono text-xs font-semibold text-fd-primary">
                {prop.name}
              </td>
              <td className="p-3 font-mono text-xs text-fd-foreground">
                <code className="px-1.5 py-0.5 rounded bg-fd-muted border border-fd-border text-fd-foreground text-[11px]">
                  {prop.type}
                </code>
              </td>
              <td className="p-3 space-y-1">
                <p className="leading-relaxed text-fd-muted-foreground">{prop.description}</p>
                {prop.remarks && (
                  <p className="text-[11px] text-fd-primary/80 italic font-medium font-sans">
                    @remarks {prop.remarks}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Complete physical content database for each page and sub-page
export const pages: Record<string, DocPage> = {
  "what-is-yourpc": {
    id: "what-is-yourpc",
    title: "What is YourPC",
    category: "Introduction",
    breadcrumbs: ["Introduction", "What is YourPC"],
    outline: [
      { id: "overview", title: "Overview" },
      { id: "core-capabilities", title: "Core Capabilities" },
      { id: "configuration-api", title: "Configuration API" }
    ],
    content: (
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
            What is YourPC
          </h1>
          <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            Explore the framework architecture and core execution details.
          </p>
        </div>

        <section id="overview" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Overview
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px] font-normal font-sans">
            YourPC makes desktop virtualization accessible on Android. Unlike native virtual machines, it operates without root requirements or kernel modifications, acting as a lightweight layer mapping system calls directly onto the AOSP kernel.
          </p>
        </section>

        <section id="core-capabilities" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Core Capabilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-fd-muted-foreground text-[15px] leading-7 max-w-[720px]">
            <li>High Performance frame buffers with minimal drawing latency.</li>
            <li>Local directory structures accessible directly from native file browsers.</li>
            <li>Pre-compiled standard Debian repositories.</li>
          </ul>
        </section>

        <section id="configuration-api" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Configuration API
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px]">
            Properties declared within your TypeScript schema config file:
          </p>
          <TypeTable properties={yourPCConfigProperties} />
        </section>
      </div>
    )
  },

  "page-slugs": {
    id: "page-slugs",
    title: "Page Slugs & Page Tree",
    category: "Writing",
    breadcrumbs: ["Writing", "Page Slugs & Page Tree"],
    outline: [
      { id: "slug-routing", title: "Slug Routing" },
      { id: "directory-tree", title: "Directory Tree" }
    ],
    content: (
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
            Page Slugs & Page Tree
          </h1>
          <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            Understand how dynamic file structures map to your layout navigation categories.
          </p>
        </div>

        <section id="slug-routing" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Slug Routing
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px] font-sans">
            YourPC parses catch-all dynamic path routes under Catch-All parameters. Every file loaded inside your document directories establishes unique slug identifiers mapped natively to sidebar triggers.
          </p>
        </section>

        <section id="directory-tree" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Directory Tree
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px]">
            The workspace files configuration matches this standard structure:
          </p>
          <div className="max-w-[720px] bg-fd-muted/30 p-2 rounded-xl border border-fd-border">
            <Files>
              <Folder name="src" defaultOpen>
                <Folder name="pages" defaultOpen>
                  <Folder name="yourpc" defaultOpen>
                    <Folder name="docs" defaultOpen>
                      <File name="content.tsx" />
                      <File name="index.astro" />
                    </Folder>
                  </Folder>
                </Folder>
              </Folder>
            </Files>
          </div>
        </section>
      </div>
    )
  },

  "markdown-math": {
    id: "markdown-math",
    title: "Math",
    category: "Markdown",
    breadcrumbs: ["Writing", "Markdown", "Math"],
    outline: [
      { id: "math-equations", title: "Math Equations" },
      { id: "katex-rendering", title: "KaTeX Rendering" }
    ],
    content: (
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
            Math Formatting
          </h1>
          <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            Write beautiful, mathematical formulas using LaTeX parameters.
          </p>
        </div>

        <section id="math-equations" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Math Equations
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px] font-sans">
            Standard mathematical equations can be rendered inline or in separate blocks using LaTeX expressions wrapped inside double dollar signs.
          </p>
          <Callout type="info" className="max-w-[720px] text-fd-foreground bg-fd-muted border-fd-border">
            Always wrap equations inside <code className="bg-fd-accent px-1 py-0.5 rounded text-fd-primary">$$</code> delimiters to compile block equations cleanly.
          </Callout>
        </section>

        <section id="katex-rendering" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            KaTeX Rendering
          </h2>
          <pre className="p-4 rounded-lg bg-fd-muted border border-fd-border font-mono text-xs text-fd-foreground max-w-[720px]">
            <code>{"$$ f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi $$"}</code>
          </pre>
        </section>
      </div>
    )
  },

  "markdown-mermaid": {
    id: "markdown-mermaid",
    title: "Mermaid",
    category: "Markdown",
    breadcrumbs: ["Writing", "Markdown", "Mermaid"],
    outline: [
      { id: "mermaid-diagrams", title: "Mermaid Diagrams" },
      { id: "flowchart-example", title: "Flowchart Example" }
    ],
    content: (
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
            Mermaid Diagrams
          </h1>
          <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            Generate visual diagrams and flowcharts directly inside markdown code blocks.
          </p>
        </div>

        <section id="mermaid-diagrams" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Mermaid Diagrams
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px]">
            Fumadocs supports compiling Mermaid.js flowchart schemas on-the-fly, generating clean graphics layouts directly in the client body.
          </p>
        </section>

        <section id="flowchart-example" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Flowchart Example
          </h2>
          <pre className="p-4 rounded-lg bg-fd-muted border border-fd-border font-mono text-xs text-fd-foreground max-w-[720px]">
            <code>{`graph TD;
    A[Start] --> B(Configure PRoot);
    B --> C{Verify Memory Limit};
    C -- Yes --> D[Launch Desktop];
    C -- No --> E[Display Error];`}</code>
          </pre>
        </section>
      </div>
    )
  },

  "markdown-twoslash": {
    id: "markdown-twoslash",
    title: "Twoslash",
    category: "Markdown",
    breadcrumbs: ["Writing", "Markdown", "Twoslash"],
    outline: [
      { id: "twoslash-compilation", title: "Twoslash Compilation" },
      { id: "syntax-verification", title: "Syntax Verification" }
    ],
    content: (
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
            Twoslash Integration
          </h1>
          <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            Integrate live, compile-time TypeScript code errors and descriptions on hover.
          </p>
        </div>

        <section id="twoslash-compilation" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Twoslash Compilation
          </h2>
          <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px]">
            Twoslash compiles your inline code blocks through TypeScript compilers. It displays interactive compiler warning flags and type descriptions directly when readers hover over variables.
          </p>
        </section>

        <section id="syntax-verification" className="space-y-3.5 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
            Syntax Verification
          </h2>
          <pre className="p-4 rounded-lg bg-fd-muted border border-fd-border font-mono text-xs text-fd-foreground max-w-[720px]">
            <code>{"// @noErrors\nconst config: YourPCConfig = {\n  distribution: 'debian-trixie',\n  vncPort: 5901\n};"}</code>
          </pre>
        </section>
      </div>
    )
  }
};