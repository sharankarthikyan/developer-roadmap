import{u as x}from"./index.7cbca737.js";import{h as w,p as b}from"./hooks.module.9ee1d4a4.js";import{C as u}from"./close.3a539829.js";import{a as y}from"./http.1ee0e3a2.js";import{s as a}from"./page.d4f83d9f.js";import{o}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";import"./jwt.2bcbdb7f.js";function E(i){const{gaPageIdentifier:e}=i,l=x(a),[s,p]=w(),c=async()=>{const{response:r,error:t}=await y("https://api.roadmap.sh/v1-get-sponsor",{href:window.location.pathname});if(t){console.error(t);return}r?.sponsor&&(p(r.sponsor),window.fireEvent({category:"SponsorImpression",action:`${r.sponsor?.company} Impression`,label:r.sponsor.gaLabel||`${e} / ${r.sponsor?.company} Link`}))};if(b(()=>{window.setTimeout(c)},[]),l||!s)return null;const{url:m,title:d,imageUrl:f,description:g,company:n,gaLabel:h,pageUrl:k}=s;return o("a",{href:m,target:"_blank",rel:"noopener sponsored nofollow",class:"fixed bottom-[15px] right-[15px] z-50 flex max-w-[350px] bg-white shadow-lg outline-0 outline-transparent",onClick:()=>{window.fireEvent({category:"SponsorClick",action:`${n} Redirect`,label:h||`${e} / ${n} Link`})},children:[o("span",{class:"absolute right-1.5 top-1.5 text-gray-300 hover:text-gray-800","aria-label":"Close",onClick:r=>{r.preventDefault(),r.stopImmediatePropagation(),a.set(!0)},children:o("img",{alt:"Close",class:"h-4 w-4",src:u})}),o("img",{src:f,class:"block h-[150px] w-[104.89px] object-contain lg:h-[169px] lg:w-[118.18px]",alt:"Sponsor Banner"}),o("span",{class:"flex flex-1 flex-col justify-between text-sm",children:[o("span",{class:"p-[10px]",children:[o("span",{class:"mb-0.5 block font-semibold",children:d}),o("span",{class:"block text-gray-500",children:g})]}),o("span",{class:"sponsor-footer",children:"Partner Content"})]})]})}export{E as PageSponsor};
