/* File location: src/components/ProductPage.tsx */
"use client"

import { useEffect, useState } from "react"
import googlePlayBadge from "../assets/google_play/image.png";
import PrivacyPolicy from "./PrivacyPolicy";

interface ProductPageProps {
  title: string;
  tagline: string;
  description: string;
  logoSrc: string;
  screenshotSrcs: string[];
  downloadLink?: string;
  pcDownloadLink?: string;
  prereleaseDownloadLink?: string;
  isComingSoon?: boolean;
  privacyVariant?: 'general' | 'notebook' | 'webcodebox' | 'shaderboy' | 'pocketcontroller' | 'yourpc' | 'retromobile';
  docsLink?: string;
}

export default function ProductPage({
  title,
  tagline,
  description,
  logoSrc,
  screenshotSrcs,
  downloadLink,
  pcDownloadLink,
  prereleaseDownloadLink,
  isComingSoon = false,
  privacyVariant = 'notebook',
  docsLink
}: ProductPageProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (savedTheme) { setTheme(savedTheme) }
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

  const scrollCarousel = (direction: number) => {
    const carousel = document.getElementById('screenshot-carousel');
    if (carousel) {
      const scrollAmount = 450;
      carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
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

      {/* Header - Solid elevated Surface */}
      <header className="fixed top-0 w-full z-50 bg-card border-b border-border shadow-sm transition-all duration-300 ease-in-out h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-full">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:opacity-85 transition-opacity">
              <img src="/zedlabs_logo.png" alt="zedlabs logo" className="h-9 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-primary text-sm font-semibold transition quicksand-semibold">Ecosystem</a>
            {docsLink && (
              <a href={docsLink} className="text-muted-foreground hover:text-primary text-sm font-semibold transition quicksand-semibold">Documentation</a>
            )}
            <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm font-semibold transition quicksand-semibold">Privacy Policy</a>
            <a href="#support" className="text-muted-foreground hover:text-primary text-sm font-semibold transition quicksand-semibold">Support</a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted" aria-label="Toggle theme">
              {mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? (
                <span className="material-symbols-outlined text-xl">light_mode</span>
              ) : (
                <span className="material-symbols-outlined text-xl">dark_mode</span>
              )}
            </button>
            <button className="md:hidden text-foreground p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 p-4 z-40">
            <nav className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-card border border-border shadow-lg">
              <a href="/" className="text-left text-muted-foreground py-2 quicksand-regular">Home</a>
              {docsLink && (
                <a href={docsLink} className="text-left text-muted-foreground py-2 quicksand-regular">Documentation</a>
              )}
              <a href="#privacy" className="text-left text-muted-foreground py-2 quicksand-regular" onClick={() => setMobileMenuOpen(false)}>Privacy Policy</a>
              <a href="#support" className="text-left text-muted-foreground py-2 quicksand-regular" onClick={() => setMobileMenuOpen(false)}>Support</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24">
        
        {/* Centered Product Hero */}
        <section className="max-w-4xl mx-auto px-6 md:px-12 mb-24 text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 rounded-2xl glass-panel flex items-center justify-center border-primary/20 bg-muted shadow-sm">
              <img src={logoSrc} alt={`${title} Logo`} className="w-16 h-16 rounded-xl object-contain" />
            </div>
            
            <h1 className="font-headline-xl text-4xl md:text-6xl text-foreground tracking-tight leading-tight quicksand-bold">{title}</h1>
            <p className="text-primary text-xl font-semibold quicksand-semibold">{tagline}</p>
            
            <p className="font-body-md text-base md:text-lg text-muted-foreground leading-relaxed quicksand-regular max-w-2xl">
              {description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center justify-center">
              {isComingSoon ? (
                <span className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-muted text-muted-foreground quicksand-medium border border-border">
                  In Active Development
                </span>
              ) : (
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-85 transition-all"
                >
                  <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-[52px] w-auto" />
                </a>
              )}

              {docsLink && (
                <a
                  href={docsLink}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-800 text-neutral-100 hover:bg-neutral-700 rounded-xl font-bold text-base transition-all shadow-md hover:scale-[1.03] active:scale-95 quicksand-bold border border-neutral-700"
                >
                  <span className="material-symbols-outlined text-xl">menu_book</span>
                  View Documentation
                </a>
              )}

              {pcDownloadLink && (
                <a
                  href={pcDownloadLink}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:opacity-95 transition-all shadow-md hover:scale-[1.03] active:scale-95 quicksand-bold"
                >
                  <span className="material-symbols-outlined text-xl">download_for_offline</span>
                  Download PC Client
                </a>
              )}

              {prereleaseDownloadLink && (
                <a
                  href={prereleaseDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-orange-600 text-white rounded-xl font-bold text-base hover:bg-orange-700 transition-all shadow-md hover:scale-[1.03] active:scale-95 quicksand-bold"
                >
                  <span className="material-symbols-outlined text-xl">developer_mode</span>
                  Try Beta Pre-Release
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Screenshot Carousel */}
        {screenshotSrcs.length > 0 && (
          <section className="mb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground quicksand-semibold">Interface Gallery</h2>
                <p className="font-body-md text-sm md:text-base text-muted-foreground quicksand-regular">Peek inside the mechanics of the utility stack.</p>
              </div>
              <div className="flex gap-4">
                <button aria-label="Scroll back" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all bg-card" onClick={() => scrollCarousel(-1)}>
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button aria-label="Scroll forward" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all bg-card" onClick={() => scrollCarousel(1)}>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="flex gap-8 overflow-x-auto px-6 md:px-12 hide-scrollbar snap-x snap-mandatory scroll-smooth" id="screenshot-carousel">
              {screenshotSrcs.map((src, index) => (
                <div key={index} className="flex-none max-w-[90vw] snap-start space-y-4">
                  <div className="glass-panel p-2 rounded-2xl relative overflow-hidden bg-muted shadow-md flex items-center justify-center">
                    <img 
                      src={src} 
                      alt={`${title} screenshot preview`} 
                      className="max-h-[350px] md:max-h-[480px] w-auto h-auto object-contain rounded-xl" 
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-xs text-primary uppercase font-bold tracking-wider mb-1">Preview {index + 1}</p>
                    <p className="text-sm text-muted-foreground quicksand-semibold">Workspace View</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Privacy Framework Section */}
        <section id="privacy" className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden bg-card shadow-md">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 select-none pointer-events-none">
              <span className="material-symbols-outlined text-[10rem] text-primary">encrypted</span>
            </div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 quicksand-semibold">Privacy Framework</h2>
                <div className="w-16 h-1 bg-primary rounded-full mb-6" />
              </div>
              
              <PrivacyPolicy variant={privacyVariant} />
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground quicksand-semibold">Need Help or Support?</h2>
            <p className="font-body-md text-base text-muted-foreground leading-relaxed quicksand-regular">
              Have questions, experiencing bugs, or want to suggest updates? Reach out and we will help you resolve them.
            </p>
            <button 
              onClick={() => setShowContactForm(true)}
              className="glass-panel text-primary border-primary/40 px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-md quicksand-bold cursor-pointer"
            >
              Open Support Form
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-16 bg-card border-t border-border relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 md:px-12">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <img src="/zedlabs_logo.png" alt="zedlabs logo" className="h-8 w-auto" />
            <p className="text-muted-foreground text-sm quicksand-regular">© 2026 ZedLabs Studio. Built for extreme performance.</p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 quicksand-bold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground quicksand-regular">
              <li><a className="hover:text-primary transition-colors" href="#">System Hub</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Local Client docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 quicksand-bold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground quicksand-regular">
              <li><a className="hover:text-primary transition-colors" href="/">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="/#about">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 quicksand-bold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground quicksand-regular">
              <li><a className="hover:text-primary transition-colors" href="#privacy">Privacy Audits</a></li>
              <li><button className="hover:text-primary transition-colors text-left" onClick={() => setShowContactForm(true)}>Support</button></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Zoho Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl p-6 md:p-8 overflow-y-auto shadow-2xl">
            <button onClick={() => setShowContactForm(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10" aria-label="Close form">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div id="zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18" className="w-full flex justify-center pt-8"></div>
          </div>
        </div>
      )}

    </div>
  )
}