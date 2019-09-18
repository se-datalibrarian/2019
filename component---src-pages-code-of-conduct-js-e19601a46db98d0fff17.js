(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(t,e,a){"use strict";a.r(e);var n=a(9),o=(a(0),a(159)),i=a(157);e.default=function(){return Object(n.a)(o.a,null,Object(n.a)(i.a,{title:"Code of Conduct"}),Object(n.a)("h1",null,"Code of Conduct"),Object(n.a)("h2",null,"Anti-harassment Policy"),Object(n.a)("p",null,"We want the Southeast Data Librarians Symposium to be a welcoming, supportive, and comfortable space for all participants, and we will work to make it a harassment-free environment. We do not tolerate harassment of symposium participants in any form."),Object(n.a)("p",null,"Harassment includes offensive verbal comments related to race, ethnicity, sex, gender identity or expression, sexual orientation, country of origin, age, disability, physical appearance, body size, religion, veteran status or other protected class status; discriminatory or offensive images in public spaces; intimidation; stalking; harassing or unwanted photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention. Participants violating the anti-harassment policy may be warned or asked to leave by symposium organizers."),Object(n.a)("p",null,"Participants may discuss sensitive, discriminatory, offensive, or triggering topics in sessions if they are the subject of the session itself (e.g., a session focusing on the silencing of trans* history in institutional archives, or a session about workplace microaggressions experienced by people of color), but these subjects should be clear to participants prior to the start of the session."),Object(n.a)("h2",null,"Recording/Social Media Policy"),Object(n.a)("p",null,"We see the symposium as a place to share information, not only with other participants, but also with those who may not be able to attend. Sessions are, by default, considered open and can be written about on social media and photographed. If you do not want your picture taken, your words to be recorded or for either photographs or words to be attributed to you, please let other session participants know that. As a courtesy, please always ask prior to creating sound or video recordings of any sessions. Please be thoughtful and respectful with your photographs, recording, and sharing."),Object(n.a)("p",null,"Each session can decide to adopt different rules at the beginning of the session (e.g., completely private, or no attribution without asking first) as long as it informs all participants who join the session."),Object(n.a)("h2",null,"Reporting Harassment or Violations"),Object(n.a)("p",null,"If at any point during the symposium you feel uncomfortable or harassed, or if you witness any violations of these policies, please reach out to anyone who introduces themselves at the start of the day as a symposium organizer."),Object(n.a)("h2",null,"Acknowledgements"),Object(n.a)("p",null,"This policy is the same used at the ",Object(n.a)("a",{href:"https://mwdatalibrariansymposium.wordpress.com/code-of-conduct/"},"Midwest Data Librarian Symposium"),". The MDLS policy is based on the ",Object(n.a)("a",{href:"https://nycarchivesunconference.wordpress.com/code-of-conduct/"},"NYC Archives Unconference Code of Conduct"),", which is in turn based on the ",Object(n.a)("a",{href:"http://www2.archivists.org/statements/saa-code-of-conduct"},"SAA Code of Conduct")," and the ",Object(n.a)("a",{href:"http://portland.adacamp.org/policies/#ahp"},"AdaCamp event policies"),"."))}},154:function(t,e,a){var n;t.exports=(n=a(156))&&n.default||n},155:function(t,e,a){"use strict";a(9);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(34),c=a.n(r);a.d(e,"a",function(){return c.a});a(154),o.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},156:function(t,e,a){"use strict";a.r(e);a(56);var n=a(0),o=a.n(n),i=a(4),s=a.n(i),r=a(57),c=a(2),l=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?o.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=l},157:function(t,e,a){"use strict";var n=a(9),o=a(158),i=(a(0),a(4)),s=a.n(i),r=a(163),c=a.n(r);function l(t){var e=t.description,a=t.lang,i=t.meta,s=t.keywords,r=t.title,l=o.data.site,u=e||l.siteMetadata.description;return Object(n.a)(c.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:r},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Southeast Data Librarian Symposium 2019",description:"Website for the 2019 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.",author:"@SEDataLibrarian"}}}}},159:function(t,e,a){"use strict";var n=a(9),o=a(0),i=a.n(o),s=(a(160),a(7)),r=a.n(s),c=a(155),l=a(153),u=a(161),p=a.n(u),d=function(t){return Object(n.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(n.a)(c.a,{className:p.a.headerLink,activeClassName:p.a.active,to:t.to},t.children))},h=function(t){function e(e){var a;return(a=t.call(this,e)||this).toggleNavMenu=function(){a.setState({menuOpen:!a.state.menuOpen})},a.state={menuOpen:!1},a}return r()(e,t),e.prototype.render=function(){var t=this;return Object(n.a)("header",{className:p.a.header},Object(n.a)("div",{className:p.a.mobileMenuPreventClick+"\n          "+(this.state.menuOpen?p.a.active:""),onClick:function(){return t.state.menuOpen?t.toggleNavMenu():""}}),Object(n.a)("span",{className:p.a.mobileMenu},Object(n.a)(l.e,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("h1",{className:p.a.headerTitle},Object(n.a)(c.a,{className:p.a.headerLink,to:"/"},"Southeast Data Librarian Symposium 2019")),Object(n.a)("nav",{className:this.state.menuOpen?p.a.slideOut:""},Object(n.a)("span",{className:p.a.closeMobileMenu},Object(n.a)(l.a,{onClick:function(){return t.toggleNavMenu()}})),Object(n.a)("ul",{className:p.a.pageLinks},Object(n.a)(d,{to:"/about/"},"About"),Object(n.a)(d,{to:"/registration/"},"Registration"),Object(n.a)(d,{to:"/program/"},"Program"),Object(n.a)(d,{to:"/location-transportation/"},"Location/Transportation"),Object(n.a)(d,{to:"/lodging/"},"Lodging"),Object(n.a)(d,{to:"/accessibility/"},"Accessibility"),Object(n.a)(d,{to:"/code-of-conduct/"},"Code of Conduct"))))},e}(i.a.Component),b=a(162),m=a.n(b),f=function(){return Object(n.a)("footer",null,Object(n.a)("h4",null,"Contact us: "),Object(n.a)("h1",{className:m.a.icons},Object(n.a)("a",{title:"Contact us via email","aria-label":"Contact us via email",href:"mailto:se.datalibrarian@gmail.com"},Object(n.a)(l.d,null))),Object(n.a)("h1",{className:m.a.icons},Object(n.a)("a",{title:"Contact us via twitter","aria-label":"Contact us via twitter",href:"https://twitter.com/SEDataLibrarian"},Object(n.a)(l.c,null))),Object(n.a)("h1",{className:m.a.icons},Object(n.a)("a",{title:"Contact us via GitHub","aria-label":"Contact us via GitHub",href:"https://github.com/se-datalibrarian"},Object(n.a)(l.b,null))))};e.a=function(t){var e=t.children;return Object(n.a)("div",null,Object(n.a)(h,null),Object(n.a)("main",null,e),Object(n.a)(f,null))}}}]);
//# sourceMappingURL=component---src-pages-code-of-conduct-js-e19601a46db98d0fff17.js.map