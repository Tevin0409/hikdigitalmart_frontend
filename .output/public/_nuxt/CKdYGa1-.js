import{s as h}from"./BzTX5z7n.js";import{P as m,O as u,s as f}from"./DI4iHrzo.js";import{_ as b,x as y,r as _,S as k,c as l,a as t,b as p,t as i,F as I,m as w,G as C,H as N,o as r,u as B}from"./BFuEayTv.js";import"./DD3iEoG-.js";import"./DQDyEmLL.js";import"./xEojK5qa.js";import"./BQcwvpTO.js";import"./GBAy-wp2.js";import"./Bdx-LQfB.js";const M={components:{Profile:m,Orders:u,TabMenu:f},setup(){const s=y(),o=_(0),a=_([{name:"Profile",label:"My Account",component:m},{name:"Orders",label:"My Orders",component:u}]),e=s.user||{firstName:"",lastName:"",email:""},c=k(()=>a.value[o.value].component);return{tabs:a,selectedIndex:o,activeComponent:c,logout:()=>s.logout(),userStore:s,user:e}}},O={class:"container mx-auto p-4"},P={class:"md:hidden mb-4"},S={class:"flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]"},j={class:"hidden md:flex w-64 bg-white flex-col border-r p-6"},A={class:"flex justify-center rounded-full p-6"},D={class:"flex flex-col items-center p-4"},F={class:"font-medium text-center pt-4"},G={class:"text-sm text-gray-500 dark:text-gray-400"},L={class:"flex-1"},T=["onClick"],U={class:"flex-1 p-6 bg-white rounded-md min-h-[70vh]"};function V(s,o,a,e,c,x){const g=f,v=h;return r(),l("div",O,[t("div",P,[p(g,{activeIndex:e.selectedIndex,"onUpdate:activeIndex":o[0]||(o[0]=n=>e.selectedIndex=n),model:e.tabs},null,8,["activeIndex","model"])]),t("div",S,[t("div",j,[t("div",A,[t("div",D,[o[1]||(o[1]=t("img",{class:"w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500",src:"https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&semt=ais_hybrid",alt:"Profile Image"},null,-1)),t("div",F,[t("div",null,i(e.user.firstName+" "+e.user.lastName),1),t("div",G,i(e.user.email),1)])])]),t("div",L,[t("ul",null,[(r(!0),l(I,null,w(e.tabs,(n,d)=>(r(),l("li",{key:n.name},[t("button",{onClick:z=>e.selectedIndex=d,class:B(["w-full p-4 text-left hover:bg-secondary hover:text-white rounded-xl",{"bg-primary text-white":e.selectedIndex===d}])},i(n.label),11,T)]))),128))])]),p(v,{label:"Logout",onClick:e.logout,class:"mt-auto p-4 bg-primary text-white hover:bg-secondary"},null,8,["onClick"])]),t("div",U,[(r(),C(N(e.activeComponent)))])])])}const Y=b(M,[["render",V],["__scopeId","data-v-387b1ad1"]]);export{Y as default};
