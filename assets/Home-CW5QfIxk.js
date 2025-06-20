import{u as t,a as r,j as e}from"./index-B8T0c0Mz.js";import{m as a}from"./motion-C6L0P_PN.js";import{S as n}from"./SkillGrid-CD6wWEcT.js";import s from"./Contact-B8-oFpAe.js";const c="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",d="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",l="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",m=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-image: url(${d});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    background-image: url(${l});
  }
  @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    background-image: url(${c});
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
`,b=t.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`,i=t.a`
  display: inline-block;
  background-color: ${({theme:o})=>o.accent};
  color: ${({theme:o})=>o.buttonColor};
  text-align: center;
  padding: 0.8rem 1.6rem;
  margin: 5px;
  font-weight: 600;
  border: 1px solid ${({theme:o})=>o.borderColor};
  border-radius: 8px;
  box-shadow: ${({theme:o})=>o.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
    color: ${({theme:o})=>o.accent};
    border: 2px solid ${({theme:o})=>o.accent};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,g=t.a`
  display: inline-block;
  background-color: transparent;
  color: ${({theme:o})=>o.accent};
  text-align: center;
  padding: 0.8rem 1.6rem;
  margin: 5px;
  font-weight: 600;
  border: 2px solid ${({theme:o})=>o.accent};
  border-radius: 8px;
  box-shadow: ${({theme:o})=>o.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: ${({theme:o})=>o.accent};
    transform: scale(1.05);
    color: ${({theme:o})=>o.body};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,h=t(a.div)`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({theme:o})=>o.body};
  color: ${({theme:o})=>o.text};
`,u="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",$=()=>{const{t:o}=r();return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsxs(p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsxs("div",{children:[e.jsx("h1",{children:o("homeTitle")}),e.jsx("p",{children:o("homeDescription")})]}),e.jsx(x,{src:u,alt:"Olesia Kubska"}),e.jsxs(b,{children:[e.jsx(i,{href:"olesia-kubska-portfolio/projects",children:o("viewWork")}),e.jsx(g,{href:"olesia-kubska-portfolio/contact",children:o("contactMe")}),e.jsx(i,{href:"./docs/OlesiaKubskaCV.pdf",download:"OlesiaKubskaCV.pdf",children:o("downloadResume")})]})]})}),e.jsxs(h,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("h3",{children:o("techSkills")}),e.jsx(n,{})]}),e.jsx("div",{children:e.jsx(s,{})})]})};export{$ as default};
