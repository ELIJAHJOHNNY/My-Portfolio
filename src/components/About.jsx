import React from "react";
import img from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-[#7600bc] dark:border-none flex items-center justify-center border-solid border-2 bg-[#bcc0c0] h-[100vh] w-[100%] "
    >
      <div className="w-[80%]">
        <div className="flex items-center justify-between ">
          <div className="text-center mr-[80px] bg-white dark:bg-black rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer p-6 leading-[30px] w-[70%] ">
            <h1 className="text-center text-[28px] font-[700] font-Raleway mb-4 text-[#7600bc] ">
              ABOUT ME
            </h1>
            <h3 className="font-semibold font-Raleway dark:text-[#bcc0c0] text-[14px] ">
              Hello! My name is Elijah, a creative individual, quietly
              confident, naturally curious, perpetually working on improving my
              chops one design problem at a time, judiscious user of the AGILE
              manifesto, a lover of art and music and I always look to meet new
              and exciting people to work with or for.
              <br />
              My journey as a software engineer started in 2016 when I picked an
              interest in Python Programming and started self-learning. Though,
              I couldn’t delve so deep into it being an undergraduate of Civil
              Engineering at that time. However, the interest never faded as I
              started learning HTML and CSS immediately after I graduated in
              2018 while working full-time as a Civil Engineer. My interest
              waxed stronger as I craved to build projects from scratch bringing
              ideas to life in a browser and I became a Frontend Web Development
              enthusiast hence my decision to enroll in a Software Engineering
              Bootcamp in 2022. I took a test in which passing was a criterion
              to get enrolled, and I passed and commenced training. Two major
              projects were built towards the end of the training program and I
              was made the Frontend Engineers team group lead for both.
            </h3>
          </div>
          <div className="rounded-full hover:scale-110 transition-transform duration-700 shadow-md hover:shadow-2xl w-[30%] ">
            <img
              alt="My Portrait"
              src={img}
              className=" rounded-[24px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
