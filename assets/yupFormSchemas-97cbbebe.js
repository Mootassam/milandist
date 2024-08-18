import{r as d,K as Tr,N as Se,O as De,Q as Ir,R as Fe,T as sr,s as ir,G as Be}from"./index-f78e93e1.js";var ye=e=>e instanceof HTMLElement;const ue={BLUR:"blur",CHANGE:"change",INPUT:"input"},X={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},br="select",qe="undefined",z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};function Pr({ref:e},r,t){ye(e)&&t&&(e.addEventListener(r?ue.CHANGE:ue.INPUT,t),e.addEventListener(ue.BLUR,t))}var _=e=>e==null;const hr=e=>typeof e=="object";var N=e=>!_(e)&&!Array.isArray(e)&&hr(e)&&!(e instanceof Date),Re=e=>/^\w*$/.test(e),Z=e=>e.filter(Boolean),pr=e=>Z(e.replace(/["|']/g,"").replace(/\[/g,".").replace(/\]/g,"").split("."));function C(e,r,t){let s=-1;const c=Re(r)?[r]:pr(r),a=c.length,l=a-1;for(;++s<a;){const m=c[s];let o=t;if(s!==l){const g=e[m];o=N(g)||Array.isArray(g)?g:isNaN(+c[s+1])?{}:[]}e[m]=o,e=e[m]}return e}var Me=(e,r={})=>{for(const t in e)Re(t)?r[t]=e[t]:C(r,t,e[t]);return r},q=e=>e===void 0,O=(e={},r,t)=>{const s=Z(r.split(/[,[\].]+?/)).reduce((c,a)=>_(c)?c:c[a],e);return q(s)||s===e?q(e[r])?t:e[r]:s},Nr=(e,r)=>{for(const t in e)if(O(r,t)){const s=e[t];if(s){if(s.ref.focus&&q(s.ref.focus()))break;if(s.options){s.options[0].ref.focus();break}}}},ur=(e,r)=>{ye(e)&&e.removeEventListener&&(e.removeEventListener(ue.INPUT,r),e.removeEventListener(ue.CHANGE,r),e.removeEventListener(ue.BLUR,r))};const cr={isValid:!1,value:""};var Or=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.ref.checked?{isValid:!0,value:t.ref.value}:r,cr):cr,Br=e=>[...e].filter(({selected:r})=>r).map(({value:r})=>r),ke=e=>e.type==="radio",vr=e=>e.type==="file",ce=e=>e.type==="checkbox",gr=e=>e.type===`${br}-multiple`;const ar={value:!1,isValid:!1},lr={value:!0,isValid:!0};var Vr=e=>{if(Array.isArray(e)){if(e.length>1){const c=e.filter(a=>a&&a.ref.checked).map(({ref:{value:a}})=>a);return{value:c,isValid:!!c.length}}const{checked:r,value:t,attributes:s}=e[0].ref;return r?s&&!q(s.value)?q(t)||t===""?lr:{value:t,isValid:!0}:lr:ar}return ar};function ie(e,r,t,s){const c=e.current[r];if(c){const{ref:{value:a,disabled:l},ref:m,valueAsNumber:o,valueAsDate:g,setValueAs:T}=c;return l&&s?void 0:vr(m)?m.files:ke(m)?Or(c.options).value:gr(m)?Br(m.options):ce(m)?Vr(c.options).value:o?+a:g?m.valueAsDate:T?T(a):a}if(t)return O(t.current,r)}function xe(e){return e?!(e instanceof HTMLElement)||e.nodeType===Node.DOCUMENT_NODE?!1:xe(e.parentNode):!0}var x=e=>N(e)&&!Object.keys(e).length,He=e=>typeof e=="boolean";function $r(e,r){const t=r.slice(0,-1).length;let s=0;for(;s<t;)e=q(e)?s++:e[r[s++]];return e}function P(e,r){const t=Re(r)?[r]:pr(r),s=t.length==1?e:$r(e,t),c=t[t.length-1];let a;s&&delete s[c];for(let l=0;l<t.slice(0,-1).length;l++){let m=-1,o;const g=t.slice(0,-(l+1)),T=g.length-1;for(l>0&&(a=e);++m<g.length;){const w=g[m];o=o?o[w]:e[w],T===m&&(N(o)&&x(o)||Array.isArray(o)&&!o.filter(I=>N(I)&&!x(I)||He(I)).length)&&(a?delete a[w]:delete e[w]),a=o}}return e}const or=(e,r)=>e&&e.ref===r;function Yr(e,r,t,s,c,a){const{ref:l,ref:{name:m}}=t,o=e.current[m];if(!c){const g=ie(e,m,s);!q(g)&&C(s.current,m,g)}if(!l.type||!o){delete e.current[m];return}ke(l)||ce(l)?Array.isArray(o.options)&&o.options.length?(Z(o.options).forEach((g={},T)=>{(xe(g.ref)&&or(g,g.ref)||a)&&(ur(g.ref,r),P(o.options,`[${T}]`))}),o.options&&!Z(o.options).length&&delete e.current[m]):delete e.current[m]:(xe(l)&&or(o,l)||a)&&(ur(l,r),delete e.current[m])}var ee=e=>_(e)||!hr(e);function Ge(e,r){if(ee(e)||ee(r))return r;for(const t in r){const s=e[t],c=r[t];try{e[t]=N(s)&&N(c)||Array.isArray(s)&&Array.isArray(c)?Ge(s,c):c}catch{}}return e}function We(e,r,t,s,c){let a=-1;for(;++a<e.length;){for(const l in e[a])Array.isArray(e[a][l])?(!t[a]&&(t[a]={}),t[a][l]=[],We(e[a][l],O(r[a]||{},l,[]),t[a][l],t[a],l)):O(r[a]||{},l)===e[a][l]?C(t[a]||{},l):t[a]=Object.assign(Object.assign({},t[a]),{[l]:!0});s&&!t.length&&delete s[c]}return t}var Wr=(e,r,t)=>Ge(We(e,r,t),We(r,e,t)),G=e=>typeof e=="string",$e=(e,r,t,s,c)=>{const a={};for(const l in e.current)(q(c)||(G(c)?l.startsWith(c):Array.isArray(c)&&c.find(m=>l.startsWith(m))))&&(a[l]=ie(e,l,void 0,s));return t?Me(a):Ge(r,Me(a))};function se(e,r,t){if(ee(e)||ee(r)||e instanceof Date||r instanceof Date)return e===r;if(!d.isValidElement(e)){const s=Object.keys(e),c=Object.keys(r);if(s.length!==c.length)return!1;for(const a of s){const l=e[a];if(!(t&&a==="ref")){const m=r[a];if((N(l)||Array.isArray(l))&&(N(m)||Array.isArray(m))?!se(l,m,t):l!==m)return!1}}}return!0}var _r=({errors:e,name:r,error:t,validFields:s,fieldsWithValidation:c})=>{const a=q(t),l=O(e,r);return a&&!!l||!a&&!se(l,t,!0)||a&&O(c,r)&&!O(s,r)},Ar=e=>e instanceof RegExp,fe=e=>N(e)&&!Ar(e)?e:{value:e,message:""},Rr=e=>typeof e=="function",_e=e=>G(e)||d.isValidElement(e);function fr(e,r,t="validate"){if(_e(e)||He(e)&&!e)return{type:t,message:_e(e)?e:"",ref:r}}var Hr=(e,r,t,s,c)=>r?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[s]:c||!0})}):{},we=async(e,r,{ref:t,ref:{value:s},options:c,required:a,maxLength:l,minLength:m,min:o,max:g,pattern:T,validate:w},I)=>{const B=t.name,k={},M=ke(t),j=ce(t),me=M||j,K=s==="",$=Hr.bind(null,B,r,k),A=(R,V,v,E=z.maxLength,L=z.minLength)=>{const Q=R?V:v;k[B]=Object.assign({type:R?E:L,message:Q,ref:t},$(R?E:L,Q))};if(a&&(!M&&!j&&(K||_(s))||He(s)&&!s||j&&!Vr(c).isValid||M&&!Or(c).isValid)){const{value:R,message:V}=_e(a)?{value:!!a,message:a}:fe(a);if(R&&(k[B]=Object.assign({type:z.required,message:V,ref:me?((e.current[B].options||[])[0]||{}).ref:t},$(z.required,V)),!r))return k}if((!_(o)||!_(g))&&s!==""){let R,V;const v=fe(g),E=fe(o);if(isNaN(s)){const L=t.valueAsDate||new Date(s);G(v.value)&&(R=L>new Date(v.value)),G(E.value)&&(V=L<new Date(E.value))}else{const L=t.valueAsNumber||parseFloat(s);_(v.value)||(R=L>v.value),_(E.value)||(V=L<E.value)}if((R||V)&&(A(!!R,v.message,E.message,z.max,z.min),!r))return k}if(G(s)&&!K&&(l||m)){const R=fe(l),V=fe(m),v=!_(R.value)&&s.length>R.value,E=!_(V.value)&&s.length<V.value;if((v||E)&&(A(v,R.message,V.message),!r))return k}if(G(s)&&T&&!K){const{value:R,message:V}=fe(T);if(Ar(R)&&!R.test(s)&&(k[B]=Object.assign({type:z.pattern,message:V,ref:t},$(z.pattern,V)),!r))return k}if(w){const R=ie(e,B,I),V=me&&c?c[0].ref:t;if(Rr(w)){const v=await w(R),E=fr(v,V);if(E&&(k[B]=Object.assign(Object.assign({},E),$(z.validate,E.message)),!r))return k}else if(N(w)){let v={};for(const[E,L]of Object.entries(w)){if(!x(v)&&!r)break;const Q=await L(R),be=fr(Q,V,E);be&&(v=Object.assign(Object.assign({},be),$(E,be.message)),r&&(k[B]=v))}if(!x(v)&&(k[B]=Object.assign({ref:V},v),!r))return k}}return k};const ze=(e,r,t=[])=>{for(const s in r){const c=e+(N(r)?`.${s}`:`[${s}]`);ee(r[s])?t.push(c):ze(c,r[s],t)}return t};var dr=(e,r,t,s,c)=>{let a;return t.add(r),x(e)||(a=O(e,r),(N(a)||Array.isArray(a))&&ze(r,a).forEach(l=>t.add(l))),q(a)?c?s:O(s,r):a},Gr=({isOnBlur:e,isOnChange:r,isOnTouch:t,isTouched:s,isReValidateOnBlur:c,isReValidateOnChange:a,isBlurEvent:l,isSubmitted:m,isOnAll:o})=>o?!1:!m&&t?!(s||l):(m?c:e)?!l:(m?a:r)?l:!0,Ye=e=>e.substring(0,e.indexOf("["));const zr=(e,r)=>RegExp(`^${r}([|.)\\d+`.replace(/\[/g,"\\[").replace(/\]/g,"\\]")).test(e);var Kr=(e,r)=>[...e].some(t=>zr(r,t)),Qr=e=>e.type===`${br}-one`;function Ur(e,r){const t=new MutationObserver(()=>{for(const s of Object.values(e.current))if(s&&s.options)for(const c of s.options)c&&c.ref&&xe(c.ref)&&r(s);else s&&xe(s.ref)&&r(s)});return t.observe(window.document,{childList:!0,subtree:!0}),t}var de=typeof window!==qe&&typeof document!==qe;function J(e){let r;if(ee(e)||de&&(e instanceof File||ye(e)))return e;if(e instanceof Date)return r=new Date(e.getTime()),r;if(e instanceof Set){r=new Set;for(const t of e)r.add(t);return r}if(e instanceof Map){r=new Map;for(const t of e.keys())r.set(t,J(e.get(t)));return r}r=Array.isArray(e)?[]:{};for(const t in e)r[t]=J(e[t]);return r}var yr=e=>({isOnSubmit:!e||e===X.onSubmit,isOnBlur:e===X.onBlur,isOnChange:e===X.onChange,isOnAll:e===X.all,isOnTouch:e===X.onTouched}),mr=e=>ke(e)||ce(e);const Jr=typeof window===qe,ne=de?"Proxy"in window:typeof Proxy!==qe;function st({mode:e=X.onSubmit,reValidateMode:r=X.onChange,resolver:t,context:s,defaultValues:c={},shouldFocusError:a=!0,shouldUnregister:l=!0,criteriaMode:m}={}){const o=d.useRef({}),g=d.useRef({}),T=d.useRef({}),w=d.useRef(new Set),I=d.useRef({}),B=d.useRef({}),k=d.useRef({}),M=d.useRef({}),j=d.useRef(c),me=d.useRef(!1),K=d.useRef(!1),$=d.useRef(),A=d.useRef({}),R=d.useRef({}),V=d.useRef(s),v=d.useRef(t),E=d.useRef(new Set),L=d.useRef(yr(e)),{isOnSubmit:Q,isOnTouch:be}=L.current,Y=m===X.all,[ae,xr]=d.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touched:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!Q,errors:{}}),F=d.useRef({isDirty:!ne,dirtyFields:!ne,touched:!ne||be,isValidating:!ne,isSubmitting:!ne,isValid:!ne}),f=d.useRef(ae),he=d.useRef(),{isOnBlur:Qe,isOnChange:Ue}=d.useRef(yr(r)).current;V.current=s,v.current=t,f.current=ae,A.current=l?{}:x(A.current)?J(c):A.current;const S=d.useCallback((n={})=>{me.current||(f.current=Object.assign(Object.assign({},f.current),n),xr(f.current))},[]),Je=()=>F.current.isValidating&&S({isValidating:!0}),pe=d.useCallback((n,u,i=!1,h={},b)=>{let y=i||_r({errors:f.current.errors,error:u,name:n,validFields:M.current,fieldsWithValidation:k.current});const p=O(f.current.errors,n);u?(P(M.current,n),y=y||!p||!se(p,u,!0),C(f.current.errors,n,u)):((O(k.current,n)||v.current)&&(C(M.current,n,!0),y=y||p),P(f.current.errors,n)),(y&&!_(i)||!x(h)||F.current.isValidating)&&S(Object.assign(Object.assign(Object.assign({},h),v.current?{isValid:!!b}:{}),{isValidating:!1}))},[]),Oe=d.useCallback((n,u)=>{const{ref:i,options:h}=o.current[n],b=de&&ye(i)&&_(u)?"":u;ke(i)?(h||[]).forEach(({ref:y})=>y.checked=y.value===b):vr(i)&&!G(b)?i.files=b:gr(i)?[...i.options].forEach(y=>y.selected=b.includes(y.value)):ce(i)&&h?h.length>1?h.forEach(({ref:y})=>y.checked=Array.isArray(b)?!!b.find(p=>p===y.value):b===y.value):h[0].ref.checked=!!b:i.value=b},[]),Le=d.useCallback((n,u)=>{if(F.current.isDirty){const i=le();return n&&u&&C(i,n,u),!se(i,j.current)}return!1},[]),ve=d.useCallback((n,u=!0)=>{if(F.current.isDirty||F.current.dirtyFields){const i=!se(O(j.current,n),ie(o,n,A)),h=O(f.current.dirtyFields,n),b=f.current.isDirty;i?C(f.current.dirtyFields,n,!0):P(f.current.dirtyFields,n);const y={isDirty:Le(),dirtyFields:f.current.dirtyFields},p=F.current.isDirty&&b!==y.isDirty||F.current.dirtyFields&&h!==O(f.current.dirtyFields,n);return p&&u&&S(y),p?y:{}}return{}},[]),Te=d.useCallback(async(n,u)=>{const i=(await we(o,Y,o.current[n],A))[n];return pe(n,i,u),q(i)},[pe,Y]),Xe=d.useCallback(async n=>{const{errors:u}=await v.current(le(),V.current,Y),i=f.current.isValid;if(Array.isArray(n)){const h=n.map(b=>{const y=O(u,b);return y?C(f.current.errors,b,y):P(f.current.errors,b),!y}).every(Boolean);return S({isValid:x(u),isValidating:!1}),h}else{const h=O(u,n);return pe(n,h,i!==x(u),{},x(u)),!h}},[pe,Y]),ge=d.useCallback(async n=>{const u=n||Object.keys(o.current);if(Je(),v.current)return Xe(u);if(Array.isArray(u)){!n&&(f.current.errors={});const i=await Promise.all(u.map(async h=>await Te(h,null)));return S({isValidating:!1}),i.every(Boolean)}return await Te(u)},[Xe,Te]),Ze=d.useCallback((n,u,{shouldDirty:i,shouldValidate:h})=>{const b={};C(b,n,u);for(const y of ze(n,u))o.current[y]&&(Oe(y,O(b,y)),i&&ve(y),h&&ge(y))},[ge,Oe,ve]),er=d.useCallback((n,u,i)=>{if(!l&&!ee(u)&&C(A.current,n,Object.assign({},u)),o.current[n])Oe(n,u),i.shouldDirty&&ve(n),i.shouldValidate&&ge(n);else if(!ee(u)&&(Ze(n,u,i),E.current.has(n))){const h=Ye(n)||n;C(g.current,n,u),R.current[h]({[h]:O(g.current,h)}),(F.current.isDirty||F.current.dirtyFields)&&i.shouldDirty&&(C(f.current.dirtyFields,n,Wr(u,O(j.current,n,[]),O(f.current.dirtyFields,n,[]))),S({isDirty:!se(Object.assign(Object.assign({},le()),{[n]:u}),j.current)}))}!l&&C(A.current,n,u)},[ve,Oe,Ze]),rr=n=>K.current||w.current.has(n)||w.current.has((n.match(/\w+/)||[])[0]),Ve=n=>{let u=!0;if(!x(I.current))for(const i in I.current)(!n||!I.current[i].size||I.current[i].has(n)||I.current[i].has(Ye(n)))&&(B.current[i](),u=!1);return u};function kr(n,u,i){er(n,u,i||{}),rr(n)&&S(),Ve(n)}$.current=$.current?$.current:async({type:n,target:u})=>{let i=u.name;const h=o.current[i];let b,y;if(h){const p=n===ue.BLUR,W=Gr(Object.assign({isBlurEvent:p,isReValidateOnChange:Ue,isReValidateOnBlur:Qe,isTouched:!!O(f.current.touched,i),isSubmitted:f.current.isSubmitted},L.current));let H=ve(i,!1),oe=!x(H)||!p&&rr(i);if(p&&!O(f.current.touched,i)&&F.current.touched&&(C(f.current.touched,i,!0),H=Object.assign(Object.assign({},H),{touched:f.current.touched})),!l&&ce(u)&&C(A.current,i,ie(o,i)),W)return!p&&Ve(i),(!x(H)||oe&&x(H))&&S(H);if(Je(),v.current){const{errors:D}=await v.current(le(),V.current,Y),Ae=f.current.isValid;if(b=O(D,i),ce(u)&&!b&&v.current){const U=Ye(i),re=O(D,U,{});re.type&&re.message&&(b=re),U&&(re||O(f.current.errors,U))&&(i=U)}y=x(D),Ae!==y&&(oe=!0)}else b=(await we(o,Y,h,A))[i];!p&&Ve(i),pe(i,b,oe,H,y)}};function tr(n){if(!l){let u=J(n);for(const i of E.current)Re(i)&&!u[i]&&(u=Object.assign(Object.assign({},u),{[i]:[]}));return u}return n}function le(n){if(G(n))return ie(o,n,A);if(Array.isArray(n)){const u={};for(const i of n)C(u,i,ie(o,i,A));return u}return tr($e(o,J(A.current),l))}const Ee=d.useCallback(async(n={})=>{const{errors:u}=await v.current(Object.assign(Object.assign({},le()),n),V.current,Y),i=x(u);f.current.isValid!==i&&S({isValid:i})},[Y]),Ce=d.useCallback((n,u)=>Yr(o,$.current,n,A,l,u),[l]),Ie=d.useCallback(n=>{if(K.current)S();else{for(const u of w.current)if(u.startsWith(n)){S();break}Ve(n)}},[]),je=d.useCallback((n,u)=>{n&&(Ce(n,u),l&&!Z(n.options||[]).length&&(P(M.current,n.ref.name),P(k.current,n.ref.name),P(f.current.errors,n.ref.name),C(f.current.dirtyFields,n.ref.name,!0),S({isDirty:Le()}),F.current.isValid&&v.current&&Ee(),Ie(n.ref.name)))},[Ee,Ce]);function Er(n){n&&(Array.isArray(n)?n:[n]).forEach(u=>o.current[u]&&Re(u)?delete f.current.errors[u]:P(f.current.errors,u)),S({errors:n?f.current.errors:{}})}function Cr(n,u){const i=(o.current[n]||{}).ref;C(f.current.errors,n,Object.assign(Object.assign({},u),{ref:i})),S({isValid:!1}),u.shouldFocus&&i&&i.focus&&i.focus()}const Pe=d.useCallback((n,u,i)=>{const h=i?I.current[i]:w.current;let b=$e(o,J(A.current),l,!1,n);if(G(n)){if(E.current.has(n)){const p=O(T.current,n,[]);b=!p.length||p.length!==Z(O(b,n,[])).length?T.current:b}return dr(b,n,h,q(O(j.current,n))?u:O(j.current,n),!0)}const y=q(u)?j.current:u;return Array.isArray(n)?n.reduce((p,W)=>Object.assign(Object.assign({},p),{[W]:dr(b,W,h,y)}),{}):(K.current=q(i),Me(!x(b)&&b||y))},[]);function jr(n,u){return Pe(n,u)}function Sr(n){for(const u of Array.isArray(n)?n:[n])je(o.current[u],!0)}function Ne(n,u={}){const{name:i,type:h,value:b}=n,y=Object.assign({ref:n},u),p=o.current,W=mr(n),H=Kr(E.current,i),oe=te=>de&&(!ye(n)||te===n);let D=p[i],Ae=!0,U;if(D&&(W?Array.isArray(D.options)&&Z(D.options).find(te=>b===te.ref.value&&oe(te.ref)):oe(D.ref))){p[i]=Object.assign(Object.assign({},D),u);return}h?D=W?Object.assign({options:[...Z(D&&D.options||[]),{ref:n}],ref:{type:h,name:i}},u):Object.assign({},y):D=y,p[i]=D;const re=q(O(A.current,i));(!x(j.current)||!re)&&(U=O(re?j.current:A.current,i),Ae=q(U),!Ae&&!H&&Oe(i,U)),x(u)||(C(k.current,i,!0),!Q&&F.current.isValid&&we(o,Y,D,A).then(te=>{const Lr=f.current.isValid;x(te)?C(M.current,i,!0):P(M.current,i),Lr!==x(te)&&S()})),H&&Ae||!H&&P(f.current.dirtyFields,i),h&&Pr(W&&D.options?D.options[D.options.length-1]:D,W||Qr(n),$.current)}function Dr(n,u){if(!Jr)if(G(n))Ne({name:n},u);else if(N(n)&&"name"in n)Ne(n,u);else return i=>i&&Ne(i,n)}const Fr=d.useCallback((n,u)=>async i=>{i&&i.preventDefault&&(i.preventDefault(),i.persist());let h={},b=tr($e(o,J(A.current),l,!0));F.current.isSubmitting&&S({isSubmitting:!0});try{if(v.current){const{errors:y,values:p}=await v.current(b,V.current,Y);f.current.errors=h=y,b=p}else for(const y of Object.values(o.current))if(y){const{name:p}=y.ref,W=await we(o,Y,y,A);W[p]?(C(h,p,W[p]),P(M.current,p)):O(k.current,p)&&(P(f.current.errors,p),C(M.current,p,!0))}x(h)&&Object.keys(f.current.errors).every(y=>y in o.current)?(S({errors:{},isSubmitting:!0}),await n(b,i)):(f.current.errors=Object.assign(Object.assign({},f.current.errors),h),u&&await u(f.current.errors,i),a&&Nr(o.current,f.current.errors))}finally{f.current.isSubmitting=!1,S({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:x(f.current.errors),submitCount:f.current.submitCount+1})}},[a,Y]),wr=({errors:n,isDirty:u,isSubmitted:i,touched:h,isValid:b,submitCount:y,dirtyFields:p})=>{b||(M.current={},k.current={}),g.current={},w.current=new Set,K.current=!1,S({submitCount:y?f.current.submitCount:0,isDirty:u?f.current.isDirty:!1,isSubmitted:i?f.current.isSubmitted:!1,isValid:b?f.current.isValid:!1,dirtyFields:p?f.current.dirtyFields:{},touched:h?f.current.touched:{},errors:n?f.current.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},qr=(n,u={})=>{if(de){for(const i of Object.values(o.current))if(i){const{ref:h,options:b}=i,y=mr(h)&&Array.isArray(b)?b[0].ref:h;if(ye(y))try{y.closest("form").reset();break}catch{}}}o.current={},j.current=Object.assign({},n||j.current),n&&Ve(""),Object.values(R.current).forEach(i=>Rr(i)&&i()),A.current=l?{}:J(n||j.current),wr(u)};d.useEffect(()=>{t&&F.current.isValid&&Ee(),he.current=he.current||!de?he.current:Ur(o,je)},[je,j.current]),d.useEffect(()=>()=>{he.current&&he.current.disconnect(),me.current=!0,Object.values(o.current).forEach(n=>je(n,!0))},[]),!t&&F.current.isValid&&(ae.isValid=se(M.current,k.current)&&x(f.current.errors));const nr={trigger:ge,setValue:d.useCallback(kr,[er,ge]),getValues:d.useCallback(le,[]),register:d.useCallback(Dr,[j.current]),unregister:d.useCallback(Sr,[]),formState:ne?new Proxy(ae,{get:(n,u)=>{if(u in n)return F.current[u]=!0,n[u]}}):ae},Mr=d.useMemo(()=>Object.assign({isFormDirty:Le,updateWatchedValue:Ie,shouldUnregister:l,updateFormState:S,removeFieldEventListener:Ce,watchInternal:Pe,mode:L.current,reValidateMode:{isReValidateOnBlur:Qe,isReValidateOnChange:Ue},validateResolver:t?Ee:void 0,fieldsRef:o,resetFieldArrayFunctionRef:R,useWatchFieldsRef:I,useWatchRenderFunctionsRef:B,fieldArrayDefaultValuesRef:g,validFieldsRef:M,fieldsWithValidationRef:k,fieldArrayNamesRef:E,readFormStateRef:F,formStateRef:f,defaultValuesRef:j,shallowFieldsStateRef:A,fieldArrayValuesRef:T},nr),[j.current,Ie,l,Ce,Pe]);return Object.assign({watch:jr,control:Mr,handleSubmit:Fr,reset:d.useCallback(qr,[]),clearErrors:d.useCallback(Er,[]),setError:d.useCallback(Cr,[]),errors:ae.errors},nr)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Xr(e,r){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)r.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(t[s[c]]=e[s[c]]);return t}const Ke=d.createContext(null);Ke.displayName="RHFContext";const it=()=>d.useContext(Ke),ut=e=>{var{children:r}=e,t=Xr(e,["children"]);return d.createElement(Ke.Provider,{value:Object.assign({},t)},r)};class ct{static errorMessage(r,t,s,c,a=null){var m;if(a)return a;if(!c&&!s[r])return null;const l=t[r];return((m=l==null?void 0:l[0])==null?void 0:m.message)||(l==null?void 0:l.message)||l||null}}const Zr=(e,r)=>Array.isArray(e.inner)&&e.inner.length?e.inner.reduce((t,{path:s,message:c,type:a})=>{const l=t[s]&&t[s].types||{},m=s||a;return Object.assign(Object.assign({},t),m?{[m]:Object.assign(Object.assign({},t[m]||{message:c,type:a}),r?{types:Object.assign(Object.assign({},l),{[a]:l[a]?[...[].concat(l[a]),c]:c})}:{})}:{})},{}):{[e.path]:{message:e.message,type:e.type}},et=(e,r={abortEarly:!1})=>async(t,s,c=!1)=>{try{return r.context,{values:await e.validate(t,Object.assign(Object.assign({},r),{context:s})),errors:{}}}catch(a){const l=Zr(a,c);return{values:{},errors:Me(l)}}},rt=Object.freeze(Object.defineProperty({__proto__:null,yupResolver:et},Symbol.toStringTag,{value:"Module"})),tt=Tr(rt);var at=tt;const lt={generic(e){return Se().label(e)},string(e,r){r=r||{};let t=De().transform((s,c)=>c===""?null:s).nullable(!0).trim().label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},boolean(e,r){return Ir().default(!1).label(e)},relationToOne(e,r){r=r||{};let t=Se().nullable(!0).label(e).transform((s,c)=>c?c.id:null);return r.required&&(t=t.required()),t},stringArray(e,r){r=r||{};let t=Fe().compact().ensure().of(De().transform((s,c)=>c===""?null:s).trim()).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},relationToMany(e,r){r=r||{};let t=Fe().nullable(!0).label(e).transform((s,c)=>!c||!c.length?[]:c.map(a=>a.id));return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},integer(e,r){r=r||{};let t=sr().transform((s,c)=>c===""?null:s).integer().nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},images(e,r){r=r||{};let t=Fe().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},files(e,r){r=r||{};let t=Fe().compact().ensure().nullable(!0).label(e);return(r.required||r.min)&&(t=t.required()),r.min||r.min===0?t=t.min(r.min):r.required&&(t=t.min(1)),r.max&&(t=t.max(r.max)),t},enumerator(e,r){r=r||{};let t=De().transform((s,c)=>c===""?null:s).label(e).nullable(!0).oneOf([null,...r.options||[]]);return r.required&&(t=t.required(ir("validation.string.selected"))),t},email(e,r){r=r||{};let t=De().transform((s,c)=>c===""?null:s).nullable(!0).trim().label(e).email();return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),r.matches&&(t=t.matches(r.matches)),t},decimal(e,r){r=r||{};let t=sr().transform((s,c)=>c===""?null:s).nullable(!0).label(e);return r.required&&(t=t.required()),(r.min||r.min===0)&&(t=t.min(r.min)),r.max&&(t=t.max(r.max)),t},datetime(e,r){r=r||{};let t=Se().nullable(!0).label(e).transform((s,c)=>s?Be(c,"YYYY-MM-DD HH:mm").toISOString():null);return r.required&&(t=t.required()),t},date(e,r){r=r||{};let t=Se().nullable(!0).label(e).test("is-date",ir("validation.mixed.default"),s=>s?Be(s,"YYYY-MM-DD").isValid():!0).transform(s=>s?Be(s).format("YYYY-MM-DD"):null);return r.required&&(t=t.required()),t}};export{ct as F,st as a,at as b,ut as c,it as u,lt as y};
