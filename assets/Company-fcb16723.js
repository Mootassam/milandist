import{u as r,i as c,r as l,j as s,C as p}from"./index-f78e93e1.js";import{S as d}from"./SubHeader-ccc101aa.js";import{L as m}from"./LoadingModal-7df931ca.js";import{u}from"./useDispatch-c45d0dc9.js";function j(){var o,a;const e=u(),t=r(c.selectRows),i=r(c.selectLoading),n=()=>{e(p.doFetch())};return l.useEffect(()=>{n()},[e]),s.jsxs("div",{children:[s.jsx(d,{title:"Company",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[i&&s.jsx(m,{}),t&&((o=t[0])==null?void 0:o.companydetails)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(a=t[0])==null?void 0:a.companydetails},style:{color:"white"}})]})]})}export{j as default};