import React, { useState } from "react";
import DisplaySkills from "./DisplaySkills";
import SoftSkills from "./SoftSkills";
import Figma1 from "../assets/figma1.jpg";
import typescript from "../assets/typescript.svg";
import "./Skills.css";

const Skills = () => {
  const [tab, setTab] = useState(1);
  const toggleTab = tabNumber => {
    setTab(tabNumber);
    console.log(`tab number is ${tab}`);
  };
  const mySkills = [
    {
      id: 1,
      name: "React JS",
      img: "data:image/png;base64,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",
      img1: "../assets/bg.jpg",
    },
    {
      id: 2,
      name: "Javascript",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7Ff8rtjp4ORWDeTb9rnSOi5vqL_efTWfdn0Zl9Zeh39LM1lrinvoyn6gfcwKv3SRxoc&usqp=CAU",
    },
    {
      id: 3,
      name: "HTML5",
      img: "https://abhisheksinghpawar.com/img/html5.png",
      img1: "https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_1280.png",
    },
    {
      id: 4,
      name: "CSS3",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMYGKvUBrJobqMAtfpVVXxKJYcoWH3bJE9w&usqp=CAU",
    },
    {
      id: 5,
      name: "Redux",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU",
    },
    {
      id: 6,
      name: "Material UI",
      img: "https://www.pngitem.com/pimgs/m/577-5779757_react-material-ui-logo-hd-png-download.png",
    },
    {
      id: 7,
      name: "Github",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTu0CEad5lKA2J__6GwOTlMUNWPQ7NkT4mp8Ow4D7kvrabfLergwDk9d_NomcEDOeYBgk&usqp=CAU",
    },
    {
      id: 8,
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    },
    {
      id: 9,
      name: "Ant Design",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 10,
      name: "Rest APIs",
      img: "https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg",
    },
    {
      id: 11,
      name: "Figma",
      img: Figma1,
    },
    {
      id: 11,
      name: "Typescript",
      img: typescript,
    },
  ];
  return (
    <div
      id="skills"
      className="xs:h-auto sm:h-[100vh] xs:pb-[20px] sm:pb-[0px]  w-[100%] dark:bg-black "
    >
      <h2 className="text-center text-[28px] font-[700] pt-[100px] font-Raleway mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#7600bc] ">
        SKILLS
      </h2>
      <div className="flex justify-evenly mb-6">
        <button
          onClick={() => toggleTab(1)}
          className={
            tab === 1
              ? "p-1 text-[16px] font-[700] font-Raleway mb-4 active text-[#7600bc] "
              : "p-1 text-[16px] font-[700] font-Raleway mb-4 text-[#808383]"
          }
        >
          Tech Stack
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={
            tab === 2
              ? "p-1 text-[16px] font-[700] font-Raleway mb-4 active text-[#7600bc] "
              : "p-1 text-[16px] font-[700] font-Raleway mb-4 text-[#808383]  "
          }
        >
          Soft Skills
        </button>
      </div>
      <div className=" w-[100%] flex justify-center items-center  flex-col ">
        <div className="w-[80%]">
          <div className={tab === 1 ? "flex" : "hidden"}>
            <DisplaySkills mySkills={mySkills} />
          </div>
          <div className={tab === 2 ? "flex" : "hidden"}>
            <SoftSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
//bg-[#b3b8bd]
