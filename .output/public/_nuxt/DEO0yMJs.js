import{s as pe}from"./CpVYegMt.js";import{s as U}from"./CfhiYWEK.js";import{B,p as ce,q as _,o as i,c as u,F as P,m as E,s as I,b as l,u as O,v as c,_ as z,x as J,y as $,a as s,d as C,z as me,w as m,t as f,A as Pe,C as Ve,D as Te,E as Ne,G as N,H as A,I as b,T as fe,J as Ee,K as Q,L as Be,M as he,N as ie,O as de,P as Oe,Q as Le,r as Z}from"./Dvr-1P0k.js";import{s as D,a as $e,U as j,C as _e,O as De}from"./Dp33GQVh.js";import{s as H}from"./Vu-mslg2.js";import{s as L,a as be}from"./Da1NbyRp.js";import{_ as ve}from"./zV1JCXFO.js";import{s as X}from"./CKTCZheq.js";import{Z as K,s as Ae}from"./Cd1j1mIq.js";import{s as ye}from"./DBHCixN5.js";import{s as ge}from"./DMib_fTd.js";import"./Sm66ORQ-.js";import"./oTj1nOeS.js";import"./CEKDN7gs.js";var Re=function(e){var n=e.dt;return`
.p-inputotp {
    display: flex;
    align-items: center;
    gap: `.concat(n("inputotp.gap"),`;
}

.p-inputotp-input {
    text-align: center;
    width: `).concat(n("inputotp.input.width"),`;
}

.p-inputotp-input.p-inputtext-sm {
    text-align: center;
    width: `).concat(n("inputotp.input.sm.width"),`;
}

.p-inputotp-input.p-inputtext-lg {
    text-align: center;
    width: `).concat(n("inputotp.input.lg.width"),`;
}
`)},ze={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},We=B.extend({name:"inputotp",theme:Re,classes:ze}),je={name:"BaseInputOtp",extends:H,props:{readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:We,provide:function(){return{$pcInputOtp:this,$parentInstance:this}}},F={name:"InputOtp",extends:je,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(e){this.tokens=e?e.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(e){return{value:this.tokens[e]}},getTemplateEvents:function(e){var n=this;return{input:function(o){return n.onInput(o,e)},keydown:function(o){return n.onKeyDown(o)},focus:function(o){return n.onFocus(o)},blur:function(o){return n.onBlur(o)},paste:function(o){return n.onPaste(o)}}},onInput:function(e,n){this.tokens[n]=e.target.value,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward"||ce()&&e instanceof CustomEvent)&&this.moveToNext(e)},updateModel:function(e){var n=this.tokens.join("");this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},moveToPrev:function(e){var n=this.findPrevInput(e.target);n&&(n.focus(),n.select())},moveToNext:function(e){var n=this.findNextInput(e.target);n&&(n.focus(),n.select())},findNextInput:function(e){var n=e.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)},findPrevInput:function(e){var n=e.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)},onFocus:function(e){e.target.select(),this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onClick:function(e){setTimeout(function(){return e.target.select()},1)},onKeyDown:function(e){if(!(e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Tab":break;default:(this.integerOnly&&!(e.code!=="Space"&&Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}},onPaste:function(e){var n=e.clipboardData.getData("text");if(n.length){var p=n.substring(0,this.length);(!this.integerOnly||!isNaN(p))&&(this.tokens=p.split(""),this.updateModel(e))}e.preventDefault()}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:D}};function Ue(t,e,n,p,o,r){var k=_("OtpInputText");return i(),u("div",c({class:t.cx("root")},t.ptmi("root")),[(i(!0),u(P,null,E(t.length,function(h){return I(t.$slots,"default",{key:h,events:r.getTemplateEvents(h-1),attrs:r.getTemplateAttrs(h-1),index:h},function(){return[l(k,{value:o.tokens[h-1],type:r.inputType,class:O(t.cx("pcInputText")),name:t.$formName,inputmode:r.inputMode,variant:t.variant,readonly:t.readonly,disabled:t.disabled,size:t.size,invalid:t.invalid,tabindex:t.tabindex,unstyled:t.unstyled,onInput:function(S){return r.onInput(S,h-1)},onFocus:e[0]||(e[0]=function(g){return r.onFocus(g)}),onBlur:e[1]||(e[1]=function(g){return r.onBlur(g)}),onPaste:e[2]||(e[2]=function(g){return r.onPaste(g)}),onKeydown:e[3]||(e[3]=function(g){return r.onKeyDown(g)}),onClick:e[4]||(e[4]=function(g){return r.onClick(g)}),pt:t.ptm("pcInputText")},null,8,["value","type","class","name","inputmode","variant","readonly","disabled","size","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}F.render=Ue;var He=function(e){var n=e.dt;return`
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
    font-weight: `.concat(n("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(n("floatlabel.position.x"),`;
    color: `).concat(n("floatlabel.color"),`;
    transition-duration: `).concat(n("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(n("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(n("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(n("floatlabel.active.font.size"),`;
    font-weight: `).concat(n("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(n("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(n("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(n("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(n("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(n("floatlabel.in.active.top"),`;
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
    border-radius: `).concat(n("floatlabel.on.border.radius"),`;
    background: `).concat(n("floatlabel.on.active.background"),`;
    padding: `).concat(n("floatlabel.on.active.padding"),`;
}
`)},Fe={root:function(e){e.instance;var n=e.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},Ye=B.extend({name:"floatlabel",theme:He,classes:Fe}),Me={name:"BaseFloatLabel",extends:L,props:{variant:{type:String,default:"over"}},style:Ye,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},ee={name:"FloatLabel",extends:Me,inheritAttrs:!1};function qe(t,e,n,p,o,r){return i(),u("span",c({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default")],16)}ee.render=qe;const Ze={components:{InputOtp:F},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{firstName:"",lastName:"",email:"",password:"",cpassword:"",phone:"",role:""},otp:"",otpSent:!1,roles:[]}},methods:{handleRole(){this.form.role.name=="TECHNICIAN"&&this.$emit("show-questionnaire"),this.form.role.name=="WHOLESALER"&&this.$emit("show-wholesaler")},async register(){try{const t=J(),{$axios:e}=$();await t.register({firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,password:this.form.password,phoneNumber:this.form.phoneNumber,roleId:this.form.role.id}),this.otpSent=!0,console.log("OTP sent to email")}catch(t){console.error("Error registering:",t),this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{$axios:t}=$(),e=J(),{accessToken:n,user:p}=await e.verifyOtp({email:this.form.email,otp:this.otp});n&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async fetchRoles(){const{$axios:t}=$();try{const e=await t.get("/user/roles");this.roles=e.data}catch(e){console.error("Error fetching roles:",e)}}},mounted(){this.fetchRoles()}},Ke={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Ge={class:"flex w-full h-screen flex-col items-center justify-center"},Je={class:"border shadow-lg p-8 rounded-xl bg-white text-center flex flex-col items-center"},Qe={class:"flex space-x-4 mb-4 w-full"},Xe={class:"flex flex-col space-y-4 mb-4 w-full"},et={key:1,class:"flex flex-col items-center text-center w-full"},tt={class:"text-gray-500 mb-6"},nt={class:"font-weight-bold font-bold"},st={class:"w-full flex justify-center mb-4"},ot={class:"flex justify-center w-full"},rt={class:"text-sm mt-4"},at={class:"hidden md:block h-full w-full p-4 relative"},lt={class:"relative w-full h-screen flex justify-center items-center"},it=["src","alt"],dt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function ut(t,e,n,p,o,r){const k=D,h=ee,g=$e,S=F,V=U,T=pe;return i(),u(P,null,[s("div",Ke,[s("div",Ge,[e[20]||(e[20]=s("div",{class:"flex justify-center items-center absolute top-16 left-8"},[s("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[s("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),C(" Back to Shop")])],-1)),s("div",Je,[e[18]||(e[18]=s("img",{src:ve,alt:"Login",class:"h-28 w-28 mb-6 mx-auto"},null,-1)),e[19]||(e[19]=s("p",{class:"text-gray-500 text-2xl mb-10"}," Enter your details below to sign up ",-1)),o.otpSent?(i(),u("div",et,[e[16]||(e[16]=s("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),s("p",tt,[e[15]||(e[15]=C(" Enter the OTP sent to your email address. ")),s("span",nt,f(o.form.email),1)]),s("div",st,[s("div",ot,[l(S,{length:6,modelValue:o.otp,"onUpdate:modelValue":e[7]||(e[7]=y=>o.otp=y),class:"p-inputtex text-center p-3 w-full max-w-sm",placeholder:"Enter OTP"},null,8,["modelValue"])])]),s("button",{onClick:e[8]||(e[8]=(...y)=>r.verifyOtp&&r.verifyOtp(...y)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"}," Verify OTP ")])):(i(),u("form",{key:0,onSubmit:e[6]||(e[6]=me((...y)=>r.register&&r.register(...y),["prevent"])),class:"w-full flex flex-col items-center"},[s("div",Qe,[l(h,{variant:"on",class:"w-full"},{default:m(()=>[l(k,{type:"text",id:"firstName",modelValue:o.form.firstName,"onUpdate:modelValue":e[0]||(e[0]=y=>o.form.firstName=y),class:"w-full"},null,8,["modelValue"]),e[10]||(e[10]=s("label",{for:"firstName"},"First Name",-1))]),_:1}),l(h,{variant:"on",class:"w-full"},{default:m(()=>[l(k,{type:"text",id:"lastName",modelValue:o.form.lastName,"onUpdate:modelValue":e[1]||(e[1]=y=>o.form.lastName=y),class:"w-full"},null,8,["modelValue"]),e[11]||(e[11]=s("label",{for:"lastName"},"Last Name",-1))]),_:1})]),s("div",Xe,[l(h,{variant:"on",class:"w-full"},{default:m(()=>[l(k,{type:"email",id:"email",modelValue:o.form.email,"onUpdate:modelValue":e[2]||(e[2]=y=>o.form.email=y),class:"w-full"},null,8,["modelValue"]),e[12]||(e[12]=s("label",{for:"email"},"Email",-1))]),_:1}),l(h,{variant:"on",class:"w-full"},{default:m(()=>[l(k,{type:"number",id:"phoneNumber",modelValue:o.form.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=y=>o.form.phoneNumber=y),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=s("label",{for:"phoneNumber"},"Mobile Phone",-1))]),_:1}),l(k,{name:"password",modelValue:o.form.password,"onUpdate:modelValue":e[4]||(e[4]=y=>o.form.password=y),type:"password",class:"w-full",placeholder:"Password"},null,8,["modelValue"]),l(g,{modelValue:o.form.role,"onUpdate:modelValue":e[5]||(e[5]=y=>o.form.role=y),options:o.roles,optionLabel:"name",onChange:r.handleRole,placeholder:"Select a Role",class:"w-full custom-dropdown"},null,8,["modelValue","options","onChange"])]),e[14]||(e[14]=s("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-6"}," Sign Up ",-1))],32)),s("p",rt,[e[17]||(e[17]=C(" Already have an account? ")),s("span",{class:"text-blue-500 cursor-pointer",onClick:e[9]||(e[9]=y=>t.$emit("toggle"))}," Log in ")])])]),s("div",at,[l(V,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:m(y=>[s("div",lt,[s("img",{src:y.data.src,alt:y.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,it),s("div",dt,f(y.data.alt),1)])]),_:1},8,["value"])])]),l(T,{position:"bottom-right",group:"br"})],64)}const pt=z(Ze,[["render",ut],["__scopeId","data-v-37293988"]]);var we={name:"EyeIcon",extends:be};function ct(t,e,n,p,o,r){return i(),u("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}we.render=ct;var ke={name:"EyeSlashIcon",extends:be};function mt(t,e,n,p,o,r){return i(),u("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}ke.render=mt;var ft=function(e){var n=e.dt;return`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: `.concat(n("password.meter.height"),`;
    background: `).concat(n("password.meter.background"),`;
    border-radius: `).concat(n("password.meter.border.radius"),`;
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: `).concat(n("password.meter.border.radius"),`;
}

.p-password-meter-weak {
    background: `).concat(n("password.strength.weak.background"),`;
}

.p-password-meter-medium {
    background: `).concat(n("password.strength.medium.background"),`;
}

.p-password-meter-strong {
    background: `).concat(n("password.strength.strong.background"),`;
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
    padding: `).concat(n("password.overlay.padding"),`;
    background: `).concat(n("password.overlay.background"),`;
    color: `).concat(n("password.overlay.color"),`;
    border: 1px solid `).concat(n("password.overlay.border.color"),`;
    box-shadow: `).concat(n("password.overlay.shadow"),`;
    border-radius: `).concat(n("password.overlay.border.radius"),`;
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("password.content.gap"),`;
}

.p-password-toggle-mask-icon {
    inset-inline-end: `).concat(n("form.field.padding.x"),`;
    color: `).concat(n("password.icon.color"),`;
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(`).concat(n("icon.size"),` / 2));
    width: `).concat(n("icon.size"),`;
    height: `).concat(n("icon.size"),`;
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((`).concat(n("form.field.padding.x")," * 2) + ").concat(n("icon.size"),`);
}
`)},ht={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},bt={root:function(e){var n=e.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused,"p-password-fluid":n.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(e){var n=e.instance;return"p-password-meter-label ".concat(n.meter?"p-password-meter-"+n.meter.strength:"")},meterText:"p-password-meter-text"},vt=B.extend({name:"password",theme:ft,classes:bt,inlineStyles:ht}),yt={name:"BasePassword",extends:H,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:vt,provide:function(){return{$pcPassword:this,$parentInstance:this}}},xe={name:"Password",extends:yt,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},watch:{"$attrs.id":function(e){this.id=e||j()}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.id=this.id||j(),this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(K.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(e){K.set("overlay",e,this.$primevue.config.zIndex.overlay),Pe(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(e){K.clear(e)},alignOverlay:function(){this.appendTo==="self"?Ve(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Te(this.$refs.input.$el)+"px",Ne(this.overlay,this.$refs.input.$el))},testStrength:function(e){var n=0;return this.strongCheckRegExp.test(e)?n=3:this.mediumCheckRegExp.test(e)?n=2:e.length&&(n=1),n},onInput:function(e){this.writeValue(e.target.value,e),this.$emit("change",e)},onFocus:function(e){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",e)},onKeyUp:function(e){if(this.feedback){var n=e.target.value,p=this.checkPasswordStrength(n),o=p.meter,r=p.label;if(this.meter=o,this.infoText=r,e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var e=this.checkPasswordStrength(this.d_value),n=e.meter,p=e.label;this.meter=n,this.infoText=p,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(e){var n=null,p=null;switch(this.testStrength(e)){case 1:n=this.weakText,p={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,p={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,p={strength:"strong",width:"100%"};break;default:n=this.promptText,p=null;break}return{label:n,meter:p}},onInvalid:function(e){this.$emit("invalid",e)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new _e(this.$refs.input.$el,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ce()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(e){this.overlay=e},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(e){De.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.id+"_overlay"}},components:{InputText:D,Portal:Ae,EyeSlashIcon:ke,EyeIcon:we}};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);e&&(p=p.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,p)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ue(Object(n),!0).forEach(function(p){gt(t,p,n[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach(function(p){Object.defineProperty(t,p,Object.getOwnPropertyDescriptor(n,p))})}return t}function gt(t,e,n){return(e=wt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t){var e=kt(t,"string");return R(e)=="symbol"?e:e+""}function kt(t,e){if(R(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var p=n.call(t,e||"default");if(R(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xt=["id"];function St(t,e,n,p,o,r){var k=_("InputText"),h=_("Portal");return i(),u("div",c({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[l(k,c({ref:"input",id:t.inputId,type:r.inputType,class:[t.cx("pcInputText"),t.inputClass],style:t.inputStyle,value:t.d_value,name:t.$formName,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-controls":t.overlayProps&&t.overlayProps.id||t.overlayId||t.panelProps&&t.panelProps.id||t.panelId||r.overlayUniqueId,"aria-expanded":o.overlayVisible,"aria-haspopup":!0,placeholder:t.placeholder,required:t.required,fluid:t.fluid,disabled:t.disabled,variant:t.variant,invalid:t.invalid,size:t.size,autofocus:t.autofocus,onInput:r.onInput,onFocus:r.onFocus,onBlur:r.onBlur,onKeyup:r.onKeyUp,onInvalid:r.onInvalid},t.inputProps,{pt:t.ptm("pcInputText"),unstyled:t.unstyled}),null,16,["id","type","class","style","value","name","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),t.toggleMask&&o.unmasked?I(t.$slots,t.$slots.maskicon?"maskicon":"hideicon",{key:0,toggleCallback:r.onMaskToggle},function(){return[(i(),N(A(t.maskIcon?"i":"EyeSlashIcon"),c({class:[t.cx("maskIcon"),t.maskIcon],onClick:r.onMaskToggle},t.ptm("maskIcon")),null,16,["class","onClick"]))]}):b("",!0),t.toggleMask&&!o.unmasked?I(t.$slots,t.$slots.unmaskicon?"unmaskicon":"showicon",{key:1,toggleCallback:r.onMaskToggle},function(){return[(i(),N(A(t.unmaskIcon?"i":"EyeIcon"),c({class:[t.cx("unmaskIcon"),t.unmaskIcon],onClick:r.onMaskToggle},t.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):b("",!0),s("span",c({class:"p-hidden-accessible","aria-live":"polite"},t.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),f(o.infoText),17),l(h,{appendTo:t.appendTo},{default:m(function(){return[l(fe,c({name:"p-connected-overlay",onEnter:r.onOverlayEnter,onLeave:r.onOverlayLeave,onAfterLeave:r.onOverlayAfterLeave},t.ptm("transition")),{default:m(function(){return[o.overlayVisible?(i(),u("div",c({key:0,ref:r.overlayRef,id:t.overlayId||t.panelId||r.overlayUniqueId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.overlayStyle,t.panelStyle],onClick:e[0]||(e[0]=function(){return r.onOverlayClick&&r.onOverlayClick.apply(r,arguments)})},G(G(G({},t.panelProps),t.overlayProps),t.ptm("overlay"))),[I(t.$slots,"header"),I(t.$slots,"content",{},function(){return[s("div",c({class:t.cx("content")},t.ptm("content")),[s("div",c({class:t.cx("meter")},t.ptm("meter")),[s("div",c({class:t.cx("meterLabel"),style:{width:o.meter?o.meter.width:""}},t.ptm("meterLabel")),null,16)],16),s("div",c({class:t.cx("meterText")},t.ptm("meterText")),f(o.infoText),17)],16)]}),I(t.$slots,"footer")],16,xt)):b("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}xe.render=St;const Ct={props:{images:{type:Array,default:()=>[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},components:{},data(){return{}},mounted(){this.images=[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},It=["src","alt"];function Pt(t,e,n,p,o,r){const k=_("Carousel",!0);return i(),u("div",null,[C(f(n.images)+" ",1),l(k,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:n.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:m(h=>[s("img",{src:h.data.src,alt:h.data.alt,class:"rounded object-cover w-full h-screen"},null,8,It)]),_:1},8,["value"])])}const Vt=z(Ct,[["render",Pt]]),Tt={components:{Carousel:Vt},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{email:"",password:"",newPassword:"",confirmNewPassword:""},resetEmail:"",isVerified:!1,forgotPassword:!1,userStore:J(),productStore:Ee(),resetPassword:!1,loading:!1}},computed:{passwordMismatch(){return this.form.newPassword&&this.form.confirmNewPassword&&this.form.newPassword!==this.form.confirmNewPassword}},methods:{async handleResetPassword(){try{const t={email:this.form.email,newPassword:this.form.newPassword,confirmNewPassword:this.form.confirmNewPassword,otp:this.otp},e=await this.userStore.resetPassword(t);console.log(e,"reset"),this.isVerified=!1,this.forgotPassword=!1,this.$toast.add({severity:"success",summary:e.data.message,group:"br",life:3e3})}catch(t){t.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async sendResetEmail(){var t,e;try{const{$axios:n}=$();await n.post("/auth/forgot-password",{email:this.resetEmail}),this.$toast.add({severity:"success",summary:"Reset link sent!",detail:"Check your email for the password reset link.",group:"br",life:3e3}),this.forgotPassword=!1,this.isVerified=!0,this.form.email=this.resetEmail,this.resetPassword=!1}catch(n){this.$toast.add({severity:"error",summary:"Error",detail:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Failed to send reset link.",group:"br",life:3e3})}},async login(){try{this.loading=!0;const{accessToken:t}=await this.userStore.login(this.form.email,this.form.password);t&&this.$router.push("/dashboard")}catch(t){t.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.loading=!1,this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{accessToken:t}=await this.userStore.verifyOtp({email:this.form.email,otp:this.otp});if(!this.resetPassword){this.userStore.logout(),this.resetPassword=!0;return}t&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}}}},Nt={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Et={class:"flex w-full h-screen flex-col items-center justify-center p-16"},Bt={class:"border shadow-xl p-12 lg:p-36 rounded-xl bg-white flex flex-col items-center"},Ot={key:0},Lt={class:"flex flex-col gap-4 w-full"},$t={class:"mt-4 flex justify-end w-full"},_t={class:"text-sm mt-4 text-center"},Dt={key:1},At={key:2},Rt={key:0},zt={class:"text-gray-500 mb-6"},Wt={class:"font-bold"},jt={class:"w-full mb-4 flex justify-center items-center"},Ut={key:1},Ht={key:0,class:"text-red-500 text-sm mt-2"},Ft=["disabled"],Yt={class:"hidden md:block h-full w-full p-4 relative"},Mt={class:"relative w-full h-screen flex justify-center items-center"},qt=["src","alt"],Zt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Kt(t,e,n,p,o,r){const k=D,h=ee,g=xe,S=X,V=F,T=U,y=pe;return i(),u(P,null,[s("div",Nt,[s("div",Et,[e[27]||(e[27]=s("div",{class:"flex justify-center items-center absolute top-16 left-8"},[s("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[s("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),C(" Back to Shop")])],-1)),s("div",Bt,[e[26]||(e[26]=s("img",{src:ve,alt:"Login",class:"h-28 w-28"},null,-1)),!o.isVerified&&!o.forgotPassword?(i(),u("div",Ot,[e[16]||(e[16]=s("p",{class:"text-gray-500 text-2xl mb-10 text-center"}," Welcome to Secure Group ",-1)),s("form",{onSubmit:e[3]||(e[3]=me((...v)=>r.login&&r.login(...v),["prevent"])),class:"w-full flex flex-col items-center"},[s("div",Lt,[l(h,{variant:"on"},{default:m(()=>[l(k,{type:"email",id:"email",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=v=>o.form.email=v),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=s("label",{for:"email"},"Email",-1))]),_:1}),l(h,{variant:"on"},{default:m(()=>[l(g,{modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=v=>o.form.password=v),toggleMask:""},null,8,["modelValue"]),e[14]||(e[14]=s("label",{for:"password"},"Password",-1))]),_:1})]),s("div",$t,[s("p",{class:"text-blue-500 text-sm cursor-pointer",onClick:e[2]||(e[2]=v=>o.forgotPassword=!0)}," Forgot password? ")]),l(S,{class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4",type:"submit",label:"Log In",loading:o.loading},null,8,["loading"])],32),s("p",_t,[e[15]||(e[15]=C(" Don't have an account? ")),s("span",{class:"text-blue-500 cursor-pointer",onClick:e[4]||(e[4]=v=>t.$emit("toggle"))}," Sign up ")])])):o.forgotPassword?(i(),u("div",Dt,[e[18]||(e[18]=s("h3",{class:"text-gray-500 flex justify-center text-2xl font-medium mb-4"}," Reset Password ",-1)),e[19]||(e[19]=s("p",{class:"text-gray-500 mb-6 text-center"}," Enter your email address to receive a password reset link. ",-1)),l(h,{variant:"on"},{default:m(()=>[l(k,{type:"email",id:"resetEmail",modelValue:o.resetEmail,"onUpdate:modelValue":e[5]||(e[5]=v=>o.resetEmail=v),class:"w-full"},null,8,["modelValue"]),e[17]||(e[17]=s("label",{for:"resetEmail"},"Email",-1))]),_:1}),s("button",{onClick:e[6]||(e[6]=(...v)=>r.sendResetEmail&&r.sendResetEmail(...v)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Send Reset Link "),s("p",{class:"text-sm mt-4 text-center cursor-pointer text-blue-500",onClick:e[7]||(e[7]=v=>o.forgotPassword=!1)}," Back to login ")])):(i(),u("div",At,[o.resetPassword?(i(),u("div",Ut,[e[24]||(e[24]=s("h3",{class:"text-3xl font-medium mb-4 text-center"}," Reset Password ",-1)),e[25]||(e[25]=s("p",{class:"text-gray-500 mb-6"}," Enter a new password for your account. ",-1)),l(h,{variant:"on"},{default:m(()=>[l(g,{modelValue:o.form.newPassword,"onUpdate:modelValue":e[10]||(e[10]=v=>o.form.newPassword=v),id:"resetPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[22]||(e[22]=s("label",{for:"resetPassword"},"New Password",-1))]),_:1}),l(h,{variant:"on",class:"mt-3"},{default:m(()=>[l(g,{modelValue:o.form.confirmNewPassword,"onUpdate:modelValue":e[11]||(e[11]=v=>o.form.confirmNewPassword=v),id:"confirmNewPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[23]||(e[23]=s("label",{for:"confirmNewPassword"},"Confirm Password",-1))]),_:1}),r.passwordMismatch?(i(),u("p",Ht," Passwords do not match. ")):b("",!0),s("button",{onClick:e[12]||(e[12]=(...v)=>r.handleResetPassword&&r.handleResetPassword(...v)),class:"w-full text-white py-3 mt-4 rounded bg-red-600",disabled:r.passwordMismatch}," Reset Password ",8,Ft)])):(i(),u("div",Rt,[e[21]||(e[21]=s("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),s("p",zt,[e[20]||(e[20]=C(" Enter the OTP sent to your email address: ")),s("span",Wt,f(o.form.email),1)]),s("div",jt,[l(V,{length:6,mask:"*",modelValue:t.otp,"onUpdate:modelValue":e[8]||(e[8]=v=>t.otp=v),size:"large",class:"text-center p-3",placeholder:"Enter OTP"},null,8,["modelValue"])]),s("button",{onClick:e[9]||(e[9]=(...v)=>r.verifyOtp&&r.verifyOtp(...v)),class:"w-full text-white py-3 rounded bg-red-600"}," Verify OTP ")]))]))])]),s("div",Yt,[l(T,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full hidden sm:block"},{item:m(v=>[s("div",Mt,[s("img",{src:v.data.src,alt:v.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,qt),s("div",Zt,f(v.data.alt),1)])]),_:1},8,["value"])])]),l(y,{position:"bottom-right",group:"br"})],64)}const Gt=z(Tt,[["render",Kt],["__scopeId","data-v-f915195d"]]);var Jt=function(e){var n=e.dt;return`
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
    gap: `.concat(n("stepper.step.gap"),`;
    padding: `).concat(n("stepper.step.padding"),`;
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
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),`;
    border-radius: `).concat(n("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(n("stepper.step.header.padding"),`;
    gap: `).concat(n("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(n("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(n("stepper.step.header.focus.ring.width")," ").concat(n("stepper.step.header.focus.ring.style")," ").concat(n("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(n("stepper.step.header.focus.ring.offset"),`;
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
    color: `).concat(n("stepper.step.title.color"),`;
    font-weight: `).concat(n("stepper.step.title.font.weight"),`;
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(n("stepper.step.number.color"),`;
    border: 2px solid `).concat(n("stepper.step.number.border.color"),`;
    background: `).concat(n("stepper.step.number.background"),`;
    min-width: `).concat(n("stepper.step.number.size"),`;
    height: `).concat(n("stepper.step.number.size"),`;
    line-height: `).concat(n("stepper.step.number.size"),`;
    font-size: `).concat(n("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(n("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(n("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(n("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(n("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(n("stepper.step.number.active.background"),`;
    border-color: `).concat(n("stepper.step.number.active.border.color"),`;
    color: `).concat(n("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(n("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(n("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(n("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(n("stepper.separator.size"),`;
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(n("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(n("stepper.steppanel.background"),`;
    color: `).concat(n("stepper.steppanel.color"),`;
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
    padding: `).concat(n("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(n("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(n("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(n("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(n("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(n("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(n("stepper.step.number.size"),`;
}
`)},Qt={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Xt=B.extend({name:"stepper",theme:Jt,classes:Qt}),en={name:"BaseStepper",extends:L,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Xt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},te={name:"Stepper",extends:en,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||j()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function tn(t,e,n,p,o,r){return i(),u("div",c({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?I(t.$slots,"start",{key:0}):b("",!0),I(t.$slots,"default"),t.$slots.end?I(t.$slots,"end",{key:1}):b("",!0)],16)}te.render=tn;var nn={root:"p-steppanels"},sn=B.extend({name:"steppanels",classes:nn}),on={name:"BaseStepPanels",extends:L,style:sn,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},ne={name:"StepPanels",extends:on,inheritAttrs:!1};function rn(t,e,n,p,o,r){return i(),u("div",c({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default")],16)}ne.render=rn;var an=function(e){var n=e.dt;return`
.p-iftalabel {
    display: block;
    position: relative;
}

.p-iftalabel label {
    position: absolute;
    pointer-events: none;
    top: `.concat(n("iftalabel.top"),`;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-size: `).concat(n("iftalabel.font.size"),`;
    font-weight: `).concat(n("iftalabel.font.weight"),`;
    inset-inline-start: `).concat(n("iftalabel.position.x"),`;
    color: `).concat(n("iftalabel.color"),`;
    transition-duration: `).concat(n("iftalabel.transition.duration"),`;
}

.p-iftalabel .p-inputtext,
.p-iftalabel .p-textarea,
.p-iftalabel .p-select-label,
.p-iftalabel .p-multiselect-label,
.p-iftalabel .p-autocomplete-input-multiple,
.p-iftalabel .p-cascadeselect-label,
.p-iftalabel .p-treeselect-label {
    padding-block-start: `).concat(n("iftalabel.input.padding.top"),`;
    padding-block-end: `).concat(n("iftalabel.input.padding.bottom"),`;
}

.p-iftalabel:has(.p-invalid) label {
    color: `).concat(n("iftalabel.invalid.color"),`;
}

.p-iftalabel:has(input:focus) label,
.p-iftalabel:has(input:-webkit-autofill) label,
.p-iftalabel:has(textarea:focus) label,
.p-iftalabel:has(.p-inputwrapper-focus) label {
    color: `).concat(n("iftalabel.focus.color"),`;
}

.p-iftalabel .p-inputicon {
    top: `).concat(n("iftalabel.input.padding.top"),`;
    transform: translateY(25%);
    margin-top: 0;
}
`)},ln={root:"p-iftalabel"},dn=B.extend({name:"iftalabel",theme:an,classes:ln}),un={name:"BaseIftaLabel",extends:L,style:dn,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},Se={name:"IftaLabel",extends:un,inheritAttrs:!1};function pn(t,e,n,p,o,r){return i(),u("span",c({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default")],16)}Se.render=pn;var cn=function(e){var n=e.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(n("textarea.color"),`;
    background: `).concat(n("textarea.background"),`;
    padding-block: `).concat(n("textarea.padding.y"),`;
    padding-inline: `).concat(n("textarea.padding.x"),`;
    border: 1px solid `).concat(n("textarea.border.color"),`;
    transition: background `).concat(n("textarea.transition.duration"),", color ").concat(n("textarea.transition.duration"),", border-color ").concat(n("textarea.transition.duration"),", outline-color ").concat(n("textarea.transition.duration"),", box-shadow ").concat(n("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(n("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(n("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(n("textarea.focus.border.color"),`;
    box-shadow: `).concat(n("textarea.focus.ring.shadow"),`;
    outline: `).concat(n("textarea.focus.ring.width")," ").concat(n("textarea.focus.ring.style")," ").concat(n("textarea.focus.ring.color"),`;
    outline-offset: `).concat(n("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(n("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(n("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(n("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(n("textarea.disabled.background"),`;
    color: `).concat(n("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(n("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(n("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(n("textarea.sm.font.size"),`;
    padding-block: `).concat(n("textarea.sm.padding.y"),`;
    padding-inline: `).concat(n("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(n("textarea.lg.font.size"),`;
    padding-block: `).concat(n("textarea.lg.padding.y"),`;
    padding-inline: `).concat(n("textarea.lg.padding.x"),`;
}
`)},mn={root:function(e){var n=e.instance,p=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":p.autoResize,"p-textarea-sm p-inputfield-sm":p.size==="small","p-textarea-lg p-inputfield-lg":p.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},fn=B.extend({name:"textarea",theme:cn,classes:mn}),hn={name:"BaseTextarea",extends:H,props:{autoResize:Boolean},style:fn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},se={name:"Textarea",extends:hn,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){e.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return c(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},bn=["value","disabled","aria-invalid"];function vn(t,e,n,p,o,r){return i(),u("textarea",c({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,bn)}se.render=vn;var yn={root:function(e){var n=e.instance;return["p-steppanel",{"p-steppanel-active":n.isVertical&&n.active}]},content:"p-steppanel-content"},gn=B.extend({name:"steppanel",classes:yn}),Ce={name:"StepperSeparator",hostName:"Stepper",extends:L};function wn(t,e,n,p,o,r){return i(),u("span",c({class:t.cx("separator")},t.ptm("separator")),null,16)}Ce.render=wn;var kn={name:"BaseStepPanel",extends:L,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:gn,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},oe={name:"StepPanel",extends:kn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var e,n,p=Q(this.$pcStepper.$el,'[data-pc-name="step"]'),o=Be(this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.$el:(n=this.$pcStepList)===null||n===void 0?void 0:n.$el,'[data-pc-name="step"]'),r=he(o,p);this.isSeparatorVisible=this.isVertical&&r!==p.length-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active}})},updateValue:function(e){this.$pcStepper.updateValue(e)}},computed:{active:function(){var e,n,p=this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value;return p===((n=this.$pcStepper)===null||n===void 0?void 0:n.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var e;return this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:Ce}};function xn(t,e,n,p,o,r){var k=_("StepperSeparator");return r.isVertical?(i(),u(P,{key:0},[t.asChild?I(t.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(g){return r.updateValue(g)}}):(i(),N(fe,c({key:0,name:"p-toggleable-content"},t.ptm("transition")),{default:m(function(){return[ie((i(),N(A(t.as),c({id:r.id,class:t.cx("root"),role:"tabpanel","aria-controls":r.ariaControls},r.getPTOptions("root")),{default:m(function(){return[o.isSeparatorVisible?(i(),N(k,{key:0})):b("",!0),s("div",c({class:t.cx("content")},r.getPTOptions("content")),[I(t.$slots,"default",{active:r.active,activateCallback:function(g){return r.updateValue(g)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[de,r.active]])]}),_:3},16))],64)):(i(),u(P,{key:1},[t.asChild?t.asChild&&r.active?I(t.$slots,"default",{key:1,active:r.active,a11yAttrs:r.a11yAttrs,activateCallback:function(g){return r.updateValue(g)}}):b("",!0):ie((i(),N(A(t.as),c({key:0,id:r.id,class:t.cx("root"),role:"tabpanel","aria-controls":r.ariaControls},r.getPTOptions("root")),{default:m(function(){return[I(t.$slots,"default",{active:r.active,activateCallback:function(g){return r.updateValue(g)}})]}),_:3},16,["id","class","aria-controls"])),[[de,r.active]])],64))}oe.render=xn;var Sn=function(e){var n=e.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
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
    border: 1px solid `).concat(n("radiobutton.border.color"),`;
    background: `).concat(n("radiobutton.background"),`;
    width: `).concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
    transition: background `).concat(n("radiobutton.transition.duration"),", color ").concat(n("radiobutton.transition.duration"),", border-color ").concat(n("radiobutton.transition.duration"),", box-shadow ").concat(n("radiobutton.transition.duration"),", outline-color ").concat(n("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(n("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(n("radiobutton.icon.size"),`;
    width: `).concat(n("radiobutton.icon.size"),`;
    height: `).concat(n("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.border.color"),`;
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.hover.border.color"),`;
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(n("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(n("radiobutton.focus.ring.width")," ").concat(n("radiobutton.focus.ring.style")," ").concat(n("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(n("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(n("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(n("radiobutton.disabled.background"),`;
    border-color: `).concat(n("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.disabled.color"),`;
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: `).concat(n("radiobutton.sm.width"),`;
    height: `).concat(n("radiobutton.sm.height"),`;
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.sm.size"),`;
    width: `).concat(n("radiobutton.icon.sm.size"),`;
    height: `).concat(n("radiobutton.icon.sm.size"),`;
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: `).concat(n("radiobutton.lg.width"),`;
    height: `).concat(n("radiobutton.lg.height"),`;
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: `).concat(n("radiobutton.icon.lg.size"),`;
    width: `).concat(n("radiobutton.icon.lg.size"),`;
    height: `).concat(n("radiobutton.icon.lg.size"),`;
}
`)},Cn={root:function(e){var n=e.instance,p=e.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":p.disabled,"p-invalid":n.$pcRadioButtonGroup?n.$pcRadioButtonGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-radiobutton-sm p-inputfield-sm":p.size==="small","p-radiobutton-lg p-inputfield-lg":p.size==="large"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},In=B.extend({name:"radiobutton",theme:Sn,classes:Cn}),Pn={name:"BaseRadioButton",extends:H,props:{value:null,binary:Boolean,readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:In,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},re={name:"RadioButton",extends:Pn,inheritAttrs:!1,emits:["change","focus","blur"],inject:{$pcRadioButtonGroup:{default:void 0}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var n=this.binary?!this.checked:this.value;this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.writeValue(n,e):this.writeValue(n,e),this.$emit("change",e)}},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){var n,p;this.$emit("blur",e),(n=(p=this.formField).onBlur)===null||n===void 0||n.call(p,e)}},computed:{groupName:function(){return this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.groupName:this.$formName},checked:function(){var e=this.$pcRadioButtonGroup?this.$pcRadioButtonGroup.d_value:this.d_value;return e!=null&&(this.binary?!!e:Oe(e,this.value))}}},Vn=["data-p-checked","data-p-disabled"],Tn=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function Nn(t,e,n,p,o,r){return i(),u("div",c({class:t.cx("root")},r.getPTOptions("root"),{"data-p-checked":r.checked,"data-p-disabled":t.disabled}),[s("input",c({id:t.inputId,type:"radio",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:t.value,name:r.groupName,checked:r.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[1]||(e[1]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)}),onChange:e[2]||(e[2]=function(){return r.onChange&&r.onChange.apply(r,arguments)})},r.getPTOptions("input")),null,16,Tn),s("div",c({class:t.cx("box")},r.getPTOptions("box")),[s("div",c({class:t.cx("icon")},r.getPTOptions("icon")),null,16)],16)],16,Vn)}re.render=Nn;var En={root:"p-steplist"},Bn=B.extend({name:"steplist",classes:En}),On={name:"BaseStepList",extends:L,style:Bn,provide:function(){return{$pcStepList:this,$parentInstance:this}}},ae={name:"StepList",extends:On,inheritAttrs:!1};function Ln(t,e,n,p,o,r){return i(),u("div",c({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default")],16)}ae.render=Ln;var $n={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},_n=B.extend({name:"step",classes:$n}),Ie={name:"StepperSeparator",hostName:"Stepper",extends:L};function Dn(t,e,n,p,o,r){return i(),u("span",c({class:t.cx("separator")},t.ptm("separator")),null,16)}Ie.render=Dn;var An={name:"BaseStep",extends:L,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:_n,provide:function(){return{$pcStep:this,$parentInstance:this}}},le={name:"Step",extends:An,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=he(this.$el,Q(this.$pcStepper.$el,'[data-pc-name="step"]')),n=Q(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==n-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:Ie}},Rn=["id","tabindex","aria-controls","disabled"];function zn(t,e,n,p,o,r){var k=_("StepperSeparator");return t.asChild?I(t.$slots,"default",{key:1,class:O(t.cx("root")),active:r.active,value:t.value,a11yAttrs:r.a11yAttrs,activateCallback:r.onStepClick}):(i(),N(A(t.as),c({key:0,class:t.cx("root"),"aria-current":r.active?"step":void 0,role:"presentation","data-p-active":r.active,"data-p-disabled":r.isStepDisabled},r.getPTOptions("root")),{default:m(function(){return[s("button",c({id:r.id,class:t.cx("header"),role:"tab",type:"button",tabindex:r.isStepDisabled?-1:void 0,"aria-controls":r.ariaControls,disabled:r.isStepDisabled,onClick:e[0]||(e[0]=function(){return r.onStepClick&&r.onStepClick.apply(r,arguments)})},r.getPTOptions("header")),[s("span",c({class:t.cx("number")},r.getPTOptions("number")),f(r.activeValue),17),s("span",c({class:t.cx("title")},r.getPTOptions("title")),[I(t.$slots,"default")],16)],16,Rn),o.isSeparatorVisible?(i(),N(k,{key:0})):b("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}le.render=zn;const Wn={data(){return{responseMessage:{},activeStep:1,firstName:"",lastName:"",phoneNumber:"",email:"",businessName:"",location:"",errors:{},businessType:null,experienceYears:null,experienceAreas:[],brandsWorkedWith:[],integrationExperience:null,familiarWithStandard:null,purchaseSource:"",purchaseHikvision:null,requiresTraining:null,images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],businessCategories:[{name:"System Integrator",key:"System Integrator"},{name:"Reseller",key:"Reseller"},{name:"Technician",key:"Technician"},{name:"Other",key:"Other"}],yearExperiences:[{name:"1 Year",key:"1 Year"},{name:"1-3 Years",key:"1-3 Years"},{name:"4-7 Years",key:"4-7 Years"},{name:"8+",key:"8+"}],experienceAreasList:[{name:"CCTV Systems",key:"CCTV Systems"},{name:"Access Control Systems",key:"Access Control Systems"},{name:"Video Intercom Systems",key:"Video Intercom Systems"},{name:"Networking and Computer Products",key:"Networking and Computer Products"},{name:"Electrical Installations",key:"Electrical Installations"}],brandsWorkedWithList:[{name:"Hikvision",key:"Hikvision"},{name:"Dahua",key:"Dahua"},{name:"Uniview",key:"Uniview"},{name:"Tandy",key:"Tandy"},{name:"Other (Please Specify)",key:"Other"}],integrationExperienceList:[{name:"Yes, Extensive Experience",key:"Yes, Extensive Experience"},{name:"Some Experience",key:"Some Experience"},{name:"No Experience",key:"No Experience"}],wherePurchase:[{name:"National Distributor",key:"National Distributor"},{name:"Regional Supplier",key:"Regional Supplier"},{name:"Online Retailer ",key:"Online Retailer "},{name:"Other",key:"Other"}],familiarWithStandards:[{name:"Yes, I'm certified",key:"Yes, I'm certified"},{name:"I am familiar but not certified",key:"I am familiar but not certified"},{name:"No, but I am willing to learn",key:"No, but I am willing to learn"}],options:[{name:"Yes",key:"Yes"},{name:"No",key:"No"},{name:"Not yet, but interested",key:"Not yet, but interested"}],experienceAreasError:!1,brandsWorkedWithError:!1,integrationExperienceError:!1,familiarWithStandardError:!1,purchaseError:!1,currentlyPurchaseError:!1,formData:{technicalExpertise:"",hikvisionTechDifference:"",troubleshootCCTV:"",networkDesign:"",supportAreas:"",businessSupport:""},textareaFields:[{id:"technicalExpertise",model:"technicalExpertise",label:`Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`},{id:"hikvisionTechDifference",model:"hikvisionTechDifference",label:"What is the difference between Hikvision’s AcuSense and ColorVu technologies?"},{id:"troubleshootCCTV",model:"troubleshootCCTV",label:"How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"},{id:"networkDesign",model:"networkDesign",label:"What are the key considerations when designing a network for IP-based surveillance systems?"},{id:"supportAreas",model:"supportAreas",label:"What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"},{id:"businessSupport",model:"businessSupport",label:"How can we best support your business? (Optional)"}]}},methods:{handleSubmit(t){this.validateForm()?(console.log("Form submitted:",{...this.formData}),this.submitForm()):console.log("Validation failed")},validateForm(){let t=!0;return this.errors={},this.purchaseError=this.purchaseSource.length==0,this.purchaseError&&(t=!1),this.currentlyPurchaseError=!this.purchaseHikvision,this.currentlyPurchaseError&&(t=!1),this.textareaFields.forEach(e=>{!this.formData[e.model].trim()&&e.id!=="businessSupport"&&(this.errors[e.model]="This field cannot be empty.",t=!1)}),t},validateAndProceed(t,e){this.errors={},e==1&&(this.firstName||(this.errors.firstName="First name is required."),this.lastName||(this.errors.lastName="Last name is required."),this.phoneNumber||(this.errors.phoneNumber="Phone number is required."),this.email||(this.errors.email="Email address is required."),this.businessName||(this.errors.businessName="Business name is required."),this.location||(this.errors.location="Location is required."),this.businessType||(this.errors.businessType="Business Type is required."),this.experienceYears||(this.errors.experienceYears="Experience Years is required."),Object.keys(this.errors).length===0&&t(2)),e==2&&(console.log("sxasxsax"),this.experienceAreasError=!1,this.brandsWorkedWithError=!1,this.integrationExperienceError=!1,this.familiarWithStandardError=!1,this.experienceAreas.length===0&&(this.experienceAreasError=!0),this.brandsWorkedWith.length===0&&(this.brandsWorkedWithError=!0),this.integrationExperience||(this.integrationExperienceError=!0),this.familiarWithStandard||(this.familiarWithStandardError=!0),!this.experienceAreasError&&!this.brandsWorkedWithError&&!this.integrationExperienceError&&!this.familiarWithStandardError&&t(3))},async submitForm(){console.log("cdscs",this.formData);const t={businessName:this.businessName,phoneNumber:this.phoneNumber,email:this.email,location:this.location,businessType:this.businessType,experienceYears:this.experienceYears,experienceAreas:this.experienceAreas,brandsWorkedWith:this.brandsWorkedWith,integrationExperience:this.integrationExperience,familiarWithStandard:this.familiarWithStandard,purchaseSource:this.purchaseSource,purchaseHikvision:this.purchaseHikvision,requiresTraining:this.requiresTraining};console.log("Form Data:",t);try{const{$axios:e}=$(),n=await e.post("/user/technician-questionnaire",t);this.responseMessage=n.data.message,this.activateCallback(4),n.status}catch(e){console.error("Error submitting form:",e)}finally{}},resetForm(){this.businessName="",this.phoneNumber="",this.email="",this.location="",this.businessType=null,this.experienceYears=null,this.experienceAreas=[],this.brandsWorkedWith=[],this.integrationExperience=null,this.purchaseSource="",this.purchaseHikvision=null,this.requiresTraining=null}}},jn={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Un={class:"flex w-full flex-col items-center justify-center"},Hn={class:"flex justify-center items-center absolute top-16 left-8"},Fn={class:"border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white"},Yn=["onClick"],Mn=["onClick"],qn=["onClick"],Zn=["onClick"],Kn={class:"flex flex-col gap-4 mx-auto",style:{"min-width":"40vw"}},Gn={class:"flex gap-4"},Jn={class:"field w-1/2"},Qn={key:0,class:"text-red-500"},Xn={class:"field w-1/2"},es={key:0,class:"text-red-500"},ts={class:"flex gap-4"},ns={class:"field w-1/2"},ss={key:0,class:"text-red-500"},os={class:"field w-1/2"},rs={key:0,class:"text-red-500"},as={class:"flex gap-4"},ls={class:"field w-1/2"},is={key:0,class:"text-red-500"},ds={class:"field w-1/2"},us={key:0,class:"text-red-500"},ps={class:"flex flex-col gap-4"},cs={class:"flex flex-wrap gap-4"},ms=["for"],fs={key:0,class:"text-red-500"},hs={class:"flex flex-wrap gap-4"},bs=["for"],vs={key:0,class:"text-red-500"},ys={class:"flex pt-6 justify-end",style:{"max-width":"800px",margin:"0 auto"}},gs={class:"flex flex-col gap-4"},ws=["for"],ks={key:0,class:"text-red-500"},xs=["for"],Ss={key:1,class:"text-red-500"},Cs={class:"field"},Is=["for"],Ps={key:0,class:"text-red-500"},Vs={class:"field"},Ts=["for"],Ns={key:0,class:"text-red-500"},Es={class:"flex pt-6 justify-between"},Bs={class:"flex flex-col gap-4"},Os={class:"field"},Ls=["for"],$s={key:0,class:"text-red-500"},_s={class:"field"},Ds=["for"],As={key:0,class:"text-red-500"},Rs={class:"font-bold pb-3"},zs=["innerHTML"],Ws=["for"],js={key:0,class:"text-red-500"},Us={class:"flex pt-6 justify-between"},Hs={class:"flex pt-6 justify-between"},Fs={class:"hidden md:block h-full w-full"},Ys={class:"relative w-full h-screen flex justify-center items-center"},Ms=["src","alt"],qs={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Zs(t,e,n,p,o,r){const k=ge,h=le,g=ae,S=D,V=re,T=X,y=oe,v=ye,W=se,Y=Se,M=ne,q=te,x=U;return i(),u("div",jn,[s("div",Un,[s("div",Hn,[s("a",{onClick:e[0]||(e[0]=d=>t.$emit("back-to-signup")),class:"text-primary text-md cursor-pointer hover:text-secondary"},e[17]||(e[17]=[s("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}},null,-1),C(" Back to Signup")]))]),s("div",Fn,[l(q,{value:o.activeStep,"onUpdate:value":e[16]||(e[16]=d=>o.activeStep=d),class:""},{default:m(()=>[l(g,null,{default:m(()=>[l(h,{asChild:"",value:1},{default:m(({activateCallback:d,value:a,a11yAttrs:w})=>[s("div",c({class:"flex flex-row flex-auto gap-2"},w.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:d},w.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":a<=o.activeStep,"border-surface-200 dark:border-surface-700":a>o.activeStep}])},e[18]||(e[18]=[s("i",{class:"pi pi-building"},null,-1)]),2)],16,Yn),l(k)],16)]),_:1}),l(h,{asChild:"",value:2},{default:m(({activateCallback:d,value:a,a11yAttrs:w})=>[s("div",c({class:"flex flex-row flex-auto gap-2 pl-2"},w.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:d},w.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":a<=o.activeStep,"border-surface-200 dark:border-surface-700":a>o.activeStep}])},e[19]||(e[19]=[s("i",{class:"pi pi-cog"},null,-1)]),2)],16,Mn),l(k)],16)]),_:1}),l(h,{asChild:"",value:3},{default:m(({activateCallback:d,value:a,a11yAttrs:w})=>[s("div",c({class:"flex flex-row pl-2"},w.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:d},w.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":a<=o.activeStep,"border-surface-200 dark:border-surface-700":a>o.activeStep}])},e[20]||(e[20]=[s("i",{class:"pi pi-question-circle"},null,-1)]),2)],16,qn),l(k)],16)]),_:1}),l(h,{asChild:"",value:4},{default:m(({activateCallback:d,value:a,a11yAttrs:w})=>[s("div",c({class:"flex flex-row pl-2"},w.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:d},w.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":a<=o.activeStep,"border-surface-200 dark:border-surface-700":a>o.activeStep}])},e[21]||(e[21]=[s("i",{class:"pi pi-check-circle"},null,-1)]),2)],16,Zn)],16)]),_:1})]),_:1}),l(M,null,{default:m(()=>[l(y,{value:1},{default:m(({activateCallback:d})=>[s("div",Kn,[e[30]||(e[30]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 1: Business Identification ",-1)),s("div",Gn,[s("div",Jn,[e[22]||(e[22]=s("label",{for:"firstName",class:"font-bold"},"First Name",-1)),l(S,{id:"firstName",modelValue:o.firstName,"onUpdate:modelValue":e[1]||(e[1]=a=>o.firstName=a),type:"text",placeholder:"Enter first name",class:"w-full"},null,8,["modelValue"]),o.errors.firstName?(i(),u("small",Qn,f(o.errors.firstName),1)):b("",!0)]),s("div",Xn,[e[23]||(e[23]=s("label",{for:"lastName",class:"font-bold"},"Last Name",-1)),l(S,{id:"lastName",modelValue:o.lastName,"onUpdate:modelValue":e[2]||(e[2]=a=>o.lastName=a),type:"text",placeholder:"Enter last name",class:"w-full"},null,8,["modelValue"]),o.errors.lastName?(i(),u("small",es,f(o.errors.lastName),1)):b("",!0)])]),s("div",ts,[s("div",ns,[e[24]||(e[24]=s("label",{for:"phoneNumber",class:"font-bold"},"Phone Number",-1)),l(S,{id:"phoneNumber",modelValue:o.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=a=>o.phoneNumber=a),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"]),o.errors.phoneNumber?(i(),u("small",ss,f(o.errors.phoneNumber),1)):b("",!0)]),s("div",os,[e[25]||(e[25]=s("label",{for:"email",class:"font-bold"},"Email Address",-1)),l(S,{id:"email",modelValue:o.email,"onUpdate:modelValue":e[4]||(e[4]=a=>o.email=a),type:"email",placeholder:"Enter email address",class:"w-full"},null,8,["modelValue"]),o.errors.email?(i(),u("small",rs,f(o.errors.email),1)):b("",!0)])]),s("div",as,[s("div",ls,[e[26]||(e[26]=s("label",{for:"businessName",class:"font-bold"},"Business/Company Name",-1)),l(S,{id:"businessName",modelValue:o.businessName,"onUpdate:modelValue":e[5]||(e[5]=a=>o.businessName=a),type:"text",placeholder:"Enter business name",class:"w-full"},null,8,["modelValue"]),o.errors.businessName?(i(),u("small",is,f(o.errors.businessName),1)):b("",!0)]),s("div",ds,[e[27]||(e[27]=s("label",{for:"location",class:"font-bold"},"Business Location",-1)),l(S,{id:"location",modelValue:o.location,"onUpdate:modelValue":e[6]||(e[6]=a=>o.location=a),type:"text",placeholder:"City, State, Country",class:"w-full"},null,8,["modelValue"]),o.errors.location?(i(),u("small",us,f(o.errors.location),1)):b("",!0)])]),s("div",ps,[e[28]||(e[28]=s("div",{class:"font-bold mb-2"},"Business Type",-1)),s("div",cs,[(i(!0),u(P,null,E(o.businessCategories,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(V,{modelValue:o.businessType,"onUpdate:modelValue":e[7]||(e[7]=w=>o.businessType=w),inputId:a.key,name:"businessType",value:a.key},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,ms)]))),128)),o.errors.businessType?(i(),u("small",fs,f(o.errors.businessType),1)):b("",!0)])]),s("div",null,[e[29]||(e[29]=s("div",{class:"font-bold mb-2"},"Years of Experience",-1)),s("div",hs,[(i(!0),u(P,null,E(o.yearExperiences,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(V,{modelValue:o.experienceYears,"onUpdate:modelValue":e[8]||(e[8]=w=>o.experienceYears=w),inputId:a.key,name:"experienceYears",value:a.key},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,bs)]))),128)),o.errors.experienceYears?(i(),u("small",vs,f(o.errors.experienceYears),1)):b("",!0)])])]),s("div",ys,[l(T,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:a=>r.validateAndProceed(d,1)},null,8,["onClick"])])]),_:1}),l(y,{value:2,style:{"min-width":"40vw"}},{default:m(({activateCallback:d})=>[s("div",gs,[e[35]||(e[35]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 2: Technical Experience ",-1)),s("div",null,[e[31]||(e[31]=s("label",{class:"font-bold py-5"}," Which of the following areas do you have experience with? ",-1)),(i(!0),u(P,null,E(o.experienceAreasList,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.experienceAreas,"onUpdate:modelValue":e[9]||(e[9]=w=>o.experienceAreas=w),inputId:a.key,name:"category",value:a.name},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,ws)]))),128)),o.experienceAreasError?(i(),u("p",ks," Please select at least one area of experience. ")):b("",!0)]),s("div",null,[e[32]||(e[32]=s("label",{class:"font-bold pb-3"}," Which brands have you primarily worked with? ",-1)),(i(!0),u(P,null,E(o.brandsWorkedWithList,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.brandsWorkedWith,"onUpdate:modelValue":e[10]||(e[10]=w=>o.brandsWorkedWith=w),inputId:a.key,name:"category",value:a.key},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,xs)]))),128)),o.brandsWorkedWith.includes("Other")?(i(),N(S,{key:0,id:"purchaseSource",modelValue:o.purchaseSource,"onUpdate:modelValue":e[11]||(e[11]=a=>o.purchaseSource=a),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):b("",!0),o.brandsWorkedWithError?(i(),u("p",Ss," Please select at least one brand. ")):b("",!0)]),s("div",Cs,[e[33]||(e[33]=s("label",{class:"font-bold pb-3"}," Do you have experience integrating security systems into larger solutions? ",-1)),(i(!0),u(P,null,E(o.integrationExperienceList,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(V,{modelValue:o.integrationExperience,"onUpdate:modelValue":e[12]||(e[12]=w=>o.integrationExperience=w),inputId:a.key,name:"integrationExperience",value:a.name},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,Is)]))),128)),o.integrationExperienceError?(i(),u("p",Ps," Please select an option. ")):b("",!0)]),s("div",Vs,[e[34]||(e[34]=s("label",{class:"font-bold pb-3"}," Are you familiar with Hikvision product certifications and installation standards? ",-1)),(i(!0),u(P,null,E(o.familiarWithStandards,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(V,{modelValue:o.familiarWithStandard,"onUpdate:modelValue":e[13]||(e[13]=w=>o.familiarWithStandard=w),inputId:a.key,name:"familiarWithStandard",value:a.name},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,Ts)]))),128)),o.familiarWithStandardError?(i(),u("p",Ns," Please select an option. ")):b("",!0)])]),s("div",Es,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:a=>d(1)},null,8,["onClick"]),l(T,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:a=>r.validateAndProceed(d,2)},null,8,["onClick"])])]),_:1}),l(y,{value:3,style:{"min-width":"40vw"}},{default:m(({activateCallback:d})=>[s("div",Bs,[e[38]||(e[38]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 3: Technical Questions ",-1)),s("div",Os,[e[36]||(e[36]=s("label",{for:"purchaseSource",class:"font-bold pb-3"}," Where do you currently purchase your security products? (Please select all that apply and provide details for each category) ",-1)),(i(!0),u(P,null,E(o.wherePurchase,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.purchaseSource,"onUpdate:modelValue":e[14]||(e[14]=w=>o.purchaseSource=w),inputId:a.key,name:"purchaseSource",value:a.name},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,Ls)]))),128)),o.purchaseError?(i(),u("p",$s," Please select an option. ")):b("",!0)]),s("div",_s,[e[37]||(e[37]=s("label",{class:"font-bold pb-3"}," Do you currently purchase Hikvision products? ",-1)),(i(!0),u(P,null,E(o.options,a=>(i(),u("div",{key:a.key,class:"flex items-center gap-2"},[l(V,{modelValue:o.purchaseHikvision,"onUpdate:modelValue":e[15]||(e[15]=w=>o.purchaseHikvision=w),inputId:a.key,name:"purchaseHikvision",value:a.name},null,8,["modelValue","inputId","value"]),s("label",{for:a.key},f(a.name),9,Ds)]))),128)),o.currentlyPurchaseError?(i(),u("p",As," Please select an option. ")):b("",!0)]),(i(!0),u(P,null,E(o.textareaFields,a=>(i(),u("div",{key:a.id,class:"field"},[s("label",Rs,[s("span",{innerHTML:a.label},null,8,zs)]),l(Y,{class:"mt-4"},{default:m(()=>[l(W,{id:a.id,modelValue:o.formData[a.model],"onUpdate:modelValue":w=>o.formData[a.model]=w,rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["id","modelValue","onUpdate:modelValue"]),s("label",{for:a.id},"Summary",8,Ws)]),_:2},1024),o.errors[a.model]?(i(),u("p",js,f(o.errors[a.model]),1)):b("",!0)]))),128))]),s("div",Us,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:a=>d(2)},null,8,["onClick"]),l(T,{label:"Submit",icon:"pi pi-check",iconPos:"right",onClick:a=>r.handleSubmit(d)},null,8,["onClick"])])]),_:1}),l(y,{value:4},{default:m(({activateCallback:d})=>[e[39]||(e[39]=s("div",{class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},[s("div",{class:"text-center mt-4 mb-4 text-sm font-semibold"},[s("div",{class:"p-6 rounded-lg shadow-md"},[C(" Thank You! "),s("p",{class:"text-gray-700"}," Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),s("ul",{class:"list-disc text-left pl-5 text-gray-700 mt-3"},[s("li",null,[s("strong",null,"Reseller Pricing")]),s("li",null,[s("strong",null,"Comprehensive Marketing and Technical Resources")]),s("li",null,[s("strong",null,"Product and Business Support")])]),s("p",{class:"text-gray-700 mt-4"}," For any inquiries or further assistance, please do not hesitate to contact us: "),s("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[s("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),s("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),s("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),s("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])]),s("p",{class:"text-gray-700 mt-6"}," We look forward to the opportunity to collaborate with you. "),s("hr",{class:"my-4 border-gray-300"}),s("p",{class:"text-gray-800 font-bold"},"Best regards,"),s("p",{class:"text-gray-700"}," Secure Digital Limited | Hik Digital Mart Limited "),s("p",{class:"text-gray-700 font-semibold"}," SDLKenya Online Shop Administration Department "),s("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[s("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),s("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),s("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),s("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])])])])],-1)),s("div",Hs,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:a=>d(3)},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["value"])])]),s("div",Fs,[l(x,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full"},{item:m(d=>[s("div",Ys,[s("img",{src:d.data.src,alt:d.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,Ms),s("div",qs,f(d.data.alt),1)])]),_:1},8,["value"])])])}const Ks=z(Wn,[["render",Zs],["__scopeId","data-v-8c652570"]]),Gs={data(){return{responseMessage:{},activeStep:1,wholesalerPersonalInfo:{companyName:"",firstName:"",lastName:"",phoneNumber:"",phoneNumber2:"",email:"",email2:"",address:""},wholesalerBusinessInfo:{selectedBusinessType:"",selectedBrands:[],selectedSecurityBrands:[],otherBrand:""},wholesalerTechnicalInfo:{selectedCategories:[],hikvisionChallenges:"",adviceToSecureDigital:"",otherBrand:""},errors:{wholesalerPersonalInfo:{companyName:"",firstName:"",lastName:"",phoneNumber:"",email:"",address:""},wholesalerBusinessInfo:{selectedBusinessType:"",selectedBrands:[],selectedSecurityBrands:[]},wholesalerTechnicalInfo:{selectedCategories:[],hikvisionChallenges:"",adviceToSecureDigital:""}},businessTypes:[{key:"stock_supply",name:"STOCK & SUPPLY ONLY."},{key:"stock_supply_install",name:"STOCK, SUPPLY & INSTALL."},{key:"supply_install",name:"SUPPLY & INSTALL"},{key:"install_only",name:"INSTALL ONLY"},{key:"other",name:"Other"}],selectedBrands:[],brandList:[{key:"hikvision",name:"HIKVISION"},{key:"dahua",name:"DAHUA"},{key:"uniview",name:"UNIVIEW"},{key:"axis",name:"AXIS"},{key:"zkteco",name:"ZKTECO"},{key:"other",name:"Other"}],selectedSecurityBrands:[],securityBrands:[{key:"hikvision",name:"HIKVISION"},{key:"dahua",name:"DAHUA"},{key:"uniview",name:"UNIVIEW"},{key:"axis",name:"AXIS"},{key:"zkteco",name:"ZKTECO"},{key:"other",name:"Other"}],selectedCategories:[],productCategories:[{key:"analogue_cctv",name:"ANALOGUE CCTV/ DVR"},{key:"network_cctv",name:"NETWORK (IP) CCTV /NVR"},{key:"intercoms",name:"INTERCOMS"},{key:"access_control",name:"ACCESS CONTROL"},{key:"other",name:"Other"}],images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],businessCategories:[{name:"System Integrator",key:"System Integrator"},{name:"Reseller",key:"Reseller"},{name:"Technician",key:"Technician"},{name:"Other",key:"Other"}],yearExperiences:[{name:"1 Year",key:"1 Year"},{name:"1-3 Years",key:"1-3 Years"},{name:"4-7 Years",key:"4-7 Years"},{name:"8+",key:"8+"}],experienceAreasList:[{name:"CCTV Systems",key:"CCTV Systems"},{name:"Access Control Systems",key:"Access Control Systems"},{name:"Video Intercom Systems",key:"Video Intercom Systems"},{name:"Networking and Computer Products",key:"Networking and Computer Products"},{name:"Electrical Installations",key:"Electrical Installations"}],brandsWorkedWithList:[{name:"Hikvision",key:"Hikvision"},{name:"Dahua",key:"Dahua"},{name:"Uniview",key:"Uniview"},{name:"Tandy",key:"Tandy"},{name:"Other (Please Specify)",key:"Other"}],integrationExperienceList:[{name:"Yes, Extensive Experience",key:"Yes, Extensive Experience"},{name:"Some Experience",key:"Some Experience"},{name:"No Experience",key:"No Experience"}],wherePurchase:[{name:"National Distributor",key:"National Distributor"},{name:"Regional Supplier",key:"Regional Supplier"},{name:"Online Retailer ",key:"Online Retailer "},{name:"Other",key:"Other"}],familiarWithStandards:[{name:"Yes, I'm certified",key:"Yes, I'm certified"},{name:"I am familiar but not certified",key:"I am familiar but not certified"},{name:"No, but I am willing to learn",key:"No, but I am willing to learn"}],options:[{name:"Yes",key:"Yes"},{name:"No",key:"No"},{name:"Not yet, but interested",key:"Not yet, but interested"}],experienceAreasError:!1,brandsWorkedWithError:!1,integrationExperienceError:!1,familiarWithStandardError:!1,purchaseError:!1,currentlyPurchaseError:!1,formData:{technicalExpertise:"",hikvisionTechDifference:"",troubleshootCCTV:"",networkDesign:"",supportAreas:"",businessSupport:""},textareaFields:[{id:"technicalExpertise",model:"technicalExpertise",label:`Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`},{id:"hikvisionTechDifference",model:"hikvisionTechDifference",label:"What is the difference between Hikvision’s AcuSense and ColorVu technologies?"},{id:"troubleshootCCTV",model:"troubleshootCCTV",label:"How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"},{id:"networkDesign",model:"networkDesign",label:"What are the key considerations when designing a network for IP-based surveillance systems?"},{id:"supportAreas",model:"supportAreas",label:"What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"},{id:"businessSupport",model:"businessSupport",label:"How can we best support your business? (Optional)"}]}},watch:{},methods:{handleSubmit(t){const e={...this.wholesalerPersonalInfo,...this.wholesalerBusinessInfo,...this.wholesalerTechnicalInfo};this.validateForm()?(console.log("Form Data:",e),this.submitForm()):console.log("Validation failed")},validateForm(){let t=!0;return this.errors={},t},hasErrors(t){return Object.values(t).some(e=>typeof e=="object"?this.hasErrors(e):e!=="")},validateAndProceed(t,e){this.errors={wholesalerPersonalInfo:{companyName:"",firstName:"",lastName:"",phoneNumber:"",email:"",address:""},wholesalerBusinessInfo:{selectedBusinessType:"",selectedBrands:[],selectedSecurityBrands:[]},wholesalerTechnicalInfo:{selectedCategories:[],hikvisionChallenges:"",adviceToSecureDigital:""}},e==1&&(this.wholesalerPersonalInfo.companyName||(this.errors.wholesalerPersonalInfo.companyName="Company name is required."),this.wholesalerPersonalInfo.firstName||(this.errors.wholesalerPersonalInfo.firstName="First name is required."),this.wholesalerPersonalInfo.lastName||(this.errors.wholesalerPersonalInfo.lastName="Last name is required."),this.wholesalerPersonalInfo.phoneNumber||(this.errors.wholesalerPersonalInfo.phoneNumber="Phone number is required."),this.wholesalerPersonalInfo.email||(this.errors.wholesalerPersonalInfo.email="Email address is required."),this.wholesalerPersonalInfo.address||(this.errors.wholesalerPersonalInfo.address="Business address is required."),this.hasErrors(this.errors)||t(2)),e==2&&(this.wholesalerBusinessInfo.selectedBusinessType.length===0&&(this.errors.wholesalerBusinessInfo.selectedBusinessType="Business type is required."),this.wholesalerBusinessInfo.selectedBrands.length===0&&(this.errors.wholesalerBusinessInfo.selectedBrands="At least one brand is required."),this.wholesalerBusinessInfo.selectedSecurityBrands.length===0&&(this.errors.wholesalerBusinessInfo.selectedSecurityBrands="At least one security brand is required."),this.integrationExperience||(this.integrationExperienceError=!0),this.familiarWithStandard||(this.familiarWithStandardError=!0),!this.selectedBrandsError&&!this.selectedBusinessTypeErrors&&!this.selectedSecurityBrandsError&&t(3))},async submitForm(){console.log("cdscs",this.formData);const t={businessName:this.businessName,phoneNumber:this.phoneNumber,email:this.email,location:this.location,businessType:this.businessType,experienceYears:this.experienceYears,experienceAreas:this.experienceAreas,brandsWorkedWith:this.brandsWorkedWith,integrationExperience:this.integrationExperience,familiarWithStandard:this.familiarWithStandard,purchaseSource:this.purchaseSource,purchaseHikvision:this.purchaseHikvision,requiresTraining:this.requiresTraining};console.log("Form Data:",t);try{const{$axios:e}=$(),n=await e.post("/user/technician-questionnaire",t);this.responseMessage=n.data.message,this.activateCallback(4),n.status}catch(e){console.error("Error submitting form:",e)}finally{}},resetForm(){this.businessName="",this.phoneNumber="",this.phoneNumber2="",this.email="",this.email2="",this.address,this.location="",this.businessType=null,this.experienceYears=null,this.experienceAreas=[],this.brandsWorkedWith=[],this.integrationExperience=null,this.purchaseSource="",this.purchaseHikvision=null,this.requiresTraining=null}}},Js={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Qs={class:"flex w-full flex-col items-center justify-center"},Xs={class:"flex justify-center items-center absolute top-16 left-8"},eo={class:"border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white"},to=["onClick"],no=["onClick"],so=["onClick"],oo=["onClick"],ro={class:"flex flex-col gap-4 mx-auto",style:{"min-width":"40vw"}},ao={class:"flex gap-4"},lo={class:"field w-full"},io={key:0,class:"text-red-500"},uo={class:"flex gap-4"},po={class:"field w-1/2"},co={key:0,class:"text-red-500"},mo={class:"field w-1/2"},fo={key:0,class:"text-red-500"},ho={class:"flex gap-4"},bo={class:"field w-1/2"},vo={key:0,class:"text-red-500"},yo={class:"field w-1/2"},go={key:0,class:"text-red-500"},wo={class:"flex gap-4"},ko={class:"field w-1/2"},xo={key:0,class:"text-red-500"},So={class:"field w-1/2"},Co={key:0,class:"text-red-500"},Io={class:"flex gap-4"},Po={class:"field w-1/2"},Vo={key:0,class:"text-red-500"},To={class:"flex pt-6 justify-end",style:{"max-width":"800px",margin:"0 auto"}},No={class:"flex flex-col gap-4"},Eo=["for"],Bo=["for"],Oo=["for"],Lo={class:"flex pt-6 justify-between"},$o={class:"flex flex-col gap-4"},_o=["for"],Do={class:"flex pt-6 justify-between"},Ao={class:"flex pt-6 justify-between"},Ro={class:"hidden md:block h-full w-full"},zo={class:"relative w-full h-screen flex justify-center items-center"},Wo=["src","alt"],jo={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Uo(t,e,n,p,o,r){const k=ge,h=le,g=ae,S=D,V=X,T=oe,y=re,v=ye,W=se,Y=ne,M=te,q=U;return i(),u("div",Js,[s("div",Qs,[s("div",Xs,[s("a",{onClick:e[0]||(e[0]=x=>t.$emit("back-to-signup")),class:"text-primary text-md cursor-pointer hover:text-secondary"},e[18]||(e[18]=[s("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}},null,-1),C(" Back to Signup")]))]),s("div",eo,[l(M,{value:o.activeStep,"onUpdate:value":e[17]||(e[17]=x=>o.activeStep=x),class:""},{default:m(()=>[l(g,null,{default:m(()=>[l(h,{asChild:"",value:1},{default:m(({activateCallback:x,value:d,a11yAttrs:a})=>[s("div",c({class:"flex flex-row flex-auto gap-2"},a.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:x},a.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":d<=o.activeStep,"border-surface-200 dark:border-surface-700":d>o.activeStep}])},e[19]||(e[19]=[s("i",{class:"pi pi-building"},null,-1)]),2)],16,to),l(k)],16)]),_:1}),l(h,{asChild:"",value:2},{default:m(({activateCallback:x,value:d,a11yAttrs:a})=>[s("div",c({class:"flex flex-row flex-auto gap-2 pl-2"},a.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:x},a.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":d<=o.activeStep,"border-surface-200 dark:border-surface-700":d>o.activeStep}])},e[20]||(e[20]=[s("i",{class:"pi pi-cog"},null,-1)]),2)],16,no),l(k)],16)]),_:1}),l(h,{asChild:"",value:3},{default:m(({activateCallback:x,value:d,a11yAttrs:a})=>[s("div",c({class:"flex flex-row pl-2"},a.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:x},a.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":d<=o.activeStep,"border-surface-200 dark:border-surface-700":d>o.activeStep}])},e[21]||(e[21]=[s("i",{class:"pi pi-question-circle"},null,-1)]),2)],16,so),l(k)],16)]),_:1}),l(h,{asChild:"",value:4},{default:m(({activateCallback:x,value:d,a11yAttrs:a})=>[s("div",c({class:"flex flex-row pl-2"},a.root),[s("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:x},a.header),[s("span",{class:O(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":d<=o.activeStep,"border-surface-200 dark:border-surface-700":d>o.activeStep}])},e[22]||(e[22]=[s("i",{class:"pi pi-check-circle"},null,-1)]),2)],16,oo)],16)]),_:1})]),_:1}),l(Y,null,{default:m(()=>[l(T,{value:1},{default:m(({activateCallback:x})=>[s("div",ro,[e[31]||(e[31]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 1: Personal Information ",-1)),s("div",ao,[s("div",lo,[e[23]||(e[23]=s("label",{for:"firstName",class:"font-bold"},"Company Name ( Full company name )",-1)),l(S,{id:"wholesalerPersonalInfo.companyName",modelValue:o.wholesalerPersonalInfo.companyName,"onUpdate:modelValue":e[1]||(e[1]=d=>o.wholesalerPersonalInfo.companyName=d),type:"text",placeholder:"Enter Company name",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.companyName?(i(),u("small",io,f(o.errors.wholesalerPersonalInfo.companyName),1)):b("",!0)])]),s("div",uo,[s("div",po,[e[24]||(e[24]=s("label",{for:"firstName",class:"font-bold"},"First Name",-1)),l(S,{id:"wholesalerPersonalInfo.firstName",modelValue:o.wholesalerPersonalInfo.firstName,"onUpdate:modelValue":e[2]||(e[2]=d=>o.wholesalerPersonalInfo.firstName=d),type:"text",placeholder:"Enter first name",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.firstName?(i(),u("small",co,f(o.errors.wholesalerPersonalInfo.firstName),1)):b("",!0)]),s("div",mo,[e[25]||(e[25]=s("label",{for:"wholesalerPersonalInfo.lastName",class:"font-bold"},"Last Name",-1)),l(S,{id:"wholesalerPersonalInfo.lastName",modelValue:o.wholesalerPersonalInfo.lastName,"onUpdate:modelValue":e[3]||(e[3]=d=>o.wholesalerPersonalInfo.lastName=d),type:"text",placeholder:"Enter last name",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.lastName?(i(),u("small",fo,f(o.errors.wholesalerPersonalInfo.lastName),1)):b("",!0)])]),s("div",ho,[s("div",bo,[e[26]||(e[26]=s("label",{for:"wholesalerPersonalInfo.email",class:"font-bold"},"Email Address",-1)),l(S,{id:"wholesalerPersonalInfo.email",modelValue:o.wholesalerPersonalInfo.email,"onUpdate:modelValue":e[4]||(e[4]=d=>o.wholesalerPersonalInfo.email=d),type:"email",placeholder:"Enter email address ",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.email?(i(),u("small",vo,f(o.errors.wholesalerPersonalInfo.email),1)):b("",!0)]),s("div",yo,[e[27]||(e[27]=s("label",{for:"wholesalerPersonalInfo.email2",class:"font-bold"},"Email Address 2",-1)),l(S,{id:"wholesalerPersonalInfo.email2",modelValue:o.wholesalerPersonalInfo.email2,"onUpdate:modelValue":e[5]||(e[5]=d=>o.wholesalerPersonalInfo.email2=d),type:"email",placeholder:"Enter email 2 address",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.email2?(i(),u("small",go,f(o.errors.wholesalerPersonalInfo.email2),1)):b("",!0)])]),s("div",wo,[s("div",ko,[e[28]||(e[28]=s("label",{for:"wholesalerPersonalInfo.phoneNumber",class:"font-bold"},"Phone Number 1",-1)),l(S,{id:"wholesalerPersonalInfo.phoneNumber",modelValue:o.wholesalerPersonalInfo.phoneNumber,"onUpdate:modelValue":e[6]||(e[6]=d=>o.wholesalerPersonalInfo.phoneNumber=d),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.phoneNumber?(i(),u("small",xo,f(o.errors.wholesalerPersonalInfo.phoneNumber),1)):b("",!0)]),s("div",So,[e[29]||(e[29]=s("label",{for:"wholesalerPersonalInfo.phoneNumber2",class:"font-bold"},"Phone Number 2",-1)),l(S,{id:"wholesalerPersonalInfo.phoneNumber2",modelValue:o.wholesalerPersonalInfo.phoneNumber2,"onUpdate:modelValue":e[7]||(e[7]=d=>o.wholesalerPersonalInfo.phoneNumber2=d),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.phoneNumber2?(i(),u("small",Co,f(o.errors.wholesalerPersonalInfo.phoneNumber2),1)):b("",!0)])]),s("div",Io,[s("div",Po,[e[30]||(e[30]=s("label",{for:"wholesalerPersonalInfo.address",class:"font-bold"},"Business Address",-1)),l(S,{id:"wholesalerPersonalInfo.address",modelValue:o.wholesalerPersonalInfo.address,"onUpdate:modelValue":e[8]||(e[8]=d=>o.wholesalerPersonalInfo.address=d),type:"text",placeholder:"Shop Location i.e Shop no, Building name, Street & Town",class:"w-full"},null,8,["modelValue"]),o.errors.wholesalerPersonalInfo.address?(i(),u("small",Vo,f(o.errors.wholesalerPersonalInfo.address),1)):b("",!0)])])]),s("div",To,[l(V,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:d=>r.validateAndProceed(x,1)},null,8,["onClick"])])]),_:1}),l(T,{value:2,style:{"min-width":"40vw"}},{default:m(({activateCallback:x})=>[s("div",No,[e[35]||(e[35]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 2: Business Details ",-1)),s("div",null,[e[32]||(e[32]=s("label",{class:"font-bold py-5"}," Which of the following describes your business well? ",-1)),C(" "+f(o.wholesalerBusinessInfo.selectedBusinessType)+" ",1),(i(!0),u(P,null,E(o.businessTypes,d=>(i(),u("div",{key:d.key,class:"flex items-center gap-2"},[l(y,{modelValue:o.wholesalerBusinessInfo.selectedBusinessType,"onUpdate:modelValue":e[9]||(e[9]=a=>o.wholesalerBusinessInfo.selectedBusinessType=a),inputId:d.key,name:"selectedBrands.businessType",value:d.name},null,8,["modelValue","inputId","value"]),s("label",{for:d.key},f(d.name),9,Eo)]))),128)),o.wholesalerBusinessInfo.selectedBusinessType=="Other"?(i(),N(S,{key:0,modelValue:o.wholesalerBusinessInfo.otherBrand,"onUpdate:modelValue":e[10]||(e[10]=d=>o.wholesalerBusinessInfo.otherBrand=d),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):b("",!0)]),s("div",null,[e[33]||(e[33]=s("label",{class:"font-bold pb-3"}," Which brands do you deal with? ",-1)),(i(!0),u(P,null,E(o.brandList,d=>(i(),u("div",{key:d.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.wholesalerBusinessInfo.selectedBrands,"onUpdate:modelValue":e[11]||(e[11]=a=>o.wholesalerBusinessInfo.selectedBrands=a),inputId:d.key,name:"wholesalerBusinessInfo.selectedBrands",value:d.name},null,8,["modelValue","inputId","value"]),s("label",{for:d.key},f(d.name),9,Bo)]))),128)),o.wholesalerBusinessInfo.selectedBrands.includes("Other")?(i(),N(S,{key:0,modelValue:o.wholesalerBusinessInfo.otherBrand,"onUpdate:modelValue":e[12]||(e[12]=d=>o.wholesalerBusinessInfo.otherBrand=d),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):b("",!0)]),s("div",null,[e[34]||(e[34]=s("label",{class:"font-bold pb-3"}," Which security brand do you have strength in? ",-1)),(i(!0),u(P,null,E(o.securityBrands,d=>(i(),u("div",{key:d.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.wholesalerBusinessInfo.selectedSecurityBrands,"onUpdate:modelValue":e[13]||(e[13]=a=>o.wholesalerBusinessInfo.selectedSecurityBrands=a),inputId:d.key,name:"wholesalerBusinessInfo.selectedSecurityBrands",value:d.name},null,8,["modelValue","inputId","value"]),s("label",{for:d.key},f(d.name),9,Oo)]))),128))])]),s("div",Lo,[l(V,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:d=>x(1)},null,8,["onClick"]),l(V,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:d=>r.validateAndProceed(x,2)},null,8,["onClick"])])]),_:1}),l(T,{value:3,style:{"min-width":"40vw"}},{default:m(({activateCallback:x})=>[s("div",$o,[e[39]||(e[39]=s("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 3: Technical Questions ",-1)),s("div",null,[e[36]||(e[36]=s("label",{class:"font-bold pb-3"}," Which product categories do you mostly deal with? ",-1)),(i(!0),u(P,null,E(o.productCategories,d=>(i(),u("div",{key:d.key,class:"flex items-center gap-2"},[l(v,{modelValue:o.wholesalerTechnicalInfo.selectedCategories,"onUpdate:modelValue":e[14]||(e[14]=a=>o.wholesalerTechnicalInfo.selectedCategories=a),inputId:d.key,name:"wholesalerTechnicalInfo.selectedCategories",value:d.name},null,8,["modelValue","inputId","value"]),s("label",{for:d.key},f(d.name),9,_o)]))),128))]),s("div",null,[e[37]||(e[37]=s("label",{class:"font-bold pb-3"},"What are the challenges you have faced when dealing with Hikvision?",-1)),l(W,{modelValue:o.wholesalerTechnicalInfo.hikvisionChallenges,"onUpdate:modelValue":e[15]||(e[15]=d=>o.wholesalerTechnicalInfo.hikvisionChallenges=d),rows:"4",class:"w-full",placeholder:"Describe challenges..."},null,8,["modelValue"])]),s("div",null,[e[38]||(e[38]=s("label",{class:"font-bold pb-3"},"What would be your advice to Secure Digital Limited?",-1)),l(W,{modelValue:o.wholesalerTechnicalInfo.adviceToSecureDigital,"onUpdate:modelValue":e[16]||(e[16]=d=>o.wholesalerTechnicalInfo.adviceToSecureDigital=d),rows:"4",class:"w-full",placeholder:"Share your advice..."},null,8,["modelValue"])])]),s("div",Do,[l(V,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:d=>x(2)},null,8,["onClick"]),l(V,{label:"Submit",icon:"pi pi-check",iconPos:"right",onClick:d=>r.handleSubmit(x)},null,8,["onClick"])])]),_:1}),l(T,{value:4},{default:m(({activateCallback:x})=>[e[40]||(e[40]=s("div",{class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},[s("div",{class:"text-center mt-4 mb-4 text-sm font-semibold"},[s("div",{class:"p-6 rounded-lg shadow-md"},[C(" Thank You! "),s("p",{class:"text-gray-700"}," Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),s("ul",{class:"list-disc text-left pl-5 text-gray-700 mt-3"},[s("li",null,[s("strong",null,"Reseller Pricing")]),s("li",null,[s("strong",null,"Comprehensive Marketing and Technical Resources")]),s("li",null,[s("strong",null,"Product and Business Support")])]),s("p",{class:"text-gray-700 mt-4"}," For any inquiries or further assistance, please do not hesitate to contact us: "),s("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[s("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),s("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),s("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),s("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])]),s("p",{class:"text-gray-700 mt-6"}," We look forward to the opportunity to collaborate with you. "),s("hr",{class:"my-4 border-gray-300"}),s("p",{class:"text-gray-800 font-bold"},"Best regards,"),s("p",{class:"text-gray-700"}," Secure Digital Limited | Hik Digital Mart Limited "),s("p",{class:"text-gray-700 font-semibold"}," SDLKenya Online Shop Administration Department "),s("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[s("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),s("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),s("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),s("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])])])])],-1)),s("div",Ao,[l(V,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:d=>x(3)},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["value"])])]),s("div",Ro,[l(q,{verticalViewPortHeight:2e3,autoplayInterval:4e3,value:o.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",class:"rounded-lg w-full"},{item:m(x=>[s("div",zo,[s("img",{src:x.data.src,alt:x.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,Wo),s("div",jo,f(x.data.alt),1)])]),_:1},8,["value"])])])}const Ho=z(Gs,[["render",Uo],["__scopeId","data-v-9971bf55"]]),Fo={class:"auth-container",style:{"background-color":"white"}},rr=Le({__name:"index",setup(t){const e=Z(!1),n=Z(!1),p=Z(!1),o=()=>{e.value=!e.value,n.value=!1,p.value=!1},r=()=>{e.value=!1,n.value=!0,p.value=!1},k=()=>{e.value=!1,n.value=!1,p.value=!0},h=()=>{e.value=!0,n.value=!1,p.value=!1};return(g,S)=>(i(),u("div",Fo,[e.value?(i(),N(pt,{key:0,onToggle:o,onShowQuestionnaire:r,onShowWholesaler:k})):n.value?(i(),N(Ks,{key:1,onBackToSignup:h})):p.value?(i(),N(Ho,{key:2,onBackToSignup:h})):(i(),N(Gt,{key:3,onToggle:o}))]))}});export{rr as default};
