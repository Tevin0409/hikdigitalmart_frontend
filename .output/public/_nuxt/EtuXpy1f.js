import{_ as Ze}from"./Cdcg9F6A.js";import{R as he}from"./DN1lR6eg.js";import{a as fe,b as Je,s as Qe}from"./cBOMuV9J.js";import{B as le,q as R,o as l,c as u,s as I,b as y,v as s,ah as Xe,$ as Ke,a as c,N as me,G as E,u as H,H as J,I as f,t as T,ai as P,K as te,L as ce,A as Ae,E as Te,D as ne,p as Ee,w as v,T as De,F as $,m as ae,d as ie,aj as oe,ak as Z,ac as Ye,C as _e,P as et,al as Ie,am as tt,an as nt,J as we,x as ke,r as B,S as N,R as it,y as G,U as ot}from"./B_B6csQg.js";import{U as se,C as Ve,O as Fe,s as at,b as st,a as lt}from"./CvttqWQX.js";import{Z as W,s as Pe,b as rt}from"./BQVOLgXZ.js";import{s as be}from"./CbLU7av0.js";import{s as ct}from"./BisfTYV-.js";import{s as ut}from"./Dc3mCgD5.js";import{_ as Le}from"./CCDzNJnE.js";var dt=function(e){var n=e.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(n("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(n("overlaybadge.outline.color"),`;
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`)},pt={root:"p-overlaybadge"},ht=le.extend({name:"overlaybadge",theme:dt,classes:pt}),ft={name:"OverlayBadge",extends:fe,style:ht,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},ze={name:"OverlayBadge",extends:ft,inheritAttrs:!1,components:{Badge:fe}};function mt(t,e,n,o,a,i){var m=R("Badge");return l(),u("div",s({class:t.cx("root")},t.ptmi("root")),[I(t.$slots,"default"),y(m,s(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}ze.render=mt;var bt=function(e){var n=e.dt;return`
.p-menu {
    background: `.concat(n("menu.background"),`;
    color: `).concat(n("menu.color"),`;
    border: 1px solid `).concat(n("menu.border.color"),`;
    border-radius: `).concat(n("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(n("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(n("menu.transition.duration"),", color ").concat(n("menu.transition.duration"),`;
    border-radius: `).concat(n("menu.item.border.radius"),`;
    color: `).concat(n("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(n("menu.item.padding"),`;
    gap: `).concat(n("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(n("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(n("menu.item.focus.color"),`;
    background: `).concat(n("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(n("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(n("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(n("menu.submenu.label.background"),`;
    padding: `).concat(n("menu.submenu.label.padding"),`;
    color: `).concat(n("menu.submenu.label.color"),`;
    font-weight: `).concat(n("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(n("menu.separator.border.color"),`;
}
`)},gt={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},yt=le.extend({name:"menu",theme:bt,classes:gt}),vt={name:"BaseMenu",extends:be,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:yt,provide:function(){return{$pcMenu:this,$parentInstance:this}}},Be={name:"Menuitem",hostName:"Menu",extends:be,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?Xe(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:s({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:s({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:s({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:he}},Ot=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],It=["href","target"];function wt(t,e,n,o,a,i){var m=Ke("ripple");return i.visible()?(l(),u("li",s({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[c("div",s({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(S){return i.onItemClick(S)}),onMousemove:e[1]||(e[1]=function(S){return i.onItemMouseMove(S)})},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(l(),E(J(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):f("",!0):me((l(),u("a",s({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(l(),E(J(n.templates.itemicon),{key:0,item:n.item,class:H(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(l(),u("span",s({key:1,class:[t.cx("itemIcon"),n.item.icon]},i.getPTOptions("itemIcon")),null,16)):f("",!0),c("span",s({class:t.cx("itemLabel")},i.getPTOptions("itemLabel")),T(i.label()),17)],16,It)),[[m]])],16)],16,Ot)):f("",!0)}Be.render=wt;function Ce(t){return St(t)||Ct(t)||Lt(t)||kt()}function kt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(t,e){if(t){if(typeof t=="string")return ue(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ue(t,e):void 0}}function Ct(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function St(t){if(Array.isArray(t))return ue(t)}function ue(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var Re={name:"Menu",extends:vt,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||se()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||se(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&W.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(P(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)P(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(te(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=ce(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=n&&ce(n,'a[data-pc-section="itemlink"]');this.popup&&P(this.target),o?o.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=te(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=Ce(n).findIndex(function(a){return a.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var n=te(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=Ce(n).findIndex(function(a){return a.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var n=te(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=n.length?n.length-1:e<0?0:e;o>-1&&(this.focusedOptionIndex=n[o].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){Ae(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&W.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&P(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&W.clear(e)},alignOverlay:function(){Te(this.container,this.target);var e=ne(this.target);e>ne(this.container)&&(this.container.style.minWidth=ne(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var o=e.container&&!e.container.contains(n.target),a=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&o&&a?e.hide():!e.popup&&o&&a&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Ve(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Ee()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){Fe.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:Be,Portal:Pe}},xt=["id"],Mt=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Kt=["id"];function At(t,e,n,o,a,i){var m=R("PVMenuitem"),S=R("Portal");return l(),E(S,{appendTo:t.appendTo,disabled:!t.popup},{default:v(function(){return[y(De,s({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:v(function(){return[!t.popup||a.overlayVisible?(l(),u("div",s({key:0,ref:i.containerRef,id:a.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},t.ptmi("root")),[t.$slots.start?(l(),u("div",s({key:0,class:t.cx("start")},t.ptm("start")),[I(t.$slots,"start")],16)):f("",!0),c("ul",s({ref:i.listRef,id:a.id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(l(!0),u($,null,ae(t.model,function(h,O){return l(),u($,{key:i.label(h)+O.toString()},[h.items&&i.visible(h)&&!h.separator?(l(),u($,{key:0},[h.items?(l(),u("li",s({key:0,id:a.id+"_"+O,class:[t.cx("submenuLabel"),h.class],role:"none",ref_for:!0},t.ptm("submenuLabel")),[I(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:h},function(){return[ie(T(i.label(h)),1)]})],16,Kt)):f("",!0),(l(!0),u($,null,ae(h.items,function(L,D){return l(),u($,{key:L.label+O+"_"+D},[i.visible(L)&&!L.separator?(l(),E(m,{key:0,id:a.id+"_"+O+"_"+D,item:L,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(L)&&L.separator?(l(),u("li",s({key:"separator"+O+D,class:[t.cx("separator"),h.class],style:L.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):i.visible(h)&&h.separator?(l(),u("li",s({key:"separator"+O.toString(),class:[t.cx("separator"),h.class],style:h.style,role:"separator",ref_for:!0},t.ptm("separator")),null,16)):(l(),E(m,{key:i.label(h)+O.toString(),id:a.id+"_"+O,item:h,index:O,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Mt),t.$slots.end?(l(),u("div",s({key:1,class:t.cx("end")},t.ptm("end")),[I(t.$slots,"end")],16)):f("",!0)],16,xt)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Re.render=At;var Tt=function(e){var n=e.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding-block: `).concat(n("chip.padding.y"),`;
    padding-inline: `).concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},Et={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Dt=le.extend({name:"chip",theme:Tt,classes:Et}),Vt={name:"BaseChip",extends:be,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:Dt,provide:function(){return{$pcChip:this,$parentInstance:this}}},$e={name:"Chip",extends:Vt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},components:{TimesCircleIcon:rt}},Ft=["aria-label"],Pt=["src"];function zt(t,e,n,o,a,i){return a.visible?(l(),u("div",s({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root")),[I(t.$slots,"default",{},function(){return[t.image?(l(),u("img",s({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,Pt)):t.$slots.icon?(l(),E(J(t.$slots.icon),s({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(l(),u("span",s({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):f("",!0),t.label?(l(),u("div",s({key:3,class:t.cx("label")},t.ptm("label")),T(t.label),17)):f("",!0)]}),t.removable?I(t.$slots,"removeicon",{key:0,removeCallback:i.close,keydownCallback:i.onKeydown},function(){return[(l(),E(J(t.removeIcon?"span":"TimesCircleIcon"),s({class:[t.cx("removeIcon"),t.removeIcon],onClick:i.close,onKeydown:i.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):f("",!0)],16,Ft)):f("",!0)}$e.render=zt;var Bt=function(e){var n=e.dt;return`
.p-autocomplete {
    display: inline-flex;
}

.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    inset-inline-end: `.concat(n("autocomplete.padding.x"),`;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {
    inset-inline-end: calc(`).concat(n("autocomplete.dropdown.width")," + ").concat(n("autocomplete.padding.x"),`);
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,
.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
}

.p-autocomplete-dropdown {
    cursor: pointer;
    display: inline-flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: `).concat(n("autocomplete.dropdown.width"),`;
    border-start-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    border-end-end-radius: `).concat(n("autocomplete.dropdown.border.radius"),`;
    background: `).concat(n("autocomplete.dropdown.background"),`;
    border: 1px solid `).concat(n("autocomplete.dropdown.border.color"),`;
    border-inline-start: 0 none;
    color: `).concat(n("autocomplete.dropdown.color"),`;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
}

.p-autocomplete-dropdown:not(:disabled):hover {
    background: `).concat(n("autocomplete.dropdown.hover.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.hover.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.hover.color"),`;
}

.p-autocomplete-dropdown:not(:disabled):active {
    background: `).concat(n("autocomplete.dropdown.active.background"),`;
    border-color: `).concat(n("autocomplete.dropdown.active.border.color"),`;
    color: `).concat(n("autocomplete.dropdown.active.color"),`;
}

.p-autocomplete-dropdown:focus-visible {
    box-shadow: `).concat(n("autocomplete.dropdown.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.dropdown.focus.ring.width")," ").concat(n("autocomplete.dropdown.focus.ring.style")," ").concat(n("autocomplete.dropdown.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.dropdown.focus.ring.offset"),`;
}

.p-autocomplete .p-autocomplete-overlay {
    min-width: 100%;
}

.p-autocomplete-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: `).concat(n("autocomplete.overlay.background"),`;
    color: `).concat(n("autocomplete.overlay.color"),`;
    border: 1px solid `).concat(n("autocomplete.overlay.border.color"),`;
    border-radius: `).concat(n("autocomplete.overlay.border.radius"),`;
    box-shadow: `).concat(n("autocomplete.overlay.shadow"),`;
}

.p-autocomplete-list-container {
    overflow: auto;
}

.p-autocomplete-list {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("autocomplete.list.gap"),`;
    padding: `).concat(n("autocomplete.list.padding"),`;
}

.p-autocomplete-option {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: `).concat(n("autocomplete.option.padding"),`;
    border: 0 none;
    color: `).concat(n("autocomplete.option.color"),`;
    background: transparent;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),`;
    border-radius: `).concat(n("autocomplete.option.border.radius"),`;
}

.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {
    background: `).concat(n("autocomplete.option.focus.background"),`;
    color: `).concat(n("autocomplete.option.focus.color"),`;
}

.p-autocomplete-option-selected {
    background: `).concat(n("autocomplete.option.selected.background"),`;
    color: `).concat(n("autocomplete.option.selected.color"),`;
}

.p-autocomplete-option-selected.p-focus {
    background: `).concat(n("autocomplete.option.selected.focus.background"),`;
    color: `).concat(n("autocomplete.option.selected.focus.color"),`;
}

.p-autocomplete-option-group {
    margin: 0;
    padding: `).concat(n("autocomplete.option.group.padding"),`;
    color: `).concat(n("autocomplete.option.group.color"),`;
    background: `).concat(n("autocomplete.option.group.background"),`;
    font-weight: `).concat(n("autocomplete.option.group.font.weight"),`;
}

.p-autocomplete-input-multiple {
    margin: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(`).concat(n("autocomplete.padding.y")," / 2) ").concat(n("autocomplete.padding.x"),`;
    gap: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    color: `).concat(n("autocomplete.color"),`;
    background: `).concat(n("autocomplete.background"),`;
    border: 1px solid `).concat(n("autocomplete.border.color"),`;
    border-radius: `).concat(n("autocomplete.border.radius"),`;
    width: 100%;
    transition: background `).concat(n("autocomplete.transition.duration"),", color ").concat(n("autocomplete.transition.duration"),", border-color ").concat(n("autocomplete.transition.duration"),", outline-color ").concat(n("autocomplete.transition.duration"),", box-shadow ").concat(n("autocomplete.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("autocomplete.shadow"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.hover.border.color"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.focus.border.color"),`;
    box-shadow: `).concat(n("autocomplete.focus.ring.shadow"),`;
    outline: `).concat(n("autocomplete.focus.ring.width")," ").concat(n("autocomplete.focus.ring.style")," ").concat(n("autocomplete.focus.ring.color"),`;
    outline-offset: `).concat(n("autocomplete.focus.ring.offset"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    border-color: `).concat(n("autocomplete.invalid.border.color"),`;
}

.p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.background"),`;
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: `).concat(n("autocomplete.filled.hover.background"),`;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {
    background: `).concat(n("autocomplete.filled.focus.background"),`;
}

.p-autocomplete.p-disabled .p-autocomplete-input-multiple {
    opacity: 1;
    background: `).concat(n("autocomplete.disabled.background"),`;
    color: `).concat(n("autocomplete.disabled.color"),`;
}

.p-autocomplete-chip.p-chip {
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    border-radius: `).concat(n("autocomplete.chip.border.radius"),`;
}

.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {
    padding-inline-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-inline-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {
    background: `).concat(n("autocomplete.chip.focus.background"),`;
    color: `).concat(n("autocomplete.chip.focus.color"),`;
}

.p-autocomplete-input-chip {
    flex: 1 1 auto;
    display: inline-flex;
    padding-block-start: calc(`).concat(n("autocomplete.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("autocomplete.padding.y"),` / 2);
}

.p-autocomplete-input-chip input {
    border: 0 none;
    outline: 0 none;
    background: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: inherit;
}

.p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.placeholder.color"),`;
}

.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {
    color: `).concat(n("autocomplete.invalid.placeholder.color"),`;
}

.p-autocomplete-empty-message {
    padding: `).concat(n("autocomplete.empty.message.padding"),`;
}

.p-autocomplete-fluid {
    display: flex;
}

.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {
    width: 1%;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.sm.width"),`;
}

.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.sm.font.size"),`;
    width: `).concat(n("form.field.sm.font.size"),`;
    height: `).concat(n("form.field.sm.font.size"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {
    width: `).concat(n("autocomplete.dropdown.lg.width"),`;
}

.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {
    font-size: `).concat(n("form.field.lg.font.size"),`;
    width: `).concat(n("form.field.lg.font.size"),`;
    height: `).concat(n("form.field.lg.font.size"),`;
}
`)},Rt={root:{position:"relative"}},$t={root:function(e){var n=e.instance,o=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-invalid":n.$invalid,"p-focus":n.focused,"p-inputwrapper-filled":n.$filled||oe(n.inputValue),"p-inputwrapper-focus":n.focused,"p-autocomplete-open":n.overlayVisible,"p-autocomplete-fluid":n.$fluid}]},pcInputText:"p-autocomplete-input",inputMultiple:function(e){e.props;var n=e.instance;return["p-autocomplete-input-multiple",{"p-variant-filled":n.$variant==="filled"}]},chipItem:function(e){var n=e.instance,o=e.i;return["p-autocomplete-chip-item",{"p-focus":n.focusedMultipleOptionIndex===o}]},pcChip:"p-autocomplete-chip",chipIcon:"p-autocomplete-chip-icon",inputChip:"p-autocomplete-input-chip",loader:"p-autocomplete-loader",dropdown:"p-autocomplete-dropdown",overlay:"p-autocomplete-overlay p-component",listContainer:"p-autocomplete-list-container",list:"p-autocomplete-list",optionGroup:"p-autocomplete-option-group",option:function(e){var n=e.instance,o=e.option,a=e.i,i=e.getItemOptions;return["p-autocomplete-option",{"p-autocomplete-option-selected":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(a,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},jt=le.extend({name:"autocomplete",theme:Bt,classes:$t,inlineStyles:Rt}),Ht={name:"BaseAutoComplete",extends:ut,props:{suggestions:{type:Array,default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:[String,Object],default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayClass:{type:[String,Object],default:null},dropdownIcon:{type:String,default:null},dropdownClass:{type:[String,Object],default:null},loader:{type:String,default:null},loadingIcon:{type:String,default:null},removeTokenIcon:{type:String,default:null},chipIcon:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},showEmptyMessage:{type:Boolean,default:!0},tabindex:{type:Number,default:0},typeahead:{type:Boolean,default:!0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:jt,provide:function(){return{$pcAutoComplete:this,$parentInstance:this}}};function de(t){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de(t)}function Se(t){return Wt(t)||Gt(t)||Nt(t)||Ut()}function Ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nt(t,e){if(t){if(typeof t=="string")return pe(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pe(t,e):void 0}}function Gt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wt(t){if(Array.isArray(t))return pe(t)}function pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var je={name:"AutoComplete",extends:Ht,inheritAttrs:!1,emits:["change","focus","blur","item-select","item-unselect","option-select","option-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],inject:{$pcFluid:{default:null}},outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,dirty:!1,data:function(){return{id:this.$attrs.id,clicked:!1,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||se()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1,!this.showEmptyMessage&&this.visibleOptions.length===0&&this.hide()),this.autoUpdateModel()}},mounted:function(){this.id=this.id||se(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(W.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.optionLabel?Z(e,this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?Z(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,a){return this.ptm(a,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?Z(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return Z(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return Z(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},hide:function(e){var n=this,o=function(){var i;n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.clicked=!1,n.focusedOptionIndex=-1,e&&P(n.multiple?n.$refs.focusInput:(i=n.$refs.focusInput)===null||i===void 0?void 0:i.$el)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var n,o;this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}this.clicked=!1},onInput:function(e){var n=this;if(this.typeahead){this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,o,"input")},this.delay)):this.hide()}},onChange:function(e){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions&&!this.multiple){var a=this.multiple?this.$refs.focusInput.value:this.$refs.focusInput.$el.value,i=this.visibleOptions.find(function(m){return n.isOptionMatched(m,a||"")});i!==void 0&&(o=!0,!this.isSelected(i)&&this.onOptionSelect(e,i))}o||(this.multiple?this.$refs.focusInput.value="":this.$refs.focusInput.$el.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.clicked=!0,!(this.disabled||this.searching||this.loading||this.isDropdownClicked(e))&&(!this.overlay||!this.overlay.contains(e.target))&&P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},onDropdownClick:function(e){var n=void 0;if(this.overlayVisible)this.hide(!0);else{var o=this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el;P(o),n=o.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")}this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,a=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(Se(this.d_value||[]),[a]))):this.updateModel(e,a),this.$emit("item-select",{originalEvent:e,value:n}),this.$emit("option-select",{originalEvent:e,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){Fe.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(Ye(n.value)&&this.$filled?(P(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.d_value.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.typeahead?this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)):this.multiple&&(this.updateModel(e,[].concat(Se(this.d_value||[]),[e.target.value])),this.$refs.focusInput.value=""),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(oe(this.d_value)&&!this.$refs.focusInput.value){var n=this.d_value[this.d_value.length-1],o=this.d_value.slice(0,-1);this.writeValue(o,e),this.$emit("item-unselect",{originalEvent:e,value:n}),this.$emit("option-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.d_value.length-1&&(this.focusedMultipleOptionIndex=-1,P(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){W.set("overlay",e,this.$primevue.config.zIndex.overlay),Ae(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){W.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput.$el;this.appendTo==="self"?_e(this.overlay,e):(this.overlay.style.minWidth=ne(e)+"px",Te(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new Ve(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!Ee()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput.$el},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.contains(e.target):!1},isOptionMatched:function(e,n){var o;return this.isValidOption(e)&&((o=this.getOptionLabel(e))===null||o===void 0?void 0:o.toLocaleLowerCase(this.searchLocale))===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return oe(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,n){return et(e,n,this.equalityKey)},isSelected:function(e){var n=this,o=this.getOptionValue(e);return this.multiple?(this.d_value||[]).some(function(a){return n.isEquals(a,o)}):this.isEquals(this.d_value,this.getOptionValue(e))},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return Ie(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(a){return n.isValidOption(a)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?Ie(this.visibleOptions.slice(0,e),function(a){return n.isValidOption(a)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var o=this,a=this.d_value[n],i=this.d_value.filter(function(m,S){return S!==n}).map(function(m){return o.getOptionValue(m)});this.updateModel(e,i),this.$emit("item-unselect",{originalEvent:e,value:a}),this.$emit("option-unselect",{originalEvent:e,value:a}),this.dirty=!0,P(this.multiple?this.$refs.focusInput:this.$refs.focusInput.$el)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=n!==-1?"".concat(e.id,"_").concat(n):e.focusedOptionId,a=ce(e.list,'li[id="'.concat(o,'"]'));a?a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.writeValue(n,e),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,a,i){o.push({optionGroup:a,group:!0,index:i});var m=n.getOptionGroupChildren(a);return m&&m.forEach(function(S){return o.push(S)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(this.$filled)if(de(this.d_value)==="object"){var e=this.getOptionLabel(this.d_value);return e??this.d_value}else return this.d_value;else return""},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return oe(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.multiple?this.d_value.length:"1"):this.emptySelectionMessageText},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},panelId:function(){return this.id+"_panel"}},components:{InputText:at,VirtualScroller:st,Portal:Pe,ChevronDownIcon:ct,SpinnerIcon:Je,Chip:$e},directives:{ripple:he}};function Q(t){"@babel/helpers - typeof";return Q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q(t)}function xe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function Me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xe(Object(n),!0).forEach(function(o){qt(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function qt(t,e,n){return(e=Zt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zt(t){var e=Jt(t,"string");return Q(e)=="symbol"?e:e+""}function Jt(t,e){if(Q(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(Q(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Qt=["aria-activedescendant"],Xt=["id","aria-label","aria-setsize","aria-posinset"],Yt=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],_t=["disabled","aria-expanded","aria-controls"],en=["id"],tn=["id","aria-label"],nn=["id"],on=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focus","data-p-disabled"];function an(t,e,n,o,a,i){var m=R("InputText"),S=R("Chip"),h=R("SpinnerIcon"),O=R("VirtualScroller"),L=R("Portal"),D=Ke("ripple");return l(),u("div",s({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[11]||(e[11]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptmi("root")),[t.multiple?f("",!0):(l(),E(m,{key:0,ref:"focusInput",id:t.inputId,type:"text",name:t.$formName,class:H([t.cx("pcInputText"),t.inputClass]),style:tt(t.inputStyle),value:i.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,fluid:t.$fluid,disabled:t.disabled,size:t.size,invalid:t.invalid,variant:t.variant,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":i.panelId,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onInput:i.onInput,onChange:i.onChange,unstyled:t.unstyled,pt:t.ptm("pcInputText")},null,8,["id","name","class","style","value","placeholder","tabindex","fluid","disabled","size","invalid","variant","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","onFocus","onBlur","onKeydown","onInput","onChange","unstyled","pt"])),t.multiple?(l(),u("ul",s({key:1,ref:"multiContainer",class:t.cx("inputMultiple"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":a.focused?i.focusedMultipleOptionId:void 0,onFocus:e[5]||(e[5]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:e[7]||(e[7]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)})},t.ptm("inputMultiple")),[(l(!0),u($,null,ae(t.d_value,function(w,b){return l(),u("li",s({key:"".concat(b,"_").concat(i.getOptionLabel(w)),id:a.id+"_multiple_option_"+b,class:t.cx("chipItem",{i:b}),role:"option","aria-label":i.getOptionLabel(w),"aria-selected":!0,"aria-setsize":t.d_value.length,"aria-posinset":b+1,ref_for:!0},t.ptm("chipItem")),[I(t.$slots,"chip",s({class:t.cx("pcChip"),value:w,index:b,removeCallback:function(K){return i.removeOption(K,b)},ref_for:!0},t.ptm("pcChip")),function(){return[y(S,{class:H(t.cx("pcChip")),label:i.getOptionLabel(w),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(K){return i.removeOption(K,b)},pt:t.ptm("pcChip")},{removeicon:v(function(){return[I(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:H(t.cx("chipIcon")),index:b,removeCallback:function(K){return i.removeOption(K,b)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16,Xt)}),128)),c("li",s({class:t.cx("inputChip"),role:"option"},t.ptm("inputChip")),[c("input",s({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":a.overlayVisible,"aria-controls":a.id+"_list","aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[4]||(e[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},t.ptm("input")),null,16,Yt)],16)],16,Qt)):f("",!0),a.searching||t.loading?I(t.$slots,t.$slots.loader?"loader":"loadingicon",{key:2,class:H(t.cx("loader"))},function(){return[t.loader||t.loadingIcon?(l(),u("i",s({key:0,class:["pi-spin",t.cx("loader"),t.loader,t.loadingIcon],"aria-hidden":"true"},t.ptm("loader")),null,16)):(l(),E(h,s({key:1,class:t.cx("loader"),spin:"","aria-hidden":"true"},t.ptm("loader")),null,16,["class"]))]}):f("",!0),I(t.$slots,t.$slots.dropdown?"dropdown":"dropdownbutton",{toggleCallback:function(b){return i.onDropdownClick(b)}},function(){return[t.dropdown?(l(),u("button",s({key:0,ref:"dropdownButton",type:"button",class:[t.cx("dropdown"),t.dropdownClass],disabled:t.disabled,"aria-haspopup":"listbox","aria-expanded":a.overlayVisible,"aria-controls":i.panelId,onClick:e[8]||(e[8]=function(){return i.onDropdownClick&&i.onDropdownClick.apply(i,arguments)})},t.ptm("dropdown")),[I(t.$slots,"dropdownicon",{class:H(t.dropdownIcon)},function(){return[(l(),E(J(t.dropdownIcon?"span":"ChevronDownIcon"),s({class:t.dropdownIcon},t.ptm("dropdownIcon")),null,16,["class"]))]})],16,_t)):f("",!0)]}),c("span",s({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),T(i.searchResultMessageText),17),y(L,{appendTo:t.appendTo},{default:v(function(){return[y(De,s({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:v(function(){return[a.overlayVisible?(l(),u("div",s({key:0,ref:i.overlayRef,id:i.panelId,class:[t.cx("overlay"),t.panelClass,t.overlayClass],style:Me(Me({},t.panelStyle),t.overlayStyle),onClick:e[9]||(e[9]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[10]||(e[10]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},t.ptm("overlay")),[I(t.$slots,"header",{value:t.d_value,suggestions:i.visibleOptions}),c("div",s({class:t.cx("listContainer"),style:{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[y(O,s({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),nt({content:v(function(w){var b=w.styleClass,U=w.contentRef,K=w.items,x=w.getItemOptions,re=w.contentStyle,j=w.itemSize;return[c("ul",s({ref:function(C){return i.listRef(C,U)},id:a.id+"_list",class:[t.cx("list"),b],style:re,role:"listbox","aria-label":i.listAriaLabel},t.ptm("list")),[(l(!0),u($,null,ae(K,function(g,C){return l(),u($,{key:i.getOptionRenderKey(g,i.getOptionIndex(C,x))},[i.isOptionGroup(g)?(l(),u("li",s({key:0,id:a.id+"_"+i.getOptionIndex(C,x),style:{height:j?j+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[I(t.$slots,"optiongroup",{option:g.optionGroup,index:i.getOptionIndex(C,x)},function(){return[ie(T(i.getOptionGroupLabel(g.optionGroup)),1)]})],16,nn)):me((l(),u("li",s({key:1,id:a.id+"_"+i.getOptionIndex(C,x),style:{height:j?j+"px":void 0},class:t.cx("option",{option:g,i:C,getItemOptions:x}),role:"option","aria-label":i.getOptionLabel(g),"aria-selected":i.isSelected(g),"aria-disabled":i.isOptionDisabled(g),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(C,x)),onClick:function(q){return i.onOptionSelect(q,g)},onMousemove:function(q){return i.onOptionMouseMove(q,i.getOptionIndex(C,x))},"data-p-selected":i.isSelected(g),"data-p-focus":a.focusedOptionIndex===i.getOptionIndex(C,x),"data-p-disabled":i.isOptionDisabled(g),ref_for:!0},i.getPTOptions(g,x,C,"option")),[I(t.$slots,"option",{option:g,index:i.getOptionIndex(C,x)},function(){return[ie(T(i.getOptionLabel(g)),1)]})],16,on)),[[D]])],64)}),128)),t.showEmptyMessage&&(!K||K&&K.length===0)?(l(),u("li",s({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[I(t.$slots,"empty",{},function(){return[ie(T(i.searchResultMessageText),1)]})],16)):f("",!0)],16,tn)]}),_:2},[t.$slots.loader?{name:"loader",fn:v(function(w){var b=w.options;return[I(t.$slots,"loader",{options:b})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"])],16),I(t.$slots,"footer",{value:t.d_value,suggestions:i.visibleOptions}),c("span",s({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),T(i.selectedMessageText),17)],16,en)):f("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}je.render=an;const sn={class:"bg-white"},ln={class:"container mx-auto px-2 py-4"},rn={class:"md:hidden flex items-center justify-between w-full"},cn={class:"flex-row justify-center"},un={class:"flex items-center w-full"},dn=["alt","src"],pn={class:"w-full"},hn={class:"hidden md:flex items-center"},fn={class:"mr-auto md:w-48 flex-shrink-0"},mn={class:"w-full bg-red flex justify-center items-center py-4"},bn={class:"relative flex items-center w-"},gn={class:"flex items-center w-full"},yn=["alt","src"],vn={class:"w-full"},On={class:"hidden md:flex lg:flex w-1/5 justify-between items-center p-4"},In={class:"ml-4 hidden sm:flex flex-col font-bold"},En={__name:"Navbar",props:{},emits:["update:searchTerm"],setup(t,{emit:e}){const n=we(),o=ke(),a=B(""),i=B([]);B(!1);const m=B([]),S=N(()=>n.cartCount),h=N(()=>n.cartTotal),O=B([]),L=N(()=>n.wishListCount),D=it(),{$formatPrice:w}=G(),b=B(),U=d=>{b.value.toggle(d)},K=async()=>{try{await n.getCategories(),m.value=n.categories}catch(d){console.error("Error fetching categories:",d)}},x=d=>w(d),re=B(0),j=d=>{console.log("ree",d),!i.value||!i.value.id?D.push({path:`/products/${d.value.id}`}):D.push({path:`/results/${i.value.id}`,query:{searchTerm:a.value.name,productId:d.value.id}})},g=async()=>{try{const{$axios:d}=G(),r=await d.get("/product",{params:{searchTerm:a.value}})}catch(d){console.error("Error fetching products:",d)}},C=async()=>{try{const{$axios:d}=G(),r=await d.get("/product/cart"),k=100;re.value=r.data.reduce((V,z)=>V+z.quantity*k,0)}catch(d){console.error("Error fetching cart items:",d)}},X=async d=>{var V,z;let r=d.query;O.value=[];const{$axios:k}=G();if(r)try{let A;const Y=Array.isArray(i==null?void 0:i.value)?i.value.filter(F=>F.id!==null).map(F=>F.id):(V=i==null?void 0:i.value)!=null&&V.id&&i.value.id!==null?[i.value.id]:[],_="https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";if(Y.length>0)A=await k.get("/product",{params:{searchTerm:r,categoryId:Y}}),console.log("response: ",A.data.results),O.value=A.data.results.flatMap(F=>F.models.map(M=>({id:M.id,name:`${F.name} - (${M.name})`,images:M.images.length>0?M.images.map(p=>p.autoCropUrl):[_]})));else{A=await k.get("/product/product-models",{params:{searchTerm:r}});const F=((z=A.data)==null?void 0:z.results)??[];O.value=F.map(M=>{var p,ee,Oe;return{id:M.id,name:M.product.name,price:M.price,category:((Oe=(ee=(p=M.product)==null?void 0:p.subCategory)==null?void 0:ee.category)==null?void 0:Oe.name)??"Unknown",images:M.images.length>0?M.images.map(qe=>qe.autoCropUrl):[_]}})}}catch(A){console.error("Error fetching products:",A)}},q=()=>o.logout(),He=async()=>{if(o.isLoggedIn)if(typeof window<"u"){const d=localStorage.getItem("wishlist"),r=d?JSON.parse(d):[];if(console.log("Wishlist IDs:",r),Array.isArray(r)&&r.length>0){for(let k=0;k<r.length;k++)We(r[k]);localStorage.removeItem("wishlist")}else console.log("Wishlist is empty or invalid.");return!0}else return console.error("LocalStorage is not available in the current context."),!1;else return console.log("No token found. User is not logged in."),!1},ge=()=>{D.push({path:"/wishlist"})},ye=()=>{D.push({path:"/cart"})},ve=()=>{D.push({path:"/my-account"})},Ue=N(()=>`Welcome ${o.isLoggedIn?o.user.firstName:"User"}`),Ne=B([{label:Ue,items:[{label:"My Account",icon:"pi pi-user",command:ve},{label:"Wishlist",icon:"pi pi-heart",command:ge,badge:N(()=>L.value>0?L.value:null)},{label:"Cart",icon:"pi pi-shopping-cart",command:ye,badge:N(()=>h.value>0?h.value:null)},{label:"Log out",icon:"pi pi-sign-out",command:q}]}]),Ge=async()=>{try{const{$axios:d}=G(),r=await d.get("/product/wishlist")}catch(d){console.error("Error fetching wishlist:",d);const r=JSON.parse(localStorage.getItem("wishlist"))||[];L.value=r.length}},We=async d=>{const r=we();ke();const{res:k}=await r.addToWishlist(d);console.log(k,"Wishlist"),await r.getWishList();try{const{$axios:V}=G(),z={productId:d},A=await V.post("/product/wishlist/add",z);console.log("Done",A)}catch(V){console.error("Error adding product to wishlist:",V)}};return ot(async()=>{await n.getProducts(),await n.getCategories(),await n.getCartItems(),await n.getWishList(),await He(),await C(),await Ge(),await K()}),(d,r)=>{const k=Ze,V=je,z=Qe,A=fe,Y=Re,_=lt,F=ze,M=he;return l(),u("header",sn,[c("div",ln,[c("div",rn,[y(k,{to:"/dashboard"},{default:v(()=>r[3]||(r[3]=[c("img",{src:Le,alt:"Hikvision Logo",class:"h-16 object-contain"},null,-1)])),_:1}),c("div",cn,[y(V,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=p=>a.value=p),onInput:g,suggestions:O.value,onComplete:X,optionLabel:"name",placeholder:"I'm Searching for ...",class:"flex-grow mx-2 p-input-icon-left",onItemSelect:j},{option:v(p=>[c("div",un,[c("img",{alt:p.option.name,src:p.option.images,class:"mr-2 rounded-md",style:{width:"40px",height:"40px","object-fit":"cover"}},null,8,dn),c("div",pn,T(p.option.name),1)])]),_:1},8,["modelValue","suggestions"])]),y(z,{type:"button",icon:"pi pi-bars",onClick:U,"aria-haspopup":"true","aria-controls":"overlay_menu",class:"bg-transparent border-none shadow-none p-2 text-black"}),y(Y,{ref_key:"menu",ref:b,id:"overlay_menu",model:Ne.value,popup:!0,class:"wmd:w-60"},{item:v(({item:p,props:ee})=>[me((l(),u("a",s({class:"flex items-center"},ee.action),[c("span",{class:H(p.icon)},null,2),c("span",null,T(p.label),1),p.badge?(l(),E(A,{key:0,class:"ml-auto",value:x(p.badge),severity:"warning"},null,8,["value"])):f("",!0),p.count?(l(),E(A,{key:1,class:"ml-auto",value:d.count,severity:"warning"},null,8,["value"])):f("",!0)],16)),[[M]])]),_:1},8,["model"])]),c("div",hn,[c("div",fn,[y(k,{to:"/dashboard"},{default:v(()=>r[4]||(r[4]=[c("img",{src:Le,alt:"Hikvision Logo",class:"h-20 object-contain"},null,-1)])),_:1})]),c("div",mn,[c("div",bn,[y(_,{modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=p=>i.value=p),options:m.value,optionLabel:"name",placeholder:"Choose Category",class:"min-w-[150px] z-10 rounded-l-md mr-3 border-l"},null,8,["modelValue","options"]),y(V,{modelValue:a.value,"onUpdate:modelValue":r[2]||(r[2]=p=>a.value=p),onInput:g,suggestions:O.value,onComplete:X,optionLabel:"name",placeholder:"I'm Searching for ...",class:"flex-grow p-input-icon-left border-l-10 border-r-0",onItemSelect:j},{dropdownicon:v(()=>r[5]||(r[5]=[c("i",{class:"pi pi-chevron-down text-gray-500"},null,-1)])),option:v(p=>[c("div",gn,[c("img",{alt:p.option.name,src:p.option.images,class:"mr-2 rounded-md",style:{width:"40px",height:"40px","object-fit":"cover"}},null,8,yn),c("div",vn,T(p.option.name),1)])]),_:1},8,["modelValue","suggestions"])])]),c("nav",On,[y(k,{onClick:ve,class:"cursor-pointer"},{default:v(()=>r[6]||(r[6]=[c("i",{class:"pi pi-user text-3xl"},null,-1)])),_:1}),y(k,{onClick:ge,class:"cursor-pointer"},{default:v(()=>[y(F,{value:L.value,severity:"danger"},{default:v(()=>r[7]||(r[7]=[c("i",{class:"pi pi-heart text-3xl"},null,-1)])),_:1},8,["value"])]),_:1}),y(k,{onClick:ye,class:"cursor-pointer"},{default:v(()=>[y(F,{value:S.value,severity:"danger"},{default:v(()=>r[8]||(r[8]=[c("i",{class:"pi pi-shopping-cart text-3xl"},null,-1)])),_:1},8,["value"])]),_:1})]),c("div",In,[r[9]||(r[9]=c("span",{class:"text-xs text-gray-400"},"My Cart",-1)),c("span",null,"Ksh "+T(x(h.value)),1)])])]),r[10]||(r[10]=c("hr",null,null,-1))])}}};export{En as _};
