import{_ as L}from"./Dj_27Dys.js";import{s as U}from"./B29C1APa.js";import{_ as F,J as W,x as j,ax as z,Q as x,R as N,c as a,a as s,b as y,w as P,t as g,F as M,m as k,y as V,o as n,I as T,d as C}from"./dcrsIaZE.js";import"./DrIwKKCV.js";import"./DqxxeYP8.js";import"./B21at0O7.js";import"./BLQ8y9oz.js";const A=""+new URL("wish-list.DInbe6H6.png",import.meta.url).href,B={setup(){const c=W(),o=j(),v=z(),l=x(()=>c.wishListItems),I=x(()=>c.cartItems),S=x(()=>c.cartCount),_=x(()=>c.cartTotal),w=x(()=>c.products);return x(()=>o.isLoggedIn),N(()=>{c.getWishList()}),{wishList:l,cartItems:I,cartCount:S,cartTotal:_,formattedPrice:e=>{const{$formatPrice:r}=V();return r(e)},removeFromWishlist:async e=>{await c.removeFromWishlist(e.id)},addToCart:async e=>{var d;const r=((d=e.productModel)==null?void 0:d.id)??e.id;console.log(r,"productId"),console.log(e,"tes");try{const i=await c.addToCart(e,1),p=await c.addToWishlist(r);v.add({severity:"success",summary:"Product moved to Cart",group:"br",life:3e3})}catch(i){v.add({severity:"error",summary:"Failed to Add Product",detail:i.message,group:"br",life:5e3})}},products:w}}},E={class:"p-6 container mx-auto"},K={key:0,class:"flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mb-6"},R={key:1,class:"p-6 container mx-auto"},D={class:"text-2xl font-bold mb-4"},H={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6"},J={class:"relative"},Q=["src","alt"],Y={key:0,class:"absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"},q=["onClick"],G={class:"p-4"},O={class:"text-md font-semibold truncate"},X={class:"text-sm font-light"},Z={class:"text-gray-500 mb-2"},$={class:"text-red-500 font-bold"},tt={key:0,class:"line-through text-sm ml-2 text-gray-400"},st=["onClick"],ot={class:"bg-white shadow-lg rounded-lg p-4"},et={class:"flex justify-between items-center mb-4"},rt={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},lt=["src","alt"],dt={class:"text-sm font-medium"},it={class:"text-primary font-semibold text-lg"},at={class:"bg-white shadow-lg rounded-lg p-4 mt-4"},nt={class:"flex justify-between items-center mb-4"},ct={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},mt=["src","alt"],gt={class:"text-sm font-medium"},ut={class:"text-primary font-semibold text-lg"};function pt(c,o,v,l,I,S){const _=L,w=U;return n(),a("div",E,[l.wishList.length<1?(n(),a("div",K,[o[1]||(o[1]=s("img",{src:A,alt:"Empty Cart",class:"w-20 h-20 mb-4"},null,-1)),o[2]||(o[2]=s("h2",{class:"text-xl font-semibold text-gray-700"}," Your wishlist is empty! ",-1)),o[3]||(o[3]=s("p",{class:"text-gray-500 text-sm mb-4"}," Browse our categories and discover our best deals! ",-1)),y(_,{to:"/"},{default:P(()=>o[0]||(o[0]=[s("button",{class:"bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"}," Start Shopping ",-1)])),_:1})])):(n(),a("div",R,[s("h2",D,"Wishlist ("+g(l.wishList.length)+")",1),s("div",H,[(n(!0),a(M,null,k(l.wishList,(t,f)=>{var u,e,r,d,i,p,h,m;return n(),a("div",{key:f,class:"bg-white border rounded-lg shadow-sm overflow-hidden"},[s("div",J,[s("img",{src:((e=(u=t.productModel)==null?void 0:u.images.find(b=>b.isPrimary))==null?void 0:e.optimizeUrl)??((d=(r=t.images)==null?void 0:r.find(b=>b.isPrimary))==null?void 0:d.optimizeUrl),alt:((i=t.productModel)==null?void 0:i.name)||"Product Image",class:"w-full h-40 object-cover"},null,8,Q),t.discount?(n(),a("span",Y," -"+g(t.discount)+"% ",1)):T("",!0),s("button",{class:"absolute top-2 right-2 bg-gray-100 text-gray-500 rounded-full p-1 hover:text-red-500",onClick:b=>l.removeFromWishlist(t)},o[4]||(o[4]=[s("i",{class:"pi pi-trash"},null,-1)]),8,q)]),s("div",G,[s("h3",O,[C(g(((p=t.productModel)==null?void 0:p.name)??(t==null?void 0:t.product.name))+" ",1),o[5]||(o[5]=s("br",null,null,-1)),s("span",X,g(((h=t.productModel)==null?void 0:h.name)??(t==null?void 0:t.name)),1)]),s("p",Z,[s("span",$," Ksh "+g(l.formattedPrice(((m=t.productModel)==null?void 0:m.price)??t.price)),1),t!=null&&t.originalPrice?(n(),a("span",tt," Ksh"+g(t==null?void 0:t.originalPrice),1)):T("",!0)]),s("button",{class:"w-full bg-black text-white py-2 rounded hover:bg-gray-800",onClick:b=>l.addToCart(t)}," Move To Cart ",8,st)])])}),128))]),o[6]||(o[6]=s("div",null,null,-1))])),s("div",ot,[s("div",et,[o[8]||(o[8]=s("h3",{class:"text-lg font-semibold text-gray-700"},"Recently Viewed",-1)),y(_,{to:"/cart"},{default:P(()=>o[7]||(o[7]=[s("a",{href:"#",class:"text-primary hover:text-orange-600 text-sm font-semibold flex items-center"},[C(" See All "),s("i",{class:"ml-1 pi pi-angle-right"})],-1)])),_:1})]),s("div",rt,[(n(!0),a(M,null,k(l.cartItems,(t,f)=>{var u,e,r,d,i,p,h;return n(),a("div",{key:f,class:"border rounded-lg p-3"},[s("img",{src:((e=(u=t.productModel)==null?void 0:u.images.find(m=>m.isPrimary))==null?void 0:e.optimizeUrl)??((d=(r=t.images)==null?void 0:r.find(m=>m.isPrimary))==null?void 0:d.optimizeUrl),alt:((i=t.productModel)==null?void 0:i.name)||"Product Image",class:"w-full h-40 object-cover"},null,8,lt),s("p",dt,g(((p=t.productModel)==null?void 0:p.name)??t.name),1),s("p",it," KES "+g(l.formattedPrice(((h=t.productModel)==null?void 0:h.price)??t.price)),1)])}),128))])]),s("div",at,[s("div",nt,[o[10]||(o[10]=s("h3",{class:"text-lg font-semibold text-gray-700"},"Top Selling Items",-1)),y(_,{to:"/cart"},{default:P(()=>o[9]||(o[9]=[s("a",{href:"#",class:"text-primary hover:text-orange-600 text-sm font-semibold flex items-center"},[C(" See All "),s("i",{class:"ml-1 pi pi-angle-right"})],-1)])),_:1})]),s("div",ct,[(n(!0),a(M,null,k(l.cartItems,(t,f)=>{var u,e,r,d,i,p,h;return n(),a("div",{key:f,class:"border rounded-lg p-3"},[s("img",{src:((e=(u=t.productModel)==null?void 0:u.images.find(m=>m.isPrimary))==null?void 0:e.optimizeUrl)??((d=(r=t.images)==null?void 0:r.find(m=>m.isPrimary))==null?void 0:d.optimizeUrl),alt:((i=t.productModel)==null?void 0:i.name)||"Product Image",class:"w-full h-40 object-cover"},null,8,mt),s("p",gt,g(((p=t.productModel)==null?void 0:p.name)??t.name),1),s("p",ut," KES "+g(l.formattedPrice(((h=t.productModel)==null?void 0:h.price)??t.price)),1)])}),128))])]),y(w,{position:"bottom-right",group:"br"})])}const wt=F(B,[["render",pt]]);export{wt as default};
