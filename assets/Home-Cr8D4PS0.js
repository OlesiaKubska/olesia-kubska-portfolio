import{u as t,a as r,j as e}from"./index-CTZg9o38.js";import{m as a}from"./motion-CMQFhQ53.js";import{S as n}from"./SkillGrid-4UZMqFZk.js";import s from"./Contact-DU9KZsv-.js";const d="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",c="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",l="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",m=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-image: url(${c});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    background-image: url(${l});
  }
  @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    background-image: url(${d});
  }
`,p=t(a.div)`
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
`,x=t.img`
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
`,u=t.div`
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
`,g="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",j=()=>{const{t:o}=r();return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs("div",{children:[e.jsx("h1",{children:o("homeTitle")}),e.jsx("p",{children:o("homeDescription")})]}),e.jsx(x,{src:g,alt:"Olesia Kubska"}),e.jsxs(u,{children:[e.jsx(i,{href:"olesia-kubska-portfolio/projects",children:o("viewWork")}),e.jsx(i,{href:"olesia-kubska-portfolio/contact",children:o("contactMe")}),e.jsx(i,{href:"./docs/OlesiaKubskaCV.pdf",download:"OlesiaKubskaCV.pdf",children:o("downloadResume")})]})]})}),e.jsxs("div",{style:{margin:"0 auto",padding:"2rem",textAlign:"center",backgroundColor:"white"},children:[e.jsx("h3",{children:o("techSkills")}),e.jsx(n,{})]}),e.jsx("div",{children:e.jsx(s,{})})]})};export{j as default};
