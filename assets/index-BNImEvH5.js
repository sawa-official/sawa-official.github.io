import{r as d,O as P,c as m,an as s,ao as e,d as t,f as _,am as y,bK as T,aH as i,s as c,bL as h,_ as w,h as C,i as I}from"./index-PhSbxy0u.js";const u=d(!1),l=d(!1);function U(){let o=i().mockDetePageVid,r=c.getViewUUID();if(o===r){u.value=!0;return}i().updateMockDetePageVid(),setTimeout(()=>{console.log("getViewUUIDgetViewUUID",c.getViewUUID()),l.value=!0,setTimeout(()=>{l.value=!1,u.value=!0},2e3)},0)}const k=P("input",o=>{const g={title:m(()=>{const{currentPayChildPage:a}=s();return a===e.ENTER?t._T("sawa账号充值"):a===e.LIST?t._T("sawa账号充值"):a===e.SWITCH?t._T("sawa账号充值"):t._T("sawa账号充值")})},p=()=>{const{pay2Uid:a}=s();if(a){const n=t.getArgsFromUrl("PayChildPage"),f=n?Number(n):e.LIST;s().setCurrentPayChildPage(f)}else t.getArgsFromUrl("pageinfo")&&(h.initPayPage(),setTimeout(()=>{s().setCurrentPayChildPage(e.LIST)},200)),setTimeout(()=>{s().setCurrentPayChildPage(e.ENTER)},100)};return _(async()=>{U(),p(),y.value=!1,await T.init()}),{exposed:g}}),S={},D={class:"loading-c"};function v(o,r){return C(),I("div",D)}const E=w(S,[["render",v],["__scopeId","data-v-20f2d848"]]);export{E as L,l as a,u as i,k as s};
