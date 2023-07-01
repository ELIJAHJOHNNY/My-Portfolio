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
            Hi! My name is Elijah, a confident, naturally curious Frontend
            Developer, perpetually working on improving my chops one design
            problem at a time, an advocate of the AGILE manifesto, a lover of
            art and music, and I always look to meet new and exciting people to
            work with or for.
            <br />
            My journey as a software engineer started in 2017, self-learning
            Python programming. Though, I could not do much being an
            undergraduate in Civil Engineering. Fast forward to 2022, craving to
            bring ideas to life in a browser, I joined{" "}
            <a
              href="https://stutern.com"
              target="blank"
              className="text-[#7600bc]"
            >
              Stutern&nbsp;
            </a>
            Bootcamp to get certified as a Frontend Web Developer. I was
            appointed Frontend Engineers group lead for the two main projects
            built during the training. I managed the code base using Git for
            Version control while building multiple layouts integrated with
            optimum functionalities, integrating several APIs per need. I was
            also opportune to participate in the 2022 Hacktoberfest,
            contributing to open source and earning a badge, each from{" "}
            <a
              href="https://drive.google.com/file/d/19JDyL3wTUdxI5gbnMCyk6Btygx9ZEh44/view?usp=sharing"
              target="blank"
              className="text-[#7600bc]"
            >
              Docker
            </a>
            ,{" "}
            <a
              href="https://drive.google.com/file/d/1aMNwOm7Qr5HNy78BKpkVpkVg0C0oMf7Z/view?usp=sharing"
              target="blank"
              className="text-[#7600bc]"
            >
              Appwrite
            </a>{" "}
            and{" "}
            <a
              href="https://drive.google.com/file/d/1ugN11rxawExXWjy-mJmB3TGyL09sHdiE/view?usp=sharing"
              target="blank"
              className="text-[#7600bc]"
            >
              Digital Ocean
            </a>
            . I have worked as a Frontend Developer for Infinion Technologies, a
            certified Microsoft partner, where I worked with diverse teams in
            Product design, backend, Data and AI, Cybersecurity, and
            Infrastructure to build applications that offer a custom solution to
            Enterprise businesses, particularly organizations in the Financial
            sector of Africa's economy.
          </h3>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
