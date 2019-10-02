(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(9),i=(a(0),a(159)),o=a(157);t.default=function(){return Object(n.a)(i.a,null,Object(n.a)(o.a,{title:"Accessibility"}),Object(n.a)("h1",null,"Southeast Data Librarian Symposium Planning Committee Commitment to Accessibility"),Object(n.a)("p",null,"The Southeast Data Librarian Symposium planning committee is an intentional ally of accessibility. We are committed to providing a learning environment rooted in openness, inclusion, and opportunity. The following are ways in which we honor our commitment:"),Object(n.a)("h2",null,"Location and Environment:"),Object(n.a)("ul",null,Object(n.a)("li",null,"This conference is fragrance-free. Exposure to perfumes and other scented products (such as lotions, essential oils, and fabric softener) can trigger health reactions in people who have asthma, allergies, migraines, or chemical sensitivities. Please do not wear perfumes or other scented products so that chemically injured members of our community can attend."),Object(n.a)("li",null,"Gender Neutral/All Gendered bathrooms will be available and accessible"),Object(n.a)("li",null,"Lactation room will be available and accessible"),Object(n.a)("li",null,"A quiet room will be available"),Object(n.a)("li",null,"A map with accessible entrances and routes of the conference venue will be provided (forthcoming)")),Object(n.a)("h2",null,"Presenters:"),Object(n.a)("ul",null,Object(n.a)("li",null,"Please provide 5 access copies (print copies) of your presentations for audience members. Some should be in at least 12 pt font and the remaining at least 16 pt font"),Object(n.a)("li",null,"If you use images in your presentation and/or handouts, please provide a brief verbal and text description of what the image contains, alongside the context and intention of the images"),Object(n.a)("li",null,"When choosing the slide and text colors of your presentation, please choose high contrast colors (e.g. black text on white background) for best visibility"),Object(n.a)("li",null,"During your presentation, please repeat names and questions during Q&A using the microphone")))}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e,t,a){"use strict";a(9);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),s=a(34),c=a.n(s);a.d(t,"a",function(){return c.a});a(154),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},156:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),s=a(57),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var n=a(9),i=a(158),o=(a(0),a(4)),r=a.n(o),s=a(163),c=a.n(s);function l(e){var t=e.description,a=e.lang,o=e.meta,r=e.keywords,s=e.title,l=i.data.site,u=t||l.siteMetadata.description;return Object(n.a)(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=l},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Southeast Data Librarian Symposium 2019",description:"Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.",author:"@SEDataLibrarian"}}}}},159:function(e,t,a){"use strict";var n=a(9),i=a(0),o=a.n(i),r=(a(160),a(7)),s=a.n(r),c=a(155),l=a(153),u=a(161),b=a.n(u),m=function(e){return Object(n.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(n.a)(c.a,{className:b.a.headerLink,activeClassName:b.a.active,to:e.to},e.children))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleNavMenu=function(){a.setState({menuOpen:!a.state.menuOpen})},a.state={menuOpen:!1},a}return s()(t,e),t.prototype.render=function(){var e=this;return Object(n.a)("header",{className:b.a.header},Object(n.a)("div",{className:b.a.mobileMenuPreventClick+"\n          "+(this.state.menuOpen?b.a.active:""),onClick:function(){return e.state.menuOpen?e.toggleNavMenu():""}}),Object(n.a)("span",{className:b.a.mobileMenu},Object(n.a)(l.e,{onClick:function(){return e.toggleNavMenu()}})),Object(n.a)("h1",{className:b.a.headerTitle},Object(n.a)(c.a,{className:b.a.headerLink,to:"/"},"Southeast Data Librarian Symposium 2019")),Object(n.a)("nav",{className:this.state.menuOpen?b.a.slideOut:""},Object(n.a)("span",{className:b.a.closeMobileMenu},Object(n.a)(l.a,{onClick:function(){return e.toggleNavMenu()}})),Object(n.a)("ul",{className:b.a.pageLinks},Object(n.a)(m,{to:"/about/"},"About"),Object(n.a)(m,{to:"/registration/"},"Registration"),Object(n.a)(m,{to:"/program/"},"Program"),Object(n.a)(m,{to:"/location-transportation/"},"Location/Transportation"),Object(n.a)(m,{to:"/lodging/"},"Lodging"),Object(n.a)(m,{to:"/accessibility/"},"Accessibility"),Object(n.a)(m,{to:"/code-of-conduct/"},"Code of Conduct"))))},t}(o.a.Component),p=a(162),h=a.n(p),g=function(){return Object(n.a)("footer",null,Object(n.a)("h4",null,"Contact us: "),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via email","aria-label":"Contact us via email",href:"mailto:se.datalibrarian@gmail.com"},Object(n.a)(l.d,null))),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via twitter","aria-label":"Contact us via twitter",href:"https://twitter.com/SEDataLibrarian"},Object(n.a)(l.c,null))),Object(n.a)("h1",{className:h.a.icons},Object(n.a)("a",{title:"Contact us via GitHub","aria-label":"Contact us via GitHub",href:"https://github.com/se-datalibrarian"},Object(n.a)(l.b,null))))};t.a=function(e){var t=e.children;return Object(n.a)("div",null,Object(n.a)(d,null),Object(n.a)("main",null,t),Object(n.a)(g,null))}}}]);
//# sourceMappingURL=component---src-pages-accessibility-js-407a35d4cadbeab73fd2.js.map