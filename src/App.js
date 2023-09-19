import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AllPages from "./components/AllPages";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loadingIcon.svg";

const HandoutDetails = React.lazy(() => import("./components/HandoutDetails"));
const ProjectDetails = React.lazy(() => import("./components/ProjectDetails"));


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

  // const getTime = () => {
  //   const now: Date = new Date();
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: "numeric",
  //     month: "long",
  //   };
  //   const formattedDate: string = now.toLocaleDateString(undefined, options);
  //   return formattedDate;
  // };

  // const currentDate = new Date();
  // const tenDays = Array.from({ length: 10 }, (_, index) => {
  //   const date = new Date(currentDate);
  //   date.setDate(currentDate.getDate() + index);
  //   const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
  //   const dayOfMonth = date.getDate();
  //   return (
  //     <div className="flex flex-col items-center justify-center font-workSans font-semibold text-[14px] ">
  //       <p>{dayOfWeek}</p>
  //       <p>{dayOfMonth}</p>
  //     </div>
  //   );
  // });