import React, { useState } from "react";
import "./Works.css";
import { FaGithub } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { myWorks } from "./MyWorks";
import { SlidingDiv } from "./SlidingDiv";

const Works = () => {
  const [workDisplay, setWorkDisplay] = useState(false);

  return (
    <div id="works" className="w-[100%] h-auto bg-[#bcc0c0] dark:bg-black  ">
      <h1 className=" dark:text-[#7600bc] text-center text-[30px] font-[700] font-Raleway xs:pt-[80px] sm:pt-[100px] flex items-center justify-center text-[#7600bc] mb-[40px] ">
        PROJECTS
      </h1>
      <div className="w-[100%] flex justify-center items-center">
        <div className="sm:w-[60%] xs:w-[80%] ">
          <Grid
            container
            rowSpacing={3}
            columnSpacing={6}
            className="flex justify-center items-center w-full mb-[60px]"
          >
            {myWorks.map(works => (
              <Grid item rowSpacing={6} xs={12}>
                <SlidingDiv key={works.id}>
                  <Card
                    onMouseEnter={() => setWorkDisplay(true)}
                    onMouseLeave={() => setWorkDisplay(false)}
                    className="bigCard hover:shadow-md mb-[40px] hover:shadow-[#7600bc] shadow-2xl cursor-pointer transition-transform relative duration-[0.5s] "
                  >
                    <CardMedia
                      component="img"
                      image={works.img}
                      alt={works.name}
                    />
                    <div className="purple switch font-Raleway absolute top-0 left-0 w-full h-0 hover:bg-gradient-to-t from-[#560f80]/95 to-[#bcc0c0]/95   opacity-0 hover:opacity-100 transition-transform duration-500 px-1">
                      <p
                        className={
                          workDisplay
                            ? "white-space-normal sm:text-[20px] xs:text-[12px] xs:p-2 sm:px-6 font-bold flex flex-col justify-center items-center h-full text-center xs:leading-2 sm:leading-[30px] "
                            : "hidden"
                        }
                      >
                        <p className="font-Raleway xs:text-[14px] sm:text-[22px] xs:mb-[6px] sm:mb-[20px]  ">
                          {works.name}
                        </p>
                        {works.details}
                        <span className="flex xs:w-[25%] sm:w-[15%] justify-between ">
                          <a
                            href={works.githubLink}
                            target="blank"
                            className="xs:mt-[2px] sm:mt-[8px] rounded-[50%] bg-white xs:w-[20px] sm:w-[40px] xs:h-[20px] sm:h-[40px] flex items-center justify-center text-[#7600bc]"
                          >
                            <FaGithub className="xs:w-[12px] sm:w-[20px] xs:h-[12px] sm:h-[20px]" />
                          </a>
                          <a
                            href={works.link}
                            target="blank"
                            className="xs:mt-[2px] sm:mt-[8px] rounded-[50%] bg-white xs:w-[20px] sm:w-[40px] xs:h-[20px] sm:h-[40px] flex items-center justify-center text-[#7600bc]"
                          >
                            <OpenInNewIcon className="xs:w-[6px] sm:w-[20px] xs:h-[6px] sm:h-[20px] xs:p-[5px] sm:p-0 " />
                          </a>
                        </span>
                        <span className="xs:mt-[10px] sm:mt-[16px] flex items-center justify-center gap-4  font-Raleway xs:text-[10px] sm:text-[16px] text-center w-[100%] ">
                          {works.toolsUsed.map(tool => (
                            <p>{tool}</p>
                          ))}
                        </span>
                      </p>
                    </div>
                  </Card>
                  <div className="flex items-center justify-center">
                    {/* <button
                    className="dark:bg-[#bcc0c0] bg-[#7600bc] mb-[20px] dark:text-[#7600bc] text-[#bcc0c0] font-[Raleway] py-2 px-3 rounded-[4px] text-[12px] font-[700] tracking-wide "
                    type="button"
                    onClick={() => navigate(works.moreDetails)}
                  >
                    View more details
                  </button> */}
                  </div>
                </SlidingDiv>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Works;
