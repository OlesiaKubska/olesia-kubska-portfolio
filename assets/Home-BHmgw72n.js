import{u as t,a,j as e}from"./index-BuX6SEg0.js";import{m as n}from"./motion-trJ27-f2.js";const r="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",s="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",d="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",c=t.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 min-height: 100vh;
 background-position: center;
 background-image: url(${s});
 background-size: cover;
 background-repeat: no-repeat;

 @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
  background-image: url(${d});
 }
 @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
  background-image: url(${r});
 }
`,l=t(n.div)`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
 padding: 20px;
 background-color: ${({theme:o})=>o.homeBackground};
 overflow: hidden;

 h1 {
  text-align: center;
 }

 p {
  text-align: center;
 }

 @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
  padding: 10px;
 }
`,p=t.img`
 width: 100%;
 max-width: 280px;
 height: 280px;
 border-radius: 50%;
 margin-bottom: 20px;
 object-fit: cover;

 @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
  max-width: 180px;
  margin-bottom: 15px;
  border-radius: 20%;
 }
`,m=t.div`
 display: flex;
 text-align: center;
 flex-wrap: wrap;
 justify-content: center;
`,i=t.a`
 display: inline-block;
 background-color: ${({theme:o})=>o.buttonBackground};
 color: ${({theme:o})=>o.buttonColor};
 text-align: center;
 padding: 10px 20px;
 margin: 5px;
 border: 1px solid ${({theme:o})=>o.borderColor};
 border-radius: 5px;
 transition: background-color 0.3s, transform 0.2s ease;

 &:hover {
  background-color: ${({theme:o})=>o.buttonHover};
  transform: scale(1.05);
  color: ${({theme:o})=>o.buttonColorHover};
 }

 &:active {
  transform: scale(0.95);
 }

 @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
  padding: 8px 16px;
  font-size: 14px;
 }
`,u="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",g=()=>{const{t:o}=a();return e.jsx(c,{children:e.jsxs(l,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs("div",{children:[e.jsx("h1",{children:o("homeTitle")}),e.jsx("p",{children:o("homeDescription")})]}),e.jsx(p,{src:u,alt:"Olesia Kubska"}),e.jsxs(m,{children:[e.jsx(i,{href:"olesia-kubska-portfolio/projects",children:o("viewWork")}),e.jsx(i,{href:"olesia-kubska-portfolio/contact",children:o("contactMe")}),e.jsx(i,{href:"./docs/OlesiaKubskaCV.pdf",download:"OlesiaKubskaCV.pdf",children:o("downloadResume")})]})]})})};export{g as default};
