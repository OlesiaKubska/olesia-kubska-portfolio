import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import { Container } from "./App.styled";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Education = lazy(() => import("./pages/Education/Education"));
const WorkExperience = lazy(() =>
 import("./pages/WorkExperience/WorkExperience")
);

const App = () => {
 const [theme, setTheme] = useState("light");

 const toggleTheme = () => {
  if (theme === "light") {
   setTheme("dark");
  } else {
   setTheme("light");
  }
 };

 return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
   <Container>
    <GlobalStyles />
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Suspense fallback={<div>Loading...</div>}>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
       <Route path="work" element={<WorkExperience />} />
       <Route path="education" element={<Education />} />
      </Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
    </Suspense>
    <Footer />
   </Container>
  </ThemeProvider>
 );
};

export default App;
