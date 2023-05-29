import{J as G,K as ne,S as _e,i as pe,s as ge,k as M,a as I,q as U,l as C,m as T,c as P,r as j,h as S,n as O,b as A,G as g,L,M as Q,f as F,g as J,d as K,u as le,N as oe,O as se,P as ae,Q as re,R as ie,T as ce,U as de,v as z,V as W,H as he}from"../chunks/index.5ff26389.js";function ue(a){const t=a-1;return t*t*t+1}function ye(a){return--a*a*a*a*a+1}function ke(a,t){var e={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,n=Object.getOwnPropertySymbols(a);h<n.length;h++)t.indexOf(n[h])<0&&Object.prototype.propertyIsEnumerable.call(a,n[h])&&(e[n[h]]=a[n[h]]);return e}function ve(a){var{fallback:t}=a,e=ke(a,["fallback"]);const n=new Map,h=new Map;function u(y,l,m){const{delay:b=0,duration:i=B=>Math.sqrt(B)*30,easing:p=ue}=G(G({},e),m),k=y.getBoundingClientRect(),r=l.getBoundingClientRect(),o=k.left-r.left,q=k.top-r.top,w=k.width/r.width,E=k.height/r.height,D=Math.sqrt(o*o+q*q),f=getComputedStyle(l),_=f.transform==="none"?"":f.transform,$=+f.opacity;return{delay:b,duration:ne(i)?i(D):i,easing:p,css:(B,c)=>`
				opacity: ${B*$};
				transform-origin: top left;
				transform: ${_} translate(${c*o}px,${c*q}px) scale(${B+(1-B)*w}, ${B+(1-B)*E});
			`}}function v(y,l,m){return(b,i)=>(y.set(i.key,b),()=>{if(l.has(i.key)){const p=l.get(i.key);return l.delete(i.key),u(p,b,i)}return y.delete(i.key),t&&t(b,i,m)})}return[v(h,n,!1),v(n,h,!0)]}function fe(a,{from:t,to:e},n={}){const h=getComputedStyle(a),u=h.transform==="none"?"":h.transform,[v,y]=h.transformOrigin.split(" ").map(parseFloat),l=t.left+t.width*v/e.width-(e.left+v),m=t.top+t.height*y/e.height-(e.top+y),{delay:b=0,duration:i=k=>Math.sqrt(k)*120,easing:p=ue}=n;return{delay:b,duration:ne(i)?i(Math.sqrt(l*l+m*m)):i,easing:p,css:(k,r)=>{const o=r*l,q=r*m,w=k+r*t.width/e.width,E=k+r*t.height/e.height;return`transform: ${u} translate(${o}px, ${q}px) scale(${w}, ${E});`}}}function X(a,t,e){const n=a.slice();return n[11]=t[e],n[12]=t,n[13]=e,n}function Y(a,t,e){const n=a.slice();return n[11]=t[e],n[14]=t,n[15]=e,n}function Z(a,t){let e,n,h,u=t[11].description+"",v,y,l,m,b,i,p,k,r=he,o,q,w;function E(){t[6].call(n,t[14],t[15])}function D(){return t[7](t[11])}return{key:a,first:null,c(){e=M("label"),n=M("input"),h=I(),v=U(u),y=I(),l=M("button"),m=U("x"),b=I(),this.h()},l(f){e=C(f,"LABEL",{class:!0});var _=T(e);n=C(_,"INPUT",{type:!0,class:!0}),h=P(_),v=j(_,u),y=P(_),l=C(_,"BUTTON",{class:!0});var $=T(l);m=j($,"x"),$.forEach(S),b=P(_),_.forEach(S),this.h()},h(){O(n,"type","checkbox"),O(n,"class","svelte-q27hda"),O(l,"class","svelte-q27hda"),O(e,"class","svelte-q27hda"),this.first=e},m(f,_){A(f,e,_),g(e,n),n.checked=t[11].done,g(e,h),g(e,v),g(e,y),g(e,l),g(l,m),g(e,b),o=!0,q||(w=[L(n,"change",E),L(l,"click",D)],q=!0)},p(f,_){t=f,_&1&&(n.checked=t[11].done),(!o||_&1)&&u!==(u=t[11].description+"")&&le(v,u)},r(){k=e.getBoundingClientRect()},f(){oe(e),r(),se(e,k)},a(){r(),r=ae(e,k,fe,{})},i(f){o||(re(()=>{o&&(p&&p.end(1),i=ie(e,t[2],{key:t[11].id}),i.start())}),o=!0)},o(f){i&&i.invalidate(),p=ce(e,t[1],{key:t[11].id}),o=!1},d(f){f&&S(e),f&&p&&p.end(),q=!1,de(w)}}}function x(a,t){let e,n,h,u=t[11].description+"",v,y,l,m,b,i,p,k,r=he,o,q,w;function E(){t[8].call(n,t[12],t[13])}function D(){return t[9](t[11])}return{key:a,first:null,c(){e=M("label"),n=M("input"),h=I(),v=U(u),y=I(),l=M("button"),m=U("x"),b=I(),this.h()},l(f){e=C(f,"LABEL",{class:!0});var _=T(e);n=C(_,"INPUT",{type:!0,class:!0}),h=P(_),v=j(_,u),y=P(_),l=C(_,"BUTTON",{class:!0});var $=T(l);m=j($,"x"),$.forEach(S),b=P(_),_.forEach(S),this.h()},h(){O(n,"type","checkbox"),O(n,"class","svelte-q27hda"),O(l,"class","svelte-q27hda"),O(e,"class","svelte-q27hda"),this.first=e},m(f,_){A(f,e,_),g(e,n),n.checked=t[11].done,g(e,h),g(e,v),g(e,y),g(e,l),g(l,m),g(e,b),o=!0,q||(w=[L(n,"change",E),L(l,"click",D)],q=!0)},p(f,_){t=f,_&1&&(n.checked=t[11].done),(!o||_&1)&&u!==(u=t[11].description+"")&&le(v,u)},r(){k=e.getBoundingClientRect()},f(){oe(e),r(),se(e,k)},a(){r(),r=ae(e,k,fe,{})},i(f){o||(re(()=>{o&&(p&&p.end(1),i=ie(e,t[2],{key:t[11].id}),i.start())}),o=!0)},o(f){i&&i.invalidate(),p=ce(e,t[1],{key:t[11].id}),o=!1},d(f){f&&S(e),f&&p&&p.end(),q=!1,de(w)}}}function be(a){let t,e,n,h,u,v,y,l=[],m=new Map,b,i,p,k,r,o=[],q=new Map,w,E,D,f=a[0].filter(ee);const _=c=>c[11].id;for(let c=0;c<f.length;c+=1){let s=Y(a,f,c),d=_(s);m.set(d,l[c]=Z(d,s))}let $=a[0].filter(te);const B=c=>c[11].id;for(let c=0;c<$.length;c+=1){let s=X(a,$,c),d=B(s);q.set(d,o[c]=x(d,s))}return{c(){t=M("div"),e=M("input"),n=I(),h=M("div"),u=M("h2"),v=U("todo"),y=I();for(let c=0;c<l.length;c+=1)l[c].c();b=I(),i=M("div"),p=M("h2"),k=U("done"),r=I();for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){t=C(c,"DIV",{class:!0});var s=T(t);e=C(s,"INPUT",{class:!0,placeholder:!0}),n=P(s),h=C(s,"DIV",{class:!0});var d=T(h);u=C(d,"H2",{class:!0});var V=T(u);v=j(V,"todo"),V.forEach(S),y=P(d);for(let N=0;N<l.length;N+=1)l[N].l(d);d.forEach(S),b=P(s),i=C(s,"DIV",{class:!0});var R=T(i);p=C(R,"H2",{class:!0});var H=T(p);k=j(H,"done"),H.forEach(S),r=P(R);for(let N=0;N<o.length;N+=1)o[N].l(R);R.forEach(S),s.forEach(S),this.h()},h(){O(e,"class","new-todo svelte-q27hda"),O(e,"placeholder","what needs to be done?"),O(u,"class","svelte-q27hda"),O(h,"class","left svelte-q27hda"),O(p,"class","svelte-q27hda"),O(i,"class","right svelte-q27hda"),O(t,"class","board svelte-q27hda")},m(c,s){A(c,t,s),g(t,e),g(t,n),g(t,h),g(h,u),g(u,v),g(h,y);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(h,null);g(t,b),g(t,i),g(i,p),g(p,k),g(i,r);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(i,null);w=!0,E||(D=L(e,"keydown",a[5]),E=!0)},p(c,[s]){if(s&17){f=c[0].filter(ee),z();for(let d=0;d<l.length;d+=1)l[d].r();l=Q(l,s,_,1,c,f,m,h,W,Z,null,Y);for(let d=0;d<l.length;d+=1)l[d].a();F()}if(s&17){$=c[0].filter(te),z();for(let d=0;d<o.length;d+=1)o[d].r();o=Q(o,s,B,1,c,$,q,i,W,x,null,X);for(let d=0;d<o.length;d+=1)o[d].a();F()}},i(c){if(!w){for(let s=0;s<f.length;s+=1)J(l[s]);for(let s=0;s<$.length;s+=1)J(o[s]);w=!0}},o(c){for(let s=0;s<l.length;s+=1)K(l[s]);for(let s=0;s<o.length;s+=1)K(o[s]);w=!1},d(c){c&&S(t);for(let s=0;s<l.length;s+=1)l[s].d();for(let s=0;s<o.length;s+=1)o[s].d();E=!1,D()}}}const ee=a=>!a.done,te=a=>a.done;function me(a,t,e){const[n,h]=ve({fallback(r,o){const q=getComputedStyle(r),w=q.transform==="none"?"":q.transform;return{duration:600,easing:ye,css:E=>`
					transform: ${w} scale(${E});
					opacity: ${E}
				`}}});let u=[{id:1,done:!0,description:"Introduce the subject"},{id:2,done:!1,description:"1st Demo: Svelte app within CMS"},{id:3,done:!1,description:"2nd Demo: Decoupled drag&drop page creation"},{id:4,done:!1,description:"Governance at scale with Acquia"},{id:5,done:!1,description:"Q&A"}],v=u.length+1;function y(r){const o={id:v++,done:!1,description:r.value};e(0,u=[o,...u]),r.value=""}function l(r){e(0,u=u.filter(o=>o!==r))}const m=r=>r.key==="Enter"&&y(r.target);function b(r,o){r[o].done=this.checked,e(0,u)}const i=r=>l(r);function p(r,o){r[o].done=this.checked,e(0,u)}return[u,n,h,y,l,m,b,i,p,r=>l(r)]}class we extends _e{constructor(t){super(),pe(this,t,me,be,ge,{})}}export{we as component};