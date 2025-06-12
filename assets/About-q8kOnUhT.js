import{u as t,j as n,a as l,L as d,O as v}from"./index-CAIJ1ht5.js";import{m as o}from"./motion-C0OJRlIo.js";const m=t(o.div)`
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
`,a=t(o.section)`
  margin-top: 2rem;
  text-align: left;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`,h=t(o.div)`
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
`,c=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
`,r=t(o.div)`
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
`,p=[{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"},{name:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},{name:"mySQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{name:"Postman",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},{name:"Swagger",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"},{name:"React.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Vite JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"},{name:"Angular JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"},{name:"GIT",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{name:"WebPack",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"},{name:"Sass/SCSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"},{name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{name:"Android Studio",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{name:"Redux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"}],u=()=>n.jsx("section",{children:n.jsx(c,{children:p.map((i,e)=>n.jsxs(r,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[n.jsx("img",{src:i.icon,alt:i.name}),i.name]},e))})}),j=[{name:"Communication",icon:"🗣️"},{name:"Teamwork",icon:"🤝"},{name:"Creativity",icon:"🎨"},{name:"Decision-making",icon:"🧠"},{name:"Time Management",icon:"⏱️"}],x=()=>n.jsx(c,{children:j.map((i,e)=>n.jsxs(r,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:e*.05},viewport:{once:!0},children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:i.icon}),i.name]},e))}),y={ukrainian:"🇺🇦",russian:"🇷🇺",english:"🇬🇧",polish:"🇵🇱"},w=()=>{const{t:i}=l(),e=i("languagesList",{returnObjects:!0});return n.jsx(c,{children:Object.entries(e).map(([s,g])=>n.jsxs(r,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.05},viewport:{once:!0},children:[n.jsx("span",{style:{fontSize:"1.5rem",marginRight:"0.5rem"},children:y[s]}),g]},s))})},S=()=>{const{t:i}=l();return n.jsxs(m,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[n.jsxs(h,{children:[n.jsx(d,{to:"work",children:i("workExperience")}),n.jsx(d,{to:"education",children:i("education")})]}),n.jsx(v,{}),n.jsx("h2",{children:i("aboutMeTitle")}),n.jsx("p",{children:i("aboutDescription")}),n.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[n.jsx("h3",{children:i("techSkills")}),n.jsx(u,{})]}),n.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[n.jsx("h3",{children:i("softSkills")}),n.jsx(x,{})]}),n.jsxs(a,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},children:[n.jsx("h3",{children:i("languages")}),n.jsx(w,{})]})]})};export{S as default};
