import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./components/Home";
import Header from "./components/Header";
import About from './components/About';
import Skills from "./components/Skills";
import Works from './components/Works';
import Contact from "./components/Contact";
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
    <div className="w-[100%] overflow-x-hidden ">
      <Header Link={Link} />
      <Home />
      <About />
      <Skills />
      <Works  />
      <Contact />
      {/* <Footer /> */}
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
