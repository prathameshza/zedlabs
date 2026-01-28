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
  isComingSoon?: boolean;
}

export default function ProductPage({ 
  title, 
  tagline, 
  description, 
  logoSrc, 
  screenshotSrcs, 
  downloadLink,
  isComingSoon = false
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

  // --- Contact Form Logic (Zoho) ---
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
    <div className="min-h-screen w-full overflow-x-hidden relative bg-background">
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 flex items-center justify-between px-4 md:px-6 py-3 rounded-xl bg-card/50 backdrop-blur-md border border-border shadow-sm">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img src="/zedlabs_logo.png" alt="zedlabs" className="h-8 md:h-10 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular">Privacy</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50">
                {mounted && (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
              <button className="md:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 mx-4">
            <nav className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-card/50 backdrop-blur-md border border-border shadow-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular py-2" onClick={() => setMobileMenuOpen(false)}>Privacy</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Product Content */}
      <main className="relative z-10 pt-32 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* App Logo */}
            <div className="shrink-0">
              <img 
                src={logoSrc} 
                alt={`${title} Logo`} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-4xl shadow-lg border border-border/50"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground quicksand-bold">{title}</h1>
              <p className="text-xl md:text-2xl text-primary font-medium quicksand-medium">{tagline}</p>
              <p className="text-muted-foreground text-lg leading-relaxed quicksand-regular max-w-2xl">
                {description}
              </p>
              
              <div className="pt-4 flex justify-center md:justify-start">
                {isComingSoon ? (
                   <span className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-muted text-muted-foreground quicksand-medium border border-border/50">
                    Coming Soon
                  </span>
                ) : (
                  <a 
                    href={downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <img src={googlePlayBadge.src} alt="Get it on Google Play" className="h-14 w-auto" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Screenshots Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 quicksand-bold px-2">Screenshots</h2>
            <div className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
              {screenshotSrcs.map((src, index) => (
                <div key={index} className="shrink-0 snap-center first:pl-2 last:pr-2">
                  <img 
                    src={src} 
                    alt={`Screenshot ${index + 1}`} 
                    className="h-[400px] md:h-[500px] w-auto rounded-xl border border-border/50 shadow-md"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Privacy Section (Notebook Specific) */}
      <section id="privacy" className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 quicksand-bold">Privacy Policy</h2>
            <PrivacyPolicy variant="notebook" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-4 md:px-8 py-12 md:py-20 pb-16 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 quicksand-bold">Contact Us</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-muted-foreground text-lg md:text-xl quicksand-regular">
                Have questions about {title}? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-muted-foreground quicksand-regular">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 quicksand-semibold">Email</h3>
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="flex items-center gap-2 text-base md:text-lg hover:text-primary transition-colors group"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Us</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 quicksand-semibold">Location</h3>
                  <p className="text-base md:text-lg">Pune, MH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 overflow-y-auto shadow-xl">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Close form"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div id="zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18" className="w-full flex justify-center"></div>
          </div>
        </div>
      )}

    </div>
  )
}