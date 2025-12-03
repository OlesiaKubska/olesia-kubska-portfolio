import waterTracker from "../assets/images/projects/water-tracker.jpg";
import cinemania from "../assets/images/projects/project-cinemania.png";
import mimino from "../assets/images/projects/project-hotel.png";
import projectWebImage from "../assets/images/projects/project-web.png";
import projectAIImage from "../assets/images/projects/projectAIImage.png";
import projectAIGeminiImage from "../assets/images/projects/projectAIGeminiImage.png";
import projectCommercialImage from "../assets/images/projects/comm-project.jpg";

export const teamProjects = [
  {
    id: "water",
    title: "projects.water.title",
    image: waterTracker,
    stack: "projects.water.stack",
    live: "https://water-tracker-app.netlify.app",
    repo: "https://github.com/YanLozovskyi/water-tracker",
    description: "projects.water.description",
  },
  {
    id: "cinemania",
    title: "projects.cinemania.title",
    image: cinemania,
    stack: "projects.cinemania.stack",
    live: "https://yanlozovskyi.github.io/project-js-web-anonymous/index.html",
    repo: "https://github.com/YanLozovskyi/project-js-web-anonymous",
    description: "projects.cinemania.description",
  },
  {
    id: "mimino",
    title: "projects.mimino.title",
    image: mimino,
    stack: "projects.mimino.stack",
    live: "https://vasylkivt.github.io/team-proj-html-css-web-anonymous/restaurant.html",
    repo: "https://github.com/vasylkivt/team-proj-html-css-web-anonymous",
    description: "projects.mimino.description",
  },
];

export const personalProjects = [
  {
    id: "AICalendar",
    title: "projects.AICalendar.title",
    image: projectAIImage,
    stack: "projects.AICalendar.stack",
    live: "https://aicalendar-gqcp.onrender.com",
    repo: "https://github.com/OlesiaKubska/AICalendar",
    description: "projects.AICalendar.description",
  },
  {
    id: "MomBossFamilyPlanner",
    title: "projects.MomBossFamilyPlanner.title",
    image: projectAIGeminiImage,
    stack: "projects.MomBossFamilyPlanner.stack",
    live: "https://github.com/OlesiaKubska/KubskaOlesia",
    repo: "https://github.com/OlesiaKubska/KubskaOlesia",
    description: "projects.MomBossFamilyPlanner.description",
  },
  {
    id: "webstudio",
    title: "projects.webstudio.title",
    image: projectWebImage,
    stack: "projects.webstudio.stack",
    live: "https://olesiakubska.github.io/WEBSTUDIO/",
    repo: "https://github.com/OlesiaKubska/WEBSTUDIO",
    description: "projects.webstudio.description",
  },
];

export const commercialProjects = [
  {
    id: "Commercial",
    title: "projects.Commercial.title",
    image: projectCommercialImage,
    stack: "projects.Commercial.stack",
    live: "https://www.vitavoice.pl",
    repo: "https://github.com/OlesiaKubska/vita-voice-coach-frontend",
    description: "projects.Commercial.description",
  },
];
