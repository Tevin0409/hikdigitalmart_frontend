import{s as _}from"./DAigU_0k.js";import{B as $,p as ee,q as z,o as p,c as d,F as k,m as O,s as g,b as r,u as N,v as u,a,x as xe,y as Se,z as Ce,A as $e,C as S,D,E as I,t as x,w as c,T as te,_ as j,G as Y,H as B,I as ne,d as V,J as Ve,K as q,L as Ie,M as ae,N as G,O as J}from"./Fo99IELK.js";import{s as R,U,C as Te,O as Pe}from"./prwkby5P.js";import{s as K}from"./yB_mLdXc.js";import{s as Oe,a as Le}from"./Bu1DSU6M.js";import{Z as W,s as Ee}from"./BYMImhdy.js";import{s as ie}from"./CTeCqoQn.js";import{s as T}from"./BsLrv4kJ.js";import{_ as le}from"./B5u-T_2z.js";import{s as ze}from"./BUeGa2Zq.js";import{s as Ne}from"./C06VtzUx.js";import"./pZ8yUwdz.js";import"./Dkq-Vh15.js";import"./C4pemyIi.js";var Be=function(e){var n=e.dt;return`
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
`)},De={root:"p-inputotp p-component",pcInputText:"p-inputotp-input"},Ae=$.extend({name:"inputotp",theme:Be,classes:De}),Re={name:"BaseInputOtp",extends:K,props:{readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},length:{type:Number,default:4},mask:{type:Boolean,default:!1},integerOnly:{type:Boolean,default:!1}},style:Ae,provide:function(){return{$pcInputOtp:this,$parentInstance:this}}},F={name:"InputOtp",extends:Re,inheritAttrs:!1,emits:["change","focus","blur"],data:function(){return{tokens:[]}},watch:{modelValue:{immediate:!0,handler:function(e){this.tokens=e?e.split(""):new Array(this.length)}}},methods:{getTemplateAttrs:function(e){return{value:this.tokens[e]}},getTemplateEvents:function(e){var n=this;return{input:function(i){return n.onInput(i,e)},keydown:function(i){return n.onKeyDown(i)},focus:function(i){return n.onFocus(i)},blur:function(i){return n.onBlur(i)},paste:function(i){return n.onPaste(i)}}},onInput:function(e,n){this.tokens[n]=e.target.value,this.updateModel(e),e.inputType==="deleteContentBackward"?this.moveToPrev(e):(e.inputType==="insertText"||e.inputType==="deleteContentForward"||ee()&&e instanceof CustomEvent)&&this.moveToNext(e)},updateModel:function(e){var n=this.tokens.join("");this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},moveToPrev:function(e){var n=this.findPrevInput(e.target);n&&(n.focus(),n.select())},moveToNext:function(e){var n=this.findNextInput(e.target);n&&(n.focus(),n.select())},findNextInput:function(e){var n=e.nextElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findNextInput(n)},findPrevInput:function(e){var n=e.previousElementSibling;if(n)return n.nodeName==="INPUT"?n:this.findPrevInput(n)},onFocus:function(e){e.target.select(),this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onClick:function(e){setTimeout(function(){return e.target.select()},1)},onKeyDown:function(e){if(!(e.ctrlKey||e.metaKey))switch(e.code){case"ArrowLeft":this.moveToPrev(e),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Backspace":e.target.value.length===0&&(this.moveToPrev(e),e.preventDefault());break;case"ArrowRight":this.moveToNext(e),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Tab":break;default:(this.integerOnly&&!(e.code!=="Space"&&Number(e.key)>=0&&Number(e.key)<=9)||this.tokens.join("").length>=this.length&&e.code!=="Delete")&&e.preventDefault();break}},onPaste:function(e){var n=e.clipboardData.getData("text");if(n.length){var s=n.substring(0,this.length);(!this.integerOnly||!isNaN(s))&&(this.tokens=s.split(""),this.updateModel(e))}e.preventDefault()}},computed:{inputMode:function(){return this.integerOnly?"numeric":"text"},inputType:function(){return this.mask?"password":"text"}},components:{OtpInputText:R}};function Ue(t,e,n,s,i,l){var y=z("OtpInputText");return p(),d("div",u({class:t.cx("root")},t.ptmi("root")),[(p(!0),d(k,null,O(t.length,function(f){return g(t.$slots,"default",{key:f,events:l.getTemplateEvents(f-1),attrs:l.getTemplateAttrs(f-1),index:f},function(){return[r(y,{value:i.tokens[f-1],type:l.inputType,class:N(t.cx("pcInputText")),name:t.$formName,inputmode:l.inputMode,variant:t.variant,readonly:t.readonly,disabled:t.disabled,size:t.size,invalid:t.invalid,tabindex:t.tabindex,unstyled:t.unstyled,onInput:function(C){return l.onInput(C,f-1)},onFocus:e[0]||(e[0]=function(m){return l.onFocus(m)}),onBlur:e[1]||(e[1]=function(m){return l.onBlur(m)}),onPaste:e[2]||(e[2]=function(m){return l.onPaste(m)}),onKeydown:e[3]||(e[3]=function(m){return l.onKeyDown(m)}),onClick:e[4]||(e[4]=function(m){return l.onClick(m)}),pt:t.ptm("pcInputText")},null,8,["value","type","class","name","inputmode","variant","readonly","disabled","size","invalid","tabindex","unstyled","onInput","pt"])]})}),128))],16)}F.render=Ue;var oe={name:"EyeIcon",extends:ie};function je(t,e,n,s,i,l){return p(),d("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}oe.render=je;var re={name:"EyeSlashIcon",extends:ie};function Fe(t,e,n,s,i,l){return p(),d("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}re.render=Fe;var Me=function(e){var n=e.dt;return`
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
`)},We={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},He={root:function(e){var n=e.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused,"p-password-fluid":n.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(e){var n=e.instance;return"p-password-meter-label ".concat(n.meter?"p-password-meter-"+n.meter.strength:"")},meterText:"p-password-meter-text"},Ye=$.extend({name:"password",theme:Me,classes:He,inlineStyles:We}),qe={name:"BasePassword",extends:K,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:Ye,provide:function(){return{$pcPassword:this,$parentInstance:this}}},Z={name:"Password",extends:qe,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},watch:{"$attrs.id":function(e){this.id=e||U()}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.id=this.id||U(),this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(W.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(e){W.set("overlay",e,this.$primevue.config.zIndex.overlay),xe(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(e){W.clear(e)},alignOverlay:function(){this.appendTo==="self"?Se(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=Ce(this.$refs.input.$el)+"px",$e(this.overlay,this.$refs.input.$el))},testStrength:function(e){var n=0;return this.strongCheckRegExp.test(e)?n=3:this.mediumCheckRegExp.test(e)?n=2:e.length&&(n=1),n},onInput:function(e){this.writeValue(e.target.value,e),this.$emit("change",e)},onFocus:function(e){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",e)},onKeyUp:function(e){if(this.feedback){var n=e.target.value,s=this.checkPasswordStrength(n),i=s.meter,l=s.label;if(this.meter=i,this.infoText=l,e.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var e=this.checkPasswordStrength(this.d_value),n=e.meter,s=e.label;this.meter=n,this.infoText=s,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(e){var n=null,s=null;switch(this.testStrength(e)){case 1:n=this.weakText,s={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,s={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,s={strength:"strong",width:"100%"};break;default:n=this.promptText,s=null;break}return{label:n,meter:s}},onInvalid:function(e){this.$emit("invalid",e)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Te(this.$refs.input.$el,function(){e.overlayVisible&&(e.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ee()&&(e.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(e){this.overlay=e},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(e){Pe.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.id+"_overlay"}},components:{InputText:R,Portal:Ee,EyeSlashIcon:re,EyeIcon:oe}};function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X(Object(n),!0).forEach(function(s){Ke(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Ke(t,e,n){return(e=Ze(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ze(t){var e=Qe(t,"string");return A(e)=="symbol"?e:e+""}function Qe(t,e){if(A(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(A(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ge=["id"];function Je(t,e,n,s,i,l){var y=z("InputText"),f=z("Portal");return p(),d("div",u({class:t.cx("root"),style:t.sx("root")},t.ptmi("root")),[r(y,u({ref:"input",id:t.inputId,type:l.inputType,class:[t.cx("pcInputText"),t.inputClass],style:t.inputStyle,value:t.d_value,name:t.$formName,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-controls":t.overlayProps&&t.overlayProps.id||t.overlayId||t.panelProps&&t.panelProps.id||t.panelId||l.overlayUniqueId,"aria-expanded":i.overlayVisible,"aria-haspopup":!0,placeholder:t.placeholder,required:t.required,fluid:t.fluid,disabled:t.disabled,variant:t.variant,invalid:t.invalid,size:t.size,autofocus:t.autofocus,onInput:l.onInput,onFocus:l.onFocus,onBlur:l.onBlur,onKeyup:l.onKeyUp,onInvalid:l.onInvalid},t.inputProps,{pt:t.ptm("pcInputText"),unstyled:t.unstyled}),null,16,["id","type","class","style","value","name","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","pt","unstyled"]),t.toggleMask&&i.unmasked?g(t.$slots,t.$slots.maskicon?"maskicon":"hideicon",{key:0,toggleCallback:l.onMaskToggle},function(){return[(p(),S(D(t.maskIcon?"i":"EyeSlashIcon"),u({class:[t.cx("maskIcon"),t.maskIcon],onClick:l.onMaskToggle},t.ptm("maskIcon")),null,16,["class","onClick"]))]}):I("",!0),t.toggleMask&&!i.unmasked?g(t.$slots,t.$slots.unmaskicon?"unmaskicon":"showicon",{key:1,toggleCallback:l.onMaskToggle},function(){return[(p(),S(D(t.unmaskIcon?"i":"EyeIcon"),u({class:[t.cx("unmaskIcon"),t.unmaskIcon],onClick:l.onMaskToggle},t.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):I("",!0),a("span",u({class:"p-hidden-accessible","aria-live":"polite"},t.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),x(i.infoText),17),r(f,{appendTo:t.appendTo},{default:c(function(){return[r(te,u({name:"p-connected-overlay",onEnter:l.onOverlayEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},t.ptm("transition")),{default:c(function(){return[i.overlayVisible?(p(),d("div",u({key:0,ref:l.overlayRef,id:t.overlayId||t.panelId||l.overlayUniqueId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:[t.overlayStyle,t.panelStyle],onClick:e[0]||(e[0]=function(){return l.onOverlayClick&&l.onOverlayClick.apply(l,arguments)})},H(H(H({},t.panelProps),t.overlayProps),t.ptm("overlay"))),[g(t.$slots,"header"),g(t.$slots,"content",{},function(){return[a("div",u({class:t.cx("content")},t.ptm("content")),[a("div",u({class:t.cx("meter")},t.ptm("meter")),[a("div",u({class:t.cx("meterLabel"),style:{width:i.meter?i.meter.width:""}},t.ptm("meterLabel")),null,16)],16),a("div",u({class:t.cx("meterText")},t.ptm("meterText")),x(i.infoText),17)],16)]}),g(t.$slots,"footer")],16,Ge)):I("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Z.render=Je;var Xe=function(e){var n=e.dt;return`
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
`)},_e={root:function(e){e.instance;var n=e.props;return["p-floatlabel",{"p-floatlabel-over":n.variant==="over","p-floatlabel-on":n.variant==="on","p-floatlabel-in":n.variant==="in"}]}},et=$.extend({name:"floatlabel",theme:Xe,classes:_e}),tt={name:"BaseFloatLabel",extends:T,props:{variant:{type:String,default:"over"}},style:et,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},Q={name:"FloatLabel",extends:tt,inheritAttrs:!1};function nt(t,e,n,s,i,l){return p(),d("span",u({class:t.cx("root")},t.ptmi("root")),[g(t.$slots,"default")],16)}Q.render=nt;const at={components:{InputOtp:F},data(){return{form:{firstName:"",lastName:"",email:"",password:"",cpassword:"",phone:"",role:""},otp:"",otpSent:!1,roles:[]}},methods:{handleRole(){this.form.role.name=="TECHNICIAN"&&(console.log("role: ",this.form.role),this.$emit("show-questionnaire"))},async register(){try{const t=Y(),{$axios:e}=B();await t.register({firstName:this.form.firstName,lastName:this.form.lastName,email:this.form.email,password:this.form.password,phoneNumber:this.form.phone||"",roleId:this.form.role.id}),this.otpSent=!0,console.log("OTP sent to email")}catch(t){console.error("Error registering:",t),this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{$axios:t}=B(),e=Y(),{accessToken:n,user:s}=await e.verifyOtp({email:this.form.email,otp:this.otp});n&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async fetchRoles(){const{$axios:t}=B();try{const e=await t.get("/user/roles");this.roles=e.data}catch(e){console.error("Error fetching roles:",e)}}},mounted(){this.fetchRoles()}},it={class:"flex w-full h-screen flex-col items-center justify-center p-6"},lt={class:""},ot={class:"flex space-x-4 mb-4"},rt={class:"flex flex-col space-y-4 mb-4 w-full"},st={class:"flex"},pt={key:1},dt={class:"text-gray-500 mb-6"},ut={class:"font-weight-bold",style:{"font-weight":"bold"}},ct={class:"w-full mb-4"},ft={class:"text-sm mt-4 text-center"};function mt(t,e,n,s,i,l){const y=R,f=Q,m=Z,C=Oe,P=F,b=_;return p(),d(k,null,[a("div",it,[e[20]||(e[20]=a("img",{src:le,alt:"Login",class:"h-28 w-28"},null,-1)),a("div",lt,[e[19]||(e[19]=a("p",{class:"text-gray-500 text-2xl mb-10 text-center"}," Enter your details below to sign up ",-1)),i.otpSent?(p(),d("div",pt,[e[17]||(e[17]=a("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),a("p",dt,[e[16]||(e[16]=V(" Enter the OTP sent to your email address. ")),a("span",ut,x(i.form.email),1)]),a("div",ct,[r(P,{length:6,mask:"*",modelValue:i.otp,"onUpdate:modelValue":e[7]||(e[7]=h=>i.otp=h),class:"p-inputtex w-full text-center p-3",placeholder:"Enter OTP"},null,8,["modelValue"])]),a("button",{onClick:e[8]||(e[8]=(...h)=>l.verifyOtp&&l.verifyOtp(...h)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"}," Verify OTP ")])):(p(),d("form",{key:0,onSubmit:e[6]||(e[6]=ne((...h)=>l.register&&l.register(...h),["prevent"])),class:"w-full flex flex-col items-center"},[a("div",ot,[r(f,{variant:"on",class:"w-full"},{default:c(()=>[r(y,{type:"text",id:"firstName",modelValue:i.form.firstName,"onUpdate:modelValue":e[0]||(e[0]=h=>i.form.firstName=h),class:"w-full"},null,8,["modelValue"]),e[10]||(e[10]=a("label",{for:"firstName"},"First Name",-1))]),_:1}),r(f,{variant:"on",class:"w-full"},{default:c(()=>[r(y,{type:"text",id:"lastName",modelValue:i.form.lastName,"onUpdate:modelValue":e[1]||(e[1]=h=>i.form.lastName=h),class:"w-full"},null,8,["modelValue"]),e[11]||(e[11]=a("label",{for:"lastName"},"Last Name",-1))]),_:1})]),a("div",rt,[r(f,{variant:"on",class:"w-full"},{default:c(()=>[r(y,{type:"email",id:"email",modelValue:i.form.email,"onUpdate:modelValue":e[2]||(e[2]=h=>i.form.email=h),class:"w-full"},null,8,["modelValue"]),e[12]||(e[12]=a("label",{for:"email"},"Email",-1))]),_:1}),r(f,{variant:"on",class:"w-full"},{default:c(()=>[r(y,{type:"number",id:"phoneNumber",modelValue:i.form.phoneNumber,"onUpdate:modelValue":e[3]||(e[3]=h=>i.form.phoneNumber=h),class:"w-full"},null,8,["modelValue"]),e[13]||(e[13]=a("label",{for:"phoneNumber"},"Mobile Phone",-1))]),_:1}),a("div",st,[r(f,{variant:"on",class:"w-full custom-password"},{default:c(()=>[r(m,{id:"password",modelValue:i.form.password,"onUpdate:modelValue":e[4]||(e[4]=h=>i.form.password=h),toggleMask:"",class:""},null,8,["modelValue"]),e[14]||(e[14]=a("label",{for:"password"},"Password",-1))]),_:1})]),r(C,{modelValue:i.form.role,"onUpdate:modelValue":e[5]||(e[5]=h=>i.form.role=h),options:i.roles,optionLabel:"name",onChange:l.handleRole,placeholder:"Select a Role",class:"w-full custom-dropdown"},null,8,["modelValue","options","onChange"])]),e[15]||(e[15]=a("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-12"}," Sign Up ",-1))],32)),a("p",ft,[e[18]||(e[18]=V(" Already have an account? ")),a("span",{class:"text-blue-500 cursor-pointer",onClick:e[9]||(e[9]=h=>t.$emit("toggle"))}," Log in ")])])]),r(b,{position:"bottom-right",group:"br"})],64)}const se=j(at,[["render",mt],["__scopeId","data-v-a6ecb615"]]),bt={data(){return{form:{email:"",password:""},resetEmail:"",isVerified:!1,forgotPassword:!1,userStore:Y(),productStore:Ve()}},methods:{async sendResetEmail(){var t,e;try{const{$axios:n}=B();await n.post("/auth/reset-password",{email:this.resetEmail}),this.$toast.add({severity:"success",summary:"Reset link sent!",detail:"Check your email for the password reset link.",group:"br",life:3e3}),this.forgotPassword=!1}catch(n){this.$toast.add({severity:"error",summary:"Error",detail:((e=(t=n.response)==null?void 0:t.data)==null?void 0:e.message)||"Failed to send reset link.",group:"br",life:3e3})}},async login(){try{const{accessToken:t}=await this.userStore.login(this.form.email,this.form.password);t&&this.$router.push("/dashboard")}catch(t){t.message.includes("not yet verified")?this.isVerified=!0:this.isVerified=!1,this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}},async verifyOtp(){try{const{accessToken:t}=await this.userStore.verifyOtp({email:this.form.email,otp:this.otp});t&&this.$router.push("/dashboard")}catch(t){this.$toast.add({severity:"error",summary:t.message,group:"br",life:3e3})}}}},vt={class:"flex w-full h-screen flex-col items-center justify-center"},ht={key:0},yt={class:"flex flex-col gap-4 w-full"},gt={class:"mt-4 flex justify-end w-full"},wt={class:"text-sm mt-4 text-center"},kt={key:1},xt={key:2},St={class:"text-gray-500 mb-6"},Ct={class:"font-bold"},$t={class:"w-full mb-4 flex justify-center items-center"};function Vt(t,e,n,s,i,l){const y=R,f=Q,m=Z,C=F,P=_;return p(),d(k,null,[a("div",vt,[e[20]||(e[20]=a("img",{src:le,alt:"Login",class:"h-28 w-28"},null,-1)),!i.isVerified&&!i.forgotPassword?(p(),d("div",ht,[e[14]||(e[14]=a("p",{class:"text-gray-500 text-2xl mb-10 text-center"}," Welcome to Secure Group ",-1)),a("form",{onSubmit:e[3]||(e[3]=ne((...b)=>l.login&&l.login(...b),["prevent"])),class:"w-full flex flex-col items-center"},[a("div",yt,[r(f,{variant:"on"},{default:c(()=>[r(y,{type:"email",id:"email",modelValue:i.form.email,"onUpdate:modelValue":e[0]||(e[0]=b=>i.form.email=b),class:"w-full"},null,8,["modelValue"]),e[10]||(e[10]=a("label",{for:"email"},"Email",-1))]),_:1}),r(f,{variant:"on"},{default:c(()=>[r(m,{modelValue:i.form.password,"onUpdate:modelValue":e[1]||(e[1]=b=>i.form.password=b),toggleMask:""},null,8,["modelValue"]),e[11]||(e[11]=a("label",{for:"password"},"Password",-1))]),_:1})]),a("div",gt,[a("p",{class:"text-blue-500 text-sm cursor-pointer",onClick:e[2]||(e[2]=b=>i.forgotPassword=!0)}," Forgot password? ")]),e[12]||(e[12]=a("button",{type:"submit",class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Log In ",-1))],32),a("p",wt,[e[13]||(e[13]=V(" Don't have an account? ")),a("span",{class:"text-blue-500 cursor-pointer",onClick:e[4]||(e[4]=b=>t.$emit("toggle"))}," Sign up ")])])):i.forgotPassword?(p(),d("div",kt,[e[16]||(e[16]=a("h3",{class:"text-gray-500 flex justify-center text-2xl font-medium mb-4"},"Reset Password",-1)),e[17]||(e[17]=a("p",{class:"text-gray-500 mb-6 text-center"}," Enter your email address to receive a password reset link. ",-1)),r(f,{variant:"on"},{default:c(()=>[r(y,{type:"email",id:"resetEmail",modelValue:i.resetEmail,"onUpdate:modelValue":e[5]||(e[5]=b=>i.resetEmail=b),class:"w-full"},null,8,["modelValue"]),e[15]||(e[15]=a("label",{for:"resetEmail"},"Email",-1))]),_:1}),a("button",{onClick:e[6]||(e[6]=(...b)=>l.sendResetEmail&&l.sendResetEmail(...b)),class:"w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"}," Send Reset Link "),a("p",{class:"text-sm mt-4 text-center cursor-pointer text-blue-500",onClick:e[7]||(e[7]=b=>i.forgotPassword=!1)}," Back to login ")])):(p(),d("div",xt,[e[19]||(e[19]=a("h3",{class:"text-3xl font-medium mb-4"},"Verify OTP",-1)),a("p",St,[e[18]||(e[18]=V(" Enter the OTP sent to your email address: ")),a("span",Ct,x(i.form.email),1)]),a("div",$t,[r(C,{length:6,mask:"*",modelValue:t.otp,"onUpdate:modelValue":e[8]||(e[8]=b=>t.otp=b),size:"large",class:"text-center p-3",placeholder:"Enter OTP"},null,8,["modelValue"])]),a("button",{onClick:e[9]||(e[9]=(...b)=>l.verifyOtp&&l.verifyOtp(...b)),class:"w-full text-white py-3 rounded hover:bg-red-600"}," Verify OTP ")]))]),r(P,{position:"bottom-right",group:"br"})],64)}const pe=j(bt,[["render",Vt],["__scopeId","data-v-2cf42cba"]]);var It=function(e){var n=e.dt;return`
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
`)},Tt={root:function(e){var n=e.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},Pt=$.extend({name:"stepper",theme:It,classes:Tt}),Ot={name:"BaseStepper",extends:T,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Pt,provide:function(){return{$pcStepper:this,$parentInstance:this}}},de={name:"Stepper",extends:Ot,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||U()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||U()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function Lt(t,e,n,s,i,l){return p(),d("div",u({class:t.cx("root"),role:"tablist"},t.ptmi("root")),[t.$slots.start?g(t.$slots,"start",{key:0}):I("",!0),g(t.$slots,"default"),t.$slots.end?g(t.$slots,"end",{key:1}):I("",!0)],16)}de.render=Lt;var Et={root:"p-steppanels"},zt=$.extend({name:"steppanels",classes:Et}),Nt={name:"BaseStepPanels",extends:T,style:zt,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},ue={name:"StepPanels",extends:Nt,inheritAttrs:!1};function Bt(t,e,n,s,i,l){return p(),d("div",u({class:t.cx("root")},t.ptmi("root")),[g(t.$slots,"default")],16)}ue.render=Bt;var Dt=function(e){var n=e.dt;return`
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
`)},At={root:"p-iftalabel"},Rt=$.extend({name:"iftalabel",theme:Dt,classes:At}),Ut={name:"BaseIftaLabel",extends:T,style:Rt,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},ce={name:"IftaLabel",extends:Ut,inheritAttrs:!1};function jt(t,e,n,s,i,l){return p(),d("span",u({class:t.cx("root")},t.ptmi("root")),[g(t.$slots,"default")],16)}ce.render=jt;var Ft=function(e){var n=e.dt;return`
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
`)},Mt={root:function(e){var n=e.instance,s=e.props;return["p-textarea p-component",{"p-filled":n.$filled,"p-textarea-resizable ":s.autoResize,"p-textarea-sm p-inputfield-sm":s.size==="small","p-textarea-lg p-inputfield-lg":s.size==="large","p-invalid":n.$invalid,"p-variant-filled":n.$variant==="filled","p-textarea-fluid":n.$fluid}]}},Wt=$.extend({name:"textarea",theme:Ft,classes:Mt}),Ht={name:"BaseTextarea",extends:K,props:{autoResize:Boolean},style:Wt,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},fe={name:"Textarea",extends:Ht,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){e.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},Yt=["value","disabled","aria-invalid"];function qt(t,e,n,s,i,l){return p(),d("textarea",u({class:t.cx("root"),value:t.d_value,disabled:t.disabled,"aria-invalid":t.invalid||void 0,onInput:e[0]||(e[0]=function(){return l.onInput&&l.onInput.apply(l,arguments)})},l.attrs),null,16,Yt)}fe.render=qt;var Kt={root:function(e){var n=e.instance;return["p-steppanel",{"p-steppanel-active":n.isVertical&&n.active}]},content:"p-steppanel-content"},Zt=$.extend({name:"steppanel",classes:Kt}),me={name:"StepperSeparator",hostName:"Stepper",extends:T};function Qt(t,e,n,s,i,l){return p(),d("span",u({class:t.cx("separator")},t.ptm("separator")),null,16)}me.render=Qt;var Gt={name:"BaseStepPanel",extends:T,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:Zt,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},be={name:"StepPanel",extends:Gt,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var e,n,s=q(this.$pcStepper.$el,'[data-pc-name="step"]'),i=Ie(this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.$el:(n=this.$pcStepList)===null||n===void 0?void 0:n.$el,'[data-pc-name="step"]'),l=ae(i,s);this.isSeparatorVisible=this.isVertical&&l!==s.length-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active}})},updateValue:function(e){this.$pcStepper.updateValue(e)}},computed:{active:function(){var e,n,s=this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value;return s===((n=this.$pcStepper)===null||n===void 0?void 0:n.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var e;return this.isVertical?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:me}};function Jt(t,e,n,s,i,l){var y=z("StepperSeparator");return l.isVertical?(p(),d(k,{key:0},[t.asChild?g(t.$slots,"default",{key:1,active:l.active,a11yAttrs:l.a11yAttrs,activateCallback:function(m){return l.updateValue(m)}}):(p(),S(te,u({key:0,name:"p-toggleable-content"},t.ptm("transition")),{default:c(function(){return[G((p(),S(D(t.as),u({id:l.id,class:t.cx("root"),role:"tabpanel","aria-controls":l.ariaControls},l.getPTOptions("root")),{default:c(function(){return[i.isSeparatorVisible?(p(),S(y,{key:0})):I("",!0),a("div",u({class:t.cx("content")},l.getPTOptions("content")),[g(t.$slots,"default",{active:l.active,activateCallback:function(m){return l.updateValue(m)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[J,l.active]])]}),_:3},16))],64)):(p(),d(k,{key:1},[t.asChild?t.asChild&&l.active?g(t.$slots,"default",{key:1,active:l.active,a11yAttrs:l.a11yAttrs,activateCallback:function(m){return l.updateValue(m)}}):I("",!0):G((p(),S(D(t.as),u({key:0,id:l.id,class:t.cx("root"),role:"tabpanel","aria-controls":l.ariaControls},l.getPTOptions("root")),{default:c(function(){return[g(t.$slots,"default",{active:l.active,activateCallback:function(m){return l.updateValue(m)}})]}),_:3},16,["id","class","aria-controls"])),[[J,l.active]])],64))}be.render=Jt;var Xt={root:"p-steplist"},_t=$.extend({name:"steplist",classes:Xt}),en={name:"BaseStepList",extends:T,style:_t,provide:function(){return{$pcStepList:this,$parentInstance:this}}},ve={name:"StepList",extends:en,inheritAttrs:!1};function tn(t,e,n,s,i,l){return p(),d("div",u({class:t.cx("root")},t.ptmi("root")),[g(t.$slots,"default")],16)}ve.render=tn;var nn={root:function(e){var n=e.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},an=$.extend({name:"step",classes:nn}),he={name:"StepperSeparator",hostName:"Stepper",extends:T};function ln(t,e,n,s,i,l){return p(),d("span",u({class:t.cx("separator")},t.ptm("separator")),null,16)}he.render=ln;var on={name:"BaseStep",extends:T,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:an,provide:function(){return{$pcStep:this,$parentInstance:this}}},ye={name:"Step",extends:on,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=ae(this.$el,q(this.$pcStepper.$el,'[data-pc-name="step"]')),n=q(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==n-1}},methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:he}},rn=["id","tabindex","aria-controls","disabled"];function sn(t,e,n,s,i,l){var y=z("StepperSeparator");return t.asChild?g(t.$slots,"default",{key:1,class:N(t.cx("root")),active:l.active,value:t.value,a11yAttrs:l.a11yAttrs,activateCallback:l.onStepClick}):(p(),S(D(t.as),u({key:0,class:t.cx("root"),"aria-current":l.active?"step":void 0,role:"presentation","data-p-active":l.active,"data-p-disabled":l.isStepDisabled},l.getPTOptions("root")),{default:c(function(){return[a("button",u({id:l.id,class:t.cx("header"),role:"tab",type:"button",tabindex:l.isStepDisabled?-1:void 0,"aria-controls":l.ariaControls,disabled:l.isStepDisabled,onClick:e[0]||(e[0]=function(){return l.onStepClick&&l.onStepClick.apply(l,arguments)})},l.getPTOptions("header")),[a("span",u({class:t.cx("number")},l.getPTOptions("number")),x(l.activeValue),17),a("span",u({class:t.cx("title")},l.getPTOptions("title")),[g(t.$slots,"default")],16)],16,rn),i.isSeparatorVisible?(p(),S(y,{key:0})):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}ye.render=sn;var pn=function(e){var n=e.dt;return`
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
`)},dn={root:function(e){var n=e.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},un={root:function(e){var n=e.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},cn=$.extend({name:"divider",theme:pn,classes:un,inlineStyles:dn}),fn={name:"BaseDivider",extends:T,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:cn,provide:function(){return{$pcDivider:this,$parentInstance:this}}},ge={name:"Divider",extends:fn,inheritAttrs:!1},mn=["aria-orientation"];function bn(t,e,n,s,i,l){return p(),d("div",u({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptmi("root")),[t.$slots.default?(p(),d("div",u({key:0,class:t.cx("content")},t.ptm("content")),[g(t.$slots,"default")],16)):I("",!0)],16,mn)}ge.render=bn;const vn={data(){return{responseMessage:{},activeStep:1,businessName:"",phoneNumber:"",email:"",location:"",businessType:null,experienceYears:null,experienceAreas:[],brandsWorkedWith:[],integrationExperience:null,familiarWithStandard:null,purchaseSource:"",purchaseHikvision:null,requiresTraining:null,businessCategories:[{name:"System Integrator",key:"System Integrator"},{name:"Reseller",key:"Reseller"},{name:"Technician",key:"Technician"},{name:"Other",key:"Other"}],yearExperiences:[{name:"1 Year",key:"1 Year"},{name:"1-3 Years",key:"1-3 Years"},{name:"4-7 Years",key:"4-7 Years"},{name:"8+",key:"8+"}],experienceAreasList:[{name:"CCTV Systems",key:"CCTV Systems"},{name:"Access Control Systems",key:"Access Control Systems"},{name:"Video Intercom Systems",key:"Video Intercom Systems"},{name:"Networking and Computer Products",key:"Networking and Computer Products"},{name:"Electrical Installations",key:"Electrical Installations"}],brandsWorkedWithList:[{name:"Hikvision",key:"Hikvision"},{name:"Dahua",key:"Dahua"},{name:"Uniview",key:"Uniview"},{name:"Tandy",key:"Tandy"},{name:"Other (Please Specify)",key:"Other"}],integrationExperienceList:[{name:"Yes, Extensive Experience",key:"Yes, Extensive Experience"},{name:"Some Experience",key:"Some Experience"},{name:"No Experience",key:"No Experience"}],wherePurchase:[{name:"National Distributor",key:"National Distributor"},{name:"Regional Supplier",key:"Regional Supplier"},{name:"Online Retailer ",key:"Online Retailer "},{name:"Other",key:"Other"}],familiarWithStandards:[{name:"Yes, I'm certified",key:"Yes, I'm certified"},{name:"I am familiar but not certified",key:"I am familiar but not certified"},{name:"No, but I am willing to learn",key:"No, but I am willing to learn"}],options:[{name:"Yes",key:"Yes"},{name:"No",key:"No"},{name:"Not yet, but interested",key:"Not yet, but interested"}]}},methods:{async submitForm(){const t={businessName:this.businessName,phoneNumber:this.phoneNumber,email:this.email,location:this.location,businessType:this.businessType,experienceYears:this.experienceYears,experienceAreas:this.experienceAreas,brandsWorkedWith:this.brandsWorkedWith,integrationExperience:this.integrationExperience,familiarWithStandard:this.familiarWithStandard,purchaseSource:this.purchaseSource,purchaseHikvision:this.purchaseHikvision,requiresTraining:this.requiresTraining};console.log("Form Data:",t);try{const{$axios:e}=B(),n=await e.post("/user/technician-questionnaire",t);this.responseMessage=n.data.message,this.activateCallback(4),n.status}catch(e){console.error("Error submitting form:",e)}finally{}},resetForm(){this.businessName="",this.phoneNumber="",this.email="",this.location="",this.businessType=null,this.experienceYears=null,this.experienceAreas=[],this.brandsWorkedWith=[],this.integrationExperience=null,this.purchaseSource="",this.purchaseHikvision=null,this.requiresTraining=null}}},hn={class:"flex w-full items-center justify-center p-6 pt-8"},yn=["onClick"],gn=["onClick"],wn=["onClick"],kn={class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},xn={class:"field"},Sn={class:"field"},Cn={class:"field"},$n={class:"field"},Vn=["for"],In=["for"],Tn={class:"flex pt-6 justify-end"},Pn={class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},On=["for"],Ln=["for"],En={class:"field"},zn=["for"],Nn={class:"field"},Bn=["for"],Dn={class:"flex pt-6 justify-between"},An={class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},Rn={class:"field"},Un=["for"],jn={class:"field"},Fn=["for"],Mn={class:"field"},Wn={class:"field"},Hn={class:"field"},Yn={class:"field"},qn={class:"field"},Kn={class:"field"},Zn={class:"flex pt-6 justify-between"},Qn={class:"flex pt-6 justify-between"};function Gn(t,e,n,s,i,l){const y=ge,f=ye,m=ve,C=R,P=Le,b=Ne,h=be,M=ze,L=fe,E=ce,we=ue,ke=de;return p(),d("div",hn,[r(ke,{value:i.activeStep,"onUpdate:value":e[19]||(e[19]=w=>i.activeStep=w),class:"w-full max-w-lg min-h-[20rem]"},{default:c(()=>[r(m,null,{default:c(()=>[r(f,{asChild:"",value:1},{default:c(({activateCallback:w,value:o,a11yAttrs:v})=>[a("div",u({class:"flex flex-row flex-auto gap-2"},v.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},v.header),[a("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":o<=i.activeStep,"border-surface-200 dark:border-surface-700":o>i.activeStep}])},e[20]||(e[20]=[a("i",{class:"pi pi-building"},null,-1)]),2)],16,yn),r(y)],16)]),_:1}),r(f,{asChild:"",value:2},{default:c(({activateCallback:w,value:o,a11yAttrs:v})=>[a("div",u({class:"flex flex-row flex-auto gap-2 pl-2"},v.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},v.header),[a("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":o<=i.activeStep,"border-surface-200 dark:border-surface-700":o>i.activeStep}])},e[21]||(e[21]=[a("i",{class:"pi pi-cogs"},null,-1)]),2)],16,gn),r(y)],16)]),_:1}),r(f,{asChild:"",value:3},{default:c(({activateCallback:w,value:o,a11yAttrs:v})=>[a("div",u({class:"flex flex-row pl-2"},v.root),[a("button",u({class:"bg-transparent border-0 inline-flex flex-col gap-2",onClick:w},v.header),[a("span",{class:N(["rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",{"bg-primary text-primary-contrast border-primary":o<=i.activeStep,"border-surface-200 dark:border-surface-700":o>i.activeStep}])},e[22]||(e[22]=[a("i",{class:"pi pi-question-circle"},null,-1)]),2)],16,wn)],16)]),_:1})]),_:1}),r(we,null,{default:c(()=>[r(h,{value:1},{default:c(({activateCallback:w})=>[a("div",kn,[e[27]||(e[27]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 1: Business Identification ",-1)),a("div",xn,[e[23]||(e[23]=a("label",{for:"businessName",class:"font-bold"},"Business/Company Name",-1)),r(C,{id:"businessName",modelValue:i.businessName,"onUpdate:modelValue":e[0]||(e[0]=o=>i.businessName=o),type:"text",placeholder:"Enter business name",class:"w-full"},null,8,["modelValue"])]),a("div",Sn,[e[24]||(e[24]=a("label",{for:"phoneNumber",class:"font-bold"},"Phone Number",-1)),r(C,{id:"phoneNumber",modelValue:i.phoneNumber,"onUpdate:modelValue":e[1]||(e[1]=o=>i.phoneNumber=o),type:"tel",placeholder:"Enter phone number",class:"w-full"},null,8,["modelValue"])]),a("div",Cn,[e[25]||(e[25]=a("label",{for:"email",class:"font-bold"},"Email Address",-1)),r(C,{id:"email",modelValue:i.email,"onUpdate:modelValue":e[2]||(e[2]=o=>i.email=o),type:"email",placeholder:"Enter email address",class:"w-full"},null,8,["modelValue"])]),a("div",$n,[e[26]||(e[26]=a("label",{for:"location",class:"font-bold"},"Business Location",-1)),r(C,{id:"location",modelValue:i.location,"onUpdate:modelValue":e[3]||(e[3]=o=>i.location=o),type:"text",placeholder:"City, State, Country",class:"w-full"},null,8,["modelValue"])]),e[28]||(e[28]=a("div",{class:"font-bold"},"Business Type",-1)),(p(!0),d(k,null,O(i.businessCategories,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(P,{modelValue:i.businessType,"onUpdate:modelValue":e[4]||(e[4]=v=>i.businessType=v),inputId:o.key,name:"dynamic",value:o.key,class:"flex"},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,Vn)]))),128)),e[29]||(e[29]=a("div",{class:"font-bold"},"Years of Experience",-1)),(p(!0),d(k,null,O(i.yearExperiences,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(P,{modelValue:i.experienceYears,"onUpdate:modelValue":e[5]||(e[5]=v=>i.experienceYears=v),inputId:o.key,name:"dynamic1",value:o.key},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,In)]))),128))]),a("div",Tn,[r(b,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:o=>w(2)},null,8,["onClick"])])]),_:1}),r(h,{value:2},{default:c(({activateCallback:w})=>[a("div",Pn,[e[34]||(e[34]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 2: Technical Experience ",-1)),a("div",null,[e[30]||(e[30]=a("label",{class:"font-bold py-5"},"Which of the following areas do you have experience with ?",-1)),(p(!0),d(k,null,O(i.experienceAreasList,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(M,{modelValue:i.experienceAreas,"onUpdate:modelValue":e[6]||(e[6]=v=>i.experienceAreas=v),inputId:o.key,name:"category",value:o.name},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,On)]))),128))]),a("div",null,[e[31]||(e[31]=a("label",{class:"font-bold pb-3"},"Which brands have you primarily worked with?",-1)),(p(!0),d(k,null,O(i.brandsWorkedWithList,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(M,{modelValue:i.brandsWorkedWith,"onUpdate:modelValue":e[7]||(e[7]=v=>i.brandsWorkedWith=v),inputId:o.key,name:"category",value:o.key},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,Ln)]))),128)),i.brandsWorkedWith.includes("Other")?(p(),S(C,{key:0,id:"purchaseSource",modelValue:i.purchaseSource,"onUpdate:modelValue":e[8]||(e[8]=o=>i.purchaseSource=o),type:"text",placeholder:"Please Specify ...",class:"w-full mt-4"},null,8,["modelValue"])):I("",!0)]),a("div",En,[e[32]||(e[32]=a("label",{class:"font-bold pb-3"}," Do you have experience integrating security systems into larger solutions?",-1)),(p(!0),d(k,null,O(i.integrationExperienceList,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(P,{modelValue:i.integrationExperience,"onUpdate:modelValue":e[9]||(e[9]=v=>i.integrationExperience=v),inputId:o.key,name:"integrationExperience",value:o.name},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,zn)]))),128))]),a("div",Nn,[e[33]||(e[33]=a("label",{class:"font-bold pb-3"}," Are you familiar with Hikvision product certifications and installation standards?",-1)),(p(!0),d(k,null,O(i.familiarWithStandards,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(P,{modelValue:i.familiarWithStandard,"onUpdate:modelValue":e[10]||(e[10]=v=>i.familiarWithStandard=v),inputId:o.key,name:"familiarWithStandard",value:o.name},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,Bn)]))),128))])]),a("div",Dn,[r(b,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:o=>w(1)},null,8,["onClick"]),r(b,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:o=>w(3)},null,8,["onClick"])])]),_:1}),r(h,{value:3},{default:c(({activateCallback:w})=>[a("div",An,[e[49]||(e[49]=a("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"}," Section 3: Technical Questions ",-1)),a("div",Rn,[e[35]||(e[35]=a("label",{for:"purchaseSource",class:"font-bold pb-3"}," Where do you currently purchase your security products? (Please select all that apply and provide details for each category)",-1)),(p(!0),d(k,null,O(i.wherePurchase,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(M,{modelValue:i.purchaseSource,"onUpdate:modelValue":e[11]||(e[11]=v=>i.purchaseSource=v),inputId:o.key,name:"purchaseSource",value:o.name},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,Un)]))),128))]),a("div",jn,[e[36]||(e[36]=a("label",{class:"font-bold pb-3"},"Do you currently purchase Hikvision products?",-1)),(p(!0),d(k,null,O(i.options,o=>(p(),d("div",{key:o.key,class:"flex items-center gap-2"},[r(P,{modelValue:i.purchaseHikvision,"onUpdate:modelValue":e[12]||(e[12]=v=>i.purchaseHikvision=v),inputId:o.key,name:"purchaseHikvision",value:o.name},null,8,["modelValue","inputId","value"]),a("label",{for:o.key},x(o.name),9,Fn)]))),128))]),a("div",Mn,[e[38]||(e[38]=a("label",{class:"font-bold pb-3"},[V(" Technical Expertise Verification "),a("br"),a("span",null," For those working with Hikvision products: How do you configure a Hikvision NVR to enable remote viewing on a mobile device?")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"summary",modelValue:t.value,"onUpdate:modelValue":e[13]||(e[13]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[37]||(e[37]=a("label",{for:"description"},"Summary",-1))]),_:1})]),a("div",Wn,[e[40]||(e[40]=a("label",{class:"font-bold pb-3"},[a("span",null," What is the difference between Hikvision’s AcuSense and ColorVu technologies?")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"summary",modelValue:t.value,"onUpdate:modelValue":e[14]||(e[14]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[39]||(e[39]=a("label",{for:"description"},"Summary",-1))]),_:1})]),a("div",Hn,[e[42]||(e[42]=a("label",{class:"font-bold pb-3"},[a("span",null,"How would you troubleshoot a CCTV camera that is not displaying video on the NVR?")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"troubleshoot_cctv",modelValue:t.value,"onUpdate:modelValue":e[15]||(e[15]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[41]||(e[41]=a("label",{for:"troubleshoot_cctv"},"Summary",-1))]),_:1})]),a("div",Yn,[e[44]||(e[44]=a("label",{class:"font-bold pb-3"},[a("span",null,"What are the key considerations when designing a network for IP-based surveillance systems?")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"network_design",modelValue:t.value,"onUpdate:modelValue":e[16]||(e[16]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[43]||(e[43]=a("label",{for:"network_design"},"Summary",-1))]),_:1})]),a("div",qn,[e[46]||(e[46]=a("label",{class:"font-bold pb-3"},[a("span",null,"What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"support_areas",modelValue:t.value,"onUpdate:modelValue":e[17]||(e[17]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[45]||(e[45]=a("label",{for:"support_areas"},"Summary",-1))]),_:1})]),a("div",Kn,[e[48]||(e[48]=a("label",{class:"font-bold pb-3"},[a("span",null,"How can we best support your business? (Optional)")],-1)),r(E,{class:"mt-4"},{default:c(()=>[r(L,{id:"business_support",modelValue:t.value,"onUpdate:modelValue":e[18]||(e[18]=o=>t.value=o),rows:"5",cols:"30",style:{resize:"none"},class:"w-full"},null,8,["modelValue"]),e[47]||(e[47]=a("label",{for:"business_support"},"Summary",-1))]),_:1})])]),a("div",Zn,[r(b,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:o=>w(2)},null,8,["onClick"]),r(b,{label:"Submit",icon:"pi pi-check",iconPos:"right",onClick:o=>w(4)},null,8,["onClick"])])]),_:1}),r(h,{value:4},{default:c(({activateCallback:w})=>[e[50]||(e[50]=a("div",{class:"flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"},[a("div",{class:"text-center mt-4 mb-4 text-sm font-semibold"},[a("div",{class:"p-6 rounded-lg shadow-md"},[V(" Thank You! "),a("p",{class:"text-gray-700"}," Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),a("ul",{class:"list-disc text-left pl-5 text-gray-700 mt-3"},[a("li",null,[a("strong",null,"Reseller Pricing")]),a("li",null,[a("strong",null,"Comprehensive Marketing and Technical Resources")]),a("li",null,[a("strong",null,"Product and Business Support")])]),a("p",{class:"text-gray-700 mt-4"}," For any inquiries or further assistance, please do not hesitate to contact us: "),a("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[a("p",{class:"text-gray-800 font-semibold"},[V(" 📧 Email: "),a("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),a("p",{class:"text-gray-800 font-semibold"},[V(" 📞 Phone: "),a("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])]),a("p",{class:"text-gray-700 mt-6"}," We look forward to the opportunity to collaborate with you. "),a("hr",{class:"my-4 border-gray-300"}),a("p",{class:"text-gray-800 font-bold"},"Best regards,"),a("p",{class:"text-gray-700"}," Secure Digital Limited | Hik Digital Mart Limited "),a("p",{class:"text-gray-700 font-semibold"}," SDLKenya Online Shop Administration Department "),a("div",{class:"bg-white p-4 rounded-lg shadow mt-4"},[a("p",{class:"text-gray-800 font-semibold"},[V(" 📧 Email: "),a("a",{href:"mailto:sdl@hikvisionkenya.com",class:"text-blue-600 hover:underline"},"sdl@hikvisionkenya.com")]),a("p",{class:"text-gray-800 font-semibold"},[V(" 📞 Phone: "),a("a",{href:"tel:+254727909060",class:"text-blue-600 hover:underline"},"+254 727 909 060")])])])])],-1)),a("div",Qn,[r(b,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:o=>w(3)},null,8,["onClick"])])]),_:1})]),_:1})]),_:1},8,["value"])])}const Jn=j(vn,[["render",Gn],["__scopeId","data-v-a9c286a5"]]),Xn={layout:"login",components:{SignupForm:se,LoginForm:pe,QuestionnaireForm:Jn},data(){return{isSignup:!1,showQuestionnaireVisible:!1}},methods:{toggleForm(){this.isSignup=!this.isSignup,this.showQuestionnaireVisible=!1},showQuestionnaire(){this.isSignup=!1,this.showQuestionnaireVisible=!0}}},_n={class:"",style:{"background-color":"white"}};function ea(t,e,n,s,i,l){const y=se,f=z("QuestionnaireForm"),m=pe;return p(),d("div",_n,[i.isSignup?(p(),S(y,{key:0,onToggle:l.toggleForm,onShowQuestionnaire:l.showQuestionnaire},null,8,["onToggle","onShowQuestionnaire"])):i.showQuestionnaireVisible?(p(),S(f,{key:1})):(p(),S(m,{key:2,onToggle:l.toggleForm},null,8,["onToggle"]))])}const ba=j(Xn,[["render",ea]]);export{ba as default};
