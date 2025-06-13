import{u as o,a as s,j as t,h as a,F as c,P as i}from"./index-CTZg9o38.js";import{m}from"./motion-CMQFhQ53.js";const p=o.div`
 margin: 2rem auto;
 /* max-width: 800px; */
 padding: 1rem;
 background: ${({theme:e})=>e.background};
 color: ${({theme:e})=>e.text};

 h2 {
  text-align: center;
  font-size: 2.5rem;
  color: ${({theme:e})=>e.text};
  margin-bottom: 1.5rem;
 }

 h3 {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: ${({theme:e})=>e.text};
 }

 p {
  font-size: 1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.text};
 }

 @media (max-width: ${({theme:e})=>e.breakpoint.tablet}) {
  h2 {
   font-size: 2rem;
  }

  h3 {
   font-size: 1.5rem;
  }
 }
`,d=o.img`
 width: 100%;
 max-width: 600px;
 height: auto;
 border-radius: 12px;
 margin-bottom: 20px;
`,n=o.a`
 display: flex;
 align-items: center;
 margin-bottom: 10px;
 color: ${({theme:e})=>e.text};

 &:hover {
  color: ${({theme:e})=>e.buttonHover};
 }

 svg {
  margin-right: 8px;
 }
`,h="/olesia-kubska-portfolio/assets/project-web-BYF9yNdx.png",g=o(m.div)`
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
`,x=o.img`
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
`,b=o.div`
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
`,u=o.div`
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
`,l=({project:e})=>{const{t:r}=s();return t.jsxs(g,{children:[t.jsx(x,{src:e.image,alt:r(e.title)}),t.jsxs(b,{children:[t.jsx("h3",{children:r(e.title)}),t.jsx("p",{children:r(e.stack)}),t.jsxs(u,{children:[t.jsxs("a",{href:e.live,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(a,{})," Pages"]}),t.jsxs("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer",children:[t.jsx(c,{})," GitHub"]})]}),t.jsx("p",{children:r(e.description)})]})]})};l.propTypes={project:i.shape({id:i.string.isRequired,title:i.string.isRequired,image:i.string.isRequired,stack:i.string.isRequired,live:i.string.isRequired,repo:i.string.isRequired,description:i.string.isRequired}).isRequired};const j="/olesia-kubska-portfolio/assets/water-tracker-D-es-1Qt.jpg",f="/olesia-kubska-portfolio/assets/project-cinemania-Dpsi3FfI.png",k="/olesia-kubska-portfolio/assets/project-hotel-DPhvn1Eg.png",v=[{id:"water",title:"projects.water.title",image:j,stack:"projects.water.stack",live:"https://water-tracker-app.netlify.app",repo:"https://github.com/YanLozovskyi/water-tracker",description:"projects.water.description"},{id:"cinemania",title:"projects.cinemania.title",image:f,stack:"projects.cinemania.stack",live:"https://yanlozovskyi.github.io/project-js-web-anonymous/index.html",repo:"https://github.com/YanLozovskyi/project-js-web-anonymous",description:"projects.cinemania.description"},{id:"mimino",title:"projects.mimino.title",image:k,stack:"projects.mimino.stack",live:"https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html",repo:"https://github.com/vasylkivt/team-proj-html-css-web-anonymous",description:"projects.mimino.description"}],$=()=>{const{t:e}=s();return t.jsxs(p,{children:[t.jsx("h2",{children:e("projectsPage")}),v.map(r=>t.jsx(l,{project:r},r.id)),t.jsxs("div",{children:[t.jsx("h3",{children:"WEBSTUDIO"}),t.jsx(d,{src:h,alt:"Web Studio Project"}),t.jsxs(n,{href:"https://olesiakubska.github.io/WEBSTUDIO/",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(a,{size:"1.5em",title:"Project Page"}),"Pages"]}),t.jsx("p",{children:"[HTML5, CSS3, JavaScript ]"}),t.jsxs(n,{href:"https://github.com/OlesiaKubska/WEBSTUDIO",target:"_blank",rel:"noopener noreferrer",children:[t.jsx(c,{size:"1.5em",title:"GitHub Repository"}),"GitHub"]}),t.jsx("p",{children:"WEBSTUDIO was an educational project that enabled me to apply and consolidate my understanding of HTML5 and CSS3. Through this endeavor, I gained hands-on experience in building responsive and visually appealing web pages. This project served as a foundation for strengthening my web development capabilities and understanding the fundamentals of creating engaging online content."})]})]})};export{$ as default};
