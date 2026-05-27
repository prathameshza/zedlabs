/* File location: src/components/page.tsx */
"use client"

import { useEffect, useState } from "react"
import googlePlayBadge from "../assets/google_play/image.png";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showContactForm, setShowContactForm] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const effectiveTheme = theme === "system" ? systemTheme : theme
    if (effectiveTheme === "dark") { root.classList.add("dark") }
    else { root.classList.remove("dark") }
    if (theme !== "system") { localStorage.setItem("theme", theme) }
    else { localStorage.removeItem("theme") }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        return systemTheme === "dark" ? "light" : "dark"
      }
      return prev === "dark" ? "light" : "dark"
    })
  }

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { setActiveSection(entry.target.id || "home") }
      })
    }
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll("section, main")
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) { element.scrollIntoView({ behavior: "smooth" }) }
    else if (sectionId === "home") { window.scrollTo({ top: 0, behavior: "smooth" }) }
  }

  useEffect(() => {
    if (showContactForm) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.innerHTML = `
        (function() {
          try{
            var f = document.createElement("iframe");
            var ifrmSrc = 'https://forms.zohopublic.in/prathmeshpaware9090gm1/form/ContactUs/formperma/UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18?zf_rszfm=1';
            try{
              if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
                for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                  var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                  utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                  var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                  if ( typeof utmVal !== "undefined" ) {
                    if ( utmVal != "" ) {
                      if(ifrmSrc.indexOf('?') > 0){ ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal; }
                      else{ ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal; }
                    }
                  }
                }
              }
              if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
                for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                  var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                  var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                  if ( typeof utmVal !== "undefined" ) {
                    if ( utmVal != "" ){
                      if(ifrmSrc.indexOf('?') > 0){ ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal; }
                      else{ ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal; }
                    }
                  }
                }
              }
            }catch(e){}
            f.src = ifrmSrc;
            f.style.border="none"; f.style.height="910px"; f.style.width="90%"; f.style.transition="all 0.5s ease";
            f.setAttribute("aria-label", 'Contact Us');
            var d = document.getElementById("zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18");
            if (d) { d.appendChild(f); }
            window.addEventListener('message', function (){
              var evntData = event.data;
              if( evntData && evntData.constructor == String ){
                var zf_ifrm_data = evntData.split("|");
                if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                  var zf_perma = zf_ifrm_data[0];
                  var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                  var iframe = document.getElementById("zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18").getElementsByTagName("iframe")[0];
                  if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                    var prevIframeHeight = iframe.style.height;
                    var zf_tout = false;
                    if( zf_ifrm_data.length == 3 ) { iframe.scrollIntoView(); zf_tout = true; }
                    if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                      if( zf_tout ) { setTimeout(function(){ iframe.style.height = zf_ifrm_ht_nw; },500); } 
                      else { iframe.style.height = zf_ifrm_ht_nw; }
                    }
                  }
                }
              }
            }, false);
          }catch(e){}
        })();
      `
      document.body.appendChild(script)
      return () => { document.body.removeChild(script) }
    }
  }, [showContactForm])

  return (
    <div className="min-h-screen w-full relative bg-background text-foreground overflow-x-hidden selection:bg-primary/25">

      {/* Top Navigation Bar - Clean solid header surface */}
      <header className="fixed top-0 w-full z-50 bg-card border-b border-border shadow-sm transition-all duration-300 h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-full">
          <div className="flex items-center gap-2">
            <a href="#" className="hover:opacity-85 transition-opacity">
              <img src="/zedlabs_logo.png" alt="ZedLabs Logo" className="h-9 w-auto" />
            </a>
          </div>
          
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
            <button onClick={() => scrollToSection("home")} className={`transition-colors quicksand-semibold ${activeSection === "home" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>Home</button>
            <button onClick={() => scrollToSection("about")} className={`transition-colors quicksand-semibold ${activeSection === "about" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>About</button>
            <button onClick={() => scrollToSection("products")} className={`transition-colors quicksand-semibold ${activeSection === "products" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>Products</button>
            <button onClick={() => scrollToSection("privacy")} className={`transition-colors quicksand-semibold ${activeSection === "privacy" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>Privacy</button>
            <button onClick={() => scrollToSection("support")} className={`transition-colors quicksand-semibold ${activeSection === "support" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>Support</button>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted" aria-label="Toggle theme">
              {mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              )}
            </button>
            <button onClick={() => setShowContactForm(true)} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity quicksand-bold">
              Get Started
            </button>
            <button className="md:hidden text-foreground p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Solid surface dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 p-4 z-40">
            <nav className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-card border border-border shadow-lg">
              <button onClick={() => { scrollToSection("home"); setMobileMenuOpen(false); }} className="text-left text-muted-foreground py-2 quicksand-regular">Home</button>
              <button onClick={() => { scrollToSection("about"); setMobileMenuOpen(false); }} className="text-left text-muted-foreground py-2 quicksand-regular">About</button>
              <button onClick={() => { scrollToSection("products"); setMobileMenuOpen(false); }} className="text-left text-muted-foreground py-2 quicksand-regular">Products</button>
              <button onClick={() => { scrollToSection("privacy"); setMobileMenuOpen(false); }} className="text-left text-muted-foreground py-2 quicksand-regular">Privacy</button>
              <button onClick={() => { scrollToSection("support"); setMobileMenuOpen(false); }} className="text-left text-muted-foreground py-2 quicksand-regular">Support</button>
            </nav>
          </div>
        )}
      </header>

      {/* Interactive Dot-Navigation Indicators - Flat, solid indicator boxes */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "products", label: "Products" },
          { id: "privacy", label: "Privacy" },
          { id: "support", label: "Support" }
        ].map((section) => (
          <button key={section.id} onClick={() => scrollToSection(section.id)} className="group relative" aria-label={`Go to ${section.label}`}>
            <div className={`w-3 h-3 rounded-full border border-primary/50 transition-all duration-300 ${activeSection === section.id ? "bg-primary scale-125" : "bg-transparent hover:border-primary"}`} />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-1 rounded-lg text-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap quicksand-medium shadow-sm">{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Container */}
      <main className="relative z-10">

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 md:px-12 text-center">
          <div className="space-y-8 max-w-4xl">
            <div className="flex justify-center">
              <img 
                src="/zedlabs_logo.png" 
                alt="ZedLabs Logo" 
                className="w-full max-w-[280px] sm:max-w-md md:max-w-2xl h-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]" 
              />
            </div>
            
            <h1 className="font-headline-xl text-4xl md:text-6xl tracking-tight leading-tight max-w-4xl mx-auto quicksand-bold">
              where innovation meets <span className="text-primary">execution</span>
            </h1>

            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg font-light leading-relaxed quicksand-light">
              We build high-performance utility software designed for technical precision and human accessibility. Minimalist tools that empower power users.
            </p>

            <div className="mt-12 flex gap-4 justify-center">
              <button onClick={() => scrollToSection("products")} className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform shadow-md quicksand-bold">
                Explore Products
              </button>
              <button onClick={() => scrollToSection("about")} className="glass-card px-8 py-4 rounded-xl font-bold text-base hover:bg-muted transition-colors quicksand-bold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 md:px-12 bg-muted/40 border-y border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight quicksand-bold">Built in Pune.<br/>Focused Worldwide.</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed quicksand-regular">
                ZedLabs is a 2-person development studio based in the tech hub of Pune, India. We believe software should be lean, focused, and exceptionally fast. Our philosophy centers on stripping away the "chrome" of traditional UI to let functional logic take center stage.
              </p>

              <div className="flex gap-8 pt-6">
                <div>
                  <span className="block text-3xl font-bold text-primary">2</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest quicksand-medium">Developers</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-primary">5+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest quicksand-medium">Active Tools</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-primary">∞</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest quicksand-medium">Efficiency</span>
                </div>
              </div>
            </div>

            {/* Redesigned Tech Philosophy (Explicit High-contrast Dark theme container) */}
            <div className="rounded-2xl border border-neutral-800 overflow-hidden flex flex-col h-[400px] shadow-lg bg-neutral-950 text-neutral-50 select-none">
              {/* Window Header */}
              <div className="bg-neutral-900 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <span className="text-xs font-mono text-neutral-500">philosophy.json</span>
                <span className="w-8" />
              </div>

              {/* Code Workspace Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between font-mono text-[11px] md:text-xs leading-relaxed relative overflow-hidden bg-neutral-950">
                <div className="space-y-4 relative z-10 text-neutral-400">
                  <div>
                    <span className="text-pink-400">"performance"</span>: &#123;
                    <div className="pl-4">
                      <span className="text-blue-400">"priority"</span>: <span className="text-amber-400">0</span>,
                      <br />
                      <span className="text-blue-400">"logic"</span>: <span className="text-emerald-400">"Strip redundant elements. Built for maximum speed."</span>
                    </div>
                    &#125;,
                  </div>

                  <div>
                    <span className="text-pink-400">"privacy"</span>: &#123;
                    <div className="pl-4">
                      <span className="text-blue-400">"priority"</span>: <span className="text-amber-400">1</span>,
                      <br />
                      <span className="text-blue-400">"storage"</span>: <span className="text-emerald-400">"Zero-knowledge logic. Local-first file systems."</span>
                    </div>
                    &#125;,
                  </div>

                  <div>
                    <span className="text-pink-400">"utility"</span>: &#123;
                    <div className="pl-4">
                      <span className="text-blue-400">"priority"</span>: <span className="text-amber-400">2</span>,
                      <br />
                      <span className="text-blue-400">"workspace"</span>: <span className="text-emerald-400">"Minimal UI chrome. Keyboard-driven accessibility."</span>
                    </div>
                    &#125;
                  </div>
                </div>

                {/* Minimalist vector illustration representing Pune node network */}
                <div className="absolute bottom-2 right-2 w-32 h-32 opacity-15 filter grayscale pointer-events-none">
                  <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
                    <circle cx="50" cy="50" r="2" fill="currentColor" />
                    <line x1="10" y1="10" x2="50" y2="50" />
                    <line x1="90" y1="30" x2="50" y2="50" />
                    <line x1="30" y1="80" x2="50" y2="50" />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                    <circle cx="90" cy="30" r="3" fill="currentColor" />
                    <circle cx="30" cy="80" r="3" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight quicksand-bold">The Utility Suite</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto quicksand-regular">Precision engineered tools designed to streamline your daily workflow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Notebook */}
              <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">edit_note</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">ACTIVE</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors quicksand-semibold mb-3">Notebook</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 quicksand-regular">Transform the way you write and organize thoughts. Markdown editor with local-first file persistence.</p>
                </div>
                <div className="space-y-4">
                  <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm quicksand-bold" href="/notebook">
                    Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                  <div className="pt-4 border-t border-border">
                    <a href="https://play.google.com/store/apps/details?id=com.zedlabs.notebook&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-85 transition-opacity">
                      <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-10 w-auto" />
                    </a>
                  </div>
                </div>
              </div>

              {/* WebCodeBox */}
              <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">terminal</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">ACTIVE</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors quicksand-semibold mb-3">WebCodeBox</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 quicksand-regular">Write, test, and debug HTML, CSS, and JS directly on your device with offline sandbox environments.</p>
                </div>
                <div className="space-y-4">
                  <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm quicksand-bold" href="/webcodebox">
                    Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                  <div className="pt-4 border-t border-border">
                    <a href="https://play.google.com/store/apps/details?id=com.zedlabs.webcodebox&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-85 transition-opacity">
                      <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-10 w-auto" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Shaderboy */}
              <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">flare</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">ACTIVE</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors quicksand-semibold mb-3">Shaderboy</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 quicksand-regular">Create stunning visual effects and interactive GLSL simulations directly in your browser or phone.</p>
                </div>
                <div className="space-y-4">
                  <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm quicksand-bold" href="/shaderboy">
                    Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                  <div className="pt-4 border-t border-border">
                    <a href="https://play.google.com/store/apps/details?id=com.zedlabs.shaderboy&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-85 transition-opacity">
                      <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-10 w-auto" />
                    </a>
                  </div>
                </div>
              </div>

              {/* PocketController */}
              <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">gamepad</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">ACTIVE</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors quicksand-semibold mb-3">PocketController</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 quicksand-regular">Turn your phone into a low-latency controller, game pad, or DAW device linked to your PC workspace.</p>
                </div>
                <div className="space-y-4">
                  <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm quicksand-bold" href="/pocketcontroller">
                    Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                  <div className="pt-4 border-t border-border">
                    <a href="https://play.google.com/store/apps/details?id=com.zedlabs.pocketcontroller&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-85 transition-opacity">
                      <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-10 w-auto" />
                    </a>
                  </div>
                </div>
              </div>

              {/* YourPC */}
              <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all flex flex-col justify-between group col-span-1 md:col-span-2 max-w-xl mx-auto w-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-muted-foreground text-4xl">monitor_heart</span>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">BETA</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors quicksand-semibold mb-3">YourPC</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6 quicksand-regular">Linux ecosystem runs. Spin up Debian terminal and direct VNC virtual workspaces inside Android.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <a className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm quicksand-bold" href="/yourpc">
                      Launch Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                    <a className="text-muted-foreground hover:text-primary font-bold inline-flex items-center gap-2 transition-all text-sm quicksand-bold border-l border-border pl-4" href="/yourpc/docs">
                      Docs <span className="material-symbols-outlined text-sm">menu_book</span>
                    </a>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground quicksand-medium border border-border">Coming Soon</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Privacy summary */}
        <section id="privacy" className="py-32 px-6 md:px-12 bg-muted/40 border-y border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="material-symbols-outlined text-primary text-5xl">shield_with_heart</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight quicksand-bold">Privacy as a Logic Gate</h2>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed quicksand-regular max-w-2xl mx-auto">
              We operate under Zero-Knowledge storage principles. Your data stays locally in your browser storage or your computer's native file systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">database_off</span>
                <span className="text-sm font-semibold text-foreground quicksand-semibold">No Server Storage</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">analytics</span>
                <span className="text-sm font-semibold text-foreground quicksand-semibold">Zero Tracking Pixels</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-card rounded-xl border border-border shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl mb-3">lock_person</span>
                <span className="text-sm font-semibold text-foreground quicksand-semibold">Client-Side Autonomy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-32 px-6 md:px-12 text-center">
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 rounded-3xl relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 pointer-events-none">
              <span className="material-symbols-outlined text-9xl text-primary">support_agent</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 quicksand-bold">Help &amp; Support</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 quicksand-regular">
              Have questions, experiencing issues, or want to share feedback about our tools? Access our support portal to submit an inquiry.
            </p>

            <button 
              onClick={() => setShowContactForm(true)} 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-md quicksand-bold"
            >
              Open Support Form <span className="material-symbols-outlined">mail</span>
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-card border-t border-border relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 md:px-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <img src="/zedlabs_logo.png" alt="ZedLabs Logo" className="h-8 w-auto" />
            <p className="text-muted-foreground text-sm max-w-xs quicksand-regular">
              © 2026 ZedLabs Studio. Built for extreme workflow performance. Engineered with care in Pune, India.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4 quicksand-bold">Ecosystem</h4>
            <ul className="space-y-2 text-sm text-muted-foreground quicksand-regular">
              <li><a className="hover:text-primary transition-colors" href="/notebook">Notebook</a></li>
              <li><a className="hover:text-primary transition-colors" href="/webcodebox">WebCodeBox</a></li>
              <li><a className="hover:text-primary transition-colors" href="/shaderboy">Shaderboy</a></li>
              <li><a className="hover:text-primary transition-colors" href="/pocketcontroller">PocketController</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4 quicksand-bold">Legal &amp; Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground quicksand-regular">
              <li><a className="hover:text-primary transition-colors" href="#privacy">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#support">Contact Support</a></li>
              <li><p className="text-xs text-muted-foreground/50 pt-2 font-mono">LAT: 18.52° N<br/>LONG: 73.85° E</p></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Zoho Contact Form Overlay */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl p-6 md:p-8 overflow-y-auto shadow-2xl">
            <button 
              onClick={() => setShowContactForm(false)} 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10" 
              aria-label="Close form"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div id="zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18" className="w-full flex justify-center pt-8"></div>
          </div>
        </div>
      )}

    </div>
  )
}