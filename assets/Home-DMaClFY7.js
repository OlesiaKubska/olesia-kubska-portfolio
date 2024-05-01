import{u as t,j as e}from"./index-CLgU3u8D.js";import{m as a}from"./motion-s2JmHtY7.js";const n="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",r="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",s="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",d=t.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 min-height: 100vh;
 background-position: center;
 background-image: url(${r});
 background-size: cover;
 background-repeat: no-repeat;

 @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
  background-image: url(${s});
 }
 @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
  background-image: url(${n});
 }
`,c=t(a.div)`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100vh;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
 padding: 20px;
 background-color: ${({theme:o})=>o.homeBackground};

 h1 {
  text-align: center;
 }

 p {
  text-align: center;
 }
`,l=t.img`
 width: 100%;
 max-width: 280px;
 height: 280px;
 border-radius: 50%;
 margin-bottom: 20px;
 object-fit: cover;
`,i=t.a`
 display: inline-block;
 background-color: ${({theme:o})=>o.buttonBackground};
 color: ${({theme:o})=>o.text};
 text-align: center;
 padding: 10px 20px;
 margin: 5px;
 border: 1px solid ${({theme:o})=>o.borderColor};
 border-radius: 5px;
 transition: background-color 0.3s, transform 0.2s ease;

 &:hover {
  background-color: ${({theme:o})=>o.buttonHover};
  transform: scale(1.05);
  color: ${({theme:o})=>o.body};
 }

 &:active {
  transform: scale(0.95);
 }

 @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
  padding: 8px 16px;
 }
`,p="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",g=()=>e.jsx(d,{children:e.jsxs(c,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs("div",{children:[e.jsx("h1",{children:"Starting on a New Key: From Music to Coding"}),e.jsx("p",{children:"I am Olesia Kubska, a passionate Full Stack Developer dedicated to building and optimizing interactive, user-friendly, and feature-rich websites. Ready to enhance the digital footprint of your business?"})]}),e.jsx(l,{src:p,alt:"Olesia Kubska"}),e.jsxs("div",{children:[e.jsx(i,{href:"olesia-kubska-portfolio/projects",children:"View My Work"}),e.jsx(i,{href:"olesia-kubska-portfolio/contact",children:"Contact Me"}),e.jsx(i,{href:"path_to_your_resume.pdf",download:"Olesia Kubska.pdf",children:"Download Resume"})]})]})});export{g as default};