import{s as Q}from"./DZbArnYM.js";import{s as Y}from"./Ddh0ts0R.js";import{B as T,p as X,q as L,o as i,c as p,F as S,m as $,s as k,b as d,u as O,v as u,_ as j,x as F,y as z,a,d as V,z as ee,w as f,t as g,A as Ce,C as Ve,D as Ie,E as Te,G as I,H as B,I as y,T as te,J as Pe,K as M,L as $e,M as ne,N as Z,O as K,P as Ee,Q as Ne,r as G}from"./C15BnQm2.js";import{s as D,a as Oe,U as R,C as Le,O as ze}from"./BR73b8pc.js";import{s as H}from"./CnfuvA20.js";import{s as N,a as ae}from"./B1TrSp80.js";import{_ as oe}from"./BiPjhniF.js";import{s as re}from"./U4QCyDi3.js";import{Z as _,s as Be}from"./Co5N81lq.js";import{s as Ae}from"./CE78h6lU.js";import{s as De}from"./BjjCqM1P.js";import"./X7nDRdwK.js";import"./B00Uo-WH.js";import"./BMyGV0wc.js";var Re=function(e){var t=e.dt;return`
.p-inputotp {
    display: flex;
    align-items: center;
    gap: `.concat(t("inputotp.gap"),`;
}

.p-inputotp-input {
    text-align: center;
    width: `).concat(t("inputotp.input.width"),`;
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: `).concat(t("inputotp.input.sm.width"),`;
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: `).concat(t("inputotp.input.lg.width"),`;
}
`)},je={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},He=T.extend({name:"inputotp",theme:Re,classes:je}),We={name:"BaseInputOtp",extends:H,props:{readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:He,provide:function(){return{$pcInputOtp:this,$parentInstance:this}}},W={name:"InputOtp",extends:We,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(e){this.tokens=e?e.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(e){return{value:this.tokens[e]}},getTemplateEvents:function(e){var t=this;return{input:function(o){return t.onInput(o,e)},keydown:function(o){return t.onKeyDown(o)},focus:function(o){return t.onFocus(o)},blur:function(o){return t.onBlur(o)},paste:function(o){return t.onPaste(o)}}},onInput:function(e,t){this.tokens[t]=e.target.value,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward"||X()&&e instanceof CustomEvent)&&this.moveToNext(e)},updateModel:function(e){var t=this.tokens.join("");this.writeValue(t,e),this.$emit("change",{originalEvent:e,value:t})},moveToPrev:function(e){var t=this.findPrevInput(e.target);t&&(t.focus(),t.select())},moveToNext:function(e){var t=this.findNextInput(e.target);t&&(t.focus(),t.select())},findNextInput:function(e){var t=e.nextElementSibling;if(t)return t.nodeName==="INPUT"?t:this.findNextInput(t)},findPrevInput:function(e){var t=e.previousElementSibling;if(t)return t.nodeName==="INPUT"?t:this.findPrevInput(t)},onFocus:function(e){e.target.select(),this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onClick:function(e){setTimeout(function(){return e.target.select()},1)},onKeyDown:function(e){if(!(e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Tab":break;default:(this.integerOnly&&!(e.code!=="Space"&&Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}},onPaste:function(e){var t=e.clipboardData.getData("text");if(t.length){var l=t.substring(0,this.length);(!this.integerOnly||!isNaN(l))&&(this.tokens=l.split(""),this.updateModel(e))}e.preventDefault()}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:D}};function _e(n,e,t,l,o,r){var x=L("OtpInputText");return i(),p("div",u({class:n.cx("root")},n.ptmi("root")),[(i(!0),p(S,null,$(n.length,function(c){return k(n.$slots,"default",{key:c,events:r.getTemplateEvents(c-1),attrs:r.getTemplateAttrs(c-1),index:c},function(){return[d(x,{value:o.tokens[c-1],type:r.inputType,class:O(n.cx("pcInputText")),name:n.$formName,inputmode:r.inputMode,variant:n.variant,readonly:n.readonly,disabled:n.disabled,size:n.size,invalid:n.invalid,tabindex:n.tabindex,unstyled:n.unstyled,onInput:function(C){return r.onInput(C,c-1)},onFocus:e[0]||(e[0]=function(v){return r.onFocus(v)}),onBlur:e[1]||(e[1]=function(v){return r.onBlur(v)}),onPaste:e[2]||(e[2]=function(v){return r.onPaste(v)}),onKeydown:e[3]||(e[3]=function(v){return r.onKeyDown(v)}),onClick:e[4]||(e[4]=function(v){return r.onClick(v)}),pt:n.ptm("pcInputText")},null,8,["value","type","class","name","inputmode","variant","readonly","disabled","size","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}W.render=_e;var Ue=function(e){var t=e.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(t("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(t("floatlabel.position.x"),`;
    color: `).concat(t("floatlabel.color"),`;
    transition-duration: `).concat(t("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(t("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(t("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(t("floatlabel.active.font.size"),`;
    font-weight: `).concat(t("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(t("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(t("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(t("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(t("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(t("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(t("floatlabel.on.border.radius"),`;
    background: `).concat(t("floatlabel.on.active.background"),`;
    padding: `).concat(t("floatlabel.on.active.padding"),`;
}
`)},Fe={root:function(e){e.instance;var t=e.props;return["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]}},Me=T.extend({name:"floatlabel",theme:Ue,classes:Fe}),Ye={name:"BaseFloatLabel",extends:N,props:{variant:{type:String,default:"over"}},style:Me,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},q={name:"FloatLabel",extends:Ye,inheritAttrs:!1};function qe(n,e,t,l,o,r){return i(),p("span",u({class:n.cx("root")},n.ptmi("root")),[k(n.$slots,"default")],16)}q.render=qe;const Ze={components:{InputOtp:W},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{firstName:"",lastName:"",email:"",password:"",cpassword:"",phone:"",role:""},otp:"",otpSent:!1,roles:[]}},methods:{handleRole(){this.form.role.name=="TECHNICIAN"&&(console.log("role: ",this.form.role),this.$emit("show-questionnaire"))},async register(){try{const n=F(),{$axios:e}=z();await n.register({firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,password:this.form.password,phoneNumber:this.form.phoneNumber,roleId:this.form.role.id}),this.otpSent=!0,console.log("OTP sent to email")}catch(n){console.error("Error registering:",n),this.$toast.add({severity:"error",summary:n.message,group:"br",life:3e3})}},async verifyOtp(){try{const{$axios:n}=z(),e=F(),{accessToken:t,user:l}=await e.verifyOtp({email:this.form.email,otp:this.otp});t&&this.$router.push("/dashboard")}catch(n){this.$toast.add({severity:"error",summary:n.message,group:"br",life:3e3})}},async fetchRoles(){const{$axios:n}=z();try{const e=await n.get("/user/roles");this.roles=e.data}catch(e){console.error("Error fetching roles:",e)}}},mounted(){this.fetchRoles()}},Ke={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Ge={class:"flex w-full h-screen flex-col items-center justify-center"},Je={class:"border shadow-lg p-8 rounded-xl bg-white text-center flex flex-col items-center"},Qe={class:"flex space-x-4 mb-4 w-full"},Xe={class:"flex flex-col space-y-4 mb-4 w-full"},et={key:1,class:"flex flex-col items-center text-center w-full"},tt={class:"text-gray-500 mb-6"},nt={class:"font-weight-bold font-bold"},at={class:"w-full flex justify-center mb-4"},ot={class:"flex justify-center w-full"},rt={class:"text-sm mt-4"},st={class:"hidden md:block h-full w-full p-4 relative"},it={class:"relative w-full h-screen flex justify-center items-center"},lt=["src","alt"],dt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function pt(n,e,t,l,o,r){const x=D,c=q,v=Oe,C=W,E=Y,P=Q;return i(),p(S,null,[a("div",Ke,[a("div",Ge,[e[20]||(e[20]=a("div",{class:"flex justify-center items-center absolute top-16 left-8"},[a("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[a("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),V(" Back to Shop")])],-1)),a("div",Je,[e[18]||(e[18]=a("img",{src:oe,alt:"Login",class:"h-28 w-28 mb-6 mx-auto"},null,-1)),e[19]||(e[19]=a("p",{class:"text-gray-500 text-2xl mb-10"}," Enter your details below to sign up ",-1)),o.otpSent?(i(),p("div",et,[e[16]||(e[16]=a("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),a("p",tt,[e[15]||(e[15]=V(" Enter the OTP sent to your email address. ")),a("span",nt,g(o.form.email),1)]),a("div",at,[a("div",ot,[d(C,{length:6,modelValue:o.otp,"onUpdate:modelValue":e[7]||(e[7]=h=>o.otp=h),class:"p-inputtex text-center p-3 w-full max-w-sm",placeholder:"Enter OTP"},null,8,["modelValue"])])]),a("button",{onClick:e[8]||(e[8]=(...h)=>r.verifyOtp&&r.verifyOtp(...h)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"}," Verify OTP ")])):(i(),p("form",{key:0,onSubmit:e[6]||(e[6]=ee((...h)=>r.register&&r.register(...h),["prevent"])),class:"w-full flex flex-col items-center"},[a("div",Qe,[d(c,{variant:"on",class:"w-full"},{default:f(()=>[d(x,{type:"text",id:"firstName",modelValue:o.form.firstName,"onUpdate:modelValue":e[0]||(e[0]=h=>o.form.firstName=h),class:"w-full"},null,8,["modelValue"]),e[10]||(e[10]=a("label",{for:"firstName"},"First Name",-1))]),_:1}),d(c,{variant:"on",class:"w-full"},{default:f(()=>[d(x,{type:"text",id:"lastName",modelValue:o.form.lastName,"onUpdate:modelValue":e[1]||(e[1]=h=>o.form.lastName=h),class:"w-full"},null,8,["modelValue"]),e[11]||(e[11]=a("label",{for:"lastName"},"Last Name",-1))]),_:1})]),a("div",Xe,[d(c,{variant:"on",class:"w-full"},{default:f(()=>[d(x,{type:"email",id:"email",modelValue:o.form.email,"onUpdate:modelValue":e[2]||(e[2]=h=>o.form.email=h),class:"w-full"},null,8,["modelValue"]),e[12]||(e[12]=a("label",{for:"email"},"Email",-1))]),_:1}),d(c,{variant:"on",class:"w-full"},{default:f(()=>[d(x,{type:"number",id:"phoneNumber",modelValue:o.form.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=h=>o.form.phoneNumber=h),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=a("label",{for:"phoneNumber"},"Mobile Phone",-1))]),_:1}),d(x,{name:"password",modelValue:o.form.password,"onUpdate:modelValue":e[4]||(e[4]=h=>o.form.password=h),type:"password",class:"w-full",placeholder:"Password"},null,8,["modelValue"]),d(v,{modelValue:o.form.role,"onUpdate:modelValue":e[5]||(e[5]=h=>o.form.role=h),options:o.roles,optionLabel:"name",onChange:r.handleRole,placeholder:"Select a Role",class:"w-full custom-dropdown"},null,8,["modelValue","options","onChange"])]),e[14]||(e[14]=a("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-6"}," Sign Up ",-1))],32)),a("p",rt,[e[17]||(e[17]=V(" Already have an account? ")),a("span",{class:"text-blue-500 cursor-pointer",onClick:e[9]||(e[9]=h=>n.$emit("toggle"))}," Log in ")])])]),a("div",st,[d(E,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:f(h=>[a("div",it,[a("img",{src:h.data.src,alt:h.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,lt),a("div",dt,g(h.data.alt),1)])]),_:1},8,["value"])])]),d(P,{position:"bottom-right",group:"br"})],64)}const ut=j(Ze,[["render",pt],["__scopeId","data-v-8ab29baf"]]);var se={name:"EyeIcon",extends:ae};function ct(n,e,t,l,o,r){return i(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}se.render=ct;var ie={name:"EyeSlashIcon",extends:ae};function ft(n,e,t,l,o,r){return i(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),e[0]||(e[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}ie.render=ft;var mt=function(e){var t=e.dt;return`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: `.concat(t("password.meter.height"),`;
    background: `).concat(t("password.meter.background"),`;
    border-radius: `).concat(t("password.meter.border.radius"),`;
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: `).concat(t("password.meter.border.radius"),`;
}

.p-password-meter-weak {
    background: `).concat(t("password.strength.weak.background"),`;
}

.p-password-meter-medium {
    background: `).concat(t("password.strength.medium.background"),`;
}

.p-password-meter-strong {
    background: `).concat(t("password.strength.strong.background"),`;
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    padding: `).concat(t("password.overlay.padding"),`;
    background: `).concat(t("password.overlay.background"),`;
    color: `).concat(t("password.overlay.color"),`;
    border: 1px solid `).concat(t("password.overlay.border.color"),`;
    box-shadow: `).concat(t("password.overlay.shadow"),`;
    border-radius: `).concat(t("password.overlay.border.radius"),`;
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("password.content.gap"),`;
}

.p-password-toggle-mask-icon {
    inset-inline-end: `).concat(t("form.field.padding.x"),`;
    color: `).concat(t("password.icon.color"),`;
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(`).concat(t("icon.size"),` / 2));
    width: `).concat(t("icon.size"),`;
    height: `).concat(t("icon.size"),`;
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}
`)},ht={root:function(e){var t=e.props;return{position:t.appendTo==="self"?"relative":void 0}}},bt={root:function(e){var t=e.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":t.focused,"p-password-fluid":t.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(e){var t=e.instance;return"p-password-meter-label ".concat(t.meter?"p-password-meter-"+t.meter.strength:"")},meterText:"p-password-meter-text"},vt=T.extend({name:"password",theme:mt,classes:bt,inlineStyles:ht}),gt={name:"BasePassword",extends:H,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:vt,provide:function(){return{$pcPassword:this,$parentInstance:this}}},le={name:"Password",extends:gt,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},watch:{"$attrs.id":function(e){this.id=e||R()}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.id=this.id||R(),this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(_.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(e){_.set("overlay",e,this.$primevue.config.zIndex.overlay),Ce(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(e){_.clear(e)},alignOverlay:function(){this.appendTo==="self"?Ve(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Ie(this.$refs.input.$el)+"px",Te(this.overlay,this.$refs.input.$el))},testStrength:function(e){var t=0;return this.strongCheckRegExp.test(e)?t=3:this.mediumCheckRegExp.test(e)?t=2:e.length&&(t=1),t},onInput:function(e){this.writeValue(e.target.value,e),this.$emit("change",e)},onFocus:function(e){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",e)},onKeyUp:function(e){if(this.feedback){var t=e.target.value,l=this.checkPasswordStrength(t),o=l.meter,r=l.label;if(this.meter=o,this.infoText=r,e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var e=this.checkPasswordStrength(this.d_value),t=e.meter,l=e.label;this.meter=t,this.infoText=l,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(e){var t=null,l=null;switch(this.testStrength(e)){case 1:t=this.weakText,l={strength:"weak",width:"33.33%"};break;case 2:t=this.mediumText,l={strength:"medium",width:"66.66%"};break;case 3:t=this.strongText,l={strength:"strong",width:"100%"};break;default:t=this.promptText,l=null;break}return{label:t,meter:l}},onInvalid:function(e){this.$emit("invalid",e)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Le(this.$refs.input.$el,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!X()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(e){this.overlay=e},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(e){ze.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.id+"_overlay"}},components:{InputText:D,Portal:Be,EyeSlashIcon:ie,EyeIcon:se}};function A(n){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(n)}function J(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,l)}return t}function U(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?J(Object(t),!0).forEach(function(l){yt(n,l,t[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(t,l))})}return n}function yt(n,e,t){return(e=wt(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function wt(n){var e=xt(n,"string");return A(e)=="symbol"?e:e+""}function xt(n,e){if(A(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var l=t.call(n,e||"default");if(A(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var kt=["id"];function St(n,e,t,l,o,r){var x=L("InputText"),c=L("Portal");return i(),p("div",u({class:n.cx("root"),style:n.sx("root")},n.ptmi("root")),[d(x,u({ref:"input",id:n.inputId,type:r.inputType,class:[n.cx("pcInputText"),n.inputClass],style:n.inputStyle,value:n.d_value,name:n.$formName,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-controls":n.overlayProps&&n.overlayProps.id||n.overlayId||n.panelProps&&n.panelProps.id||n.panelId||r.overlayUniqueId,"aria-expanded":o.overlayVisible,"aria-haspopup":!0,placeholder:n.placeholder,required:n.required,fluid:n.fluid,disabled:n.disabled,variant:n.variant,invalid:n.invalid,size:n.size,autofocus:n.autofocus,onInput:r.onInput,onFocus:r.onFocus,onBlur:r.onBlur,onKeyup:r.onKeyUp,onInvalid:r.onInvalid},n.inputProps,{pt:n.ptm("pcInputText"),unstyled:n.unstyled}),null,16,["id","type","class","style","value","name","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),n.toggleMask&&o.unmasked?k(n.$slots,n.$slots.maskicon?"maskicon":"hideicon",{key:0,toggleCallback:r.onMaskToggle},function(){return[(i(),I(B(n.maskIcon?"i":"EyeSlashIcon"),u({class:[n.cx("maskIcon"),n.maskIcon],onClick:r.onMaskToggle},n.ptm("maskIcon")),null,16,["class","onClick"]))]}):y("",!0),n.toggleMask&&!o.unmasked?k(n.$slots,n.$slots.unmaskicon?"unmaskicon":"showicon",{key:1,toggleCallback:r.onMaskToggle},function(){return[(i(),I(B(n.unmaskIcon?"i":"EyeIcon"),u({class:[n.cx("unmaskIcon"),n.unmaskIcon],onClick:r.onMaskToggle},n.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):y("",!0),a("span",u({class:"p-hidden-accessible","aria-live":"polite"},n.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),g(o.infoText),17),d(c,{appendTo:n.appendTo},{default:f(function(){return[d(te,u({name:"p-connected-overlay",onEnter:r.onOverlayEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},n.ptm("transition")),{default:f(function(){return[o.overlayVisible?(i(),p("div",u({key:0,ref:r.overlayRef,id:n.overlayId||n.panelId||r.overlayUniqueId,class:[n.cx("overlay"),n.panelClass,n.overlayClass],style:[n.overlayStyle,n.panelStyle],onClick:e[0]||(e[0]=function(){return r.onOverlayClick&&r.onOverlayClick.apply(r,arguments)})},U(U(U({},n.panelProps),n.overlayProps),n.ptm("overlay"))),[k(n.$slots,"header"),k(n.$slots,"content",{},function(){return[a("div",u({class:n.cx("content")},n.ptm("content")),[a("div",u({class:n.cx("meter")},n.ptm("meter")),[a("div",u({class:n.cx("meterLabel"),style:{width:o.meter?o.meter.width:""}},n.ptm("meterLabel")),null,16)],16),a("div",u({class:n.cx("meterText")},n.ptm("meterText")),g(o.infoText),17)],16)]}),k(n.$slots,"footer")],16,kt)):y("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}le.render=St;const Ct={props:{images:{type:Array,default:()=>[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},components:{},data(){return{}},mounted(){this.images=[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},Vt=["src","alt"];function It(n,e,t,l,o,r){const x=L("Carousel",!0);return i(),p("div",null,[V(g(t.images)+" ",1),d(x,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:t.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:f(c=>[a("img",{src:c.data.src,alt:c.data.alt,class:"rounded object-cover w-full h-screen"},null,8,Vt)]),_:1},8,["value"])])}const Tt=j(Ct,[["render",It]]),Pt={components:{Carousel:Tt},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{email:"",password:"",newPassword:"",confirmNewPassword:""},resetEmail:"",isVerified:!1,forgotPassword:!1,userStore:F(),productStore:Pe(),resetPassword:!1,loading:!1}},computed:{passwordMismatch(){return this.form.newPassword&&this.form.confirmNewPassword&&this.form.newPassword!==this.form.confirmNewPassword}},methods:{async handleResetPassword(){try{const n={email:this.form.email,newPassword:this.form.newPassword,confirmNewPassword:this.form.confirmNewPassword,otp:this.otp},e=await this.userStore.resetPassword(n);console.log(e,"reset"),this.isVerified=!1,this.forgotPassword=!1,this.$toast.add({severity:"success",summary:e.data.message,group:"br",life:3e3})}catch(n){n.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.$toast.add({severity:"error",summary:n.message,group:"br",life:3e3})}},async sendResetEmail(){var n,e;try{const{$axios:t}=z();await t.post("/auth/forgot-password",{email:this.resetEmail}),this.$toast.add({severity:"success",summary:"Reset link sent!",detail:"Check your email for the password reset link.",group:"br",life:3e3}),this.forgotPassword=!1,this.isVerified=!0,this.form.email=this.resetEmail,this.resetPassword=!1}catch(t){this.$toast.add({severity:"error",summary:"Error",detail:((e=(n=t.response)==null?void 0:n.data)==null?void 0:e.message)||"Failed to send reset link.",group:"br",life:3e3})}},async login(){try{this.loading=!0;const{accessToken:n}=await this.userStore.login(this.form.email,this.form.password);n&&this.$router.push("/dashboard")}catch(n){n.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.loading=!1,this.$toast.add({severity:"error",summary:n.message,group:"br",life:3e3})}},async verifyOtp(){try{const{accessToken:n}=await this.userStore.verifyOtp({email:this.form.email,otp:this.otp});if(!this.resetPassword){this.userStore.logout(),this.resetPassword=!0;return}n&&this.$router.push("/dashboard")}catch(n){this.$toast.add({severity:"error",summary:n.message,group:"br",life:3e3})}}}},$t={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Et={class:"flex w-full h-screen flex-col items-center justify-center p-16"},Nt={class:"border shadow-xl p-12 lg:p-36 rounded-xl bg-white flex flex-col items-center"},Ot={key:0},Lt={class:"flex flex-col gap-4 w-full"},zt={class:"mt-4 flex justify-end w-full"},Bt={class:"text-sm mt-4 text-center"},At={key:1},Dt={key:2},Rt={key:0},jt={class:"text-gray-500 mb-6"},Ht={class:"font-bold"},Wt={class:"w-full mb-4 flex justify-center items-center"},_t={key:1},Ut={key:0,class:"text-red-500 text-sm mt-2"},Ft=["disabled"],Mt={class:"hidden md:block h-full w-full p-4 relative"},Yt={class:"relative w-full h-screen flex justify-center items-center"},qt=["src","alt"],Zt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Kt(n,e,t,l,o,r){const x=D,c=q,v=le,C=re,E=W,P=Y,h=Q;return i(),p(S,null,[a("div",$t,[a("div",Et,[e[27]||(e[27]=a("div",{class:"flex justify-center items-center absolute top-16 left-8"},[a("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[a("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),V(" Back to Shop")])],-1)),a("div",Nt,[e[26]||(e[26]=a("img",{src:oe,alt:"Login",class:"h-28 w-28"},null,-1)),!o.isVerified&&!o.forgotPassword?(i(),p("div",Ot,[e[16]||(e[16]=a("p",{class:"text-gray-500 text-2xl mb-10 text-center"}," Welcome to Secure Group ",-1)),a("form",{onSubmit:e[3]||(e[3]=ee((...m)=>r.login&&r.login(...m),["prevent"])),class:"w-full flex flex-col items-center"},[a("div",Lt,[d(c,{variant:"on"},{default:f(()=>[d(x,{type:"email",id:"email",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=m=>o.form.email=m),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=a("label",{for:"email"},"Email",-1))]),_:1}),d(c,{variant:"on"},{default:f(()=>[d(v,{modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=m=>o.form.password=m),toggleMask:""},null,8,["modelValue"]),e[14]||(e[14]=a("label",{for:"password"},"Password",-1))]),_:1})]),a("div",zt,[a("p",{class:"text-blue-500 text-sm cursor-pointer",onClick:e[2]||(e[2]=m=>o.forgotPassword=!0)}," Forgot password? ")]),d(C,{class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4",type:"submit",label:"Log In",loading:o.loading},null,8,["loading"])],32),a("p",Bt,[e[15]||(e[15]=V(" Don't have an account? ")),a("span",{class:"text-blue-500 cursor-pointer",onClick:e[4]||(e[4]=m=>n.$emit("toggle"))}," Sign up ")])])):o.forgotPassword?(i(),p("div",At,[e[18]||(e[18]=a("h3",{class:"text-gray-500 flex justify-center text-2xl font-medium mb-4"}," Reset Password ",-1)),e[19]||(e[19]=a("p",{class:"text-gray-500 mb-6 text-center"}," Enter your email address to receive a password reset link. ",-1)),d(c,{variant:"on"},{default:f(()=>[d(x,{type:"email",id:"resetEmail",modelValue:o.resetEmail,"onUpdate:modelValue":e[5]||(e[5]=m=>o.resetEmail=m),class:"w-full"},null,8,["modelValue"]),e[17]||(e[17]=a("label",{for:"resetEmail"},"Email",-1))]),_:1}),a("button",{onClick:e[6]||(e[6]=(...m)=>r.sendResetEmail&&r.sendResetEmail(...m)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Send Reset Link "),a("p",{class:"text-sm mt-4 text-center cursor-pointer text-blue-500",onClick:e[7]||(e[7]=m=>o.forgotPassword=!1)}," Back to login ")])):(i(),p("div",Dt,[o.resetPassword?(i(),p("div",_t,[e[24]||(e[24]=a("h3",{class:"text-3xl font-medium mb-4 text-center"}," Reset Password ",-1)),e[25]||(e[25]=a("p",{class:"text-gray-500 mb-6"}," Enter a new password for your account. ",-1)),d(c,{variant:"on"},{default:f(()=>[d(v,{modelValue:o.form.newPassword,"onUpdate:modelValue":e[10]||(e[10]=m=>o.form.newPassword=m),id:"resetPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[22]||(e[22]=a("label",{for:"resetPassword"},"New Password",-1))]),_:1}),d(c,{variant:"on",class:"mt-3"},{default:f(()=>[d(v,{modelValue:o.form.confirmNewPassword,"onUpdate:modelValue":e[11]||(e[11]=m=>o.form.confirmNewPassword=m),id:"confirmNewPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[23]||(e[23]=a("label",{for:"confirmNewPassword"},"Confirm Password",-1))]),_:1}),r.passwordMismatch?(i(),p("p",Ut," Passwords do not match. ")):y("",!0),a("button",{onClick:e[12]||(e[12]=(...m)=>r.handleResetPassword&&r.handleResetPassword(...m)),class:"w-full text-white py-3 mt-4 rounded bg-red-600",disabled:r.passwordMismatch}," Reset Password ",8,Ft)])):(i(),p("div",Rt,[e[21]||(e[21]=a("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),a("p",jt,[e[20]||(e[20]=V(" Enter the OTP sent to your email address: ")),a("span",Ht,g(o.form.email),1)]),a("div",Wt,[d(E,{length:6,mask:"*",modelValue:n.otp,"onUpdate:modelValue":e[8]||(e[8]=m=>n.otp=m),size:"large",class:"text-center p-3",placeholder:"Enter OTP"},null,8,["modelValue"])]),a("button",{onClick:e[9]||(e[9]=(...m)=>r.verifyOtp&&r.verifyOtp(...m)),class:"w-full text-white py-3 rounded bg-red-600"}," Verify OTP ")]))]))])]),a("div",Mt,[d(P,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:f(m=>[a("div",Yt,[a("img",{src:m.data.src,alt:m.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,qt),a("div",Zt,g(m.data.alt),1)])]),_:1},8,["value"])])]),d(h,{position:"bottom-right",group:"br"})],64)}const Gt=j(Pt,[["render",Kt],["__scopeId","data-v-f915195d"]]);var Jt=function(e){var t=e.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(t("stepper.step.gap"),`;
    padding: `).concat(t("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),`;
    border-radius: `).concat(t("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(t("stepper.step.header.padding"),`;
    gap: `).concat(t("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(t("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(t("stepper.step.header.focus.ring.width")," ").concat(t("stepper.step.header.focus.ring.style")," ").concat(t("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(t("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("stepper.step.title.color"),`;
    font-weight: `).concat(t("stepper.step.title.font.weight"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("stepper.step.number.color"),`;
    border: 2px solid `).concat(t("stepper.step.number.border.color"),`;
    background: `).concat(t("stepper.step.number.background"),`;
    min-width: `).concat(t("stepper.step.number.size"),`;
    height: `).concat(t("stepper.step.number.size"),`;
    line-height: `).concat(t("stepper.step.number.size"),`;
    font-size: `).concat(t("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(t("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(t("stepper.step.number.active.background"),`;
    border-color: `).concat(t("stepper.step.number.active.border.color"),`;
    color: `).concat(t("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(t("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(t("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(t("stepper.separator.size"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(t("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(t("stepper.steppanel.background"),`;
    color: `).concat(t("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(t("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(t("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(t("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(t("stepper.step.number.size"),`;
}
`)},Qt={root:function(e){var t=e.props;return["p-stepper p-component",{"p-readonly":t.linear}]},separator:"p-stepper-separator"},Xt=T.extend({name:"stepper",theme:Jt,classes:Qt}),en={name:"BaseStepper",extends:N,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Xt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},de={name:"Stepper",extends:en,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||R()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||R()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function tn(n,e,t,l,o,r){return i(),p("div",u({class:n.cx("root"),role:"tablist"},n.ptmi("root")),[n.$slots.start?k(n.$slots,"start",{key:0}):y("",!0),k(n.$slots,"default"),n.$slots.end?k(n.$slots,"end",{key:1}):y("",!0)],16)}de.render=tn;var nn={root:"p-steppanels"},an=T.extend({name:"steppanels",classes:nn}),on={name:"BaseStepPanels",extends:N,style:an,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},pe={name:"StepPanels",extends:on,inheritAttrs:!1};function rn(n,e,t,l,o,r){return i(),p("div",u({class:n.cx("root")},n.ptmi("root")),[k(n.$slots,"default")],16)}pe.render=rn;var sn=function(e){var t=e.dt;return`
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: `.concat(t("iftalabel.top"),`;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: `).concat(t("iftalabel.font.size"),`;
    font-weight: `).concat(t("iftalabel.font.weight"),`;
    inset-inline-start: `).concat(t("iftalabel.position.x"),`;
    color: `).concat(t("iftalabel.color"),`;
    transition-duration: `).concat(t("iftalabel.transition.duration"),`;
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label {
    padding-block-start: `).concat(t("iftalabel.input.padding.top"),`;
    padding-block-end: `).concat(t("iftalabel.input.padding.bottom"),`;
}

.p-iftalabel:has(.p-invalid) label {
    color: `).concat(t("iftalabel.invalid.color"),`;
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: `).concat(t("iftalabel.focus.color"),`;
}

.p-iftalabel .p-inputicon {
    top: `).concat(t("iftalabel.input.padding.top"),`;
    transform: translateY(25%);
    margin-top: 0;
}
`)},ln={root:"p-iftalabel"},dn=T.extend({name:"iftalabel",theme:sn,classes:ln}),pn={name:"BaseIftaLabel",extends:N,style:dn,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},ue={name:"IftaLabel",extends:pn,inheritAttrs:!1};function un(n,e,t,l,o,r){return i(),p("span",u({class:n.cx("root")},n.ptmi("root")),[k(n.$slots,"default")],16)}ue.render=un;var cn=function(e){var t=e.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(t("textarea.color"),`;
    background: `).concat(t("textarea.background"),`;
    padding-block: `).concat(t("textarea.padding.y"),`;
    padding-inline: `).concat(t("textarea.padding.x"),`;
    border: 1px solid `).concat(t("textarea.border.color"),`;
    transition: background `).concat(t("textarea.transition.duration"),", color ").concat(t("textarea.transition.duration"),", border-color ").concat(t("textarea.transition.duration"),", outline-color ").concat(t("textarea.transition.duration"),", box-shadow ").concat(t("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(t("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(t("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(t("textarea.focus.border.color"),`;
    box-shadow: `).concat(t("textarea.focus.ring.shadow"),`;
    outline: `).concat(t("textarea.focus.ring.width")," ").concat(t("textarea.focus.ring.style")," ").concat(t("textarea.focus.ring.color"),`;
    outline-offset: `).concat(t("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(t("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(t("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(t("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(t("textarea.disabled.background"),`;
    color: `).concat(t("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(t("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(t("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(t("textarea.sm.font.size"),`;
    padding-block: `).concat(t("textarea.sm.padding.y"),`;
    padding-inline: `).concat(t("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(t("textarea.lg.font.size"),`;
    padding-block: `).concat(t("textarea.lg.padding.y"),`;
    padding-inline: `).concat(t("textarea.lg.padding.x"),`;
}
`)},fn={root:function(e){var t=e.instance,l=e.props;return["p-textarea p-component",{"p-filled":t.$filled,"p-textarea-resizable ":l.autoResize,"p-textarea-sm p-inputfield-sm":l.size==="small","p-textarea-lg p-inputfield-lg":l.size==="large","p-invalid":t.$invalid,"p-variant-filled":t.$variant==="filled","p-textarea-fluid":t.$fluid}]}},mn=T.extend({name:"textarea",theme:cn,classes:fn}),hn={name:"BaseTextarea",extends:H,props:{autoResize:Boolean},style:mn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},ce={name:"Textarea",extends:hn,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){e.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},bn=["value","disabled","aria-invalid"];function vn(n,e,t,l,o,r){return i(),p("textarea",u({class:n.cx("root"),value:n.d_value,disabled:n.disabled,"aria-invalid":n.invalid||void 0,onInput:e[0]||(e[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,bn)}ce.render=vn;var gn={root:function(e){var t=e.instance;return["p-steppanel",{"p-steppanel-active":t.isVertical&&t.active}]},content:"p-steppanel-content"},yn=T.extend({name:"steppanel",classes:gn}),fe={name:"StepperSeparator",hostName:"Stepper",extends:N};function wn(n,e,t,l,o,r){return i(),p("span",u({class:n.cx("separator")},n.ptm("separator")),null,16)}fe.render=wn;var xn={name:"BaseStepPanel",extends:N,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:yn,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},me={name:"StepPanel",extends:xn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var e,t,l=M(this.$pcStepper.$el,'[data-pc-name="step"]'),o=$e(this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.$el:(t=this.$pcStepList)===null||t===void 0?void 0:t.$el,'[data-pc-name="step"]'),r=ne(o,l);this.isSeparatorVisible=this.isVertical&&r!==l.length-1}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active}})},updateValue:function(e){this.$pcStepper.updateValue(e)}},computed:{active:function(){var e,t,l=this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value;return l===((t=this.$pcStepper)===null||t===void 0?void 0:t.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var e;return this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:fe}};function kn(n,e,t,l,o,r){var x=L("StepperSeparator");return r.isVertical?(i(),p(S,{key:0},[n.asChild?k(n.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(v){return r.updateValue(v)}}):(i(),I(te,u({key:0,name:"p-toggleable-content"},n.ptm("transition")),{default:f(function(){return[Z((i(),I(B(n.as),u({id:r.id,class:n.cx("root"),role:"tabpanel","aria-controls":r.ariaControls},r.getPTOptions("root")),{default:f(function(){return[o.isSeparatorVisible?(i(),I(x,{key:0})):y("",!0),a("div",u({class:n.cx("content")},r.getPTOptions("content")),[k(n.$slots,"default",{active:r.active,activateCallback:function(v){return r.updateValue(v)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[K,r.active]])]}),_:3},16))],64)):(i(),p(S,{key:1},[n.asChild?n.asChild&&r.active?k(n.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(v){return r.updateValue(v)}}):y("",!0):Z((i(),I(B(n.as),u({key:0,id:r.id,class:n.cx("root"),role:"tabpanel","aria-controls":r.ariaControls},r.getPTOptions("root")),{default:f(function(){return[k(n.$slots,"default",{active:r.active,activateCallback:function(v){return r.updateValue(v)}})]}),_:3},16,["id","class","aria-controls"])),[[K,r.active]])],64))}me.render=kn;var Sn=function(e){var t=e.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(t("radiobutton.width"),`;
    height: `).concat(t("radiobutton.height"),`;
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(t("radiobutton.border.color"),`;
    background: `).concat(t("radiobutton.background"),`;
    width: `).concat(t("radiobutton.width"),`;
    height: `).concat(t("radiobutton.height"),`;
    transition: background `).concat(t("radiobutton.transition.duration"),", color ").concat(t("radiobutton.transition.duration"),", border-color ").concat(t("radiobutton.transition.duration"),", box-shadow ").concat(t("radiobutton.transition.duration"),", outline-color ").concat(t("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(t("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(t("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(t("radiobutton.icon.size"),`;
    width: `).concat(t("radiobutton.icon.size"),`;
    height: `).concat(t("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.border.color"),`;
    background: `).concat(t("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.hover.border.color"),`;
    background: `).concat(t("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(t("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(t("radiobutton.focus.ring.width")," ").concat(t("radiobutton.focus.ring.style")," ").concat(t("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(t("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(t("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(t("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(t("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(t("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(t("radiobutton.disabled.background"),`;
    border-color: `).concat(t("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(t("radiobutton.icon.disabled.color"),`;
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: `).concat(t("radiobutton.sm.width"),`;
    height: `).concat(t("radiobutton.sm.height"),`;
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: `).concat(t("radiobutton.icon.sm.size"),`;
    width: `).concat(t("radiobutton.icon.sm.size"),`;
    height: `).concat(t("radiobutton.icon.sm.size"),`;
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: `).concat(t("radiobutton.lg.width"),`;
    height: `).concat(t("radiobutton.lg.height"),`;
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: `).concat(t("radiobutton.icon.lg.size"),`;
    width: `).concat(t("radiobutton.icon.lg.size"),`;
    height: `).concat(t("radiobutton.icon.lg.size"),`;
}
`)},Cn={root:function(e){var t=e.instance,l=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":l.disabled,"p-invalid":t.$pcRadioButtonGroup?t.$pcRadioButtonGroup.$invalid:t.$invalid,"p-variant-filled":t.$variant==="filled","p-radiobutton-sm p-inputfield-sm":l.size==="small","p-radiobutton-lg p-inputfield-lg":l.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Vn=T.extend({name:"radiobutton",theme:Sn,classes:Cn}),In={name:"BaseRadioButton",extends:H,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Vn,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},he={name:"RadioButton",extends:In,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(t,e):this.writeValue(t,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var t,l;this.$emit("blur",e),(t=(l=this.formField).onBlur)===null||t===void 0||t.call(l,e)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var e=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return e!=null&&(this.binary?!!e:Ee(e,this.value))}}},Tn=["data-p-checked","data-p-disabled"],Pn=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function $n(n,e,t,l,o,r){return i(),p("div",u({class:n.cx("root")},r.getPTOptions("root"),{"data-p-checked":r.checked,"data-p-disabled":n.disabled}),[a("input",u({id:n.inputId,type:"radio",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:r.groupName,checked:r.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:e[0]||(e[0]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[1]||(e[1]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)}),onChange:e[2]||(e[2]=function(){return r.onChange&&r.onChange.apply(r,arguments)})},r.getPTOptions("input")),null,16,Pn),a("div",u({class:n.cx("box")},r.getPTOptions("box")),[a("div",u({class:n.cx("icon")},r.getPTOptions("icon")),null,16)],16)],16,Tn)}he.render=$n;var En={root:"p-steplist"},Nn=T.extend({name:"steplist",classes:En}),On={name:"BaseStepList",extends:N,style:Nn,provide:function(){return{$pcStepList:this,$parentInstance:this}}},be={name:"StepList",extends:On,inheritAttrs:!1};function Ln(n,e,t,l,o,r){return i(),p("div",u({class:n.cx("root")},n.ptmi("root")),[k(n.$slots,"default")],16)}be.render=Ln;var zn={root:function(e){var t=e.instance;return["p-step",{"p-step-active":t.active,"p-disabled":t.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},Bn=T.extend({name:"step",classes:zn}),ve={name:"StepperSeparator",hostName:"Stepper",extends:N};function An(n,e,t,l,o,r){return i(),p("span",u({class:n.cx("separator")},n.ptm("separator")),null,16)}ve.render=An;var Dn={name:"BaseStep",extends:N,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Bn,provide:function(){return{$pcStep:this,$parentInstance:this}}},ge={name:"Step",extends:Dn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=ne(this.$el,M(this.$pcStepper.$el,'[data-pc-name="step"]')),t=M(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==t-1}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:ve}},Rn=["id","tabindex","aria-controls","disabled"];function jn(n,e,t,l,o,r){var x=L("StepperSeparator");return n.asChild?k(n.$slots,"default",{key:1,class:O(n.cx("root")),active:r.active,value:n.value,a11yAttrs:r.a11yAttrs,activateCallback:r.onStepClick}):(i(),I(B(n.as),u({key:0,class:n.cx("root"),"aria-current":r.active?"step":void 0,role:"presentation","data-p-active":r.active,"data-p-disabled":r.isStepDisabled},r.getPTOptions("root")),{default:f(function(){return[a("button",u({id:r.id,class:n.cx("header"),role:"tab",type:"button",tabindex:r.isStepDisabled?-1:void 0,"aria-controls":r.ariaControls,disabled:r.isStepDisabled,onClick:e[0]||(e[0]=function(){return r.onStepClick&&r.onStepClick.apply(r,arguments)})},r.getPTOptions("header")),[a("span",u({class:n.cx("number")},r.getPTOptions("number")),g(r.activeValue),17),a("span",u({class:n.cx("title")},r.getPTOptions("title")),[k(n.$slots,"default")],16)],16,Rn),o.isSeparatorVisible?(i(),I(x,{key:0})):y("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}ge.render=jn;const Hn={data(){return{responseMessage:{},activeStep:1,firstName:"",lastName:"",phoneNumber:"",email:"",businessName:"",location:"",errors:{},businessType:null,experienceYears:null,experienceAreas:[],brandsWorkedWith:[],integrationExperience:null,familiarWithStandard:null,purchaseSource:"",purchaseHikvision:null,requiresTraining:null,images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],businessCategories:[{name:"System Integrator",key:"System Integrator"},{name:"Reseller",key:"Reseller"},{name:"Technician",key:"Technician"},{name:"Other",key:"Other"}],yearExperiences:[{name:"1 Year",key:"1 Year"},{name:"1-3 Years",key:"1-3 Years"},{name:"4-7 Years",key:"4-7 Years"},{name:"8+",key:"8+"}],experienceAreasList:[{name:"CCTV Systems",key:"CCTV Systems"},{name:"Access Control Systems",key:"Access Control Systems"},{name:"Video Intercom Systems",key:"Video Intercom Systems"},{name:"Networking and Computer Products",key:"Networking and Computer Products"},{name:"Electrical Installations",key:"Electrical Installations"}],brandsWorkedWithList:[{name:"Hikvision",key:"Hikvision"},{name:"Dahua",key:"Dahua"},{name:"Uniview",key:"Uniview"},{name:"Tandy",key:"Tandy"},{name:"Other (Please Specify)",key:"Other"}],integrationExperienceList:[{name:"Yes, Extensive Experience",key:"Yes, Extensive Experience"},{name:"Some Experience",key:"Some Experience"},{name:"No Experience",key:"No Experience"}],wherePurchase:[{name:"National Distributor",key:"National Distributor"},{name:"Regional Supplier",key:"Regional Supplier"},{name:"Online Retailer ",key:"Online Retailer "},{name:"Other",key:"Other"}],familiarWithStandards:[{name:"Yes, I'm certified",key:"Yes, I'm certified"},{name:"I am familiar but not certified",key:"I am familiar but not certified"},{name:"No, but I am willing to learn",key:"No, but I am willing to learn"}],options:[{name:"Yes",key:"Yes"},{name:"No",key:"No"},{name:"Not yet, but interested",key:"Not yet, but interested"}],experienceAreasError:!1,brandsWorkedWithError:!1,integrationExperienceError:!1,familiarWithStandardError:!1,purchaseError:!1,currentlyPurchaseError:!1,formData:{technicalExpertise:"",hikvisionTechDifference:"",troubleshootCCTV:"",networkDesign:"",supportAreas:"",businessSupport:""},textareaFields:[{id:"technicalExpertise",model:"technicalExpertise",label:`Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`},{id:"hikvisionTechDifference",model:"hikvisionTechDifference",label:"What is the difference between Hikvision’s AcuSense and ColorVu technologies?"},{id:"troubleshootCCTV",model:"troubleshootCCTV",label:"How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"},{id:"networkDesign",model:"networkDesign",label:"What are the key considerations when designing a network for IP-based surveillance systems?"},{id:"supportAreas",model:"supportAreas",label:"What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"},{id:"businessSupport",model:"businessSupport",label:"How can we best support your business? (Optional)"}]}},methods:{handleSubmit(n){this.validateForm()?(console.log("Form submitted:",{...this.formData}),this.submitForm()):console.log("Validation failed")},validateForm(){let n=!0;return this.errors={},this.purchaseError=this.purchaseSource.length==0,this.purchaseError&&(n=!1),this.currentlyPurchaseError=!this.purchaseHikvision,this.currentlyPurchaseError&&(n=!1),this.textareaFields.forEach(e=>{!this.formData[e.model].trim()&&e.id!=="businessSupport"&&(this.errors[e.model]="This field cannot be empty.",n=!1)}),n},validateAndProceed(n,e){this.errors={},e==1&&(this.firstName||(this.errors.firstName="First name is required."),this.lastName||(this.errors.lastName="Last name is required."),this.phoneNumber||(this.errors.phoneNumber="Phone number is required."),this.email||(this.errors.email="Email address is required."),this.businessName||(this.errors.businessName="Business name is required."),this.location||(this.errors.location="Location is required."),this.businessType||(this.errors.businessType="Business Type is required."),this.experienceYears||(this.errors.experienceYears="Experience Years is required."),Object.keys(this.errors).length===0&&n(2)),e==2&&(console.log("sxasxsax"),this.experienceAreasError=!1,this.brandsWorkedWithError=!1,this.integrationExperienceError=!1,this.familiarWithStandardError=!1,this.experienceAreas.length===0&&(this.experienceAreasError=!0),this.brandsWorkedWith.length===0&&(this.brandsWorkedWithError=!0),this.integrationExperience||(this.integrationExperienceError=!0),this.familiarWithStandard||(this.familiarWithStandardError=!0),!this.experienceAreasError&&!this.brandsWorkedWithError&&!this.integrationExperienceError&&!this.familiarWithStandardError&&n(3))},async submitForm(){console.log("cdscs",this.formData);const n={businessName:this.businessName,phoneNumber:this.phoneNumber,email:this.email,location:this.location,businessType:this.businessType,experienceYears:this.experienceYears,experienceAreas:this.experienceAreas,brandsWorkedWith:this.brandsWorkedWith,integrationExperience:this.integrationExperience,familiarWithStandard:this.familiarWithStandard,purchaseSource:this.purchaseSource,purchaseHikvision:this.purchaseHikvision,requiresTraining:this.requiresTraining};console.log("Form Data:",n);try{const{$axios:e}=z(),t=await e.post("/user/technician-questionnaire",n);this.responseMessage=t.data.message,this.activateCallback(4),t.status}catch(e){console.error("Error submitting form:",e)}finally{}},resetForm(){this.businessName="",this.phoneNumber="",this.email="",this.location="",this.businessType=null,this.experienceYears=null,this.experienceAreas=[],this.brandsWorkedWith=[],this.integrationExperience=null,this.purchaseSource="",this.purchaseHikvision=null,this.requiresTraining=null}}},Wn={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},_n={class:"flex w-full flex-col items-center justify-center"},Un={class:"flex justify-center items-center absolute top-16 left-8"},Fn={class:"border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white"},Mn=["onClick"],Yn=["onClick"],qn=["onClick"],Zn=["onClick"],Kn={class:"flex flex-col gap-4 mx-auto",style:{"min-width":"40vw"}},Gn={class:"flex gap-4"},Jn={class:"field w-1/2"},Qn={key:0,class:"text-red-500"},Xn={class:"field w-1/2"},ea={key:0,class:"text-red-500"},ta={class:"flex gap-4"},na={class:"field w-1/2"},aa={key:0,class:"text-red-500"},oa={class:"field w-1/2"},ra={key:0,class:"text-red-500"},sa={class:"flex gap-4"},ia={class:"field w-1/2"},la={key:0,class:"text-red-500"},da={class:"field w-1/2"},pa={key:0,class:"text-red-500"},ua={class:"flex flex-col gap-4"},ca={class:"flex flex-wrap gap-4"},fa=["for"],ma={key:0,class:"text-red-500"},ha={class:"flex flex-wrap gap-4"},ba=["for"],va={key:0,class:"text-red-500"},ga={class:"flex pt-6 justify-end",style:{"max-width":"800px",margin:"0 auto"}},ya={class:"flex flex-col gap-4"},wa=["for"],xa={key:0,class:"text-red-500"},ka=["for"],Sa={key:1,class:"text-red-500"},Ca={class:"field"},Va=["for"],Ia={key:0,class:"text-red-500"},Ta={class:"field"},Pa=["for"],$a={key:0,class:"text-red-500"},Ea={class:"flex pt-6 justify-between"},Na={class:"flex flex-col gap-4"},Oa={class:"field"},La=["for"],za={key:0,class:"text-red-500"},Ba={class:"field"},Aa=["for"],Da={key:0,class:"text-red-500"},Ra={class:"font-bold pb-3"},ja=["innerHTML"],Ha=["for"],Wa={key:0,class:"text-red-500"},_a={class:"flex pt-6 justify-between"},Ua={class:"flex pt-6 justify-between"},Fa={class:"hidden md:block h-full w-full"},Ma={class:"relative w-full h-screen flex justify-center items-center"},Ya=["src","alt"],qa={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Za(n,e,t,l,o,r){const x=De,c=ge,v=be,C=D,E=he,P=re,h=me,m=Ae,ye=ce,we=ue,xe=pe,ke=de,Se=Y;return i(),p("div",Wn,[a("div",_n,[a("div",Un,[a("a",{onClick:e[0]||(e[0]=w=>n.$emit("back-to-signup")),class:"text-primary text-md cursor-pointer hover:text-secondary"},e[17]||(e[17]=[a("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}},null,-1),V(" Back to Signup")]))]),a("div",Fn,[d(ke,{value:o.activeStep,"onUpdate:value":e[16]||(e[16]=w=>o.activeStep=w),class:""},{default:f(()=>[d(v,null,{default:f(()=>[d(c,{asChild:"",value:1},{default:f(({activateCallback:w,value:s,a11yAttrs:b})=>[a("div",u({class:"flex flex-row flex-auto gap-2"},b.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},b.header),[a("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":s<=o.activeStep,"border-surface-200 dark:border-surface-700":s>o.activeStep}])},e[18]||(e[18]=[a("i",{class:"pi pi-building"},null,-1)]),2)],16,Mn),d(x)],16)]),_:1}),d(c,{asChild:"",value:2},{default:f(({activateCallback:w,value:s,a11yAttrs:b})=>[a("div",u({class:"flex flex-row flex-auto gap-2 pl-2"},b.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},b.header),[a("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":s<=o.activeStep,"border-surface-200 dark:border-surface-700":s>o.activeStep}])},e[19]||(e[19]=[a("i",{class:"pi pi-cog"},null,-1)]),2)],16,Yn),d(x)],16)]),_:1}),d(c,{asChild:"",value:3},{default:f(({activateCallback:w,value:s,a11yAttrs:b})=>[a("div",u({class:"flex flex-row pl-2"},b.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},b.header),[a("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":s<=o.activeStep,"border-surface-200 dark:border-surface-700":s>o.activeStep}])},e[20]||(e[20]=[a("i",{class:"pi pi-question-circle"},null,-1)]),2)],16,qn),d(x)],16)]),_:1}),d(c,{asChild:"",value:4},{default:f(({activateCallback:w,value:s,a11yAttrs:b})=>[a("div",u({class:"flex flex-row pl-2"},b.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},b.header),[a("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":s<=o.activeStep,"border-surface-200 dark:border-surface-700":s>o.activeStep}])},e[21]||(e[21]=[a("i",{class:"pi pi-check-circle"},null,-1)]),2)],16,Zn)],16)]),_:1})]),_:1}),d(xe,null,{default:f(()=>[d(h,{value:1},{default:f(({activateCallback:w})=>[a("div",Kn,[e[30]||(e[30]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 1: Business Identification ",-1)),a("div",Gn,[a("div",Jn,[e[22]||(e[22]=a("label",{for:"firstName",class:"font-bold"},"First Name",-1)),d(C,{id:"firstName",modelValue:o.firstName,"onUpdate:modelValue":e[1]||(e[1]=s=>o.firstName=s),type:"text",placeholder:"Enter first name",class:"w-full"},null,8,["modelValue"]),o.errors.firstName?(i(),p("small",Qn,g(o.errors.firstName),1)):y("",!0)]),a("div",Xn,[e[23]||(e[23]=a("label",{for:"lastName",class:"font-bold"},"Last Name",-1)),d(C,{id:"lastName",modelValue:o.lastName,"onUpdate:modelValue":e[2]||(e[2]=s=>o.lastName=s),type:"text",placeholder:"Enter last name",class:"w-full"},null,8,["modelValue"]),o.errors.lastName?(i(),p("small",ea,g(o.errors.lastName),1)):y("",!0)])]),a("div",ta,[a("div",na,[e[24]||(e[24]=a("label",{for:"phoneNumber",class:"font-bold"},"Phone Number",-1)),d(C,{id:"phoneNumber",modelValue:o.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=s=>o.phoneNumber=s),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"]),o.errors.phoneNumber?(i(),p("small",aa,g(o.errors.phoneNumber),1)):y("",!0)]),a("div",oa,[e[25]||(e[25]=a("label",{for:"email",class:"font-bold"},"Email Address",-1)),d(C,{id:"email",modelValue:o.email,"onUpdate:modelValue":e[4]||(e[4]=s=>o.email=s),type:"email",placeholder:"Enter email address",class:"w-full"},null,8,["modelValue"]),o.errors.email?(i(),p("small",ra,g(o.errors.email),1)):y("",!0)])]),a("div",sa,[a("div",ia,[e[26]||(e[26]=a("label",{for:"businessName",class:"font-bold"},"Business/Company Name",-1)),d(C,{id:"businessName",modelValue:o.businessName,"onUpdate:modelValue":e[5]||(e[5]=s=>o.businessName=s),type:"text",placeholder:"Enter business name",class:"w-full"},null,8,["modelValue"]),o.errors.businessName?(i(),p("small",la,g(o.errors.businessName),1)):y("",!0)]),a("div",da,[e[27]||(e[27]=a("label",{for:"location",class:"font-bold"},"Business Location",-1)),d(C,{id:"location",modelValue:o.location,"onUpdate:modelValue":e[6]||(e[6]=s=>o.location=s),type:"text",placeholder:"City, State, Country",class:"w-full"},null,8,["modelValue"]),o.errors.location?(i(),p("small",pa,g(o.errors.location),1)):y("",!0)])]),a("div",ua,[e[28]||(e[28]=a("div",{class:"font-bold mb-2"},"Business Type",-1)),a("div",ca,[(i(!0),p(S,null,$(o.businessCategories,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(E,{modelValue:o.businessType,"onUpdate:modelValue":e[7]||(e[7]=b=>o.businessType=b),inputId:s.key,name:"businessType",value:s.key},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,fa)]))),128)),o.errors.businessType?(i(),p("small",ma,g(o.errors.businessType),1)):y("",!0)])]),a("div",null,[e[29]||(e[29]=a("div",{class:"font-bold mb-2"},"Years of Experience",-1)),a("div",ha,[(i(!0),p(S,null,$(o.yearExperiences,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(E,{modelValue:o.experienceYears,"onUpdate:modelValue":e[8]||(e[8]=b=>o.experienceYears=b),inputId:s.key,name:"experienceYears",value:s.key},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,ba)]))),128)),o.errors.experienceYears?(i(),p("small",va,g(o.errors.experienceYears),1)):y("",!0)])])]),a("div",ga,[d(P,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:s=>r.validateAndProceed(w,1)},null,8,["onClick"])])]),_:1}),d(h,{value:2,style:{"min-width":"40vw"}},{default:f(({activateCallback:w})=>[a("div",ya,[e[35]||(e[35]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 2: Technical Experience ",-1)),a("div",null,[e[31]||(e[31]=a("label",{class:"font-bold py-5"}," Which of the following areas do you have experience with? ",-1)),(i(!0),p(S,null,$(o.experienceAreasList,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(m,{modelValue:o.experienceAreas,"onUpdate:modelValue":e[9]||(e[9]=b=>o.experienceAreas=b),inputId:s.key,name:"category",value:s.name},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,wa)]))),128)),o.experienceAreasError?(i(),p("p",xa," Please select at least one area of experience. ")):y("",!0)]),a("div",null,[e[32]||(e[32]=a("label",{class:"font-bold pb-3"}," Which brands have you primarily worked with? ",-1)),(i(!0),p(S,null,$(o.brandsWorkedWithList,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(m,{modelValue:o.brandsWorkedWith,"onUpdate:modelValue":e[10]||(e[10]=b=>o.brandsWorkedWith=b),inputId:s.key,name:"category",value:s.key},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,ka)]))),128)),o.brandsWorkedWith.includes("Other")?(i(),I(C,{key:0,id:"purchaseSource",modelValue:o.purchaseSource,"onUpdate:modelValue":e[11]||(e[11]=s=>o.purchaseSource=s),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):y("",!0),o.brandsWorkedWithError?(i(),p("p",Sa," Please select at least one brand. ")):y("",!0)]),a("div",Ca,[e[33]||(e[33]=a("label",{class:"font-bold pb-3"}," Do you have experience integrating security systems into larger solutions? ",-1)),(i(!0),p(S,null,$(o.integrationExperienceList,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(E,{modelValue:o.integrationExperience,"onUpdate:modelValue":e[12]||(e[12]=b=>o.integrationExperience=b),inputId:s.key,name:"integrationExperience",value:s.name},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,Va)]))),128)),o.integrationExperienceError?(i(),p("p",Ia," Please select an option. ")):y("",!0)]),a("div",Ta,[e[34]||(e[34]=a("label",{class:"font-bold pb-3"}," Are you familiar with Hikvision product certifications and installation standards? ",-1)),(i(!0),p(S,null,$(o.familiarWithStandards,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(E,{modelValue:o.familiarWithStandard,"onUpdate:modelValue":e[13]||(e[13]=b=>o.familiarWithStandard=b),inputId:s.key,name:"familiarWithStandard",value:s.name},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,Pa)]))),128)),o.familiarWithStandardError?(i(),p("p",$a," Please select an option. ")):y("",!0)])]),a("div",Ea,[d(P,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:s=>w(1)},null,8,["onClick"]),d(P,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:s=>r.validateAndProceed(w,2)},null,8,["onClick"])])]),_:1}),d(h,{value:3,style:{"min-width":"40vw"}},{default:f(({activateCallback:w})=>[a("div",Na,[e[38]||(e[38]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 3: Technical Questions ",-1)),a("div",Oa,[e[36]||(e[36]=a("label",{for:"purchaseSource",class:"font-bold pb-3"}," Where do you currently purchase your security products? (Please select all that apply and provide details for each category) ",-1)),(i(!0),p(S,null,$(o.wherePurchase,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(m,{modelValue:o.purchaseSource,"onUpdate:modelValue":e[14]||(e[14]=b=>o.purchaseSource=b),inputId:s.key,name:"purchaseSource",value:s.name},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,La)]))),128)),o.purchaseError?(i(),p("p",za," Please select an option. ")):y("",!0)]),a("div",Ba,[e[37]||(e[37]=a("label",{class:"font-bold pb-3"}," Do you currently purchase Hikvision products? ",-1)),(i(!0),p(S,null,$(o.options,s=>(i(),p("div",{key:s.key,class:"flex items-center gap-2"},[d(E,{modelValue:o.purchaseHikvision,"onUpdate:modelValue":e[15]||(e[15]=b=>o.purchaseHikvision=b),inputId:s.key,name:"purchaseHikvision",value:s.name},null,8,["modelValue","inputId","value"]),a("label",{for:s.key},g(s.name),9,Aa)]))),128)),o.currentlyPurchaseError?(i(),p("p",Da," Please select an option. ")):y("",!0)]),(i(!0),p(S,null,$(o.textareaFields,s=>(i(),p("div",{key:s.id,class:"field"},[a("label",Ra,[a("span",{innerHTML:s.label},null,8,ja)]),d(we,{class:"mt-4"},{default:f(()=>[d(ye,{id:s.id,modelValue:o.formData[s.model],"onUpdate:modelValue":b=>o.formData[s.model]=b,rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["id","modelValue","onUpdate:modelValue"]),a("label",{for:s.id},"Summary",8,Ha)]),_:2},1024),o.errors[s.model]?(i(),p("p",Wa,g(o.errors[s.model]),1)):y("",!0)]))),128))]),a("div",_a,[d(P,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:s=>w(2)},null,8,["onClick"]),d(P,{label:"Submit",icon:"pi pi-check",iconPos:"right",onClick:s=>r.handleSubmit(w)},null,8,["onClick"])])]),_:1}),d(h,{value:4},{default:f(({activateCallback:w})=>[e[39]||(e[39]=a("div",{class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},[a("div",{class:"text-center mt-4 mb-4 text-sm font-semibold"},[a("div",{class:"p-6 rounded-lg shadow-md"},[V(" Thank You! "),a("p",{class:"text-gray-700"}," Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),a("ul",{class:"list-disc text-left pl-5 text-gray-700 mt-3"},[a("li",null,[a("strong",null,"Reseller Pricing")]),a("li",null,[a("strong",null,"Comprehensive Marketing and Technical Resources")]),a("li",null,[a("strong",null,"Product and Business Support")])]),a("p",{class:"text-gray-700 mt-4"}," For any inquiries or further assistance, please do not hesitate to contact us: "),a("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[a("p",{class:"text-gray-800 font-semibold"},[V(" 📧 Email: "),a("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),a("p",{class:"text-gray-800 font-semibold"},[V(" 📞 Phone: "),a("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])]),a("p",{class:"text-gray-700 mt-6"}," We look forward to the opportunity to collaborate with you. "),a("hr",{class:"my-4 border-gray-300"}),a("p",{class:"text-gray-800 font-bold"},"Best regards,"),a("p",{class:"text-gray-700"}," Secure Digital Limited | Hik Digital Mart Limited "),a("p",{class:"text-gray-700 font-semibold"}," SDLKenya Online Shop Administration Department "),a("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[a("p",{class:"text-gray-800 font-semibold"},[V(" 📧 Email: "),a("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),a("p",{class:"text-gray-800 font-semibold"},[V(" 📞 Phone: "),a("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])])])])],-1)),a("div",Ua,[d(P,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:s=>w(3)},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["value"])])]),a("div",Fa,[d(Se,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full"},{item:f(w=>[a("div",Ma,[a("img",{src:w.data.src,alt:w.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,Ya),a("div",qa,g(w.data.alt),1)])]),_:1},8,["value"])])])}const Ka=j(Hn,[["render",Za],["__scopeId","data-v-8c652570"]]),Ga={class:"auth-container",style:{"background-color":"white"}},co=Ne({__name:"index",setup(n){const e=G(!1),t=G(!1),l=()=>{e.value=!e.value,t.value=!1},o=()=>{e.value=!1,t.value=!0},r=()=>{e.value=!0,t.value=!1};return(x,c)=>(i(),p("div",Ga,[e.value?(i(),I(ut,{key:0,onToggle:l,onShowQuestionnaire:o})):t.value?(i(),I(Ka,{key:1,onBackToSignup:r})):(i(),I(Gt,{key:2,onToggle:l}))]))}});export{co as default};
