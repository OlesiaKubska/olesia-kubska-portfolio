import{u as r,a as c,j as o,L as a,O as d}from"./index-CGaDBuSb.js";import{m as n}from"./motion-W2O7eXi0.js";const u=r(n.div)`
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
`,i=r(n.section)`
 margin-top: 2rem;
 text-align: left;

 h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
 }
`,s=r(n.ul)`
 list-style-type: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 gap: 1rem;

 li {
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  background-color: ${({theme:t})=>t.buttonBackground};
  color: ${({theme:t})=>t.buttonColor};
  border-radius: 5px;
  box-shadow: ${({theme:t})=>t.boxShadow};
  transition: background 0.3s, color 0.3s;

  &:hover {
   background-color: ${({theme:t})=>t.buttonHover};
   color: ${({theme:t})=>t.buttonColorHover};
  }
 }
`,x=r(n.div)`
 display: flex;
 justify-content: center;
 gap: 20px;
 margin-top: 2rem;
 margin-bottom: 2rem;

 a {
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background-color: ${({theme:t})=>t.buttonBackground};
  color: ${({theme:t})=>t.buttonColor};
  border-radius: 5px;
  box-shadow: ${({theme:t})=>t.boxShadow};
  transition: background 0.3s, color 0.3s;

  &:hover {
   background-color: ${({theme:t})=>t.buttonHover};
   color: ${({theme:t})=>t.buttonColorHover};
  }
 }
`,b=()=>{const{t}=c();return o.jsxs(u,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[o.jsxs(x,{children:[o.jsx(a,{to:"work",children:t("workExperience")}),o.jsx(a,{to:"education",children:t("education")})]}),o.jsx(d,{}),o.jsx("h2",{children:t("aboutMeTitle")}),o.jsx("p",{children:t("aboutDescription")}),o.jsxs(i,{children:[o.jsx("h3",{children:t("techSkills")}),o.jsx(s,{children:t("techSkillItems",{returnObjects:!0}).map((e,l)=>o.jsx("li",{children:e},l))})]}),o.jsxs(i,{children:[o.jsx("h3",{children:t("softSkills")}),o.jsx(s,{children:Object.keys(t("softSkillItems",{returnObjects:!0})).map(e=>o.jsx("li",{children:t(`softSkillItems.${e}`)},e))})]}),o.jsxs(i,{children:[o.jsx("h3",{children:t("languages")}),o.jsx(s,{children:Object.keys(t("languagesList",{returnObjects:!0})).map(e=>o.jsx("li",{children:t(`languagesList.${e}`)},e))})]})]})};export{b as default};
