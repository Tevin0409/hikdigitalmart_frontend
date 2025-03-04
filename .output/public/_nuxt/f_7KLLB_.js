import{_ as ee}from"./ByC9thdR.js";import{s as te}from"./BcZGkn25.js";import{F as se,_ as oe,a as re,T as ne,b as ae,c as ce,d as ie}from"./B8i2-sr-.js";import{s as le}from"./oQGiuSsV.js";import{B as de,o as r,c as a,G as K,v as F,H as ue,I as M,s as me,a as e,t as u,_ as J,r as p,x as E,R as H,S as R,W as pe,y as W,J as V,U as q,b as D,w as ge,F as b,m as w,u as B,f as fe,q as L,d as he}from"./DFYqaOGF.js";import{s as G}from"./C6F6Bw1N.js";import"./B_q1d7n8.js";import"./BX-iDZwl.js";import"./BYFMYSQl.js";import"./BBFYb20r.js";import"./BfUdeQbK.js";import"./sRvRbC-H.js";import"./BZTfSWyy.js";import"./7uU3vaoW.js";import"./CibPE6Ef.js";var _e=function(l){var o=l.dt;return`
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
`)},ve={root:function(l){var o=l.props;return["p-tag p-component",{"p-tag-info":o.severity==="info","p-tag-success":o.severity==="success","p-tag-warn":o.severity==="warn","p-tag-danger":o.severity==="danger","p-tag-secondary":o.severity==="secondary","p-tag-contrast":o.severity==="contrast","p-tag-rounded":o.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},ye=de.extend({name:"tag",theme:_e,classes:ve}),xe={name:"BaseTag",extends:le,props:{value:null,severity:null,rounded:Boolean,icon:String},style:ye,provide:function(){return{$pcTag:this,$parentInstance:this}}},Y={name:"Tag",extends:xe,inheritAttrs:!1};function be(i,l,o,s,S,x){return r(),a("span",F({class:i.cx("root")},i.ptmi("root")),[i.$slots.icon?(r(),K(ue(i.$slots.icon),F({key:0,class:i.cx("icon")},i.ptm("icon")),null,16,["class"])):i.icon?(r(),a("span",F({key:1,class:[i.cx("icon"),i.icon]},i.ptm("icon")),null,16)):M("",!0),i.value!=null||i.$slots.default?me(i.$slots,"default",{key:2},function(){return[e("span",F({class:i.cx("label")},i.ptm("label")),u(i.value),17)]}):M("",!0)],16)}Y.render=be;const we={components:{Carousel:G},setup(){const i=p(["Recent","Best Seller","Top","New Arrivals","Top Rating"]),l=E(),o=H(),s=p(null),S=p("Recent"),x=p([]),C=R(()=>v.products),y=()=>{x.value=C.value.sort((c,m)=>m.price-c.price).slice(0,3).map(c=>{var m,g;return{name:c.name,price:c.price,image:((g=(m=c.images)==null?void 0:m[0])==null?void 0:g.uploadUrl)||"",...c}})},t=pe(),{$formatPrice:n}=W(),v=V(),P=c=>`Ksh ${n(c)}`,f=c=>{switch(c){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}},$=R(()=>v.wishListItems),j=c=>!c||!c.id?!1:l.isLoggedIn?$.value.some(g=>g.productModel.id===c.id):$.value.some(g=>g.id===c.id),I=(c,m)=>{c.image=m},z=c=>{o.push({path:`/products/${c.id}`})},O=async c=>{const m=V(),g=E();try{if(g.isLoggedIn){const h=await m.addToWishlist(c.id);await m.getWishList(),t.add({severity:"success",summary:h.data.message,group:"br",life:3e3})}else{const h=JSON.parse(localStorage.getItem("wishlist"))||[],T=h.findIndex(A=>A.id===c.id);T===-1?(h.push(c),localStorage.setItem("wishlist",JSON.stringify(h)),await m.getWishList(),t.add({severity:"success",summary:"Your Wishlist has been saved locally.",group:"br",life:3e3})):(h.splice(T,1),localStorage.setItem("wishlist",JSON.stringify(h)),await m.getWishList(),t.add({severity:"info",summary:"The item has been removed from your local wishlist.",group:"br",life:3e3}))}}catch(h){console.error("Error processing wishlist:",h),t.add({severity:"error",summary:"An error occurred while managing your wishlist.",detail:h.message,group:"br",life:5e3})}};q(()=>{y()});const k=async c=>{console.log(c),E().user;try{const h=await V().addToCart(c,1);t.add({severity:"success",summary:"Product Added to Cart",group:"br",life:3e3}),console.log(h)}catch(g){t.add({severity:"error",summary:"Failed to Add Product",detail:g.message,group:"br",life:5e3})}},U=R(()=>{const c=v.products,m=20;if(c.length===0)return[];const g=[];for(;g.length<m;)g.push(...c);return c.map(T=>{var N;return{image:(N=T.images[0])==null?void 0:N.uploadUrl,images:T.images,...T}})});return{products:C,featuredProducts:U,carousel:s,tabs:i,formattedPrice:P,selectedTab:S,getSeverity:f,selectImage:I,addToFavorites:O,addToCart:k,goToPage:z,isInWishList:j,getTopProducts:y,topProducts:x}}},Ce={class:"flex flex-col md:flex-row w-full p-6"},ke={class:"w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"},Te={class:"mb-4"},Se={class:"relative mx-auto h-"},Pe=["src","alt"],Ie={class:"mb-4 font-medium flex justify-around"},Oe={class:"flex justify-around items-center"},Ne={class:"mt-0 font-semibold text-xl py-4"},$e={class:"py-4"},je={class:"text-gray-600 text-sm text-truncate mb-4"},De={class:"flex justify-around items-center"},ze=["onClick"],Ae=["onClick","loading"],Fe={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.5rem"}},Le={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.5rem",color:"red"}},Re={class:"p-6 w-full md:w-4/5"},We={class:"flex flex-col md:flex-row items-center justify-between"},Me={class:"flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4 border-b"},Ue=["onClick"],Ee={class:"gap-6 mt-4"},Ve={class:"flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0"},Be={class:"flex flex-col space-y-4 w-full md:w-1/3 hover:text-primary transition-colors duration-200"},Ke={class:"flex items-center"},Je=["src"],He=["onClick"],qe={class:"text-lg font-medium"},Ge={class:"text-sm"},Ye={class:"mt-2 hover:text-primary transition-colors duration-200 text-primary font-bold text-lg"},Qe={class:"text-gray-500 mt-1"},Xe={class:"carousel flex items-center mt-2 space-x-4"},Ze={class:"flex items-center space-x-2 overflow-x-auto"},et=["src","alt","onClick"],tt={class:"gap-5 relative left-0 top-0 align-start justify-end"},st=["onClick","loading"],ot={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.3rem"}},rt={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},nt=["onClick"],at={class:"flex-1 h-full"},ct={class:"flex justify-between"},it={class:"gap-5"},lt=["onClick","loading"],dt={key:0,class:"pi pi-heart transition-colors cursor-pointer mr-2",style:{"font-size":"1.3rem"}},ut={key:1,class:"pi pi-heart-fill transition-colors cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},mt=["onClick"],pt=["onClick"],gt={class:"relative"},ft=["src"],ht={class:"text-center items-center pt-4 flex flex-col"},_t={class:"text-lg font-medium"},vt={class:"text-sm"},yt={class:"mt-2 text-primary hover:text-primary transition-colors duration-200 font-bold text-lg"},xt={class:"text-gray-500 mt-1"},bt={class:"flex flex-col space-y-4 w-full md:w-1/3"},wt={class:"flex items-center"},Ct=["src"],kt={class:"ml-4 flex flex-col w-full"},Tt={class:"text-lg font-medium"},St={class:"text-sm"},Pt={class:"mt-2 text-primary hover:text-primary transition-colors duration-200font-bold text-lg"},It={class:""},Ot={class:"text-gray-500 mt-1"},Nt={class:"carousel flex items-center mt-2 space-x-4"},$t={class:"flex items-center space-x-2 overflow-x-auto"},jt=["src","alt","onClick"],Dt={class:"gap-5 relative left-0 top-0 align-start justify-end"},zt=["onClick","loading"],At={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.3rem"}},Ft={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.3rem",color:"red"}},Lt=["onClick"];function Rt(i,l,o,s,S,x){const C=G,y=Y;return r(),a("div",Ce,[e("div",ke,[l[0]||(l[0]=e("div",{class:"text-lg font-semibold mb-2 border-b flex justify-between items-center"},[e("span",{class:"text-gray-500 pl-4"},"Hot Deals")],-1)),e("div",null,[D(C,{d_circular:!0,autoplayInterval:1e4,value:s.topProducts,numVisible:1,numScroll:1,orientation:"horizontal",containerClass:"flex items-center justify-center",showIndicators:!1,showNavigators:!1},{item:ge(t=>[e("div",null,[e("div",Te,[e("div",Se,[e("img",{src:t.data.image,alt:t.data.name,class:"object-cover rounded",style:{"max-width":"100% !important","min-height":"300px !important"}},null,8,Pe)])]),e("div",Ie,u(t.data.name),1),e("div",Oe,[e("div",Ne,u(s.formattedPrice(t.data.price)),1)]),e("p",$e,[(r(!0),a(b,null,w(t.data.features,n=>(r(),a("span",je,u(n.description),1))),256))]),e("p",De,[e("button",{class:"w-3/4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline",onClick:n=>s.addToCart(t.data)}," Add to Cart ",8,ze),e("button",{class:"w-1/4",onClick:n=>s.addToFavorites(t.data),loading:i.loadingWish},[s.isInWishList(t.data)?(r(),a("i",Le)):(r(),a("i",Fe))],8,Ae)])])]),_:1},8,["value"])])]),e("div",Re,[e("div",We,[l[1]||(l[1]=e("h2",{class:"text-lg font-bold mb-2 md:mb-0"},[e("span",{class:"text-red-500"},"Monthly Featured Items")],-1)),e("div",Me,[(r(!0),a(b,null,w(s.tabs,t=>(r(),a("button",{key:t,onClick:n=>s.selectedTab=t,class:B(["px-2 py-1 md:px-4 md:py-2 text-sm font-semibold whitespace-nowrap",s.selectedTab===t?"border-b-2 border-primary text-orange-500":"text-gray-600"])},u(t),11,Ue))),128))])]),e("div",Ee,[e("div",Ve,[e("div",Be,[(r(!0),a(b,null,w(s.featuredProducts.slice(0,2),t=>(r(),a("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"},[e("div",Ke,[e("img",{src:t.image,class:"w-28 h-28 object-cover rounded-md"},null,8,Je),e("div",{onClick:n=>s.goToPage(t),class:"ml-4 flex flex-col w-full"},[e("h3",qe,u(t.product.name),1),e("span",Ge,u(t.name),1),e("div",Ye,[e("span",null,u(s.formattedPrice(t.price)),1)]),e("p",Qe,[e("strong",null,u(t.features.map(n=>n.description).join(", ")),1)]),e("div",Xe,[e("div",Ze,[(r(!0),a(b,null,w(t.images,(n,v)=>(r(),a("img",{key:v,src:n.uploadUrl,alt:"Product "+(v+1),onClick:P=>s.selectImage(t,n.uploadUrl),class:B(["w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500",{"border-orange-500":t.image===n}])},null,10,et))),128))])])],8,He),e("div",tt,[e("button",{onClick:n=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(r(),a("i",rt)):(r(),a("i",ot))],8,st),e("button",{class:"rounded-full transition-colors",onClick:n=>s.addToCart(t)},l[2]||(l[2]=[e("i",{class:"pi pi-shopping-cart text- pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,nt)])])]))),128))]),e("div",at,[(r(!0),a(b,null,w(s.featuredProducts.slice(2,3),t=>(r(),a("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm h-full relative group transition duration-300 cursor-pointer"},[e("div",ct,[D(y,{severity:"warn",value:"New"}),e("div",it,[e("button",{onClick:n=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(r(),a("i",ut)):(r(),a("i",dt))],8,lt),e("button",{class:"rounded-full transition-colors transition-colors",onClick:n=>s.addToCart(t)},l[3]||(l[3]=[e("i",{class:"pi pi-shopping-cart transition-colors text- pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,mt)])]),e("div",{onClick:n=>s.goToPage(t),class:"flex flex-col items-center h-full"},[e("div",gt,[e("img",{src:t.image,class:"object-cover rounded-md w-full h-48"},null,8,ft)]),e("div",ht,[e("h3",_t,u(t.product.name),1),e("span",vt,u(t.name),1),e("div",yt,[e("span",null,u(s.formattedPrice(t.price)),1)]),e("p",xt,[e("strong",null,u(t.features.map(n=>n.description).join(", ")),1)])])],8,pt)]))),128))]),e("div",bt,[(r(!0),a(b,null,w(s.featuredProducts.slice(3,5),t=>(r(),a("div",{key:t.name,class:"border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"},[e("div",wt,[e("img",{src:t.image,class:"w-28 h-28 object-cover rounded-md"},null,8,Ct),e("div",kt,[e("h3",Tt,u(t.product.name),1),e("span",St,u(t.name),1),e("div",Pt,[e("span",It,u(s.formattedPrice(t.price)),1)]),e("p",Ot,[e("strong",null,u(t.features.map(n=>n.description).join(", ")),1)]),e("div",Nt,[e("div",$t,[(r(!0),a(b,null,w(t.images,(n,v)=>(r(),a("img",{key:v,src:n.uploadUrl,alt:"Product "+(v+1),onClick:P=>s.selectImage(t,n.uploadUrl),class:B(["w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500",{"border-orange-500":t.image===n}])},null,10,jt))),128))])])]),e("div",Dt,[e("button",{onClick:n=>s.addToFavorites(t),loading:i.loadingWish},[s.isInWishList(t)?(r(),a("i",Ft)):(r(),a("i",At))],8,zt),e("button",{class:"rounded-full transition-colors",onClick:n=>s.addToCart(t)},l[4]||(l[4]=[e("i",{class:"pi pi-shopping-cart pt-4",style:{"font-size":"1.3rem"}},null,-1)]),8,Lt)])])]))),128))])])])])])}const Wt=J(we,[["render",Rt]]),Mt={name:"Dashboard",components:{FlashCard:se,CategoryCard:oe,ProductCard:re,TopCard:ne,Footer:ae,FilterCard:ce,TopDeal:Wt},props:{searchTerm:{type:String,default:""}},setup(i){fe(()=>i.searchTerm,(d,_)=>{S.value=!0,N()}),q(async()=>{N(),f(),await Q()});const l=H(),o=p(1);p(1);const s=R(()=>[...O.value].sort(()=>Math.random()-.5).slice(0,6)),S=p(!1),x=p(null),C=p([20,80]),y=p(!1),t=p(!1),n=p({days:"00",hours:"00",minutes:"00",seconds:"00"}),v=d=>{l.push({path:`/products/${d.id}`})},P=p(new Date(new Date().getTime()+3*24*60*60*1e3)),f=()=>{const d=new Date().getTime(),_=P.value-d;_>0?n.value={days:Math.floor(_/(1e3*60*60*24)).toString().padStart(2,"0"),hours:Math.floor(_%(1e3*60*60*24)/(1e3*60*60)).toString().padStart(2,"0"),minutes:Math.floor(_%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),seconds:Math.floor(_%(1e3*60)/1e3).toString().padStart(2,"0")}:(clearInterval(this.timer),n.value={days:"00",hours:"00",minutes:"00",seconds:"00"})},$={"HD ANALOGUE CAMERAS AND DVR":"pi pi-video","IP NETWORK CAMERAS AND NVR":"pi pi-wifi","ACCESS CONTROL PRODUCTS":"pi pi-lock","VIDEO INTERCOM PRODUCTS":"pi pi-phone","NETWORK AND CABLES PRODUCTS":"pi pi-sitemap","MONITOR DISPLAY PRODUCTS":"pi pi-desktop","ACCESSORIES PRODUCTS":"pi pi-cog",Phones:"pi pi-mobile"},j=d=>$[d]||"pi pi-question",I=p([]),z=p([]);W();const O=p([]),k=p(0),U=()=>{k.value=(k.value+1)%I.value.length},c=()=>{o.value++,N()},m=()=>{k.value=(k.value-1+I.value.length)%I.value.length},g=d=>{console.log("ca",d)},h=d=>d?new Intl.NumberFormat("en-US",{style:"currency",currency:"Ksh",minimumFractionDigits:0}).format(d):"0",T=d=>{x.value=[d.id],N()},A=d=>{k.value=d},N=async()=>{y.value=!0,t.value=!0;try{const{$axios:d}=W(),_={};i.searchTerm&&(_.searchTerm=i.searchTerm),x.value&&(_.categoryIds=x.value);const Z=await d.get("/product/product-models",{params:{..._,page:o.value,limit:10}});y.value=!1,t.value=!1,O.value=[...O.value,...Z.data.results],console.log(O.value,"getting")}catch(d){console.error("Error fetching products:",d),y.value=!1,t.value=!1}},Q=async()=>{const{$axios:d}=W();try{const _=await d.get("/product/categories",{});z.value=_.data}catch(_){console.error("Error fetching products:",_)}},X=p([{breakpoint:"1400px",numVisible:4,numScroll:4},{breakpoint:"1199px",numVisible:4,numScroll:4},{breakpoint:"767px",numVisible:2,numScroll:2},{breakpoint:"475px",numVisible:1,numScroll:1}]);return{images:I,currentIndex:k,nextSlide:U,prevSlide:m,goToSlide:A,categories:z,products:O,responsiveOptions:X,getItems:g,getSeverity:d=>{switch(d){case"INSTOCK":return"success";case"LOWSTOCK":return"warn";case"OUTOFSTOCK":return"danger";default:return null}},value:C,filter:S,showMoreProducts:c,fetching:y,fetchingMore:t,formatPrice:h,randomizedProducts:s,goToProductPage:v,getIcon:j,getCategoryProducts:T}}},Ut={class:"container mx-auto my-10 pa-10"},Et={class:"p-4 rounded-md"},Vt={class:"flex overflow-x-auto gap-4 p-2"},Bt=["onClick"],Kt={class:"relative"},Jt=["src","alt"],Ht={class:"text-sm font-medium mt-2 truncate"},qt={class:"text-lg font-semibold text-gray-900"},Gt={class:"text-gray-500 text-xs line-through"},Yt={class:"flash-sales mt-5 mx-2 full-screen",style:{"min-height":"900px"}},Qt={class:"flex"},Xt={class:"w-full"},Zt={key:0,class:"text-center mt-6"},es={key:1,class:"flex flex-col items-center justify-center text-center mt-12 text-gray-500"},ts={key:2,class:"grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center"},ss={key:3,class:"flex justify-center py-8"};function os(i,l,o,s,S,x){const C=L("TopCard"),y=L("TopDeal"),t=L("FilterCard"),n=L("ProductCard"),v=te,P=ee;return r(),a("div",Ut,[D(C,{categories:s.categories},null,8,["categories"]),D(y),e("section",null,[e("div",Et,[l[1]||(l[1]=e("div",{class:"flex justify-between items-center mb-4 px-2"},[e("h2",{class:"text-lg font-semibold"},"Top selling items")],-1)),e("div",Vt,[(r(!0),a(b,null,w(s.randomizedProducts,(f,$)=>{var j;return r(),a("div",{key:$,class:"min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2",onClick:I=>s.goToProductPage(f)},[e("div",Kt,[e("img",{src:(j=f.images[0])==null?void 0:j.uploadUrl,alt:f.name,class:"w-full h-36 object-cover rounded-md"},null,8,Jt)]),he(" "+u(f.product.name)+" ",1),e("h3",Ht,u(f.name),1),e("p",qt,u(s.formatPrice(f.price)),1),e("p",Gt,u(f.oldPrice),1)],8,Bt)}),128))])])]),e("section",Yt,[l[4]||(l[4]=e("div",{class:"flex justify-between items-center mb-4"},[e("h2",{class:"text-xl font-bold"},"Explore Our Products"),e("div",{class:"flex space-x-2"},[e("button",{class:"bg-red-500 text-white px-4 py-2"},"View All")])],-1)),e("div",Qt,[s.filter?(r(),K(t,{key:0})):M("",!0),e("div",Xt,[s.fetching&&s.products.length<1?(r(),a("div",Zt,l[2]||(l[2]=[e("div",{class:"relative flex justify-center items-center"},[e("div",{class:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"}),e("img",{src:"https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png",class:"rounded-full h-24 w-24"})],-1)]))):s.products.length==0?(r(),a("div",es,l[3]||(l[3]=[e("img",{src:ie,alt:"No items found",class:"h-56 w-56"},null,-1),e("p",{class:"pt-6"},"No items found",-1)]))):(r(),a("div",ts,[(r(!0),a(b,null,w(s.products,f=>(r(),K(n,{key:f.id,item:f},null,8,["item"]))),128))])),s.products.length!=0?(r(),a("div",ss,[D(v,{type:"button",label:"Show More",icon:"pi pi-sync",loading:s.fetchingMore,onClick:l[0]||(l[0]=f=>s.showMoreProducts())},null,8,["loading"])])):M("",!0)])])]),D(P)])}const xs=J(Mt,[["render",os],["__scopeId","data-v-01a0e4cd"]]);export{xs as default};
