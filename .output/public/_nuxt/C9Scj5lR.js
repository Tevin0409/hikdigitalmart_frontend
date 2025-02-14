import{_ as N}from"./BGzKA5FQ.js";import{H as v,P as j,J as q,r as B,Q as w,R as E,c as l,a as t,b as k,w as C,t as o,F as I,m as R,o as i,d as $}from"./Fo99IELK.js";const F=""+new URL("empty-cart.Dg7uAmTc.png",import.meta.url).href,K={class:"cart"},L={key:0,class:"flex flex-col items-center justify-center bg-white rounded-lg p-6 mb-6 container mx-auto"},U={key:1,class:"mx-auto container"},V={class:"bg-red-10 rounded-lg p-4"},z={class:"flex justify-between items-center mb-4"},A={class:"text-lg font-semibold text-gray-700"},D={class:"bg-white mx-auto"},Q={class:"bg-white grid grid-cols-12 gap-4"},H={class:"col-span-12 md:col-span-9"},J={class:"flex items-start"},Y=["src"],G={class:"ml-4 flex-grow"},O={class:"text-lg font-medium"},W={class:"text--500 text-sm"},X={class:"text-right"},Z={class:"text-xl font-semibold text-gray-900"},tt={class:"flex items-center justify-between mt-4"},st=["onClick"],et={class:"flex items-center"},ot=["onClick","disabled"],nt={class:"px-4"},at=["onClick"],rt={class:"col-span-12 md:col-span-3"},lt={class:"cart-total rounded-lg"},it={class:"text-gray-600"},ct={class:"text-lg font-bold"},pt={__name:"index",setup(dt){const{$formatPrice:S}=v(),P=j(),u=q();v(),B("");const m=w(()=>u.cartTotal),c=w(()=>u.cartItems),d=n=>S(n),p=(n,s)=>{const r=c.value.find(e=>e.id===n);r&&s>0&&(r.quantity=s)},T=async n=>{await u.removeFromCart(n.id)},M=()=>{P.push("/checkout")};return E(()=>{}),(n,s)=>{const r=N;return i(),l("div",K,[c.value.length<1?(i(),l("div",L,[s[1]||(s[1]=t("img",{src:F,alt:"Empty Cart",class:"w-20 h-20 mb-4"},null,-1)),s[2]||(s[2]=t("h2",{class:"text-xl font-semibold text-gray-700"},"Your cart is empty!",-1)),s[3]||(s[3]=t("p",{class:"text-gray-500 text-sm mb-4"}," Browse our categories and discover our best deals! ",-1)),k(r,{to:"/"},{default:C(()=>s[0]||(s[0]=[t("button",{class:"bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"}," Start Shopping ",-1)])),_:1})])):(i(),l("div",U,[t("div",V,[t("div",z,[t("h3",A," Cart ("+o(c.value.length)+") ",1),k(r,{to:"/cart"},{default:C(()=>s[4]||(s[4]=[t("a",{href:"#",class:"text-primary hover:text-orange-600 text-sm font-semibold flex items-center"},null,-1)])),_:1})]),t("div",D,[t("div",Q,[t("div",H,[(i(!0),l(I,null,R(c.value,e=>{var _,g,x,h,b,f,y;return i(),l("div",{class:"rounded-lg p-4 gap-3 pb-4 mb-2 border",key:e.id},[t("div",J,[t("img",{class:"w-20 h-20 object-contain",src:((g=(_=e.productModel)==null?void 0:_.images.find(a=>a.isPrimary))==null?void 0:g.optimizeUrl)??((h=(x=e.images)==null?void 0:x.find(a=>a.isPrimary))==null?void 0:h.optimizeUrl),alt:"Product Image"},null,8,Y),t("div",G,[t("h2",O,o(((b=e.productModel)==null?void 0:b.name)??e.name),1),t("p",W,o((f=e.productModel.features[0])==null?void 0:f.description),1)]),t("div",X,[t("p",Z," Ksh "+o(d(((y=e.productModel)==null?void 0:y.price)??e.price)),1)])]),t("div",tt,[t("button",{onClick:a=>T(e),class:"text-red-500 flex items-center"},s[5]||(s[5]=[t("span",{class:"mr-2"},"🗑️",-1),$(" Remove ")]),8,st),t("div",et,[t("button",{onClick:a=>p(e.id,e.quantity-1),class:"bg-gray-300 px-3 py-1 rounded-lg",disabled:e.quantity<=1}," - ",8,ot),t("span",nt,o(e.quantity),1),t("button",{onClick:a=>p(e.id,e.quantity+1),class:"bg-primary text-white px-3 py-1 rounded-lg"}," + ",8,at)])])])}),128))]),t("div",rt,[t("div",lt,[s[6]||(s[6]=t("h3",{class:"text-lg font-semibold"},"Cart Total",-1)),t("p",it," Subtotal: KES "+o(d(m.value)),1),s[7]||(s[7]=t("hr",{class:"my-2"},null,-1)),t("p",ct," Total: KES "+o(d(m.value)),1),t("button",{class:"w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-secondary",onClick:M}," Checkout ("+o(d(m.value))+") ",1)])])])])])]))])}}};export{pt as default};
