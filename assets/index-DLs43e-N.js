import{s as ps,R as W,n as _s,_ as vs,C as rs,a as ms,N as fs,P as ys}from"./pay-step.pc-CTnxgs4_.js";import{O as $s,r as L,P as es,d as n,Q as xs,e as g,h as t,i as l,j as e,t as p,u as s,R as S,S as D,U as M,V as j,n as T,L as k,W as z,k as r,_ as w,N as Q,X as ks,H as O,I as ds,Y as hs,Z as G,$ as Cs,M as C,a0 as bs,a1 as cs,a2 as B,a3 as A,l as X,a4 as Ts,a5 as gs,a6 as Is,a7 as ws,a8 as N,a9 as ts,aa as ns,ab as Y,ac as os,ad as Rs,ae as Ps,af as Vs,ag as H,ah as Ss,ai as Ns,aj as As,m as Bs,ak as K,al as us,am as Ds,an as F,ao as E}from"./index-PhSbxy0u.js";import{A as Z}from"./AboutSA2-BqUWj29Q.js";import{C as as,P as Ms,R as Fs}from"./index-DiKxusEK.js";import{L as U,s as Es}from"./index-BNImEvH5.js";import"./index-rNo6GklN.js";import"./model-t7viNJBE.js";const is="pay_enter",q=$s(is,b=>{function m(f){const o=f.target.value;console.log(is,"iii",o),c.value=o}function _(f){}function i(f){}function v(f){}const c=L(""),x=L(!1),u=L({selector:"#tipIcon",x:-70,y:-10}),$=()=>{setTimeout(()=>{x.value=!0},200)};async function d(){const f=c.value;if(!(f.length<5)){if(!/^[1-9]\d*$/.test(f)){es(n._T("用户ID由纯数字组成，请检查输入是否正确"));return}if(f.length>11){es(n._T("用户ID位数不符，请检查输入是否正确"));return}xs(Number(f))}}return{exposed:{onInput:m,onBlur:_,onFocus:i,onPaste:v,inputId:c,showQ:x,displayShowQ:$,propQ:u,search:d}}}),Ls={class:"enter-c"},Hs={class:"input-wrap"},Qs={class:"input-tip1",dir:"auto"},Os=["placeholder"],Us={class:"input-tip2-text",dir:"auto"},Ws=g({__name:"index.pc",setup(b,{expose:m}){const{exposed:_,onBlur:i,onFocus:v,onInput:c,onPaste:x,inputId:u,showQ:$,propQ:d,search:h}=q();return m(_),(f,y)=>(t(),l("div",Ls,[y[9]||(y[9]=e("div",{class:"enter-title"},null,-1)),e("div",Hs,[e("div",Qs,p(s(n._T)("请输入你要充值的用户账号ID")),1),S(e("input",{type:"tel",id:"recharge-search-input",class:"input-elem",dir:"rtl",placeholder:s(n._T)("输入ID"),"onUpdate:modelValue":y[0]||(y[0]=o=>M(u)?u.value=o:null),onChange:y[1]||(y[1]=j((...o)=>s(c)&&s(c)(...o),["stop"])),onBlur:y[2]||(y[2]=(...o)=>s(i)&&s(i)(...o)),onInput:y[3]||(y[3]=(...o)=>s(c)&&s(c)(...o)),onPaste:y[4]||(y[4]=(...o)=>s(x)&&s(x)(...o)),onFocus:y[5]||(y[5]=(...o)=>s(v)&&s(v)(...o))},null,40,Os),[[D,s(u)]]),e("div",{class:"input-tip2",onClick:y[6]||(y[6]=o=>$.value=!0)},[e("div",Us,p(s(n._T)("什么是账号ID")),1),y[8]||(y[8]=e("div",{class:"input-tip2-icon",id:"tipIcon"},null,-1))]),e("div",{class:T(["recharge-btn",{"-active":s(u).length>=5}]),dir:"auto",onClick:y[7]||(y[7]=o=>s(h)())},p(s(n._T)("我要充值")),3)]),s($)?(t(),k(Z,z({key:0},s(d),{close:()=>$.value=!1}),null,16,["close"])):r("",!0)]))}}),Ys=w(Ws,[["__scopeId","data-v-bb767faa"]]),Ks={class:"enter-c"},js={class:"input-bg"},zs={class:"input-wrap"},Gs={class:"input-tip1",dir:"auto"},Xs={class:"search-c"},Zs={class:"search-wrap"},qs=["placeholder"],Js={class:"input-tip2-text",dir:"auto"},se=g({__name:"index.mobile",setup(b,{expose:m}){const{exposed:_,onBlur:i,onFocus:v,onInput:c,onPaste:x,displayShowQ:u,inputId:$,showQ:d,propQ:h,search:f}=q();return m(_),(y,o)=>(t(),l("div",Ks,[e("div",js,[e("div",zs,[e("div",Gs,p(s(n._T)("输入充值账号，即可享受充值优惠")),1),e("div",Xs,[e("div",Zs,[o[8]||(o[8]=e("div",{class:"people-icon"},null,-1)),S(e("input",{type:"number",id:"recharge-search-input",class:"input-elem",dir:"rtl",placeholder:s(n._T)("输入ID"),"onUpdate:modelValue":o[0]||(o[0]=a=>M($)?$.value=a:null),onChange:o[1]||(o[1]=j((...a)=>s(c)&&s(c)(...a),["stop"])),onBlur:o[2]||(o[2]=(...a)=>s(i)&&s(i)(...a)),onInput:o[3]||(o[3]=(...a)=>s(c)&&s(c)(...a)),onPaste:o[4]||(o[4]=(...a)=>s(x)&&s(x)(...a)),onFocus:o[5]||(o[5]=(...a)=>s(v)&&s(v)(...a))},null,40,qs),[[D,s($)]])]),o[10]||(o[10]=e("div",{class:"divide-line"},null,-1)),e("div",{class:"input-tip2",onClick:o[6]||(o[6]=(...a)=>s(u)&&s(u)(...a))},[e("div",Js,p(s(n._T)("什么是账号ID")),1),o[9]||(o[9]=e("div",{class:"input-tip2-icon",id:"tipIcon"},null,-1))])]),e("div",{class:T(["recharge-btn",{"-active":s($).length>=5}]),dir:"auto",onClick:o[7]||(o[7]=(...a)=>s(f)&&s(f)(...a))},p(s(n._T)("我要充值")),3),s(d)?(t(),k(Z,z({key:0},s(h),{close:()=>d.value=!1}),null,16,["close"])):r("",!0)])])]))}}),ee=w(se,[["__scopeId","data-v-2a7fe9b9"]]),te={class:"nav-cc"},ne=g({__name:"index",setup(b,{expose:m}){const{exposed:_}=q();return m(_),(i,v)=>(t(),l("div",te,[s(Q)()?(t(),k(Ys,{key:0})):(t(),k(ee,{key:1}))]))}}),oe=w(ne,[["__scopeId","data-v-a5dedac2"]]),ae={class:"searchPage"},ie={class:"stitle"},le={dir:"auto"},re={class:"sinput"},de=["placeholder"],ce={class:"soutput"},ue={key:0,class:"sinfo",dir:"auto"},pe={class:"sinfo",dir:"auto"},_e=g({__name:"search-page.mobile",setup(b){const{list:m,inputId:_,handlerConfirm:i,showQ:v,propQ:c,updateVisualQ:x,loginUser:u}=ks();return($,d)=>(t(),l("div",ae,[e("div",ie,[e("div",{class:"stitle__icon",id:"AccountID",onClick:d[0]||(d[0]=h=>s(x)(!0))}),e("span",le,p(s(n._T)("什么是账号ID")),1)]),e("div",re,[S(e("input",{class:"sinput__in",style:{"user-select":"auto"},dir:"auto",type:"text",pattern:"[0-9]*",placeholder:s(n._T)("输入ID"),"onUpdate:modelValue":d[1]||(d[1]=h=>M(_)?_.value=h:null)},null,8,de),[[D,s(_)]]),e("div",{class:T(["sinput__btn",{"-on":s(_).length>=5}]),dir:"auto",onClick:d[2]||(d[2]=(...h)=>s(i)&&s(i)(...h))},p(s(n._T)("确定")),3)]),e("div",ce,[s(u)?(t(),l("div",ue,p(s(n._T)("选择当前登录的账号")),1)):r("",!0),s(u)?(t(),k(as,{key:1,user:s(u)},null,8,["user"])):r("",!0),e("div",pe,p(s(n._T)("选择最近输入过的账号")),1),(t(!0),l(O,null,ds(s(m),(h,f)=>(t(),k(as,{key:f,user:h},null,8,["user"]))),128))]),s(v)?(t(),k(Z,z({key:0},s(c),{close:()=>s(x)(!1)}),null,16,["close"])):r("",!0)]))}}),ve=w(_e,[["__scopeId","data-v-fec1e963"]]),me={class:"nav-cc"},fe=g({__name:"index",setup(b){return(m,_)=>(t(),l("div",me,[s(Q)()?(t(),k(Ms,{key:0})):(t(),k(ve,{key:1}))]))}}),ye=w(fe,[["__scopeId","data-v-f7de971d"]]),$e={key:0,class:"mask"},xe={class:"card"},ke={class:"message"},he={class:"message2"},Ce={key:0,class:"isRemember-card"},be={class:"text"},Te=g({__name:"index",setup(b,{expose:m}){const{exposed:_,detailConf:i,isShowRememberCard:v,select:c,onSelect:x,resultType:u}=hs();return m(_),($,d)=>{const h=G("mask");return s(u)!==s(Cs).不显示?S((t(),l("div",$e,[e("div",xe,[e("div",{class:T(["img",s(u)==="success"?"success":"fail"])},null,2),e("div",ke,p(s(u)==="success"?s(n._T)("充值成功"):s(n._T)("充值失败")),1),e("div",he,p(s(i)?s(i).tips():""),1),s(v)?(t(),l("div",Ce,[e("div",{class:T(["isRemember",{selected:s(c)}]),onClick:d[0]||(d[0]=(...f)=>s(x)&&s(x)(...f))},null,2),e("div",be,p(s(n._T)("下次自动填写本次支付的卡号")),1)])):r("",!0),s(i).btn1Available?(t(),l("div",{key:1,class:"btn-main",dir:"auto",onClick:d[1]||(d[1]=()=>s(i).btn1Cb())},p(s(i).btn1Txt()),1)):r("",!0),e("div",{class:T(s(i).btn1Available?"btn-second":"btn-main"),dir:"auto",onClick:d[2]||(d[2]=()=>s(i).btn2Cb())},p(s(i).btnTxt2),3)])])),[[h]]):r("",!0)}}}),ge=w(Te,[["__scopeId","data-v-cc36aae0"]]),Ie={class:"phome"},we={class:"drMoney__num"},Re=["innerHTML"],Pe={class:"phome__bd"},Ve={class:"phome__bdInfo",dir:"auto"},Se={class:"phome__section"},Ne={key:0,class:"phome__subtitle",dir:"auto"},Ae={key:3,class:"phome__subtitle",dir:"auto"},Be=g({__name:"home",setup(b,{expose:m}){const{exposed:_,cards:i,currentPayItem:v,isScrollTop:c,close:x,appleCard:u,isPulling:$}=ps();return m(_),(d,h)=>{var f,y;return t(),l("div",Ie,[e("div",{class:T(["drMoney",{"-top":s(c)}])},[e("div",we,p("$".concat(((f=s(v))==null?void 0:f.amount)||0)),1),e("div",{class:"drMoney__desc",dir:"auto",innerHTML:s(n.sprintf)(s(n._T)("获得{n}钻石"),{n:"<span class='drMoney__descSpan'>".concat((y=s(v))==null?void 0:y.coin,"</span>")})},null,8,Re)],2),e("div",Pe,[e("div",Ve,p(s(n._T)("选择支付方式")),1),e("div",Se,[s(i).length>0||s(u)?(t(),l("div",Ne,p(s(n._T)("最近使用")),1)):r("",!0),s(u)?(t(),k(W,{key:1,class:"phome__item apple_pay",card:s(u)},null,8,["card"])):r("",!0),s($)?(t(),k(W,{key:2,class:"phome__item","show-pulling-view":s($),"is-pulling":s($),card:s(_s)},null,8,["show-pulling-view","is-pulling","card"])):r("",!0),(t(!0),l(O,null,ds(s(i),(o,a)=>(t(),k(W,{class:"phome__item",card:o,key:o.source_id},null,8,["card"]))),128)),s(i).length>0||s(u)?(t(),l("div",Ae,p(s(n._T)("其他支付方式")),1)):r("",!0),C(vs)])])])}}}),De=w(Be,[["__scopeId","data-v-d4434b43"]]),Me={class:"cko-frames-c"},Fe={class:"title-c"},Ee={class:"text"},Le={class:"try-again-tips"},He={class:"try-again-btn"},Qe={class:"cvv-expiry-c"},Oe={key:1,class:"loading-c"},Ue=g({__name:"index",setup(b,{expose:m}){const{exposed:_,onConfirm:i,cardHolderName:v,onNameChange:c,showFrames:x,cvvRef:u,expiryRef:$,cardRef:d,cardScheme:h,onNameBlur:f,onNameFocus:y,nameRef:o,onNameInput:a,btnDisable:I,noRememberCard:V,showCvvTips:J}=bs();return m(_),(ss,R)=>(t(),l("div",Me,[e("div",Fe,[R[1]||(R[1]=e("div",{class:"icon"},null,-1)),e("div",Ee,p(s(n._T)("sawa全力保护你的信息安全")),1)]),s(V)?(t(),l("div",{key:0,class:"try-again",onClick:R[0]||(R[0]=P=>s(cs)(s(V)))},[e("div",Le,p(s(n.sprintf)(s(n._T)("你上次使用过{card}，请问要用它进行支付吗？"),{card:"".concat(s(V).bin,"******").concat(s(V).last4)})),1),e("div",He,p(s(n._T)("是的，自动填写卡号")),1)])):r("",!0),e("div",{class:"frames-c",style:X({opacity:s(x)?1:0})},[C(A,{title:s(n._T)("银行卡卡号"),"use-slot":!0,class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon",ref_key:"cardRef",ref:d},{default:B(()=>[s(h)?(t(),k(rs,{key:0,scheme:s(h),class:"card-scheme-icon"},null,8,["scheme"])):r("",!0),R[2]||(R[2]=e("div",{class:"card-number-frame"},null,-1))]),_:1},8,["title"]),C(A,{title:s(n._T)("持卡人名字"),class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon","input-class":"holder-input",value:s(v),ref_key:"nameRef",ref:o,onchange:s(c),blur:s(f),input:s(a),focus:s(y)},null,8,["title","value","onchange","blur","input","focus"]),e("div",Qe,[C(A,{"use-slot":!0,title:"".concat(s(n._T)("(MM/YY)")+s(n._T)("有效时间")),class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon",ref_key:"expiryRef",ref:$},{default:B(()=>R[3]||(R[3]=[e("div",{class:"expiry-date-frame"},null,-1)])),_:1},8,["title"]),C(A,{"use-slot":!0,title:s(n._T)("CVV"),class:"card-number-frame-c cvv-frame-c","title-icon-class":"cvv-title-icon",titleIconFunc:s(J),"icon-class":"frames-unused-icon",ref_key:"cvvRef",ref:u},{default:B(()=>R[4]||(R[4]=[e("div",{class:"cvv-frame"},null,-1)])),_:1},8,["title","titleIconFunc"])]),e("div",{class:T(["confirm",{disable:s(I)}]),style:{opacity:0}},p(s(n._T)("确定")),3)],4),s(x)?r("",!0):(t(),l("div",Oe,[C(U)]))]))}}),We=w(Ue,[["__scopeId","data-v-cd324025"]]),Ye={class:"cko-frames-c"},Ke={class:"title-c"},je={class:"text"},ze={class:"try-again-tips"},Ge={class:"try-again-btn"},Xe={class:"cvv-expiry-c"},Ze={key:1,class:"loading-c"},qe=g({__name:"index",setup(b,{expose:m}){const{exposed:_,onConfirm:i,cardHolderName:v,onNameChange:c,showFrames:x,cvvRef:u,expiryRef:$,cardRef:d,cardScheme:h,onNameBlur:f,onNameFocus:y,nameRef:o,onNameInput:a,btnDisable:I,noRememberCard:V,show3DS:J,showCvvTips:ss}=Ts();return m(_),(R,P)=>(t(),l("div",Ye,[e("div",Ke,[P[1]||(P[1]=e("div",{class:"icon"},null,-1)),e("div",je,p(s(n._T)("sawa全力保护你的信息安全")),1)]),s(V)?(t(),l("div",{key:0,class:"try-again",onClick:P[0]||(P[0]=Et=>s(cs)(s(V)))},[e("div",ze,p(s(n.sprintf)(s(n._T)("你上次使用过{card}，请问要用它进行支付吗？"),{card:"".concat(s(V).bin,"******").concat(s(V).last4)})),1),e("div",Ge,p(s(n._T)("是的，自动填写卡号")),1)])):r("",!0),e("div",{class:"frames-c",style:X({opacity:s(x)?1:0}),id:"adyen-frame-c"},[C(A,{title:s(n._T)("银行卡卡号"),"use-slot":!0,class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon",ref_key:"cardRef",ref:d},{default:B(()=>[s(h)?(t(),k(rs,{key:0,scheme:s(h),class:"card-scheme-icon"},null,8,["scheme"])):r("",!0),P[2]||(P[2]=e("span",{"data-cse":"encryptedCardNumber",class:"card-number-frame"},null,-1))]),_:1},8,["title"]),C(A,{title:s(n._T)("持卡人名字"),class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon","input-class":"holder-input",value:s(v),ref_key:"nameRef",ref:o,onchange:s(c),blur:s(f),input:s(a),focus:s(y)},null,8,["title","value","onchange","blur","input","focus"]),e("div",Xe,[C(A,{"use-slot":!0,title:"".concat(s(n._T)("(MM/YY)")+s(n._T)("有效时间")),class:"card-number-frame-c","title-icon-class":"title-unused-icon","icon-class":"frames-unused-icon",ref_key:"expiryRef",ref:$},{default:B(()=>P[3]||(P[3]=[e("span",{"data-cse":"encryptedExpiryDate",class:"expiry-date-frame"},null,-1)])),_:1},8,["title"]),C(A,{"use-slot":!0,title:s(n._T)("CVV"),class:"card-number-frame-c cvv-frame-c","title-icon-class":"cvv-title-icon",titleIconFunc:s(ss),"icon-class":"frames-unused-icon",ref_key:"cvvRef",ref:u},{default:B(()=>P[4]||(P[4]=[e("span",{"data-cse":"encryptedSecurityCode",class:"cvv-frame"},null,-1)])),_:1},8,["title","titleIconFunc"])]),e("div",{class:T(["confirm",{disable:s(I)}]),style:{opacity:0}},p(s(n._T)("确定")),3)],4),s(x)?r("",!0):(t(),l("div",Ze,[C(U)]))]))}}),Je=w(qe,[["__scopeId","data-v-33b2b141"]]),st=g({__name:"index.mobile",setup(b,{expose:m}){const{exposed:_}=gs();return m(_),(i,v)=>s(Is)?(t(),k(We,{key:0})):(t(),k(Je,{key:1}))}}),et={key:0},tt={class:"pay-modal-desc"},nt={key:0},ot={key:1},at={class:"pay-modal-cvv-c-with-tips"},it={class:"tips",dir:"auto"},lt={class:"cvv-input-wrap"},rt={key:0,id:"cvv-input-c"},dt=["maxlength"],ct={key:1},ut={class:"pay-modal-title-2"},pt={class:"pay-modal-card-c"},_t={key:0,class:"pay-modal-card"},vt={class:"pay-modal-cvv-c"},mt={class:"text-c"},ft={key:0,id:"cvv-input-c",class:"cvv-input"},yt=["maxlength"],$t={key:2,class:"cvv-loading-position"},ls=g({__name:"index",setup(b,{expose:m}){const{exposed:_,curCVV:i,cvvLen:v,currentCard:c,showBackModal:x,onCVVInputChange:u,onCVVFocus:$,showCVVTips:d,confirmed:h,show:f,step:y}=ws();return m(_),(o,a)=>(t(),l(O,null,[s(y)===s(N).CARD_CVV?(t(),l("span",et,[e("div",tt,[s(c)?(t(),l("span",nt,p(s(n.sprintf)(s(n._T)("请填写{card}的相关信息"),{card:"".concat(s(c).bin,"******").concat(s(c).last4)})),1)):(t(),l("span",ot,p(s(n._T)("currentCard为undefine")),1))]),e("div",at,[a[11]||(a[11]=e("div",{class:"card-icon"},null,-1)),e("div",it,p(s(n._T)("在卡背面的3位数字")),1),e("div",lt,[a[9]||(a[9]=e("div",{class:"text"},"CVV",-1)),a[10]||(a[10]=e("div",{class:"divider"},null,-1)),s(ts)(s(c))?(t(),l("div",rt)):r("",!0),s(ns)(s(c))?S((t(),l("input",{key:1,class:"cvv-input frame-c input",style:{"user-select":"auto"},"onUpdate:modelValue":a[0]||(a[0]=I=>M(i)?i.value=I:null),type:"text",maxlength:s(v),pattern:"[0-9]*",onInput:a[1]||(a[1]=j((...I)=>s(u)&&s(u)(...I),["stop"])),onFocus:a[2]||(a[2]=()=>s($)(!0)),onBlur:a[3]||(a[3]=()=>s($)(!1))},null,40,dt)),[[D,s(i)]]):r("",!0)])])])):r("",!0),s(y)===s(N).CARD_CVV_IS_NOT_REMEMBER?(t(),l("span",ct,[e("div",ut,p(s(n._T)("银行卡卡号")),1),e("div",pt,[s(Y)?(t(),l("div",_t,p("".concat(s(Y).bin,"******").concat(s(Y).last4)),1)):r("",!0)]),e("div",vt,[e("div",mt,[e("div",{class:"icon",onClick:a[4]||(a[4]=(...I)=>s(d)&&s(d)(...I))}),a[12]||(a[12]=e("div",{class:"txt"},"CVV",-1))]),s(ts)(s(c))?(t(),l("div",ft)):r("",!0),s(ns)(s(c))?S((t(),l("input",{key:1,class:"cvv-input input","onUpdate:modelValue":a[5]||(a[5]=I=>M(i)?i.value=I:null),style:{"user-select":"auto"},maxlength:s(v),type:"text",pattern:"[0-9]*",onInput:a[6]||(a[6]=(...I)=>s(u)&&s(u)(...I)),onFocus:a[7]||(a[7]=()=>s($)(!0)),onBlur:a[8]||(a[8]=()=>s($)(!1))},null,40,yt)),[[D,s(i)]]):r("",!0)])])):r("",!0),s(f)?r("",!0):(t(),l("div",$t,[C(U)]))],64))}}),xt={class:"drawer-c"},kt={key:0,class:"drNav"},ht={class:"drNav__title",dir:"auto"},Ct={key:1,class:"drNav"},bt={class:"pdrawFt"},Tt={key:6,id:"three-ds-c"},gt=g({__name:"pay-drawer",props:{onCancel:{type:Function}},setup(b,{expose:m}){const{exposed:_,titleV:i,curStep:v,payNextStep:c,payPrevStep:x,isLowerThan17:u}=ms();return m(_),($,d)=>{const h=G("mask");return S((t(),l("div",xt,[e("div",{class:"pdraw",style:X(s(u)())},[s(v)!==s(N).HOME?(t(),l("div",kt,[e("div",ht,p(s(i)),1),e("div",{class:"drNav__deco",onClick:d[0]||(d[0]=(...f)=>s(x)&&s(x)(...f))},d[4]||(d[4]=[e("span",{class:"ic-more"},null,-1)]))])):r("",!0),s(v)===s(N).HOME?(t(),l("div",Ct,[e("div",{class:"drNav__deco left",onClick:d[1]||(d[1]=(...f)=>s(os)&&s(os)(...f))},d[5]||(d[5]=[e("span",{class:"ic-close"},null,-1)]))])):r("",!0),s(v)===s(N).HOME?(t(),k(De,{key:2})):r("",!0),s(v)===s(N).CARD_FRAME?(t(),k(st,{key:3})):r("",!0),s(v)===s(N).CARD_CVV?(t(),k(ls,{key:4})):r("",!0),s(v)===s(N).CARD_CVV_IS_NOT_REMEMBER?(t(),k(ls,{key:5})):r("",!0),e("div",bt,[S(e("div",{class:T(["pdrawBtn",{"-on":s(Rs)()}]),dir:"auto",onClick:d[2]||(d[2]=(...f)=>s(c)&&s(c)(...f))},p(s(Ps)()),3),[[Vs,!s(H)]])]),s(Ss)?(t(),l("div",Tt)):r("",!0)],4),r("",!0)])),[[h]])}}}),It=w(gt,[["__scopeId","data-v-65c979e3"]]),wt={key:0,class:"mask"},Rt={key:0},Pt={class:"txt1"},Vt={class:"txt2"},St=g({__name:"index",setup(b,{expose:m}){const{exposed:_,isActive:i,close:v,loading:c}=Ns();return m(_),(x,u)=>{const $=G("mask");return s(i)?S((t(),l("div",wt,[e("div",{class:T(["confirmBox",!s(c)&&"confirmBoxBtn"])},[s(c)?(t(),l("span",Rt,[C(U,{class:"pos"}),e("p",Pt,p(s(n._T)("正在为你创建订单")),1)])):r("",!0),e("span",{class:T(["defaultHideen",!s(c)&&"isShow"])},[e("div",{class:"close",onClick:u[0]||(u[0]=d=>s(v)("用户关闭"))}),e("p",Vt,p(s(n._T)("离完成只差一步，请支付订单")),1),u[1]||(u[1]=e("div",{id:"applepay-insert_checkout"},null,-1))],2)],2)])),[[$]]):r("",!0)}}}),Nt=w(St,[["__scopeId","data-v-53395d77"]]),At={key:0,class:"btnLoading",alt:""},Bt=g({__name:"airWallexAPbtn",setup(b){const m=L(!1);return As(()=>us.value,(_,i)=>{_&&!i&&(m.value=!0,setTimeout(()=>{m.value=!1},300))}),(_,i)=>(t(),l("div",{class:T(["btnPos",[s(H)&&"displayAirwallexApBtn",m.value&&"popOut"]])},[e("div",{id:"applePayButton",class:T([s(H)&&"displayAirwallexApBtn"])},null,2),s(H)?(t(),l("div",{key:0,class:T(["pdrawBtnMock",{"-on":!s(K)}])},[Bs(p(s(K)?"loading...":s(n._T)("马上充值"))+" ",1),s(K)?(t(),l("img",At)):r("",!0)],2)):r("",!0)],2))}}),Dt=w(Bt,[["__scopeId","data-v-1a58efd8"]]),Mt={class:"pay-c"},Ft=g({__name:"index",setup(b,{expose:m}){const{exposed:_,title:i}=Es();return m(_),(v,c)=>(t(),l("div",Mt,[s(Ds)?(t(),k(ys,{key:0})):(t(),l(O,{key:1},[C(fs,{title:s(i)},null,8,["title"]),s(F)().currentPayChildPage===s(E).LIST||s(F)().currentPayChildPage===s(E).SWITCH&&s(Q)()?(t(),k(Fs,{key:0})):r("",!0),s(F)().currentPayChildPage===s(E).ENTER?(t(),k(oe,{key:1})):r("",!0),s(F)().currentPayChildPage===s(E).SWITCH&&!s(Q)()?(t(),k(ye,{key:2})):r("",!0),C(ge),C(Dt)],64)),s(us)?(t(),k(It,{key:2})):r("",!0),C(Nt)]))}}),Kt=w(Ft,[["__scopeId","data-v-87946bc2"]]);export{Kt as default};
