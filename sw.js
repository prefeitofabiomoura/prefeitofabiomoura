if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let o={};const n=e=>i(e,b),t={module:{uri:b},exports:o,require:n};s[b]=Promise.all(a.map((e=>t[e]||n(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d11198b9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/favicon.png",revision:"4da3cd74b4c4539244451a2ba62ae2e9"},{url:"assets/images/logo-01.png",revision:"5b389881eb00d9451000dd606c086961"},{url:"assets/images/logo-02.png",revision:"6b09f42bbdef55cd305a8efe6b5ba2e5"},{url:"assets/images/music/cover.png",revision:"d2997aacdd333682a6f52b1d2a65dc47"},{url:"assets/images/prefeito-01-min.png",revision:"d39532419ce30c97c06223258ab2da74"},{url:"assets/images/prefeito-03.jpg",revision:"2201b56f5e4062312e28c14d65269166"},{url:"assets/images/prefeito-04.jpg",revision:"b426b39b6654376be8641882bb20281e"},{url:"assets/images/prefeito-05.jpg",revision:"9c58b54a26555443a300669a02c43aa6"},{url:"assets/images/prefeito-vice-01.jpg",revision:"8dc3e53b9b61d32b3946616bc9d43b14"},{url:"assets/images/readme.txt",revision:"66f8afe6d7d33d86e80004c549c21a00"},{url:"assets/images/VEREADORES/BICUDO.jpg",revision:"fa28b86949f9a400474dad88794d600e"},{url:"assets/images/VEREADORES/BRUNA-DE-TONY.jpg",revision:"d47a1ab8e889b3b5ed947facee478dfb"},{url:"assets/images/VEREADORES/DEDE-DO-BAIXIO.jpg",revision:"0974ce58ccc27bffeebb0cb932553341"},{url:"assets/images/VEREADORES/FELIPE-BERNARDO.jpg",revision:"fbfff1e6e1b4521a7c3922168a936f38"},{url:"assets/images/VEREADORES/GALEGA-DE-TOTA.jpeg",revision:"64dcbf776214e38a99a8aaa895d7b515"},{url:"assets/images/VEREADORES/GESSICA-SOUZA.jpg",revision:"04829bb644bb91a87ff4112a9076e969"},{url:"assets/images/VEREADORES/JOSEILTON-DO-SEIXOS.jpg",revision:"a89d8ff228a8ea76aeb6ca2907532d28"},{url:"assets/images/VEREADORES/POLLYANNA.jpg",revision:"0053a1c3fb2996eb752923b9a816f42d"},{url:"assets/images/VEREADORES/ROZINHA-SOARES.jpg",revision:"80bb8ead64ab87f5bd1c51b7e50b04e3"},{url:"index.css",revision:"37256de792ab79b29cad5eb4e120a4f4"},{url:"index.html",revision:"13031e7937c4c55983a483b655344b3b"},{url:"index.js",revision:"7c41f2e5b6204369261396ae4220f078"},{url:"manifest.json",revision:"1e0738a1fe8994e9208891dae56446b8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
