import{B as $,a9 as P,L as _,K as E,ax as B,aj as M,v as m,a1 as z,o as l,c as d,a as o,F as y,m as I,N as f,G as T,u as k,H as N,I as h,t as u,_ as S,x,y as g,J as F,z as V,V as w,d as U,b as L,w as K,r as A,R as j}from"./DwO-iRVR.js";import{R as W}from"./Dh3RlvJR.js";import{s as R}from"./BZv_5Db4.js";import{s as G}from"./B3a3rP6G.js";import{_ as H}from"./CKFdUZxC.js";import"./C1O91PKi.js";import"./CtgpRcHL.js";var q=function(e){var t=e.dt;return`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: `.concat(t("tabmenu.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(t("tabmenu.tablist.border.color"),`;
    border-width: `).concat(t("tabmenu.tablist.border.width"),`;
    position: relative;
}

.p-tabmenu-item-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: `).concat(t("tabmenu.item.background"),`;
    border-style: solid;
    border-width: `).concat(t("tabmenu.item.border.width"),`;
    border-color: `).concat(t("tabmenu.item.border.color"),`;
    color: `).concat(t("tabmenu.item.color"),`;
    padding: `).concat(t("tabmenu.item.padding"),`;
    font-weight: `).concat(t("tabmenu.item.font.weight"),`;
    transition: background `).concat(t("tabmenu.transition.duration"),", border-color ").concat(t("tabmenu.transition.duration"),", color ").concat(t("tabmenu.transition.duration"),", outline-color ").concat(t("tabmenu.transition.duration"),", box-shadow ").concat(t("tabmenu.transition.duration"),`;
    margin: `).concat(t("tabmenu.item.margin"),`;
    outline-color: transparent;
    gap: `).concat(t("tabmenu.item.gap"),`;
}

.p-tabmenu-item-link:focus-visible {
    z-index: 1;
    box-shadow: `).concat(t("tabmenu.item.focus.ring.shadow"),`;
    outline: `).concat(t("tabmenu.item.focus.ring.width")," ").concat(t("tabmenu.item.focus.ring.style")," ").concat(t("tabmenu.item.focus.ring.color"),`;
    outline-offset: `).concat(t("tabmenu.item.focus.ring.offset"),`;
}

.p-tabmenu-item-icon {
    color: `).concat(t("tabmenu.item.icon.color"),`;
    transition: background `).concat(t("tabmenu.transition.duration"),", border-color ").concat(t("tabmenu.transition.duration"),", color ").concat(t("tabmenu.transition.duration"),", outline-color ").concat(t("tabmenu.transition.duration"),", box-shadow ").concat(t("tabmenu.transition.duration"),`;
}

.p-tabmenu-item-label {
    line-height: 1;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
    background: `).concat(t("tabmenu.item.hover.background"),`;
    border-color: `).concat(t("tabmenu.item.hover.border.color"),`;
    color: `).concat(t("tabmenu.item.hover.color"),`;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
    color: `).concat(t("tabmenu.item.icon.hover.color"),`;
}

.p-tabmenu-item-active .p-tabmenu-item-link {
    background: `).concat(t("tabmenu.item.active.background"),`;
    border-color: `).concat(t("tabmenu.item.active.border.color"),`;
    color: `).concat(t("tabmenu.item.active.color"),`;
}

.p-tabmenu-item-active .p-tabmenu-item-icon {
    color: `).concat(t("tabmenu.item.icon.active.color"),`;
}

.p-tabmenu-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(t("tabmenu.active.bar.bottom"),`;
    height: `).concat(t("tabmenu.active.bar.height"),`;
    background: `).concat(t("tabmenu.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`)},Y={root:"p-tabmenu p-component",tablist:"p-tabmenu-tablist",item:function(e){var t=e.instance,i=e.index,a=e.item;return["p-tabmenu-item",{"p-tabmenu-item-active":t.d_activeIndex===i,"p-disabled":t.disabled(a)}]},itemLink:"p-tabmenu-item-link",itemIcon:"p-tabmenu-item-icon",itemLabel:"p-tabmenu-item-label",activeBar:"p-tabmenu-active-bar"},J=$.extend({name:"tabmenu",theme:q,classes:Y}),X={name:"BaseTabMenu",extends:R,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:J,provide:function(){return{$pcTabMenu:this,$parentInstance:this}}},C={name:"TabMenu",extends:X,inheritAttrs:!1,emits:["update:activeIndex","tab-change"],data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:{flush:"post",handler:function(e){this.d_activeIndex=e,this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()});var t=this.findActiveItem();t&&(t.tabIndex="0")},updated:function(){this.updateInkBar()},methods:{getPTOptions:function(e,t,i){return this.ptm(e,{context:{item:t,index:i}})},onItemClick:function(e,t,i){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),i!==this.d_activeIndex&&(this.d_activeIndex=i,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:i})},onKeydownItem:function(e,t,i){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(e,t,i),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?P(t,"data-p-disabled")===!0?this.findNextItem(t.children[0]):t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?P(t,"data-p-disabled")===!0?this.findPrevItem(t.children[0]):t.children[0]:null},findFirstItem:function(){var e=_(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=E(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=_(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},onTabKey:function(){var e=_(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]'),t=_(this.$refs.nav,'[data-pc-section="itemlink"][tabindex="0"]');t!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),t.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,t=!1,i=0;i<e.length;i++){var a=e[i];P(a,"data-p-active")&&(this.$refs.inkbar.style.width=B(a)+"px",this.$refs.inkbar.style.left=M(a).left-M(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,t){var i=this;return{action:m({class:this.cx("itemLink"),tabindex:-1,onClick:function(r){return i.onItemClick(r,e,t)},onKeyDown:function(r){return i.onKeydownItem(r,e,t)}},this.getPTOptions("itemLink",e,t)),icon:m({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon",e,t)),label:m({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}},directives:{ripple:W}},Q=["aria-labelledby","aria-label"],Z=["onClick","onKeydown","data-p-active","data-p-disabled"],ee=["href","target","aria-label","aria-disabled"];function te(s,e,t,i,a,r){var v=z("ripple");return l(),d("div",m({class:s.cx("root")},s.ptmi("root")),[o("ul",m({ref:"nav",class:s.cx("tablist"),role:"menubar","aria-labelledby":s.ariaLabelledby,"aria-label":s.ariaLabel},s.ptm("tablist")),[(l(!0),d(y,null,I(s.model,function(n,c){return l(),d(y,{key:r.label(n)+"_"+c.toString()},[r.visible(n)?(l(),d("li",m({key:0,ref_for:!0,ref:"tab",class:[s.cx("item",{item:n,index:c}),n.class],role:"presentation",onClick:function(p){return r.onItemClick(p,n,c)},onKeydown:function(p){return r.onKeydownItem(p,n,c)}},r.getPTOptions("item",n,c),{"data-p-active":a.d_activeIndex===c,"data-p-disabled":r.disabled(n)}),[s.$slots.item?(l(),T(N(s.$slots.item),{key:1,item:n,index:c,active:c===a.d_activeIndex,label:r.label(n),props:r.getMenuItemProps(n,c)},null,8,["item","index","active","label","props"])):f((l(),d("a",m({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:n.url,class:s.cx("itemLink"),target:n.target,"aria-label":r.label(n),"aria-disabled":r.disabled(n),tabindex:-1},r.getPTOptions("itemLink",n,c)),[s.$slots.itemicon?(l(),T(N(s.$slots.itemicon),{key:0,item:n,class:k(s.cx("itemIcon"))},null,8,["item","class"])):n.icon?(l(),d("span",m({key:1,class:[s.cx("itemIcon"),n.icon],ref_for:!0},r.getPTOptions("itemIcon",n,c)),null,16)):h("",!0),o("span",m({class:s.cx("itemLabel"),ref_for:!0},r.getPTOptions("itemLabel",n,c)),u(r.label(n)),17)],16,ee)),[[v]])],16,Z)):h("",!0)],64)}),128)),o("li",m({ref:"inkbar",role:"none",class:s.cx("activeBar")},s.ptm("activeBar")),null,16)],16,Q)],16)}C.render=te;const se={data(){return{showPasswordFields:!1,passwords:{oldPassword:"",newPassword:"",confirmNewPassword:""},selectedFilter:"All",filters:["All","Pending","Delivered","Cancelled"],removeItem:!1,loadingAdd:!1,home:{icon:"pi pi-home"},items:[{label:"Home",route:"/"},{label:"My Account",route:"/profile"}],activeSection:"profile",user:{firstName:"",lastName:"",email:"",address:"",phoneNumber:"",createdAt:""},orders:[],wishlist:[]}},computed:{filteredOrders(){return this.selectedFilter==="All"?this.orders:this.orders.filter(s=>s.status===this.selectedFilter)}},async mounted(){await this.getUserData(),await this.getWishList(),await this.getOrders()},methods:{async updatePassword(){const s=x();try{const e={newPassword:this.passwords.newPassword,oldPassword:this.passwords.oldPassword,confirmNewPassword:this.passwords.confirmNewPassword},t=await s.updatePassword(e);this.$toast.add({severity:"success",summary:t.data.message+"Please login to continue",group:"br",life:3e3}),s.logout()}catch(e){this.$toast.add({severity:"error",summary:e,group:"br",life:3e3})}},async updateUser(){const s=x();try{const e={firstName:this.user.firstName,lastName:this.user.lastName,email:this.user.email,phoneNumber:this.user.phoneNumber},t=await s.updateUser(e,this.user.id);this.$toast.add({severity:"success",summary:"Details updated successfully",group:"br",life:3e3})}catch(e){console.log("updateUser failed",e),this.$toast.add({severity:"error",summary:e,group:"br",life:3e3})}},getProductImage(s){var e,t;return((t=(e=s==null?void 0:s.productModel)==null?void 0:e.images)==null?void 0:t.length)>0?s.productModel.images[0].optimizeUrl:(console.log("Using fallback image"),"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=")},formattedPrice(s){const{$formatPrice:e}=g();return e(s)},formatDate(s){return new Date(s).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})},async getOrders(){const e=await F().getOrders();this.orders=e},async removeWish(s){const{$axios:e}=g();this.removeItem=!0;try{const t=await e.post(`/product/wishlist/remove/${productID}`);this.removeItem=!1}catch{this.removeItem=!1}},async addToCart(s){const{$axios:e}=g();this.loadingAdd=!0,setTimeout(()=>{this.loadingAdd=!1},2e3);try{const t={productId:s.id,quantity:1},i=await e.post("/product/cart/add",t);this.loadingAdd=!1}catch{this.loadingAdd=!1}},async getWishList(){const{$axios:s}=g();try{const e=await s.get("/product/wishlist");this.wishlist=e.data}catch(e){console.error(e)}},async getUserData(){const s=x();this.user=s.user},logout(){x().logout()}}},ne={class:"container mx-auto"},oe={class:"flex flex-col md:flex-row"},ae={class:"w-full bg-white border p-4"},ie={key:0},re={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},le={class:"mt-6"},de={key:0,class:"mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"},ce={class:"col-span-1 md:col-span-2 flex justify-end mt-4"},ue={key:1},me={class:"mt-4 flex flex-col md:flex-row items-center md:items-start"},pe={class:"ml-4"},be={class:"text-gray-600"},fe={key:2},he={class:"p-4 bg-gray-100"},ge={class:"flex space-x-4 mb-4 overflow-x-auto"},ve=["onClick"],we={class:"flex justify-between items-center"},xe={class:"text-sm text-gray-500"},ye={class:"mt-2 flex flex-col md:flex-row items-center md:items-start"},Ie=["src"],ke={class:"ml-0 md:ml-4 text-center md:text-left"},_e={class:"text-red-600 font-semibold"},Pe={class:"text-gray-700"},Te={key:0,class:"text-blue-600"},Ne={class:"text-gray-800 font-semibold mt-1"};function Se(s,e,t,i,a,r){const v=G;return l(),d("div",ne,[o("div",oe,[o("main",ae,[a.activeSection==="profile"?(l(),d("div",ie,[e[18]||(e[18]=o("h2",{class:"text-xl font-bold mb-4 text-red-500"},"Edit Your Profile",-1)),o("form",{onSubmit:e[9]||(e[9]=V((...n)=>r.updateUser&&r.updateUser(...n),["prevent"]))},[o("div",re,[o("div",null,[e[10]||(e[10]=o("label",null,"First Name",-1)),f(o("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>a.user.firstName=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.user.firstName]])]),o("div",null,[e[11]||(e[11]=o("label",null,"Last Name",-1)),f(o("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>a.user.lastName=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.user.lastName]])]),o("div",null,[e[12]||(e[12]=o("label",null,"Email",-1)),f(o("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=n=>a.user.email=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.user.email]])]),o("div",null,[e[13]||(e[13]=o("label",null,"Phone Number",-1)),f(o("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=n=>a.user.phoneNumber=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.user.phoneNumber]])])]),e[17]||(e[17]=o("div",{class:"flex justify-between mt-6"},[o("button",{type:"button",class:"border px-4 py-2 w-1/2 md:w-auto"}," Cancel "),o("button",{type:"submit",class:"bg-red-500 text-white px-4 py-2 w-1/2 md:w-auto"}," Save Changes ")],-1)),o("div",le,[o("button",{type:"button",onClick:e[4]||(e[4]=n=>a.showPasswordFields=!a.showPasswordFields),class:"bg-blue-500 text-white px-4 py-2 w-full md:w-auto"}," Change Password "),a.showPasswordFields?(l(),d("div",de,[o("div",null,[e[14]||(e[14]=o("label",null,"Old Password",-1)),f(o("input",{type:"password","onUpdate:modelValue":e[5]||(e[5]=n=>a.passwords.oldPassword=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.passwords.oldPassword]])]),o("div",null,[e[15]||(e[15]=o("label",null,"New Password",-1)),f(o("input",{type:"password","onUpdate:modelValue":e[6]||(e[6]=n=>a.passwords.newPassword=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.passwords.newPassword]])]),o("div",null,[e[16]||(e[16]=o("label",null,"Confirm Password",-1)),f(o("input",{type:"password","onUpdate:modelValue":e[7]||(e[7]=n=>a.passwords.confirmNewPassword=n),class:"border w-full p-2 mt-1"},null,512),[[w,a.passwords.confirmNewPassword]])]),o("div",ce,[o("button",{type:"button",onClick:e[8]||(e[8]=(...n)=>r.updatePassword&&r.updatePassword(...n)),class:"bg-primary text-white px-4 py-2 md:w-auto"}," Update Password ")])])):h("",!0)])],32)])):h("",!0),a.activeSection==="paymentOptions"?(l(),d("div",ue,[e[21]||(e[21]=o("h2",{class:"text-xl font-bold mb-4 text-red-500"},"Payment Method",-1)),o("div",me,[e[20]||(e[20]=o("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524",class:"w-1/2 md:w-1/4",alt:"Mpesa Logo"},null,-1)),o("div",pe,[e[19]||(e[19]=o("h3",{class:"font-bold mb-2"},"Mpesa",-1)),o("p",be,"Mobile Number: "+u(a.user.phoneNumber),1)])])])):h("",!0),a.activeSection==="orders"?(l(),d("div",fe,[e[22]||(e[22]=o("h2",{class:"text-xl font-bold mb-4 text-red-500"},"My Orders",-1)),o("div",he,[o("div",ge,[(l(!0),d(y,null,I(a.filters,n=>(l(),d("button",{key:n,onClick:c=>a.selectedFilter=n,class:k(["px-4 py-2 rounded-full border whitespace-nowrap",a.selectedFilter===n?"bg-red-100 text-red-600":"bg-white text-gray-600"])},u(n),11,ve))),128))]),(l(!0),d(y,null,I(r.filteredOrders,(n,c)=>{var b,p;return l(),d("div",{key:c,class:"bg-white shadow-md rounded-lg mb-4 p-4"},[o("div",we,[o("span",{class:k(["px-3 py-1 text-xs rounded-full",{"bg-yellow-200 text-yellow-800":n.status==="Pending","bg-green-100 text-green-600":n.status==="Delivered","bg-gray-300 text-gray-700":n.status==="Cancelled"}])},u(n.status),3),o("span",xe,u(r.formatDate(n.createdAt)),1)]),o("div",ye,[o("img",{src:(p=(b=n.orderItems[0])==null?void 0:b.productModel.images[0])==null?void 0:p.optimizeUrl,alt:"Product Image",class:"w-16 h-16 rounded-md object-cover"},null,8,Ie),o("div",ke,[o("p",_e," Order ID: "+u(n.id.slice(0,8)),1),o("p",Pe,[U(u(n.orderItems[0].productModel.name)+" ",1),n.orderItems.length>1?(l(),d("span",Te," & "+u(n.orderItems.length-1)+" more items",1)):h("",!0)]),o("p",Ne," KES "+u(r.formattedPrice(n.total)),1)])])])}),128))])])):h("",!0)])]),L(v,{position:"bottom-right",group:"br"})])}const O=S(se,[["render",Se]]),Le=""+new URL("no-order.CkeRJY7F.png",import.meta.url).href,Ce={data(){return{selectedFilter:"All",filters:["All","Pending","Delivered","Cancelled"],removeItem:!1,loadingAdd:!1,home:{icon:"pi pi-home"},items:[{label:"Home",route:"/"},{label:"My Account",route:"/profile"}],activeSection:"profile",user:{firstName:"",lastName:"",email:"",address:"",phoneNumber:"",createdAt:""},orders:[],wishlist:[]}},computed:{filteredOrders(){return this.selectedFilter==="All"?this.orders:this.orders.filter(s=>s.status===this.selectedFilter)}},async mounted(){await this.getUserData(),await this.getWishList(),await this.getOrders()},methods:{getProductImage(s){var e,t,i;return console.log("Order Item:",s),((t=(e=s==null?void 0:s.productModel)==null?void 0:e.images)==null?void 0:t.length)>0?(console.log("Image found:",(i=s.productModel.images[0])==null?void 0:i.optimizeUrl),s.productModel.images[0].optimizeUrl):(console.log("Using fallback image"),"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=")},formattedPrice(s){const{$formatPrice:e}=g();return e(s)},formatDate(s){return new Date(s).toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"})},async getOrders(){const e=await F().getOrders();this.orders=e},async removeWish(s){const{$axios:e}=g();this.removeItem=!0;try{const t=await e.post(`/product/wishlist/remove/${productID}`);this.removeItem=!1}catch{this.removeItem=!1}},async addToCart(s){const{$axios:e}=g();this.loadingAdd=!0,setTimeout(()=>{this.loadingAdd=!1},2e3);try{const t={productId:s.id,quantity:1},i=await e.post("/product/cart/add",t);this.loadingAdd=!1}catch{this.loadingAdd=!1}},async getWishList(){const{$axios:s}=g();try{const e=await s.get("/product/wishlist");this.wishlist=e.data}catch(e){console.error(e)}},async getUserData(){const s=x();this.user=s.user},logout(){x().logout()}}},Me={class:""},Ae={class:"flex flex-col"},Oe={class:"p-4"},De={class:"flex space-x-4 mb-4 overflow-x-auto"},Fe=["onClick"],Ue={key:0},$e={class:"flex justify-between items-center"},Ee={class:"text-sm text-gray-500"},Be={class:"mt-2 flex flex-col md:flex-row items-center md:items-start"},ze=["src"],Ve={class:"ml-0 md:ml-4 text-center md:text-left"},Ke={class:"text-red-600 font-semibold"},je={class:"text-gray-700"},We={key:0,class:"text-blue-600"},Re={class:"text-gray-800 font-semibold mt-1"},Ge={key:1,class:"flex flex-col items-center justify-center min-h-[50vh] text-center"};function He(s,e,t,i,a,r){const v=H;return l(),d("div",Me,[o("div",Ae,[o("div",Oe,[o("div",De,[(l(!0),d(y,null,I(a.filters,n=>(l(),d("button",{key:n,onClick:c=>a.selectedFilter=n,class:k(["px-4 py-2 rounded-full border whitespace-nowrap",a.selectedFilter===n?"bg-red-100 text-red-600":"bg-white text-gray-600"])},u(n),11,Fe))),128))]),r.filteredOrders.length>0?(l(),d("div",Ue,[(l(!0),d(y,null,I(r.filteredOrders,(n,c)=>{var b,p;return l(),d("div",{key:c,class:"border rounded-lg mb-4 p-4"},[o("div",$e,[o("span",{class:k(["px-3 py-1 text-xs rounded-full",{"bg-yellow-200 text-yellow-800":n.status==="Pending","bg-green-100 text-green-600":n.status==="Delivered","bg-gray-300 text-gray-700":n.status==="Cancelled"}])},u(n.status),3),o("span",Ee,u(r.formatDate(n.createdAt)),1)]),o("div",Be,[o("img",{src:(p=(b=n.orderItems[0])==null?void 0:b.productModel.images[0])==null?void 0:p.optimizeUrl,alt:"Product Image",class:"w-16 h-16 rounded-md object-cover"},null,8,ze),o("div",Ve,[o("p",Ke," Order ID: "+u(n.id.slice(0,8)),1),o("p",je,[U(u(n.orderItems[0].productModel.name)+" ",1),n.orderItems.length>1?(l(),d("span",We," & "+u(n.orderItems.length-1)+" more items",1)):h("",!0)]),o("p",Re," KES "+u(r.formattedPrice(n.total)),1)])])])}),128))])):(l(),d("div",Ge,[e[1]||(e[1]=o("img",{src:Le,alt:"Empty Cart",class:"w-40 h-40 mb-4"},null,-1)),e[2]||(e[2]=o("h2",{class:"text-xl font-semibold text-gray-700"},"No Orders!",-1)),e[3]||(e[3]=o("p",{class:"text-gray-500 text-sm mb-4"}," Browse our categories and discover our best deals! ",-1)),L(v,{to:"/dashboard"},{default:K(()=>e[0]||(e[0]=[o("button",{class:"bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"}," Start Shopping ",-1)])),_:1})]))])])])}const D=S(Ce,[["render",He]]),qe={components:{Profile:O,Orders:D,TabMenu:C},setup(){const s=x(),e=A(0),t=A([{name:"Profile",label:"My Account",component:O},{name:"Orders",label:"Orders",component:D}]),i=j(()=>t.value[e.value].component);return{tabs:t,selectedIndex:e,activeComponent:i,logout:()=>s.logout()}}},Ye={class:"container mx-auto p-4"},Je={class:"md:hidden mb-4"},Xe={class:"flex justify-between items-center mb-2"},Qe={class:"flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]"},Ze={class:"hidden md:flex w-64 bg-white shadow-sm flex-col"},et={class:"flex-1"},tt=["onClick"],st={class:"flex-1 p-6 bg-white rounded-md shadow-md min-h-[70vh]"};function nt(s,e,t,i,a,r){const v=C;return l(),d("div",Ye,[o("div",Je,[o("div",Xe,[o("button",{onClick:e[0]||(e[0]=(...n)=>i.logout&&i.logout(...n)),class:"p-3 bg-red-500 text-white rounded-md"}," Logout ")]),L(v,{activeIndex:i.selectedIndex,"onUpdate:activeIndex":e[1]||(e[1]=n=>i.selectedIndex=n),model:i.tabs},null,8,["activeIndex","model"])]),o("div",Qe,[o("div",Ze,[e[3]||(e[3]=o("div",{class:"p-4 text-lg font-semibold border-b"},"My Account",-1)),o("div",et,[o("ul",null,[(l(!0),d(y,null,I(i.tabs,(n,c)=>(l(),d("li",{key:n.name},[o("button",{onClick:b=>i.selectedIndex=c,class:k(["w-full p-4 text-left hover:bg-gray-200",{"bg-primary text-white":i.selectedIndex===c}])},u(n.label),11,tt)]))),128))])]),o("button",{onClick:e[2]||(e[2]=(...n)=>i.logout&&i.logout(...n)),class:"mt-auto p-4 bg-red-500 text-white hover:bg-red-600"}," Logout ")]),o("div",st,[(l(),T(N(i.activeComponent)))])])])}const ut=S(qe,[["render",nt],["__scopeId","data-v-1bc226ca"]]);export{ut as default};
