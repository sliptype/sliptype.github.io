(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",function(){return b}),e(73),e(253),e(250);var r=e(214),a=e.n(r),i=e(1),o=e.n(i),u=e(217),c=e.n(u),l=e(235),f=e.n(l),m=e(242),s=e.n(m),p=e(213),d=e(216),v=e(222);function g(){var n=a()(["\n  margin-bottom: 0;\n"]);return g=function(){return n},n}e(248),e(246),e(244);var h=p.a.h3(g());t.default=function(n){var t,e=n.data.site.siteMetadata.title,r=n.data.allMarkdownRemark.edges,a=n.location.hash?(t=n.location,Number.parseInt(t.hash.replace("#",""))+1):1;return o.a.createElement(d.a,{location:n.location},o.a.createElement(s.a,null,o.a.createElement("title",null,e)),o.a.createElement(v.a,null),function(n,t){return r.slice(0,3*t)}(0,a).map(function(n){var t=n.node,e=f()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement(h,null,o.a.createElement(c.a,{style:{boxShadow:"none"},to:t.fields.slug},e)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}),!function(n,t){return r.length<=3*t}(0,a)&&o.a.createElement(c.a,{to:"#"+a},"More..."))};var b="3719820578"},215:function(n,t,e){"use strict";var r=e(214),a=e.n(r);function i(){var n=a()(["\n  margin-bottom: 0;\n  font-size: 2.8rem;\n  line-height 3.6rem;\n  & a {\n    color: black;\n  }\n\n  @media (max-width: 50rem) {\n    margin-top: 0;\n  }\n"]);return i=function(){return n},n}e(1);var o=e(213).a.h1(i());t.a=o},216:function(n,t,e){"use strict";var r=e(214),a=e.n(r),i=e(1),o=e.n(i),u=e(217),c=e.n(u),l=e(213);function f(){var n=a()(["\n  margin: 0 auto;\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return f=function(){return n},n}var m=l.a.div(f()),s=e(215);function p(){var n=a()(["\n  margin-bottom: 0;\n"]);return p=function(){return n},n}var d=l.a.h3(p());function v(){var n=a()(["\n    background: ",";\n    border-radius: ",";\n  "]);return v=function(){return n},n}function g(){var n=a()(["\n  width: 100vw;\n  height: 100vw;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 3rem;\n  z-index: 1;\n"]);return g=function(){return n},n}e(223);var h=l.a.div(g()),b=["rgba(1, 186, 239)","rgba(31, 32, 65)","rgb(235, 186, 185)","rgba(17, 157, 164)","rgba(25, 100, 126)"],E=["100% 0 0 0","0 100% 0 0","0 0 100% 0","0 0 0 100%"],y=function(n){return n[Math.floor(Math.random()*n.length)]},w=function(){return o.a.createElement(h,null,new Array(100).fill(0).map(function(n,t){return function(n){var t=l.a.div(v(),y(b),y(E));return o.a.createElement(t,{key:n})}(t)}))};function I(){var n=a()(["\n  overflow: hidden;\n  height: 25vw;\n  @media (min-width: 50rem) {\n    margin-bottom: -10rem;\n  }\n"]);return I=function(){return n},n}function x(){var n=a()(["\n  to {\n    height: 25vw;\n    max-height: 50vh;\n    min-height: 5vh;\n  }\n"]);return x=function(){return n},n}function N(){var n=a()(["\n  position: relative;\n  margin: 0 auto 0;\n\n  @media (max-width: 50rem) {\n    margin: 0 auto;\n  }\n\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  z-index: 2;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return N=function(){return n},n}var _=Object(l.a)(m)(N()),k=(Object(l.b)(x()),l.a.div(I()));t.a=function(n){var t=n.location,e=n.children,r="/"===t.pathname;return o.a.createElement("div",null,r?o.a.createElement(k,null,o.a.createElement(w,null)):null,o.a.createElement(_,null,r?o.a.createElement(s.a,null,o.a.createElement(c.a,{to:"/"},"@sliptype")):o.a.createElement(d,null,o.a.createElement(c.a,{to:"/"},"@sliptype")),e))}},222:function(n,t,e){"use strict";var r=e(214),a=e.n(r),i=e(1),o=e.n(i),u=e(213);function c(){var n=a()(["\n  padding: .4em 1em;\n  color: rgba(6, 57, 78, 0.5);\n  display: block;\n  font-size: .9em;\n\n  &:hover {\n    color: rgba(6, 57, 78, 1);\n  }\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  border-radius: 0 4px 4px 0\n"]);return l=function(){return n},n}function f(){var n=a()(["\n  border-radius: 4px 0 0 4px\n"]);return f=function(){return n},n}function m(){var n=a()(["\n  display: inline;\n  border: 1px solid rgba(6, 57, 78, 0.27);\n"]);return m=function(){return n},n}function s(){var n=a()(["\n  margin: 1em 0 0 0;\n  padding: 0;\n  font-size: .85em;\n  display: flex;\n\n  & li + li {\n    border-left: transparent;\n  }\n"]);return s=function(){return n},n}var p=u.a.ul(s()),d=u.a.li(m()),v=Object(u.a)(d)(f()),g=Object(u.a)(d)(l()),h=u.a.a(c()),b=function(){return o.a.createElement(p,null,o.a.createElement(v,null,o.a.createElement(h,{href:"https://github.com/sliptype"},"Github")),o.a.createElement(d,null,o.a.createElement(h,{href:"https://gitlab.com/sliptype"},"Gitlab")),o.a.createElement(g,null,o.a.createElement(h,{href:"https://stackoverflow.com/users/5705462/sliptype"},"Stack")))};function E(){var n=a()(["\n  margin-bottom: 3rem;\n"]);return E=function(){return n},n}var y=u.a.div(E());t.a=function(){return o.a.createElement(y,null,o.a.createElement("p",null,"Hi! I'm Sebastian Klingler. I'm a front-end engineer with a passion for building effective & maintainable systems."),o.a.createElement(b,null))}},230:function(n,t){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},231:function(n,t,e){var r=e(11),a=e(35),i=e(12),o=e(230),u="["+o+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(n,t,e){var a={},u=i(function(){return!!o[n]()||"​"!="​"[n]()}),c=a[n]=u?t(m):o[n];e&&(a[e]=c),r(r.P+r.F*u,"String",a)},m=f.trim=function(n,t){return n=String(a(n)),1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(l,"")),n};n.exports=f},244:function(n,t,e){},246:function(n,t,e){},248:function(n,t,e){},249:function(n,t,e){var r=e(5).parseInt,a=e(231).trim,i=e(230),o=/^[-+]?0[xX]/;n.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(n,t){var e=a(String(n),3);return r(e,t>>>0||(o.test(e)?16:10))}:r},250:function(n,t,e){var r=e(11),a=e(249);r(r.S+r.F*(Number.parseInt!=a),"Number",{parseInt:a})},251:function(n,t,e){var r=e(10),a=e(13),i=function(n,t){if(a(n),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,t,r){try{(r=e(25)(Function.call,e(112).f(Object.prototype,"__proto__").set,2))(n,[]),t=!(n instanceof Array)}catch(n){t=!0}return function(n,e){return i(n,e),t?n.__proto__=e:r(n,e),n}}({},!1):void 0),check:i}},252:function(n,t,e){var r=e(10),a=e(251).set;n.exports=function(n,t,e){var i,o=t.constructor;return o!==e&&"function"==typeof o&&(i=o.prototype)!==e.prototype&&r(i)&&a&&a(n,i),n}},253:function(n,t,e){"use strict";var r=e(5),a=e(15),i=e(18),o=e(252),u=e(47),c=e(12),l=e(67).f,f=e(112).f,m=e(17).f,s=e(231).trim,p=r.Number,d=p,v=p.prototype,g="Number"==i(e(68)(v)),h="trim"in String.prototype,b=function(n){var t=u(n,!1);if("string"==typeof t&&t.length>2){var e,r,a,i=(t=h?t.trim():s(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(e=t.charCodeAt(2))||120===e)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,c=t.slice(2),l=0,f=c.length;l<f;l++)if((o=c.charCodeAt(l))<48||o>a)return NaN;return parseInt(c,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(n){var t=arguments.length<1?0:n,e=this;return e instanceof p&&(g?c(function(){v.valueOf.call(e)}):"Number"!=i(e))?o(new d(b(t)),e,p):b(t)};for(var E,y=e(16)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)a(d,E=y[w])&&!a(p,E)&&m(p,E,f(d,E));p.prototype=v,v.constructor=p,e(19)(r,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-index-js-012e9ab525101f0aec8a.js.map