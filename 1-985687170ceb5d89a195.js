(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{245:function(e,t,n){},246:function(e,t,n){!function(){"use strict";function e(e){let t=0,n=1,r=1;return{curr:(n=0)=>e[t+n],end:()=>e.length<=t,info:()=>({index:t,col:n,line:r}),index:e=>void 0===e?t:t=e,next:()=>{let s=e[t++];return"\n"==s?(r++,n=0):n++,s}}}var t=t=>{t=t.trim();let n=[];if(!/^var\(/.test(t))return n;let r=e(t);try{n=function(e){let t="",n=[],r=[],s={};for(;!e.end();){let i=e.curr();if("("==i)n.push(i),t="";else if(")"==i||","==i){if(/^\-\-.+/.test(t)&&(s.name?(s.alternative||(s.alternative=[]),s.alternative.push({name:t})):s.name=t),")"==i){if("("!=n[n.length-1])throw new Error("bad match");n.pop()}","==i&&(n.length||(r.push(s),s={})),t=""}else/\s/.test(i)||(t+=i);e.next()}return n.length?[]:(s.name&&r.push(s),r)}(r)}catch(e){}return n};const n={func:(e="")=>({type:"func",name:e,arguments:[]}),argument:()=>({type:"argument",value:[]}),text:(e="")=>({type:"text",value:e}),comment:e=>({type:"comment",value:e}),psuedo:(e="")=>({type:"psuedo",selector:e,styles:[]}),cond:(e="")=>({type:"cond",name:e,styles:[],arguments:[]}),rule:(e="")=>({type:"rule",property:e,value:[]}),keyframes:(e="")=>({type:"keyframes",name:e,steps:[]}),step:(e="")=>({type:"step",name:e,styles:[]})},r={"(":")","[":"]","{":"}"},s={white_space:e=>/[\s\n\t]/.test(e),line_break:e=>/\n/.test(e),open_bracket:e=>r.hasOwnProperty(e),close_bracket_of(e){let t=r[e];return e=>e==t},number:e=>!isNaN(e)};function i(e,{col:t,line:n}){throw new Error(`(at line ${n}, column ${t}) ${e}`)}function l(e){let[t,n]=[e.curr(),e.curr()],r=s.close_bracket_of(n);for(e.next();!e.end();){if(r(n=e.curr())){t+=n;break}s.open_bracket(n)?t+=l(e):t+=n,e.next()}return t}function o(e){return function(t,n){let r=t.index(),s="";for(;!t.end();){let n=t.next();if(e(n))break;s+=n}return n&&t.index(r),s}}function u(e,t){return o(e=>s.white_space(e))(e,t)}function a(e,t){return o(e=>s.line_break(e)||"{"==e)(e,t)}function c(e,t){let r,i=n.step();for(;!e.end()&&"}"!=(r=e.curr());)if(s.white_space(r))e.next();else{if(i.name.length){if(i.styles.push(k(e,t)),"}"==e.curr())break}else i.name=x(e);e.next()}return i}function h(e,t){const n=[];let r;for(;!e.end()&&"}"!=(r=e.curr());)s.white_space(r)?e.next():(n.push(c(e,t)),e.next());return n}function p(e,t){let r,s=n.keyframes();for(;!e.end()&&"}"!=(r=e.curr());)if(s.name.length){if("{"==r){e.next(),s.steps=h(e,t);break}e.next()}else if(u(e),s.name=u(e),"{"==s.name){i("missing keyframes name",e.info());break}return s}function f(e,t={}){let r=n.comment(),s=e.curr();for("#"!=s&&e.next(),e.next();!e.end()&&("*"!=(s=e.curr())||"/"!=e.curr(1));){if(r.value+=s,s=e.curr(),t.inline){if("\n"==s)return r}else if("*"==s&&"/"==e.curr(1))break;r.value+=s,e.next()}return e.next(),e.next(),r}function m(e){let t,n="";for(;!e.end()&&":"!=(t=e.curr());)s.white_space(t)||(n+=t),e.next();return n}function d(e,t){let n,r="";for(e.next();!e.end();){if((n=e.curr())==t){if("\\"!==e.curr(-1))break;r+=n}else r+=n;e.next()}return r}function g(e,t){let r,i=[],o=[],u="";for(;!e.end();){if(s.open_bracket(r=e.curr()))u+=l(e);else if(/['"]/.test(r))u+=t?r+d(e,r)+r:d(e,r);else if("@"==r)o.length||(u=u.trimLeft()),u.length&&(o.push(n.text(u)),u=""),o.push(y(e));else if(/[,)]/.test(r)){if(u.length&&(o.length?(u=u.trimRight()).length&&o.push(n.text(u)):o.push(n.text((a=u).trim().length?s.number(+a)?+a:a.trim():a))),i.push(o.slice()),[o,u]=[[],""],")"==r)break}else u+=r;e.next()}var a;return i}function y(e){let t,r=n.func(),s="";for(;!e.end()&&")"!=(t=e.curr());){if("("==t){e.next(),r.name=s,r.arguments=g(e,"@svg"==s);break}s+=t,e.next()}return r}function _(e){let t,r=n.text();const l=[];for(;!e.end();)if("\n"!=(t=e.curr())){if(/[;}]/.test(t)){r.value.length&&l.push(r),r=n.text();break}"@"==t?(r.value.length&&l.push(r),r=n.text(),l.push(y(e))):s.white_space(t)&&s.white_space(e.curr(-1))||(":"==t&&i("Syntax error: Bad property name.",e.info()),r.value+=t),e.next()}else e.next();return r.value.length&&l.push(r),l.length&&l[0].value&&(l[0].value=l[0].value.trimLeft()),l}function x(e){let t,n="";for(;!e.end()&&"{"!=(t=e.curr());)s.white_space(t)||(n+=t),e.next();return n}function b(e){let t,n={name:"",arguments:[]};for(;!e.end();){if("("==(t=e.curr()))e.next(),n.arguments=g(e);else{if(/[){]/.test(t))break;s.white_space(t)||(n.name+=t)}e.next()}return n}function v(e,t){let r,i=n.psuedo();for(;!e.end()&&"}"!=(r=e.curr());)if(s.white_space(r))e.next();else{if(i.selector){let n=k(e,t);if("@use"==n.property?i.styles=i.styles.concat(n.value):i.styles.push(n),"}"==e.curr())break}else i.selector=x(e);e.next()}return i}function k(e,t){let r,s=n.rule();for(;!e.end()&&";"!=(r=e.curr());){if(s.property.length){s.value=_(e);break}if(s.property=m(e),"@use"==s.property){s.value=z(e,t);break}e.next()}return s}function w(e,t){let r,i=n.cond();for(;!e.end()&&"}"!=(r=e.curr());){if(i.name.length)if(":"==r){let t=v(e);t.selector&&i.styles.push(t)}else if("@"!=r||a(e,!0).includes(":")){if(!s.white_space(r)){let n=k(e,t);if(n.property&&i.styles.push(n),"}"==e.curr())break}}else i.styles.push(w(e));else Object.assign(i,b(e));e.next()}return i}function $(e,t){let n="";return e&&e.get_custom_property_value&&(n=e.get_custom_property_value(t)),n}function z(e,n){e.next();let r=_(e);return function e(n,r){n.forEach(n=>{if("text"==n.type&&n.value){let e=t(n.value);n.value=e.reduce((e,t)=>{let n,s="",i="";!(s=$(r,t.name))&&t.alternative&&t.alternative.every(e=>{if(i=$(r,e.name))return s=i,!1});try{n=j(s,r)}catch(e){}return n&&e.push.apply(e,n),e},[])}"func"==n.type&&n.arguments&&n.arguments.forEach(t=>{e(t,r)})})}(r,n),r[0].value||[]}function j(t,n){const r=e(t),i=[];for(;!r.end();){let e=r.curr();if(s.white_space(e))r.next();else{if("/"==e&&"*"==r.curr(1))i.push(f(r));else if("#"==e||"/"==e&&"/"==r.curr(1))i.push(f(r,{inline:!0}));else if(":"==e){let e=v(r,n);e.selector&&i.push(e)}else if("@"==e&&"@keyframes"===u(r,!0)){let e=p(r,n);i.push(e)}else if("@"!=e||a(r,!0).includes(":")){if(!s.white_space(e)){let e=k(r,n);e.property&&i.push(e)}}else{let e=w(r,n);e.name.length&&i.push(e)}r.next()}}return i}const M=new RegExp(`(${"\n  % cm ch fr rem em ex in mm pc pt px\n  vh vw vmax vmin vi vb\n  deg grad rad turn\n  dpi dpcm dppx\n  ms s\n  ic cap\n  Hz kHz\n  lh rlh\n  Q\n".trim().split(/[\s\n]+/).join("|")})$`);function A(e){if(!e)return"";let t="".trim.call(e).match(M);return t?t[0]:""}function E(e){let t=A(e);return t?+e.replace(t,""):e}function O(e,...t){return t.reduce((e,t)=>e.apply(null,(n=t,Array.isArray(n)?n:Object.keys(n).map(e=>n[e]))),e);var n}function T(e){return(e||[]).join("\n")}function H(e,t,n){return Math.max(t,Math.min(n,e))}function L(e){return`-webkit-${e} ${e}`}const S={};function C(e,t){return(...n)=>{let r=e+n.join("-");return S[r]?S[r]:S[r]=t.apply(null,n)}}function N(...e){let t=e.reduce((e,t)=>e.concat(t),[]);return t[Math.floor(Math.random()*t.length)]}function P(e,t,n){let r=0,s=e,i=e=>e>0&&e<1?.1:1,l=arguments.length;1==l&&([e,t]=[i(e),e]),l<3&&(n=i(e));let o=[];for(;(n>=0&&e<=t||n<0&&e>t)&&(o.push(e),e+=n,!(r++>=1e3)););return o.length||o.push(s),o}function R(e){return(...t)=>{let n=A(t[0]);return function(e,t){return(...n)=>{n=n.map(E);let r=e.apply(null,n);return t&&(r=r.map(e=>e+t)),r}}(e,n).apply(null,t)}}function q(e){return(...t)=>{let n=t.map(e=>String(e).charCodeAt(0));return e.apply(null,n).map(e=>String.fromCharCode(e))}}const[J,W,Z]=[1,32,1024];function B(e){let[t,n]=(e+"").replace(/\s+/g,"").replace(/[,，xX]+/,"x").split("x").map(Number);const r=1==t||1==n?Z:W,s={x:H(t||J,1,r),y:H(n||t||J,1,r)};return Object.assign({},s,{count:s.x*s.y})}const{cos:I,sin:Q,sqrt:V,pow:X,PI:D}=Math,F=D/180;function G(e,t){"function"==typeof arguments[0]&&(t=e,e={}),t||(t=(e=>[I(e),Q(e)]));let n=e.split||120,r=e.scale||1,s=F*(e.start||0),i=e.deg?e.deg*F:D/(n/2),l=[];for(let e=0;e<n;++e){let n=s+i*e,[o,u]=t(n);l.push(50*o*r+50+"% "+(50*u*r+50)+"%")}return e.type?`polygon(${e.type}, ${l.join(",")})`:`polygon(${l.join(",")})`}function K(e,t,n){let r=F*n;return[e*I(r)-t*Q(r),t*I(r)+e*Q(r)]}const U={circle:()=>"circle(49%)",triangle:()=>G({split:3,start:-90},e=>[1.1*I(e),1.1*Q(e)+.2]),rhombus:()=>G({split:4}),pentagon:()=>G({split:5,start:54}),hexgon:()=>G({split:6,start:30}),hexagon:()=>G({split:6,start:30}),heptagon:()=>G({split:7,start:-90}),octagon:()=>G({split:8,start:22.5}),star:()=>G({split:5,start:54,deg:144}),diamond:()=>"polygon(50% 5%, 80% 50%, 50% 95%, 20% 50%)",cross:()=>"polygon(\n      5% 35%,  35% 35%, 35% 5%,  65% 5%,\n      65% 35%, 95% 35%, 95% 65%, 65% 65%,\n      65% 95%, 35% 95%, 35% 65%, 5% 65%\n    )",clover:(e=3)=>(4==(e=H(e,3,5))&&(e=2),G({split:240},t=>{let n=I(e*t)*I(t),r=I(e*t)*Q(t);return 3==e&&(n-=.2),2==e&&(n/=1.1,r/=1.1),[n,r]})),hypocycloid(e=3){let t=1-(e=H(e,3,6));return G({scale:1/e},n=>{let r=t*I(n)+I(t*(n-D)),s=t*Q(n)+Q(t*(n-D));return 3==e&&(r=1.1*r-.6,s*=1.1),[r,s]})},astroid:()=>U.hypocycloid(4),infinity:()=>G(e=>{let t=.7*V(2)*I(e),n=X(Q(e),2)+1;return[t/n,t*Q(e)/n]}),heart:()=>G(e=>{return K(1.2*(.75*X(Q(e),3)),1.1*(I(1*e)*(13/18)-I(2*e)*(5/18)-I(3*e)/18-I(4*e)/18+.2),180)}),bean:()=>G(e=>{let[t,n]=[X(Q(e),3),X(I(e),3)];return K((t+n)*I(e)*1.3-.45,(t+n)*Q(e)*1.3-.45,-90)}),bicorn:()=>G(e=>K(I(e),X(Q(e),2)/(2+Q(e))-.5,180)),pear:()=>G(e=>[Q(e),(1+Q(e))*I(e)/1.4]),fish:()=>G(e=>[I(e)-X(Q(e),2)/V(2),Q(2*e)/2]),whale:()=>G({split:240},e=>{let t=3.4*(X(Q(e),2)-.5)*I(e);return K(I(e)*t+.75,Q(e)*t*1.2,180)}),bud:(e=3)=>(e=H(e,3,10),G({split:240},t=>[(1+.2*I(e*t))*I(t)*.8,(1+.2*I(e*t))*Q(t)*.8])),alien(...e){let[t=1,n=1,r=1,s=1,i=1]=e.map(e=>H(e,1,9));return G({split:480,type:"evenodd"},e=>[.31*(I(e*t)+I(e*r)+I(e*i)),.31*(Q(e*n)+Q(e*s)+Q(e))])}};function Y(e,t,n){switch(e){case"+":return t+n;case"-":return t-n;case"*":return t*n;case"/":return t/n}}function ee(e){const t=function(e){const t=[],n=[];let r="";const s={"*":3,"/":3,"+":2,"-":2,"(":1,")":1},i=e=>e[e.length-1];for(let l of String(e))if(/[\d.]/.test(l))r+=l;else if(r.length&&(n.push(r),r=""),s[l])if("("==l)t.push(l);else if(")"==l){for(;t.length&&"("!=i(t);)n.push(t.pop());t.pop()}else{for(;t.length&&s[i(t)]>=s[l];){let e=t.pop();/[()]/.test(e)||n.push(e)}t.push(l)}for(r.length&&n.push(r);t.length;)n.push(t.pop());return n}(e),n=[];for(;t.length;){let e=t.shift();if(/\d+/.test(e))n.push(e);else{let t=n.pop(),r=n.pop();n.push(Y(e,Number(r),Number(t)))}}return n[0]}var te={index:(e,t,n)=>e=>n,row:(e,t,n)=>t=>e,col:(e,t,n)=>e=>t,size:(e,t,n,r)=>e=>r.count,"max-row":(e,t,n,r)=>e=>r.x,"max-col":(e,t,n,r)=>e=>r.y,pick:()=>(...e)=>N(e),repeat:function(e){let t=()=>(e,t)=>{let n="";if(!t||!e)return n;let r=e();for(let e=0;e<r;++e)n+=t();return n};return t.lazy=!0,t}(),rand:()=>(...e)=>{let[t,n]=e,r=R;return/^[a-zA-Z]$/.test(t)&&/^[a-zA-Z]$/.test(n)&&(r=q),N(C("range",r(P)).apply(null,e))},shape:()=>C("shape",(e="",...t)=>{if(e=e.trim(),U[e])return U[e].apply(null,t)}),calc:()=>e=>ee(e),hex:()=>e=>Number(e).toString(16),svg:()=>e=>{e.includes("xmlns")||(e=e.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" '));let t="";try{t=window.btoa(e)}catch(e){}if(t)return'url("data:image/svg+xml;base64,'+t+'")'}};const ne=e=>/[,，\s]/.test(e);function re(e){for(;!e.end()&&ne(e.curr(1));)e.next()}function se(t){const n=e(t),r=[],s=[];let i="";for(;!n.end();){let e=n.curr();"("==e?(i+=e,s.push(e)):")"==e?(i+=e,s.length&&s.pop()):s.length?i+=e:ne(e)?(r.push(i),i="",re(n)):i+=e,n.next()}return i&&r.push(i),r}var ie={"@size"(e,{is_special_selector:t}){let[n,r=n]=se(e);return`\n      width: ${n};\n      height: ${r};\n      ${t?"":`\n        --internal-cell-width: ${n};\n        --internal-cell-height: ${r};\n      `}\n    `},size(e,t){return this["@size"](e,t)},"@min-size"(e){let[t,n=t]=se(e);return`min-width: ${t}; min-height: ${n};`},"min-size"(e){return this["@min-size"](e)},"@max-size"(e){let[t,n=t]=se(e);return`max-width: ${t}; max-height: ${n};`},"max-size"(e){return this["@max-size"](e)},"@place-cell"(e){let[t,n=t]=se(e);(/^(top|bottom)$/.test(t)||/^(left|right)$/.test(n))&&([t,n]=[n,t]);const r={center:"50%",0:"0%",left:"0%",right:"100%",top:"0%",bottom:"100%"};return`\n      position: absolute;\n      right: -100vmax; bottom: -100vmax;\n      left: calc(-100vmax - 100% + ${t=r[t]||t} * 2);\n      top: calc(-100vmax - 100% + ${n=r[n]||n} * 2);\n      width: var(--internal-cell-width, 25%);\n      height: var(--internal-cell-height, 25%);\n      grid-area: unset !important;\n      margin: auto !important;\n    `},"@grid"(e,t){let[n,r]=e.split("/").map(e=>e.trim());return{grid:B(n),size:r?this["@size"](r,t):""}},"@shape":C("shape-property",function(e){let[t,...n]=se(e);return U[t]?L(`clip-path: ${U[t].apply(null,n)};`)+"overflow: hidden;":""}),"@use":e=>e};const le={even:e=>!!(e%2),odd:e=>!(e%2)};var oe={nth:(e,t,n)=>e=>e==n,at:(e,t)=>(n,r)=>e==n&&t==r,row:(e,t)=>t=>/^(even|odd)$/.test(t)?le[t](e-1):t==e,col:(e,t)=>e=>/^(even|odd)$/.test(e)?le[e](t-1):e==t,even:(e,t,n)=>e=>le.even(n-1),odd:(e,t,n)=>e=>le.odd(n-1),random:()=>e=>Math.random()<.5},ue=Object.getOwnPropertyNames(Math).reduce((e,t)=>(e[t]=(()=>(...e)=>"number"==typeof Math[t]?Math[t]:Math[t].apply(null,e.map(ee))),e),{});function ae(e){return/^\:(host|doodle)/.test(e)}function ce(e){return/^\:(container|parent)/.test(e)}function he(e){return ae(e)||ce(e)}class pe{constructor(e){this.tokens=e,this.rules={},this.props={},this.keyframes={},this.grid=null,this.coords=[],this.reset()}reset(){this.styles={host:"",container:"",cells:"",keyframes:""},this.coords=[];for(let e in this.rules)e.startsWith(".cell")&&delete this.rules[e]}add_rule(e,t){let n=this.rules[e];var r;n||(n=this.rules[e]=[]),n.push.apply(n,(r=t,Array.isArray(r)?r:[r]))}pick_func(e){return te[e]||ue[e]}compose_aname(...e){return e.join("-")}compose_selector(e,t=""){return`.cell:nth-of-type(${e})${t}`}compose_argument(e,t){let n=e.map(e=>{if("text"==e.type)return e.value;if("func"==e.type){let n=this.pick_func(e.name.substr(1));if(n){let r=e.arguments.map(e=>this.compose_argument(e,t));return O(n,t,r)}}});return n.length>=2?n.join(""):n[0]}compose_value(e,t){return e?e.reduce((e,n)=>{switch(n.type){case"text":e+=n.value;break;case"func":{let r=n.name.substr(1),s=this.pick_func(r);if(s){let r=n.arguments.map(e=>s.lazy?()=>this.compose_argument(e,t):this.compose_argument(e,t));e+=O(s,t,r)}}}return e},""):""}compose_rule(e,t,n){let r=e.property,s=this.compose_value(e.value,t),i=`${r}: ${s};`;if("transition"==r&&(this.props.has_transition=!0),"mask"!=r&&"clip-path"!=r||(i=L(i)),"clip-path"==r&&(i+=";overflow: hidden;"),"width"!=r&&"height"!=r||he(n)||(i+=`--internal-cell-${r}: ${s};`),/^animation(\-name)?$/.test(r)&&(this.props.has_animation=!0,t.count>1)){let{count:e}=t;switch(r){case"animation-name":i=`${r}: ${this.compose_aname(s,e)};`;break;case"animation":{let t=(s||"").split(/\s+/);t[0]=this.compose_aname(t[0],e),i=`${r}: ${t.join(" ")};`}}}if(ie[r]){let l=ie[r](s,{is_special_selector:he(n)});switch(r){case"@grid":ae(n)&&(this.grid=l.grid,i=l.size||"");break;case"@place-cell":ae(n)||(i=l);case"@use":e.value.length&&this.compose(t,e.value),i=ie[r](e.value);default:i=l}}return i}compose(e,t){this.coords.push(e),(t||this.tokens).forEach((t,n)=>{if(t.skip)return!1;switch(t.type){case"rule":this.add_rule(this.compose_selector(e.count),this.compose_rule(t,e));break;case"psuedo":{t.selector.startsWith(":doodle")&&(t.selector=t.selector.replace(/^\:+doodle/,":host"));let n=he(t.selector);n&&(t.skip=!0);let r=t.styles.map(n=>this.compose_rule(n,e,t.selector)),s=n?t.selector:this.compose_selector(e.count,t.selector);this.add_rule(s,r);break}case"cond":{let n=oe[t.name.substr(1)];if(n){let r=t.arguments.map(t=>this.compose_argument(t,e));O(n,e,r)&&this.compose(e,t.styles)}break}case"keyframes":this.keyframes[t.name]||(this.keyframes[t.name]=(e=>`\n              ${T(t.steps.map(t=>`\n                ${t.name} {\n                  ${T(t.styles.map(t=>this.compose_rule(t,e)))}\n                }\n              `))}\n            `))}})}output(){Object.keys(this.rules).forEach((e,t)=>{if(ce(e))this.styles.container+=`\n          .container {\n            ${T(this.rules[e])}\n          }\n        `;else{let t=ae(e)?"host":"cells";this.styles[t]+=`\n          ${e} {\n            ${T(this.rules[e])}\n          }\n        `}});let e=Object.keys(this.keyframes);var t,n;return this.coords.forEach((r,s)=>{e.forEach(e=>{let i=this.compose_aname(e,r.count);this.styles.keyframes+=`\n          ${t=0==s,n=`@keyframes ${e} {\n              ${this.keyframes[e](r)}\n            }`,t?n:""}\n          @keyframes ${i} {\n            ${this.keyframes[e](r)}\n          }\n        `})}),{props:this.props,styles:this.styles,grid:this.grid}}}function fe(e,t){let n=new pe(e);n.compose({x:1,y:1,count:1,grid:{x:1,y:1,count:1}});let{grid:r}=n.output();r&&(t=r),n.reset();for(let e=1,r=0;e<=t.x;++e)for(let s=1;s<=t.y;++s)n.compose({x:e,y:s,count:++r,grid:t});return n.output()}customElements.define("css-doodle",class extends HTMLElement{constructor(){super(),this.doodle=this.attachShadow({mode:"open"}),this.extra={get_custom_property_value:this.get_custom_property_value.bind(this)}}connectedCallback(){setTimeout(()=>{let e,t=this.getAttribute("use")||"";if(t&&(t=`@use:${t};`),!this.innerHTML.trim()&&!t)return!1;try{let n=j(t+this.innerHTML,this.extra);this.grid_size=B(this.getAttribute("grid")),(e=fe(n,this.grid_size)).grid&&(this.grid_size=e.grid)}catch(e){throw this.innerHTML="",new Error(e)}this.build_grid(e)})}get_custom_property_value(e){return getComputedStyle(this).getPropertyValue(e).trim().replace(/^\(|\)$/g,"")}build_grid(e){const{has_transition:t,has_animation:n}=e.props,{keyframes:r,host:s,container:i,cells:l}=e.styles;this.doodle.innerHTML=`\n      <style>\n  :host {\n    display: block;\n    visibility: visible;\n    width: 1em;\n    height: 1em;\n  }\n  .container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: grid;\n  }\n  .cell {\n    position: relative;\n    line-height: 1;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n</style>\n      <style class="style-keyframes">\n        ${r}\n      </style>\n      <style class="style-container">\n        ${this.style_size()}\n        ${s}\n        ${i}\n      </style>\n      <style class="style-cells">\n        ${t||n?"":l}\n      </style>\n      <div class="container">\n        ${this.html_cells()}\n      </div>\n    `,(t||n)&&setTimeout(()=>{this.set_style(".style-cells",l)},50)}style_size(){return`\n      .container {\n        grid-template-rows: repeat(${this.grid_size.x}, 1fr);\n        grid-template-columns: repeat(${this.grid_size.y}, 1fr);\n      }\n    `}html_cells(){return'<div class="cell"></div>'.repeat(this.grid_size.count)}set_style(e,t){const n=this.shadowRoot.querySelector(e);n&&(n.styleSheet?n.styleSheet.cssText=t:n.innerHTML=t)}update(e){let t=this.getAttribute("use")||"";t&&(t=`@use:${t};`),e||(e=this.innerHTML),this.innerHTML=e,this.grid_size||(this.grid_size=B(this.getAttribute("grid")));const n=fe(j(t+e,this.extra),this.grid_size);if(n.grid){let{x:e,y:t}=n.grid;if(this.grid_size.x!==e||this.grid_size.y!==t)return Object.assign(this.grid_size,n.grid),this.build_grid(n);Object.assign(this.grid_size,n.grid)}else{let n=B(this.getAttribute("grid")),{x:r,y:s}=n;if(this.grid_size.x!==r||this.grid_size.y!==s)return Object.assign(this.grid_size,n),this.build_grid(fe(j(t+e,this.extra),this.grid_size))}this.set_style(".style-keyframes",n.styles.keyframes),this.set_style(".style-container",this.style_size()+n.styles.host+n.styles.container),this.set_style(".style-cells",n.styles.cells)}get grid(){return Object.assign({},this.grid_size)}set grid(e){this.setAttribute("grid",e),this.connectedCallback()}get use(){return this.getAttribute("use")}set use(e){this.setAttribute("use",e),this.connectedCallback()}static get observedAttributes(){return["grid","use"]}attributeChangedCallback(e,t,n){if(t==n)return!1;"grid"==e&&t&&(this.grid_size=n),"use"==e&&t&&(this.use=n)}})}()}}]);
//# sourceMappingURL=1-985687170ceb5d89a195.js.map