var g=Object.defineProperty;var p=(o,a,r)=>a in o?g(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r;var m=(o,a,r)=>(p(o,typeof a!="symbol"?a+"":a,r),r);const B=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};B();var L=[{day:"mon",amount:17.45},{day:"tue",amount:34.91},{day:"wed",amount:52.36},{day:"thu",amount:31.07},{day:"fri",amount:23.39},{day:"sat",amount:43.28},{day:"sun",amount:25.48}];const d=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}],h={duration:300,iterations:1,fill:"forwards"},S=["sun","mon","tue","wed","thu","fri","sat"];class _ extends HTMLElement{constructor(){super();m(this,"bars");this.bars=!1}createBar(r,s,t,e){const n=String(Math.round(r.amount*100/t)),c=document.getElementById("template-bar").content.cloneNode(!0),u=c.querySelector(".bar"),i=c.querySelector(".bar__progress"),y=c.querySelector(".bar__day"),b=c.querySelector(".bar__amount");y.textContent=r.day,b.textContent=`$${String(r.amount)}`,u.classList.add(S[e.getDay()]===r.day?"bar--cyan":"bar--red"),i.style.height=`${n}%`,this.appendChild(u),s>0?setTimeout(()=>{i.animate(d,h)},s*300):i.animate(d,h)}connectedCallback(){if(this.bars){const r=new Date,s=this.bars.map(n=>n.amount),t=Math.max(...s),e=String(this.bars.length);this.style.gridTemplateColumns=`repeat(${e}, 1fr)`,this.classList.add("chart__bars"),this.bars.forEach((n,l)=>this.createBar(n,l,t,r))}else console.warn("The chart bars web component has no bars")}}customElements.define("chart-bars",_);const w=document.getElementById("chart-title"),f=document.createElement("chart-bars");f.bars=L;w.after(f);
