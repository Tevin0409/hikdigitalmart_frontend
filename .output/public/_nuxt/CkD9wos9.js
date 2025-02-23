import{s as T}from"./B3a3rP6G.js";import{s as S}from"./DdYFUDFT.js";import{_ as I,r as k,y as U,x as V,J as q,R as w,U as E,S as M,c as _,a as o,N as i,V as u,F as A,m as C,d as O,t as m,b as P,o as h}from"./DwO-iRVR.js";import{_ as L}from"./CuGsQDQc.js";import"./C1O91PKi.js";import"./BZv_5Db4.js";import"./CtgpRcHL.js";import"./Dh3RlvJR.js";const j={setup(){const n=k(!1),{$formatPrice:e}=U(),b=V(),r=q(),N=w(()=>r.cartTotal),g=w(()=>r.cartItems),l=w(()=>b.user||{}),y=d=>e(d),p=["firstName","lastName","email","phoneNumber"],s=k(""),c=()=>{s.value==="DISCOUNT10"?(g.value.forEach(d=>{d.product.price=d.product.price*.9}),alert("Coupon applied: 10% discount!")):alert("Invalid coupon code.")},a=E(),f=async()=>{const d=b.isLoggedIn;if(d){if(console.log(d),!l.value||Object.keys(l.value).length===0){a.add({severity:"warn",summary:"Please log in to place an order.",group:"br",life:3e3});return}for(const t of p)if(!l.value[t]){a.add({severity:"warn",summary:`${t} is required.`,group:"br",life:3e3});return}try{n.value=!0;let x={orderId:(await r.placeOrder()).data.id,amount:1,phoneNumber:l.value.phoneNumber};const v=await r.checkOut(x);console.log(v,"Mpesa"),n.value=!1,a.add({severity:"success",summary:"Your Order has been placed successfully, Thank you",group:"br",life:3e3})}catch(t){console.log("Error placing order:",t),n.value=!1,a.add({severity:"error",summary:"Error placing order",detail:t.message,group:"br",life:3e3})}}else{if(!l.value||Object.keys(l.value).length===0){a.add({severity:"warn",summary:"Please Enter your details to place an order.",group:"br",life:3e3});return}for(const t of p)if(!l.value[t]){a.add({severity:"warn",summary:`${t} is required to place an order.`,group:"br",life:3e3});return}try{n.value=!0;let x={orderId:(await r.placeOrderAnonymous(l.value)).data.id,amount:1,phoneNumber:l.value.phoneNumber};const v=await r.checkOut(x);console.log(v,"Mpesa"),n.value=!1,a.add({severity:"success",summary:"Your Order has been placed successfully, Thank you",group:"br",life:3e3})}catch(t){console.log("Error placing order:",t),n.value=!1,a.add({severity:"error",summary:"Error placing order",detail:t.message,group:"br",life:3e3})}}};return M(()=>{}),{user:l,cartItems:g,cartTotal:N,coupon:s,applyCoupon:c,placeOrder:f,formattedPrice:y,loading:n,defaultImage:L}}},B={class:"container mx-auto pt-12"},F={class:"checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8"},D={class:"billing-details flex-1 bg-white p-6 rounded-lg shadow"},R={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},G={class:"form-group"},K={class:"form-group"},Y={class:"form-group"},z={class:"form-group"},J={class:"form-group"},H={class:"form-group"},Q={class:"form-group"},W={class:"form-group"},X={class:"cart-summary bg-white p-6 rounded-lg w-full md:max-w-sm shadow"},Z={class:"cart-items space-y-4"},$=["src"],ee={class:"flex-1 text-center sm:text-left"},oe={class:"text-sm"},se={class:"flex justify-between"},re={class:"text-gray-600 text-xs"},te={class:"text-sm"},le={class:"cart-summary-bottom mt-4"},ae={class:"flex justify-between text-sm"},de={class:"text-lg"},ne={class:"flex justify-between text-lg font-semibold"},ie={class:"text-lg"},ue={class:"payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4"},me={class:"text-sm font-medium"};function pe(n,e,b,r,N,g){var p;const l=S,y=T;return h(),_("div",B,[o("div",F,[o("div",D,[e[17]||(e[17]=o("h2",{class:"text-xl font-semibold mb-4"},"Billing Details",-1)),o("form",R,[o("div",G,[e[9]||(e[9]=o("label",{for:"first-name",class:"block text-sm font-medium mb-1"},"First Name*",-1)),i(o("input",{type:"text",id:"first-name","onUpdate:modelValue":e[0]||(e[0]=s=>r.user.firstName=s),placeholder:"First Name",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.firstName]])]),o("div",K,[e[10]||(e[10]=o("label",{for:"last-name",class:"block text-sm font-medium mb-1"},"Last Name*",-1)),i(o("input",{type:"text",id:"last-name","onUpdate:modelValue":e[1]||(e[1]=s=>r.user.lastName=s),placeholder:"Last Name",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.lastName]])]),o("div",Y,[e[11]||(e[11]=o("label",{for:"company-name",class:"block text-sm font-medium mb-1"},"Company Name",-1)),i(o("input",{type:"text",id:"company-name","onUpdate:modelValue":e[2]||(e[2]=s=>r.user.company_name=s),placeholder:"Company Name",class:"w-full p-2 border rounded"},null,512),[[u,r.user.company_name]])]),o("div",z,[e[12]||(e[12]=o("label",{for:"street-address",class:"block text-sm font-medium mb-1"},"Street Address*",-1)),i(o("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=s=>r.user.street_address=s),id:"street-address",placeholder:"Street Address",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.street_address]])]),o("div",J,[e[13]||(e[13]=o("label",{for:"apartment",class:"block text-sm font-medium mb-1"},"Apartment, floor, etc. (optional)",-1)),i(o("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=s=>r.user.apartment=s),id:"apartment",placeholder:"Apartment, floor, etc.",class:"w-full p-2 border rounded"},null,512),[[u,r.user.apartment]])]),o("div",H,[e[14]||(e[14]=o("label",{for:"city",class:"block text-sm font-medium mb-1"},"Town/City*",-1)),i(o("input",{type:"text",id:"city","onUpdate:modelValue":e[5]||(e[5]=s=>r.user.town=s),placeholder:"Town/City",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.town]])]),o("div",Q,[e[15]||(e[15]=o("label",{for:"phone",class:"block text-sm font-medium mb-1"},"Phone Number*",-1)),i(o("input",{type:"tel",id:"phone","onUpdate:modelValue":e[6]||(e[6]=s=>r.user.phoneNumber=s),placeholder:"Phone Number",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.phoneNumber]])]),o("div",W,[e[16]||(e[16]=o("label",{for:"email",class:"block text-sm font-medium mb-1"},"Email Address*",-1)),i(o("input",{type:"email",id:"email","onUpdate:modelValue":e[7]||(e[7]=s=>r.user.email=s),placeholder:"Email Address",required:"",class:"w-full p-2 border rounded"},null,512),[[u,r.user.email]])])])]),o("div",X,[e[22]||(e[22]=o("h3",{class:"text-lg font-semibold mb-4"},"Cart Summary",-1)),o("div",Z,[(h(!0),_(A,null,C(r.cartItems,s=>{var c,a,f,d,t;return h(),_("div",{key:s.id,class:"cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3"},[o("img",{src:((a=(c=s==null?void 0:s.productModel)==null?void 0:c.images[0])==null?void 0:a.optimizeUrl)??r.defaultImage,class:"w-16 h-16 object-cover rounded"},null,8,$),o("div",ee,[o("p",oe,m(((f=s==null?void 0:s.productModel)==null?void 0:f.name)??s.name),1),o("div",se,[o("p",re," Ksh "+m(r.formattedPrice(((d=s.productModel)==null?void 0:d.price)??s.price)),1),o("p",te,m(((t=s==null?void 0:s.productModel)==null?void 0:t.quantity)??s.quantity),1)])])])}),128))]),o("div",le,[o("p",ae,[e[18]||(e[18]=O(" Subtotal ")),o("strong",de,m(r.formattedPrice(r.cartTotal)),1)]),e[21]||(e[21]=o("hr",{class:"my-2"},null,-1)),o("p",ne,[e[19]||(e[19]=O(" Total ")),o("strong",ie,"Ksh "+m(r.formattedPrice(r.cartTotal)),1)]),o("div",ue,[e[20]||(e[20]=o("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524",class:"w-16 sm:w-1/4",alt:"M-Pesa"},null,-1)),o("label",me,m((p=r.user)==null?void 0:p.phoneNumber),1)]),P(l,{type:"button",class:"place-order-btn w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700",label:"Place Order",loading:r.loading,onClick:e[8]||(e[8]=s=>r.placeOrder())},null,8,["loading"])])])]),P(y,{position:"top-right",group:"br"})])}const _e=I(j,[["render",pe],["__scopeId","data-v-bbae7466"]]);export{_e as default};
