import{s as Q}from"./DvnoCq6R.js";import{s as F}from"./CmbWoQrp.js";import{B as I,p as X,q as L,o,c as p,F as k,m as P,s as x,b as l,u as N,v as c,_ as B,x as U,y as O,a as r,d as C,z as ee,w as m,t as v,A as Se,C as Ce,D as Ve,E as Ie,G as V,H as z,I as g,T as te,J as Te,K as M,L as Pe,M as ne,N as Z,O as K,P as $e,r as J}from"./tL2_9plP.js";import{s as A,a as Ee,U as j,C as Ne,O as Le}from"./DezqP0JS.js";import{s as Y}from"./BSnAQvLL.js";import{s as $,a as re}from"./CsQfmC0I.js";import{_ as se}from"./DfOKB53i.js";import{Z as H,s as Oe}from"./CuWZ3smw.js";import{s as ze}from"./CWdEy6OF.js";import{s as De}from"./xLu0QVGG.js";import{s as Ae}from"./iUifm4Qi.js";import"./SwgnqYOB.js";import"./DJUQs7ia.js";import"./BQSjnp9Y.js";import"./z9pi14av.js";var je=function(e){var n=e.dt;return`
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
`)},Be={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},Re=I.extend({name:"inputotp",theme:je,classes:Be}),_e={name:"BaseInputOtp",extends:Y,props:{readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:Re,provide:function(){return{$pcInputOtp:this,$parentInstance:this}}},R={name:"InputOtp",extends:_e,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(e){this.tokens=e?e.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(e){return{value:this.tokens[e]}},getTemplateEvents:function(e){var n=this;return{input:function(s){return n.onInput(s,e)},keydown:function(s){return n.onKeyDown(s)},focus:function(s){return n.onFocus(s)},blur:function(s){return n.onBlur(s)},paste:function(s){return n.onPaste(s)}}},onInput:function(e,n){this.tokens[n]=e.target.value,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward"||X()&&e instanceof CustomEvent)&&this.moveToNext(e)},updateModel:function(e){var n=this.tokens.join("");this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},moveToPrev:function(e){var n=this.findPrevInput(e.target);n&&(n.focus(),n.select())},moveToNext:function(e){var n=this.findNextInput(e.target);n&&(n.focus(),n.select())},findNextInput:function(e){var n=e.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)},findPrevInput:function(e){var n=e.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)},onFocus:function(e){e.target.select(),this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onClick:function(e){setTimeout(function(){return e.target.select()},1)},onKeyDown:function(e){if(!(e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Tab":break;default:(this.integerOnly&&!(e.code!=="Space"&&Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}},onPaste:function(e){var n=e.clipboardData.getData("text");if(n.length){var d=n.substring(0,this.length);(!this.integerOnly||!isNaN(d))&&(this.tokens=d.split(""),this.updateModel(e))}e.preventDefault()}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:A}};function He(t,e,n,d,s,a){var w=L("OtpInputText");return o(),p("div",c({class:t.cx("root")},t.ptmi("root")),[(o(!0),p(k,null,P(t.length,function(f){return x(t.$slots,"default",{key:f,events:a.getTemplateEvents(f-1),attrs:a.getTemplateAttrs(f-1),index:f},function(){return[l(w,{value:s.tokens[f-1],type:a.inputType,class:N(t.cx("pcInputText")),name:t.$formName,inputmode:a.inputMode,variant:t.variant,readonly:t.readonly,disabled:t.disabled,size:t.size,invalid:t.invalid,tabindex:t.tabindex,unstyled:t.unstyled,onInput:function(S){return a.onInput(S,f-1)},onFocus:e[0]||(e[0]=function(b){return a.onFocus(b)}),onBlur:e[1]||(e[1]=function(b){return a.onBlur(b)}),onPaste:e[2]||(e[2]=function(b){return a.onPaste(b)}),onKeydown:e[3]||(e[3]=function(b){return a.onKeyDown(b)}),onClick:e[4]||(e[4]=function(b){return a.onClick(b)}),pt:t.ptm("pcInputText")},null,8,["value","type","class","name","inputmode","variant","readonly","disabled","size","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}R.render=He;var We=function(e){var n=e.dt;return`
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
`)},Ue={root:function(e){e.instance;var n=e.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},Me=I.extend({name:"floatlabel",theme:We,classes:Ue}),Fe={name:"BaseFloatLabel",extends:$,props:{variant:{type:String,default:"over"}},style:Me,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},q={name:"FloatLabel",extends:Fe,inheritAttrs:!1};function Ye(t,e,n,d,s,a){return o(),p("span",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}q.render=Ye;const qe={components:{InputOtp:R},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{firstName:"",lastName:"",email:"",password:"",cpassword:"",phone:"",role:""},otp:"",otpSent:!1,roles:[]}},methods:{handleRole(){this.form.role.name=="TECHNICIAN"&&(console.log("role: ",this.form.role),this.$emit("show-questionnaire"))},async register(){try{const t=U(),{$axios:e}=O();await t.register({firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,password:this.form.password,phoneNumber:this.form.phoneNumber,roleId:this.form.role.id}),this.otpSent=!0,console.log("OTP sent to email")}catch(t){console.error("Error registering:",t),this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{$axios:t}=O(),e=U(),{accessToken:n,user:d}=await e.verifyOtp({email:this.form.email,otp:this.otp});n&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async fetchRoles(){const{$axios:t}=O();try{const e=await t.get("/user/roles");this.roles=e.data}catch(e){console.error("Error fetching roles:",e)}}},mounted(){this.fetchRoles()}},Ze={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Ke={class:"flex w-full h-screen flex-col items-center justify-center"},Je={class:"border shadow-lg p-8 rounded-xl bg-white text-center flex flex-col items-center"},Ge={class:"flex space-x-4 mb-4 w-full"},Qe={class:"flex flex-col space-y-4 mb-4 w-full"},Xe={key:1,class:"flex flex-col items-center text-center w-full"},et={class:"text-gray-500 mb-6"},tt={class:"font-weight-bold font-bold"},nt={class:"w-full flex justify-center mb-4"},rt={class:"flex justify-center w-full"},st={class:"text-sm mt-4"},at={class:"hidden md:block h-full w-full p-4 relative"},it={class:"relative w-full h-screen flex justify-center items-center"},ot=["src","alt"],lt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function pt(t,e,n,d,s,a){const w=A,f=q,b=Ee,S=R,E=F,T=Q;return o(),p(k,null,[r("div",Ze,[r("div",Ke,[e[20]||(e[20]=r("div",{class:"flex justify-center items-center absolute top-16 left-8"},[r("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[r("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),C(" Back to Shop")])],-1)),r("div",Je,[e[18]||(e[18]=r("img",{src:se,alt:"Login",class:"h-28 w-28 mb-6 mx-auto"},null,-1)),e[19]||(e[19]=r("p",{class:"text-gray-500 text-2xl mb-10"}," Enter your details below to sign up ",-1)),s.otpSent?(o(),p("div",Xe,[e[16]||(e[16]=r("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),r("p",et,[e[15]||(e[15]=C(" Enter the OTP sent to your email address. ")),r("span",tt,v(s.form.email),1)]),r("div",nt,[r("div",rt,[l(S,{length:6,modelValue:s.otp,"onUpdate:modelValue":e[7]||(e[7]=u=>s.otp=u),class:"p-inputtex text-center p-3 w-full max-w-sm",placeholder:"Enter OTP"},null,8,["modelValue"])])]),r("button",{onClick:e[8]||(e[8]=(...u)=>a.verifyOtp&&a.verifyOtp(...u)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"}," Verify OTP ")])):(o(),p("form",{key:0,onSubmit:e[6]||(e[6]=ee((...u)=>a.register&&a.register(...u),["prevent"])),class:"w-full flex flex-col items-center"},[r("div",Ge,[l(f,{variant:"on",class:"w-full"},{default:m(()=>[l(w,{type:"text",id:"firstName",modelValue:s.form.firstName,"onUpdate:modelValue":e[0]||(e[0]=u=>s.form.firstName=u),class:"w-full"},null,8,["modelValue"]),e[10]||(e[10]=r("label",{for:"firstName"},"First Name",-1))]),_:1}),l(f,{variant:"on",class:"w-full"},{default:m(()=>[l(w,{type:"text",id:"lastName",modelValue:s.form.lastName,"onUpdate:modelValue":e[1]||(e[1]=u=>s.form.lastName=u),class:"w-full"},null,8,["modelValue"]),e[11]||(e[11]=r("label",{for:"lastName"},"Last Name",-1))]),_:1})]),r("div",Qe,[l(f,{variant:"on",class:"w-full"},{default:m(()=>[l(w,{type:"email",id:"email",modelValue:s.form.email,"onUpdate:modelValue":e[2]||(e[2]=u=>s.form.email=u),class:"w-full"},null,8,["modelValue"]),e[12]||(e[12]=r("label",{for:"email"},"Email",-1))]),_:1}),l(f,{variant:"on",class:"w-full"},{default:m(()=>[l(w,{type:"number",id:"phoneNumber",modelValue:s.form.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=u=>s.form.phoneNumber=u),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=r("label",{for:"phoneNumber"},"Mobile Phone",-1))]),_:1}),l(w,{name:"password",modelValue:s.form.password,"onUpdate:modelValue":e[4]||(e[4]=u=>s.form.password=u),type:"password",class:"w-full",placeholder:"Password"},null,8,["modelValue"]),l(b,{modelValue:s.form.role,"onUpdate:modelValue":e[5]||(e[5]=u=>s.form.role=u),options:s.roles,optionLabel:"name",onChange:a.handleRole,placeholder:"Select a Role",class:"w-full custom-dropdown"},null,8,["modelValue","options","onChange"])]),e[14]||(e[14]=r("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-6"}," Sign Up ",-1))],32)),r("p",st,[e[17]||(e[17]=C(" Already have an account? ")),r("span",{class:"text-blue-500 cursor-pointer",onClick:e[9]||(e[9]=u=>t.$emit("toggle"))}," Log in ")])])]),r("div",at,[l(E,{verticalViewPortHeight:2e3,value:s.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",autoplayInterval:"4000",class:"rounded-lg w-full hidden sm:block"},{item:m(u=>[r("div",it,[r("img",{src:u.data.src,alt:u.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,ot),r("div",lt,v(u.data.alt),1)])]),_:1},8,["value"])])]),l(T,{position:"bottom-right",group:"br"})],64)}const dt=B(qe,[["render",pt],["__scopeId","data-v-905ec5c5"]]);var ae={name:"EyeIcon",extends:re};function ut(t,e,n,d,s,a){return o(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}ae.render=ut;var ie={name:"EyeSlashIcon",extends:re};function ct(t,e,n,d,s,a){return o(),p("svg",c({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}ie.render=ct;var ft=function(e){var n=e.dt;return`
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
`)},mt={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},ht={root:function(e){var n=e.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused,"p-password-fluid":n.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(e){var n=e.instance;return"p-password-meter-label ".concat(n.meter?"p-password-meter-"+n.meter.strength:"")},meterText:"p-password-meter-text"},bt=I.extend({name:"password",theme:ft,classes:ht,inlineStyles:mt}),vt={name:"BasePassword",extends:Y,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:bt,provide:function(){return{$pcPassword:this,$parentInstance:this}}},oe={name:"Password",extends:vt,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},watch:{"$attrs.id":function(e){this.id=e||j()}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.id=this.id||j(),this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(H.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(e){H.set("overlay",e,this.$primevue.config.zIndex.overlay),Se(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(e){H.clear(e)},alignOverlay:function(){this.appendTo==="self"?Ce(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Ve(this.$refs.input.$el)+"px",Ie(this.overlay,this.$refs.input.$el))},testStrength:function(e){var n=0;return this.strongCheckRegExp.test(e)?n=3:this.mediumCheckRegExp.test(e)?n=2:e.length&&(n=1),n},onInput:function(e){this.writeValue(e.target.value,e),this.$emit("change",e)},onFocus:function(e){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",e)},onKeyUp:function(e){if(this.feedback){var n=e.target.value,d=this.checkPasswordStrength(n),s=d.meter,a=d.label;if(this.meter=s,this.infoText=a,e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var e=this.checkPasswordStrength(this.d_value),n=e.meter,d=e.label;this.meter=n,this.infoText=d,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(e){var n=null,d=null;switch(this.testStrength(e)){case 1:n=this.weakText,d={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,d={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,d={strength:"strong",width:"100%"};break;default:n=this.promptText,d=null;break}return{label:n,meter:d}},onInvalid:function(e){this.$emit("invalid",e)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Ne(this.$refs.input.$el,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!X()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(e){this.overlay=e},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(e){Le.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.id+"_overlay"}},components:{InputText:A,Portal:Oe,EyeSlashIcon:ie,EyeIcon:ae}};function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);e&&(d=d.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,d)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G(Object(n),!0).forEach(function(d){gt(t,d,n[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(d){Object.defineProperty(t,d,Object.getOwnPropertyDescriptor(n,d))})}return t}function gt(t,e,n){return(e=yt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yt(t){var e=wt(t,"string");return D(e)=="symbol"?e:e+""}function wt(t,e){if(D(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var d=n.call(t,e||"default");if(D(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xt=["id"];function kt(t,e,n,d,s,a){var w=L("InputText"),f=L("Portal");return o(),p("div",c({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[l(w,c({ref:"input",id:t.inputId,type:a.inputType,class:[t.cx("pcInputText"),t.inputClass],style:t.inputStyle,value:t.d_value,name:t.$formName,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-controls":t.overlayProps&&t.overlayProps.id||t.overlayId||t.panelProps&&t.panelProps.id||t.panelId||a.overlayUniqueId,"aria-expanded":s.overlayVisible,"aria-haspopup":!0,placeholder:t.placeholder,required:t.required,fluid:t.fluid,disabled:t.disabled,variant:t.variant,invalid:t.invalid,size:t.size,autofocus:t.autofocus,onInput:a.onInput,onFocus:a.onFocus,onBlur:a.onBlur,onKeyup:a.onKeyUp,onInvalid:a.onInvalid},t.inputProps,{pt:t.ptm("pcInputText"),unstyled:t.unstyled}),null,16,["id","type","class","style","value","name","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),t.toggleMask&&s.unmasked?x(t.$slots,t.$slots.maskicon?"maskicon":"hideicon",{key:0,toggleCallback:a.onMaskToggle},function(){return[(o(),V(z(t.maskIcon?"i":"EyeSlashIcon"),c({class:[t.cx("maskIcon"),t.maskIcon],onClick:a.onMaskToggle},t.ptm("maskIcon")),null,16,["class","onClick"]))]}):g("",!0),t.toggleMask&&!s.unmasked?x(t.$slots,t.$slots.unmaskicon?"unmaskicon":"showicon",{key:1,toggleCallback:a.onMaskToggle},function(){return[(o(),V(z(t.unmaskIcon?"i":"EyeIcon"),c({class:[t.cx("unmaskIcon"),t.unmaskIcon],onClick:a.onMaskToggle},t.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):g("",!0),r("span",c({class:"p-hidden-accessible","aria-live":"polite"},t.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),v(s.infoText),17),l(f,{appendTo:t.appendTo},{default:m(function(){return[l(te,c({name:"p-connected-overlay",onEnter:a.onOverlayEnter,onLeave:a.onOverlayLeave,onAfterLeave:a.onOverlayAfterLeave},t.ptm("transition")),{default:m(function(){return[s.overlayVisible?(o(),p("div",c({key:0,ref:a.overlayRef,id:t.overlayId||t.panelId||a.overlayUniqueId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.overlayStyle,t.panelStyle],onClick:e[0]||(e[0]=function(){return a.onOverlayClick&&a.onOverlayClick.apply(a,arguments)})},W(W(W({},t.panelProps),t.overlayProps),t.ptm("overlay"))),[x(t.$slots,"header"),x(t.$slots,"content",{},function(){return[r("div",c({class:t.cx("content")},t.ptm("content")),[r("div",c({class:t.cx("meter")},t.ptm("meter")),[r("div",c({class:t.cx("meterLabel"),style:{width:s.meter?s.meter.width:""}},t.ptm("meterLabel")),null,16)],16),r("div",c({class:t.cx("meterText")},t.ptm("meterText")),v(s.infoText),17)],16)]}),x(t.$slots,"footer")],16,xt)):g("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}oe.render=kt;const St={props:{images:{type:Array,default:()=>[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},components:{},data(){return{}},mounted(){this.images=[{src:"https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",alt:"Surveillance Camera 1"},{src:"https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",alt:"Surveillance Camera 2"},{src:"https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",alt:"Surveillance Camera 3"}]}},Ct=["src","alt"];function Vt(t,e,n,d,s,a){const w=L("Carousel",!0);return o(),p("div",null,[C(v(n.images)+" ",1),l(w,{verticalViewPortHeight:2e3,value:n.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",autoplayInterval:"4000",class:"rounded-lg w-full hidden sm:block"},{item:m(f=>[r("img",{src:f.data.src,alt:f.data.alt,class:"rounded object-cover w-full h-screen"},null,8,Ct)]),_:1},8,["value"])])}const It=B(St,[["render",Vt]]),Tt={components:{Carousel:It},data(){return{images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],form:{email:"",password:"",newPassword:"",confirmNewPassword:""},resetEmail:"",isVerified:!1,forgotPassword:!1,userStore:U(),productStore:Te(),resetPassword:!1}},computed:{passwordMismatch(){return this.form.newPassword&&this.form.confirmNewPassword&&this.form.newPassword!==this.form.confirmNewPassword}},methods:{async handleResetPassword(){try{const t={email:this.form.email,newPassword:this.form.newPassword,confirmNewPassword:this.form.confirmNewPassword,otp:this.otp},e=await this.userStore.resetPassword(t);console.log(e,"reset"),this.isVerified=!1,this.forgotPassword=!1,this.$toast.add({severity:"success",summary:e.data.message,group:"br",life:3e3})}catch(t){t.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async sendResetEmail(){var t,e;try{const{$axios:n}=O();await n.post("/auth/forgot-password",{email:this.resetEmail}),this.$toast.add({severity:"success",summary:"Reset link sent!",detail:"Check your email for the password reset link.",group:"br",life:3e3}),this.forgotPassword=!1,this.isVerified=!0,this.form.email=this.resetEmail,this.resetPassword=!1}catch(n){this.$toast.add({severity:"error",summary:"Error",detail:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Failed to send reset link.",group:"br",life:3e3})}},async login(){try{const{accessToken:t}=await this.userStore.login(this.form.email,this.form.password);t&&this.$router.push("/dashboard")}catch(t){t.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{accessToken:t}=await this.userStore.verifyOtp({email:this.form.email,otp:this.otp});if(!this.resetPassword){this.userStore.logout(),this.resetPassword=!0;return}t&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}}}},Pt={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},$t={class:"flex w-full h-screen flex-col items-center justify-center"},Et={class:"border shadow-xl p-36 rounded-xl bg-white flex flex-col items-center"},Nt={key:0},Lt={class:"flex flex-col gap-4 w-full"},Ot={class:"mt-4 flex justify-end w-full"},zt={class:"text-sm mt-4 text-center"},Dt={key:1},At={key:2},jt={key:0},Bt={class:"text-gray-500 mb-6"},Rt={class:"font-bold"},_t={class:"w-full mb-4 flex justify-center items-center"},Ht={key:1},Wt={key:0,class:"text-red-500 text-sm mt-2"},Ut=["disabled"],Mt={class:"hidden md:block h-full w-full p-4 relative"},Ft={class:"relative w-full h-screen flex justify-center items-center"},Yt=["src","alt"],qt={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function Zt(t,e,n,d,s,a){const w=A,f=q,b=oe,S=R,E=F,T=Q;return o(),p(k,null,[r("div",Pt,[r("div",$t,[e[28]||(e[28]=r("div",{class:"flex justify-center items-center absolute top-16 left-8"},[r("a",{href:"/dashboard",class:"text-primary text-md cursor-pointer hover:text-secondary"},[r("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}}),C(" Back to Shop")])],-1)),r("div",Et,[e[27]||(e[27]=r("img",{src:se,alt:"Login",class:"h-28 w-28"},null,-1)),!s.isVerified&&!s.forgotPassword?(o(),p("div",Nt,[e[17]||(e[17]=r("p",{class:"text-gray-500 text-2xl mb-10 text-center"}," Welcome to Secure Group ",-1)),r("form",{onSubmit:e[3]||(e[3]=ee((...u)=>a.login&&a.login(...u),["prevent"])),class:"w-full flex flex-col items-center"},[r("div",Lt,[l(f,{variant:"on"},{default:m(()=>[l(w,{type:"email",id:"email",modelValue:s.form.email,"onUpdate:modelValue":e[0]||(e[0]=u=>s.form.email=u),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=r("label",{for:"email"},"Email",-1))]),_:1}),l(f,{variant:"on"},{default:m(()=>[l(b,{modelValue:s.form.password,"onUpdate:modelValue":e[1]||(e[1]=u=>s.form.password=u),toggleMask:""},null,8,["modelValue"]),e[14]||(e[14]=r("label",{for:"password"},"Password",-1))]),_:1})]),r("div",Ot,[r("p",{class:"text-blue-500 text-sm cursor-pointer",onClick:e[2]||(e[2]=u=>s.forgotPassword=!0)}," Forgot password? ")]),e[15]||(e[15]=r("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Log In ",-1))],32),r("p",zt,[e[16]||(e[16]=C(" Don't have an account? ")),r("span",{class:"text-blue-500 cursor-pointer",onClick:e[4]||(e[4]=u=>t.$emit("toggle"))}," Sign up ")])])):s.forgotPassword?(o(),p("div",Dt,[e[19]||(e[19]=r("h3",{class:"text-gray-500 flex justify-center text-2xl font-medium mb-4"}," Reset Password ",-1)),e[20]||(e[20]=r("p",{class:"text-gray-500 mb-6 text-center"}," Enter your email address to receive a password reset link. ",-1)),l(f,{variant:"on"},{default:m(()=>[l(w,{type:"email",id:"resetEmail",modelValue:s.resetEmail,"onUpdate:modelValue":e[5]||(e[5]=u=>s.resetEmail=u),class:"w-full"},null,8,["modelValue"]),e[18]||(e[18]=r("label",{for:"resetEmail"},"Email",-1))]),_:1}),r("button",{onClick:e[6]||(e[6]=(...u)=>a.sendResetEmail&&a.sendResetEmail(...u)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Send Reset Link "),r("p",{class:"text-sm mt-4 text-center cursor-pointer text-blue-500",onClick:e[7]||(e[7]=u=>s.forgotPassword=!1)}," Back to login ")])):(o(),p("div",At,[s.resetPassword?(o(),p("div",Ht,[e[25]||(e[25]=r("h3",{class:"text-3xl font-medium mb-4 text-center"}," Reset Password ",-1)),e[26]||(e[26]=r("p",{class:"text-gray-500 mb-6"}," Enter a new password for your account. ",-1)),l(f,{variant:"on"},{default:m(()=>[l(b,{modelValue:s.form.newPassword,"onUpdate:modelValue":e[10]||(e[10]=u=>s.form.newPassword=u),id:"resetPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[23]||(e[23]=r("label",{for:"resetPassword"},"New Password",-1))]),_:1}),l(f,{variant:"on",class:"mt-3"},{default:m(()=>[l(b,{modelValue:s.form.confirmNewPassword,"onUpdate:modelValue":e[11]||(e[11]=u=>s.form.confirmNewPassword=u),id:"confirmNewPassword",toggleMask:"",class:"w-full"},null,8,["modelValue"]),e[24]||(e[24]=r("label",{for:"confirmNewPassword"},"Confirm Password",-1))]),_:1}),a.passwordMismatch?(o(),p("p",Wt," Passwords do not match. ")):g("",!0),r("button",{onClick:e[12]||(e[12]=(...u)=>a.handleResetPassword&&a.handleResetPassword(...u)),class:"w-full text-white py-3 mt-4 rounded bg-red-600",disabled:a.passwordMismatch}," Reset Password ",8,Ut)])):(o(),p("div",jt,[e[22]||(e[22]=r("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),r("p",Bt,[e[21]||(e[21]=C(" Enter the OTP sent to your email address: ")),r("span",Rt,v(s.form.email),1)]),r("div",_t,[l(S,{length:6,mask:"*",modelValue:t.otp,"onUpdate:modelValue":e[8]||(e[8]=u=>t.otp=u),size:"large",class:"text-center p-3",placeholder:"Enter OTP"},null,8,["modelValue"])]),r("button",{onClick:e[9]||(e[9]=(...u)=>a.verifyOtp&&a.verifyOtp(...u)),class:"w-full text-white py-3 rounded bg-red-600"}," Verify OTP ")]))]))])]),r("div",Mt,[l(E,{verticalViewPortHeight:2e3,value:s.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",autoplayInterval:"4000",class:"rounded-lg w-full hidden sm:block"},{item:m(u=>[r("div",Ft,[r("img",{src:u.data.src,alt:u.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,Yt),r("div",qt,v(u.data.alt),1)])]),_:1},8,["value"])])]),l(T,{position:"bottom-right",group:"br"})],64)}const Kt=B(Tt,[["render",Zt],["__scopeId","data-v-d03d5bdb"]]);var Jt=function(e){var n=e.dt;return`
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
`)},Gt={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Qt=I.extend({name:"stepper",theme:Jt,classes:Gt}),Xt={name:"BaseStepper",extends:$,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Qt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},le={name:"Stepper",extends:Xt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||j()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function en(t,e,n,d,s,a){return o(),p("div",c({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?x(t.$slots,"start",{key:0}):g("",!0),x(t.$slots,"default"),t.$slots.end?x(t.$slots,"end",{key:1}):g("",!0)],16)}le.render=en;var tn={root:"p-steppanels"},nn=I.extend({name:"steppanels",classes:tn}),rn={name:"BaseStepPanels",extends:$,style:nn,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},pe={name:"StepPanels",extends:rn,inheritAttrs:!1};function sn(t,e,n,d,s,a){return o(),p("div",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}pe.render=sn;var an=function(e){var n=e.dt;return`
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
`)},on={root:"p-iftalabel"},ln=I.extend({name:"iftalabel",theme:an,classes:on}),pn={name:"BaseIftaLabel",extends:$,style:ln,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},de={name:"IftaLabel",extends:pn,inheritAttrs:!1};function dn(t,e,n,d,s,a){return o(),p("span",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}de.render=dn;var un=function(e){var n=e.dt;return`
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
`)},cn={root:function(e){var n=e.instance,d=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},fn=I.extend({name:"textarea",theme:un,classes:cn}),mn={name:"BaseTextarea",extends:Y,props:{autoResize:Boolean},style:fn,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},ue={name:"Textarea",extends:mn,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){e.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return c(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},hn=["value","disabled","aria-invalid"];function bn(t,e,n,d,s,a){return o(),p("textarea",c({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,hn)}ue.render=bn;var vn={root:function(e){var n=e.instance;return["p-steppanel",{"p-steppanel-active":n.isVertical&&n.active}]},content:"p-steppanel-content"},gn=I.extend({name:"steppanel",classes:vn}),ce={name:"StepperSeparator",hostName:"Stepper",extends:$};function yn(t,e,n,d,s,a){return o(),p("span",c({class:t.cx("separator")},t.ptm("separator")),null,16)}ce.render=yn;var wn={name:"BaseStepPanel",extends:$,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:gn,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},fe={name:"StepPanel",extends:wn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var e,n,d=M(this.$pcStepper.$el,'[data-pc-name="step"]'),s=Pe(this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.$el:(n=this.$pcStepList)===null||n===void 0?void 0:n.$el,'[data-pc-name="step"]'),a=ne(s,d);this.isSeparatorVisible=this.isVertical&&a!==d.length-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active}})},updateValue:function(e){this.$pcStepper.updateValue(e)}},computed:{active:function(){var e,n,d=this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value;return d===((n=this.$pcStepper)===null||n===void 0?void 0:n.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var e;return this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:ce}};function xn(t,e,n,d,s,a){var w=L("StepperSeparator");return a.isVertical?(o(),p(k,{key:0},[t.asChild?x(t.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(b){return a.updateValue(b)}}):(o(),V(te,c({key:0,name:"p-toggleable-content"},t.ptm("transition")),{default:m(function(){return[Z((o(),V(z(t.as),c({id:a.id,class:t.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:m(function(){return[s.isSeparatorVisible?(o(),V(w,{key:0})):g("",!0),r("div",c({class:t.cx("content")},a.getPTOptions("content")),[x(t.$slots,"default",{active:a.active,activateCallback:function(b){return a.updateValue(b)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[K,a.active]])]}),_:3},16))],64)):(o(),p(k,{key:1},[t.asChild?t.asChild&&a.active?x(t.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(b){return a.updateValue(b)}}):g("",!0):Z((o(),V(z(t.as),c({key:0,id:a.id,class:t.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:m(function(){return[x(t.$slots,"default",{active:a.active,activateCallback:function(b){return a.updateValue(b)}})]}),_:3},16,["id","class","aria-controls"])),[[K,a.active]])],64))}fe.render=xn;var kn={root:"p-steplist"},Sn=I.extend({name:"steplist",classes:kn}),Cn={name:"BaseStepList",extends:$,style:Sn,provide:function(){return{$pcStepList:this,$parentInstance:this}}},me={name:"StepList",extends:Cn,inheritAttrs:!1};function Vn(t,e,n,d,s,a){return o(),p("div",c({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}me.render=Vn;var In={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},Tn=I.extend({name:"step",classes:In}),he={name:"StepperSeparator",hostName:"Stepper",extends:$};function Pn(t,e,n,d,s,a){return o(),p("span",c({class:t.cx("separator")},t.ptm("separator")),null,16)}he.render=Pn;var $n={name:"BaseStep",extends:$,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Tn,provide:function(){return{$pcStep:this,$parentInstance:this}}},be={name:"Step",extends:$n,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=ne(this.$el,M(this.$pcStepper.$el,'[data-pc-name="step"]')),n=M(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==n-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:he}},En=["id","tabindex","aria-controls","disabled"];function Nn(t,e,n,d,s,a){var w=L("StepperSeparator");return t.asChild?x(t.$slots,"default",{key:1,class:N(t.cx("root")),active:a.active,value:t.value,a11yAttrs:a.a11yAttrs,activateCallback:a.onStepClick}):(o(),V(z(t.as),c({key:0,class:t.cx("root"),"aria-current":a.active?"step":void 0,role:"presentation","data-p-active":a.active,"data-p-disabled":a.isStepDisabled},a.getPTOptions("root")),{default:m(function(){return[r("button",c({id:a.id,class:t.cx("header"),role:"tab",type:"button",tabindex:a.isStepDisabled?-1:void 0,"aria-controls":a.ariaControls,disabled:a.isStepDisabled,onClick:e[0]||(e[0]=function(){return a.onStepClick&&a.onStepClick.apply(a,arguments)})},a.getPTOptions("header")),[r("span",c({class:t.cx("number")},a.getPTOptions("number")),v(a.activeValue),17),r("span",c({class:t.cx("title")},a.getPTOptions("title")),[x(t.$slots,"default")],16)],16,En),s.isSeparatorVisible?(o(),V(w,{key:0})):g("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}be.render=Nn;var Ln=function(e){var n=e.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(n("divider.horizontal.margin"),`;
    padding: `).concat(n("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(n("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(n("divider.vertical.margin"),`;
    padding: `).concat(n("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(n("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(n("divider.content.background"),`;
    color: `).concat(n("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`)},On={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},zn={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},Dn=I.extend({name:"divider",theme:Ln,classes:zn,inlineStyles:On}),An={name:"BaseDivider",extends:$,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:Dn,provide:function(){return{$pcDivider:this,$parentInstance:this}}},ve={name:"Divider",extends:An,inheritAttrs:!1},jn=["aria-orientation"];function Bn(t,e,n,d,s,a){return o(),p("div",c({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(o(),p("div",c({key:0,class:t.cx("content")},t.ptm("content")),[x(t.$slots,"default")],16)):g("",!0)],16,jn)}ve.render=Bn;const Rn={data(){return{responseMessage:{},activeStep:1,firstName:"",lastName:"",phoneNumber:"",email:"",businessName:"",location:"",errors:{},businessType:null,experienceYears:null,experienceAreas:[],brandsWorkedWith:[],integrationExperience:null,familiarWithStandard:null,purchaseSource:"",purchaseHikvision:null,requiresTraining:null,images:[{src:"https://www.sdl.co.ke/assets/images/resource/about-5.png",alt:"EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"},{src:"https://www.sdl.co.ke/assets/images/resource/about-6.png",alt:"EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"},{src:"https://www.sdl.co.ke/assets/images/resource/about-7.png",alt:"Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"}],businessCategories:[{name:"System Integrator",key:"System Integrator"},{name:"Reseller",key:"Reseller"},{name:"Technician",key:"Technician"},{name:"Other",key:"Other"}],yearExperiences:[{name:"1 Year",key:"1 Year"},{name:"1-3 Years",key:"1-3 Years"},{name:"4-7 Years",key:"4-7 Years"},{name:"8+",key:"8+"}],experienceAreasList:[{name:"CCTV Systems",key:"CCTV Systems"},{name:"Access Control Systems",key:"Access Control Systems"},{name:"Video Intercom Systems",key:"Video Intercom Systems"},{name:"Networking and Computer Products",key:"Networking and Computer Products"},{name:"Electrical Installations",key:"Electrical Installations"}],brandsWorkedWithList:[{name:"Hikvision",key:"Hikvision"},{name:"Dahua",key:"Dahua"},{name:"Uniview",key:"Uniview"},{name:"Tandy",key:"Tandy"},{name:"Other (Please Specify)",key:"Other"}],integrationExperienceList:[{name:"Yes, Extensive Experience",key:"Yes, Extensive Experience"},{name:"Some Experience",key:"Some Experience"},{name:"No Experience",key:"No Experience"}],wherePurchase:[{name:"National Distributor",key:"National Distributor"},{name:"Regional Supplier",key:"Regional Supplier"},{name:"Online Retailer ",key:"Online Retailer "},{name:"Other",key:"Other"}],familiarWithStandards:[{name:"Yes, I'm certified",key:"Yes, I'm certified"},{name:"I am familiar but not certified",key:"I am familiar but not certified"},{name:"No, but I am willing to learn",key:"No, but I am willing to learn"}],options:[{name:"Yes",key:"Yes"},{name:"No",key:"No"},{name:"Not yet, but interested",key:"Not yet, but interested"}],experienceAreasError:!1,brandsWorkedWithError:!1,integrationExperienceError:!1,familiarWithStandardError:!1,purchaseError:!1,currentlyPurchaseError:!1,formData:{technicalExpertise:"",hikvisionTechDifference:"",troubleshootCCTV:"",networkDesign:"",supportAreas:"",businessSupport:""},textareaFields:[{id:"technicalExpertise",model:"technicalExpertise",label:`Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`},{id:"hikvisionTechDifference",model:"hikvisionTechDifference",label:"What is the difference between Hikvision’s AcuSense and ColorVu technologies?"},{id:"troubleshootCCTV",model:"troubleshootCCTV",label:"How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"},{id:"networkDesign",model:"networkDesign",label:"What are the key considerations when designing a network for IP-based surveillance systems?"},{id:"supportAreas",model:"supportAreas",label:"What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"},{id:"businessSupport",model:"businessSupport",label:"How can we best support your business? (Optional)"}]}},methods:{handleSubmit(t){this.validateForm()?(console.log("Form submitted:",{...this.formData}),this.submitForm()):console.log("Validation failed")},validateForm(){let t=!0;return this.errors={},this.purchaseError=this.purchaseSource.length==0,this.purchaseError&&(t=!1),this.currentlyPurchaseError=!this.purchaseHikvision,this.currentlyPurchaseError&&(t=!1),this.textareaFields.forEach(e=>{!this.formData[e.model].trim()&&e.id!=="businessSupport"&&(this.errors[e.model]="This field cannot be empty.",t=!1)}),t},validateAndProceed(t,e){this.errors={},e==1&&(this.firstName||(this.errors.firstName="First name is required."),this.lastName||(this.errors.lastName="Last name is required."),this.phoneNumber||(this.errors.phoneNumber="Phone number is required."),this.email||(this.errors.email="Email address is required."),this.businessName||(this.errors.businessName="Business name is required."),this.location||(this.errors.location="Location is required."),this.businessType||(this.errors.businessType="Business Type is required."),this.experienceYears||(this.errors.experienceYears="Experience Years is required."),Object.keys(this.errors).length===0&&t(2)),e==2&&(console.log("sxasxsax"),this.experienceAreasError=!1,this.brandsWorkedWithError=!1,this.integrationExperienceError=!1,this.familiarWithStandardError=!1,this.experienceAreas.length===0&&(this.experienceAreasError=!0),this.brandsWorkedWith.length===0&&(this.brandsWorkedWithError=!0),this.integrationExperience||(this.integrationExperienceError=!0),this.familiarWithStandard||(this.familiarWithStandardError=!0),!this.experienceAreasError&&!this.brandsWorkedWithError&&!this.integrationExperienceError&&!this.familiarWithStandardError&&t(3))},async submitForm(){console.log("cdscs",this.formData);const t={businessName:this.businessName,phoneNumber:this.phoneNumber,email:this.email,location:this.location,businessType:this.businessType,experienceYears:this.experienceYears,experienceAreas:this.experienceAreas,brandsWorkedWith:this.brandsWorkedWith,integrationExperience:this.integrationExperience,familiarWithStandard:this.familiarWithStandard,purchaseSource:this.purchaseSource,purchaseHikvision:this.purchaseHikvision,requiresTraining:this.requiresTraining};console.log("Form Data:",t);try{const{$axios:e}=O(),n=await e.post("/user/technician-questionnaire",t);this.responseMessage=n.data.message,this.activateCallback(4),n.status}catch(e){console.error("Error submitting form:",e)}finally{}},resetForm(){this.businessName="",this.phoneNumber="",this.email="",this.location="",this.businessType=null,this.experienceYears=null,this.experienceAreas=[],this.brandsWorkedWith=[],this.integrationExperience=null,this.purchaseSource="",this.purchaseHikvision=null,this.requiresTraining=null}}},_n={class:"flex w-full align-center justify-center",style:{"background-image":"url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')"}},Hn={class:"flex w-full flex-col items-center justify-center"},Wn={class:"flex justify-center items-center absolute top-16 left-8"},Un={class:"border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white"},Mn=["onClick"],Fn=["onClick"],Yn=["onClick"],qn=["onClick"],Zn={class:"flex flex-col gap-4 mx-auto",style:{"min-width":"40vw"}},Kn={class:"flex gap-4"},Jn={class:"field w-1/2"},Gn={key:0,class:"text-red-500"},Qn={class:"field w-1/2"},Xn={key:0,class:"text-red-500"},er={class:"flex gap-4"},tr={class:"field w-1/2"},nr={key:0,class:"text-red-500"},rr={class:"field w-1/2"},sr={key:0,class:"text-red-500"},ar={class:"flex gap-4"},ir={class:"field w-1/2"},or={key:0,class:"text-red-500"},lr={class:"field w-1/2"},pr={key:0,class:"text-red-500"},dr={class:"flex flex-col gap-4"},ur={class:"flex flex-wrap gap-4"},cr=["for"],fr={key:0,class:"text-red-500"},mr={class:"flex flex-wrap gap-4"},hr=["for"],br={key:0,class:"text-red-500"},vr={class:"flex pt-6 justify-end",style:{"max-width":"800px",margin:"0 auto"}},gr={class:"flex flex-col gap-4"},yr=["for"],wr={key:0,class:"text-red-500"},xr=["for"],kr={key:1,class:"text-red-500"},Sr={class:"field"},Cr=["for"],Vr={key:0,class:"text-red-500"},Ir={class:"field"},Tr=["for"],Pr={key:0,class:"text-red-500"},$r={class:"flex pt-6 justify-between"},Er={class:"flex flex-col gap-4"},Nr={class:"field"},Lr=["for"],Or={key:0,class:"text-red-500"},zr={class:"field"},Dr=["for"],Ar={key:0,class:"text-red-500"},jr={class:"font-bold pb-3"},Br=["innerHTML"],Rr=["for"],_r={key:0,class:"text-red-500"},Hr={class:"flex pt-6 justify-between"},Wr={class:"flex pt-6 justify-between"},Ur={class:"hidden md:block h-full w-full"},Mr={class:"relative w-full h-screen flex justify-center items-center"},Fr=["src","alt"],Yr={class:"absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"};function qr(t,e,n,d,s,a){const w=ve,f=be,b=me,S=A,E=Ae,T=De,u=fe,_=ze,ge=ue,ye=de,we=pe,xe=le,ke=F;return o(),p("div",_n,[r("div",Hn,[r("div",Wn,[r("a",{onClick:e[0]||(e[0]=y=>t.$emit("back-to-signup")),class:"text-primary text-md cursor-pointer hover:text-secondary"},e[17]||(e[17]=[r("i",{class:"pi pi-arrow-left text-primary pr-2 hover:text-secondary",style:{}},null,-1),C(" Back to Signup")]))]),r("div",Un,[l(xe,{value:s.activeStep,"onUpdate:value":e[16]||(e[16]=y=>s.activeStep=y),class:""},{default:m(()=>[l(b,null,{default:m(()=>[l(f,{asChild:"",value:1},{default:m(({activateCallback:y,value:i,a11yAttrs:h})=>[r("div",c({class:"flex flex-row flex-auto gap-2"},h.root),[r("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:y},h.header),[r("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":i<=s.activeStep,"border-surface-200 dark:border-surface-700":i>s.activeStep}])},e[18]||(e[18]=[r("i",{class:"pi pi-building"},null,-1)]),2)],16,Mn),l(w)],16)]),_:1}),l(f,{asChild:"",value:2},{default:m(({activateCallback:y,value:i,a11yAttrs:h})=>[r("div",c({class:"flex flex-row flex-auto gap-2 pl-2"},h.root),[r("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:y},h.header),[r("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":i<=s.activeStep,"border-surface-200 dark:border-surface-700":i>s.activeStep}])},e[19]||(e[19]=[r("i",{class:"pi pi-cog"},null,-1)]),2)],16,Fn),l(w)],16)]),_:1}),l(f,{asChild:"",value:3},{default:m(({activateCallback:y,value:i,a11yAttrs:h})=>[r("div",c({class:"flex flex-row pl-2"},h.root),[r("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:y},h.header),[r("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":i<=s.activeStep,"border-surface-200 dark:border-surface-700":i>s.activeStep}])},e[20]||(e[20]=[r("i",{class:"pi pi-question-circle"},null,-1)]),2)],16,Yn),l(w)],16)]),_:1}),l(f,{asChild:"",value:4},{default:m(({activateCallback:y,value:i,a11yAttrs:h})=>[r("div",c({class:"flex flex-row pl-2"},h.root),[r("button",c({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:y},h.header),[r("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":i<=s.activeStep,"border-surface-200 dark:border-surface-700":i>s.activeStep}])},e[21]||(e[21]=[r("i",{class:"pi pi-check-circle"},null,-1)]),2)],16,qn)],16)]),_:1})]),_:1}),l(we,null,{default:m(()=>[l(u,{value:1},{default:m(({activateCallback:y})=>[r("div",Zn,[e[30]||(e[30]=r("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 1: Business Identification ",-1)),r("div",Kn,[r("div",Jn,[e[22]||(e[22]=r("label",{for:"firstName",class:"font-bold"},"First Name",-1)),l(S,{id:"firstName",modelValue:s.firstName,"onUpdate:modelValue":e[1]||(e[1]=i=>s.firstName=i),type:"text",placeholder:"Enter first name",class:"w-full"},null,8,["modelValue"]),s.errors.firstName?(o(),p("small",Gn,v(s.errors.firstName),1)):g("",!0)]),r("div",Qn,[e[23]||(e[23]=r("label",{for:"lastName",class:"font-bold"},"Last Name",-1)),l(S,{id:"lastName",modelValue:s.lastName,"onUpdate:modelValue":e[2]||(e[2]=i=>s.lastName=i),type:"text",placeholder:"Enter last name",class:"w-full"},null,8,["modelValue"]),s.errors.lastName?(o(),p("small",Xn,v(s.errors.lastName),1)):g("",!0)])]),r("div",er,[r("div",tr,[e[24]||(e[24]=r("label",{for:"phoneNumber",class:"font-bold"},"Phone Number",-1)),l(S,{id:"phoneNumber",modelValue:s.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=i=>s.phoneNumber=i),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"]),s.errors.phoneNumber?(o(),p("small",nr,v(s.errors.phoneNumber),1)):g("",!0)]),r("div",rr,[e[25]||(e[25]=r("label",{for:"email",class:"font-bold"},"Email Address",-1)),l(S,{id:"email",modelValue:s.email,"onUpdate:modelValue":e[4]||(e[4]=i=>s.email=i),type:"email",placeholder:"Enter email address",class:"w-full"},null,8,["modelValue"]),s.errors.email?(o(),p("small",sr,v(s.errors.email),1)):g("",!0)])]),r("div",ar,[r("div",ir,[e[26]||(e[26]=r("label",{for:"businessName",class:"font-bold"},"Business/Company Name",-1)),l(S,{id:"businessName",modelValue:s.businessName,"onUpdate:modelValue":e[5]||(e[5]=i=>s.businessName=i),type:"text",placeholder:"Enter business name",class:"w-full"},null,8,["modelValue"]),s.errors.businessName?(o(),p("small",or,v(s.errors.businessName),1)):g("",!0)]),r("div",lr,[e[27]||(e[27]=r("label",{for:"location",class:"font-bold"},"Business Location",-1)),l(S,{id:"location",modelValue:s.location,"onUpdate:modelValue":e[6]||(e[6]=i=>s.location=i),type:"text",placeholder:"City, State, Country",class:"w-full"},null,8,["modelValue"]),s.errors.location?(o(),p("small",pr,v(s.errors.location),1)):g("",!0)])]),r("div",dr,[e[28]||(e[28]=r("div",{class:"font-bold mb-2"},"Business Type",-1)),r("div",ur,[(o(!0),p(k,null,P(s.businessCategories,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(E,{modelValue:s.businessType,"onUpdate:modelValue":e[7]||(e[7]=h=>s.businessType=h),inputId:i.key,name:"businessType",value:i.key},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,cr)]))),128)),s.errors.businessType?(o(),p("small",fr,v(s.errors.businessType),1)):g("",!0)])]),r("div",null,[e[29]||(e[29]=r("div",{class:"font-bold mb-2"},"Years of Experience",-1)),r("div",mr,[(o(!0),p(k,null,P(s.yearExperiences,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(E,{modelValue:s.experienceYears,"onUpdate:modelValue":e[8]||(e[8]=h=>s.experienceYears=h),inputId:i.key,name:"experienceYears",value:i.key},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,hr)]))),128)),s.errors.experienceYears?(o(),p("small",br,v(s.errors.experienceYears),1)):g("",!0)])])]),r("div",vr,[l(T,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:i=>a.validateAndProceed(y,1)},null,8,["onClick"])])]),_:1}),l(u,{value:2,style:{"min-width":"40vw"}},{default:m(({activateCallback:y})=>[r("div",gr,[e[35]||(e[35]=r("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 2: Technical Experience ",-1)),r("div",null,[e[31]||(e[31]=r("label",{class:"font-bold py-5"}," Which of the following areas do you have experience with? ",-1)),(o(!0),p(k,null,P(s.experienceAreasList,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(_,{modelValue:s.experienceAreas,"onUpdate:modelValue":e[9]||(e[9]=h=>s.experienceAreas=h),inputId:i.key,name:"category",value:i.name},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,yr)]))),128)),s.experienceAreasError?(o(),p("p",wr," Please select at least one area of experience. ")):g("",!0)]),r("div",null,[e[32]||(e[32]=r("label",{class:"font-bold pb-3"}," Which brands have you primarily worked with? ",-1)),(o(!0),p(k,null,P(s.brandsWorkedWithList,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(_,{modelValue:s.brandsWorkedWith,"onUpdate:modelValue":e[10]||(e[10]=h=>s.brandsWorkedWith=h),inputId:i.key,name:"category",value:i.key},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,xr)]))),128)),s.brandsWorkedWith.includes("Other")?(o(),V(S,{key:0,id:"purchaseSource",modelValue:s.purchaseSource,"onUpdate:modelValue":e[11]||(e[11]=i=>s.purchaseSource=i),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):g("",!0),s.brandsWorkedWithError?(o(),p("p",kr," Please select at least one brand. ")):g("",!0)]),r("div",Sr,[e[33]||(e[33]=r("label",{class:"font-bold pb-3"}," Do you have experience integrating security systems into larger solutions? ",-1)),(o(!0),p(k,null,P(s.integrationExperienceList,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(E,{modelValue:s.integrationExperience,"onUpdate:modelValue":e[12]||(e[12]=h=>s.integrationExperience=h),inputId:i.key,name:"integrationExperience",value:i.name},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,Cr)]))),128)),s.integrationExperienceError?(o(),p("p",Vr," Please select an option. ")):g("",!0)]),r("div",Ir,[e[34]||(e[34]=r("label",{class:"font-bold pb-3"}," Are you familiar with Hikvision product certifications and installation standards? ",-1)),(o(!0),p(k,null,P(s.familiarWithStandards,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(E,{modelValue:s.familiarWithStandard,"onUpdate:modelValue":e[13]||(e[13]=h=>s.familiarWithStandard=h),inputId:i.key,name:"familiarWithStandard",value:i.name},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,Tr)]))),128)),s.familiarWithStandardError?(o(),p("p",Pr," Please select an option. ")):g("",!0)])]),r("div",$r,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:i=>y(1)},null,8,["onClick"]),l(T,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:i=>a.validateAndProceed(y,2)},null,8,["onClick"])])]),_:1}),l(u,{value:3,style:{"min-width":"40vw"}},{default:m(({activateCallback:y})=>[r("div",Er,[e[38]||(e[38]=r("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 3: Technical Questions ",-1)),r("div",Nr,[e[36]||(e[36]=r("label",{for:"purchaseSource",class:"font-bold pb-3"}," Where do you currently purchase your security products? (Please select all that apply and provide details for each category) ",-1)),(o(!0),p(k,null,P(s.wherePurchase,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(_,{modelValue:s.purchaseSource,"onUpdate:modelValue":e[14]||(e[14]=h=>s.purchaseSource=h),inputId:i.key,name:"purchaseSource",value:i.name},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,Lr)]))),128)),s.purchaseError?(o(),p("p",Or," Please select an option. ")):g("",!0)]),r("div",zr,[e[37]||(e[37]=r("label",{class:"font-bold pb-3"}," Do you currently purchase Hikvision products? ",-1)),(o(!0),p(k,null,P(s.options,i=>(o(),p("div",{key:i.key,class:"flex items-center gap-2"},[l(E,{modelValue:s.purchaseHikvision,"onUpdate:modelValue":e[15]||(e[15]=h=>s.purchaseHikvision=h),inputId:i.key,name:"purchaseHikvision",value:i.name},null,8,["modelValue","inputId","value"]),r("label",{for:i.key},v(i.name),9,Dr)]))),128)),s.currentlyPurchaseError?(o(),p("p",Ar," Please select an option. ")):g("",!0)]),(o(!0),p(k,null,P(s.textareaFields,i=>(o(),p("div",{key:i.id,class:"field"},[r("label",jr,[r("span",{innerHTML:i.label},null,8,Br)]),l(ye,{class:"mt-4"},{default:m(()=>[l(ge,{id:i.id,modelValue:s.formData[i.model],"onUpdate:modelValue":h=>s.formData[i.model]=h,rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["id","modelValue","onUpdate:modelValue"]),r("label",{for:i.id},"Summary",8,Rr)]),_:2},1024),s.errors[i.model]?(o(),p("p",_r,v(s.errors[i.model]),1)):g("",!0)]))),128))]),r("div",Hr,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:i=>y(2)},null,8,["onClick"]),l(T,{label:"Submit",icon:"pi pi-check",iconPos:"right",onClick:i=>a.handleSubmit(y)},null,8,["onClick"])])]),_:1}),l(u,{value:4},{default:m(({activateCallback:y})=>[e[39]||(e[39]=r("div",{class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},[r("div",{class:"text-center mt-4 mb-4 text-sm font-semibold"},[r("div",{class:"p-6 rounded-lg shadow-md"},[C(" Thank You! "),r("p",{class:"text-gray-700"}," Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),r("ul",{class:"list-disc text-left pl-5 text-gray-700 mt-3"},[r("li",null,[r("strong",null,"Reseller Pricing")]),r("li",null,[r("strong",null,"Comprehensive Marketing and Technical Resources")]),r("li",null,[r("strong",null,"Product and Business Support")])]),r("p",{class:"text-gray-700 mt-4"}," For any inquiries or further assistance, please do not hesitate to contact us: "),r("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[r("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),r("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),r("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),r("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])]),r("p",{class:"text-gray-700 mt-6"}," We look forward to the opportunity to collaborate with you. "),r("hr",{class:"my-4 border-gray-300"}),r("p",{class:"text-gray-800 font-bold"},"Best regards,"),r("p",{class:"text-gray-700"}," Secure Digital Limited | Hik Digital Mart Limited "),r("p",{class:"text-gray-700 font-semibold"}," SDLKenya Online Shop Administration Department "),r("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[r("p",{class:"text-gray-800 font-semibold"},[C(" 📧 Email: "),r("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),r("p",{class:"text-gray-800 font-semibold"},[C(" 📞 Phone: "),r("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])])])])],-1)),r("div",Wr,[l(T,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:i=>y(3)},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["value"])])]),r("div",Ur,[l(ke,{verticalViewPortHeight:2e3,value:s.images,numVisible:1,numScroll:1,showIndicators:!1,showNavigators:!1,circular:"",autoplayInterval:"4000",class:"rounded-lg w-full"},{item:m(y=>[r("div",Mr,[r("img",{src:y.data.src,alt:y.data.alt,class:"rounded-xl object-cover w-100 h-100"},null,8,Fr),r("div",Yr,v(y.data.alt),1)])]),_:1},8,["value"])])])}const Zr=B(Rn,[["render",qr],["__scopeId","data-v-665c9a25"]]),Kr={class:"auth-container",style:{"background-color":"white"}},us=$e({__name:"index",setup(t){const e=J(!1),n=J(!1),d=()=>{e.value=!e.value,n.value=!1},s=()=>{e.value=!1,n.value=!0},a=()=>{e.value=!0,n.value=!1};return(w,f)=>(o(),p("div",Kr,[e.value?(o(),V(dt,{key:0,onToggle:d,onShowQuestionnaire:s})):n.value?(o(),V(Zr,{key:1,onBackToSignup:a})):(o(),V(Kt,{key:2,onToggle:d}))]))}});export{us as default};
