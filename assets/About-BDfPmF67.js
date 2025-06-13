import{j as t,a as c,u as r,L as s,O as u}from"./index-CTZg9o38.js";import{m as a}from"./motion-CMQFhQ53.js";import{G as l,a as m,S as p}from"./SkillGrid-4UZMqFZk.js";const x=[{name:"Communication",icon:"🗣️"},{name:"Teamwork",icon:"🤝"},{name:"Creativity",icon:"🎨"},{name:"Decision-making",icon:"🧠"},{name:"Time Management",icon:"⏱️"}],h=()=>t.jsx(l,{children:x.map((i,n)=>t.jsxs(m,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:n*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:i.icon}),i.name]},n))}),g={ukrainian:"🇺🇦",russian:"🇷🇺",english:"🇬🇧",polish:"🇵🇱"},y=()=>{const{t:i}=c(),n=i("languagesList",{returnObjects:!0});return t.jsx(l,{children:Object.entries(n).map(([o,d])=>t.jsxs(m,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:o*.05},viewport:{once:!0},children:[t.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:g[o]}),d]},o))})},j=r(a.div)`
  padding: 2rem;
  /* max-width: 900px; */
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: left;
  }
`,e=r(a.section)`
  margin-top: 2rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`,w=r(a.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    background-color: ${({theme:i})=>i.buttonBackground};
    color: ${({theme:i})=>i.buttonColor};
    border-radius: 5px;
    box-shadow: ${({theme:i})=>i.boxShadow};
    transition: background 0.3s, color 0.3s;

    &:hover {
      background-color: ${({theme:i})=>i.buttonHover};
      color: ${({theme:i})=>i.buttonColorHover};
    }
  }
`,S=()=>{const{t:i}=c();return t.jsxs(j,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[t.jsxs(w,{children:[t.jsx(s,{to:"work",children:i("workExperience")}),t.jsx(s,{to:"education",children:i("education")})]}),t.jsx(u,{}),t.jsx("h2",{children:i("aboutMeTitle")}),t.jsx("p",{children:i("aboutDescription")}),t.jsxs(e,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("techSkills")}),t.jsx(p,{})]}),t.jsxs(e,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("softSkills")}),t.jsx(h,{})]}),t.jsxs(e,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[t.jsx("h3",{children:i("languages")}),t.jsx(y,{})]})]})};export{S as default};
