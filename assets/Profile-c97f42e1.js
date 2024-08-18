import{g as Z,s as I,A as G,t as K,v as V,P as m,j as e,w as B,r as N,x as Y,E as O,y as H,u as E,f as A,h as R,k as J,l as Q,S as X,L as k,m as ee}from"./index-50a6ab0b.js";/* empty css               */import{v as se}from"./v4-4a60fe23.js";import{s as $}from"./styled-components.browser.esm-57047ffc.js";import{u as ae,F as te,y as oe,a as ie,b as re,c as le}from"./yupFormSchemas-76fae83e.js";import{u as ne}from"./useDispatch-6013e209.js";var D={exports:{}};(function(t,o){(function(s){var n=/^(b|B)$/,d={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},h={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function l(u){var x,f,b,y,j,g,w,i,p,v,_,F,P,S,z,c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},a=[],M=0,r=void 0,C=void 0;if(isNaN(u))throw new TypeError("Invalid number");return f=c.bits===!0,_=c.unix===!0,x=c.base||2,v=c.round!==void 0?c.round:_?1:2,g=c.locale!==void 0?c.locale:"",w=c.localeOptions||{},F=c.separator!==void 0?c.separator:"",P=c.spacer!==void 0?c.spacer:_?"":" ",z=c.symbols||{},S=x===2&&c.standard||"jedec",p=c.output||"string",y=c.fullform===!0,j=c.fullforms instanceof Array?c.fullforms:[],r=c.exponent!==void 0?c.exponent:-1,b=2<x?1e3:1024,(i=(C=Number(u))<0)&&(C=-C),(r===-1||isNaN(r))&&(r=Math.floor(Math.log(C)/Math.log(b)))<0&&(r=0),8<r&&(r=8),p==="exponent"?r:(C===0?(a[0]=0,a[1]=_?"":d[S][f?"bits":"bytes"][r]):(M=C/(x===2?Math.pow(2,10*r):Math.pow(1e3,r)),f&&b<=(M*=8)&&r<8&&(M/=b,r++),a[0]=Number(M.toFixed(0<r?v:0)),a[0]===b&&r<8&&c.exponent===void 0&&(a[0]=1,r++),a[1]=x===10&&r===1?f?"kb":"kB":d[S][f?"bits":"bytes"][r],_&&(a[1]=S==="jedec"?a[1].charAt(0):0<r?a[1].replace(/B$/,""):a[1],n.test(a[1])&&(a[0]=Math.floor(a[0]),a[1]=""))),i&&(a[0]=-a[0]),a[1]=z[a[1]]||a[1],g===!0?a[0]=a[0].toLocaleString():0<g.length?a[0]=a[0].toLocaleString(g,w):0<F.length&&(a[0]=a[0].toString().replace(".",F)),p==="array"?a:(y&&(a[1]=j[r]?j[r]:h[S][r]+(f?"bit":"byte")+(a[0]===1?"":"s")),p==="object"?{value:a[0],symbol:a[1],exponent:r}:a.join(P)))}l.partial=function(u){return function(x){return l(x,u)}},t.exports=l})()})(D);var ce=D.exports;const de=Z(ce);class L{static validate(o,s){if(!s)return;if(s.image&&!o.type.startsWith("image"))throw new Error(I("fileUploader.image"));if(s.storage.maxSizeInBytes&&o.size>s.storage.maxSizeInBytes)throw new Error(I("fileUploader.size",de(s.storage.maxSizeInBytes)));const n=q(o.name);if(s.formats&&!s.formats.includes(n))throw new Error(I("fileUploader.formats",s.formats.join(", ")))}static async upload(o,s){try{this.validate(o,s)}catch(f){return Promise.reject(f)}const n=q(o.name),d=se(),h=`${d}.${n}`,{uploadCredentials:l,downloadUrl:u,privateUrl:x}=await this.fetchFileCredentials(h,s);return await this.uploadToServer(o,l),{id:d,name:o.name,sizeInBytes:o.size,publicUrl:l&&l.publicUrl?l.publicUrl:null,privateUrl:x,downloadUrl:u,new:!0}}static async fetchFileCredentials(o,s){const n=G.get(),{data:d}=await K.get(`/tenant/${n}/file/credentials`,{params:{filename:o,storageId:s.storage.id}});return d}static async uploadToServer(o,s){try{const n=s.url,d=new FormData;for(const[h,l]of Object.entries(s.fields||{}))d.append(h,l);return d.append("file",o),V.post(n,d,{headers:{"Content-Type":"multipart/form-data"}})}catch(n){throw console.error(n),n}}}function q(t){if(!t)return null;const s=/(?:\.([^.]+))?$/.exec(t);return s?s[1]:null}const me=$.div`
  .img-card:hover .img-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .img-buttons {
    display: none;
    position: relative;
    bottom: 2.1rem;
    width: calc(100px);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .img-buttons * {
    color: white;
  }
`,ue=$.div`
  /* The Modal (background) */
  .modal {
    display: block;
    position: fixed; /* Stay in place */
    z-index: 9999; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(
      0,
      0,
      0,
      0.9
    ); /* Black w/ opacity */
  }

  /* Modal Content (Image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }

  /* Caption of Modal Image (Image Text) - Same Width as the Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  /* Add Animation - Zoom in the Modal */
  .modal-content,
  #caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px) {
    .modal-content {
      width: 100%;
    }
  }
`;function U(t){return e.jsx(ue,{children:e.jsxs("div",{className:"modal",children:[e.jsx("span",{className:"close",onClick:t.onClose,children:"×"}),e.jsx("img",{className:"modal-content",src:t.src,alt:t.alt})]})})}U.propTypes={src:m.string.isRequired,alt:m.string.isRequired,onClose:m.func.isRequired};const he=t=>t.loading?e.jsx("span",{className:"spinner-border spinner-border-sm"}):t.iconClass?e.jsx("i",{className:t.iconClass}):null;class xe{static success(o){B.options.toastClass="toastr",B.options.positionClass="toast-bottom-left",B.success(o)}static error(o){B.options.toastClass="toastr",B.options.positionClass="toast-bottom-left",B.error(o)}}function W(t){const[o,s]=N.useState(!1),[n,d]=N.useState(null),h=N.useRef(),l=()=>{const{value:i}=t;return i?Array.isArray(i)?i:[i]:[]},u=()=>l().map(i=>({uid:i.id||void 0,name:i.name,status:"done",url:i.downloadUrl})),x=i=>{t.onChange(l().filter(p=>p.id!==i))},f=async i=>{try{const p=i.target.files;if(!p||!p.length)return;let v=p[0];L.validate(v,{storage:t.storage,image:!0}),s(!0),v=await L.upload(v,{storage:t.storage,image:!0});const _={avatars:v};h.current.value="",await Y.updateProfile(_),xe.success(I("auth.profile.success")),s(!1),t.onChange([...l(),v])}catch(p){h.current.value="",console.error(p),s(!1),O.showMessage(p)}},b=i=>{d({src:i.downloadUrl,alt:i.name})},y=()=>{d(null)},{max:j,readonly:g}=t,w=e.jsxs("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[e.jsx(he,{loading:o,iconClass:"fas fa-plus"}),e.jsx("div",{className:"header__image"}),e.jsx("input",{style:{display:"none"},disabled:o||g,accept:"image/*",type:"file",onChange:f,ref:h})]});return e.jsxs(me,{children:[g||j&&u().length>=j?null:w,l()&&l().length?e.jsx("div",{className:"d-flex flex-row flex-wrap",children:l().map(i=>e.jsxs("div",{className:"mr-2 mb-2 img-card",style:{height:"100px"},children:[e.jsx("img",{alt:i.name,src:i.downloadUrl,className:"header__profile__image",style:{width:"100px",height:"100px",objectFit:"cover"}}),e.jsxs("div",{className:"img-buttons rounded-bottom ",children:[e.jsx("button",{type:"button",className:"btn btn-link",onClick:()=>b(i),children:e.jsx("i",{className:"fas fa-search"})}),!g&&e.jsx("button",{type:"button",className:"btn btn-link ml-2",onClick:()=>x(i.id),children:e.jsx("i",{className:"fas fa-times"})})]})]},i.id))}):null,n&&e.jsx(U,{src:n.src,alt:n.alt,onClose:()=>y()})]})}W.propTypes={readonly:m.bool,max:m.number,storage:m.object,value:m.any,onChange:m.func};function T(t){const{label:o,name:s,hint:n,storage:d,max:h,required:l,externalErrorMessage:u}=t,{errors:x,formState:{touched:f,isSubmitted:b},setValue:y,watch:j,register:g}=ae();N.useEffect(()=>{g({name:s})},[g,s]);const w=te.errorMessage(s,x,f,b,u);return e.jsxs("div",{className:"form-group",children:[!!o&&e.jsx("label",{className:`col-form-label ${l?"required":null}`,htmlFor:s,children:o}),e.jsx("br",{}),e.jsx(W,{storage:d,value:j(s),onChange:i=>{y(s,i,{shouldValidate:!0,shouldDirty:!0}),t.onChange&&t.onChange(i)},max:h}),e.jsx("div",{className:"invalid-feedback",children:w}),!!n&&e.jsx("small",{className:"form-text text-muted",children:n})]})}T.defaultProps={max:void 0,required:!1};T.propTypes={storage:m.object.isRequired,max:m.number,required:m.bool,name:m.string.isRequired,label:m.string,hint:m.string,formItemProps:m.object};const pe=H().shape({avatars:oe.images(I("user.fields.avatars"),{max:1})});function Ne(){var l;const t=ne();E(A.selectTotal),E(A.selectTotalPerday),N.useEffect(()=>{const u={status:"completed"};t(R.doCountDay()),t(R.doFetch(u,u))},[t]);const o=()=>{t(ee.doSignout())};J();const s=E(Q.selectCurrentUser),n=N.useRef(null),[d]=N.useState(()=>({avatars:(s||{}).avatars||[]})),h=ie({resolver:re.yupResolver(pe),mode:"all",defaultValues:d});return e.jsxs("div",{className:"app__profile",children:[e.jsxs("div",{className:"profiles__header",children:[e.jsx("div",{className:"header__background"}),e.jsxs("div",{className:"carde__profile",children:[e.jsx("div",{className:"cadre__top",children:e.jsxs("div",{className:"cadre__left",children:[e.jsx(le,{...h,children:e.jsx("form",{children:e.jsx(T,{name:"avatars",storage:X.values.userAvatarsProfiles,max:1})})}),e.jsxs("div",{className:"left__details",children:[e.jsxs("div",{className:"user__title",children:[s==null?void 0:s.fullName,e.jsx("img",{src:"/images/check.png",alt:"",style:{width:30}})]}),e.jsxs("div",{className:"my__code",children:["UID : ",s==null?void 0:s.invitationcode]}),e.jsx("div",{className:"small__invitation",children:e.jsxs("div",{className:"small__inviation__left",children:[e.jsx("span",{className:"promotion__code",children:"Promotion code:"}),e.jsxs("span",{ref:n,children:[" ",s==null?void 0:s.refcode]})]})})]})]})}),e.jsx("div",{className:"cadre__bottom",children:e.jsxs("div",{className:"firt__cadre",children:[e.jsxs("span",{className:"title__cadre",children:[" ","$",((l=s==null?void 0:s.balance)==null?void 0:l.toFixed(2))||0]}),e.jsx("span",{className:"promotion__code",children:"Wallet Amount"})]})}),e.jsxs("div",{className:"assesment__",children:[e.jsx("div",{className:"text__assesment",children:"Credit assesment:"}),e.jsx("div",{className:"credit__bar",children:e.jsxs("div",{className:"circle__bar",style:{left:`calc(${s!=null&&s.score?s.score:100}% - 30px)`},children:[s!=null&&s.score?s.score:100,"%"]})})]})]})]}),e.jsxs("div",{className:"profile__content",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",className:"titre",children:"My Details"}),e.jsx("div",{className:"detail__section",children:e.jsx(k,{to:"/myprofile",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-user profile__icon"}),e.jsx("span",{children:"Profile"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"",className:"titre",children:"Other"}),e.jsxs("div",{className:"detail__section",children:[e.jsx(k,{to:"/online",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("img",{src:"/icons/headset.svg",alt:"",style:{width:20,color:"white"}})," ",e.jsx("span",{children:"Customer Support"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(k,{to:"/order",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-clock-rotate-left profile__icon"}),e.jsx("span",{children:"Tasks History"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(k,{to:"/security",className:"remove__ligne",children:e.jsxs("div",{className:"line__section border__",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-lock profile__icon"}),e.jsx("span",{children:"Security"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})}),e.jsx(k,{to:"/transacation",className:"remove__ligne",children:e.jsxs("div",{className:"line__section ",children:[e.jsxs("div",{className:"titre__section",children:[e.jsx("i",{className:"fa-solid fa-star"}),e.jsx("span",{children:"Rate US"})]}),e.jsx("div",{children:e.jsx("i",{className:"fa fa-arrow-right "})})]})})]})]})]}),e.jsx("div",{className:"logout__button",onClick:()=>o(),children:"Logout"})]})}export{Ne as default};
