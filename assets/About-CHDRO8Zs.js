import{j as i,a,u as r}from"./index-B8T0c0Mz.js";import{m as s}from"./motion-C6L0P_PN.js";import{G as c,a as l,S as p}from"./SkillGrid-CD6wWEcT.js";const d=[{name:"Communication",icon:"🗣️"},{name:"Teamwork",icon:"🤝"},{name:"Creativity",icon:"🎨"},{name:"Decision-making",icon:"🧠"},{name:"Time Management",icon:"⏱️"}],h=()=>i.jsx(c,{children:d.map((t,n)=>i.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:n*.05},viewport:{once:!0},children:[i.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:t.icon}),t.name]},n))}),u={ukrainian:"🇺🇦",russian:"🇷🇺",english:"🇬🇧",polish:"🇵🇱"},x=()=>{const{t}=a(),n=t("languagesList",{returnObjects:!0});return i.jsx(c,{children:Object.entries(n).map(([e,m])=>i.jsxs(l,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[i.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:u[e]}),m]},e))})},y=r(s.div)`
  padding: 2rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({theme:t})=>t.textSecondary};
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: left;
  }
`,o=r(s.section)`
  margin-top: 2rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: ${({theme:t})=>t.textSecondary};
  }
`,w=()=>{const{t}=a();return i.jsxs(y,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[i.jsx("h2",{children:t("aboutMeTitle")}),i.jsx("p",{children:t("aboutDescription")}),i.jsxs(o,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[i.jsx("h3",{children:t("techSkills")}),i.jsx(p,{})]}),i.jsxs(o,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[i.jsx("h3",{children:t("softSkills")}),i.jsx(h,{})]}),i.jsxs(o,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[i.jsx("h3",{children:t("languages")}),i.jsx(x,{})]})]})};export{w as default};
