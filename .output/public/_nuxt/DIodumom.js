import{_ as X}from"./DvvRXFMu.js";import{s as Z}from"./5qdwnPSU.js";import{s as ee}from"./CJ9FmLzY.js";import{F as te,_ as oe,a as se,T as re,b as ae,c as ne,d as ce}from"./DeOeGqHm.js";import{_ as ie,f as le,U as ue,a3 as de,r as t,S as me,y as S,q as P,c as l,a,b as C,w as E,F as pe,m as fe,I as he,o as c,G as A,v as F,u as ge,t as V}from"./B1bz72Xf.js";import"./Bx2oNIg8.js";import"./y_fYQhsb.js";import"./CuC0lxMF.js";import"./1YeO85hr.js";import"./B5zRD3Eq.js";import"./B8PMVAk2.js";import"./D7X5jJxn.js";import"./UTU0bQSG.js";import"./ffYhdyWx.js";import"./DbMxTtCp.js";import"./dQKNFxwD.js";const _e={name:"Dashboard",components:{FlashCard:te,CategoryCard:oe,ProductCard:se,TopCard:re,Footer:ae,FilterCard:ne},props:{searchTerm:{type:String,default:""}},setup(D){le(()=>D.searchTerm,(e,s)=>{x.value=!0,p()}),ue(async()=>{p(),B(),await Y()});const o=de(),b=t(1);t(1);const n=me(()=>[...y.value].sort(()=>Math.random()-.5).slice(0,6)),x=t(!1),N=t(null),f=t([]),w=t([20,80]),u=t(!1),m=t(!1),T=o.params.id,h=o.query.searchTerm,r=t({days:"00",hours:"00",minutes:"00",seconds:"00"}),g=t({icon:"pi pi-home",route:"/dashboard"}),k=t([{label:"Products",route:"/dashboard"},{label:`Seach Results for ${h}`,route:"/checkout"}]),I=e=>{o.push({path:`/products/${e.id}`})},U=t(new Date(new Date().getTime()+3*24*60*60*1e3)),B=()=>{const e=new Date().getTime(),s=U.value-e;s>0?r.value={days:Math.floor(s/(1e3*60*60*24)).toString().padStart(2,"0"),hours:Math.floor(s%(1e3*60*60*24)/(1e3*60*60)).toString().padStart(2,"0"),minutes:Math.floor(s%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),seconds:Math.floor(s%(1e3*60)/1e3).toString().padStart(2,"0")}:(clearInterval(this.timer),r.value={days:"00",hours:"00",minutes:"00",seconds:"00"})},L={"HD ANALOGUE CAMERAS AND DVR":"pi pi-video","IP NETWORK CAMERAS AND NVR":"pi pi-wifi","ACCESS CONTROL PRODUCTS":"pi pi-lock","VIDEO INTERCOM PRODUCTS":"pi pi-phone","NETWORK AND CABLES PRODUCTS":"pi pi-sitemap","MONITOR DISPLAY PRODUCTS":"pi pi-desktop","ACCESSORIES PRODUCTS":"pi pi-cog",Phones:"pi pi-mobile"},K=e=>L[e]||"pi pi-question",_=t([]),R=t([]);S();const y=t([]),d=t(0),j=()=>{d.value=(d.value+1)%_.value.length},q=()=>{b.value++,p()},$=()=>{d.value=(d.value-1+_.value.length)%_.value.length},z=e=>{console.log("ca",e)},W=e=>e?new Intl.NumberFormat("en-US",{style:"currency",currency:"Ksh",minimumFractionDigits:0}).format(e):"0",G=e=>{N.value=[e.id],p()},H=e=>{d.value=e},p=async()=>{u.value=!0,m.value=!0;try{const{$axios:e}=S(),s=o.params.id,v=o.query.searchTerm||"",i={};v&&(i.searchTerm=v.slice(0,5)),s&&(i.categoryId=[s]);const O=await e.get("/product/product-models",{params:{...i,page:b.value,limit:10}});u.value=!1,y.value=O.data.results,await M(),console.log(y.value,"products")}catch(e){console.error("Error fetching products:",e)}finally{u.value=!1,m.value=!1}},M=async()=>{try{const{$axios:e}=S(),s=o.params.id,v=o.query.productId,i={};s&&(i.categoryId=s,i.productId=v);const O=await e.get("/product/features",{params:{...i}});f.value=O.data.map(Q=>({...Q,selected:!1}))}catch(e){console.error("Error fetching products:",e)}finally{}},Y=async()=>{const{$axios:e}=S();try{const s=await e.get("/product/categories",{});R.value=s.data}catch(s){console.error("Error fetching products:",s)}},J=t([{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}]);return{images:_,currentIndex:d,nextSlide:j,prevSlide:$,goToSlide:H,categories:R,products:y,responsiveOptions:J,getItems:z,getSeverity:e=>{switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}},value:w,filter:x,showMoreProducts:q,fetching:u,fetchingMore:m,formatPrice:W,randomizedProducts:n,goToProductPage:I,getIcon:K,getCategoryProducts:G,getProduct:p,getFeatures:M,features:f,category:T,searchTer:h,home:g,items:k}}},ye={class:"container mx-auto my-10 pa-10"},ve={class:"flash-sales mt-5 mx-2 full-screen",style:{"min-height":"900px"}},Se=["href","onClick"],Ce={class:"text-primary font-semibold"},be=["href","target"],xe={class:"text-surface-700 dark:text-surface-0"},we={class:"flex flex-col sm:flex-row"},Te={class:"w-full"},ke={key:0,class:"text-center mt-6"},Ie={key:1,class:"flex flex-col items-center justify-center text-center mt-12 text-gray-500"},Oe={key:2,class:"grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center"},Pe={key:3,class:"flex justify-center py-8"};function De(D,o,b,n,x,N){const f=P("router-link"),w=ee,u=P("FilterCard"),m=P("ProductCard"),T=Z,h=X;return c(),l("div",ye,[a("section",ve,[C(w,{home:n.home,model:n.items},{item:E(({item:r,props:g})=>[r.route?(c(),A(f,{key:0,to:r.route,custom:""},{default:E(({href:k,navigate:I})=>[a("a",F({href:k},g.action,{onClick:I}),[a("span",{class:ge([r.icon,"text-color"])},null,2),a("span",Ce,V(r.label),1)],16,Se)]),_:2},1032,["to"])):(c(),l("a",F({key:1,href:r.url,target:r.target},g.action),[a("span",xe,V(r.label),1)],16,be))]),_:1},8,["home","model"]),o[3]||(o[3]=a("div",{class:"flexjustify-between items-center mb-4"},[a("div",{class:"flex space-x-2"})],-1)),a("div",we,[C(u,{features:n.features,class:"w-full sm:w-auto mb-4 sm:mb-0"},null,8,["features"]),a("div",Te,[n.fetching&&n.products.length<1?(c(),l("div",ke,o[1]||(o[1]=[a("div",{class:"relative flex justify-center items-center"},[a("div",{class:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"}),a("img",{src:"https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png",class:"rounded-full h-24 w-24"})],-1)]))):n.products.length==0?(c(),l("div",Ie,o[2]||(o[2]=[a("img",{src:ce,alt:"No items found",class:"h-56 w-56"},null,-1),a("p",{class:"pt-6"},"No items found",-1)]))):(c(),l("div",Oe,[(c(!0),l(pe,null,fe(n.products,r=>(c(),A(m,{key:r.id,item:r},null,8,["item"]))),128))])),n.products.length!=0?(c(),l("div",Pe,[C(T,{type:"button",label:"Show More",icon:"pi pi-sync",loading:n.fetchingMore,onClick:o[0]||(o[0]=r=>n.showMoreProducts())},null,8,["loading"])])):he("",!0)])])]),C(h)])}const He=ie(_e,[["render",De],["__scopeId","data-v-1298c9f3"]]);export{He as default};
