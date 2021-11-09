(this["webpackJsonppinkston-portfolio"]=this["webpackJsonppinkston-portfolio"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"id":0,"name":"e-commerce","category":"backend","deploy":"https://drive.google.com/file/d/1cvb-5cGYwB3fTcLSXjZWt1M0FRTCR2RW/view","github":"https://github.com/Miguel-Con-Queso/e-commerce.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Backend/e-commerce.png?raw=true","topics":"Express.js, MySQL, Sequelize, ORM, and Node.js"},{"id":1,"name":"socialMediaAPI","category":"backend","deploy":"https://drive.google.com/file/d/1tMcVW0nSrRrcQNvt2yxYXX9F17nQbWee/view?usp=sharing","github":"https://github.com/Miguel-Con-Queso/socialMediaAPI.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Backend/socialMediaAPI.png?raw=true","topics":"Mongoose, MongoDB, Express.js, Node.js, and NoSQL"},{"id":2,"name":"run-buddy","category":"frontend","deploy":"https://miguel-con-queso.github.io/run-buddy/","github":"https://github.com/Miguel-Con-Queso/run-buddy.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Frontend/run-buddy.png?raw=true","topics":"HTML5, CSS, and JavaScript"},{"id":3,"name":"robot-gladiators","category":"frontend","deploy":"https://miguel-con-queso.github.io/robot-gladiators/","github":"https://github.com/Miguel-Con-Queso/robot-gladiators.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Frontend/robot-gladiators.png?raw=true","topics":"JavaScript"},{"id":4,"name":"RPGsAnonymous","category":"personal","deploy":"https://miguel-con-queso.github.io/RPGsAnonymous/","github":"https://github.com/Miguel-Con-Queso/RPGsAnonymous.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Personal/RPGsAnonymous.png?raw=true","topics":"HTML5, CSS, JavaScript, (soon to be transitioned to a React SPA)"},{"id":5,"name":"MartiansOnly","category":"personal","deploy":"https://miguel-con-queso.github.io/MartiansOnly/","github":"https://github.com/Miguel-Con-Queso/MartiansOnly.git","image":"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/projectPics/Personal/MartiansOnly.png?raw=true","topics":"HTML, CSS, JavaScript, and NASA APIs"}]')},27:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(18),a=i.n(c),o=(i(27),i(8)),l=i(2),r=i(19),j=i.n(r),b=i(0);var m=function(){return Object(b.jsx)("div",{className:"homeSection mw-100 mh-100",children:Object(b.jsxs)("div",{className:"homeIntro",children:[Object(b.jsx)("h1",{children:"Welcome to Michael Pinkston's Portfolio!"}),Object(b.jsx)(j.a,{className:"typed-text",strings:["Front-End","Back-End","Full-Stack"],typeSpeed:50,backSpeed:50,loop:!0})]})})},d=i.p+"static/media/profilePic.ca1abafe.jpg",h=i.p+"static/media/momo.f283f96b.jpg";var u=function(){return Object(b.jsxs)("section",{className:"container aboutSection mw-100 mh-100",children:[Object(b.jsx)("img",{src:d,className:"profilePic",style:{width:"10%"},alt:"Michael Pinkston"}),Object(b.jsx)("h1",{id:"aboutTitle",children:"About Me"}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Hello! My name is Michael Kolby Pinkston. I am an Appalachian born full-stack coder. My skills and knowledge include, but are not limited to, HTML, CSS, JavaScript, Node.js, OOP, MERN, MySQL, NoSQL, TDD, and Mongoose. For fun, I enjoy reading, gaming, kayaking, and traveling! I have a B.A. from Johnson University, an M.Div. from Milligan University, and a web-development certificate from Vanderbilt University. Also, I love my cat, Momo! If you wish to speak, either click the email icon bellow or navigate to the contact section and reach out!"})}),Object(b.jsx)("img",{src:h,className:"momo",style:{width:"10%"},alt:"Momo"})]})};i(13);var p=function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"imgContainer",children:Object(b.jsx)("img",{alt:e.name,src:e.image})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("p",{className:"projectTitle",id:"cardTitle",children:e.name}),Object(b.jsxs)("div",{id:"iconContainer",children:[Object(b.jsxs)("p",{id:"topics",children:["[",e.topics,"]"]}),Object(b.jsx)("a",{href:e.github,target:"_blank",children:Object(b.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/github.png",alt:"Github Repository",id:"projectIcon"})}),Object(b.jsx)("a",{href:e.deploy,target:"_blank",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/30/000000/launched-rocket--v2.png",alt:"Deployed Application",id:"projectIcon"})})]})]})]})},g=i(20);function x(e){return Object(b.jsx)("div",{className:"wrapper",children:e.children})}var O=function(){return Object(b.jsxs)("section",{className:"container portfolioSection mw-100 mh-100",children:[Object(b.jsx)("div",{className:"project",children:Object(b.jsx)("h1",{className:"title",children:"My Projects"})}),Object(b.jsx)(x,{id:"cardData",children:g.map((function(e){return Object(b.jsx)(p,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})},v=i(10),f=i(14),y=i(16);var k=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(y.a)(e,2),i=t[0],s=t[1],c=Object(n.useState)(""),a=Object(y.a)(c,2),o=a[0],l=a[1],r=i.name,j=i.email,m=i.message,d=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Invalid email")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));o||(s(Object(f.a)(Object(f.a)({},i),{},Object(v.a)({},e.target.name,e.target.value))),console.log("Handle Form",i))};return Object(b.jsxs)("section",{className:"container contactSection mw-100 mh-100",children:[Object(b.jsx)("h1",{className:"contactTitle",children:"Contact Me"}),Object(b.jsxs)("form",{className:"justify-conent-center",id:"contactForm",children:[Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{className:"formControl",type:"text",name:"name",defaultValue:r,onBlur:d})]}),Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",{className:"formControl",type:"email",name:"email",defaultValue:j,onBlur:d})]}),Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(b.jsx)("textarea",{className:"formControl",name:"message",rows:"5",defaultValue:m,onBlur:d})]}),o&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"error-text",children:o})}),Object(b.jsx)("div",{className:"mt-5 mb-5",children:Object(b.jsx)("button",{className:"btn btn-outline-dark btn-primary","data-testid":"button",type:"submit",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",i)},children:"Submit"})})]})]})};var M=function(){return Object(b.jsxs)("div",{className:"resumeSection mw=100 mh-100",children:[Object(b.jsx)("h2",{children:"Resume Download:"}),Object(b.jsx)("a",{href:"https://github.com/Miguel-Con-Queso/pinkston-portfolio/blob/main/src/assets/files/Resume.pdf",target:"_blank",children:"Resume"}),Object(b.jsx)("h2",{children:"Education & Experience: Quick Glance"}),Object(b.jsx)("h3",{children:"Education:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Web Development Certificate, Vanderbilt University (2021)"}),Object(b.jsx)("li",{children:"Master of Divinity, Milligan University (2015-2020)"}),Object(b.jsx)("li",{children:"Bachelor of Arts, Johnson University (2011-2015)"}),Object(b.jsx)("li",{children:"High Schhol Diploma, Carter High School (2007-2011)"})]}),Object(b.jsx)("h3",{children:"Work History:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Exam Proctor, Pearson VUE (2021-present)"}),Object(b.jsx)("li",{children:"Book Seller, Barnes & Noble (2019-2021)"}),Object(b.jsx)("li",{children:"Professorial Assistant, Milligan University (2017-2019)"})]}),Object(b.jsx)("h3",{children:"Skills:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"MERN"}),Object(b.jsx)("li",{children:"TDD"}),Object(b.jsx)("li",{children:"SPA"}),Object(b.jsx)("li",{children:"Research"})]})]})};var N=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark sticky-top",children:[Object(b.jsx)(o.b,{to:"/",className:"navbar-brand",children:"Michael Pinkston"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(b.jsx)("li",{className:"navItem active",children:Object(b.jsx)(o.b,{to:"/about",className:"navLink",children:"About Me"})}),Object(b.jsx)("li",{className:"navItem active",children:Object(b.jsx)(o.b,{to:"/portfolio",className:"navLink",children:"Portfolio"})}),Object(b.jsx)("li",{className:"navItem active",children:Object(b.jsx)(o.b,{to:"/contact",className:"navLink",children:"Contact"})}),Object(b.jsx)("li",{className:"navItem active",children:Object(b.jsx)(o.b,{to:"/resume",className:"navLink",children:"Resume"})})]})})]}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(u,{})}),Object(b.jsx)(l.a,{path:"/portfolio",children:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(k,{})}),Object(b.jsx)(l.a,{path:"/resume",children:Object(b.jsx)(M,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(m,{})})]})]})};var S=function(){return Object(b.jsxs)("footer",{className:"footer sticky-bottom",children:[Object(b.jsx)("a",{href:"https://github.com/Miguel-Con-Queso",target:"_blank",children:Object(b.jsx)("img",{src:"https://img.icons8.com/color/64/000000/github--v3.png",alt:"Michael Pinkston's Github",className:"icon"})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/michael-k-pinkston-955bb3208/",target:"_blank",children:Object(b.jsx)("img",{src:"https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png",alt:"Michael Pinkston's LinkedIn",className:"icon"})}),Object(b.jsx)("a",{href:"mailto: mkpinkston@my.milligan.edu",target:"_blank",children:Object(b.jsx)("img",{src:"https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-email-notifications-justicon-lineal-color-justicon.png",alt:"Michael Pinkston's Email",className:"icon"})})]})};var P=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(N,{}),Object(b.jsx)(S,{})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.653b4f53.chunk.js.map