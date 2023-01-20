import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import AllPages from "./components/AllPages";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loadingIcon.svg";

const HandoutDetails = React.lazy(() => import("./components/HandoutDetails"));
const ProjectDetails = React.lazy(() => import("./components/ProjectDetails"));
// import Home from "./components/Home";
// import Header from "./components/Header";
// import About from './components/About';
// import Skills from "./components/Skills";
// import Works from './components/Works';
// import Contact from "./components/Contact";
// import Router from "./Router"
// import Footer from "./components/Footer";


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  },[]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme,handleThemeSwitch}}>
      <div>
      <Suspense fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }>
        <Routes>
         <Route path="/" element={<AllPages />}/>
         <Route path="/handout-details" element={<HandoutDetails />} />
         <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </Suspense>
      </div>
    {/* <div className="w-[100%] overflow-x-hidden "> */}
      {/* <Header Link={Link} />
      <Home />
      <About />
      <Skills />
      <Works  />
      <Contact />
      <Router /> */}
      {/* <Footer /> */}
    {/* </div> */}
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
