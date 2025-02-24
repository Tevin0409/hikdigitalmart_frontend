import{s as I}from"./4Q_ng1LK.js";import{s as g}from"./7raQZ81m.js";import{B as C,v as i,o as a,c as o,G as u,u as B,H as p,I as s,t as w,q as h,a as O,F as f,m as L,s as P,b as v}from"./BUDlA4ll.js";var x=function(n){var t=n.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},N={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(n){var t=n.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},S=C.extend({name:"breadcrumb",theme:x,classes:N}),U={name:"BaseBreadcrumb",extends:g,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:S,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},y={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:g,props:{item:null,templates:null,index:null},methods:{onClick:function(n){this.item.command&&this.item.command({originalEvent:n,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var n=this.item,t=n.to,m=n.url,c=typeof window<"u"?window.location.pathname:"";return t===c||m===c?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var n=this;return{action:i({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(m){return n.onClick(m)}},this.ptm("itemLink",this.ptmOptions)),icon:i({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:i({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},M=["href","target","aria-current"];function R(e,n,t,m,c,r){return r.visible()?(a(),o("li",i({key:0,class:[e.cx("item"),t.item.class]},e.ptm("item",r.ptmOptions)),[t.templates.item?(a(),u(p(t.templates.item),{key:1,item:t.item,label:r.label(),props:r.getMenuItemProps},null,8,["item","label","props"])):(a(),o("a",i({key:0,href:t.item.url||"#",class:e.cx("itemLink"),target:t.item.target,"aria-current":r.isCurrentUrl(),onClick:n[0]||(n[0]=function(){return r.onClick&&r.onClick.apply(r,arguments)})},e.ptm("itemLink",r.ptmOptions)),[t.templates&&t.templates.itemicon?(a(),u(p(t.templates.itemicon),{key:0,item:t.item,class:B(e.cx("itemIcon",r.ptmOptions))},null,8,["item","class"])):t.item.icon?(a(),o("span",i({key:1,class:[e.cx("itemIcon"),t.item.icon]},e.ptm("itemIcon",r.ptmOptions)),null,16)):s("",!0),t.item.label?(a(),o("span",i({key:2,class:e.cx("itemLabel")},e.ptm("itemLabel",r.ptmOptions)),w(r.label()),17)):s("",!0)],16,M))],16)):s("",!0)}y.render=R;var V={name:"Breadcrumb",extends:U,inheritAttrs:!1,components:{BreadcrumbItem:y,ChevronRightIcon:I}};function A(e,n,t,m,c,r){var d=h("BreadcrumbItem"),k=h("ChevronRightIcon");return a(),o("nav",i({class:e.cx("root")},e.ptmi("root")),[O("ol",i({class:e.cx("list")},e.ptm("list")),[e.home?(a(),u(d,i({key:0,item:e.home,class:e.cx("homeItem"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):s("",!0),(a(!0),o(f,null,L(e.model,function(b,l){return a(),o(f,{key:b.label+"_"+l},[e.home||l!==0?(a(),o("li",i({key:0,class:e.cx("separator"),ref_for:!0},e.ptm("separator")),[P(e.$slots,"separator",{},function(){return[v(k,i({"aria-hidden":"true",class:e.cx("separatorIcon"),ref_for:!0},e.ptm("separatorIcon")),null,16,["class"])]})],16)):s("",!0),v(d,{item:b,index:l,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}V.render=A;export{V as s};
