import{_ as I}from"./GBAy-wp2.js";import{s as F}from"./xEojK5qa.js";import{_ as W,J as j,x as A,W as N,S as _,R as U,U as V,c as i,a as t,b as x,w as P,t as n,F as C,m as k,y as z,o as d,I as S,d as b}from"./BFuEayTv.js";import"./BQcwvpTO.js";import"./DD3iEoG-.js";import"./DQDyEmLL.js";const B=""+new URL("wish-list.DInbe6H6.png",import.meta.url).href,K={setup(){const l=j(),o=A(),y=N(),r=_(()=>l.wishListItems),T=_(()=>l.cartItems),L=_(()=>l.cartCount),f=_(()=>l.cartTotal),v=_(()=>l.products);_(()=>o.isLoggedIn);const s=U();return V(()=>{l.getWishList()}),{wishList:r,cartItems:T,cartCount:L,cartTotal:f,formattedPrice:e=>{const{$formatPrice:u}=z();return u(e)},removeFromWishlist:async e=>{await l.removeFromWishlist(e.id)},addToCart:async e=>{var u;((u=e.productModel)==null?void 0:u.id)??e.id;try{if(o.isLoggedIn){const h=await l.addToCart(e.productModel,1);console.log(e),await l.removeFromWishlist(e.id)}else{const h=await l.addToCart(e,1);await l.removeFromWishlist(e.id)}y.add({severity:"success",summary:"Product moved to Cart",group:"br",life:3e3})}catch(h){y.add({severity:"error",summary:"Failed to Add Product",detail:h.message,group:"br",life:5e3})}},products:v,randomizedProducts:e=>!Array.isArray(e)||e.length===0?(console.warn("Invalid or empty products array:",e),[]):[...e].sort(()=>.5-Math.random()).slice(0,5),goToPage:e=>{s.push({path:`/products/${e.id}`})}}}},R={class:"p-6 container mx-auto"},D={key:0,class:"flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mb-6"},E={key:1,class:"p-6 container mx-auto"},H={class:"text-2xl font-bold mb-4"},J={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6"},Y={class:"relative"},q=["src","alt"],G={key:0,class:"absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"},O=["onClick"],Q={class:"p-4"},X={class:"text-md font-semibold truncate"},Z={class:"text-md font-light"},$={class:"text-gray-500 mb-2"},tt={class:"text-red-500 font-bold"},st={key:0,class:"line-through text-sm ml-2 text-gray-400"},ot=["onClick"],et={class:"bg-white border rounded-lg p-4"},rt={class:"flex justify-between items-center mb-4"},lt={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},it=["onClick"],dt=["src","alt"],nt={class:"text-sm font-medium"},at={class:"text-primary font-semibold text-lg"},ct={class:"bg-white border rounded-lg p-4 mt-4"},gt={class:"flex justify-between items-center mb-4"},ut={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"},mt=["onClick"],pt=["src","alt"],ht={class:"text-sm font-medium"},_t={class:"text-primary font-semibold text-lg"};function ft(l,o,y,r,T,L){const f=I,v=F;return d(),i("div",R,[r.wishList.length<1?(d(),i("div",D,[o[1]||(o[1]=t("img",{src:B,alt:"Empty Cart",class:"w-20 h-20 mb-4"},null,-1)),o[2]||(o[2]=t("h2",{class:"text-xl font-semibold text-gray-700"}," Your wishlist is empty! ",-1)),o[3]||(o[3]=t("p",{class:"text-gray-500 text-sm mb-4"}," Browse our categories and discover our best deals! ",-1)),x(f,{to:"/dashboard"},{default:P(()=>o[0]||(o[0]=[t("button",{class:"bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"}," Start Shopping ",-1)])),_:1})])):(d(),i("div",E,[t("h2",H,"Wishlist ("+n(r.wishList.length)+")",1),t("div",J,[(d(!0),i(C,null,k(r.wishList,(s,m)=>{var a,c,g,p,e,u,h,M;return d(),i("div",{key:m,class:"bg-white border rounded-lg shadow-sm overflow-hidden"},[t("div",Y,[t("img",{src:(g=(c=(a=s.productModel)==null?void 0:a.images)==null?void 0:c.find(w=>w.isPrimary))==null?void 0:g.uploadUrl,alt:((p=s.productModel)==null?void 0:p.name)||"Product Image",class:"w-full h-40 object-cover"},null,8,q),s.discount?(d(),i("span",G," -"+n(s.discount)+"% ",1)):S("",!0),t("button",{class:"absolute top-2 right-2 rounded-full p-1 hover:text-red-500",onClick:w=>r.removeFromWishlist(s)},o[4]||(o[4]=[t("i",{class:"pi pi-trash text-red-700",style:{"font-size":"1.4rem"}},null,-1)]),8,O)]),t("div",Q,[t("h3",X,[b(n((e=s.productModel)==null?void 0:e.name)+" ",1),o[5]||(o[5]=t("br",null,null,-1)),t("span",Z,n((h=(u=s.productModel)==null?void 0:u.product)==null?void 0:h.name),1)]),t("p",$,[t("span",tt,[o[6]||(o[6]=t("i",{class:"pi pi-wallet"},null,-1)),b(" Ksh "+n(r.formattedPrice((M=s.productModel)==null?void 0:M.price)),1)]),s!=null&&s.originalPrice?(d(),i("span",st," Ksh"+n(s==null?void 0:s.originalPrice),1)):S("",!0)]),t("button",{class:"w-full bg-black text-white py-2 rounded hover:bg-gray-800",onClick:w=>r.addToCart(s)}," Move To Cart ",8,ot)])])}),128))]),o[7]||(o[7]=t("div",null,null,-1))])),t("div",et,[t("div",rt,[o[9]||(o[9]=t("h3",{class:"text-lg font-semibold text-gray-700"},"Recently Viewed",-1)),x(f,{to:"/cart"},{default:P(()=>o[8]||(o[8]=[t("a",{href:"#",class:"text-primary hover:text-orange-600 text-sm font-semibold flex items-center"},[b(" See All "),t("i",{class:"ml-1 pi pi-angle-right"})],-1)])),_:1})]),t("div",lt,[(d(!0),i(C,null,k(r.randomizedProducts(r.products),(s,m)=>{var a,c;return d(),i("div",{key:m,class:"border rounded-lg p-3 cursor-pointer",onClick:g=>r.goToPage(s)},[t("img",{src:(c=(a=s==null?void 0:s.images)==null?void 0:a.find(g=>g.isPrimary))==null?void 0:c.uploadUrl,alt:s.name,class:"w-full h-40 object-cover"},null,8,dt),t("p",nt,n(s.name),1),t("p",at," Ksh "+n(r.formattedPrice(s.price)),1)],8,it)}),128))])]),t("div",ct,[t("div",gt,[o[11]||(o[11]=t("h3",{class:"text-lg font-semibold text-gray-700"},"Top Selling Items",-1)),x(f,{to:"/cart"},{default:P(()=>o[10]||(o[10]=[t("a",{href:"#",class:"text-primary hover:text-orange-600 text-sm font-semibold flex items-center"},[b(" See All "),t("i",{class:"ml-1 pi pi-angle-right"})],-1)])),_:1})]),t("div",ut,[(d(!0),i(C,null,k(r.products,(s,m)=>{var a,c,g;return d(),i("div",{key:m,class:"border rounded-lg p-3 cursor-pointer",onClick:p=>r.goToPage(s)},[t("img",{src:(c=(a=s==null?void 0:s.images)==null?void 0:a.find(p=>p.isPrimary))==null?void 0:c.uploadUrl,alt:((g=s.productModel)==null?void 0:g.name)||s.name,class:"w-full h-40 object-cover"},null,8,pt),t("p",ht,n(s.name),1),t("p",_t," Ksh "+n(r.formattedPrice(s.price)),1)],8,mt)}),128))])]),x(v,{position:"bottom-right",group:"br"})])}const Ct=W(K,[["render",ft]]);export{Ct as default};
