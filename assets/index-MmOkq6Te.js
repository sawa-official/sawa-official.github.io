import{P as z}from"./index-DR285tQE.js";import{e as h,c as w,v as $,ap as q,h as a,i as l,j as o,t as f,u as p,d as v,k as r,l as y,L as U,H as k,aq as G,ar as Y,_ as S,Z as B,R as F,as as X,at as K,n as u,a2 as W,I as J,V as L,r as E,f as Q,au as j,av as Z,M as ee,aw as se,P as oe,ax as ae,q as C,N as te}from"./index-PhSbxy0u.js";import{s as V,a as R,S as ne}from"./index-rNo6GklN.js";import{C as ie}from"./AboutSA2-BqUWj29Q.js";const le={class:"phoneNav"},_e={class:"titleContainer"},ue={class:"name"},re={key:0,class:"subtitle"},ce=h({__name:"index.mobile",props:{title:{},isShowSubDetect:{type:Boolean}},emits:["toLogin"],setup(e,{emit:n}){const i=w(()=>$().user),c=w(()=>$().skey),m=n,P=q.currentRoute.value.name==="login";function A(){if(history.state.back){G();return}Y({name:"pay"})}function d(){V.value?(console.log("side login",R.value),R.value.close(),V.value=!1):c?V.value=!0:m("toLogin")}return(_,g)=>{var b;return a(),l(k,null,[o("div",le,[o("div",_e,[o("div",ue,f(_.title),1),_.isShowSubDetect?(a(),l("div",re,f(p(v._T)("支付环境安全")),1)):r("",!0)]),o("div",{class:"close",onClick:A}),P?r("",!0):(a(),l("div",{key:0,class:"avatar",onClick:d,style:y(c.value?{backgroundImage:"url(".concat((b=i.value)==null?void 0:b.icon,")")}:{})},null,4))]),p(V)?(a(),U(ne,{key:0,ref_key:"sideLogin",ref:R,show:p(V)},null,8,["show"])):r("",!0)],64)}}}),de=S(ce,[["__scopeId","data-v-4e1a1648"]]),Pe={class:"mask"},Ee=h({__name:"question.mobile",props:{change:{}},setup(e){return(n,i)=>{const c=B("mask");return F((a(),l("div",Pe,[i[1]||(i[1]=o("div",{class:"img"},null,-1)),o("div",{class:"close",onClick:i[0]||(i[0]=()=>{n.change()})})])),[[c]])}}}),pe=S(Ee,[["__scopeId","data-v-668c4915"]]);var Ae={VUE_APP_BASE_URL:"https://arab-pk.badambiz.com/",VUE_APP_ENV:"production",VUE_APP_LANGUAGE:"ar",VUE_APP_PROJ_NAME:"",VUE_APP_DEPLOY_SERVER:"ar",VUE_APP_DEPLOY_SERVER_DIST:"",VUE_APP_PROXY_URL:"https://test20-pk.badambiz.com/",VUE_APP_PUBLIC_PATH:"/",VUE_APP_CDN_PATH:"https://sawa-official.github.io/",VUE_APP_TRANSLATE_PROJ:"sawa-h5",VUE_APP_TRANSLATE_SHEET:"sawa官网优化",VUE_APP_TRANSLATE_DOCUMENT:"",VUE_APP_TRANSLATE_SHEET_LANG:"",VUE_APP_FLAVOR:"ksa",VUE_APP_DEPLOY:"github",VUE_APP_SUFFIX:"mobile",VUE_APP_CWD:"代表项目本地根目录不要尝试改变这个值否则你会被炒鱿鱼",VUE_APP_EXTERNALS:"",VUE_APP_ICON:"https://oss-pk-arab.badambiz.com/4c9334bb9c4d7bd3389f9ac272dcf7dc_logo_ksa.ico",VUE_APP_TITLE:"SawaKSA",VUE_APP_SOURCEMAP:"false",VUE_APP_DISABLE_CSS_MODULE:"false",VUE_APP_RELEASE_URL:"https://arab-pk-release.badambiz.com/",VUE_APP_DIST:"dist/mobile",VUE_APP_VERSION:"1.0.333",VITE_APP_TEST:1,VUE_APP_NO_GEN_INDEX_HTML:"true",VUE_APP_WEBSITE_VERSION:"1.0.333"};const ve=h({props:{change:{type:Function}},components:{CommonCarouselView:ie},created(){console.warn("about sa")},beforeDestroy(){},data(){return{visual:!1,index:0,dots:[0,1],isAppARE:Ae.VUE_APP_FLAVOR==="are",ksa:new URL("/assets/question_ksa-KbrYt_oF.png",import.meta.url).href,are:new URL("/assets/question_are-CCTCtQGy.png",import.meta.url).href,ludo:new URL("/assets/question_ludo-CoTtLIU_.png",import.meta.url).href,baloot:new URL("/assets/question_baloot-DmpFv5O-.jpg",import.meta.url).href}},methods:{_T:v._T,xpx:X,onCarouselItemChange(e){let i;e<0?i=2-Math.abs(e)%2:i=e%2,console.log("onCarouselItemChange",i,e),this.index=i},onClose(){this.change&&this.change()}}}),me={class:"about__title"},ge={key:2,class:"aboutDots"},Ue=["onClick"];function be(e,n,i,c,m,P){const A=K("common-carousel-view"),d=B("mask");return F((a(),l("div",{class:"mask mask-mobile",onClick:n[1]||(n[1]=L((..._)=>e.onClose&&e.onClose(..._),["stop"]))},[o("div",{class:"about",onClick:L(()=>{},["stop"])},[o("div",me,f(e._T("什么是Sawa ID")),1),e.isAppARE?(a(),l(k,{key:0},[e.index==0?(a(),l("div",{key:0,class:u(["about__img","-sawaKSA"]),style:{"background-image":"url(../../assets/img/about_id/question_are.png)"}})):r("",!0)],64)):(a(),U(A,{key:1,class:"about__ctx",w:e.xpx(522),h:e.xpx(676),length:2,"on-change":e.onCarouselItemChange,"cur-index":e.index},{default:W(()=>[e.index==0?(a(),l("div",{key:0,class:u(["about__img","-sawaKSA"]),style:y({"background-image":"url(".concat(e.ksa,")")})},null,4)):r("",!0),e.index==1?(a(),l("div",{key:1,class:u(["about__img","-ludo"]),style:y({"background-image":"url(".concat(e.ludo,")")})},null,4)):r("",!0)]),_:1},8,["w","h","on-change","cur-index"])),e.isAppARE?r("",!0):(a(),l("div",ge,[(a(!0),l(k,null,J(e.dots,(_,g)=>(a(),l("div",{class:u(["aboutDot",{"-on":e.index==g}]),key:g,onClick:b=>e.onCarouselItemChange(g)},n[2]||(n[2]=[o("div",{class:"aboutDot__inner"},null,-1)]),10,Ue))),128))])),o("div",{class:"about__btn btn",onClick:n[0]||(n[0]=(..._)=>e.onClose&&e.onClose(..._))},f(e._T("知道了")),1)])])),[[d]])}const Ve=S(ve,[["render",be],["__scopeId","data-v-f5557831"]]);var fe={VUE_APP_BASE_URL:"https://arab-pk.badambiz.com/",VUE_APP_ENV:"production",VUE_APP_LANGUAGE:"ar",VUE_APP_PROJ_NAME:"",VUE_APP_DEPLOY_SERVER:"ar",VUE_APP_DEPLOY_SERVER_DIST:"",VUE_APP_PROXY_URL:"https://test20-pk.badambiz.com/",VUE_APP_PUBLIC_PATH:"/",VUE_APP_CDN_PATH:"https://sawa-official.github.io/",VUE_APP_TRANSLATE_PROJ:"sawa-h5",VUE_APP_TRANSLATE_SHEET:"sawa官网优化",VUE_APP_TRANSLATE_DOCUMENT:"",VUE_APP_TRANSLATE_SHEET_LANG:"",VUE_APP_FLAVOR:"ksa",VUE_APP_DEPLOY:"github",VUE_APP_SUFFIX:"mobile",VUE_APP_CWD:"代表项目本地根目录不要尝试改变这个值否则你会被炒鱿鱼",VUE_APP_EXTERNALS:"",VUE_APP_ICON:"https://oss-pk-arab.badambiz.com/4c9334bb9c4d7bd3389f9ac272dcf7dc_logo_ksa.ico",VUE_APP_TITLE:"SawaKSA",VUE_APP_SOURCEMAP:"false",VUE_APP_DISABLE_CSS_MODULE:"false",VUE_APP_RELEASE_URL:"https://arab-pk-release.badambiz.com/",VUE_APP_DIST:"dist/mobile",VUE_APP_VERSION:"1.0.333",VITE_APP_TEST:1,VUE_APP_NO_GEN_INDEX_HTML:"true",VUE_APP_WEBSITE_VERSION:"1.0.333"};const he={class:"login"},ke={class:"loginBox"},Le=["placeholder","value"],Se={key:0,class:"inputD"},Te=["value","placeholder"],Ce={key:0,class:"inputD"},Re=h({__name:"index.moble",setup(e){const n=E("hide"),i=E(),c=E(""),m=E(""),P=E(""),A=E(fe.VUE_APP_FLAVOR==="are"),d=E(!1),_=E(""),g=w(()=>!!c.value);function b(){n.value==="hide"?(n.value="look",i.value.type=""):n.value==="look"&&(n.value="hide",i.value.type="password")}function N(){d.value=!d.value}function I(t){console.log("onUserName",t.target.value);const s=t.target.value.trim();c.value=s}async function M(){var s;const t=C();await se({userName:c.value,password:m.value,message:P},(s=t==null?void 0:t.proxy)==null?void 0:s.$route.params.pos),P.value&&oe(P.value)}function H(){var s;const t=C();ae({message:P},(s=t==null?void 0:t.proxy)==null?void 0:s.$route.params.pos)}function x(t){const s=t.target.value.trim();m.value=s}function D(t){_.value=""}function O(t){console.log("onFocus",t),_.value=t}return Q(()=>{var s;v.reportWebSensors("act_sawa_official_website_enter_login",{act_init_url:location.href,act_nano_id:j()});const t=C();Z({message:P},(s=t==null?void 0:t.proxy)==null?void 0:s.$route.params.pos)}),(t,s)=>(a(),l("div",he,[ee(de,{title:p(v._T)("sawa账号登录")},null,8,["title"]),o("div",ke,[o("div",{class:u(["inputC",{on:_.value==="id"}])},[o("input",{class:"input",placeholder:p(v._T)("请输入sawa账号ID"),value:c.value,type:"text",pattern:"[0-9]*",id:"id-c",onChange:L(I,["stop"]),onInput:I,onFocus:s[0]||(s[0]=T=>O("id")),onBlur:s[1]||(s[1]=T=>D())},null,40,Le),o("div",{class:u(["icon","question"]),onClick:s[2]||(s[2]=()=>{d.value=!d.value})}),_.value==="id"?(a(),l("div",Se)):r("",!0),r("",!0)],2),o("div",{class:u(["inputC",{on:_.value==="pwd"}])},[o("input",{class:"input",id:"pwd-c",type:"password",ref_key:"passwordRef",ref:i,value:m.value,onChange:L(x,["stop"]),onFocus:s[3]||(s[3]=T=>O("pwd")),onBlur:s[4]||(s[4]=T=>D()),placeholder:p(v._T)("请输入密码")},null,40,Te),o("div",{class:u(["icon",n.value==="hide"?"hide":"look"]),onClick:b},null,2),_.value==="pwd"?(a(),l("div",Ce)):r("",!0),r("",!0)],2)]),o("div",{class:u(["otherLogin",A.value?"are":""])},[o("div",{class:u(["loginButton",{"-off":!g.value}]),onClick:M},f(p(v._T)("登录")),3),o("div",{class:"buttonList"},[o("div",{class:u(["icon","facebook"]),onClick:H}),s[7]||(s[7]=o("div",{class:u(["icon","google"]),id:"google-login-btn"},null,-1))])],2),o("div",{class:u(["login-bg",[A.value?"are":""]])},null,2),d.value?(a(),l(k,{key:0},[A.value?(a(),U(pe,{key:0,change:N})):(a(),U(Ve,{key:1,change:N}))],64)):r("",!0)]))}}),we=S(Re,[["__scopeId","data-v-df22f3b0"]]),ye={style:{width:"100%",height:"100%"}},$e=h({__name:"index",setup(e){return(n,i)=>(a(),l("div",ye,[p(te)()?(a(),U(z,{key:0})):(a(),U(we,{key:1}))]))}});export{$e as default};
