(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return y}),t(73),t(253),t(250);var r=t(214),a=t.n(r),i=t(1),o=t.n(i),u=t(217),c=t.n(u),l=t(235),f=t.n(l),m=t(242),s=t.n(m),p=t(213),d=t(216),v=t(222);function g(){var n=a()(["\n  margin: 0 1rem;\n"]);return g=function(){return n},n}function h(){var n=a()(["\n  margin-bottom: 0;\n"]);return h=function(){return n},n}t(248),t(246),t(244);var b=p.a.h3(h()),E=p.a.span(g());e.default=function(n){var e,t=n.data.site.siteMetadata.title,r=n.data.allMarkdownRemark.edges,a=n.location.hash?(e=n.location,Number.parseInt(e.hash.replace("#",""))+1):1;return o.a.createElement(d.a,{location:n.location},o.a.createElement(s.a,null,o.a.createElement("title",null,t)),o.a.createElement(v.a,null),function(n,e){return r.slice(0,3*e)}(0,a).map(function(n){var e=n.node,t=f()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement(b,null,o.a.createElement(c.a,{style:{boxShadow:"none"},to:e.fields.slug},t)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",null,o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.excerpt}}),o.a.createElement(c.a,{to:e.fields.slug,class:"read-more"},o.a.createElement(E,null,"Read More"))))}),!function(n,e){return r.length<=3*e}(0,a)&&o.a.createElement(c.a,{to:"#"+a},"More..."))};var y="1510455136"},215:function(n,e,t){"use strict";var r=t(214),a=t.n(r);function i(){var n=a()(["\n  margin-bottom: 0;\n  font-size: 2.8rem;\n  line-height 3.6rem;\n  & a {\n    color: black;\n  }\n\n  @media (max-width: 50rem) {\n    margin-top: 0;\n  }\n"]);return i=function(){return n},n}t(1);var o=t(213).a.h1(i());e.a=o},216:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),o=t.n(i),u=t(217),c=t.n(u),l=t(213);function f(){var n=a()(["\n  margin: 0 auto;\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return f=function(){return n},n}var m=l.a.div(f()),s=t(215);function p(){var n=a()(["\n  margin-bottom: 0;\n"]);return p=function(){return n},n}var d=l.a.h3(p());function v(){var n=a()(["\n    background: ",";\n    border-radius: ",";\n  "]);return v=function(){return n},n}function g(){var n=a()(["\n  width: 100vw;\n  height: 100vw;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 3rem;\n  z-index: 1;\n"]);return g=function(){return n},n}t(223);var h=l.a.div(g()),b=["rgba(1, 186, 239)","rgba(31, 32, 65)","rgb(235, 186, 185)","rgba(17, 157, 164)","rgba(25, 100, 126)"],E=["100% 0 0 0","0 100% 0 0","0 0 100% 0","0 0 0 100%"],y=function(n){return n[Math.floor(Math.random()*n.length)]},w=function(){return o.a.createElement(h,null,new Array(100).fill(0).map(function(n,e){return function(n){var e=l.a.div(v(),y(b),y(E));return o.a.createElement(e,{key:n})}(e)}))};function I(){var n=a()(["\n  overflow: hidden;\n  height: 25vw;\n  max-height: 30rem;\n  @media (min-width: 50rem) {\n    margin-bottom: -10rem;\n  }\n"]);return I=function(){return n},n}function x(){var n=a()(["\n  to {\n    height: 25vw;\n    max-height: 50vh;\n    min-height: 5vh;\n  }\n"]);return x=function(){return n},n}function N(){var n=a()(["\n  position: relative;\n  margin: 0 auto 0;\n\n  @media (max-width: 50rem) {\n    margin: 0 auto;\n  }\n\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  z-index: 2;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return N=function(){return n},n}var _=Object(l.a)(m)(N()),k=(Object(l.b)(x()),l.a.div(I()));e.a=function(n){var e=n.location,t=n.children,r="/"===e.pathname;return o.a.createElement("div",null,r?o.a.createElement(k,null,o.a.createElement(w,null)):null,o.a.createElement(_,null,r?o.a.createElement(s.a,null,o.a.createElement(c.a,{to:"/"},"@sliptype")):o.a.createElement(d,null,o.a.createElement(c.a,{to:"/"},"@sliptype")),t))}},222:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),o=t.n(i),u=t(213);function c(){var n=a()(["\n  padding: .4em 1em;\n  color: rgba(6, 57, 78, 0.5);\n  display: block;\n  font-size: .9em;\n\n  &:hover {\n    color: rgba(6, 57, 78, 1);\n  }\n"]);return c=function(){return n},n}function l(){var n=a()(["\n  border-radius: 0 4px 4px 0\n"]);return l=function(){return n},n}function f(){var n=a()(["\n  border-radius: 4px 0 0 4px\n"]);return f=function(){return n},n}function m(){var n=a()(["\n  display: inline;\n  border: 1px solid rgba(6, 57, 78, 0.27);\n"]);return m=function(){return n},n}function s(){var n=a()(["\n  margin: 1em 0 0 0;\n  padding: 0;\n  font-size: .85em;\n  display: flex;\n\n  & li + li {\n    border-left: transparent;\n  }\n"]);return s=function(){return n},n}var p=u.a.ul(s()),d=u.a.li(m()),v=Object(u.a)(d)(f()),g=Object(u.a)(d)(l()),h=u.a.a(c()),b=function(){return o.a.createElement(p,null,o.a.createElement(v,null,o.a.createElement(h,{href:"https://github.com/sliptype"},"Github")),o.a.createElement(d,null,o.a.createElement(h,{href:"https://gitlab.com/sliptype"},"Gitlab")),o.a.createElement(g,null,o.a.createElement(h,{href:"https://stackoverflow.com/users/5705462/sliptype"},"Stack")))};function E(){var n=a()(["\n  margin-bottom: 3rem;\n"]);return E=function(){return n},n}var y=u.a.div(E());e.a=function(){return o.a.createElement(y,null,o.a.createElement("p",null,"Hi! I'm Sebastian Klingler. I'm a UI engineer with a passion for building effective & maintainable systems."),o.a.createElement(b,null))}},230:function(n,e){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},231:function(n,e,t){var r=t(11),a=t(35),i=t(12),o=t(230),u="["+o+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(n,e,t){var a={},u=i(function(){return!!o[n]()||"​"!="​"[n]()}),c=a[n]=u?e(m):o[n];t&&(a[t]=c),r(r.P+r.F*u,"String",a)},m=f.trim=function(n,e){return n=String(a(n)),1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n};n.exports=f},244:function(n,e,t){},246:function(n,e,t){},248:function(n,e,t){},249:function(n,e,t){var r=t(5).parseInt,a=t(231).trim,i=t(230),o=/^[-+]?0[xX]/;n.exports=8!==r(i+"08")||22!==r(i+"0x16")?function(n,e){var t=a(String(n),3);return r(t,e>>>0||(o.test(t)?16:10))}:r},250:function(n,e,t){var r=t(11),a=t(249);r(r.S+r.F*(Number.parseInt!=a),"Number",{parseInt:a})},251:function(n,e,t){var r=t(10),a=t(13),i=function(n,e){if(a(n),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,e,r){try{(r=t(25)(Function.call,t(112).f(Object.prototype,"__proto__").set,2))(n,[]),e=!(n instanceof Array)}catch(n){e=!0}return function(n,t){return i(n,t),e?n.__proto__=t:r(n,t),n}}({},!1):void 0),check:i}},252:function(n,e,t){var r=t(10),a=t(251).set;n.exports=function(n,e,t){var i,o=e.constructor;return o!==t&&"function"==typeof o&&(i=o.prototype)!==t.prototype&&r(i)&&a&&a(n,i),n}},253:function(n,e,t){"use strict";var r=t(5),a=t(15),i=t(18),o=t(252),u=t(47),c=t(12),l=t(67).f,f=t(112).f,m=t(17).f,s=t(231).trim,p=r.Number,d=p,v=p.prototype,g="Number"==i(t(68)(v)),h="trim"in String.prototype,b=function(n){var e=u(n,!1);if("string"==typeof e&&e.length>2){var t,r,a,i=(e=h?e.trim():s(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(t=e.charCodeAt(2))||120===t)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,c=e.slice(2),l=0,f=c.length;l<f;l++)if((o=c.charCodeAt(l))<48||o>a)return NaN;return parseInt(c,r)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof p&&(g?c(function(){v.valueOf.call(t)}):"Number"!=i(t))?o(new d(b(e)),t,p):b(e)};for(var E,y=t(16)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;y.length>w;w++)a(d,E=y[w])&&!a(p,E)&&m(p,E,f(d,E));p.prototype=v,v.constructor=p,t(19)(r,"Number",p)}}}]);
//# sourceMappingURL=component---src-pages-index-js-cb2f923345de5fa56779.js.map