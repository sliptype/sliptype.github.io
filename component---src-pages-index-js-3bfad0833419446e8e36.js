(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{210:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return b});var r=t(214),a=t.n(r),i=t(1),u=t.n(i),l=t(217),o=t.n(l),c=t(235),m=t.n(c),f=t(242),d=t.n(f),s=t(213),v=t(223),h=t(222);function g(){var n=a()(["\n  margin-bottom: 0;\n"]);return g=function(){return n},n}t(248),t(246),t(244);var p=s.a.h3(g());e.default=function(n){var e=n.data.site.siteMetadata.title,t=n.data.allMarkdownRemark.edges;return u.a.createElement(v.a,{location:n.location},u.a.createElement(d.a,null,u.a.createElement("title",null,e)),u.a.createElement(h.a,null),t.map(function(n){var e=n.node,t=m()(e,"frontmatter.title")||e.fields.slug;return u.a.createElement("div",{key:e.fields.slug},u.a.createElement(p,null,u.a.createElement(o.a,{style:{boxShadow:"none"},to:e.fields.slug},t)),u.a.createElement("small",null,e.frontmatter.date),u.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))};var b="3719820578"},215:function(n,e,t){"use strict";var r=t(214),a=t.n(r);function i(){var n=a()(["\n  margin-bottom: 0;\n  font-size: 2.8rem;\n  line-height 3.6rem;\n  & a {\n    color: black;\n  }\n\n  @media (max-width: 50rem) {\n    margin-top: 0;\n  }\n"]);return i=function(){return n},n}t(1);var u=t(213).a.h1(i());e.a=u},216:function(n,e,t){"use strict";var r=t(214),a=t.n(r);function i(){var n=a()(["\n  margin: 0 auto;\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return i=function(){return n},n}t(1);var u=t(213).a.div(i());e.a=u},222:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),u=t.n(i),l=t(213);function o(){var n=a()(["\n  padding: .4em 1em;\n  color: rgba(6, 57, 78, 0.5);\n  display: block;\n  font-size: .9em;\n\n  &:hover {\n    color: rgba(6, 57, 78, 1);\n  }\n"]);return o=function(){return n},n}function c(){var n=a()(["\n  border-radius: 0 4px 4px 0\n"]);return c=function(){return n},n}function m(){var n=a()(["\n  border-radius: 4px 0 0 4px\n"]);return m=function(){return n},n}function f(){var n=a()(["\n  display: inline;\n  border: 1px solid rgba(6, 57, 78, 0.27);\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  margin: 1em 0 0 0;\n  padding: 0;\n  font-size: .85em;\n  display: flex;\n\n  & li + li {\n    border-left: transparent;\n  }\n"]);return d=function(){return n},n}var s=l.a.ul(d()),v=l.a.li(f()),h=Object(l.a)(v)(m()),g=Object(l.a)(v)(c()),p=l.a.a(o()),b=function(){return u.a.createElement(s,null,u.a.createElement(h,null,u.a.createElement(p,{href:"https://github.com/sliptype"},"Github")),u.a.createElement(v,null,u.a.createElement(p,{href:"https://gitlab.com/sliptype"},"Gitlab")),u.a.createElement(g,null,u.a.createElement(p,{href:"https://stackoverflow.com/users/5705462/sliptype"},"Stack")))};function E(){var n=a()(["\n  margin-bottom: 3rem;\n"]);return E=function(){return n},n}var w=l.a.div(E());e.a=function(){return u.a.createElement(w,null,u.a.createElement("p",null,"Hi! I'm Sebastian Klingler. I'm a front-end engineer with a passion for building effective & maintainable systems."),u.a.createElement(b,null))}},223:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),u=t.n(i),l=t(217),o=t.n(l),c=t(213),m=t(216),f=t(215);function d(){var n=a()(["\n    background: ",";\n    border-radius: ",";\n  "]);return d=function(){return n},n}function s(){var n=a()(["\n  width: 100vw;\n  height: 100vw;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 3rem;\n  z-index: 1;\n"]);return s=function(){return n},n}t(225);var v=c.a.div(s()),h=["rgba(1, 186, 239)","rgba(31, 32, 65)","rgb(235, 186, 185)","rgba(17, 157, 164)","rgba(25, 100, 126)"],g=["100% 0 0 0","0 100% 0 0","0 0 100% 0","0 0 0 100%"],p=function(n){return n[Math.floor(Math.random()*n.length)]},b=function(){return u.a.createElement(v,null,new Array(100).fill(0).map(function(n,e){return function(n){var e=c.a.div(d(),p(h),p(g));return u.a.createElement(e,{key:n})}(e)}))};function E(){var n=a()(["\n  height: 100vh;\n  max-height: 100vh;\n  min-height: 0vh;\n  overflow: hidden;\n  animation: "," .5s ease-in-out forwards;\n"]);return E=function(){return n},n}function w(){var n=a()(["\n  to {\n    height: 25vw;\n    max-height: 50vh;\n    min-height: 5vh;\n  }\n"]);return w=function(){return n},n}function x(){var n=a()(["\n  display: flex;\n"]);return x=function(){return n},n}function y(){var n=a()(["\n  position: relative;\n  margin: -10rem auto 0;\n\n  @media (max-width: 50rem) {\n    margin: 0 auto;\n  }\n\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  z-index: 2;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return y=function(){return n},n}var k=Object(c.a)(m.a)(y()),z=c.a.div(x()),M=Object(c.b)(w()),j=c.a.div(E(),M);e.a=function(n){var e=n.children;return u.a.createElement("div",null,u.a.createElement(j,null,u.a.createElement(b,null)),u.a.createElement(k,null,u.a.createElement(z,null,u.a.createElement(f.a,null,u.a.createElement(o.a,{to:"/"},"@sliptype"))),e))}},224:function(n,e,t){"use strict";var r=t(33),a=t(116),i=t(42);n.exports=function(n){for(var e=r(this),t=i(e.length),u=arguments.length,l=a(u>1?arguments[1]:void 0,t),o=u>2?arguments[2]:void 0,c=void 0===o?t:a(o,t);c>l;)e[l++]=n;return e}},225:function(n,e,t){var r=t(11);r(r.P,"Array",{fill:t(224)}),t(40)("fill")},244:function(n,e,t){},246:function(n,e,t){},248:function(n,e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-3bfad0833419446e8e36.js.map