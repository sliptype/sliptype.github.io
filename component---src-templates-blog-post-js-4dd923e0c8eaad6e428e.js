(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(n,e,t){"use strict";t.r(e),t.d(e,"pageQuery",function(){return c});var r=t(1),a=t.n(r),i=t(242),u=t.n(i),o=(t(217),t(235),t(213),t(216)),l=t(215);t(222),e.default=function(n){var e=n.data,t=e.site.siteMetadata,r=e.markdownRemark,i=n.location;return a.a.createElement(o.a,{location:i},a.a.createElement(u.a,{title:r.frontmatter.title+" | "+t.title}),a.a.createElement(l.a,null,r.frontmatter.title),a.a.createElement("small",null,r.frontmatter.date),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}}))};var c="525352797"},215:function(n,e,t){"use strict";var r=t(214),a=t.n(r);function i(){var n=a()(["\n  margin-bottom: 0;\n  font-size: 2.8rem;\n  line-height 3.6rem;\n  & a {\n    color: black;\n  }\n\n  @media (max-width: 50rem) {\n    margin-top: 0;\n  }\n"]);return i=function(){return n},n}t(1);var u=t(213).a.h1(i());e.a=u},216:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),u=t.n(i),o=t(217),l=t.n(o),c=t(213);function m(){var n=a()(["\n  margin: 0 auto;\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return m=function(){return n},n}var f=c.a.div(m()),d=t(215);function s(){var n=a()(["\n  margin-bottom: 0;\n"]);return s=function(){return n},n}var v=c.a.h3(s());function h(){var n=a()(["\n    background: ",";\n    border-radius: ",";\n  "]);return h=function(){return n},n}function p(){var n=a()(["\n  width: 100vw;\n  height: 100vw;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  margin-bottom: 3rem;\n  z-index: 1;\n"]);return p=function(){return n},n}t(223);var g=c.a.div(p()),b=["rgba(1, 186, 239)","rgba(31, 32, 65)","rgb(235, 186, 185)","rgba(17, 157, 164)","rgba(25, 100, 126)"],E=["100% 0 0 0","0 100% 0 0","0 0 100% 0","0 0 0 100%"],w=function(n){return n[Math.floor(Math.random()*n.length)]},y=function(){return u.a.createElement(g,null,new Array(100).fill(0).map(function(n,e){return function(n){var e=c.a.div(h(),w(b),w(E));return u.a.createElement(e,{key:n})}(e)}))};function x(){var n=a()(["\n  overflow: hidden;\n  height: 25vw;\n  @media (min-width: 50rem) {\n    margin-bottom: -10rem;\n  }\n"]);return x=function(){return n},n}function k(){var n=a()(["\n  to {\n    height: 25vw;\n    max-height: 50vh;\n    min-height: 5vh;\n  }\n"]);return k=function(){return n},n}function z(){var n=a()(["\n  position: relative;\n  margin: 0 auto 0;\n\n  @media (max-width: 50rem) {\n    margin: 0 auto;\n  }\n\n  max-width: 50rem;\n  padding: 2rem 2rem;\n  z-index: 2;\n  font-size: 1.1rem;\n  background-color: white;\n"]);return z=function(){return n},n}var j=Object(c.a)(f)(z()),I=(Object(c.b)(k()),c.a.div(x()));e.a=function(n){var e=n.location,t=n.children,r="/"===e.pathname;return u.a.createElement("div",null,r?u.a.createElement(I,null,u.a.createElement(y,null)):null,u.a.createElement(j,null,r?u.a.createElement(d.a,null,u.a.createElement(l.a,{to:"/"},"@sliptype")):u.a.createElement(v,null,u.a.createElement(l.a,{to:"/"},"@sliptype")),t))}},222:function(n,e,t){"use strict";var r=t(214),a=t.n(r),i=t(1),u=t.n(i),o=t(213);function l(){var n=a()(["\n  padding: .4em 1em;\n  color: rgba(6, 57, 78, 0.5);\n  display: block;\n  font-size: .9em;\n\n  &:hover {\n    color: rgba(6, 57, 78, 1);\n  }\n"]);return l=function(){return n},n}function c(){var n=a()(["\n  border-radius: 0 4px 4px 0\n"]);return c=function(){return n},n}function m(){var n=a()(["\n  border-radius: 4px 0 0 4px\n"]);return m=function(){return n},n}function f(){var n=a()(["\n  display: inline;\n  border: 1px solid rgba(6, 57, 78, 0.27);\n"]);return f=function(){return n},n}function d(){var n=a()(["\n  margin: 1em 0 0 0;\n  padding: 0;\n  font-size: .85em;\n  display: flex;\n\n  & li + li {\n    border-left: transparent;\n  }\n"]);return d=function(){return n},n}var s=o.a.ul(d()),v=o.a.li(f()),h=Object(o.a)(v)(m()),p=Object(o.a)(v)(c()),g=o.a.a(l()),b=function(){return u.a.createElement(s,null,u.a.createElement(h,null,u.a.createElement(g,{href:"https://github.com/sliptype"},"Github")),u.a.createElement(v,null,u.a.createElement(g,{href:"https://gitlab.com/sliptype"},"Gitlab")),u.a.createElement(p,null,u.a.createElement(g,{href:"https://stackoverflow.com/users/5705462/sliptype"},"Stack")))};function E(){var n=a()(["\n  margin-bottom: 3rem;\n"]);return E=function(){return n},n}var w=o.a.div(E());e.a=function(){return u.a.createElement(w,null,u.a.createElement("p",null,"Hi! I'm Sebastian Klingler. I'm a UI engineer with a passion for building effective & maintainable systems."),u.a.createElement(b,null))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4dd923e0c8eaad6e428e.js.map