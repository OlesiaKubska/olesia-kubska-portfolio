import{u as n,j as t,G as a,a as c,F as d,b as l,c as r,d as g,e as h}from"./index-DS2OV1T3.js";import{m as v}from"./motion-LC0ct3by.js";const m=n.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 1rem 0;

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    gap: 2rem;
    padding: 2rem 0;
  }
`,p=n(v.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s ease;
  color: ${({theme:i})=>i.text};

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`,x=[{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"},{name:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},{name:"mySQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{name:"Postman",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},{name:"Swagger",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"},{name:"React.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Vite JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"},{name:"Angular JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"},{name:"GIT",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{name:"WebPack",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"},{name:"Sass/SCSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"},{name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{name:"Android Studio",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{name:"Redux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"}],w=()=>t.jsx("section",{children:t.jsx(m,{children:x.map((i,e)=>t.jsxs(p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[t.jsx("img",{src:i.icon,alt:i.name}),i.name]},e))})});function u(i){return a({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20.97 7.27a.996.996 0 0 0 0-1.41l-2.83-2.83a.996.996 0 0 0-1.41 0l-4.49 4.49-3.89-3.89c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l3.89 3.89L3 16.76V21h4.24l4.52-4.52 3.89 3.89c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-3.89-3.89 4.48-4.48zM5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.2 1.2-1.9 1.9-3.88-3.88zm11.23 7.44-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9-3.89-3.89 1.9-1.9 1.21 1.21zM6.41 19H5v-1.41l9.61-9.61 1.3 1.3.11.11L6.41 19zm9.61-12.44 1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"},child:[]}]})(i)}const j=n.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem 0;
  }
`,b=n.div`
  background-color: ${({theme:i})=>i.background};
  color: ${({theme:i})=>i.text};
  border: 1px solid ${({theme:i})=>i.borderColor};
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: ${({theme:i})=>i.boxShadow};
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 0.75rem;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }

  svg {
    color: ${({theme:i})=>i.accent};
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${({theme:i})=>i.textSecondary};
  }

  p {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (min-width: ${({theme:i})=>i.breakpoint.tablet}) {
    padding: 2rem;
  }
`,y=()=>{const{t:i}=c(),e=[{icon:t.jsx(d,{size:28}),title:i("aboutHighlights.devSkills"),text:i("aboutHighlights.devSkillsText")},{icon:t.jsx(u,{size:28}),title:i("aboutHighlights.creativity"),text:i("aboutHighlights.creativityText")},{icon:t.jsx(l,{size:28}),title:i("aboutHighlights.teamwork"),text:i("aboutHighlights.teamworkText")},{icon:t.jsx(r,{size:28}),title:i("aboutHighlights.languages"),text:i("aboutHighlights.languagesText")},{icon:t.jsx(g,{size:28}),title:i("aboutHighlights.learning"),text:i("aboutHighlights.learningText")},{icon:t.jsx(h,{size:28}),title:i("aboutHighlights.goals"),text:i("aboutHighlights.goalsText")}];return t.jsx(j,{children:e.map((s,o)=>t.jsxs(b,{children:[t.jsxs("h3",{children:[s.icon,s.title]}),t.jsx("p",{children:s.text})]},o))})};export{y as A,m as G,w as S,p as a};
