(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(9),i=(a(0),a(156)),r=a(154),c=a(169),s=a.n(c);t.default=function(){return Object(n.a)(i.a,null,Object(n.a)(r.a,{title:"Home",keywords:["librarian","data librarian","research data","data management","data visualization"]}),Object(n.a)(s.a,{style:{maxHeight:"250px"}}),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"The 2019 Southeast Data Librarian Symposium"),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"Tulane University in New Orleans, LA"),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"October 10-11"),Object(n.a)("p",null,"The Southeast Data Librarian Symposium (SEDLS) is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data."),Object(n.a)("p",null,"This is the second year of the symposium following ",Object(n.a)("a",{href:"https://se-datalibrarian.github.io/2018/"},"the inaugural symposium")," held at the Georgia Tech Library in Atlanta, GA in 2018."))}},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),i=a.n(n),r=a(4),c=a.n(r),s=a(57),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,a){"use strict";var n=a(9),i=a(155),r=(a(0),a(4)),c=a.n(r),s=a(160),o=a.n(s);function l(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,l=i.data.site,u=t||l.siteMetadata.description;return Object(n.a)(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=l},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Southeast Data Librarian Symposium 2019",description:"Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.",author:"@SEDataLibrarian"}}}}},156:function(e,t,a){"use strict";var n=a(9),i=a(0),r=a.n(i),c=(a(157),a(7)),s=a.n(c),o=a(4),l=a.n(o),u=a(34),d=a.n(u);a(152),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;var m=a(151),p=a(158),h=a.n(p),b=function(e){return Object(n.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(n.a)(d.a,{className:h.a.headerLink,activeClassName:h.a.active,to:e.to},e.children))},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavMenu=function(){a.setState({menuOpen:!a.state.menuOpen})},a.state={menuOpen:!1},a}return s()(t,e),t.prototype.render=function(){var e=this;return Object(n.a)("header",{className:h.a.header,onClick:function(){return e.state.menuOpen?e.toggleNavMenu():""}},Object(n.a)("span",{className:h.a.mobileMenu},Object(n.a)(m.e,{onClick:function(){return e.toggleNavMenu()}})),Object(n.a)("h1",{className:h.a.headerTitle},Object(n.a)(d.a,{className:h.a.headerLink,to:"/"},"Southeast Data Librarian Symposium 2019")),Object(n.a)("nav",{className:this.state.menuOpen?h.a.slideOut:""},Object(n.a)("span",{className:h.a.closeMobileMenu},Object(n.a)(m.a,{onClick:function(){return e.toggleNavMenu()}})),Object(n.a)("ul",{className:h.a.pageLinks},Object(n.a)(b,{to:"/about/"},"About"),Object(n.a)(b,{to:"/registration/"},"Registration"),Object(n.a)(b,{to:"/program/"},"Program"),Object(n.a)(b,{to:"/lodging/"},"Lodging"),Object(n.a)(b,{to:"/code-of-conduct/"},"Code of Conduct"))))},t}(r.a.Component),f=a(159),y=a.n(f),O=function(){return Object(n.a)("footer",null,Object(n.a)("h4",null,"Contact us: "),Object(n.a)("h1",{className:y.a.icons},Object(n.a)("a",{title:"Contact us via email","aria-label":"Contact us via email",href:"mailto:se.datalibrarian@gmail.com"},Object(n.a)(m.d,null))),Object(n.a)("h1",{className:y.a.icons},Object(n.a)("a",{title:"Contact us via twitter","aria-label":"Contact us via twitter",href:"https://twitter.com/SEDataLibrarian"},Object(n.a)(m.c,null))),Object(n.a)("h1",{className:y.a.icons},Object(n.a)("a",{title:"Contact us via GitHub","aria-label":"Contact us via GitHub",href:"https://github.com/se-datalibrarian"},Object(n.a)(m.b,null))))};t.a=function(e){var t=e.children;return Object(n.a)("div",null,Object(n.a)(g,null),Object(n.a)("main",null,t),Object(n.a)(O,null))}},169:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},n.createElement("style",null,".cls-1{fill:#336667;}.cls-2{fill:#fff;}")),n.createElement("title",{key:1},"logo-wide-tulane"),n.createElement("g",{id:"Layer_2","data-name":"Layer 2",key:2},n.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},[n.createElement("polygon",{className:"cls-1",points:"116.67 0 116.67 116.67 0 116.67 108.66 8.01 116.67 0",key:0}),n.createElement("path",{className:"cls-2",d:"M42,107.25l4.13-4.68a19.69,19.69,0,0,0,13.1,5.25c5.8,0,9-2.58,9-6.14,0-4.32-3.35-5.52-7.89-7.37l-6.47-2.74c-4.68-1.78-9.82-5-9.82-11.57,0-6.89,6.43-12.1,15.48-12.1A21,21,0,0,1,74,73.45l-3.63,4.32A16.59,16.59,0,0,0,59.3,73.83c-4.82,0-8.07,2.16-8.07,5.77,0,3.84,4,5.24,8,6.76L65.45,89c5.75,2.16,10,5.39,10,11.86,0,7.09-6.21,12.89-16.6,12.89A24.6,24.6,0,0,1,42,107.25Z",key:1}),n.createElement("path",{className:"cls-2",d:"M83.74,67.9h28.89v5.93H90.77v13h18.49v5.93H90.77v15.06h22.56v5.93H83.74Z",key:2}),n.createElement("path",{className:"cls-1",d:"M120.44,67.9h11.67c13.64,0,21.45,7.87,21.45,22.72s-7.81,23.13-21.09,23.13h-12ZM131.65,108c9.57,0,14.66-6,14.66-17.4s-5.09-17-14.66-17h-4.18V108Z",key:3}),n.createElement("path",{className:"cls-1",d:"M162,67.9h7v39.92h22.06v5.93H162Z",key:4}),n.createElement("path",{className:"cls-1",d:"M196,107.25l4.12-4.68a19.69,19.69,0,0,0,13.11,5.25c5.8,0,9-2.58,9-6.14,0-4.32-3.35-5.52-7.89-7.37l-6.47-2.74c-4.68-1.78-9.81-5-9.81-11.57,0-6.89,6.43-12.1,15.48-12.1A21,21,0,0,1,228,73.45l-3.63,4.32a16.54,16.54,0,0,0-11.07-3.94c-4.83,0-8.07,2.16-8.07,5.77,0,3.84,4,5.24,8,6.76L219.44,89c5.75,2.16,10.05,5.39,10.05,11.86,0,7.09-6.21,12.89-16.61,12.89A24.57,24.57,0,0,1,196,107.25Z",key:5})]))])}i.defaultProps={viewBox:"0 0 229.49 116.67"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-js-e210b7b305fed2bbff15.js.map