!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="4f39dee0-8d79-444f-87b7-6c409f4dea6a",e._sentryDebugIdIdentifier="sentry-dbid-4f39dee0-8d79-444f-87b7-6c409f4dea6a")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8015:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(99692)}])},32635:function(e,t,s){"use strict";s.d(t,{I:function(){return m}});var i=s(97458),n=s(66287),r=s(87250),l=s(41428),a=s(97114),o=s(78364),c=s(34739);let u=e=>Array.from({length:9}).map((t,s)=>(0,i.jsx)("div",{className:c.YS({active:0===s,hasLargeHeight:e}),children:(0,i.jsx)(a.O.Rect,{className:"$h-[inherit] $w-full"})},s)),d=e=>{let{isDraggable:t,isLoading:s,type:n,children:r,hasLargeHeight:a}=e;return(0,i.jsx)("div",{style:{gridArea:"trends"},children:(0,i.jsx)(l.Draggable,{active:t,fit:!0,children:(0,i.jsx)("div",{className:(0,o.W)(c.eC,"video"===n&&c.IB),children:s?u(a):r})})})},m=e=>{let{categories:t,fromElement:s="home_trends",hasLargeHeight:l=!1}=e,a=(0,n.a)("lgMax"),o=[2,3,8];return(0,i.jsx)(d,{isDraggable:a,isLoading:!1,type:"photo",hasLargeHeight:l,children:t.map((e,t)=>(0,i.jsx)(r.P,{item:e,isLargeItem:o.includes(t),fromElement:s,hasLargeHeight:l},e.title))})}},99692:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return O},default:function(){return E}});var i=s(97458),n=s(27544),r=s(5043),l=s(16830),a=s.n(l),o=s(32748),c=s(94119),u=s(130),d=s(32635),m=s(80274),x=s(96005),$=s(21188);let p=[{title:"home:valueProposition.items.aiImages.title",subtitle:"home:valueProposition.items.aiImages.subtitle",text:"home:valueProposition.items.aiImages.text",color:"#15BCB2"},{title:"home:valueProposition.items.creatives.title",subtitle:"home:valueProposition.items.creatives.subtitle",text:"home:valueProposition.items.creatives.text",color:"#EB644C"},{title:"home:valueProposition.items.assets.title",subtitle:"home:valueProposition.items.assets.subtitle",text:"home:valueProposition.items.assets.text",color:"#336AEA"},{title:"home:valueProposition.items.subscribers.title",subtitle:"home:valueProposition.items.subscribers.subtitle",text:"home:valueProposition.items.subscribers.text",color:"#B07CC6"}];s(19754);var h=s(22319),f=(0,h.c)({defaultClassName:"_1wtyp1b3 _1wtyp1b0 $uppercase $mb-5 $leading-normal $text-[14px] $font-semibold $text-blueFreepik",variantClassNames:{active:{false:"_1wtyp1b1",true:"_1wtyp1b2"}},defaultVariants:{active:!1},compoundVariants:[]}),g=(0,h.c)({defaultClassName:"_1wtyp1b7 $w-full $grid $gap-50 md:$gap-60 lg:$gap-50 $text-center $border-red",variantClassNames:{active:{false:"$grid-cols-1 sm:$grid-cols-2 md:$grid-cols-2 lg:$grid-cols-4",true:"$grid-cols-1 md:$grid-cols-2 lg:$grid-cols-3"}},defaultVariants:{active:!1},compoundVariants:[]});let b=e=>{let{title:t,subtitle:s,text:n,color:r}=e,{t:l}=(0,o.$G)("home");return(0,i.jsxs)("div",{className:"$flex $flex-col $gap-15 $text-left",children:[(0,i.jsx)("h3",{className:"$text-center $text-[64px]",style:{color:r},children:l(t)}),(0,i.jsx)("h4",{className:"_1wtyp1bb $font-alternate $font-semibold $text-grayEbony $text-center $text-xl",style:{color:r},children:l(s)}),(0,i.jsx)("p",{className:"$text-base $leading-normal $text-grayOxford $text-center",children:l(n)})]})},v=()=>{let{t:e}=(0,o.$G)("home"),{loginUrl:t,setLoginCookies:s}=(0,x.J)(),n=(0,$.fD)({event_name:"button_start_now_home",action:"start_now_login",label:"new_home_anonymous",location:"value_proposition_home"});return(0,i.jsx)("section",{id:"valueProposition",className:"$relative $w-full",children:(0,i.jsxs)("div",{className:"$relative $max-w-screen-xl $mx-auto $pt-80 $pb-80 lg:$pb-120 $px-15 sm:$px-40 lg:$px-80 xl:$px-20 $flex $flex-col $gap-80 md:$gap-100 $items-center $justify-between $text-center $text-black",children:[(0,i.jsxs)("div",{className:"$max-w-fit $mx-auto",children:[(0,i.jsx)("h4",{className:f(),children:e("home:valueProposition.header")}),(0,i.jsx)("h2",{className:"_1wtyp1b6 $text-4xl lg:$text-[56px] $font-semibold $font-alternate $mb-15 $text-grayEbony $text-center $border-red",children:e("home:valueProposition.title")}),(0,i.jsx)("p",{className:"$leading-normal $text-grayOxford $text-[16px] $font-normal $text-center",children:e("home:valueProposition.subtitle")}),(0,i.jsx)("a",{href:t,className:"_1wtyp1bc $inline-block $px-15 $py-10 $rounded $font-semibold $leading-relaxed $whitespace-nowrap $transition-all $text-white $mt-25 $mb-20",onClick:()=>{s(),n()},children:e("home:valueProposition.signButton")})]}),(0,i.jsx)("div",{className:g(),children:p.map(e=>(0,i.jsx)(b,{...e},e.title))})]})})};var w=s(65494),_=s(61409),j=s(49907),y=s(78630);s(67811);let N=e=>{let{children:t,title:s,subtitle:n}=e;return(0,i.jsx)("section",{className:"$py-40 $pt-60",children:(0,i.jsxs)("div",{className:y.nC,children:[(0,i.jsx)("h2",{className:"$sprinkles-text-3xl lg:$sprinkles-text-4xl $mb-25 sm:$mb-10 $text-center $px-20 $leading-snug",children:s}),(0,i.jsx)("p",{className:"_u4oviy0 $text-grayOxford $text-center $px-20 $leading-snug",children:(0,i.jsx)(o.cC,{i18nKey:n,components:{1:(0,i.jsx)("i",{})}})}),t]})})};var P=s(1162);let k=a()(()=>s.e(6866).then(s.bind(s,96866)).then(e=>e.PopularSearches),{loadableGenerated:{webpack:()=>[96866]}}),C=a()(()=>Promise.all([s.e(9479),s.e(7256)]).then(s.bind(s,89479)).then(e=>e.HomeMiddleBanner),{loadableGenerated:{webpack:()=>[89479]},ssr:!1,loading:()=>(0,i.jsx)(u.U,{})}),I=e=>{let{alternates:t,categories:s,currentUrl:l,popularSearches:a,topBarMode:m,imagesInspired:x}=e,{t:$}=(0,o.$G)("home"),p=(0,r.$)("/free-photos-vectors");return(0,i.jsxs)(w.O,{alternates:t,bannerContent:(0,i.jsx)(C,{skeleton:(0,i.jsx)(u.U,{})}),imagesInspired:x,currentUrl:l,topBarMode:m,userType:n.Wg.anonymous,cover:(0,i.jsx)(_.F,{children:(0,i.jsx)(P.t,{})}),children:[(0,i.jsxs)(N,{title:$("trending.title"),subtitle:$("trending.subtitle"),children:[a&&(0,i.jsx)(k,{terms:a.map(e=>({slug:e.slug,title:e.term})),path:p,fromElement:"popular_searches",showLabel:!1}),s&&(0,i.jsx)(d.I,{categories:s})]}),(0,i.jsx)(j.r,{title:$("getInspired.title"),subtitle:$("getInspired.subtitle"),images:x}),(0,i.jsx)(v,{}),(0,i.jsx)(c.v,{})]})};I.layout=m.L;var E=I,O=!0},36823:function(e,t,s){"use strict";s.d(t,{b:function(){return r}});var i=s(71409);let n=e=>{let t=/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:[^.]+\.)?([^:\/\n\?\=]+)/.exec(e),s=t&&t[1]&&t[1].indexOf(".")>-1?t[1]:e;return".".concat(s)},r=()=>{let{domain:e}=(0,i.Vx)();return n(e)}},96005:function(e,t,s){"use strict";s.d(t,{J:function(){return r}});var i=s(71409),n=s(69195);let r=()=>{let e=(0,n.A)(),t=(0,i.aw)(),s=(0,i.ZK)();return{loginUrl:"".concat("es"===s?"https://www.freepik.es/log-in":"https://www.freepik.com/log-in","?").concat(t),setLoginCookies:e}}},69195:function(e,t,s){"use strict";s.d(t,{A:function(){return $}});var i=s(72118),n=s(83648),r=s(52983),l=s(94918);let a=e=>{let t=e,s=e.indexOf("#");if(-1!==s){let i=e.substring(s+1),n=i.indexOf("."),r=i.indexOf("/");(-1!==n||-1!==r)&&(t=e.substring(0,s))}return t};var o=s(37538);let c=["/search","/videos","/icons","/templates"],u="uuid",d=(e,t)=>{let s=a(e);if(c.some(e=>t.startsWith(e))){let e=new URLSearchParams(s.split("#")[1]),t=o.K.get();if(t&&!e.get(u))return"".concat(s,"#").concat(u,"=").concat(t)}return s};var m=s(36823);let x=new Date(new Date().getTime()+31536e6),$=()=>{let{pathname:e}=(0,n.useRouter)(),t=(0,m.b)();return(0,r.useCallback)(function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;l.D.remove();let n=d(s,e);i.Z.set("GR_LGURI",n,{expires:x,path:"/",domain:t})},[t,e])}},94238:function(){},26377:function(){},19754:function(){},67811:function(){}},function(e){e.O(0,[8305,7101,236,1003,8290,731,570,5817,6775,8755,9974,8511,1925,7690,7032,5933,9929,8334,1953,4899,4202,3556,1557,2888,9774,179],function(){return e(e.s=8015)}),_N_E=e.O()}]);