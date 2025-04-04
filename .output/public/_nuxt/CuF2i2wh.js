import{s as Z}from"./xEojK5qa.js";import{s as ss}from"./BzTX5z7n.js";import{s as es}from"./DgxndZkh.js";import{_ as ts,y as D,a2 as os,W as ls,x as rs,J as W,a3 as as,r as m,S as N,U as is,q as ns,c as a,b as I,w as U,a as s,t as i,F as p,m as g,N as j,X as B,d as L,I as x,u as w,a4 as ds,o as r,G as cs,v as R}from"./BFuEayTv.js";import"./BQcwvpTO.js";import"./DD3iEoG-.js";import"./DQDyEmLL.js";import"./CwoNcwO1.js";const us={class:"container mx-auto p-6"},ms=["href","onClick"],ps={class:"text-primary font-semibold"},gs=["href","target"],vs={class:"text-surface-700 dark:text-surface-0"},fs={key:0,class:"grid grid-cols-1 md:grid-cols-2 gap-8"},hs={class:"flex flex-col space-y-4"},_s={class:"text-3xl font-bold"},xs={class:"text-lg text-gray-700 font-medium"},ys={class:"flex items-center space-x-4"},bs={class:"flex items-center space-x-4"},ws={class:"text-gray-600"},ks=["loading"],Cs={key:0,class:"pi pi-heart cursor-pointer mr-2",style:{"font-size":"1.8rem"}},Is={key:1,class:"pi pi-heart-fill cursor-pointer mr-2",style:{"font-size":"1.8rem",color:"red"}},Ls={class:"mt-4 space-y-2"},Ps=["innerHTML"],Ts={class:"flexflex-col md:flex-row items-center"},Ss={class:"w-full h-96 mb-4 md:mb-0 md:mr-4 border rounded-lg overflow-hidden"},Ms=["src"],$s={class:"flex mt-8 md:flex-row gap-2 justify-center md:overflow-visible"},Ds=["src","onClick"],Ws={key:1,class:"mt-8"},Ns={class:"flex space-x-8 border-b pb-2"},Us={key:0,class:"mt-6 space-y-6"},js=["innerHTML"],Bs={key:1,class:"mt-6 space-y-8"},Rs={class:"flex items-center space-x-4"},As=["src"],zs={class:"font-bold text-gray-800"},Vs={class:"text-sm text-gray-500"},Hs={class:"flex space-x-1 mt-1"},Es=["fill"],Js={class:"mt-4 text-gray-800"},Os={class:"flex items-center space-x-4 text-gray-500 text-sm mt-2"},Ys={key:2,class:"mt-6 space-y-6"},qs={class:"flex items-start space-x-4"},Fs={class:"flex-1"},Ks={class:"flex items-center space-x-4"},Gs=["src"],Xs={class:"font-bold text-gray-800"},Qs={class:"text-sm text-gray-500"},Zs={class:"mt-2 text-gray-700"},se={class:"flex items-center space-x-4 text-gray-500 text-sm mt-2"},ee=["onClick"],te={key:0,class:"mt-4 pl-6 border-l"},oe={class:"flex items-center space-x-4"},le=["src"],re={class:"font-bold text-gray-800"},ae={class:"text-sm text-gray-500"},ie={class:"mt-2 text-gray-700"},ne={key:2,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"},de={class:"rounded-md pt-10"},ce={class:"flex overflow-x-auto gap-4 p-2"},ue=["onClick"],me={class:"relative"},pe=["src","alt"],ge={class:"text-sm font-medium mt-2 truncate"},ve={class:"text-gray-500 text-xs line-through"},fe={__name:"[id]",setup(he){const{$formatPrice:A}=D(),z=os(),P=o=>A(o),v=ls(),T=rs(),k=W(),V=as(),y=m(1),c=m("details");m([]);const S=N(()=>k.wishListItems),H=N(()=>k.products),E=o=>!o||!o.id?!1:T.isLoggedIn?S.value.some(l=>l.productModel.id===o.id):S.value.some(l=>l.id===o.id),J=[{id:1,name:"Helen Mwoki.",date:"Yesterday",rating:5,comment:"Excellent gamepad!",likes:42,replies:0,avatar:"https://via.placeholder.com/40"},{id:1,name:"Susan Njeri M.",date:"Yesterday",rating:5,comment:"Besst Product ever !",likes:42,replies:0,avatar:"https://via.placeholder.com/40"}],n=m(null);m(!1);const b=m(!1),{$axios:O}=D(),Y=o=>{z.push({path:`/products/${o.id}`})};is(()=>{G()});const q=o=>{n.value.image=o},M=o=>o?o.replace(/\r\n/g,"<br>"):"",F=async o=>{const t=W();try{if(T.isLoggedIn){const l=await t.addToWishlist(o.id);await t.getWishList(),v.add({severity:"success",summary:l.data.message,group:"br",life:3e3})}else{const l=JSON.parse(localStorage.getItem("wishlist"))||[],f=l.findIndex(u=>u.id===o.id);if(f===-1){const u={id:o.id,name:o.name,created_at:new Date().toISOString(),userId:"user.id",productModelId:o.id,productModel:{...o}};l.push(u),localStorage.setItem("wishlist",JSON.stringify(l)),await t.getWishList(),v.add({severity:"success",summary:"Your Wishlist has been saved locally.",group:"br",life:3e3})}else l.splice(f,1),localStorage.setItem("wishlist",JSON.stringify(l)),await t.getWishList(),v.add({severity:"info",summary:"The item has been removed from your local wishlist.",group:"br",life:3e3})}}catch(l){console.error("Error processing wishlist:",l),v.add({severity:"error",summary:"An error occurred while managing your wishlist.",detail:l.message,group:"br",life:5e3})}},K=async o=>{b.value=!0;try{await k.addToCart(o,y.value),v.add({severity:"success",summary:"Product Added to Cart",group:"br",life:3e3}),b.value=!1}catch{b.value=!1,v.add({severity:"danger",summary:"error adding to cart, Please try again",group:"br",life:3e3})}},G=async()=>{var t;const o=V.params.id;try{const l=await O.get(`product/model/by-id/${o}`),f=(t=l.data.images.find(h=>h.isPrimary))==null?void 0:t.uploadUrl,u=l.data.images.map(h=>h.uploadUrl);console.log("fd",u),n.value={...l.data,image:f,images:u,description:l.data.description,colors:l.data.colors},console.log("Updated Product:",n.value)}catch(l){console.error("Error fetching product by ID:",l)}},X=m({icon:"pi pi-home",route:"/dashboard"}),Q=m([{label:"Products",route:"/dashboard"}]),C=o=>({"text-black border-b-2 border-black":c.value===o,"text-gray-600":c.value!==o});return(o,t)=>{const l=ns("router-link"),f=es,u=ss,h=Z;return r(),a("div",us,[I(f,{home:X.value,model:Q.value},{item:U(({item:e,props:d})=>[e.route?(r(),cs(l,{key:0,to:e.route,custom:""},{default:U(({href:_,navigate:$})=>[s("a",R({href:_},d.action,{onClick:$}),[s("span",{class:w([e.icon,"text-color"])},null,2),s("span",ps,i(e.label),1)],16,ms)]),_:2},1032,["to"])):(r(),a("a",R({key:1,href:e.url,target:e.target},d.action),[s("span",vs,i(e.label),1)],16,gs))]),_:1},8,["home","model"]),n.value?(r(),a("div",fs,[s("div",hs,[s("h2",_s,i(n.value.name),1),s("p",xs," Ksh "+i(P(n.value.price)),1),t[11]||(t[11]=s("p",{class:"text-gray-600 leading-relaxed"},null,-1)),s("div",ys,[(r(!0),a(p,null,g(n.value.features,e=>(r(),a("p",null,i(e.description),1))),256))]),s("div",bs,[j(s("input",{type:"number",min:"1","onUpdate:modelValue":t[0]||(t[0]=e=>y.value=e),class:"w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"},null,512),[[B,y.value]]),s("p",ws,[t[8]||(t[8]=s("i",{class:"pi pi-wallet mr-4"},null,-1)),L(" Ksh "+i(P(n.value.price*y.value)),1)]),s("p",null,[s("button",{onClick:t[1]||(t[1]=e=>F(n.value)),loading:o.loadingWish},[E(n.value)?(r(),a("i",Is)):(r(),a("i",Cs))],8,ks)]),I(u,{onClick:t[2]||(t[2]=e=>K(n.value)),loading:b.value,label:"Add to Cart"},null,8,["loading"])]),s("div",Ls,[t[9]||(t[9]=s("p",{class:"text-bl font-bold"},[s("i",{class:"fas fa-truck"}),L(" Description ")],-1)),s("p",{class:"text-gray-600",innerHTML:M(n.value.description)},null,8,Ps),t[10]||(t[10]=s("p",{class:"text-gray-600"},[s("i",{class:"fas fa-undo"})],-1))])]),s("div",Ts,[s("div",Ss,[s("img",{src:n.value.image,alt:"Product Image",class:"w-full h-full object-contain"},null,8,Ms)]),s("div",$s,[(r(!0),a(p,null,g(n.value.images.slice(-4),(e,d)=>(r(),a("img",{key:d,src:e,alt:"Thumbnail",onClick:_=>q(e),class:"w-20 h-20 md:w-32 md:h-32 object-cover border rounded-lg cursor-pointer hover:border-gray-500"},null,8,Ds))),128))])])])):x("",!0),n.value?(r(),a("div",Ws,[s("div",Ns,[s("h3",{class:w(["cursor-pointer text-lg font-semibold",C("details")]),onClick:t[3]||(t[3]=e=>c.value="details")}," Details ",2),s("h3",{class:w(["cursor-pointer text-lg font-semibold",C("reviews")]),onClick:t[4]||(t[4]=e=>c.value="reviews")}," Reviews ",2),s("h3",{class:w(["cursor-pointer text-lg font-semibold",C("discussion")]),onClick:t[5]||(t[5]=e=>c.value="discussion")}," Discussion ",2)]),c.value==="details"?(r(),a("div",Us,[s("p",{innerHTML:M(n.value.description)},null,8,js)])):x("",!0),c.value==="reviews"?(r(),a("div",Bs,[(r(),a(p,null,g(J,e=>s("div",{key:e.id,class:"border-b pb-4"},[s("div",Rs,[s("img",{src:e.avatar,alt:"User Avatar",class:"w-10 h-10 rounded-full"},null,8,As),s("div",null,[s("h4",zs,i(e.name),1),s("p",Vs,i(e.date),1),s("div",Hs,[(r(),a(p,null,g(5,d=>s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:d<=e.rating?"currentColor":"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-4 h-4 text-yellow-400"},t[12]||(t[12]=[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"},null,-1)]),8,Es)),64))])])]),s("p",Js,i(e.comment),1),s("div",Os,[t[13]||(t[13]=s("span",{class:"cursor-pointer hover:text-gray-700"},"Reply",-1)),s("span",null,"Likes: "+i(e.likes),1),s("span",null,"Replies: "+i(e.replies),1)])])),64))])):x("",!0),c.value==="discussion"?(r(),a("div",Ys,[t[14]||(t[14]=s("h2",{class:"text-2xl font-bold text-gray-800"},"Discussion",-1)),s("div",qs,[s("div",Fs,[j(s("textarea",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.newComment=e),placeholder:"Write your comment...",rows:"3",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,512),[[B,o.newComment]]),s("button",{onClick:t[7]||(t[7]=(...e)=>o.addComment&&o.addComment(...e)),class:"mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"}," Post Comment ")])]),(r(!0),a(p,null,g(o.discussionComments,e=>(r(),a("div",{key:e.id,class:"border-b pb-4"},[s("div",Ks,[s("img",{src:e.avatar,alt:"User Avatar",class:"w-10 h-10 rounded-full"},null,8,Gs),s("div",null,[s("h4",Xs,i(e.name),1),s("p",Qs,i(e.date),1)])]),s("p",Zs,i(e.content),1),s("div",se,[s("span",{onClick:d=>o.replyToComment(e.id),class:"cursor-pointer hover:text-gray-700"},"Reply",8,ee),s("span",null,"Likes: "+i(e.likes),1),s("span",null,"Replies: "+i(e.replies),1)]),e.replies&&e.replies.length?(r(),a("div",te,[(r(!0),a(p,null,g(e.replies,d=>(r(),a("div",{key:d.id,class:"mt-2"},[s("div",oe,[s("img",{src:d.avatar,alt:"Reply Avatar",class:"w-8 h-8 rounded-full"},null,8,le),s("div",null,[s("h4",re,i(d.name),1),s("p",ae,i(d.date),1)])]),s("p",ie,i(d.content),1)]))),128))])):x("",!0)]))),128))])):x("",!0)])):(r(),a("div",ne,t[15]||(t[15]=[s("div",{class:"relative flex justify-center items-center"},[s("div",{class:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"}),s("img",{src:"https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png",class:"rounded-full h-24 w-24"})],-1)]))),s("section",null,[s("div",de,[t[17]||(t[17]=s("div",{class:"flex justify-between items-center mb-4"},[s("h2",{class:"text-xl font-semibold"},"Related Products")],-1)),s("div",ce,[(r(!0),a(p,null,g(ds(H),(e,d)=>{var _;return r(),a("div",{key:d,class:"min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2",onClick:$=>Y(e)},[s("div",me,[s("img",{src:(_=e.images[0])==null?void 0:_.uploadUrl,alt:e.name,class:"w-full h-36 object-cover rounded-md"},null,8,pe)]),L(" "+i(e.product.name)+" ",1),s("h3",ge,i(e.name),1),t[16]||(t[16]=s("p",{class:"text-lg font-semibold text-gray-900"},null,-1)),s("p",ve,i(e.oldPrice),1)],8,ue)}),128))])])]),I(h,{position:"bottom-right",group:"br"})])}}},Le=ts(fe,[["__scopeId","data-v-ea2e5087"]]);export{Le as default};
