import{u as s,a as p,j as t,h as u,F as b,P as o,r as l}from"./index-zgyhERfK.js";import{m as x}from"./motion-D95izGFA.js";const g=s.div`
  padding: 2rem 1rem;
`,j=s.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,k=s(x.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.backgroundAlt};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    flex-direction: row;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  }
`,f=s.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    max-height: 100%;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 50%;
    max-height: 100%;
  }
`,w=s.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.text};

    @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme:e})=>e.textSecondary||e.text};
  }
`,y=s.div`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({theme:e})=>e.text};
    font-weight: 500;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: ${({theme:e})=>e.buttonHover};
      transform: scale(1.05);
    }
  }
`,n=({project:e})=>{const{t:r}=p();return t.jsxs(k,{children:[t.jsx(f,{src:e.image,alt:r(e.title)}),t.jsxs(w,{children:[t.jsx("h3",{children:r(e.title)}),t.jsx("p",{children:r(e.stack)}),t.jsxs(y,{children:[t.jsxs("a",{href:e.live,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(u,{})," Pages"]}),t.jsxs("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(b,{})," GitHub"]})]}),t.jsx("p",{children:r(e.description)})]})]})};n.propTypes={project:o.shape({id:o.string.isRequired,title:o.string.isRequired,image:o.string.isRequired,stack:o.string.isRequired,live:o.string.isRequired,repo:o.string.isRequired,description:o.string.isRequired}).isRequired};const v="/olesia-kubska-portfolio/assets/water-tracker-D-es-1Qt.jpg",$="/olesia-kubska-portfolio/assets/project-cinemania-Dpsi3FfI.png",R="/olesia-kubska-portfolio/assets/project-hotel-DPhvn1Eg.png",P="/olesia-kubska-portfolio/assets/project-web-BYF9yNdx.png",T=[{id:"water",title:"projects.water.title",image:v,stack:"projects.water.stack",live:"https://water-tracker-app.netlify.app",repo:"https://github.com/YanLozovskyi/water-tracker",description:"projects.water.description"},{id:"cinemania",title:"projects.cinemania.title",image:$,stack:"projects.cinemania.stack",live:"https://yanlozovskyi.github.io/project-js-web-anonymous/index.html",repo:"https://github.com/YanLozovskyi/project-js-web-anonymous",description:"projects.cinemania.description"},{id:"mimino",title:"projects.mimino.title",image:R,stack:"projects.mimino.stack",live:"https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html",repo:"https://github.com/vasylkivt/team-proj-html-css-web-anonymous",description:"projects.mimino.description"}],q=[{id:"webstudio",title:"projects.webstudio.title",image:P,stack:"projects.webstudio.stack",live:"https://olesiakubska.github.io/WEBSTUDIO/",repo:"https://github.com/OlesiaKubska/WEBSTUDIO",description:"projects.webstudio.description"}],C=s.button`
  padding: 0.8rem 1.6rem;
  background-color: ${({theme:e})=>e.accent};
  color: ${({theme:e})=>e.buttonColor};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({theme:e})=>e.accent};
    border: 2px solid ${({theme:e})=>e.accent};
    transform: scale(1.05);
  }
`,S=s.button`
  padding: 0.8rem 1.6rem;
  background: transparent;
  color: ${({theme:e})=>e.accent};
  border: 2px solid ${({theme:e})=>e.accent};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${({theme:e})=>e.accent};
    color: ${({theme:e})=>e.body};
    transform: scale(1.05);
  }
`,m=({children:e,onClick:r})=>t.jsx(C,{onClick:r,children:e});m.propTypes={children:o.node.isRequired,onClick:o.func};const h=({children:e,onClick:r})=>t.jsx(S,{onClick:r,children:e});h.propTypes={children:o.node.isRequired,onClick:o.func};const E=()=>{const{t:e}=p(),r=l.useRef(null),a=l.useRef(null),c=i=>{var d;(d=i.current)==null||d.scrollIntoView({behavior:"smooth"})};return t.jsxs(g,{children:[t.jsxs(j,{children:[t.jsx(m,{onClick:()=>c(r),children:e("buttons.team")}),t.jsx(h,{onClick:()=>c(a),children:e("buttons.personal")})]}),t.jsxs("section",{ref:r,id:"team",children:[t.jsx("h2",{children:e("projects.teamTitle")}),T.map(i=>t.jsx(n,{project:i},i.id))]}),t.jsxs("section",{ref:a,id:"personal",children:[t.jsx("h2",{children:e("projects.personalTitle")}),q.map(i=>t.jsx(n,{project:i},i.id))]})]})};export{E as default};
