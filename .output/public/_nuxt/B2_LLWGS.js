import{P as m,O as g,s as f}from"./B9G_npRq.js";import{_ as p,x as v,r as u,S as h,c as i,a as e,t as r,b as y,F as b,m as k,G as I,H as w,o as a,u as N}from"./B_B6csQg.js";import"./DN1lR6eg.js";import"./CbLU7av0.js";import"./BjBy4FSL.js";import"./BQVOLgXZ.js";import"./cBOMuV9J.js";import"./Cdcg9F6A.js";import"./BflVQlpL.js";const C={components:{Profile:m,Orders:g,TabMenu:f},setup(){const n=v(),s=u(0),l=u([{name:"Profile",label:"My Account",component:m},{name:"Orders",label:"My Orders",component:g}]),t=n.user||{firstName:"",lastName:"",email:""},d=h(()=>l.value[s.value].component);return{tabs:l,selectedIndex:s,activeComponent:d,logout:()=>n.logout(),userStore:n,user:t}}},P={class:"container mx-auto p-4"},j={class:"md:hidden mb-4"},B={class:"flex justify-center rounded-full p6"},M={class:"flex flex-col items-center p-4"},O={class:"font-medium text-center pt-4"},S={class:"text-sm text-gray-500 dark:text-gray-400"},A={class:"flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]"},G={class:"hidden md:flex w-64 bg-white flex-col border-r p-6"},D={class:"flex justify-center rounded-full p-6"},F={class:"flex flex-col items-center p-4"},L={class:"font-medium text-center pt-4"},T={class:"text-sm text-gray-500 dark:text-gray-400"},U={class:"flex-1"},V=["onClick"],z={class:"flex-1 p-6 bg-white rounded-md min-h-[70vh]"};function E(n,s,l,t,d,x){const _=f;return a(),i("div",P,[e("div",j,[e("div",B,[e("div",M,[s[2]||(s[2]=e("img",{class:"w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500",src:"https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&semt=ais_hybrid",alt:"Profile Image"},null,-1)),e("div",O,[e("div",null,r(t.user.firstName+" "+t.user.lastName),1),e("div",S,r(t.user.email),1)])])]),y(_,{activeIndex:t.selectedIndex,"onUpdate:activeIndex":s[0]||(s[0]=o=>t.selectedIndex=o),model:t.tabs},null,8,["activeIndex","model"])]),e("div",A,[e("div",G,[e("div",D,[e("div",F,[s[3]||(s[3]=e("img",{class:"w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500",src:"https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&semt=ais_hybrid",alt:"Profile Image"},null,-1)),e("div",L,[e("div",null,r(t.user.firstName+" "+t.user.lastName),1),e("div",T,r(t.user.email),1)])])]),e("div",U,[e("ul",null,[(a(!0),i(b,null,k(t.tabs,(o,c)=>(a(),i("li",{key:o.name},[e("button",{onClick:H=>t.selectedIndex=c,class:N(["w-full p-4 gap-x-3 text-left hover:bg-secondary hover:text-white gap-y-4 rounded-xl",{"bg-primary text-white":t.selectedIndex===c}])},r(o.label),11,V)]))),128))])]),e("button",{onClick:s[1]||(s[1]=(...o)=>t.logout&&t.logout(...o)),class:"mt-auto p-4 bg-primary text-white hover:bg-secondary"}," Logout ")]),e("div",z,[(a(),I(w(t.activeComponent)))])])])}const $=p(C,[["render",E],["__scopeId","data-v-bf5f69b5"]]);export{$ as default};
