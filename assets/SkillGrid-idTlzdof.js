import{u as e,j as i}from"./index-DReV82HJ.js";import{m as t}from"./motion-B_C8MPqM.js";const o=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
`,c=e(t.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  text-align: center;
  transition: transform 0.3s ease;
  color: ${({theme:n})=>n.text};

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`,a=[{name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},{name:"Node.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},{name:"MongoDB",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"},{name:"SQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},{name:"mySQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"},{name:"Postman",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},{name:"Swagger",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg"},{name:"React.js",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"Vite JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"},{name:"Angular JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"},{name:"GIT",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},{name:"WebPack",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"},{name:"Sass/SCSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"},{name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},{name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},{name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},{name:"Figma",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},{name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},{name:"Android Studio",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"VS Code",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"},{name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},{name:"Redux",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"}],v=()=>i.jsx("section",{children:i.jsx(o,{children:a.map((n,s)=>i.jsxs(c,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:s*.05},viewport:{once:!0},children:[i.jsx("img",{src:n.icon,alt:n.name}),n.name]},s))})});export{o as G,v as S,c as a};
