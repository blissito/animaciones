import{r as k,j as c,R as W,g as Dt}from"./jsx-runtime-DYkViK2L.js";import{P as we,a as kt,b as Ct}from"./PrimaryButton-BuUOKRux.js";import{D as Rt,u as Ot,a as Lt}from"./index-BoL28IBb.js";import{c as pe}from"./utils-D7At0r7h.js";import{a as ce,F as Pt,u as Ut}from"./components-BMN4foKF.js";import{u as It,f as Mt,L as Qe,a as Bt,m as Pe}from"./proxy-CV3wXh37.js";import"./index-MSxA10Hv.js";const Kt=k.createContext(null);function zt(){const e=k.useRef(!1);return It(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function qt(){const e=zt(),[r,t]=k.useState(0),s=k.useCallback(()=>{e.current&&t(r+1)},[r]);return[k.useCallback(()=>Mt.postRender(s),[s]),r]}const Gt=e=>!e.isLayoutDirty&&e.willUpdate(!1);function et(){const e=new Set,r=new WeakMap,t=()=>e.forEach(Gt);return{add:s=>{e.add(s),r.set(s,s.addEventListener("willUpdate",t))},remove:s=>{e.delete(s);const a=r.get(s);a&&(a(),r.delete(s)),t()},dirty:t}}const ft=e=>e===!0,$t=e=>ft(e===!0)||e==="id",Wt=({children:e,id:r,inherit:t=!0})=>{const s=k.useContext(Qe),a=k.useContext(Kt),[n,u]=qt(),f=k.useRef(null),b=s.id||a;f.current===null&&($t(t)&&b&&(r=r?b+"-"+r:b),f.current={id:r,group:ft(t)&&s.group||et()});const N=k.useMemo(()=>({...f.current,forceRender:n}),[u]);return c.jsx(Qe.Provider,{value:N,children:e})};class Jt{constructor(){this.componentControls=new Set}subscribe(r){return this.componentControls.add(r),()=>this.componentControls.delete(r)}start(r,t){this.componentControls.forEach(s=>{s.start(r.nativeEvent||r,t)})}}const Ht=()=>new Jt;function yt(){return Bt(Ht)}var xe=e=>e.type==="checkbox",le=e=>e instanceof Date,q=e=>e==null;const ht=e=>typeof e=="object";var O=e=>!q(e)&&!Array.isArray(e)&&ht(e)&&!le(e),Yt=e=>O(e)&&e.target?xe(e.target)?e.target.checked:e.target.value:e,Xt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Zt=(e,r)=>e.has(Xt(r)),Qt=e=>{const r=e.constructor&&e.constructor.prototype;return O(r)&&r.hasOwnProperty("isPrototypeOf")},Ue=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Ue&&(e instanceof Blob||e instanceof FileList))&&(t||O(e)))if(r=t?[]:{},!t&&!Qt(e))r=e;else for(const s in e)e.hasOwnProperty(s)&&(r[s]=X(e[s]));else return e;return r}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],R=e=>e===void 0,m=(e,r,t)=>{if(!r||!O(e))return t;const s=Ae(r.split(/[,[\].]+?/)).reduce((a,n)=>q(a)?a:a[n],e);return R(s)||s===e?R(e[r])?t:e[r]:s},re=e=>typeof e=="boolean",Ie=e=>/^\w*$/.test(e),mt=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),D=(e,r,t)=>{let s=-1;const a=Ie(r)?[r]:mt(r),n=a.length,u=n-1;for(;++s<n;){const f=a[s];let b=t;if(s!==u){const N=e[f];b=O(N)||Array.isArray(N)?N:isNaN(+a[s+1])?{}:[]}if(f==="__proto__")return;e[f]=b,e=e[f]}return e};const tt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ie={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};W.createContext(null);var er=(e,r,t,s=!0)=>{const a={defaultValues:r._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const u=n;return r._proxyFormState[u]!==te.all&&(r._proxyFormState[u]=!s||te.all),e[u]}});return a},G=e=>O(e)&&!Object.keys(e).length,tr=(e,r,t,s)=>{t(e);const{name:a,...n}=e;return G(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find(u=>r[u]===te.all)},be=e=>Array.isArray(e)?e:[e];function rr(e){const r=W.useRef(e);r.current=e,W.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var se=e=>typeof e=="string",sr=(e,r,t,s,a)=>se(e)?(s&&r.watch.add(e),m(t,e,a)):Array.isArray(e)?e.map(n=>(s&&r.watch.add(n),m(t,n))):(s&&(r.watchAll=!0),t),ir=(e,r,t,s,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[s]:a||!0}}:{},rt=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched}),st=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length))));const ge=(e,r,t,s)=>{for(const a of t||Object.keys(e)){const n=m(e,a);if(n){const{_f:u,...f}=n;if(u){if(u.refs&&u.refs[0]&&r(u.refs[0],a)&&!s)return!0;if(u.ref&&r(u.ref,u.name)&&!s)return!0;if(ge(f,r))break}else if(O(f)&&ge(f,r))break}}};var nr=(e,r,t)=>{const s=be(m(e,t));return D(s,"root",r[t]),D(e,t,s),e},Me=e=>e.type==="file",ne=e=>typeof e=="function",Fe=e=>{if(!Ue)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},_e=e=>se(e),Be=e=>e.type==="radio",Te=e=>e instanceof RegExp;const it={value:!1,isValid:!1},nt={value:!0,isValid:!0};var gt=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!R(e[0].attributes.value)?R(e[0].value)||e[0].value===""?nt:{value:e[0].value,isValid:!0}:nt:it}return it};const at={isValid:!1,value:null};var pt=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,at):at;function ot(e,r,t="validate"){if(_e(e)||Array.isArray(e)&&e.every(_e)||re(e)&&!e)return{type:t,message:_e(e)?e:"",ref:r}}var ue=e=>O(e)&&!Te(e)?e:{value:e,message:""},lt=async(e,r,t,s,a)=>{const{ref:n,refs:u,required:f,maxLength:b,minLength:N,min:p,max:g,pattern:j,validate:V,name:S,valueAsNumber:w,mount:A,disabled:_}=e._f,x=m(r,S);if(!A||_)return{};const L=u?u[0]:n,K=T=>{s&&L.reportValidity&&(L.setCustomValidity(re(T)?"":T||""),L.reportValidity())},C={},Q=Be(n),I=xe(n),$=Q||I,J=(w||Me(n))&&R(n.value)&&R(x)||Fe(n)&&n.value===""||x===""||Array.isArray(x)&&!x.length,H=ir.bind(null,S,t,C),ve=(T,E,P,z=ie.maxLength,ee=ie.minLength)=>{const Y=T?E:P;C[S]={type:T?z:ee,message:Y,ref:n,...H(T?z:ee,Y)}};if(a?!Array.isArray(x)||!x.length:f&&(!$&&(J||q(x))||re(x)&&!x||I&&!gt(u).isValid||Q&&!pt(u).isValid)){const{value:T,message:E}=_e(f)?{value:!!f,message:f}:ue(f);if(T&&(C[S]={type:ie.required,message:E,ref:L,...H(ie.required,E)},!t))return K(E),C}if(!J&&(!q(p)||!q(g))){let T,E;const P=ue(g),z=ue(p);if(!q(x)&&!isNaN(x)){const ee=n.valueAsNumber||x&&+x;q(P.value)||(T=ee>P.value),q(z.value)||(E=ee<z.value)}else{const ee=n.valueAsDate||new Date(x),Y=ye=>new Date(new Date().toDateString()+" "+ye),de=n.type=="time",fe=n.type=="week";se(P.value)&&x&&(T=de?Y(x)>Y(P.value):fe?x>P.value:ee>new Date(P.value)),se(z.value)&&x&&(E=de?Y(x)<Y(z.value):fe?x<z.value:ee<new Date(z.value))}if((T||E)&&(ve(!!T,P.message,z.message,ie.max,ie.min),!t))return K(C[S].message),C}if((b||N)&&!J&&(se(x)||a&&Array.isArray(x))){const T=ue(b),E=ue(N),P=!q(T.value)&&x.length>+T.value,z=!q(E.value)&&x.length<+E.value;if((P||z)&&(ve(P,T.message,E.message),!t))return K(C[S].message),C}if(j&&!J&&se(x)){const{value:T,message:E}=ue(j);if(Te(T)&&!x.match(T)&&(C[S]={type:ie.pattern,message:E,ref:n,...H(ie.pattern,E)},!t))return K(E),C}if(V){if(ne(V)){const T=await V(x,r),E=ot(T,L);if(E&&(C[S]={...E,...H(ie.validate,E.message)},!t))return K(E.message),C}else if(O(V)){let T={};for(const E in V){if(!G(T)&&!t)break;const P=ot(await V[E](x,r),L,E);P&&(T={...P,...H(E,P.message)},K(P.message),t&&(C[S]=T))}if(!G(T)&&(C[S]={ref:L,...T},!t))return C}}return K(!0),C};function ar(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=R(e)?s++:e[r[s++]];return e}function or(e){for(const r in e)if(e.hasOwnProperty(r)&&!R(e[r]))return!1;return!0}function U(e,r){const t=Array.isArray(r)?r:Ie(r)?[r]:mt(r),s=t.length===1?e:ar(e,t),a=t.length-1,n=t[a];return s&&delete s[n],a!==0&&(O(s)&&G(s)||Array.isArray(s)&&or(s))&&U(e,t.slice(0,-1)),e}var De=()=>{let e=[];return{get observers(){return e},next:a=>{for(const n of e)n.next&&n.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(n=>n!==a)}}),unsubscribe:()=>{e=[]}}},Oe=e=>q(e)||!ht(e);function ae(e,r){if(Oe(e)||Oe(r))return e===r;if(le(e)&&le(r))return e.getTime()===r.getTime();const t=Object.keys(e),s=Object.keys(r);if(t.length!==s.length)return!1;for(const a of t){const n=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const u=r[a];if(le(n)&&le(u)||O(n)&&O(u)||Array.isArray(n)&&Array.isArray(u)?!ae(n,u):n!==u)return!1}}return!0}var xt=e=>e.type==="select-multiple",lr=e=>Be(e)||xe(e),ke=e=>Fe(e)&&e.isConnected,vt=e=>{for(const r in e)if(ne(e[r]))return!0;return!1};function Ne(e,r={}){const t=Array.isArray(e);if(O(e)||t)for(const s in e)Array.isArray(e[s])||O(e[s])&&!vt(e[s])?(r[s]=Array.isArray(e[s])?[]:{},Ne(e[s],r[s])):q(e[s])||(r[s]=!0);return r}function bt(e,r,t){const s=Array.isArray(e);if(O(e)||s)for(const a in e)Array.isArray(e[a])||O(e[a])&&!vt(e[a])?R(r)||Oe(t[a])?t[a]=Array.isArray(e[a])?Ne(e[a],[]):{...Ne(e[a])}:bt(e[a],q(r)?{}:r[a],t[a]):t[a]=!ae(e[a],r[a]);return t}var he=(e,r)=>bt(e,r,Ne(r)),_t=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:s})=>R(e)?e:r?e===""?NaN:e&&+e:t&&se(e)?new Date(e):s?s(e):e;function Ce(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Me(r)?r.files:Be(r)?pt(e.refs).value:xt(r)?[...r.selectedOptions].map(({value:t})=>t):xe(r)?gt(e.refs).value:_t(R(r.value)?e.ref.value:r.value,e)}var ur=(e,r,t,s)=>{const a={};for(const n of e){const u=m(r,n);u&&D(a,n,u._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:s}},me=e=>R(e)?e:Te(e)?e.source:O(e)?Te(e.value)?e.value.source:e.value:e;const ut="AsyncFunction";var cr=e=>(!e||!e.validate)&&!!(ne(e.validate)&&e.validate.constructor.name===ut||O(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===ut)),dr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ct(e,r,t){const s=m(e,t);if(s||Ie(t))return{error:s,name:t};const a=t.split(".");for(;a.length;){const n=a.join("."),u=m(r,n),f=m(e,n);if(u&&!Array.isArray(u)&&t!==n)return{name:t};if(f&&f.type)return{name:n,error:f};a.pop()}return{name:t}}var fr=(e,r,t,s,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?s.isOnBlur:a.isOnBlur)?!e:(t?s.isOnChange:a.isOnChange)?e:!0,yr=(e,r)=>!Ae(m(e,r)).length&&U(e,r);const hr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function mr(e={}){let r={...hr,...e},t={submitCount:0,isDirty:!1,isLoading:ne(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},s={},a=O(r.defaultValues)||O(r.values)?X(r.defaultValues||r.values)||{}:{},n=r.shouldUnregister?{}:X(a),u={action:!1,mount:!1,watch:!1},f={mount:new Set,unMount:new Set,array:new Set,watch:new Set},b,N=0;const p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},g={values:De(),array:De(),state:De()},j=rt(r.mode),V=rt(r.reValidateMode),S=r.criteriaMode===te.all,w=i=>o=>{clearTimeout(N),N=setTimeout(i,o)},A=async i=>{if(!e.disabled&&(p.isValid||i)){const o=r.resolver?G((await $()).errors):await H(s,!0);o!==t.isValid&&g.state.next({isValid:o})}},_=(i,o)=>{!e.disabled&&(p.isValidating||p.validatingFields)&&((i||Array.from(f.mount)).forEach(l=>{l&&(o?D(t.validatingFields,l,o):U(t.validatingFields,l))}),g.state.next({validatingFields:t.validatingFields,isValidating:!G(t.validatingFields)}))},x=(i,o=[],l,h,y=!0,d=!0)=>{if(h&&l&&!e.disabled){if(u.action=!0,d&&Array.isArray(m(s,i))){const v=l(m(s,i),h.argA,h.argB);y&&D(s,i,v)}if(d&&Array.isArray(m(t.errors,i))){const v=l(m(t.errors,i),h.argA,h.argB);y&&D(t.errors,i,v),yr(t.errors,i)}if(p.touchedFields&&d&&Array.isArray(m(t.touchedFields,i))){const v=l(m(t.touchedFields,i),h.argA,h.argB);y&&D(t.touchedFields,i,v)}p.dirtyFields&&(t.dirtyFields=he(a,n)),g.state.next({name:i,isDirty:T(i,o),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else D(n,i,o)},L=(i,o)=>{D(t.errors,i,o),g.state.next({errors:t.errors})},K=i=>{t.errors=i,g.state.next({errors:t.errors,isValid:!1})},C=(i,o,l,h)=>{const y=m(s,i);if(y){const d=m(n,i,R(l)?m(a,i):l);R(d)||h&&h.defaultChecked||o?D(n,i,o?d:Ce(y._f)):z(i,d),u.mount&&A()}},Q=(i,o,l,h,y)=>{let d=!1,v=!1;const F={name:i};if(!e.disabled){const M=!!(m(s,i)&&m(s,i)._f&&m(s,i)._f.disabled);if(!l||h){p.isDirty&&(v=t.isDirty,t.isDirty=F.isDirty=T(),d=v!==F.isDirty);const B=M||ae(m(a,i),o);v=!!(!M&&m(t.dirtyFields,i)),B||M?U(t.dirtyFields,i):D(t.dirtyFields,i,!0),F.dirtyFields=t.dirtyFields,d=d||p.dirtyFields&&v!==!B}if(l){const B=m(t.touchedFields,i);B||(D(t.touchedFields,i,l),F.touchedFields=t.touchedFields,d=d||p.touchedFields&&B!==l)}d&&y&&g.state.next(F)}return d?F:{}},I=(i,o,l,h)=>{const y=m(t.errors,i),d=p.isValid&&re(o)&&t.isValid!==o;if(e.delayError&&l?(b=w(()=>L(i,l)),b(e.delayError)):(clearTimeout(N),b=null,l?D(t.errors,i,l):U(t.errors,i)),(l?!ae(y,l):y)||!G(h)||d){const v={...h,...d&&re(o)?{isValid:o}:{},errors:t.errors,name:i};t={...t,...v},g.state.next(v)}},$=async i=>{_(i,!0);const o=await r.resolver(n,r.context,ur(i||f.mount,s,r.criteriaMode,r.shouldUseNativeValidation));return _(i),o},J=async i=>{const{errors:o}=await $(i);if(i)for(const l of i){const h=m(o,l);h?D(t.errors,l,h):U(t.errors,l)}else t.errors=o;return o},H=async(i,o,l={valid:!0})=>{for(const h in i){const y=i[h];if(y){const{_f:d,...v}=y;if(d){const F=f.array.has(d.name),M=y._f&&cr(y._f);M&&p.validatingFields&&_([h],!0);const B=await lt(y,n,S,r.shouldUseNativeValidation&&!o,F);if(M&&p.validatingFields&&_([h]),B[d.name]&&(l.valid=!1,o))break;!o&&(m(B,d.name)?F?nr(t.errors,B,d.name):D(t.errors,d.name,B[d.name]):U(t.errors,d.name))}!G(v)&&await H(v,o,l)}}return l.valid},ve=()=>{for(const i of f.unMount){const o=m(s,i);o&&(o._f.refs?o._f.refs.every(l=>!ke(l)):!ke(o._f.ref))&&Se(i)}f.unMount=new Set},T=(i,o)=>!e.disabled&&(i&&o&&D(n,i,o),!ae(ze(),a)),E=(i,o,l)=>sr(i,f,{...u.mount?n:R(o)?a:se(i)?{[i]:o}:o},l,o),P=i=>Ae(m(u.mount?n:a,i,e.shouldUnregister?m(a,i,[]):[])),z=(i,o,l={})=>{const h=m(s,i);let y=o;if(h){const d=h._f;d&&(!d.disabled&&D(n,i,_t(o,d)),y=Fe(d.ref)&&q(o)?"":o,xt(d.ref)?[...d.ref.options].forEach(v=>v.selected=y.includes(v.value)):d.refs?xe(d.ref)?d.refs.length>1?d.refs.forEach(v=>(!v.defaultChecked||!v.disabled)&&(v.checked=Array.isArray(y)?!!y.find(F=>F===v.value):y===v.value)):d.refs[0]&&(d.refs[0].checked=!!y):d.refs.forEach(v=>v.checked=v.value===y):Me(d.ref)?d.ref.value="":(d.ref.value=y,d.ref.type||g.values.next({name:i,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&Q(i,y,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ye(i)},ee=(i,o,l)=>{for(const h in o){const y=o[h],d=`${i}.${h}`,v=m(s,d);(f.array.has(i)||O(y)||v&&!v._f)&&!le(y)?ee(d,y,l):z(d,y,l)}},Y=(i,o,l={})=>{const h=m(s,i),y=f.array.has(i),d=X(o);D(n,i,d),y?(g.array.next({name:i,values:{...n}}),(p.isDirty||p.dirtyFields)&&l.shouldDirty&&g.state.next({name:i,dirtyFields:he(a,n),isDirty:T(i,d)})):h&&!h._f&&!q(d)?ee(i,d,l):z(i,d,l),st(i,f)&&g.state.next({...t}),g.values.next({name:u.mount?i:void 0,values:{...n}})},de=async i=>{u.mount=!0;const o=i.target;let l=o.name,h=!0;const y=m(s,l),d=()=>o.type?Ce(y._f):Yt(i),v=F=>{h=Number.isNaN(F)||le(F)&&isNaN(F.getTime())||ae(F,m(n,l,F))};if(y){let F,M;const B=d(),oe=i.type===tt.BLUR||i.type===tt.FOCUS_OUT,Et=!dr(y._f)&&!r.resolver&&!m(t.errors,l)&&!y._f.deps||fr(oe,m(t.touchedFields,l),t.isSubmitted,V,j),Ve=st(l,f,oe);D(n,l,B),oe?(y._f.onBlur&&y._f.onBlur(i),b&&b(0)):y._f.onChange&&y._f.onChange(i);const je=Q(l,B,oe,!1),Vt=!G(je)||Ve;if(!oe&&g.values.next({name:l,type:i.type,values:{...n}}),Et)return p.isValid&&(e.mode==="onBlur"?oe&&A():A()),Vt&&g.state.next({name:l,...Ve?{}:je});if(!oe&&Ve&&g.state.next({...t}),r.resolver){const{errors:Xe}=await $([l]);if(v(B),h){const jt=ct(t.errors,s,l),Ze=ct(Xe,s,jt.name||l);F=Ze.error,l=Ze.name,M=G(Xe)}}else _([l],!0),F=(await lt(y,n,S,r.shouldUseNativeValidation))[l],_([l]),v(B),h&&(F?M=!1:p.isValid&&(M=await H(s,!0)));h&&(y._f.deps&&ye(y._f.deps),I(l,M,F,je))}},fe=(i,o)=>{if(m(t.errors,o)&&i.focus)return i.focus(),1},ye=async(i,o={})=>{let l,h;const y=be(i);if(r.resolver){const d=await J(R(i)?i:y);l=G(d),h=i?!y.some(v=>m(d,v)):l}else i?(h=(await Promise.all(y.map(async d=>{const v=m(s,d);return await H(v&&v._f?{[d]:v}:v)}))).every(Boolean),!(!h&&!t.isValid)&&A()):h=l=await H(s);return g.state.next({...!se(i)||p.isValid&&l!==t.isValid?{}:{name:i},...r.resolver||!i?{isValid:l}:{},errors:t.errors}),o.shouldFocus&&!h&&ge(s,fe,i?y:f.mount),h},ze=i=>{const o={...u.mount?n:a};return R(i)?o:se(i)?m(o,i):i.map(l=>m(o,l))},qe=(i,o)=>({invalid:!!m((o||t).errors,i),isDirty:!!m((o||t).dirtyFields,i),error:m((o||t).errors,i),isValidating:!!m(t.validatingFields,i),isTouched:!!m((o||t).touchedFields,i)}),Tt=i=>{i&&be(i).forEach(o=>U(t.errors,o)),g.state.next({errors:i?t.errors:{}})},Ge=(i,o,l)=>{const h=(m(s,i,{_f:{}})._f||{}).ref,y=m(t.errors,i)||{},{ref:d,message:v,type:F,...M}=y;D(t.errors,i,{...M,...o,ref:h}),g.state.next({name:i,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&h&&h.focus&&h.focus()},Nt=(i,o)=>ne(i)?g.values.subscribe({next:l=>i(E(void 0,o),l)}):E(i,o,!0),Se=(i,o={})=>{for(const l of i?be(i):f.mount)f.mount.delete(l),f.array.delete(l),o.keepValue||(U(s,l),U(n,l)),!o.keepError&&U(t.errors,l),!o.keepDirty&&U(t.dirtyFields,l),!o.keepTouched&&U(t.touchedFields,l),!o.keepIsValidating&&U(t.validatingFields,l),!r.shouldUnregister&&!o.keepDefaultValue&&U(a,l);g.values.next({values:{...n}}),g.state.next({...t,...o.keepDirty?{isDirty:T()}:{}}),!o.keepIsValid&&A()},$e=({disabled:i,name:o,field:l,fields:h,value:y})=>{if(re(i)&&u.mount||i){const d=i?void 0:R(y)?Ce(l?l._f:m(h,o)._f):y;D(n,o,d),Q(o,d,!1,!1,!0)}},Ee=(i,o={})=>{let l=m(s,i);const h=re(o.disabled)||re(e.disabled);return D(s,i,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:i}},name:i,mount:!0,...o}}),f.mount.add(i),l?$e({field:l,disabled:re(o.disabled)?o.disabled:e.disabled,name:i,value:o.value}):C(i,!0,o.value),{...h?{disabled:o.disabled||e.disabled}:{},...r.progressive?{required:!!o.required,min:me(o.min),max:me(o.max),minLength:me(o.minLength),maxLength:me(o.maxLength),pattern:me(o.pattern)}:{},name:i,onChange:de,onBlur:de,ref:y=>{if(y){Ee(i,o),l=m(s,i);const d=R(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,v=lr(d),F=l._f.refs||[];if(v?F.find(M=>M===d):d===l._f.ref)return;D(s,i,{_f:{...l._f,...v?{refs:[...F.filter(ke),d,...Array.isArray(m(a,i))?[{}]:[]],ref:{type:d.type,name:i}}:{ref:d}}}),C(i,!1,void 0,d)}else l=m(s,i,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||o.shouldUnregister)&&!(Zt(f.array,i)&&u.action)&&f.unMount.add(i)}}},We=()=>r.shouldFocusError&&ge(s,fe,f.mount),At=i=>{re(i)&&(g.state.next({disabled:i}),ge(s,(o,l)=>{const h=m(s,l);h&&(o.disabled=h._f.disabled||i,Array.isArray(h._f.refs)&&h._f.refs.forEach(y=>{y.disabled=h._f.disabled||i}))},0,!1))},Je=(i,o)=>async l=>{let h;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=X(n);if(g.state.next({isSubmitting:!0}),r.resolver){const{errors:d,values:v}=await $();t.errors=d,y=v}else await H(s);if(U(t.errors,"root"),G(t.errors)){g.state.next({errors:{}});try{await i(y,l)}catch(d){h=d}}else o&&await o({...t.errors},l),We(),setTimeout(We);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:G(t.errors)&&!h,submitCount:t.submitCount+1,errors:t.errors}),h)throw h},St=(i,o={})=>{m(s,i)&&(R(o.defaultValue)?Y(i,X(m(a,i))):(Y(i,o.defaultValue),D(a,i,X(o.defaultValue))),o.keepTouched||U(t.touchedFields,i),o.keepDirty||(U(t.dirtyFields,i),t.isDirty=o.defaultValue?T(i,X(m(a,i))):T()),o.keepError||(U(t.errors,i),p.isValid&&A()),g.state.next({...t}))},He=(i,o={})=>{const l=i?X(i):a,h=X(l),y=G(i),d=y?a:h;if(o.keepDefaultValues||(a=l),!o.keepValues){if(o.keepDirtyValues){const v=new Set([...f.mount,...Object.keys(he(a,n))]);for(const F of Array.from(v))m(t.dirtyFields,F)?D(d,F,m(n,F)):Y(F,m(d,F))}else{if(Ue&&R(i))for(const v of f.mount){const F=m(s,v);if(F&&F._f){const M=Array.isArray(F._f.refs)?F._f.refs[0]:F._f.ref;if(Fe(M)){const B=M.closest("form");if(B){B.reset();break}}}}s={}}n=e.shouldUnregister?o.keepDefaultValues?X(a):{}:X(d),g.array.next({values:{...d}}),g.values.next({values:{...d}})}f={mount:o.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},u.mount=!p.isValid||!!o.keepIsValid||!!o.keepDirtyValues,u.watch=!!e.shouldUnregister,g.state.next({submitCount:o.keepSubmitCount?t.submitCount:0,isDirty:y?!1:o.keepDirty?t.isDirty:!!(o.keepDefaultValues&&!ae(i,a)),isSubmitted:o.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:y?{}:o.keepDirtyValues?o.keepDefaultValues&&n?he(a,n):t.dirtyFields:o.keepDefaultValues&&i?he(a,i):o.keepDirty?t.dirtyFields:{},touchedFields:o.keepTouched?t.touchedFields:{},errors:o.keepErrors?t.errors:{},isSubmitSuccessful:o.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ye=(i,o)=>He(ne(i)?i(n):i,o);return{control:{register:Ee,unregister:Se,getFieldState:qe,handleSubmit:Je,setError:Ge,_executeSchema:$,_getWatch:E,_getDirty:T,_updateValid:A,_removeUnmounted:ve,_updateFieldArray:x,_updateDisabledField:$e,_getFieldArray:P,_reset:He,_resetDefaultValues:()=>ne(r.defaultValues)&&r.defaultValues().then(i=>{Ye(i,r.resetOptions),g.state.next({isLoading:!1})}),_updateFormState:i=>{t={...t,...i}},_disableForm:At,_subjects:g,_proxyFormState:p,_setErrors:K,get _fields(){return s},get _formValues(){return n},get _state(){return u},set _state(i){u=i},get _defaultValues(){return a},get _names(){return f},set _names(i){f=i},get _formState(){return t},set _formState(i){t=i},get _options(){return r},set _options(i){r={...r,...i}}},trigger:ye,register:Ee,handleSubmit:Je,watch:Nt,setValue:Y,getValues:ze,reset:Ye,resetField:St,clearErrors:Tt,unregister:Se,setError:Ge,setFocus:(i,o={})=>{const l=m(s,i),h=l&&l._f;if(h){const y=h.refs?h.refs[0]:h.ref;y.focus&&(y.focus(),o.shouldSelect&&y.select())}},getFieldState:qe}}function gr(e={}){const r=W.useRef(),t=W.useRef(),[s,a]=W.useState({isDirty:!1,isValidating:!1,isLoading:ne(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ne(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...mr(e),formState:s});const n=r.current.control;return n._options=e,rr({subject:n._subjects.state,next:u=>{tr(u,n._proxyFormState,n._updateFormState)&&a({...n._formState})}}),W.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),W.useEffect(()=>{if(n._proxyFormState.isDirty){const u=n._getDirty();u!==s.isDirty&&n._subjects.state.next({isDirty:u})}},[n,s.isDirty]),W.useEffect(()=>{e.values&&!ae(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,a(u=>({...u}))):n._resetDefaultValues()},[e.values,n]),W.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),W.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),W.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),W.useEffect(()=>{r.current&&(r.current.watch=r.current.watch.bind({}))},[s]),r.current.formState=er(s,n),r.current}const pr=({label:e,storageKey:r,setValue:t,name:s,defaultValue:a,register:n,className:u,...f})=>{const b=k.useRef(null),[N,p]=k.useState(""),[g,j]=k.useState({}),V=ce(),S=async x=>{var C,Q;const L=(Q=(C=x.currentTarget)==null?void 0:C.files)==null?void 0:Q[0];if(!L)return console.error("No file selected");const K=URL.createObjectURL(L);p(K),await fetch(g.putURL,{method:"PUT",body:L,headers:{"content-type":L.type,"content-size":L.size}}).catch(I=>console.error(I)),t==null||t(s,"/files?storageKey="+r)},w=()=>{V.submit({intent:"get_combo_urls",storageKey:r},{method:"POST"})};k.useEffect(()=>{V.data?j(V.data):w()},[V.data]);const A=N||a,_=x=>{p(x.currentTarget.value)};return c.jsx(c.Fragment,{children:c.jsxs("section",{className:pe("max-w-[30vw]",u),children:[c.jsx("p",{className:"",children:e}),c.jsx("input",{type:"text",name:s,defaultValue:a,className:"my-2 w-full rounded-lg disabled:bg-gray-200 text-gray-500",...n(s),onChange:_}),c.jsxs("button",{type:"button",onClick:()=>{var x;(x=b.current)==null||x.click()},className:pe("border-indigo-500 border-2 rounded-3xl border-dotted flex items-center justify-center text-indigo-500 cursor-pointer text-lg hover:text-xl transition-all w-full aspect-video",{"border-none":A}),children:[!A&&c.jsx("h2",{children:"Selecciona un archivo 📂 "}),A&&c.jsx("img",{className:"object-cover w-full aspect-video rounded-3xl",src:A,alt:"preview"})]}),c.jsx("input",{onChange:S,ref:b,hidden:!0,type:"file",accept:"image/*"})]})})},xr=()=>c.jsx("div",{className:"border-4 rounded-full border-gray-200 animate-spin w-6 h-6 border-t-indigo-800"});var wt={};function Z(e,r){typeof r=="boolean"&&(r={forever:r}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=r||{},this._maxRetryTime=r&&r.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}var vr=Z;Z.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)};Z.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null};Z.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var r=new Date().getTime();if(e&&r-this._operationStart>=this._maxRetryTime)return this._errors.push(e),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var t=this._timeouts.shift();if(t===void 0)if(this._cachedTimeouts)this._errors.splice(0,this._errors.length-1),t=this._cachedTimeouts.slice(-1);else return!1;var s=this;return this._timer=setTimeout(function(){s._attempts++,s._operationTimeoutCb&&(s._timeout=setTimeout(function(){s._operationTimeoutCb(s._attempts)},s._operationTimeout),s._options.unref&&s._timeout.unref()),s._fn(s._attempts)},t),this._options.unref&&this._timer.unref(),!0};Z.prototype.attempt=function(e,r){this._fn=e,r&&(r.timeout&&(this._operationTimeout=r.timeout),r.cb&&(this._operationTimeoutCb=r.cb));var t=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){t._operationTimeoutCb()},t._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)};Z.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)};Z.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)};Z.prototype.start=Z.prototype.try;Z.prototype.errors=function(){return this._errors};Z.prototype.attempts=function(){return this._attempts};Z.prototype.mainError=function(){if(this._errors.length===0)return null;for(var e={},r=null,t=0,s=0;s<this._errors.length;s++){var a=this._errors[s],n=a.message,u=(e[n]||0)+1;e[n]=u,u>=t&&(r=a,t=u)}return r};(function(e){var r=vr;e.operation=function(t){var s=e.timeouts(t);return new r(s,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},e.timeouts=function(t){if(t instanceof Array)return[].concat(t);var s={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:1/0,randomize:!1};for(var a in t)s[a]=t[a];if(s.minTimeout>s.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var n=[],u=0;u<s.retries;u++)n.push(this.createTimeout(u,s));return t&&t.forever&&!n.length&&n.push(this.createTimeout(u,s)),n.sort(function(f,b){return f-b}),n},e.createTimeout=function(t,s){var a=s.randomize?Math.random()+1:1,n=Math.round(a*Math.max(s.minTimeout,1)*Math.pow(s.factor,t));return n=Math.min(n,s.maxTimeout),n},e.wrap=function(t,s,a){if(s instanceof Array&&(a=s,s=null),!a){a=[];for(var n in t)typeof t[n]=="function"&&a.push(n)}for(var u=0;u<a.length;u++){var f=a[u],b=t[f];t[f]=(function(p){var g=e.operation(s),j=Array.prototype.slice.call(arguments,1),V=j.pop();j.push(function(S){g.retry(S)||(S&&(arguments[0]=g.mainError()),V.apply(this,arguments))}),g.attempt(function(){p.apply(t,j)})}).bind(t,b),t[f].options=s}}})(wt);var br=wt,_r=br;function wr(e,r){function t(s,a){var n=r||{},u;"randomize"in n||(n.randomize=!0),u=_r.operation(n);function f(p){a(p||new Error("Aborted"))}function b(p,g){if(p.bail){f(p);return}u.retry(p)?n.onRetry&&n.onRetry(p,g):a(u.mainError())}function N(p){var g;try{g=e(f,p)}catch(j){b(j,p);return}Promise.resolve(g).then(s).catch(function(V){b(V,p)})}u.attempt(N)}return new Promise(t)}var Fr=wr;const Ke=Dt(Fr),Tr="create_multipart_upload",Nr="create_put_part_url",Ar="complete_multipart_upload",Sr=1024*1024,Le=8*Sr,Er=async(e="/api/upload",r)=>{const t={method:"POST",body:JSON.stringify({intent:Tr,directory:r}),headers:{"content-type":"application/json"}};let s;try{s=await fetch(e,t).then(a=>a.json())}catch(a){throw a instanceof Error?a:new Error("Error on post to handler")}return s},Vr=async({partNumber:e,uploadId:r,handler:t="/api/upload",key:s})=>Ke(async()=>await(await fetch(t,{method:"POST",body:JSON.stringify({partNumber:e,uploadId:r,key:s,intent:Nr})})).text(),{retries:5}),jr=async({attempts:e=5,url:r,blob:t})=>{let s=0;return await Ke(async a=>{const n=await fetch(r,{method:"PUT",body:t});if(n.status===403){a(new Error("Unauthorized"));return}else{if(n.ok)return n;throw new Error("Unknown error")}},{retries:e,onRetry:a=>{s=s+1,a instanceof Error&&console.log(`retrying #${s} Put request of ${r}`)}})},Dr=async e=>{const{file:r,numberOfParts:t,uploadId:s,key:a,onUploadProgress:n,handler:u}=e;let f=0;const b=Array.from({length:t}).map(async(N,p)=>{const g=await Vr({partNumber:p+1,uploadId:s,key:a,handler:u}),j=p*Le,V=Math.min(j+Le,r.size),S=r.slice(j,V),w=await jr({url:g,blob:S});f+=S.size;const A=f/r.size*100;n==null||n({total:r.size,loaded:f,percentage:A});const _=w.headers.get("ETag");return String(_).replaceAll('"',"")});return await Promise.all(b)},kr=async e=>{const{key:r,etags:t,uploadId:s,metadata:a,handler:n="/api/upload"}=e;return await Ke(async()=>await(await fetch(n,{method:"POST",body:JSON.stringify({intent:Ar,contentType:a.type,size:a.size,metadata:a,uploadId:s,etags:t,key:r})})).json())},Cr=e=>{const{access:r="public",handler:t,onUploadProgress:s,multipart:a}=e||{};return{upload:async(u,f)=>{const b={name:f.name,size:f.size,type:f.type},N=Math.ceil(f.size/Le),{uploadId:p,key:g}=await Er(t,u),j=await Dr({file:f,handler:t,key:g,numberOfParts:N,uploadId:p,onUploadProgress:s}),V=await kr({metadata:b,key:g,uploadId:p,etags:j,handler:t});return{uploadId:p,key:g,metadata:b,url:"",access:r,completedData:V}}}},Rr=({video:e,setValue:r,label:t,name:s,register:a,className:n,onVideoLoads:u})=>{const[f,b]=k.useState(null),N=k.useRef(null),p=ce(),[g,j]=k.useState(e.storageLink||""),[V,S]=k.useState(""),[w,A]=k.useState(!1),[_,x]=k.useState(0),L=()=>{const I="video-"+e.id;return p.submit({intent:"get_combo_urls",storageKey:I},{method:"POST"}),S(I),I},K=async I=>{var J;const $=(J=I.target.files)==null?void 0:J[0];if(!$)return console.error("No file selected");j(URL.createObjectURL($)),Q($)},{upload:C}=Cr({onUploadProgress:({percentage:I})=>x(I)}),Q=async I=>{A(!0);const{key:$}=await C("animaciones/",I),J=$.replace("animaciones/","");r("storageKey",J),r("storageLink","/files?storageKey="+J),A(!1)};return k.useEffect(()=>{p.data?b({...p.data}):L()},[p.data]),c.jsxs("section",{className:pe("my-2 grid gap-2 max-w-[50vw] md:max-w-[30vw]",n),children:[c.jsx("p",{children:t}),c.jsx("input",{type:"text",name:s,className:"disabled:pointer-events-none rounded-lg disabled:text-gray-500 disabled:bg-gray-200",disabled:!0,...a(s)}),c.jsx("input",{type:"file",onChange:K,accept:"video/*",className:"mb-2"})," ",w&&c.jsxs("div",{className:"flex gap-2",children:[c.jsx(xr,{})," ",c.jsxs("span",{children:["Subiendo video ",_.toFixed(0),"% no cierre la ventana"]})]}),g&&c.jsx("video",{onCanPlay:I=>u==null?void 0:u(N,I),ref:N,src:g,className:"border rounded-xl my-2 aspect-video w-full",controls:!0})]})},Or=({onSubmit:e,video:r,videosLength:t})=>{var V,S;const s=ce(),a=s.state!=="idle",{handleSubmit:n,register:u,formState:{isValid:f},setValue:b}=gr({defaultValues:{storageLink:`/videos?storageKey=${r.storageKey||`video-${r.id}`}`,storageKey:r.storageKey,title:r.title||"",isPublic:r.isPublic||!1,duration:r.duration,moduleName:r.moduleName,id:r.id,slug:r.slug,index:Number(r.index)||t,poster:r.poster}}),N=w=>{b("duration",String(Number(w.current.duration)/60))},p=w=>{s.submit({intent:"update_video",data:JSON.stringify(w)},{method:"POST"}),e==null||e(w)},g=()=>{!confirm("¿Seguro que quieres elminar?")||!r.id||(s.submit({intent:"delete_video",videoId:r.id},{method:"POST"}),e==null||e())},j=()=>s.submit({intent:"experiment",storageKey:r.storageKey},{method:"POST"});return c.jsx(c.Fragment,{children:c.jsxs(Pt,{className:"flex flex-col h-full",onSubmit:n(p),children:[c.jsxs("h3",{className:"mb-2 text-gray-100 text-xl",children:["Nombre del modulo: ",r.moduleName]}),c.jsxs("h3",{className:"mb-2 text-gray-400 text-xl",children:[" ",r.slug]}),c.jsx(Re,{type:"number",placeholder:"posición en la lista",label:"Índice",register:u("index",{required:!0})}),c.jsx(Re,{placeholder:"Título del nuevo video",label:"Título del video",register:u("title",{required:!0})}),r.id&&c.jsx(Rr,{className:"text-white",label:"Link del video",name:"storageLink",video:r,setValue:b,register:u,onVideoLoads:N}),((V=s.data)==null?void 0:V.playListURL)&&c.jsx("video",{controls:!0,className:"aspect-video",children:c.jsx("source",{src:s.data.playListURL,type:"application/x-mpegURL"})}),r.storageKeys&&r.storageKeys.length>0&&c.jsxs("div",{className:"text-white dark:text-black mb-2",children:[c.jsx("p",{children:"Otras versiones:"}),c.jsx("div",{className:"flex gap-2",children:(S=r.m3u8)==null?void 0:S.map(w=>c.jsx("p",{children:w},w))})]}),r.storageKey&&c.jsx("button",{onClick:j,type:"button",className:"dark:text-black text-white border rounded-md py-2 active:bg-gray-800 mb-4",children:"Generar Todas las Versiones"}),r.id&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"flex justify-between cursor-pointer my-4 text-white",children:[c.jsx("span",{children:"¿Este video es público?"}),c.jsx("input",{...u("isPublic"),name:"isPublic",className:"size-4 text-green-500",type:"checkbox"})]}),c.jsx(Re,{placeholder:"60",type:"text",label:"Duración del video en minutos",register:u("duration",{required:!1})})]}),r.id&&c.jsx(pr,{className:"text-white",setValue:b,defaultValue:r.poster,name:"poster",storageKey:"poster-"+r.id,label:"Link del poster",register:u}),c.jsxs("div",{className:"flex gap-2 pt-4 sticky bottom-0 bg-black",children:[c.jsx(we,{isDisabled:!f||a,className:"w-full",type:"submit",children:"Guardar"}),r.id&&c.jsx(we,{onClick:g,className:"w-full bg-red-500",type:"button",children:"Eliminar"})]})]})})},Re=({error:e,name:r,label:t,placeholder:s,register:a,isDisabled:n,type:u="text",...f})=>c.jsxs("label",{className:"flex flex-col gap-2 mb-4 text-white",children:[c.jsx("p",{className:"",children:t}),c.jsx("input",{disabled:n,placeholder:s,className:pe("shadow rounded-md py-2 px-4 border w-full","text-black",{"bg-gray-200 text-gray-500 pointer-events-none":n}),type:u,name:r,...f,...a}),e&&c.jsx("p",{children:e})]}),dt={title:"Nuevo video",moduleName:""};function Jr(){const e=ce(),{course:r,moduleNamesOrder:t,videos:s}=Ut(),[a,n]=k.useState(dt),[u,f]=k.useState(!1),[b,N]=k.useState(t),p=w=>{w.preventDefault();const A=w.currentTarget.name.value;w.currentTarget.name.value="",A&&N(_=>[..._,A])},g=w=>{f(!0),n(A=>({...A,moduleName:w}))},j=w=>{n(w),f(!0)},V=(w,A)=>{N(_=>_.map(x=>x===w?A:x))},S=(w,A)=>{const _=[...b],x=_.splice(w,1)[0];_.splice(A,0,x),N(_),e.submit({intent:"update_modules_order",moduleNamesOrder:JSON.stringify(_),courseId:r.id},{method:"post"})};return c.jsxs(c.Fragment,{children:[c.jsxs("article",{className:"bg-gradient-to-tr from-slate-950 to-indigo-950 min-h-screen py-20 px-8",children:[c.jsx("h1",{className:"text-gray-50 text-2xl mb-6",children:r.title}),c.jsxs("form",{onSubmit:p,className:"flex items-center justify-end gap-4",children:[c.jsx("input",{name:"name",type:"text",placeholder:"Nombre del nuevo módulo",className:"py-3 px-6 text-lg rounded-full"}),c.jsx(we,{type:"submit",className:"bg-green-500",children:"Añadir módulo"})]}),c.jsx(Wt,{children:c.jsx("section",{className:"my-8 grid gap-4 max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3",children:b.map((w,A)=>c.jsx(Lr,{onModuleOrderUpdate:S,index:A,onModuleTitleUpdate:V,onVideoSelect:j,onAddVideo:()=>w&&g(w),title:w||"",videos:s.filter(_=>_.moduleName===w)},w))})})]}),c.jsx(Rt,{onClose:()=>{f(!1),n({})},isOpen:u,title:a.id?"Editar video":"Añadir video",cta:c.jsx(c.Fragment,{}),children:c.jsx(Or,{onSubmit:()=>{n(dt),f(!1)},video:a,videosLength:s.length})})]})}const Lr=({title:e,videos:r=[],onAddVideo:t,onVideoSelect:s,onModuleTitleUpdate:a,onModuleOrderUpdate:n,index:u})=>{const f=ce(),[b,N]=k.useState(!0),[p,g]=k.useState(!1),j=Ot({isActive:p,includeEscape:!0,onOutsideClick:()=>{g(!1)}}),V=()=>{t==null||t(e)},S=_=>{const x=_.currentTarget.title.value;x&&(a==null||a(e,x),f.submit({intent:"update_modulename",oldModuleName:e,newModuleName:x},{method:"post"}))},w=yt(),A=_=>{const L=document.elementsFromPoint(_.clientX,_.clientY).find(K=>K.dataset.index&&K.dataset.index!==String(u));L&&(n==null||n(Number(u),Number(L.dataset.index)))};return c.jsxs(Pe.article,{layout:!0,layoutId:e,className:"relative",drag:!0,dragControls:w,dragSnapToOrigin:!0,onDragEnd:A,"data-index":u,dragListener:!1,children:[c.jsxs("section",{className:"bg-slate-600 py-2 px-4 flex justify-between items-center mt-2 ",children:[c.jsx(Ft,{onPointerDown:_=>w.start(_)}),p?c.jsx("form",{ref:j,onSubmit:S,children:c.jsx("input",{defaultValue:e,autoFocus:!0,className:"rounded py-1 px-2",placeholder:"Escribe un nuevo titulo",name:"title"})}):c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"text-gray-400 w-10 text-center",children:[" ",u+1]}),c.jsx("button",{onClick:()=>g(!0),className:"text-white font-bold capitalize text-left",children:e||"Sin título"})]}),c.jsx("button",{className:"flex-grow flex justify-end",onClick:()=>N(_=>!_),children:b?c.jsx(kt,{}):c.jsx(Ct,{})})]}),b&&c.jsxs("section",{className:"min-h-20 bg-slate-300 p-4 flex flex-col gap-2 group",children:[r.length<1&&c.jsx("p",{className:"text-center py-6",children:"No hay videos"}),r.sort((_,x)=>_.index<x.index?-1:1).map((_,x)=>c.jsx(Pr,{onClick:()=>s==null?void 0:s(_),video:_},_.id)),c.jsx(we,{onClick:V,className:"group-hover:visible invisible ml-auto",children:"Añadir video"})]})]},e)},Pr=({video:e,onClick:r,onReorder:t})=>{const s=ce(),a=yt(),n=u=>{const b=document.elementsFromPoint(u.clientX,u.clientY).find(N=>N.dataset.videoindex&&N.dataset.videoindex!==String(e.index));b&&(t==null||t(Number(e.index),Number(b.dataset.videoindex)),s.submit({intent:"update_video",data:JSON.stringify([{}])},{method:"POST"}))};return c.jsxs(Pe.div,{"data-videoindex":e.index,onDragEnd:n,dragListener:!1,drag:!0,dragControls:a,dragSnapToOrigin:!0,onClick:r,className:pe("hover:scale-[1.02] text-left py-1 px-4 rounded","bg-slate-400","flex gap-2"),children:[c.jsx(Ft,{onPointerDown:u=>a.start(u)}),c.jsx("p",{className:"truncate",children:e.title}),c.jsxs("div",{className:"ml-auto flex gap-2 items-center",children:[e.isPublic&&c.jsx("span",{children:"🌎"}),c.jsx("span",{children:e.storageKey?"📼":"🫥"}),[...new Set(e.m3u8||[])].map(u=>c.jsx("span",{className:"text-xs text-white bg-blue-500 py-px px-2 rounded-full",children:u},u))]})]})},Ft=({onPointerDown:e})=>c.jsx(Pe.button,{whileTap:{cursor:"grabbing",boxShadow:"0px 0px 24px 0px gray"},className:"cursor-grab py-px pr-px shadow-[unset] text-xl text-gray-900",onPointerDown:r=>{r.stopPropagation(),e==null||e(r)},children:c.jsx(Lt,{})});export{Jr as default};
