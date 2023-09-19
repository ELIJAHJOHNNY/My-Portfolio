import React from "react";
import img from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-black dark:border-none flex items-center justify-center border-solid border-2 bg-[#bcc0c0]  md:py-0 xs:h-auto lg:h-[100vh] w-[100%]"
    >
      {/* <div className="w-[80%] h-auto bg-red-700 items-center justify-center"> */}
      <div className="w-[80%] flex xs:flex-col sm:flex-row items-center justify-between h-auto ">
        <div className="rounded-full md:hover:scale-110 transition-transform duration-700 shadow-md hover:shadow-2xl xs:w-[100%] sm:w-[35%]  sm:mb-[0px] items-center justify-center w-full h-full xs:mt-[30px] md:my-0 ">
          <img
            alt="My Portrait"
            src={img}
            className=" rounded-[24px] cursor-pointer"
          />
        </div>
        <div className="xs:my-[30px] md:my-0 md:mb-0 flex flex-col items-center justify-center w-full text-center bg-white dark:bg-[#bcc0c0] dark:text-black rounded-3xl shadow-xl hover:shadow-2xl xs:p-2 sm:p-6 xs:leading-[18px] sm:leading-[30px] sm:w-[55%] xs:w-[100%] ">
          <h1 className="text-center xs:text-[20px] sm:text-[28px] font-[700] font-Raleway xs:mb-2 sm:mb-4 text-[#7600bc] ">
            ABOUT ME
          </h1>
          <h3 className="font-semibold font-Raleway dark:text-black xs:text-[12px] sm:text-[14px] ">
            Hello, I'm Elijah, a passionate and naturally curious Frontend
            Engineer with a penchant for solving design challenges one elegant
            solution at a time. I'm not just a coder, I'm an advocate of the
            AGILE manifesto, a connoisseur of art and music, and a firm believer
            in the power of collaboration. My journey into software engineering
            began in 2018, transitioning from a Civil Engineering background.
            Since then, I've evolved into a skilled Frontend Developer,
            certified through a rigorous Bootcamp at{" "}
            <a
              href="https://stutern.com"
              target="blank"
              className="text-[#7600bc]"
            >
              Stutern
            </a>
            . Currently, I work as a Frontend Developer at Infinion
            Technologies, a Microsoft certified partner, where I collaborate
            with diverse teams to create custom solutions for enterprise
            businesses, particularly in Africa's financial sector. I'm driven by
            continuous learning and always eager to connect with new and
            exciting people for potential collaborations. Thank you for visiting
            my portfolio, and let's explore new horizons together.
          </h3>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
