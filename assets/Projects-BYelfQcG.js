import{u as i,a as l,j as e,n as h,f as g,P as o,r as p}from"./index-DS2OV1T3.js";import{m}from"./motion-LC0ct3by.js";const x=i(m.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({theme:t})=>t.textSecondary};
    text-align: center;

    @media (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
      font-size: 2rem;
    }
  }

  @media (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`,k=i.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,f=i(m.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.background};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    flex-direction: row;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  }
`,j=i.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;

  @media (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
    max-height: 100%;
  }

  @media (min-width: ${({theme:t})=>t.breakpoint.desktop}) {
    width: 50%;
    max-height: 100%;
  }
`,w=i.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: ${({theme:t})=>t.textSecondary};

    @media (min-width: ${({theme:t})=>t.breakpoint.tablet}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme:t})=>t.text};
  }
`,y=i.div`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({theme:t})=>t.textSecondary};
    font-weight: 500;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: ${({theme:t})=>t.accent};
      transform: scale(1.05);
    }
  }
`,n=({project:t})=>{const{t:r}=l();return e.jsxs(f,{children:[e.jsx(j,{src:t.image,alt:r(t.title)}),e.jsxs(w,{children:[e.jsx("h3",{children:r(t.title)}),e.jsx("p",{children:r(t.stack)}),e.jsxs(y,{children:[e.jsxs("a",{href:t.live,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(h,{})," Pages"]}),e.jsxs("a",{href:t.repo,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(g,{})," GitHub"]})]}),e.jsx("p",{children:r(t.description)})]})]})};n.propTypes={project:o.shape({id:o.string.isRequired,title:o.string.isRequired,image:o.string.isRequired,stack:o.string.isRequired,live:o.string.isRequired,repo:o.string.isRequired,description:o.string.isRequired}).isRequired};const v="/olesia-kubska-portfolio/assets/water-tracker-D-es-1Qt.jpg",$="/olesia-kubska-portfolio/assets/project-cinemania-Dpsi3FfI.png",R="/olesia-kubska-portfolio/assets/project-hotel-DPhvn1Eg.png",B="/olesia-kubska-portfolio/assets/project-web-BYF9yNdx.png",P=[{id:"water",title:"projects.water.title",image:v,stack:"projects.water.stack",live:"https://water-tracker-app.netlify.app",repo:"https://github.com/YanLozovskyi/water-tracker",description:"projects.water.description"},{id:"cinemania",title:"projects.cinemania.title",image:$,stack:"projects.cinemania.stack",live:"https://yanlozovskyi.github.io/project-js-web-anonymous/index.html",repo:"https://github.com/YanLozovskyi/project-js-web-anonymous",description:"projects.cinemania.description"},{id:"mimino",title:"projects.mimino.title",image:R,stack:"projects.mimino.stack",live:"https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html",repo:"https://github.com/vasylkivt/team-proj-html-css-web-anonymous",description:"projects.mimino.description"}],T=[{id:"webstudio",title:"projects.webstudio.title",image:B,stack:"projects.webstudio.stack",live:"https://olesiakubska.github.io/WEBSTUDIO/",repo:"https://github.com/OlesiaKubska/WEBSTUDIO",description:"projects.webstudio.description"}],S=i.button`
  padding: 0.8rem 1.6rem;
  background-color: ${({theme:t})=>t.buttonBackground};
  color: ${({theme:t})=>t.buttonColor};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:t})=>t.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({theme:t})=>t.buttonBackground};
    border: 2px solid ${({theme:t})=>t.buttonBackground};
    transform: scale(1.05);
  }
`,q=i.button`
  padding: 0.8rem 1.6rem;
  background: transparent;
  color: ${({theme:t})=>t.buttonBackground};
  border: 2px solid ${({theme:t})=>t.buttonBackground};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:t})=>t.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${({theme:t})=>t.buttonBackground};
    color: ${({theme:t})=>t.body};
    transform: scale(1.05);
  }
`,u=({children:t,onClick:r})=>e.jsx(S,{onClick:r,children:t});u.propTypes={children:o.node.isRequired,onClick:o.func};const b=({children:t,onClick:r})=>e.jsx(q,{onClick:r,children:t});b.propTypes={children:o.node.isRequired,onClick:o.func};const E=()=>{const{t}=l(),r=p.useRef(null),a=p.useRef(null),c=s=>{var d;(d=s.current)==null||d.scrollIntoView({behavior:"smooth"})};return e.jsxs(x,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[e.jsxs(k,{children:[e.jsx(u,{onClick:()=>c(r),children:t("buttons.team")}),e.jsx(b,{onClick:()=>c(a),children:t("buttons.personal")})]}),e.jsxs("section",{ref:r,id:"team",children:[e.jsx("h2",{children:t("projects.teamTitle")}),P.map(s=>e.jsx(n,{project:s},s.id))]}),e.jsxs("section",{ref:a,id:"personal",children:[e.jsx("h2",{children:t("projects.personalTitle")}),T.map(s=>e.jsx(n,{project:s},s.id))]})]})};export{E as default};
