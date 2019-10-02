(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(t,a,e){"use strict";e.r(a);var n=e(9),i=(e(0),e(159)),o=e(157),r=e(172),s=e.n(r),l=e(173),c=e.n(l),u=e(174),d=e.n(u);a.default=function(){return Object(n.a)(i.a,null,Object(n.a)(o.a,{title:"About"}),Object(n.a)("h1",null,"About"),Object(n.a)("p",null,"The Southeast Data Librarian Symposium is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data. This is the second year of the symposium."),Object(n.a)("p",null,"In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers and scientists, and those situated outside the Southeast."),Object(n.a)("h2",null,"Planning Committee"),Object(n.a)("ul",null,Object(n.a)("li",null,"Melissa Chomintra, Tulane University"),Object(n.a)("li",null,"Courtney Kearney, Tulane University"),Object(n.a)("li",null,"Chris Eaker, University of Tennessee Knoxville"),Object(n.a)("li",null,"Nina Exner, Virginia Commonwealth University"),Object(n.a)("li",null,"Betty Garrison, Elon University"),Object(n.a)("li",null,"Walt Gurley, North Carolina State University"),Object(n.a)("li",null,"Susan Parham, Georgia Institute of Technology"),Object(n.a)("li",null,"Lucy Rosenbloom, Loyola University New Orleans"),Object(n.a)("li",null,"Kayla Siddell, Xavier University of Louisiana")),Object(n.a)("h2",null,"Sponsors"),Object(n.a)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap"}},Object(n.a)("img",{src:s.a,style:{maxWidth:"250px",margin:"2em"},alt:"Tulane University logo in green and white"}),Object(n.a)("img",{src:c.a,style:{maxWidth:"175px",margin:"2em"},alt:"Xavier University of Louisiana seal"}),Object(n.a)("img",{src:d.a,style:{maxWidth:"175px",margin:"2em"},alt:"iassist logo"})))}},154:function(t,a,e){var n;t.exports=(n=e(156))&&n.default||n},155:function(t,a,e){"use strict";e(9);var n=e(0),i=e.n(n),o=e(4),r=e.n(o),s=e(34),l=e.n(s);e.d(a,"a",function(){return l.a});e(154),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},156:function(t,a,e){"use strict";e.r(a);e(56);var n=e(0),i=e.n(n),o=e(4),r=e.n(o),s=e(57),l=e(2),c=function(t){var a=t.location,e=l.default.getResourcesForPathnameSync(a.pathname);return e?i.a.createElement(s.a,Object.assign({location:a,pageResources:e},e.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=c},157:function(t,a,e){"use strict";var n=e(9),i=e(158),o=(e(0),e(4)),r=e.n(o),s=e(163),l=e.n(s);function c(t){var a=t.description,e=t.lang,o=t.meta,r=t.keywords,s=t.title,c=i.data.site,u=a||c.siteMetadata.description;return Object(n.a)(l.a,{htmlAttributes:{lang:e},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},a.a=c},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Southeast Data Librarian Symposium 2019",description:"Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.",author:"@SEDataLibrarian"}}}}},159:function(t,a,e){"use strict";var n=e(9),i=e(0),o=e.n(i),r=(e(160),e(7)),s=e.n(r),l=e(155),c=e(153),u=e(161),d=e.n(u),b=function(t){return Object(n.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(n.a)(l.a,{className:d.a.headerLink,activeClassName:d.a.active,to:t.to},t.children))},p=function(t){function a(a){var e;return(e=t.call(this,a)||this).toggleNavMenu=function(){e.setState({menuOpen:!e.state.menuOpen})},e.state={menuOpen:!1},e}return s()(a,t),a.prototype.render=function(){var t=this;return Object(n.a)("header",{className:d.a.header},Object(n.a)("div",{className:d.a.mobileMenuPreventClick+"\n          "+(this.state.menuOpen?d.a.active:""),onClick:function(){return t.state.menuOpen?t.toggleNavMenu():""}}),Object(n.a)("span",{className:d.a.mobileMenu},Object(n.a)(c.e,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("h1",{className:d.a.headerTitle},Object(n.a)(l.a,{className:d.a.headerLink,to:"/"},"Southeast Data Librarian Symposium 2019")),Object(n.a)("nav",{className:this.state.menuOpen?d.a.slideOut:""},Object(n.a)("span",{className:d.a.closeMobileMenu},Object(n.a)(c.a,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("ul",{className:d.a.pageLinks},Object(n.a)(b,{to:"/about/"},"About"),Object(n.a)(b,{to:"/registration/"},"Registration"),Object(n.a)(b,{to:"/program/"},"Program"),Object(n.a)(b,{to:"/location-transportation/"},"Location/Transportation"),Object(n.a)(b,{to:"/lodging/"},"Lodging"),Object(n.a)(b,{to:"/accessibility/"},"Accessibility"),Object(n.a)(b,{to:"/code-of-conduct/"},"Code of Conduct"))))},a}(o.a.Component),m=e(162),h=e.n(m),g=function(){return Object(n.a)("footer",null,Object(n.a)("h4",null,"Contact us: "),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via email","aria-label":"Contact us via email",href:"mailto:se.datalibrarian@gmail.com"},Object(n.a)(c.d,null))),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via twitter","aria-label":"Contact us via twitter",href:"https://twitter.com/SEDataLibrarian"},Object(n.a)(c.c,null))),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via GitHub","aria-label":"Contact us via GitHub",href:"https://github.com/se-datalibrarian"},Object(n.a)(c.b,null))))};a.a=function(t){var a=t.children;return Object(n.a)("div",null,Object(n.a)(p,null),Object(n.a)("main",null,a),Object(n.a)(g,null))}},172:function(t,a,e){t.exports=e.p+"static/TulaneShield-c81124c3dafcc84d601392c599226a58.png"},173:function(t,a,e){t.exports=e.p+"static/xavier-seal-f823c773bc55adaed446347fdcc24e51.png"},174:function(t,a,e){t.exports=e.p+"static/iassist-457a2871d749fa38a332a358912c0979.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-084cf45a6fb4a63b8570.js.map