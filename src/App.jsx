import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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
   <GlobalStyles />
   <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
   <Router>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
    </Routes>
   </Router>
   <Footer />
  </ThemeProvider>
 );
};

export default App;
