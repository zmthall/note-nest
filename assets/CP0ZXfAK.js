import{Z as d,k as f,e as l,z as p,$ as m,a1 as x}from"./DkI0AXVV.js";import{u as N}from"./BXZk_JrV.js";const A=d(async()=>{let e,r;const a=f(),o=N(),{$firebase:n}=l();if(!a.user)return;const t=a.user.uid;if(o.notes[t])return;const u=p(n.db,`notes/${t}`);try{const s=([e,r]=m(()=>x(u)),e=await e,r(),e);if(s.exists()){const c=s.val(),i=Object.values(c);o.setNotes(t,i)}else o.setNotes(t,[])}catch(s){console.error("Failed to load notes:",s)}});export{A as default};
