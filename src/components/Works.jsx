import React, { useState } from "react";
import "./Works.css";
import { FaGithub } from "react-icons/fa";
import netfli2 from "../assets/netfli2.jpg";
import commerce from "../assets/commerce.png";
import handout from "../assets/handout.png";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Works = () => {
  const [workDisplay, setWorkDisplay] = useState(false);
  const myWorks = [
    {
      id: 1,
      name: "HANDOUT",
      img: handout,
      details:
        "This platform allows people to give out useful but unwanted items for free or a give away price to others who may need them.",
      link: "https://stutern-handout.web.app/",
      githubLink:
        "https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git",
      toolUsed1: "React",
      toolUsed2: "Tailwind CSS",
      toolUsed3: "Material UI",
      toolUsed4: "Axios",
      toolUsed5: "Figma",
    },
    {
      id: 2,
      name: "NETFLIX",
      img: netfli2,
      details: `A Netflix clone created with 'The Movie Database' API which
      displays movies of various categories and has a search
      feature`,
      link: "https://netflix-duplicate.netlify.app/",
      githubLink: "https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT.git",
      toolUsed1: "React",
      toolUsed2: "Tailwind",
      toolUsed3: "MUI",
      toolUsed4: "Axios",
      toolUsed5: "TMDB API",
      toolUsed6: "Redux",
    },
    {
      id: 3,
      name: "SHOP-IT",
      img: commerce,
      details: "A mini E-commerce app created with Commerce.js API",
      link: "https://github.com/ELIJAHJOHNNY/E-commerce.git",
      githubLink: "https://github.com/ELIJAHJOHNNY/E-commerce.git",
      toolUsed1: "React",
      toolUsed3: "Material UI",
      toolUsed4: "Axios",
      toolUsed5: "Commerce.JS API",
    },
  ];

  return (
    <div
      id="works"
      className="w-[100%] h-auto bg-[#bcc0c0] dark:bg-[#7600bc]  "
    >
      <h1 className=" dark:text-black text-center text-[30px] font-[700] font-Raleway xs:pt-[80px] sm:pt-[100px] mb-4 flex items-center justify-center text-[#7600bc] ">
        MY WORKS
      </h1>
      <div className="w-[100%] flex justify-center items-center">
        <div className="sm:w-[60%] xs:w-[80%] ">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={6}
            className="flex justify-center items-center w-full mb-[60px]"
          >
            {myWorks.map(skills => (
              <Grid item key={skills.id} rowSpacing={6} xs={12}>
                <Card
                  onMouseEnter={() => setWorkDisplay(true)}
                  onMouseLeave={() => setWorkDisplay(false)}
                  className="bigCard hover:shadow-md mb-[20px] hover:shadow-[#7600bc] shadow-2xl cursor-pointer transition-transform relative duration-[0.5s]"
                >
                  <CardMedia
                    component="img"
                    image={skills.img}
                    alt={skills.name}
                  />
                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "semiBold",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    {skills.name}
                  </Typography> */}
                  <div className="purple switch font-Raleway absolute top-0 left-0 w-full h-0 hover:bg-gradient-to-t from-[#560f80]/95 to-[#bcc0c0]/95   opacity-0 hover:opacity-100 transition-transform duration-500 px-1">
                    <p
                      className={
                        workDisplay
                          ? "white-space-normal sm:text-[20px] xs:text-[12px] xs:p-2 sm:px-6 font-bold flex flex-col justify-center items-center h-full text-center xs:leading-2 sm:leading-[30px] "
                          : "hidden"
                      }
                    >
                      <p className="font-Raleway xs:text-[14px] sm:text-[22px] xs:mb-[6px] sm:mb-[20px]  ">
                        {skills.name}
                      </p>
                      {skills.details}
                      <span className="flex xs:w-[25%] sm:w-[15%] justify-between">
                        <a
                          href={skills.githubLink}
                          target="blank"
                          className="xs:mt-[2px] sm:mt-[8px] rounded-[50%] bg-white xs:w-[20px] sm:w-[40px] xs:h-[20px] sm:h-[40px] flex items-center justify-center text-[#7600bc]"
                        >
                          <FaGithub className="xs:w-[12px] sm:w-[20px] xs:h-[12px] sm:h-[20px]" />
                        </a>
                        <a
                          href={skills.link}
                          target="blank"
                          className="xs:mt-[2px] sm:mt-[8px] rounded-[50%] bg-white xs:w-[20px] sm:w-[40px] xs:h-[20px] sm:h-[40px] flex items-center justify-center text-[#7600bc]"
                        >
                          <OpenInNewIcon className="xs:w-[6px] sm:w-[20px] xs:h-[6px] sm:h-[20px] xs:p-[5px] sm:p-0 " />
                        </a>
                      </span>
                      <span className="xs:mt-[10px] sm:mt-[16px] flex w-[80%] justify-evenly font-Raleway xs:text-[10px] sm:text-[16px]  ">
                        <p>{skills.toolUsed1} </p>
                        <p>{skills.toolUsed2} </p>
                        <p>{skills.toolUsed3} </p>
                        <p>{skills.toolUsed4} </p>
                        <p>{skills.toolUsed5} </p>
                        <p>{skills.toolUsed6} </p>
                      </span>
                    </p>
                  </div>
                </Card>
                <div className="flex items-center justify-center">
                  <button className="dark:bg-[#bcc0c0] bg-[#7600bc] mb-[20px] dark:text-[#7600bc] text-[#bcc0c0] font-[Raleway] py-2 px-3 rounded-[4px] text-[12px] font-[700] tracking-wide ">
                    View more details
                  </button>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Works;
