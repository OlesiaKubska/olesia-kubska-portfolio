import{u as e,a as r,j as t}from"./index-DReV82HJ.js";import{m as a}from"./motion-B_C8MPqM.js";import{S as n}from"./SkillGrid-idTlzdof.js";import s from"./Contact-nvS_4d1I.js";const d="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",c="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",l="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",m=e.div`
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
`,p=e(a.div)`
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
`,b=e.img`
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
`,x=e.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
`,i=e.a`
  display: inline-block;
  background-color: ${({theme:o})=>o.buttonBackground};
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
    color: ${({theme:o})=>o.buttonBackground};
    border: 2px solid ${({theme:o})=>o.buttonBackground};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${({theme:o})=>o.breakpoint.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
  }
`,g=e.a`
  display: inline-block;
  background-color: transparent;
  color: ${({theme:o})=>o.buttonBackground};
  text-align: center;
  padding: 0.8rem 1.6rem;
  margin: 5px;
  font-weight: 600;
  border: 2px solid ${({theme:o})=>o.buttonBackground};
  border-radius: 8px;
  box-shadow: ${({theme:o})=>o.boxShadow};
  transition: background-color 0.3s, transform 0.2s ease;

  &:hover {
    background-color: ${({theme:o})=>o.buttonBackground};
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
`,u=e(a.div)`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({theme:o})=>o.body};
  color: ${({theme:o})=>o.text};
`,k="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",$=()=>{const{t:o}=r();return t.jsxs(t.Fragment,{children:[t.jsx(m,{children:t.jsxs(p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[t.jsxs("div",{children:[t.jsx("h1",{children:o("homeTitle")}),t.jsx("p",{children:o("homeDescription")})]}),t.jsx(b,{src:k,alt:"Olesia Kubska"}),t.jsxs(x,{children:[t.jsx(i,{href:"olesia-kubska-portfolio/projects",children:o("viewWork")}),t.jsx(g,{href:"olesia-kubska-portfolio/contact",children:o("contactMe")}),t.jsx(i,{href:"./docs/OlesiaKubskaCV.pdf",download:"OlesiaKubskaCV.pdf",children:o("downloadResume")})]})]})}),t.jsxs(u,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[t.jsx("h3",{children:o("techSkills")}),t.jsx(n,{})]}),t.jsx("div",{children:t.jsx(s,{})})]})};export{$ as default};
