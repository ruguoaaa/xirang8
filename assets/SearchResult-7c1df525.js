import{u as G,f as J,n as M,p as E,q as O,v as V,t as W,g as k,h as H,w as K,x as P,l as t,R as A,y as N,z as T,A as X,B as Y,C as Z,D as _,s as ee,E as te,L as ae,H as se,F as le,G as ue,I as q,J as re}from"./app-64c68239.js";const ne="search-pro-result-history",o=G(ne,[]),oe=()=>{const{resultHistoryCount:u}=q,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},ce=u=>{const c=E(),l=k(!1),h=ee([]);let i;const v=ue(y=>{l.value=!0,i==null||i.terminate(),y?(i=new Worker(`/xirang1/${q.worker}`,{}),i.addEventListener("message",({data:g})=>{h.value=g,l.value=!1}),i.postMessage({query:y,routeLocale:c.value})):(h.value=[],l.value=!1)},q.delay);return P([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=J({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=te(),h=M(),i=E(),v=O(V),{addQueryHistory:y}=ae(),{enabled:g,resultHistory:L,addResultHistory:C,removeResultHistory:Q}=oe(),f=W(u,"query"),{results:d,searching:j}=ce(f),r=k(0),s=k(0),D=H(()=>L.value.length>0),R=H(()=>d.value.length>0),$=H(()=>d.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:d.value.length-1,s.value=$.value.contents.length-1},I=()=>{r.value=r.value<d.value.length-1?r.value+1:0,s.value=0},U=()=>{s.value<$.value.contents.length-1?s.value=s.value+1:I()},z=()=>{s.value>0?s.value=s.value-1:F()},b=e=>e.map(a=>re(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=se[e.index]||"$content",[p,m=""]=le(a)?a[i.value].split("$content"):a.split("$content");return b([p,...e.display,m])}return b(e.display)},w=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return K("keydown",e=>{if(R.value){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")U();else if(e.key==="Enter"){const a=$.value.contents[s.value];l.value.path!==a.path&&(y(u.query),C(a),h.push(a.path),w())}}}),P([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!D.value}],id:"search-pro-results"},f.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),L.value.map((e,a)=>t(A,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{w()}},()=>[t(N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),Q(a)}},t(T))]))])):g?v.value.emptyHistory:v.value.emptyResult:j.value?t(X,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,B)=>{const x=m&&s.value===B;return t(A,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{y(u.query),C(n),w()}},()=>[n.type==="content"?null:t(n.type==="title"?Y:n.type==="heading"?Z:_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
