(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(t,a,e){"use strict";e.r(a);var n=e(9),i=(e(0),e(156)),r=e(154),o=e(167),s=e.n(o),c={name:"1wdf1to",styles:"display:block;margin:0 auto 1.61rem;width:300px;max-width:90%;"};a.default=function(){return Object(n.a)(i.a,null,Object(n.a)(r.a,{title:"Home",keywords:["librarian","research data","data management","data visualization"]}),Object(n.a)("img",{css:c,src:s.a,alt:"Southeast Data Librarian Symposium Logo"}),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"The 2019 Southeast Data Librarian Symposium"),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"Tulane University in New Orleans, LA"),Object(n.a)("h3",{style:{display:"block",textAlign:"center"}},"October 10-11"),Object(n.a)("p",null,"The Southeast Data Librarian Symposium (SEDLS) is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data."),Object(n.a)("p",null,"This is the second year of the symposium following ",Object(n.a)("a",{href:"https://se-datalibrarian.github.io/2018/"},"the inaugural symposium")," held at the Georgia Tech Library in Atlanta, GA in 2018."))}},152:function(t,a,e){var n;t.exports=(n=e(153))&&n.default||n},153:function(t,a,e){"use strict";e.r(a);e(56);var n=e(0),i=e.n(n),r=e(4),o=e.n(r),s=e(57),c=e(2),l=function(t){var a=t.location,e=c.default.getResourcesForPathnameSync(a.pathname);return e?i.a.createElement(s.a,Object.assign({location:a,pageResources:e},e.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=l},154:function(t,a,e){"use strict";var n=e(9),i=e(155),r=(e(0),e(4)),o=e.n(r),s=e(160),c=e.n(s);function l(t){var a=t.description,e=t.lang,r=t.meta,o=t.keywords,s=t.title,l=i.data.site,u=a||l.siteMetadata.description;return Object(n.a)(c.a,{htmlAttributes:{lang:e},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},a.a=l},155:function(t){t.exports={data:{site:{siteMetadata:{title:"Southeast Data Librarian Symposium 2019",description:"Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.",author:"@SEDataLibrarian"}}}}},156:function(t,a,e){"use strict";var n=e(9),i=e(0),r=e.n(i),o=(e(157),e(7)),s=e.n(o),c=e(4),l=e.n(c),u=e(34),d=e.n(u);e(152),r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;var b=e(151),p=e(158),m=e.n(p),h=function(t){return Object(n.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(n.a)(d.a,{className:m.a.headerLink,activeClassName:m.a.active,to:t.to},t.children))},g=function(t){function a(a){var e;return(e=t.call(this,a)||this).toggleNavMenu=function(){e.setState({menuOpen:!e.state.menuOpen})},e.state={menuOpen:!1},e}return s()(a,t),a.prototype.render=function(){var t=this;return Object(n.a)("header",{className:m.a.header},Object(n.a)("span",{className:m.a.mobileMenu},Object(n.a)(b.e,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("h1",{className:m.a.headerTitle},Object(n.a)(d.a,{className:m.a.headerLink,to:"/"},"Southeast Data Librarian Symposium 2019")),Object(n.a)("nav",{className:this.state.menuOpen?m.a.slideOut:""},Object(n.a)("span",{className:m.a.closeMobileMenu},Object(n.a)(b.a,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("ul",{className:m.a.pageLinks},Object(n.a)(h,{to:"/about/"},"About"),Object(n.a)(h,{to:"/registration/"},"Registration"),Object(n.a)(h,{to:"/program/"},"Program"),Object(n.a)(h,{to:"/lodging/"},"Lodging"),Object(n.a)(h,{to:"/code-of-conduct/"},"Code of Conduct"))))},a}(r.a.Component),O=e(159),f=e.n(O),j=function(){return Object(n.a)("footer",null,Object(n.a)("h4",null,"Contact us: "),Object(n.a)("h1",{className:f.a.icons},Object(n.a)("a",{title:"Contact us via email","aria-label":"Contact us via email",href:"mailto:se.datalibrarian@gmail.com"},Object(n.a)(b.d,null))),Object(n.a)("h1",{className:f.a.icons},Object(n.a)("a",{title:"Contact us via twitter","aria-label":"Contact us via twitter",href:"https://twitter.com/SEDataLibrarian"},Object(n.a)(b.c,null))),Object(n.a)("h1",{className:f.a.icons},Object(n.a)("a",{title:"Contact us via GitHub","aria-label":"Contact us via GitHub",href:"https://github.com/se-datalibrarian"},Object(n.a)(b.b,null))))};a.a=function(t){var a=t.children;return Object(n.a)("div",null,Object(n.a)(g,null),Object(n.a)("main",null,a),Object(n.a)(j,null))}},167:function(t,a,e){t.exports=e.p+"static/SEDLSlogo-3793547c6334c3367830f4c537eef034.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-478f64314227c5acf9f3.js.map