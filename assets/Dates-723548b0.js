import{G as r}from"./index-aedadce1.js";import{v as a}from"./v4-4a60fe23.js";class n{static NewsDate(t){return r(t).format("DD-MM-YYYY")}static newTime(t){return r(t).format("HH:MM")}static Monthago(t){return r(t).fromNow()}static currentDate(t){return r(t).format("DD-MM-YYYY HH:mm")}static current(){return r().format("DD-MM-YYYY HH:mm")}static Date(t){return r(t).format("DD-MM-YYYY HH:mm")}static orderNow(){return r().format("yyyymmDD")}static Number(){const t=r().format("yyyyMMDD"),e=a().replace(/-/g,"").substring(0,8);return`${t}${e}`}}export{n as D};