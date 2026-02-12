import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as a}from"./index.Cd_vQiNd.js";import{g as y}from"./image.CZ2JubCq.js";import k from"./PrivacyPolicy.CjuX6_5O.js";function C({title:d,tagline:x,description:f,logoSrc:u,screenshotSrcs:h,downloadLink:p,isComingSoon:g=!1,privacyVariant:v="notebook"}){const[n,o]=a.useState(!1),[m,l]=a.useState(!1),[t,c]=a.useState("system"),[i,b]=a.useState(!1);a.useEffect(()=>{b(!0);const r=localStorage.getItem("theme");r&&c(r)},[]),a.useEffect(()=>{if(!i)return;const r=document.documentElement,s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";(t==="system"?s:t)==="dark"?r.classList.add("dark"):r.classList.remove("dark"),t!=="system"?localStorage.setItem("theme",t):localStorage.removeItem("theme")},[t,i]);const j=()=>{c(r=>r==="system"?(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")==="dark"?"light":"dark":r==="dark"?"light":"dark")};return a.useEffect(()=>{if(m){const r=document.createElement("script");return r.type="text/javascript",r.innerHTML=`
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
      `,document.body.appendChild(r),()=>{document.body.removeChild(r)}}},[m]),e.jsxs("div",{className:"min-h-screen w-full overflow-x-hidden relative bg-background",children:[e.jsxs("header",{className:"absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6",children:[e.jsx("div",{className:"flex items-center justify-between max-w-7xl mx-auto",children:e.jsxs("div",{className:"flex-1 flex items-center justify-between px-4 md:px-6 py-3 rounded-xl bg-card/50 backdrop-blur-md border border-border shadow-sm",children:[e.jsx("a",{href:"/",className:"hover:opacity-80 transition-opacity",children:e.jsx("img",{src:"/zedlabs_logo.png",alt:"zedlabs",className:"h-8 md:h-10 w-auto"})}),e.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[e.jsx("a",{href:"#privacy",className:"text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular",children:"Privacy"}),e.jsx("a",{href:"#contact",className:"text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular",children:"Contact"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:j,className:"p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted/50",children:i&&(t==="dark"||t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches)?e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),e.jsx("button",{className:"md:hidden text-foreground p-2",onClick:()=>o(!n),children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})]})}),n&&e.jsx("div",{className:"md:hidden mt-4 mx-4",children:e.jsxs("nav",{className:"flex flex-col gap-2 px-6 py-4 rounded-xl bg-card/50 backdrop-blur-md border border-border shadow-sm",children:[e.jsx("a",{href:"#privacy",className:"text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular py-2",onClick:()=>o(!1),children:"Privacy"}),e.jsx("a",{href:"#contact",className:"text-muted-foreground hover:text-primary text-sm font-medium transition quicksand-regular py-2",onClick:()=>o(!1),children:"Contact"})]})})]}),e.jsx("main",{className:"relative z-10 pt-32 pb-12 px-4 md:px-8",children:e.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[e.jsxs("div",{className:"bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{src:u,alt:`${d} Logo`,className:"w-32 h-32 md:w-48 md:h-48 rounded-4xl shadow-lg border border-border/50"})}),e.jsxs("div",{className:"flex-1 text-center md:text-left space-y-4",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-foreground quicksand-bold",children:d}),e.jsx("p",{className:"text-xl md:text-2xl text-primary font-medium quicksand-medium",children:x}),e.jsx("p",{className:"text-muted-foreground text-lg leading-relaxed quicksand-regular max-w-2xl",children:f}),e.jsx("div",{className:"pt-4 flex justify-center md:justify-start",children:g?e.jsx("span",{className:"inline-flex items-center px-6 py-3 rounded-full text-base font-medium bg-muted text-muted-foreground quicksand-medium border border-border/50",children:"Coming Soon"}):e.jsx("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-80 transition-opacity",children:e.jsx("img",{src:y.src,alt:"Get it on Google Play",className:"h-14 w-auto"})})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-foreground mb-6 quicksand-bold px-2",children:"Screenshots"}),e.jsx("div",{className:"flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide",children:h.map((r,s)=>e.jsx("div",{className:"shrink-0 snap-center first:pl-2 last:pr-2",children:e.jsx("img",{src:r,alt:`Screenshot ${s+1}`,className:"h-[400px] md:h-[500px] w-auto rounded-xl border border-border/50 shadow-md"})},s))})]})]})}),e.jsx("section",{id:"privacy",className:"relative z-10 px-4 md:px-8 py-12 md:py-20",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 quicksand-bold",children:"Privacy Policy"}),e.jsx(k,{variant:v})]})})}),e.jsx("section",{id:"contact",className:"relative z-10 px-4 md:px-8 py-12 md:py-20 pb-16 md:pb-32",children:e.jsx("div",{className:"max-w-6xl mx-auto",children:e.jsxs("div",{className:"bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6 md:p-12 shadow-sm",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 quicksand-bold",children:"Contact Us"}),e.jsxs("div",{className:"space-y-4 md:space-y-6",children:[e.jsxs("p",{className:"text-muted-foreground text-lg md:text-xl quicksand-regular",children:["Have questions about ",d,"? We'd love to hear from you. Send us a message and we'll respond as soon as possible."]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 md:gap-6 text-muted-foreground quicksand-regular",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg md:text-xl font-semibold text-foreground mb-2 quicksand-semibold",children:"Email"}),e.jsxs("button",{onClick:()=>l(!0),className:"flex items-center gap-2 text-base md:text-lg hover:text-primary transition-colors group",children:[e.jsx("svg",{className:"w-6 h-6 group-hover:scale-110 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),e.jsx("span",{children:"Contact Us"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg md:text-xl font-semibold text-foreground mb-2 quicksand-semibold",children:"Location"}),e.jsx("p",{className:"text-base md:text-lg",children:"Pune, MH"})]})]})]})]})})}),m&&e.jsx("div",{className:"fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",children:e.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 overflow-y-auto shadow-xl",children:[e.jsx("button",{onClick:()=>l(!1),className:"absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10","aria-label":"Close form",children:e.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{id:"zf_div_UTZMDtzQFIg9TeaL7IHsFC6k4NnsLmRx1w6SRcU5d18",className:"w-full flex justify-center"})]})})]})}export{C as default};
