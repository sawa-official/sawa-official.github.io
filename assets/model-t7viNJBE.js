import{an as n,bd as y,bc as d,bE as u,bF as m,q as h,O as P,c as b,bo as g,aP as v,bG as o,bH as k}from"./index-PhSbxy0u.js";async function C(t,l={}){var c,e,a;const r=h();r==null||r.exposed;const s=n();t===y.h5_pay_channel_click&&d(t,{type:u(s.currentPayType),type2:m(s.currentPayType),good_id:((c=s.currentPayItem)==null?void 0:c.payItemDisplayMethods[0].methods[0].recharge_id)||0,amount:((e=s.currentPayItem)==null?void 0:e.amount)||0,number:((a=s.currentPayItem)==null?void 0:a.coin)||0})}const T={"-6":{ksa:["card","sa"],are:["card","eg","wallet"]},6:{ksa:["card","sa"],are:["card","eg","wallet"]},8:{ksa:["onecard","zain"],are:["voda","eg","onecard"]},9:{ksa:["card"],are:["card"]},10:{ksa:["card"],are:["card"]},13:{ksa:["amex","diners","discover","visa","master"],are:["card2","master","visa"]}},_=t=>{switch(console.log("item",t),t){case"Checkout":return["amex","diners","discover","visa","master"];case"Payermax":return["card","sa"];case"Apple Pay":return["apple"];case"Adyen":return["visa","master"]}},p="pay-channel-item",S=P(p,t=>({exposed:{availableChannelList:b(()=>{const{currentPayItem:e}=n();return e?e.payItemDisplayMethods.filter(i=>i.displayName===g.Apple?v():!0):[]}),selectChannel:e=>{const a=n();a.setCurrentDisplayType(e.displayName),a.setCurrentDisplayMethod(o.显示支付渠道),k(),console.log(p,e),C(y.h5_pay_channel_click)},isChannelActive:e=>{const a=n();return e.displayName===a.currentDisplayType&&a.currentDisplayMethod===o.显示支付渠道}}}));export{_ as g,T as p,S as s};
