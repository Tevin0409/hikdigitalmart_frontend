import{_ as ee}from"./CmXRJuuU.js";import{s as te}from"./U_QzExVn.js";import{F as se,_ as oe,a as ne,T as re,b as ae,c as ce,d as ie}from"./B6yUpdmV.js";import{s as le}from"./CAcuCSjx.js";import{B as de,o as n,c,G as K,v as A,H as ue,I as R,s as me,a as e,t as u,_ as J,r as p,x as E,R as H,S as L,W as pe,y as W,J as V,U as q,b as z,w as ge,F as b,m as w,u as B,f as fe,q as F,d as he}from"./CsZ7CunZ.js";import{s as G}from"./C-aTEyTQ.js";import"./BLt7F4zv.js";import"./B4Yr8aFt.js";import"./BoBunQJ7.js";import"./CmQp8q_X.js";import"./BoDAmjKk.js";import"./DJgZf2Wl.js";import"./BtLs6yC9.js";import"./BROuvMNx.js";import"./Bcc_xBLs.js";var _e=function(l){var o=l.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(o("tag.primary.background"),`;
    color: `).concat(o("tag.primary.color"),`;
    font-size: `).concat(o("tag.font.size"),`;
    font-weight: `).concat(o("tag.font.weight"),`;
    padding: `).concat(o("tag.padding"),`;
    border-radius: `).concat(o("tag.border.radius"),`;
    gap: `).concat(o("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(o("tag.icon.size"),`;
    width: `).concat(o("tag.icon.size"),`;
    height:`).concat(o("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(o("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(o("tag.success.background"),`;
    color: `).concat(o("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(o("tag.info.background"),`;
    color: `).concat(o("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(o("tag.warn.background"),`;
    color: `).concat(o("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(o("tag.danger.background"),`;
    color: `).concat(o("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(o("tag.secondary.background"),`;
    color: `).concat(o("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(o("tag.contrast.background"),`;
    color: `).concat(o("tag.contrast.color"),`;
}
`)},ve={root:function(l){var o=l.props;return["p-tag p-component",{"p-tag-info":o.severity==="info","p-tag-success":o.severity==="success","p-tag-warn":o.severity==="warn","p-tag-danger":o.severity==="danger","p-tag-secondary":o.severity==="secondary","p-tag-contrast":o.severity==="contrast","p-tag-rounded":o.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},ye=de.extend({name:"tag",theme:_e,classes:ve}),xe={name:"BaseTag",extends:le,props:{value:null,severity:null,rounded:Boolean,icon:String},style:ye,provide:function(){return{$pcTag:this,$parentInstance:this}}},Y={name:"Tag",extends:xe,inheritAttrs:!1};function be(i,l,o,s,T,x){return n(),c("span",A({class:i.cx("root")},i.ptmi("root")),[i.$slots.icon?(n(),K(ue(i.$slots.icon),A({key:0,class:i.cx("icon")},i.ptm("icon")),null,16,["class"])):i.icon?(n(),c("span",A({key:1,class:[i.cx("icon"),i.icon]},i.ptm("icon")),null,16)):R("",!0),i.value!=null||i.$slots.default?me(i.$slots,"default",{key:2},function(){return[e("span",A({class:i.cx("label")},i.ptm("label")),u(i.value),17)]}):R("",!0)],16)}Y.render=be;const we={components:{Carousel:G},setup(){const i=p(["Recent"]),l=E(),o=H(),s=p(null),T=p("Recent"),x=p([]),C=L(()=>v.products),y=()=>{x.value=C.value.sort((r,m)=>m.price-r.price).slice(0,3).map(r=>{var m,g;return{name:r.name,price:r.price,image:((g=(m=r.images)==null?void 0:m[0])==null?void 0:g.uploadUrl)||"",...r}})},t=pe(),{$formatPrice:a}=W(),v=V(),I=r=>`Ksh ${a(r)}`,f=r=>{switch(r){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}},j=L(()=>v.wishListItems),D=r=>!r||!r.id?!1:l.isLoggedIn?j.value.some(g=>g.productModel.id===r.id):j.value.some(g=>g.id===r.id),P=(r,m)=>{r.image=m},M=r=>{o.push({path:`/products/${r.id}`})},O=async r=>{const m=V(),g=E();try{if(g.isLoggedIn){const h=await m.addToWishlist(r.id);await m.getWishList(),t.add({severity:"success",summary:h.data.message,group:"br",life:3e3})}else{const h=JSON.parse(localStorage.getItem("wishlist"))||[],S=h.findIndex(N=>N.id===r.id);if(S===-1){const N={id:r.id,name:r.name,created_at:new Date().toISOString(),userId:"user.id",productModelId:r.id,productModel:{...r}};h.push(N),localStorage.setItem("wishlist",JSON.stringify(h)),await m.getWishList(),t.add({severity:"success",summary:"Your Wishlist has been saved locally.",group:"br",life:3e3})}else h.splice(S,1),localStorage.setItem("wishlist",JSON.stringify(h)),await m.getWishList(),t.add({severity:"info",summary:"The item has been removed from your local wishlist.",group:"br",life:3e3})}}catch(h){console.error("Error processing wishlist:",h),t.add({severity:"error",summary:"An error occurred while managing your wishlist.",detail:h.message,group:"br",life:5e3})}};q(()=>{y()});const k=async r=>{console.log(r),E().user;try{const h=await V().addToCart(r,1);t.add({severity:"success",summary:"Product Added to Cart",group:"br",life:3e3}),console.log(h)}catch(g){t.add({severity:"error",summary:"Failed to Add Product",detail:g.message,group:"br",life:5e3})}},U=L(()=>{const r=v.products,m=20;if(r.length===0)return[];const g=[];for(;g.length<m;)g.push(...r);return r.map(S=>{var $;return{image:($=S.images[0])==null?void 0:$.uploadUrl,images:S.images,...S}})});return{products:C,featuredProducts:U,carousel:s,tabs:i,formattedPrice:I,selectedTab:T,getSeverity:f,selectImage:P,addToFavorites:O,addToCart:k,goToPage:M,isInWishList:D,getTopProducts:y,topProducts:x}}},Ce={class:"flex flex-col md:flex-row w-full p-6"},ke={class:"w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"},Se=["onClick"],Te={class:"relative mx-auto h-"},Ie=["src","alt"],Pe={class:"mb-4 font-medium flex justify-around"},Oe={class:"flex justify-around items-center"},$e={class:"mt-0 font-semibold text-xl py-4"},je={class:"py-4"},De={class:"text-gray-600 text-sm text-truncate mb-4"},Ne={class:"flex justify-around items-center"},ze=["onClick"],Me=["onClick","loading"],Ae={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.5rem"}},Fe={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.5rem",color:"red"}},Le={class:"p-6 w-full md:w-4/5"},We={class:"flex flex-col md:flex-row items-center justify-between"},Re={class:"flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4 border-b"},Ue=["onClick"],Ee={class:"gap-6 mt-4"},Ve={class:"flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0"},Be={class:"flex flex-col space-y-4 w-full md:w-1/3 hover:text-primary transition-colors duration-200"},Ke={class:"flex items-center"},Je=["src"],He=["onClick"],qe={class:"text-lg font-medium"},Ge={class:"text-sm"},Ye={class:"mt-2 hover:text-primary transition-colors duration-200 text-primary font-bold text-lg"},Qe={class:"text-gray-500 mt-1"},Xe={class:"carousel flex items-center mt-2 space-x-4"},Ze={class:"flex items-center space-x-2 overflow-x-auto"},et=["src","alt","onClick"],tt={class:"gap-5 relative left-0 top-0 align-start justify-end"},st=["onClick","loading"],ot={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.3rem"}},nt={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},rt=["onClick"],at={class:"flex-1 h-full"},ct={class:"flex justify-between"},it={class:"gap-5"},lt=["onClick","loading"],dt={key:0,class:"pi pi-heart transition-colors cursor-pointer mr-2",style:{"font-size":"1.3rem"}},ut={key:1,class:"pi pi-heart-fill transition-colors cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},mt=["onClick"],pt=["onClick"],gt={class:"relative"},ft=["src"],ht={class:"text-center items-center pt-4 flex flex-col"},_t={class:"text-lg font-medium"},vt={class:"text-sm"},yt={class:"mt-2 text-primary hover:text-primary transition-colors duration-200 font-bold text-lg"},xt={class:"text-gray-500 mt-1"},bt={class:"flex flex-col space-y-4 w-full md:w-1/3"},wt={class:"flex items-center"},Ct=["src"],kt={class:"ml-4 flex flex-col w-full"},St={class:"text-lg font-medium"},Tt={class:"text-sm"},It={class:"mt-2 text-primary hover:text-primary transition-colors duration-200font-bold text-lg"},Pt={class:""},Ot={class:"text-gray-500 mt-1"},$t={class:"carousel flex items-center mt-2 space-x-4"},jt={class:"flex items-center space-x-2 overflow-x-auto"},Dt=["src","alt","onClick"],Nt={class:"gap-5 relative left-0 top-0 align-start justify-end"},zt=["onClick","loading"],Mt={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.3rem"}},At={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},Ft=["onClick"];function Lt(i,l,o,s,T,x){const C=G,y=Y;return n(),c("div",Ce,[e("div",ke,[l[0]||(l[0]=e("div",{class:"text-lg font-semibold mb-2 border-b flex justify-between items-center"},[e("span",{class:"text-gray-500 pl-4"},"Hot Deals")],-1)),e("div",null,[z(C,{d_circular:!0,autoplayInterval:1e4,value:s.topProducts,numVisible:1,numScroll:1,orientation:"horizontal",containerClass:"flex items-center justify-center",showIndicators:!1,showNavigators:!1},{item:ge(t=>[e("div",null,[e("div",{class:"mb-4",onClick:a=>s.goToPage(t.data)},[e("div",Te,[e("img",{src:t.data.image,alt:t.data.name,class:"object-cover rounded",style:{"max-width":"100% !important","min-height":"300px !important"}},null,8,Ie)])],8,Se),e("div",Pe,u(t.data.name),1),e("div",Oe,[e("div",$e,u(s.formattedPrice(t.data.price)),1)]),e("p",je,[(n(!0),c(b,null,w(t.data.features,a=>(n(),c("span",De,u(a.description),1))),256))]),e("p",Ne,[e("button",{class:"w-3/4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline",onClick:a=>s.addToCart(t.data)}," Add to Cart ",8,ze),e("button",{class:"w-1/4",onClick:a=>s.addToFavorites(t.data),loading:i.loadingWish},[s.isInWishList(t.data)?(n(),c("i",Fe)):(n(),c("i",Ae))],8,Me)])])]),_:1},8,["value"])])]),e("div",Le,[e("div",We,[l[1]||(l[1]=e("h2",{class:"text-lg font-bold mb-2 md:mb-0"},[e("span",{class:"text-red-500"},"Monthly Featured Items")],-1)),e("div",Re,[(n(!0),c(b,null,w(s.tabs,t=>(n(),c("button",{key:t,onClick:a=>s.selectedTab=t,class:B(["px-2 py-1 md:px-4 md:py-2 text-sm font-semibold whitespace-nowrap",s.selectedTab===t?"border-b-2 border-primary text-orange-500":"text-gray-600"])},u(t),11,Ue))),128))])]),e("div",Ee,[e("div",Ve,[e("div",Be,[(n(!0),c(b,null,w(s.featuredProducts.slice(0,2),t=>(n(),c("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"},[e("div",Ke,[e("img",{src:t.image,class:"w-28 h-28 object-cover rounded-md"},null,8,Je),e("div",{onClick:a=>s.goToPage(t),class:"ml-4 flex flex-col w-full"},[e("h3",qe,u(t.product.name),1),e("span",Ge,u(t.name),1),e("div",Ye,[e("span",null,u(s.formattedPrice(t.price)),1)]),e("p",Qe,[e("strong",null,u(t.features.map(a=>a.description).join(", ")),1)]),e("div",Xe,[e("div",Ze,[(n(!0),c(b,null,w(t.images,(a,v)=>(n(),c("img",{key:v,src:a.uploadUrl,alt:"Product "+(v+1),onClick:I=>s.selectImage(t,a.uploadUrl),class:B(["w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500",{"border-orange-500":t.image===a}])},null,10,et))),128))])])],8,He),e("div",tt,[e("button",{onClick:a=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(n(),c("i",nt)):(n(),c("i",ot))],8,st),e("button",{class:"rounded-full transition-colors",onClick:a=>s.addToCart(t)},l[2]||(l[2]=[e("i",{class:"pi pi-shopping-cart text- pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,rt)])])]))),128))]),e("div",at,[(n(!0),c(b,null,w(s.featuredProducts.slice(2,3),t=>(n(),c("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm h-full relative group transition duration-300 cursor-pointer"},[e("div",ct,[z(y,{severity:"warn",value:"New"}),e("div",it,[e("button",{onClick:a=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(n(),c("i",ut)):(n(),c("i",dt))],8,lt),e("button",{class:"rounded-full transition-colors transition-colors",onClick:a=>s.addToCart(t)},l[3]||(l[3]=[e("i",{class:"pi pi-shopping-cart transition-colors text- pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,mt)])]),e("div",{onClick:a=>s.goToPage(t),class:"flex flex-col items-center h-full"},[e("div",gt,[e("img",{src:t.image,class:"object-cover rounded-md w-full h-48"},null,8,ft)]),e("div",ht,[e("h3",_t,u(t.product.name),1),e("span",vt,u(t.name),1),e("div",yt,[e("span",null,u(s.formattedPrice(t.price)),1)]),e("p",xt,[e("strong",null,u(t.features.map(a=>a.description).join(", ")),1)])])],8,pt)]))),128))]),e("div",bt,[(n(!0),c(b,null,w(s.featuredProducts.slice(3,5),t=>(n(),c("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"},[e("div",wt,[e("img",{src:t.image,class:"w-28 h-28 object-cover rounded-md"},null,8,Ct),e("div",kt,[e("h3",St,u(t.product.name),1),e("span",Tt,u(t.name),1),e("div",It,[e("span",Pt,u(s.formattedPrice(t.price)),1)]),e("p",Ot,[e("strong",null,u(t.features.map(a=>a.description).join(", ")),1)]),e("div",$t,[e("div",jt,[(n(!0),c(b,null,w(t.images,(a,v)=>(n(),c("img",{key:v,src:a.uploadUrl,alt:"Product "+(v+1),onClick:I=>s.selectImage(t,a.uploadUrl),class:B(["w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500",{"border-orange-500":t.image===a}])},null,10,Dt))),128))])])]),e("div",Nt,[e("button",{onClick:a=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(n(),c("i",At)):(n(),c("i",Mt))],8,zt),e("button",{class:"rounded-full transition-colors",onClick:a=>s.addToCart(t)},l[4]||(l[4]=[e("i",{class:"pi pi-shopping-cart pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,Ft)])])]))),128))])])])])])}const Wt=J(we,[["render",Lt]]),Rt={name:"Dashboard",components:{FlashCard:se,CategoryCard:oe,ProductCard:ne,TopCard:re,Footer:ae,FilterCard:ce,TopDeal:Wt},props:{searchTerm:{type:String,default:""}},setup(i){fe(()=>i.searchTerm,(d,_)=>{T.value=!0,$()}),q(async()=>{$(),f(),await Q()});const l=H(),o=p(1);p(1);const s=L(()=>[...O.value].sort(()=>Math.random()-.5).slice(0,6)),T=p(!1),x=p(null),C=p([20,80]),y=p(!1),t=p(!1),a=p({days:"00",hours:"00",minutes:"00",seconds:"00"}),v=d=>{l.push({path:`/products/${d.id}`})},I=p(new Date(new Date().getTime()+3*24*60*60*1e3)),f=()=>{const d=new Date().getTime(),_=I.value-d;_>0?a.value={days:Math.floor(_/(1e3*60*60*24)).toString().padStart(2,"0"),hours:Math.floor(_%(1e3*60*60*24)/(1e3*60*60)).toString().padStart(2,"0"),minutes:Math.floor(_%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),seconds:Math.floor(_%(1e3*60)/1e3).toString().padStart(2,"0")}:(clearInterval(this.timer),a.value={days:"00",hours:"00",minutes:"00",seconds:"00"})},j={"HD ANALOGUE CAMERAS AND DVR":"pi pi-video","IP NETWORK CAMERAS AND NVR":"pi pi-wifi","ACCESS CONTROL PRODUCTS":"pi pi-lock","VIDEO INTERCOM PRODUCTS":"pi pi-phone","NETWORK AND CABLES PRODUCTS":"pi pi-sitemap","MONITOR DISPLAY PRODUCTS":"pi pi-desktop","ACCESSORIES PRODUCTS":"pi pi-cog",Phones:"pi pi-mobile"},D=d=>j[d]||"pi pi-question",P=p([]),M=p([]);W();const O=p([]),k=p(0),U=()=>{k.value=(k.value+1)%P.value.length},r=()=>{o.value++,$()},m=()=>{k.value=(k.value-1+P.value.length)%P.value.length},g=d=>{console.log("ca",d)},h=d=>d?new Intl.NumberFormat("en-US",{style:"currency",currency:"Ksh",minimumFractionDigits:0}).format(d):"0",S=d=>{x.value=[d.id],$()},N=d=>{k.value=d},$=async()=>{y.value=!0,t.value=!0;try{const{$axios:d}=W(),_={};i.searchTerm&&(_.searchTerm=i.searchTerm),x.value&&(_.categoryIds=x.value);const Z=await d.get("/product/product-models",{params:{..._,page:o.value,limit:10}});y.value=!1,t.value=!1,O.value=[...O.value,...Z.data.results],console.log(O.value,"getting")}catch(d){console.error("Error fetching products:",d),y.value=!1,t.value=!1}},Q=async()=>{const{$axios:d}=W();try{const _=await d.get("/product/categories",{});M.value=_.data}catch(_){console.error("Error fetching products:",_)}},X=p([{breakpoint:"1400px",numVisible:4,numScroll:4},{breakpoint:"1199px",numVisible:4,numScroll:4},{breakpoint:"767px",numVisible:2,numScroll:2},{breakpoint:"475px",numVisible:1,numScroll:1}]);return{images:P,currentIndex:k,nextSlide:U,prevSlide:m,goToSlide:N,categories:M,products:O,responsiveOptions:X,getItems:g,getSeverity:d=>{switch(d){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}},value:C,filter:T,showMoreProducts:r,fetching:y,fetchingMore:t,formatPrice:h,randomizedProducts:s,goToProductPage:v,getIcon:D,getCategoryProducts:S}}},Ut={class:"container mx-auto my-10 pa-10"},Et={class:"p-4 rounded-md"},Vt={class:"flex overflow-x-auto gap-4 p-2"},Bt=["onClick"],Kt={class:"relative"},Jt=["src","alt"],Ht={class:"text-sm font-medium mt-2 truncate"},qt={class:"text-lg font-semibold text-gray-900"},Gt={class:"text-gray-500 text-xs line-through"},Yt={class:"flash-sales mt-5 mx-2 full-screen",style:{"min-height":"900px"}},Qt={class:"flex"},Xt={class:"w-full"},Zt={key:0,class:"text-center mt-6"},es={key:1,class:"flex flex-col items-center justify-center text-center mt-12 text-gray-500"},ts={key:2,class:"grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center"},ss={key:3,class:"flex justify-center py-8"};function os(i,l,o,s,T,x){const C=F("TopCard"),y=F("TopDeal"),t=F("FilterCard"),a=F("ProductCard"),v=te,I=ee;return n(),c("div",Ut,[z(C,{categories:s.categories},null,8,["categories"]),z(y),e("section",null,[e("div",Et,[l[1]||(l[1]=e("div",{class:"flex justify-between items-center mb-4 px-2"},[e("h2",{class:"text-lg font-semibold"},"Top selling items")],-1)),e("div",Vt,[(n(!0),c(b,null,w(s.randomizedProducts,(f,j)=>{var D;return n(),c("div",{key:j,class:"min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2",onClick:P=>s.goToProductPage(f)},[e("div",Kt,[e("img",{src:(D=f.images[0])==null?void 0:D.uploadUrl,alt:f.name,class:"w-full h-36 object-cover rounded-md"},null,8,Jt)]),he(" "+u(f.product.name)+" ",1),e("h3",Ht,u(f.name),1),e("p",qt,u(s.formatPrice(f.price)),1),e("p",Gt,u(f.oldPrice),1)],8,Bt)}),128))])])]),e("section",Yt,[l[4]||(l[4]=e("div",{class:"flex justify-between items-center mb-4"},[e("h2",{class:"text-xl font-bold"},"Explore Our Products"),e("div",{class:"flex space-x-2"},[e("button",{class:"bg-red-500 text-white px-4 py-2"},"View All")])],-1)),e("div",Qt,[s.filter?(n(),K(t,{key:0})):R("",!0),e("div",Xt,[s.fetching&&s.products.length<1?(n(),c("div",Zt,l[2]||(l[2]=[e("div",{class:"relative flex justify-center items-center"},[e("div",{class:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"}),e("img",{src:"https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png",class:"rounded-full h-24 w-24"})],-1)]))):s.products.length==0?(n(),c("div",es,l[3]||(l[3]=[e("img",{src:ie,alt:"No items found",class:"h-56 w-56"},null,-1),e("p",{class:"pt-6"},"No items found",-1)]))):(n(),c("div",ts,[(n(!0),c(b,null,w(s.products,f=>(n(),K(a,{key:f.id,item:f},null,8,["item"]))),128))])),s.products.length!=0?(n(),c("div",ss,[z(v,{type:"button",label:"Show More",icon:"pi pi-sync",loading:s.fetchingMore,onClick:l[0]||(l[0]=f=>s.showMoreProducts())},null,8,["loading"])])):R("",!0)])])]),z(I)])}const xs=J(Rt,[["render",os],["__scopeId","data-v-01a0e4cd"]]);export{xs as default};
