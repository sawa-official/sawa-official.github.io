import{q as k,s as I,w as $,f as C,ar as T,ap as y,e as f,h as p,i as v,M as L,j as s,u as o,t as n,d as c,aC as M,_ as x,H as P,c as B,N,L as g}from"./index-CdbLF02P.js";import{u as h,L as w}from"./model-tdRztxNe.js";import{L as R}from"./index-NE_m3ISv.js";import"./AboutSA2-CfHSrWqy.js";function V(a,i={}){const e=k(),l=(e==null?void 0:e.proxy)||{};function r(_,u={}){I.report(_,{...u,...i})}a==="test_report_ow"&&r(a,{a:l.a})}function b(){$("feedBackSuccess",k());const a={};return C(()=>{console.log("userInfo:",h.value)}),{expose:a,userInfo:h,report:V,close:D,toRechargePage:E}}function D(){console.log("close"),T({name:"pay"})}function E(){y.replace({name:"pay"})}const S={class:"bg-c"},j={class:"container"},q={class:"t1",dir:"auto"},F={class:"t2",dir:"auto"},H={class:"user-info"},z=["src"],A={class:"nickname"},G=f({__name:"index_pc",props:{compId:{}},setup(a,{expose:i}){const{close:e,expose:l,userInfo:r,toRechargePage:_}=b();i(l);function u(){M(R,{})}return(d,t)=>(p(),v("div",S,[L(w,{onToLogin:u}),s("div",j,[s("div",{class:"btn-back",onClick:t[0]||(t[0]=(...m)=>o(e)&&o(e)(...m))},n(o(c._T)("返回首页"))+" >",1),t[2]||(t[2]=s("div",{class:"icon"},null,-1)),s("div",q,n(o(c._T)("问题反馈提交成功")),1),s("div",F,n(o(c._T)("问题的回复将会发送至该账号")),1),s("div",H,[s("img",{src:o(r).icon,alt:"",class:"user-icon"},null,8,z),s("div",A,n(o(r).nickname),1)]),s("div",{class:"btn",onClick:t[1]||(t[1]=(...m)=>o(_)&&o(_)(...m))},n(o(c._T)("返回充值页")),1)])]))}}),J=x(G,[["__scopeId","data-v-38a95f02"]]),K={class:"phoneNav"},O={class:"name"},Q={class:"container"},U={class:"t1",dir:"auto"},W={class:"t2",dir:"auto"},X={class:"user-info"},Y=["src"],Z={class:"nickname"},ss=f({__name:"index_mobile",props:{compId:{}},setup(a,{expose:i}){const{close:e,expose:l,userInfo:r,toRechargePage:_}=b();return i(l),(u,d)=>(p(),v(P,null,[s("div",K,[s("div",O,n(o(c._T)("充值问题反馈")),1),s("div",{class:"close",onClick:d[0]||(d[0]=(...t)=>o(e)&&o(e)(...t))})]),s("div",Q,[d[2]||(d[2]=s("div",{class:"icon"},null,-1)),s("div",U,n(o(c._T)("问题反馈提交成功")),1),s("div",W,n(o(c._T)("问题的回复将会发送至该账号")),1),s("div",X,[s("img",{src:o(r).icon,alt:"",class:"user-icon"},null,8,Y),s("div",Z,n(o(r).nickname),1)]),s("div",{class:"btn",onClick:d[1]||(d[1]=(...t)=>o(_)&&o(_)(...t))},n(o(c._T)("返回充值页")),1)])],64))}}),os=x(ss,[["__scopeId","data-v-ab1ce282"]]),es={style:{height:"100%"}},is=f({__name:"index",setup(a){const i=B(()=>!N());return(e,l)=>(p(),v("div",es,[i.value?(p(),g(os,{key:0,compId:"fb_suc_mobile"})):(p(),g(J,{key:1,compId:"fb_suc_pc"}))]))}});export{is as default};