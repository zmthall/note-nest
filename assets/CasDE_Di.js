import{a as y,_ as k}from"./BRlHJsEL.js";import{_ as C}from"./hJSJOIXV.js";import N from"./DU8aUCDA.js";import{j as V,e as h,r as a,m as j,w as m,o as z,a as s,b as r,d as i,C as A,s as u,D as p,v as d,n as c,G as E,y as U}from"./CFJHarlv.js";const B={class:"flex h-screen"},I={class:"flex flex-col justify-center grow-0 shrink-0 p-8 w-[400px] bg-zinc-800 text-white"},L={class:"text-sm text-slate-300 mb-6"},P={class:"flex flex-col"},S={class:"flex flex-col"},T={type:"submit",class:"flex justify-center items-center gap-2 font-semibold bg-amber-400 hover:bg-amber-300 p-1 rounded-full text-black"},D={class:"flex justify-center items-center gap-1"},W=V({name:"RegisterPage",__name:"register",setup(M){const{$firebase:f}=h(),t=a(""),o=a(""),x=a(""),_=()=>{try{if(t.value.length>0&&o.value.length>0)E(f.auth,t.value,o.value),t.value="",o.value="",U({path:"/login"});else throw new Error("Invalid Credentials")}catch(n){n instanceof Error&&(x.value=n.message)}};return(n,e)=>{const g=k,b=C,v=N,w=y;return z(),j(w,null,{default:m(()=>[s("main",B,[s("div",I,[r(g,{class:"mb-8"}),e[8]||(e[8]=s("p",{class:"mb-1"},"Sign up for a free account",-1)),s("p",L,[e[3]||(e[3]=i(" Already registered? ")),r(b,{to:"/login",class:"text-amber-400 hover:text-amber-200 underline"},{default:m(()=>e[2]||(e[2]=[i(" Log in ")])),_:1}),e[4]||(e[4]=i(" to your account "))]),s("form",{class:"flex flex-col gap-4",onSubmit:A(_,["prevent"])},[s("div",P,[e[5]||(e[5]=s("label",{for:"email",class:"text-xs mb-1"},"Email Address",-1)),u(s("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>p(t)?t.value=l:null),type:"email",name:"email",autocomplete:"username",class:"bg-zinc-700 p-1"},null,512),[[d,c(t)]])]),s("div",S,[e[6]||(e[6]=s("label",{for:"password",class:"text-xs mb-1"},"Password",-1)),u(s("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=l=>p(o)?o.value=l:null),type:"password",name:"password",class:"bg-zinc-700 p-1"},null,512),[[d,c(o)]])]),s("button",T,[s("div",D,[e[7]||(e[7]=s("span",null,"Sign up",-1)),r(v,{name:"ic:baseline-arrow-right-alt"})])])],32)]),e[9]||(e[9]=s("div",{class:"col-span-7 bg-zinc-900 w-full"},null,-1))])]),_:1})}}});export{W as default};
