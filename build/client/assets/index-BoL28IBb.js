import{r as d,j as e}from"./jsx-runtime-DYkViK2L.js";import{G as c}from"./PrimaryButton-BuUOKRux.js";import{c as x}from"./utils-D7At0r7h.js";import{m as u,A as y}from"./index-MSxA10Hv.js";import{L as b}from"./components-BMN4foKF.js";const E=({isActive:t,onOutsideClick:r,includeEscape:a})=>{const i=d.useRef(null),l=n=>{var s;return!((s=i.current)!=null&&s.contains(n.target))&&(r==null?void 0:r(n))},o=n=>{n.key==="Escape"&&(r==null||r(n))};return d.useEffect(()=>{if(t)return document.addEventListener("click",l),a&&addEventListener("keydown",o),()=>{document.removeEventListener("click",l),removeEventListener("keydown",o)}},[t]),i};function v(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}function N(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0 1 44-44h94.12a24.55 24.55 0 0 1 17.49 7.36l109.15 111a25.4 25.4 0 0 1 7.24 17.77z"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M200 128v108a28.34 28.34 0 0 0 28 28h108"},child:[]},{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M176 128V76a44.26 44.26 0 0 1 44-44h94a24.83 24.83 0 0 1 17.61 7.36l109.15 111A25.09 25.09 0 0 1 448 168v172c0 24.3-19.05 44-42.95 44H344"},child:[]},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M312 32v108a28.34 28.34 0 0 0 28 28h108"},child:[]}]})(t)}const M=({children:t,isOpen:r=!1,onClose:a,title:i="Título",subtitle:l,cta:o,className:n,header:s,mode:m})=>{const f=d.useRef(),h=p=>{p.key==="Escape"&&(a==null||a())};d.useEffect(()=>(document.body&&(f.current=document.body),addEventListener("keydown",h),document.body&&r?document.body.style.overflow="hidden":document.body&&!r&&(document.body.style.overflow=""),()=>{removeEventListener("keydown",h),document.body.style.overflow=""}),[r]);const L=e.jsxs("article",{className:x("relative ",n),children:[e.jsx(u.button,{onClick:a,id:"overlay",className:"fixed inset-0 bg-dark/60  z-10",animate:{backdropFilter:"blur(4px)"},exit:{backdropFilter:"blur(0)",opacity:0}}),e.jsxs(u.section,{initial:{x:"100%"},animate:{x:0},exit:{x:"120%"},transition:{type:"spring",bounce:.2,duration:.5},className:x("bg-dark border border-white/10 z-10 h-screen fixed top-0 right-0 shadow-xl rounded-tl-3xl rounded-bl-3xl py-8 px-4 flex flex-col lg:w-[40%] md:w-[60%] w-[95%]",{"md:w-[95%] w-[95%]":m==="big"}),children:[e.jsxs("header",{className:"flex items-start justify-end mb-6 ",children:[s||e.jsxs("div",{children:[e.jsx("h4",{className:"text-2xl font-semibold md:text-4xl text-white",children:i}),e.jsx("p",{className:"text-brand_gray",children:l})]}),e.jsx(b,{to:"/player",tabIndex:0,onClick:a,className:"w-10 h-10 flex items-center justify-center bg-gray-200/10 rounded-full p-1 active:scale-95",children:e.jsx(v,{className:"text-white text-2xl"})})]}),e.jsx("section",{className:"overflow-y-scroll h-[95%]",children:t}),e.jsx("nav",{className:"flex justify-end gap-4  mt-auto",children:o||e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:a,className:"bg-brand_blue text-white hover:scale-95 rounded-full px-8 py-2 transition-all",children:"Aceptar"}),e.jsx("button",{onClick:a,className:"text-red-500 bg-transparent px-8 py-2 hover:scale-95 transition-all",children:"Cancelar"})]})})]})]});return e.jsx(y,{mode:"popLayout",children:r&&L})};function G(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"},child:[]}]})(t)}function Z(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.9989871,1 C5.92550416,1 1,5.92482888 1,12.0003376 C1,16.8603395 4.15153934,20.9829338 8.52263728,22.4374904 C9.0729918,22.5387827 9.27355045,22.199116 9.27355045,21.9073943 C9.27355045,21.6467356 9.2640965,20.954572 9.25869425,20.0368642 C6.19899322,20.7013414 5.55342398,18.5620492 5.55342398,18.5620492 C5.0530403,17.2911692 4.33183953,16.9528531 4.33183953,16.9528531 C3.33309801,16.2708186 4.40747107,16.2843243 4.40747107,16.2843243 C5.51155652,16.3619816 6.09229872,17.4181221 6.09229872,17.4181221 C7.07348292,19.0988981 8.66714755,18.6133706 9.2938089,18.3317781 C9.39375058,17.6213819 9.67804414,17.1365297 9.99205009,16.86169 C7.54955646,16.5841493 4.98146045,15.6401056 4.98146045,11.4249977 C4.98146045,10.224347 5.41026428,9.24181221 6.11390773,8.47334172 C6.00046042,8.19512569 5.62297799,7.07618404 6.22195279,5.56220265 C6.22195279,5.56220265 7.14506277,5.26642929 9.24653918,6.68992296 C10.12373,6.44547101 11.0650726,6.32392032 12.0003376,6.31919335 C12.9349274,6.32392032 13.8755947,6.44547101 14.7541361,6.68992296 C16.8542619,5.26642929 17.7760214,5.56220265 17.7760214,5.56220265 C18.3763467,7.07618404 17.9988643,8.19512569 17.8860923,8.47334172 C18.5910863,9.24181221 19.0165137,10.224347 19.0165137,11.4249977 C19.0165137,15.6509101 16.444366,16.5807729 13.9944443,16.8529114 C14.3888087,17.192578 14.7406305,17.863808 14.7406305,18.890236 C14.7406305,20.3603241 14.7271248,21.5467939 14.7271248,21.9073943 C14.7271248,22.2018171 14.9256576,22.5441849 15.4834403,22.4368151 C19.8511618,20.9788821 23,16.8589889 23,12.0003376 C23,5.92482888 18.0744958,1 11.9989871,1"},child:[]}]})(t)}export{M as D,Z as G,N as I,G as a,E as u};
