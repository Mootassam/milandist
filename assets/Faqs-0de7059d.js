import{u as c,i,r as l,j as s,C as d}from"./index-50a6ab0b.js";import{S as p}from"./SubHeader-00b040bc.js";import{L as m}from"./LoadingModal-8aee13d1.js";import{u}from"./useDispatch-6013e209.js";function y(){var a,r;const t=u(),e=c(i.selectRows),o=c(i.selectLoading),n=()=>{t(d.doFetch())};return l.useEffect(()=>{n()},[t]),s.jsxs("div",{children:[s.jsx(p,{title:"Frequently asked questions",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[o&&s.jsx(m,{}),!o&&e&&((a=e[0])==null?void 0:a.faqs)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(r=e[0])==null?void 0:r.faqs},style:{color:"white"}})]})]})}export{y as default};