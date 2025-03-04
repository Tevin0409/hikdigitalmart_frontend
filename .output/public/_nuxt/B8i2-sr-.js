import{_ as N,o as r,c as n,n as k,a as t,t as h,W as U,R as W,x as T,y as E,J as R,S as B,U as H,d as O,F as y,m as w,u as A,b as S,B as z,v as G,r as $,a5 as f,I as M,G as X,w as I}from"./DFYqaOGF.js";import{s as Q}from"./BYFMYSQl.js";import{s as J}from"./C6F6Bw1N.js";import{s as K}from"./oQGiuSsV.js";import{_ as q}from"./B_q1d7n8.js";import{s as Y}from"./BfUdeQbK.js";import{s as Z}from"./sRvRbC-H.js";const tt={},et={class:""};function st(s,e){return r(),n("div",et,e[0]||(e[0]=[k('<div class="border p-4"><img src="https://www.hikvisionshopkenya.co.ke/wp-content/uploads/2024/01/Hikvision-2-MP-Fixed-Mini-Bullet-Camera-%E2%80%93-DS-2CE16D0T-EXIPF3.6mm.jpg" width="100px" alt=""><p class="font-bold">HAVIT HV-G92 Gamepad</p><p class="text-red-500">$120</p><button class="bg-black text-white w-full py-2">Add to Cart</button></div>',1)]))}const ae=N(tt,[["render",st]]),at="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-cctv'%3e%3cpath%20d='M16.75%2012h3.632a1%201%200%200%201%20.894%201.447l-2.034%204.069a1%201%200%200%201-1.708.134l-2.124-2.97'/%3e%3cpath%20d='M17.106%209.053a1%201%200%200%201%20.447%201.341l-3.106%206.211a1%201%200%200%201-1.342.447L3.61%2012.3a2.92%202.92%200%200%201-1.3-3.91L3.69%205.6a2.92%202.92%200%200%201%203.92-1.3z'/%3e%3cpath%20d='M2%2019h3.76a2%202%200%200%200%201.8-1.1L9%2015'/%3e%3cpath%20d='M2%2021v-4'/%3e%3cpath%20d='M7%209h.01'/%3e%3c/svg%3e",ot={class:"cursor-pointer hover:text-red-500 pt-4"},rt={class:"border p-4 flex items-center space-x-2"},it={class:"font-bold"},oe={__name:"CategoryCard",props:{item:{type:Object,required:!0}},setup(s){return(e,a)=>(r(),n("div",ot,[t("div",rt,[a[0]||(a[0]=t("img",{src:at,alt:"Camera Icon",class:"w-6 h-6"},null,-1)),t("p",it,h(s.item.name),1)])]))}},nt={class:"border-r border-gray-200 rounded-lg p-4 text-center bg-white shadow-md relative group"},lt=["src"],dt={class:"text-sm font-regular truncate hover:text-primary transition-colors duration-200 cursor-pointer"},ct={class:"font-medium text-sm"},pt={class:"flex justify-center mt-"},ut={class:"text-gray-500 ml-2"},mt={class:"flex items-center mt-2"},ht={class:"flex text-yellow-400"},gt={class:"ml-2 text-gray-500 text-sm text-center"},vt={class:"text-red-500 font-semibold text-center"},bt={class:"absolute top-4 right-4 flex flex-col space-y-2 opacity-0group-hover:opacity-100 transition-opacity"},xt=["loading"],ft={key:0,class:"pi pi-heart cursor-pointer text-gray-600",style:{"font-size":"1.2rem"}},yt={key:1,class:"pi pi-heart-fill cursor-pointer text-gray-600",style:{"font-size":"1.2rem",color:"red"}},re={__name:"ProductCard",props:{item:{type:Object,required:!0}},emits:["wishlist-updated"],setup(s,{emit:e}){const a=U(),v=W(),p=T(),{$axios:d}=E(),{$formatPrice:_}=E(),g=R(),b=i=>_(i),x=B(()=>g.wishListItems),L=async()=>{try{if(await C()){const o=await d.get("/product/wishlist");x.value=o.data.map(u=>u.productId)}else{const o=JSON.parse(localStorage.getItem("wishlist"))||[];x.value=o}}catch{}},c=i=>!i||!i.id?!1:p.isLoggedIn?x.value.some(u=>u.productModel.id===i.id):x.value.some(u=>u.id===i.id),C=async()=>!!p.isLoggedIn,V=async i=>{const o=R(),u=T();try{if(u.isLoggedIn){const l=await o.addToWishlist(i.id);await o.getWishList(),a.add({severity:"success",summary:l.data.message,group:"br",life:3e3})}else{const l=JSON.parse(localStorage.getItem("wishlist"))||[],m=l.findIndex(P=>P.id===i.id);if(m===-1){const P={id:i.id,name:i.name,created_at:new Date().toISOString(),userId:"user.id",productModelId:i.id,productModel:{...i}};l.push(P),localStorage.setItem("wishlist",JSON.stringify(l)),await o.getWishList(),a.add({severity:"success",summary:"Your Wishlist has been saved locally.",group:"br",life:3e3})}else l.splice(m,1),localStorage.setItem("wishlist",JSON.stringify(l)),await o.getWishList(),a.add({severity:"info",summary:"The item has been removed from your local wishlist.",group:"br",life:3e3})}}catch(l){console.error("Error processing wishlist:",l),a.add({severity:"error",summary:"An error occurred while managing your wishlist.",detail:l.message,group:"br",life:5e3})}},j=async i=>{T().user;try{const l=await R().addToCart(i,1);a.add({severity:"success",summary:"Product Added to Cart",group:"br",life:3e3}),console.log(l)}catch(u){a.add({severity:"error",summary:"Failed to Add Product",detail:u.message,group:"br",life:5e3})}},F=i=>{v.push({path:`/products/${i.id}`})};return H(()=>{L(),C()}),(i,o)=>{var l;const u=Q;return r(),n("div",nt,[t("img",{src:(l=s.item.images[0])==null?void 0:l.uploadUrl,class:"h-32 mx-auto mb-2 transition-transform group-hover:scale-105",alt:"Product Image"},null,8,lt),t("div",{class:"flex flex-col text-center p-2 hover:text-primary transition-colors duration-200",onClick:o[0]||(o[0]=m=>F(s.item))},[t("h3",dt,[O(h(s.item.product.name)+" ",1),o[3]||(o[3]=t("br",null,null,-1)),t("span",ct," ("+h(s.item.name)+")",1)]),t("div",pt,[(r(),n(y,null,w(5,m=>t("span",{key:m,class:"text-yellow-400"},[t("i",{class:A({"pi pi-star-fill":m<=s.item.rating,"pi pi-star":m>s.item.rating})},null,2)])),64)),t("span",ut,[t("div",mt,[t("div",ht,[(r(),n(y,null,w(5,m=>t("svg",{key:m,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",stroke:"none",class:"w-4 h-4"},o[4]||(o[4]=[t("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"},null,-1)]))),64))]),t("p",gt," ("+h(s.item.reviews)+" reviews) ",1)])])]),t("p",vt," Ksh "+h(b(s.item.price)),1)]),t("div",bt,[t("button",{onClick:o[1]||(o[1]=m=>j(s.item)),class:"p-2 rounded-full"},o[5]||(o[5]=[t("i",{class:"pi pi-shopping-cart text-gray-600",style:{"font-size":"1.2rem"}},null,-1)])),t("button",{onClick:o[2]||(o[2]=m=>V(s.item)),loading:i.loadingWish},[c(s.item)?(r(),n("i",yt)):(r(),n("i",ft))],8,xt)]),S(u,{position:"bottom-right",group:"br"})])}}};var wt=function(e){var a=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(a("skeleton.background"),`;
    border-radius: `).concat(a("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(a("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},_t={root:{position:"relative"}},kt={root:function(e){var a=e.props;return["p-skeleton p-component",{"p-skeleton-circle":a.shape==="circle","p-skeleton-animation-none":a.animation==="none"}]}},St=z.extend({name:"skeleton",theme:wt,classes:kt,inlineStyles:_t}),Ct={name:"BaseSkeleton",extends:K,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:St,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},D={name:"Skeleton",extends:Ct,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function $t(s,e,a,v,p,d){return r(),n("div",G({class:s.cx("root"),style:[s.sx("root"),d.containerStyle],"aria-hidden":"true"},s.ptmi("root")),null,16)}D.render=$t;const At={class:"flex gap-6 p-4"},It={class:"w-1/5 bg-white shadow p-4 rounded-lg relative h-32 sm:h-40 md:h-80 xl:h-80 hidden lg:block"},Lt={key:0,class:"space-y-2"},Pt=["onMouseover"],Tt={class:"text-xs truncate"},Rt={key:1,class:"text-gray-50 text-xs text-center pt-3"},Nt={class:"flex-1 bg-white shadow rounded-lg relative w-full h-32 sm:h-40 md:h-80 xl:h-80"},Ot={class:"flex items-center gap-6 relative"},Et={key:0,class:"absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 rounded w-full h-32 sm:h-40 md:h-80 xl:h-80 p-4"},Mt={class:"flex items-center mb-4"},Dt={class:"ml-3"},Vt={class:"space-y-2 text-lg text-center"},jt=["src","alt"],Ft={__name:"TopCard1",props:["categories"],setup(s){const e=$([]),a=$([{src:"https://www.hikvision.com/content/dam/hikvision/usa/newsroom/migrate-assets/Hikvision-s-4K-Ultra-HD-Cameras-Enhance-Surveillance-Video-with-High-Resolution-Quality-and-Exceptional-Features-0.jpg",alt:"Surveillance Camera 1"},{src:"https://www.hikvision.com/content/hikvision/us-en/newsroom/blog/2023/12/hikvision-in-black/_jcr_content/root/responsivegrid/img_0_copy.coreimg.100.1280.jpeg/1703703161523/blog-december-27.jpeg",alt:"Surveillance Camera 2"},{src:"https://siteexclusive.ae/wp-content/uploads/2021/07/Hikvision-4.jpg",alt:"Surveillance Camera 3"}]),v={"HD ANALOGUE CAMERAS AND DVR":"pi pi-video","IP NETWORK CAMERAS AND NVR":"pi pi-wifi","ACCESS CONTROL PRODUCTS":"pi pi-lock","VIDEO INTERCOM PRODUCTS":"pi pi-phone","NETWORK AND CABLES PRODUCTS":"pi pi-sitemap","MONITOR DISPLAY PRODUCTS":"pi pi-desktop","ACCESSORIES PRODUCTS":"pi pi-cog",Phones:"pi pi-mobile"},p=$(""),d=g=>v[g]||"pi pi-question",_=async g=>{};return(g,b)=>{const x=D,L=J;return r(),n("div",At,[t("div",It,[s.categories.length?(r(),n("ul",Lt,[(r(!0),n(y,null,w(s.categories,c=>(r(),n("li",{class:"flex items-center gap-2 pt-3 hover:text-primary cursor-pointer font-regular",key:c.name,onMouseover:C=>(_(),p.value=c.name),onMouseleave:b[0]||(b[0]=C=>p.value="")},[t("i",{class:A(d(c.name))},null,2),t("span",Tt,h(c.name),1)],40,Pt))),128))])):(r(),n("p",Rt,[(r(),n(y,null,w(9,c=>S(x,{class:"mb-2 p-3"})),64))]))]),t("div",Nt,[t("div",Ot,[f(p)?(r(),n("div",Et,[t("div",Mt,[t("i",{class:A(d(f(p)))},null,2),t("span",Dt,h(f(p)),1),t("ul",Vt,[(r(!0),n(y,null,w(f(e),c=>(r(),n("li",{key:c.id,class:"hover:underlinetransition"},h(c.name),1))),128))])])])):M("",!0),f(p)?M("",!0):(r(),X(L,{key:1,verticalViewPortHeight:200,value:f(a),numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",autoplayInterval:"3000",class:"rounded-lg shadow-lg w-full"},{item:I(c=>[t("img",{src:c.data.src,alt:c.data.alt,class:"rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80"},null,8,jt)]),_:1},8,["value"]))])]),b[1]||(b[1]=k('<div class="w-1/5 space-y-4 hidden lg:block h-32 lg:h-80 xl:h-80" data-v-a2a38b9d><div class="bg-white shadow p-4 rounded-lg" data-v-a2a38b9d><h4 class="text-primary font-bold" data-v-a2a38b9d>HELP CENTER</h4><p class="text-gray-600 text-sm" data-v-a2a38b9d>Guide to Customer Care</p><h4 class="text-primary font-bold" data-v-a2a38b9d>HOT DEALS</h4><p class="text-gray-600 text-sm" data-v-a2a38b9d>Updated Daily</p></div><div class="bg-primary text-white text-center p-6 rounded-lg" data-v-a2a38b9d><p class="font-bold text-lg" data-v-a2a38b9d>CALL OR WHATSAPP</p><p class="text-2xl font-bold" data-v-a2a38b9d>+254 727 909 060</p><p class="text-sm" data-v-a2a38b9d>TO ORDER</p></div></div>',1))])}}},ie=N(Ft,[["__scopeId","data-v-a2a38b9d"]]),Ut={},Wt={class:"bg-black text-white py-10 mt-10"},Bt={class:"mx-auto px-4"},Ht={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"},zt={class:"space-y-2"};function Gt(s,e){const a=q;return r(),n("footer",Wt,[t("div",Bt,[t("div",Ht,[e[6]||(e[6]=k('<div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Secure Group</h2><p class="mb-2" data-v-b837781b>Subscribe</p><p class="text-gray-400 text-sm mb-4" data-v-b837781b>Get 10% off your first order</p><div class="flex items-center" data-v-b837781b><input type="email" placeholder="Enter your email" class="flex-1 p-2 rounded-l-lg border-0 text-black" data-v-b837781b><button class="bg-gray-600 p-2 rounded-r-lg hover:bg-gray-800" data-v-b837781b> ➤ </button></div></div><div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Support</h2><p class="text-gray-400 text-sm mb-2" data-v-b837781b>P.O Box, Nairobi.</p><p class="text-gray-400 text-sm mb-2" data-v-b837781b>securegroup@secure.org.com</p><p class="text-gray-400 text-sm" data-v-b837781b>+254-712-345-678</p></div>',2)),t("div",null,[e[5]||(e[5]=t("h2",{class:"text-lg font-bold mb-4"},"Account",-1)),t("ul",zt,[e[1]||(e[1]=t("li",null,[t("a",{href:"#",class:"text-gray-400 hover:text-white"},"My Account")],-1)),t("li",null,[S(a,{to:"/auth",class:"text-gray-400 hover:text-white"},{default:I(()=>e[0]||(e[0]=[O("Login / Register")])),_:1})]),e[2]||(e[2]=t("li",null,[t("a",{href:"#",class:"text-gray-400 hover:text-white"},"Cart")],-1)),e[3]||(e[3]=t("li",null,[t("a",{href:"#",class:"text-gray-400 hover:text-white"},"Wishlist")],-1)),e[4]||(e[4]=t("li",null,[t("a",{href:"#",class:"text-gray-400 hover:text-white"},"Shop")],-1))])]),e[7]||(e[7]=k('<div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Quick Link</h2><ul class="space-y-2" data-v-b837781b><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Privacy Policy</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Terms Of Use</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>FAQ</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Contact</a></li></ul></div>',1))]),e[8]||(e[8]=k('<div class="mt-10 flex flex-col sm:flex-row justify-between items-center" data-v-b837781b><div class="flex items-center space-x-6" data-v-b837781b><div data-v-b837781b><p class="text-sm text-gray-400" data-v-b837781b>Save $3 With App New User Only</p><div class="flex space-x-2" data-v-b837781b><img src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" alt="QR Code" class="h-20 w-20" data-v-b837781b><div class="flex flex-col space-y-2" data-v-b837781b><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10" data-v-b837781b><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&amp;s" alt="App Store" class="h-10" data-v-b837781b></div></div></div></div><div class="mt-6 sm:mt-0 flex space-x-4" data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>s</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>e</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>c</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>u</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>r</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>e</a></div></div>',1))])])}const ne=N(Ut,[["render",Gt],["__scopeId","data-v-b837781b"]]),Xt={class:"w-1/4 px-4"},Qt={class:"space-y-2"},Jt=["for"],le={__name:"FilterCard",props:{features:{type:Array,default:[]}},setup(s){return $([{label:"Resolution",type:"checkbox",options:["720p","1080p","4K"],selected:[]},{label:"Price",type:"range",range:{values:[100,500]}},{label:"Special Features",type:"checkbox",options:["Night Vision","Motion Detection","Two-way Audio","Face Detection","Waterproof","Pan-Tilt","Face Recognition","Built-in Siren","One-way Audio","Human Motion Tracking","Sound Detection","Vandal-proof","Finger Recognition","People Counting","Temperature Measurement"],selected:[]},{label:"Type",type:"checkbox",options:["IP Camera","Dome Camera","Bullet Camera","Analog Camera","PTZ Camera"],selected:[]}]),(e,a)=>{const v=Z,p=Y;return r(),n("div",Xt,[S(p,null,{title:I(()=>a[0]||(a[0]=[O("Apply Filters")])),content:I(()=>[t("div",Qt,[(r(!0),n(y,null,w(s.features,(d,_)=>(r(),n("div",{key:_,class:"flex items-center"},[S(v,{modelValue:d.value,"onUpdate:modelValue":g=>d.value=g,value:d.description,class:"mr-2"},null,8,["modelValue","onUpdate:modelValue","value"]),t("label",{for:d.description,class:A({"text-primary font-bold":d.selected,"text-gray-700":!d.selected})},h(d.description),11,Jt)]))),128))])]),_:1})])}}},de=""+new URL("empty.OjLzVIHN.jpg",import.meta.url).href;export{ae as F,ie as T,oe as _,re as a,ne as b,le as c,de as d};
