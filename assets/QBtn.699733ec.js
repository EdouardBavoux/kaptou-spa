import{c as u,h as v,g as K,D as ve,E as z,G as ge,H as me,I as ee,J as he,K as te,r as Q,o as be,T as ye,d as pe,L as w,M as ke}from"./index.97f0f502.js";import{c as I,h as xe,d as j,e as Ee}from"./render.53f216d1.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},ne={size:String};function ae(e,n=N){return u(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const F="0 0 24 24",H=e=>e,O=e=>`ionicons ${e}`,re={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":O,"ion-ios":O,"ion-logo":O,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},le={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(re).join("|")+")"),qe=new RegExp("^("+Object.keys(ie).join("|")+")"),D=new RegExp("^("+Object.keys(le).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Le=/^ion-/,_e=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=I({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=K(),l=ae(e),g=u(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=u(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Se.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(p=>{const[r,k,b]=p.split("@@");return v("path",{style:k,d:r,transform:b})})}}if(Re.test(a)===!0)return{img:!0,src:a.substring(4)};if(we.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let h=" ";const $=a.match($e);if($!==null)o=re[$[1]](a);else if(_e.test(a)===!0)o=a;else if(Le.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(D.test(a)===!0){o="notranslate material-symbols";const d=a.match(D);d!==null&&(a=a.substring(6),o+=le[d[1]]),h=a}else{o="notranslate material-icons";const d=a.match(qe);d!==null&&(a=a.substring(2),o+=ie[d[1]]),h=a}return{cls:o,content:h}});return()=>{const o={class:g.value,style:l.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?v(e.tag,o,xe(n.default)):s.value.img===!0?v("span",o,j(n.default,[v("img",{src:s.value.src})])):s.value.svg===!0?v("span",o,j(n.default,[v("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?v("span",o,j(n.default,[v("svg",{viewBox:s.value.viewBox},[v("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),v(e.tag,o,j(n.default,[s.value.content])))}}});const Be={size:{type:[Number,String],default:"1em"},color:String};function Ce(e){return{cSize:u(()=>e.size in N?`${N[e.size]}px`:e.size),classes:u(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Pe=I({name:"QSpinner",props:{...Be,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=Ce(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Te(e,n){const t=e.style;for(const l in n)t[l]=n[l]}function Ye(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=ve(e)===!0?e.value:e;if(n)return n.$el||n}function Ze(e,n){if(e==null||e.contains(n)===!0)return!0;for(let t=e.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(n))return!0;return!1}function je(e,n=250){let t=!1,l;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),l=e.apply(this,arguments)),l}}function W(e,n,t,l){t.modifiers.stop===!0&&ee(e);const g=t.modifiers.color;let s=t.modifiers.center;s=s===!0||l===!0;const o=document.createElement("span"),a=document.createElement("span"),h=he(e),{left:$,top:d,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,b=`${(y-r)/2}px`,c=s?b:`${h.left-$-k}px`,f=`${(p-r)/2}px`,x=s?f:`${h.top-d-k}px`;a.className="q-ripple__inner",Te(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${g?" text-"+g:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),n.appendChild(o);const R=()=>{o.remove(),clearTimeout(q)};t.abort.push(R);let q=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,q=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,q=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:n,value:t,arg:l}){const g=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||l,keyCodes:[].concat(g.keyCodes||13)}}var Ae=Ee({name:"ripple",beforeMount(e,n){const t={cfg:n.instance.$.appContext.config.globalProperties.$q.config,enabled:n.value!==!1,modifiers:{},abort:[],start(l){t.enabled===!0&&l.qSkipRipple!==!0&&l.type===(t.modifiers.early===!0?"pointerdown":"click")&&W(l,e,t,l.qKeyEvent===!0)},keystart:je(l=>{t.enabled===!0&&l.qSkipRipple!==!0&&z(l,t.modifiers.keyCodes)===!0&&l.type===`key${t.modifiers.early===!0?"down":"up"}`&&W(l,e,t,!0)},300)};X(t,n),e.__qripple=t,ge(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&X(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),me(n,"main"),delete e._qripple}});const ue={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Me=Object.keys(ue),Oe={align:{type:String,validator:e=>Me.includes(e)}};function ze(e){return u(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ue[n]}`})}function et(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function oe(e,n){typeof n.type=="symbol"?Array.isArray(n.children)===!0&&n.children.forEach(t=>{oe(e,t)}):e.add(n)}function tt(e){const n=new Set;return e.forEach(t=>{oe(n,t)}),Array.from(n)}function Ne(e){return e.appContext.config.globalProperties.$router!==void 0}function G(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function J(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ke(e,n){for(const t in n){const l=n[t],g=e[t];if(typeof l=="string"){if(l!==g)return!1}else if(Array.isArray(g)===!1||g.length!==l.length||l.some((s,o)=>s!==g[o]))return!1}return!0}function Y(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,l)=>t===n[l]):e.length===1&&e[0]===n}function Ie(e,n){return Array.isArray(e)===!0?Y(e,n):Array.isArray(n)===!0?Y(n,e):e===n}function Ve(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ie(e[t],n[t])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe(e){const n=K(),{props:t,proxy:l}=n,g=Ne(n),s=u(()=>t.disable!==!0&&t.href!==void 0),o=u(()=>g===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=u(()=>{if(o.value===!0)try{return l.$router.resolve(t.to)}catch{}return null}),h=u(()=>a.value!==null),$=u(()=>s.value===!0||h.value===!0),d=u(()=>t.type==="a"||$.value===!0?"a":t.tag||e||"div"),y=u(()=>s.value===!0?{href:t.href,target:t.target}:h.value===!0?{href:a.value.href,target:t.target}:{}),p=u(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const q=l.$route.matched;if(q.length===0)return-1;const C=q.findIndex(J.bind(null,R));if(C>-1)return C;const A=G(f[x-2]);return x>1&&G(R)===A&&q[q.length-1].path!==A?q.findIndex(J.bind(null,f[x-2])):C}),r=u(()=>h.value===!0&&p.value>-1&&Ke(l.$route.params,a.value.params)),k=u(()=>r.value===!0&&p.value===l.$route.matched.length-1&&Ve(l.$route.params,a.value.params)),b=u(()=>h.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(te(f),l.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:s,hasLink:$,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:b,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},He={xs:8,sm:10,md:14,lg:20,xl:24},De=["button","submit","reset"],Ue=/[^\s]\/[^\s]/,We={...ne,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Oe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Xe(e){const n=ae(e,He),t=ze(e),{hasRouterLink:l,hasLink:g,linkTag:s,linkProps:o,navigateToRouterLink:a}=Fe("button"),h=u(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),$=u(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=u(()=>e.disable!==!0&&e.loading!==!0),y=u(()=>d.value===!0?e.tabindex||0:-1),p=u(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=u(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,o.value):De.includes(e.type)===!0&&(c.type=e.type),s.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),l.value!==!0&&Ue.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),k=u(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),b=u(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:h,innerClasses:b,attributes:r,hasRouterLink:l,hasLink:g,linkTag:s,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:E}=ke;let L=null,_=null,B=null;var nt=I({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:l}=K(),{classes:g,style:s,innerClasses:o,attributes:a,hasRouterLink:h,hasLink:$,linkTag:d,navigateToRouterLink:y,isActionable:p}=Xe(e),r=Q(null),k=Q(null);let b=null,c,f;const x=u(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=u(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),q=u(()=>({center:e.round})),C=u(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),A=u(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:V,onKeydown:ce,onMousedown:fe,onTouchstart:de}:{onClick:w}),se=u(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:s.value,...a.value,...A.value}));function V(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,E),r.value!==null&&r.value.removeEventListener("blur",M,E)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,E),r.value.addEventListener("blur",M,E)}}if(h.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};t("click",i,m),i.defaultPrevented!==!0&&m()}else t("click",i)}}function ce(i){r.value!==null&&(t("keydown",i),z(i,[13,32])===!0&&_!==r.value&&(_!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,E)),w(i)))}function de(i){r.value!==null&&(t("touchstart",i),i.defaultPrevented!==!0&&(L!==r.value&&(L!==null&&P(),L=r.value,b=i.target,b.addEventListener("touchcancel",S,E),b.addEventListener("touchend",S,E)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function fe(i){r.value!==null&&(i.qSkipRipple=c===!0,t("mousedown",i),i.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,E)))}function S(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(_===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&te(m),i.cancelBubble===!0&&ee(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}t("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(L===r.value||B===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),L===r.value&&(b!==null&&(b.removeEventListener("touchcancel",S,E),b.removeEventListener("touchend",S,E)),L=b=null),B===r.value&&(document.removeEventListener("mouseup",S,E),B=null),_===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,E),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return be(()=>{P(!0)}),Object.assign(l,{click:V}),()=>{let i=[];e.icon!==void 0&&i.push(v(U,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=j(n.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(U,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},i)),e.loading!==null&&m.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Pe)])]:null)),pe(v(d.value,se.value,m),[[Ae,R.value,void 0,q.value]])}}});export{U as Q,Ae as R,nt as a,Fe as b,Te as c,tt as d,ne as e,ae as f,Ye as g,Pe as h,et as i,Ze as j,Qe as u,Ne as v};
