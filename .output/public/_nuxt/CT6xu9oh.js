import{s as $}from"./C06VtzUx.js";import{_ as B,H as k,aH as T,r as m,R as j,c as l,a as e,F as u,m as p,t as r,N as C,S as w,b as z,E as g,u as y,G as A,o as a}from"./Fo99IELK.js";import"./CTeCqoQn.js";import"./BsLrv4kJ.js";import"./C4pemyIi.js";const N={class:"container mx-auto p-6"},S={key:0,class:"grid grid-cols-1 md:grid-cols-2 gap-8"},E={class:"flex flex-col items-center"},H=["src"],V={class:"grid grid-cols-5 gap-2"},q=["src","onClick"],F={class:"flex flex-col space-y-4"},Y={class:"text-3xl font-bold"},G={class:"text-lg text-gray-700 font-medium"},K={class:"flex items-center space-x-4"},W={class:"flex items-center space-x-4"},J={key:1,class:"mt-8"},O={class:"flex space-x-8 border-b pb-2"},Q={key:0,class:"mt-6 space-y-6"},X=["innerHTML"],Z={key:1,class:"mt-6 space-y-8"},ee={class:"flex items-center space-x-4"},se=["src"],te={class:"font-bold text-gray-800"},oe={class:"text-sm text-gray-500"},le={class:"flex space-x-1 mt-1"},ae=["fill"],re={class:"mt-4 text-gray-800"},ne={class:"flex items-center space-x-4 text-gray-500 text-sm mt-2"},ie={key:2,class:"mt-6 space-y-6"},de={class:"flex items-start space-x-4"},ce={class:"flex-1"},ue={class:"flex items-center space-x-4"},pe=["src"],me={class:"font-bold text-gray-800"},ge={class:"text-sm text-gray-500"},ve={class:"mt-2 text-gray-700"},xe={class:"flex items-center space-x-4 text-gray-500 text-sm mt-2"},_e=["onClick"],fe={key:0,class:"mt-4 pl-6 border-l"},ye={class:"flex items-center space-x-4"},be=["src"],he={class:"font-bold text-gray-800"},ke={class:"text-sm text-gray-500"},Ce={class:"mt-2 text-gray-700"},we={key:2,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"},De={__name:"[id]",setup(Ie){const{$formatPrice:D}=k(),I=o=>D(o),b=T(),_=m(1),c=m("details"),U=[{id:1,name:"Helen Mwoki.",date:"Yesterday",rating:5,comment:"Excellent gamepad!",likes:42,replies:0,avatar:"https://via.placeholder.com/40"},{id:1,name:"Susan Njeri M.",date:"Yesterday",rating:5,comment:"Besst Product ever !",likes:42,replies:0,avatar:"https://via.placeholder.com/40"}],d=m(null);m(!1);const v=m(!1),{$axios:h}=k();j(()=>{R()});const L=o=>{d.value.image=o},M=o=>o?o.replace(/\r\n/g,"<br>"):"",P=async()=>{let t=A().user;v.value=!0;const n=b.params.id;try{const s={productModelId:n,quantity:_.value,userId:t.id},i=await h.post("/product/cart/add",s);v.value=!1}catch(s){v.value=!1,console.error("Error adding product to cart:",s)}},R=async()=>{var t;const o=b.params.id;try{const n=await h.get(`product/model/by-id/${o}`),s=(t=n.data.images.find(x=>x.isPrimary))==null?void 0:t.optimizeUrl,i=n.data.images.map(x=>x.optimizeUrl);d.value={...n.data,image:s,images:n.data.images,description:n.data.description,colors:n.data.colors},console.log("Updated Product:",d.value)}catch(n){console.error("Error fetching product by ID:",n)}},f=o=>({"text-black border-b-2 border-black":c.value===o,"text-gray-600":c.value!==o});return(o,t)=>{const n=$;return a(),l("div",N,[t[11]||(t[11]=e("h1",{class:"text-2xl font-semibold mb-6"},"Product Details",-1)),d.value?(a(),l("div",S,[e("div",E,[e("img",{src:d.value.image,alt:"Product Image",class:"w-full h-full object-cover mb-4 border rounded-lg"},null,8,H),e("div",V,[(a(!0),l(u,null,p(d.value.images,(s,i)=>(a(),l("img",{key:i,src:s.autoCropUrl,alt:"Thumbnail",onClick:x=>L(s.autoCropUrl),class:"w-16 h-16 object-cover border rounded-lg cursor-pointer hover:border-gray-500"},null,8,q))),128))])]),e("div",F,[e("h2",Y,r(d.value.name),1),e("p",G," Ksh "+r(I(d.value.price)),1),t[6]||(t[6]=e("p",{class:"text-gray-600 leading-relaxed"},null,-1)),e("div",K,[(a(!0),l(u,null,p(d.value.features,s=>(a(),l("p",null,r(s.description),1))),256))]),e("div",W,[C(e("input",{type:"number",min:"1","onUpdate:modelValue":t[0]||(t[0]=s=>_.value=s),class:"w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"},null,512),[[w,_.value]]),z(n,{onClick:P,loading:v.value,label:"Add to Cart"},null,8,["loading"])])])])):g("",!0),d.value?(a(),l("div",J,[e("div",O,[e("h3",{class:y(["cursor-pointer text-lg font-semibold",f("details")]),onClick:t[1]||(t[1]=s=>c.value="details")}," Details ",2),e("h3",{class:y(["cursor-pointer text-lg font-semibold",f("reviews")]),onClick:t[2]||(t[2]=s=>c.value="reviews")}," Reviews ",2),e("h3",{class:y(["cursor-pointer text-lg font-semibold",f("discussion")]),onClick:t[3]||(t[3]=s=>c.value="discussion")}," Discussion ",2)]),c.value==="details"?(a(),l("div",Q,[e("p",{innerHTML:M(d.value.description)},null,8,X)])):g("",!0),c.value==="reviews"?(a(),l("div",Z,[(a(),l(u,null,p(U,s=>e("div",{key:s.id,class:"border-b pb-4"},[e("div",ee,[e("img",{src:s.avatar,alt:"User Avatar",class:"w-10 h-10 rounded-full"},null,8,se),e("div",null,[e("h4",te,r(s.name),1),e("p",oe,r(s.date),1),e("div",le,[(a(),l(u,null,p(5,i=>e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:i<=s.rating?"currentColor":"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-4 h-4 text-yellow-400"},t[7]||(t[7]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"},null,-1)]),8,ae)),64))])])]),e("p",re,r(s.comment),1),e("div",ne,[t[8]||(t[8]=e("span",{class:"cursor-pointer hover:text-gray-700"},"Reply",-1)),e("span",null,"Likes: "+r(s.likes),1),e("span",null,"Replies: "+r(s.replies),1)])])),64))])):g("",!0),c.value==="discussion"?(a(),l("div",ie,[t[9]||(t[9]=e("h2",{class:"text-2xl font-bold text-gray-800"},"Discussion",-1)),e("div",de,[e("div",ce,[C(e("textarea",{"onUpdate:modelValue":t[4]||(t[4]=s=>o.newComment=s),placeholder:"Write your comment...",rows:"3",class:"w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"},null,512),[[w,o.newComment]]),e("button",{onClick:t[5]||(t[5]=(...s)=>o.addComment&&o.addComment(...s)),class:"mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"}," Post Comment ")])]),(a(!0),l(u,null,p(o.discussionComments,s=>(a(),l("div",{key:s.id,class:"border-b pb-4"},[e("div",ue,[e("img",{src:s.avatar,alt:"User Avatar",class:"w-10 h-10 rounded-full"},null,8,pe),e("div",null,[e("h4",me,r(s.name),1),e("p",ge,r(s.date),1)])]),e("p",ve,r(s.content),1),e("div",xe,[e("span",{onClick:i=>o.replyToComment(s.id),class:"cursor-pointer hover:text-gray-700"},"Reply",8,_e),e("span",null,"Likes: "+r(s.likes),1),e("span",null,"Replies: "+r(s.replies),1)]),s.replies&&s.replies.length?(a(),l("div",fe,[(a(!0),l(u,null,p(s.replies,i=>(a(),l("div",{key:i.id,class:"mt-2"},[e("div",ye,[e("img",{src:i.avatar,alt:"Reply Avatar",class:"w-8 h-8 rounded-full"},null,8,be),e("div",null,[e("h4",he,r(i.name),1),e("p",ke,r(i.date),1)])]),e("p",Ce,r(i.content),1)]))),128))])):g("",!0)]))),128))])):g("",!0)])):(a(),l("div",we,t[10]||(t[10]=[e("div",{class:"relative flex justify-center items-center"},[e("div",{class:"absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"}),e("img",{src:"https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png",class:"rounded-full h-24 w-24"})],-1)])))])}}},$e=B(De,[["__scopeId","data-v-843aa129"]]);export{$e as default};
