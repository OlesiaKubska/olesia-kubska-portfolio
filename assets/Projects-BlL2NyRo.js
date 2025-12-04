import{u as s,a as u,j as t,n as g,f as k,P as o,r as c}from"./index-B3ZYKQPZ.js";import{m as h}from"./motion-D3Fs6bMr.js";const j=s(h.div)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({theme:e})=>e.textSecondary};
    text-align: center;

    @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      font-size: 2rem;
    }
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`,x=s.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,f=s(h.div)`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.background};
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
`,w=s.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: ${({theme:e})=>e.breakpoint.desktop}) {
    width: 50%;
    aspect-ratio: 4 / 3;
    flex-shrink: 0;
  }
`,y=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`,v=s.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.textSecondary};

    @media (min-width: ${({theme:e})=>e.breakpoint.tablet}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({theme:e})=>e.text};
  }
`,C=s.div`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${({theme:e})=>e.textSecondary};
    font-weight: 500;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: ${({theme:e})=>e.accent};
      transform: scale(1.05);
    }
  }
`,n=({project:e})=>{const{t:r}=u();return t.jsxs(f,{children:[t.jsx(w,{children:t.jsx(y,{src:e.image,alt:r(e.title)})}),t.jsxs(v,{children:[t.jsx("h3",{children:r(e.title)}),t.jsx("p",{children:r(e.stack)}),t.jsxs(C,{children:[t.jsxs("a",{href:e.live,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(g,{})," Pages"]}),t.jsxs("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(k,{})," GitHub"]})]}),t.jsx("p",{children:r(e.description)})]})]})};n.propTypes={project:o.shape({id:o.string.isRequired,title:o.string.isRequired,image:o.string.isRequired,stack:o.string.isRequired,live:o.string.isRequired,repo:o.string.isRequired,description:o.string.isRequired}).isRequired};const $="/olesia-kubska-portfolio/assets/water-tracker-D-es-1Qt.jpg",I="/olesia-kubska-portfolio/assets/project-cinemania-Dpsi3FfI.png",P="/olesia-kubska-portfolio/assets/project-hotel-DPhvn1Eg.png",B="/olesia-kubska-portfolio/assets/project-web-BYF9yNdx.png",R="/olesia-kubska-portfolio/assets/projectAIImage-D8PNYC_c.png",T="/olesia-kubska-portfolio/assets/projectAIGeminiImage-D6Vh69Pt.png",q="/olesia-kubska-portfolio/assets/comm-project-Buxc9pUR.jpg",S=[{id:"water",title:"projects.water.title",image:$,stack:"projects.water.stack",live:"https://water-tracker-app.netlify.app",repo:"https://github.com/YanLozovskyi/water-tracker",description:"projects.water.description"},{id:"cinemania",title:"projects.cinemania.title",image:I,stack:"projects.cinemania.stack",live:"https://yanlozovskyi.github.io/project-js-web-anonymous/index.html",repo:"https://github.com/YanLozovskyi/project-js-web-anonymous",description:"projects.cinemania.description"},{id:"mimino",title:"projects.mimino.title",image:P,stack:"projects.mimino.stack",live:"https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html",repo:"https://github.com/vasylkivt/team-proj-html-css-web-anonymous",description:"projects.mimino.description"}],A=[{id:"AICalendar",title:"projects.AICalendar.title",image:R,stack:"projects.AICalendar.stack",live:"https://aicalendar-gqcp.onrender.com",repo:"https://github.com/OlesiaKubska/AICalendar",description:"projects.AICalendar.description"},{id:"MomBossFamilyPlanner",title:"projects.MomBossFamilyPlanner.title",image:T,stack:"projects.MomBossFamilyPlanner.stack",live:"https://github.com/OlesiaKubska/KubskaOlesia",repo:"https://github.com/OlesiaKubska/KubskaOlesia",description:"projects.MomBossFamilyPlanner.description"},{id:"webstudio",title:"projects.webstudio.title",image:B,stack:"projects.webstudio.stack",live:"https://olesiakubska.github.io/WEBSTUDIO/",repo:"https://github.com/OlesiaKubska/WEBSTUDIO",description:"projects.webstudio.description"}],O=[{id:"Commercial",title:"projects.Commercial.title",image:q,stack:"projects.Commercial.stack",live:"https://www.vitavoice.pl",repo:"https://github.com/OlesiaKubska/vita-voice-coach-frontend",description:"projects.Commercial.description"}],z=s.button`
  padding: 0.8rem 1.6rem;
  background-color: ${({theme:e})=>e.buttonBackground};
  color: ${({theme:e})=>e.buttonColor};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: transparent;
    color: ${({theme:e})=>e.buttonBackground};
    border: 2px solid ${({theme:e})=>e.buttonBackground};
    transform: scale(1.05);
  }
`,F=s.button`
  padding: 0.8rem 1.6rem;
  background-color: transparent;
  color: ${({theme:e})=>e.buttonBackground};
  border: 2px solid ${({theme:e})=>e.buttonBackground};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({theme:e})=>e.boxShadow};
  transition: background-color 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background-color: ${({theme:e})=>e.buttonBackground};
    color: ${({theme:e})=>e.body};
    transform: scale(1.05);
  }
`,l=({children:e,onClick:r})=>t.jsx(z,{onClick:r,children:e});l.propTypes={children:o.node.isRequired,onClick:o.func};const b=({children:e,onClick:r})=>t.jsx(F,{onClick:r,children:e});b.propTypes={children:o.node.isRequired,onClick:o.func};const E=()=>{const{t:e}=u(),r=c.useRef(null),d=c.useRef(null),p=c.useRef(null),a=i=>{var m;(m=i.current)==null||m.scrollIntoView({behavior:"smooth"})};return t.jsxs(j,{initial:{x:-200,opacity:0},animate:{x:0,opacity:1},exit:{x:200,opacity:0},transition:{type:"spring",stiffness:100},children:[t.jsxs(x,{children:[t.jsx(l,{onClick:()=>a(r),children:e("buttons.team")}),t.jsx(b,{onClick:()=>a(p),children:e("buttons.commercial")}),t.jsx(l,{onClick:()=>a(d),children:e("buttons.personal")})]}),t.jsxs("section",{ref:r,id:"team",children:[t.jsx("h2",{children:e("projects.teamTitle")}),S.map(i=>t.jsx(n,{project:i},i.id))]}),t.jsxs("section",{ref:p,id:"commercial",children:[t.jsx("h2",{children:e("projects.commercialTitle")}),O.map(i=>t.jsx(n,{project:i},i.id))]}),t.jsxs("section",{ref:d,id:"personal",children:[t.jsx("h2",{children:e("projects.personalTitle")}),A.map(i=>t.jsx(n,{project:i},i.id))]})]})};export{E as default};
