/* File location: src/components/YourPCDocs.tsx */
import React, { useState, useEffect, useRef } from "react";

// Official Fumadocs components loaded natively
import { Callout } from "fumadocs-ui/components/callout";

// Import all dynamic metadata, databases, and structural parameters from PageTree
import { 
  pageTree, 
  pages, 
  defaultPageId, 
  yourPCConfigProperties, 
  type DocNode,
  type PageData,
  type SectionData
} from "../pages/yourpc/docs/_PageTree";

// Import visual assets
import ypcLogo from "../assets/products/yourpc/logo/YPC_logo.png";
import buriBuriImage from "../assets/products/yourpc/docs-assets/buri-buri-zaemon.jpeg";
import playButtonIcon from "../assets/products/yourpc/docs-assets/HowToDesktop/play-button.png";

export interface TypeProperty {
  name: string;
  type: string;
  description: string;
  remarks?: string;
}

// High-density TypeTable component mapped directly to TS definitions
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
          {properties.map((prop: TypeProperty) => (
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

export default function YourPCDocs() {
  const [activePageId, setActivePageId] = useState(defaultPageId);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeOutlineId, setActiveOutlineId] = useState("");

  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Dynamic Content Loader queries the dynamic database
  const activePage = pages[activePageId] || pages[defaultPageId];

  // Viewport scrollspy tracking active subsections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveOutlineId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    activePage.outline.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activePageId]);

  // Command+K search box listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  const toggleFolder = (folderTitle: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderTitle]: !prev[folderTitle]
    }));
  };

  // Recursive sidebar renderer capable of compiling folders and sub-pages
  const renderSidebarItem = (node: DocNode) => {
    if (node.type === "separator") {
      return (
        <h4 
          key={node.title} 
          className="text-[11px] uppercase font-bold text-fd-muted-foreground tracking-wider mb-2.5 px-2 mt-5 first:mt-0 font-sans"
        >
          {node.title}
        </h4>
      );
    }

    if (node.type === "folder") {
      const isExpanded = !!expandedFolders[node.title];
      
      const hasActiveChild = (children: DocNode[]): boolean => {
        return children.some((child) => {
          if (child.type === "page") return child.id === activePageId;
          if (child.type === "folder") return hasActiveChild(child.children);
          return false;
        });
      };
      const active = hasActiveChild(node.children);

      return (
        <div key={node.title} className="space-y-1 font-sans">
          <button
            onClick={() => toggleFolder(node.title)}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              active 
                ? "text-fd-primary bg-fd-primary/5" 
                : "text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/30"
            }`}
          >
            <span>{node.title}</span>
            <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${isExpanded ? "" : "-rotate-90"}`}>
              expand_more
            </span>
          </button>
          
          {isExpanded && (
            <ul className="pl-2 border-l border-fd-border/30 ml-4 space-y-1 relative">
              {node.children.map(renderSidebarItem)}
            </ul>
          )}
        </div>
      );
    }

    if (node.type === "page") {
      const isAvailable = !!pages[node.id];
      const isActive = activePageId === node.id;

      return (
        <li key={node.id} className="list-none">
          <button
            onClick={() => {
              if (isAvailable) {
                setActivePageId(node.id);
                setMobileSidebarOpen(false);
              }
            }}
            disabled={!isAvailable}
            className={`w-full flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
              isActive
                ? "bg-fd-primary/10 text-fd-primary font-semibold"
                : isAvailable
                  ? "text-fd-muted-foreground hover:text-fd-foreground hover:bg-fd-muted/50 cursor-pointer"
                  : "text-fd-muted-foreground/35 cursor-not-allowed"
            }`}
          >
            {isActive && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-fd-primary rounded-r" />
            )}
            <span className={isActive ? "pl-2 transition-all" : "transition-all"}>{node.title}</span>
          </button>
        </li>
      );
    }

    return null;
  };

  // Convert search corpus dynamically (including taglines, descriptions, and section body texts)
  const searchCorpus = Object.values(pages).map((p: PageData) => {
    const sectionsText = p.sections
      .map((sec: SectionData) => {
        const listText = sec.listItems ? sec.listItems.join(" ") : "";
        const noteText = sec.note ? sec.note : "";
        return `${sec.title} ${sec.text} ${listText} ${noteText}`;
      })
      .join(" ");

    return {
      id: p.id,
      title: p.title,
      category: p.category,
      tagline: p.tagline,
      breadcrumbsText: p.breadcrumbs.join(" "),
      fullSearchableText: `${p.title} ${p.tagline} ${p.category} ${p.breadcrumbs.join(" ")} ${sectionsText}`
    };
  });

  const filteredSearchResults = searchCorpus.filter((item) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return item.fullSearchableText.toLowerCase().includes(query);
  });

  // Replaces text placeholders like "(play-button image)" with inline UI images
  const renderTextWithInlineImages = (text: string) => {
    const placeholder = "(play-button image)";
    if (!text.includes(placeholder)) {
      return text;
    }
    const parts = text.split(placeholder);
    return (
      <>
        {parts.map((part: string, i: number) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <img 
                src={playButtonIcon.src} 
                alt="Play Button Icon" 
                className="inline-block h-5 w-auto mx-1 align-middle select-none border border-fd-border bg-fd-card/40 rounded p-0.5" 
              />
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  // Dynamic renderer maps standard TypeScript definitions into visual subsections
  const renderSectionNode = (section: SectionData) => {
    const hasImage = !!section.imageSrc;

    // Isolate structural page text elements to allow structural grid distribution
    const textContent = (
      <div className="space-y-3.5">
        <h2 className="text-xl md:text-2xl font-bold text-fd-foreground tracking-tight">
          {section.title}
        </h2>
        <p className="text-fd-muted-foreground text-[15px] leading-7 max-w-[720px] font-normal font-sans whitespace-pre-line">
          {renderTextWithInlineImages(section.text)}
        </p>

        {section.listItems && (
          <ul className="list-disc list-inside space-y-2 text-fd-muted-foreground text-[15px] leading-7 max-w-[720px] pl-2 font-sans">
            {section.listItems.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Note box rendering logic */}
        {section.note && (
          <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-yellow-200/90 text-sm font-sans mt-4 leading-relaxed max-w-[720px] flex gap-3">
            <span className="material-symbols-outlined text-yellow-400 select-none shrink-0">info</span>
            <div>
              <span className="font-bold text-yellow-400">Note: </span>
              {section.note}
            </div>
          </div>
        )}

        {/* Developer Image & Subtitle Section */}
        {section.id === "why-name-it" && (
          <div className="mt-6 space-y-3">
            <p className="text-fd-muted-foreground text-xs md:text-sm font-sans italic font-medium">
              Developed by me...
            </p>
            <div className="max-w-[280px] sm:max-w-[320px] rounded-xl overflow-hidden border border-fd-border bg-fd-card/20 p-1 shadow-sm">
              <img 
                src={buriBuriImage.src} 
                alt="Developer Illustration" 
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        )}

        {section.showConfigTable && (
          <TypeTable properties={yourPCConfigProperties} />
        )}

        {section.id === "overview" && (
          <Callout type="info" className="my-2 text-fd-foreground bg-fd-muted border-fd-border">
            PROot safely isolates your virtual filesystem inside the application sandbox without requiring system root privileges.
          </Callout>
        )}
      </div>
    );

    return (
      <section id={section.id} key={section.id} className="scroll-mt-24 py-4 first:pt-0 border-b border-fd-border/30 last:border-b-0 pb-10">
        {hasImage ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left column: Image */}
            <div className="md:col-span-6 flex justify-center">
              <div className="w-full max-w-[450px] md:max-w-full rounded-xl overflow-hidden border border-fd-border bg-fd-card/20 p-1.5 shadow-md">
                <img 
                  src={section.imageSrc} 
                  alt={section.title} 
                  className="w-full h-auto rounded-lg object-contain select-none max-h-[300px] md:max-h-[400px]"
                />
              </div>
            </div>
            {/* Right column: Text content */}
            <div className="md:col-span-6">
              {textContent}
            </div>
          </div>
        ) : (
          <div>
            {textContent}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-fd-background text-fd-foreground font-sans antialiased">
      {/* Top Mobile Bar */}
      <header className="flex md:hidden items-center justify-between px-6 py-4 border-b border-fd-border bg-fd-background z-50">
        <div className="flex items-center gap-2">
          <img src={ypcLogo.src} alt="YourPC Logo" className="h-5 w-5 object-contain rounded shadow-sm" />
          <span className="font-bold text-fd-foreground tracking-tight">YourPC Docs</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-1 text-fd-muted-foreground hover:text-fd-foreground"
            aria-label="Open search dialog"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-1 text-fd-muted-foreground hover:text-fd-foreground"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined">
              {mobileSidebarOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Left Sidebar Layout */}
      <aside
        className={`${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed md:relative top-0 left-0 bottom-0 z-40 w-64 md:w-[260px] border-r border-fd-border bg-fd-background flex flex-col transition-transform duration-300 ease-in-out h-full shrink-0`}
      >
        {/* Header Branding */}
        <div className="flex items-center justify-between px-6 h-16 shrink-0">
          <a href="/yourpc" className="flex items-center gap-2.5">
            <img src={ypcLogo.src} alt="YourPC Logo" className="h-6 w-6 object-contain rounded shadow-sm" />
            <span className="font-bold text-fd-foreground tracking-tight text-sm">YourPC Docs</span>
          </a>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-fd-muted border border-fd-border text-fd-muted-foreground font-mono">v1.0.0</span>
        </div>

        {/* Sidebar Search Bar */}
        <div className="px-4 py-2 shrink-0">
          <button
            onClick={() => setSearchOpen(true)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-fd-muted border border-fd-border text-fd-muted-foreground hover:text-fd-foreground transition-colors text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">search</span>
              <span>Search...</span>
            </div>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-fd-muted border border-fd-border font-mono text-[10px] text-fd-muted-foreground">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {pageTree.map(renderSidebarItem)}
        </nav>

        {/* Global Footer back-to-site link */}
        <div className="p-4 border-t border-fd-border bg-fd-background shrink-0 flex items-center justify-between">
          <a
            href="/yourpc"
            className="flex items-center gap-1.5 text-xs text-fd-muted-foreground hover:text-fd-foreground font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to Product</span>
          </a>
        </div>
      </aside>

      {/* Main Documentation Frame */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-fd-background">
        <div className="flex-1 flex overflow-y-auto w-full">
          {/* Middle Article Frame */}
          <article className="flex-1 px-6 md:px-14 py-12 max-w-[840px] mx-auto overflow-y-auto scroll-smooth">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1 text-xs text-fd-muted-foreground mb-6 font-semibold">
              {activePage.breadcrumbs.map((crumb: string, idx: number) => (
                <React.Fragment key={crumb}>
                  {idx > 0 && <span className="material-symbols-outlined text-[12px] text-fd-muted-foreground/60">chevron_right</span>}
                  <span className={idx === activePage.breadcrumbs.length - 1 ? "text-fd-foreground font-bold" : ""}>
                    {crumb}
                  </span>
                </React.Fragment>
              ))}
            </div>

            {/* Document Render Body */}
            <div className="space-y-10">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-fd-foreground tracking-tight font-sans">
                  {activePage.title}
                </h1>
                <p className="text-fd-muted-foreground text-base md:text-lg font-normal leading-relaxed">
                  {activePage.tagline}
                </p>
              </div>

              {activePage.sections.map(renderSectionNode)}
            </div>

            {/* Bottom Nav Helper */}
            <div className="mt-20 pt-8 border-t border-fd-border flex justify-between">
              <span className="text-xs text-fd-muted-foreground font-semibold">ZedLabs Docs Protocol • 2026</span>
              <a href="#overview" className="text-xs text-fd-primary hover:underline font-semibold">
                Back to Top ↑
              </a>
            </div>
          </article>

          {/* Right Sidebar - Scrollspy Table of Contents */}
          <aside className="hidden lg:block w-56 shrink-0 border-l border-fd-border/30 p-6 overflow-y-auto bg-fd-background">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase font-bold text-fd-muted-foreground tracking-wider">
                On This Page
              </h4>
              
              {/* Dynamic scroll indicator timeline bar */}
              <ul className="relative border-l border-fd-border pl-3.5 space-y-3.5 text-[13px] font-semibold py-0.5">
                {activePage.outline.map((section: any) => {
                  const isActive = activeOutlineId === section.id;
                  return (
                    <li key={section.id} className="relative">
                      {isActive && (
                        <div className="absolute -left-[16px] top-1/2 -translate-y-1/2 w-[2.5px] h-3.5 bg-fd-primary rounded-r" />
                      )}
                      <a
                        href={`#${section.id}`}
                        className={`block transition-colors duration-150 ${
                          isActive
                            ? "text-fd-primary font-bold"
                            : "text-fd-muted-foreground hover:text-fd-foreground"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Global Interactive Ctrl+K Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 bg-fd-background/80 backdrop-blur-sm">
          <div
            className="relative w-full max-w-xl bg-fd-popover border border-fd-border rounded-xl overflow-hidden shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 border-b border-fd-border">
              <span className="material-symbols-outlined text-fd-muted-foreground text-[18px]">search</span>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search YourPC Docs..."
                className="w-full py-4 bg-transparent border-0 text-fd-foreground placeholder-fd-muted-foreground focus:ring-0 outline-none text-sm"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs px-2 py-1 rounded bg-fd-muted border border-fd-border text-fd-muted-foreground hover:text-fd-foreground font-semibold"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[320px] overflow-y-auto p-2 space-y-1">
              {filteredSearchResults.length > 0 ? (
                filteredSearchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => {
                      if (pages[result.id]) {
                        setActivePageId(result.id);
                        setSearchOpen(false);
                        setSearchQuery("");
                      }
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-fd-muted/40 transition-colors flex flex-col gap-1 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-fd-foreground group-hover:text-fd-primary font-bold text-xs md:text-sm">
                        {result.title}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-fd-muted-foreground px-1.5 py-0.5 rounded bg-fd-muted border border-fd-border">
                        {result.category}
                      </span>
                    </div>
                    <span className="text-xs text-fd-muted-foreground leading-normal line-clamp-1">
                      {result.tagline}
                    </span>
                  </button>
                ))
              ) : (
                <div className="py-12 text-center text-fd-muted-foreground text-xs md:text-sm">
                  No matching results found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}