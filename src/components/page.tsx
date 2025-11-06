"use client"

import { useEffect, useState } from "react"

interface Stripe {
  id: number
  angle: number
  width: number
  delay: number
}

export default function Home() {
  const [stripes, setStripes] = useState<Stripe[]>([])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    // Generate diagonal gradient stripes with varying angles
    const newStripes: Stripe[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: 25 + i * 8,
      width: Math.random() * 80 + 40,
      delay: i * 0.3,
    }))
    setStripes(newStripes)

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "home")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll("section, main")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
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
                      if(ifrmSrc.indexOf('?') > 0){
                        ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                      }else{
                        ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                      }
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
                      if(ifrmSrc.indexOf('?') > 0){
                        ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                      }else{
                        ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                      }
                    }
                  }
                }
              }
            }catch(e){}
            f.src = ifrmSrc;
            f.style.border="none";
            f.style.height="910px";
            f.style.width="90%";
            f.style.transition="all 0.5s ease";
            f.setAttribute("aria-label", 'Contact Us');
            var d = document.getElementById("zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18");
            if (d) {
              d.appendChild(f);
            }
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
                    if( zf_ifrm_data.length == 3 ) {
                      iframe.scrollIntoView();
                      zf_tout = true;
                    }
                    if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                      if( zf_tout ) {
                        setTimeout(function(){
                          iframe.style.height = zf_ifrm_ht_nw;
                        },500);
                      } else {
                        iframe.style.height = zf_ifrm_ht_nw;
                      }
                    }
                  }
                }
              }
            }, false);
          }catch(e){}
        })();
      `
      document.body.appendChild(script)
      
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [showContactForm])

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background/background-vid.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/50 z-[-1]"></div>

      <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 flex items-center justify-between px-4 md:px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-bold text-white rajdhani-semibold">zedlabs</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                About
              </a>
              <a href="#products" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                Products
              </a>
              <a href="#privacy" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                Privacy
              </a>
              <a href="#contact" className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 mx-4">
            <nav className="flex flex-col gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              <a 
                href="#about" 
                className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#privacy" 
                className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy
              </a>
              <a 
                href="#contact" 
                className="text-white/80 hover:text-white text-sm font-medium transition rajdhani-regular py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Dot Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "products", label: "Products" },
          { id: "privacy", label: "Privacy" },
          { id: "contact", label: "Contact" },
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative"
            aria-label={`Go to ${section.label}`}
          >
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-white border-white scale-125"
                  : "bg-transparent border-white/40 hover:border-white/80"
              }`}
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-lg text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rajdhani-regular">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="text-center space-y-6 md:space-y-8 max-w-4xl">
          {/* Main Heading */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none rajdhani-bold">
              <span className="block">zedlabs</span>
            </h1>

            {/* Subheading with mixed styling */}
            <p className="text-base sm:text-lg md:text-2xl text-white/70 font-light leading-relaxed rajdhani-light">
              where innovation meets execution
            </p>
          </div>

          {/* Description */}
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed rajdhani-light px-4">
            Build the future with cutting-edge software solutions designed for teams that think differently.
          </p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 rajdhani-bold">About Us</h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed rajdhani-regular mb-4">
              We are a two-person team passionate about creating software that makes life easier. At zedlabs, we focus on developing practical app utilities that solve everyday problems.
            </p>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed rajdhani-regular">
              Our mission is simple: build tools that people actually need and enjoy using. We believe great software should be intuitive, efficient, and make your daily tasks smoother.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 text-center rajdhani-bold">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 rajdhani-semibold">Nekochat</h3>
              <p className="text-white/70 rajdhani-regular mb-3 md:mb-4 text-base md:text-lg">
                A powerful private and offline tool to run llama.cpp supported models in mobile.
              </p>
              <p className="text-white/70 rajdhani-regular text-base md:text-lg">
                Features include local AI model execution, complete privacy, offline functionality, and support for multiple llama.cpp compatible models.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 rajdhani-semibold">Shaderboy</h3>
              <p className="text-white/70 rajdhani-regular mb-3 md:mb-4 text-base md:text-lg">
                A Shadertoy inspired utility that lets users create shader simulations in their mobile phones.
              </p>
              <p className="text-white/70 rajdhani-regular text-base md:text-lg">
                Create stunning visual effects, real-time shader coding, built-in examples, and mobile-optimized performance for creative developers on the go.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 rajdhani-semibold">Motionbox3d</h3>
              <p className="text-white/70 rajdhani-regular mb-3 md:mb-4 text-base md:text-lg">
                Brings the simplicity of a video editor to 3D models in the mobile environment.
              </p>
              <p className="text-white/70 rajdhani-regular text-base md:text-lg">
                Intuitive timeline-based editing, 3D model manipulation, animation controls, and export capabilities—all optimized for mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="relative z-10 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 rajdhani-bold">Privacy Policy</h2>
            <div className="space-y-4 text-white/70 rajdhani-regular">
              <p className="text-lg md:text-xl leading-relaxed">
                At zedlabs, we take your privacy seriously. We are committed to protecting your personal information and being transparent about how we collect and use it.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-4 md:mt-6 mb-2 md:mb-3 rajdhani-semibold">Data Collection</h3>
              <p className="text-base md:text-lg leading-relaxed">
                We collect only the information necessary to provide our services. This includes basic account information and usage data to improve our products.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white mt-4 md:mt-6 mb-2 md:mb-3 rajdhani-semibold">Data Security</h3>
              <p className="text-base md:text-lg leading-relaxed">
                All data is encrypted and stored securely. We implement industry-standard security measures to protect your information from unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-4 md:px-8 py-12 md:py-20 pb-16 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 rajdhani-bold">Contact Us</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-white/70 text-lg md:text-xl rajdhani-regular">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-white/70 rajdhani-regular">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 rajdhani-semibold">Email</h3>
                  <button 
                    onClick={() => setShowContactForm(true)}
                    className="flex items-center gap-2 text-base md:text-lg hover:text-white transition-colors group"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Contact Us</span>
                  </button>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 rajdhani-semibold">Location</h3>
                  <p className="text-base md:text-lg">Pune, MH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 overflow-y-auto">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors z-10"
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
