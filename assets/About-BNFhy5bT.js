import{j as t,a as s,u as n}from"./index-CYwc4cev.js";import{m as r}from"./motion-Ck5AdCK4.js";import{G as c,a as l,S as d}from"./SkillGrid-Dm2I6z4O.js";const p=[{name:"Communication",icon:"🗣️"},{name:"Teamwork",icon:"🤝"},{name:"Creativity",icon:"🎨"},{name:"Decision-making",icon:"🧠"},{name:"Time Management",icon:"⏱️"}],h=()=>t.jsx(c,{children:p.map((i,e)=>t.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:i.icon}),i.name]},e))}),u={ukrainian:"🇺🇦",russian:"🇷🇺",english:"🇬🇧",polish:"🇵🇱"},x=()=>{const{t:i}=s(),e=i("languagesList",{returnObjects:!0});return t.jsx(c,{children:Object.entries(e).map(([o,m])=>t.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:o*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:u[o]}),m]},o))})},g=n(r.div)`
  padding: 2rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({theme:i})=>i.textSecondary};
  }
`,a=n(r.section)`
  margin-top: 2rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: ${({theme:i})=>i.textSecondary};
  }
`,y=n.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    width: 300px;
    height: 100%;
  }
`,j=n(r.div)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  gap: 1.5rem;

  p {
    font-size: 1rem;
    line-height: 1.25;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
      p {
        font-size: 1.7rem;
      }
  }
`,b="/olesia-kubska-portfolio/assets/aboutMe-DqbbdsIj.jpg",S=()=>{const{t:i}=s();return t.jsxs(g,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[t.jsx("h2",{children:i("aboutMeTitle")}),t.jsxs(j,{children:[t.jsx(y,{src:b,alt:"Olesia Kubska"}),t.jsx("p",{children:i("aboutDescription")})]}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("techSkills")}),t.jsx(d,{})]}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("softSkills")}),t.jsx(h,{})]}),t.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("languages")}),t.jsx(x,{})]})]})};export{S as default};
