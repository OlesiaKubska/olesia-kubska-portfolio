import{j as t,a as r,u as o}from"./index-DS2OV1T3.js";import{m as s}from"./motion-LC0ct3by.js";import{G as c,a as l,A as d,S as p}from"./AboutHighlights-BMNRagDq.js";const h=[{name:"Communication",icon:"🗣️"},{name:"Teamwork",icon:"🤝"},{name:"Creativity",icon:"🎨"},{name:"Decision-making",icon:"🧠"},{name:"Time Management",icon:"⏱️"}],u=()=>t.jsx(c,{children:h.map((i,e)=>t.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"3rem",marginRight:"0.5rem"},children:i.icon}),i.name]},e))}),g={ukrainian:"🇺🇦",russian:"🇷🇺",english:"🇬🇧",polish:"🇵🇱"},x=()=>{const{t:i}=r(),e=i("languagesList",{returnObjects:!0});return t.jsx(c,{children:Object.entries(e).map(([n,m])=>t.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:n*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"2rem",marginRight:"0.5rem"},children:g[n]}),m]},n))})},b=o(s.div)`
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({theme:i})=>i.textSecondary};
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    h2 {
      font-size: 2.5rem;
    }
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`,a=o(s.section)`
  margin-top: 2rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: ${({theme:i})=>i.textSecondary};
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    h3 {
      font-size: 1.8rem;
    }
  }
`,y=o.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  align-self: center;
  box-shadow: ${({theme:i})=>i.boxShadow};
  transition: transform 0.3s ease-in-out;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    width: 300px;
    height: auto;
  }
`,j="/olesia-kubska-portfolio/assets/aboutMe-DqbbdsIj.jpg",S=()=>{const{t:i}=r();return t.jsxs(b,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[t.jsx("h2",{children:i("aboutMeTitle")}),t.jsx(y,{src:j,alt:"Olesia Kubska"}),t.jsx(d,{}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("techSkills")}),t.jsx(p,{})]}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("softSkills")}),t.jsx(u,{})]}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("languages")}),t.jsx(x,{})]})]})};export{S as default};
