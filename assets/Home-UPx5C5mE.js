import{u as e,a,j as t}from"./index-B3ZYKQPZ.js";import{m as i}from"./motion-D3Fs6bMr.js";import{A as n,S as d}from"./AboutHighlights--uCLXrtT.js";import s from"./Contact-D_17M0Bu.js";const c="/olesia-kubska-portfolio/assets/background-desktop-fcBKqUtT.png",m="/olesia-kubska-portfolio/assets/background-mobile-CT6pKZ-M.png",l="/olesia-kubska-portfolio/assets/background-tablet-ChqLgS9L.png",p=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-image: url(${m});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    background-image: url(${l});
  }
  @media screen and (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    background-image: url(${c});
  }
`,b=e(i.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${({theme:o})=>o.homeBackground};
  overflow: hidden;

  h1,
  p {
    text-align: center;
  }

  @media (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`,g=e.img`
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
`,u=e.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  gap: 10px;
`,r=e.a`
  background-color: ${({theme:o})=>o.buttonBackground};
  color: ${({theme:o})=>o.buttonColor};
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: 1px solid ${({theme:o})=>o.borderColor};
  border-radius: 12px;
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

  @media (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding: 0.8rem 1.6rem;
    font-size: 16px;
  }
`,k=e.a`
  background-color: transparent;
  color: ${({theme:o})=>o.buttonBackground};
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 14px;
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

  @media (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding: 0.8rem 1.6rem;
    font-size: 16px;
  }
`,h=e(i.div)`
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({theme:o})=>o.background};
  color: ${({theme:o})=>o.text};

  @media (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    padding: 4rem 2rem;
  }
`,x=e(i.div)`
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  background-color: ${({theme:o})=>o.body};
  color: ${({theme:o})=>o.text};

  @media (min-width: ${({theme:o})=>o.breakpoint.tablet}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({theme:o})=>o.breakpoint.desktop}) {
    padding: 4rem 2rem;
  }
`,f="/olesia-kubska-portfolio/assets/olesia-kubska-Cdzx5Dr1.png",v=()=>{const{t:o}=a();return t.jsxs(t.Fragment,{children:[t.jsx(p,{children:t.jsxs(b,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[t.jsxs("div",{children:[t.jsx("h1",{children:o("homeTitle")}),t.jsx("p",{children:o("homeDescription")})]}),t.jsx(g,{src:f,alt:"Olesia Kubska"}),t.jsxs(u,{children:[t.jsx(r,{href:"olesia-kubska-portfolio/projects",children:o("viewWork")}),t.jsx(k,{href:"olesia-kubska-portfolio/contact",children:o("contactMe")}),t.jsx(r,{href:"./docs/OlesiaKubskaCV.pdf",download:"OlesiaKubskaCV.pdf",children:o("downloadResume")})]})]})}),t.jsxs(h,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[t.jsx("h3",{children:o("aboutMe")}),t.jsx(n,{})]}),t.jsxs(x,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[t.jsx("h3",{children:o("techSkills")}),t.jsx(d,{})]}),t.jsx("div",{children:t.jsx(s,{})})]})};export{v as default};
