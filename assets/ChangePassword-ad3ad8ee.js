import{y as c,s as e,B as m,r as p,u,l as h,j as s,m as w}from"./index-f78e93e1.js";import{S as f}from"./SubHeader-ccc101aa.js";import{y as r,a as x,b as j,c as _}from"./yupFormSchemas-97cbbebe.js";import{I as o}from"./InputFormItem-7ed7295e.js";import{B as P}from"./ButtonIcon-19f132fc.js";import{u as v}from"./useDispatch-c45d0dc9.js";const N=c().shape({oldPassword:r.string(e("user.fields.oldPassword"),{required:!0}),newPassword:r.string(e("user.fields.newPassword"),{required:!0}),newPasswordConfirmation:r.string(e("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([m("newPassword"),null],e("auth.passwordChange.mustMatch"))});function F(){const d=v(),[t]=p.useState(()=>({oldPassword:"",newPassword:"",newPasswordConfirmation:""})),a=x({resolver:j.yupResolver(N),mode:"all",defaultValues:t}),l=u(h.selectLoadingPasswordChange),n=i=>{d(w.doChangePassword(i.oldPassword,i.newPassword))};return s.jsxs("div",{children:[s.jsx(f,{title:"Change password",path:"/profile"}),s.jsx("div",{className:"app__wallet",children:s.jsxs("div",{className:"wallet__",children:[s.jsx("h3",{className:"hall",children:"Change Password"}),s.jsx(_,{...a,children:s.jsx("form",{onSubmit:a.handleSubmit(n),children:s.jsxs("div",{className:"wallet__form",children:[s.jsxs("div",{className:"form__",children:[s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"Old Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"oldPassword",autoComplete:"old-password",className:"input__"})})]}),s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"New Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"newPassword",autoComplete:"new-password",className:"input__"})})]}),s.jsxs("div",{className:"form__group",children:[s.jsxs("div",{className:"label__form",children:[s.jsx("span",{style:{color:"red"},children:"*"}),s.jsx("span",{style:{fontSize:"13px"},children:"Confirm Password"})]}),s.jsx("div",{className:"input__div",children:s.jsx(o,{type:"password",name:"newPasswordConfirmation",autoComplete:"new-password",className:"input__"})})]})]}),s.jsxs("button",{className:"confirm",disabled:l,type:"button",onClick:a.handleSubmit(n),children:[" ",s.jsx(P,{loading:l,iconClass:"far fa-save"})," "," Submit"]}),s.jsxs("span",{style:{fontSize:13,color:"white"},children:[s.jsx("b",{children:"Note:"}),"   Please fill out this information carefully"]})]})})})]})})]})}export{F as default};
