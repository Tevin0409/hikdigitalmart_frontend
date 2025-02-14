import{s as P}from"./DAigU_0k.js";import{s as T}from"./C06VtzUx.js";import{_ as O,r as h,H as w,G as C,J as q,Q as b,R as A,c as g,a as t,N as m,S as p,n as M,F as I,m as V,d as _,t as n,b as N,o as x}from"./Fo99IELK.js";import"./BYMImhdy.js";import"./BsLrv4kJ.js";import"./pZ8yUwdz.js";import"./CTeCqoQn.js";import"./Dkq-Vh15.js";import"./C4pemyIi.js";const E={setup(){const i=h(!1),{$formatPrice:e}=w(),v=C(),o=q(),y=b(()=>o.cartTotal),a=b(()=>o.cartItems),c=b(()=>v.user),u=r=>e(r),s=async()=>{try{const{$axios:r}=w(),f=await r.get("/product/cart");a.value=f.data.map(d=>({id:d.id,quantity:d.quantity,product:{...d.product,price:100,image:"https://via.placeholder.com/80x80"}}))}catch(r){console.error("Error fetching cart items:",r)}},l=h(""),k=()=>{l.value==="DISCOUNT10"?(a.value.forEach(r=>{r.product.price=r.product.price*.9}),alert("Coupon applied: 10% discount!")):alert("Invalid coupon code.")},S=async()=>{i.value=!0,console.log("cart",a.value);const r=await o.placeOrder();console.log(r.data.id);let f={orderId:r.data.id,amount:1,phoneNumber:c.value.phoneNumber};const d=await o.checkOut(f);console.log(d,"Mpesa"),i.value=!1,toast.add({severity:"success",summary:"Your Order has been placed successfully, Thank you",group:"br",life:3e3})};return A(()=>{s()}),{user:c,cartItems:a,cartTotal:y,coupon:l,applyCoupon:k,placeOrder:S,formattedPrice:u,loading:i}}},U={class:"container mx-auto pt-12"},B={class:"checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8"},L={class:"billing-details flex-1 bg-white p-6 rounded-lg shadow"},D={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},F={class:"form-group"},j={class:"form-group"},G={class:"form-group"},K={class:"form-group"},R={class:"cart-summary bg-white p-6 rounded-lg w-full md:max-w-sm shadow"},z={class:"cart-items space-y-4"},H=["src"],J={class:"flex-1 text-center sm:text-left"},Q={class:"text-sm"},Y={class:"text-gray-600 text-xs"},W={class:"cart-summary-bottom mt-4"},X={class:"flex justify-between text-sm"},Z={class:"text-lg"},$={class:"flex justify-between text-lg font-semibold"},ee={class:"text-lg"},te={class:"payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4"},oe={class:"text-sm font-medium"};function se(i,e,v,o,y,a){const c=T,u=P;return x(),g("div",U,[t("div",B,[t("div",L,[e[10]||(e[10]=t("h2",{class:"text-xl font-semibold mb-4"},"Billing Details",-1)),t("form",D,[t("div",F,[e[5]||(e[5]=t("label",{for:"first-name",class:"block text-sm font-medium mb-1"},"First Name*",-1)),m(t("input",{type:"text",id:"first-name","onUpdate:modelValue":e[0]||(e[0]=s=>o.user.firstName=s),placeholder:"First Name",required:"",class:"w-full p-2 border rounded"},null,512),[[p,o.user.firstName]])]),t("div",j,[e[6]||(e[6]=t("label",{for:"last-name",class:"block text-sm font-medium mb-1"},"Last Name*",-1)),m(t("input",{type:"text",id:"last-name","onUpdate:modelValue":e[1]||(e[1]=s=>o.user.lastName=s),placeholder:"Last Name",required:"",class:"w-full p-2 border rounded"},null,512),[[p,o.user.lastName]])]),e[9]||(e[9]=M('<div class="form-group" data-v-f782bec4><label for="company-name" class="block text-sm font-medium mb-1" data-v-f782bec4>Company Name</label><input type="text" id="company-name" placeholder="Company Name" class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="street-address" class="block text-sm font-medium mb-1" data-v-f782bec4>Street Address*</label><input type="text" id="street-address" placeholder="Street Address" required class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="apartment" class="block text-sm font-medium mb-1" data-v-f782bec4>Apartment, floor, etc. (optional)</label><input type="text" id="apartment" placeholder="Apartment, floor, etc." class="w-full p-2 border rounded" data-v-f782bec4></div><div class="form-group" data-v-f782bec4><label for="city" class="block text-sm font-medium mb-1" data-v-f782bec4>Town/City*</label><input type="text" id="city" placeholder="Town/City" required class="w-full p-2 border rounded" data-v-f782bec4></div>',4)),t("div",G,[e[7]||(e[7]=t("label",{for:"phone",class:"block text-sm font-medium mb-1"},"Phone Number*",-1)),m(t("input",{type:"tel",id:"phone","onUpdate:modelValue":e[2]||(e[2]=s=>o.user.phoneNumber=s),placeholder:"Phone Number",required:"",class:"w-full p-2 border rounded"},null,512),[[p,o.user.phoneNumber]])]),t("div",K,[e[8]||(e[8]=t("label",{for:"email",class:"block text-sm font-medium mb-1"},"Email Address*",-1)),m(t("input",{type:"email",id:"email","onUpdate:modelValue":e[3]||(e[3]=s=>o.user.email=s),placeholder:"Email Address",required:"",class:"w-full p-2 border rounded"},null,512),[[p,o.user.email]])])])]),t("div",R,[e[15]||(e[15]=t("h3",{class:"text-lg font-semibold mb-4"},"Cart Summary",-1)),t("div",z,[(x(!0),g(I,null,V(o.cartItems,s=>{var l;return x(),g("div",{key:s.id,class:"cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3"},[t("img",{src:((l=s.productModel.images[0])==null?void 0:l.optimizeUrl)||"https://via.placeholder.com/80x80",class:"w-16 h-16 object-cover rounded"},null,8,H),t("div",J,[t("p",Q,n(s.productModel.name),1),t("p",Y," Ksh "+n(o.formattedPrice(s.productModel.price*s.quantity)),1)])])}),128))]),t("div",W,[t("p",X,[e[11]||(e[11]=_(" Subtotal ")),t("strong",Z,n(o.formattedPrice(o.cartTotal)),1)]),e[14]||(e[14]=t("hr",{class:"my-2"},null,-1)),t("p",$,[e[12]||(e[12]=_(" Total ")),t("strong",ee,"Ksh "+n(o.formattedPrice(o.cartTotal)),1)]),t("div",te,[e[13]||(e[13]=t("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524",class:"w-16 sm:w-1/4",alt:"M-Pesa"},null,-1)),t("label",oe,n(o.user.phoneNumber),1)]),N(c,{type:"button",class:"place-order-btn w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700",label:"Place Order",loading:o.loading,onClick:e[4]||(e[4]=s=>o.placeOrder())},null,8,["loading"])])])]),N(u,{position:"bottom-right",group:"br"})])}const ue=O(E,[["render",se],["__scopeId","data-v-f782bec4"]]);export{ue as default};
