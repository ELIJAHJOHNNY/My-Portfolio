import React from "react";
import img from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-[#7600bc] dark:border-none flex items-center justify-center border-solid border-2 bg-[#bcc0c0] h-[100vh] w-[100%] "
    >
      <div className="w-[80%]">
        <div className="w-full flex items-center justify-between ">
          <div className="text-center bg-white dark:bg-black rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer p-6 leading-[30px] w-[55%] ">
            <h1 className="text-center text-[28px] font-[700] font-Raleway mb-4 text-[#7600bc] ">
              ABOUT ME
            </h1>
            <h3 className="font-semibold font-Raleway dark:text-[#bcc0c0] text-[14px] ">
            Hello! My name is Elijah, a confident, naturally curious individual, perpetually working on improving my chops one design problem at a time, a judicious user of the AGILE manifesto, a lover of art and music and I always look to meet new and exciting people to work with or for.
              <br />
              My journey as a software engineer started in 2016, self-learning Python programming. Though, I couldn’t do much being an undergraduate in Civil Engineering. Fast forward to 2022, craving to bring ideas to life in a browser, I joined{" "}
              <a
                href="https://stutern.com"
                target="blank"
                className="text-[#7600bc]"
              >
                Stutern&nbsp;
              </a>
              Bootcamp to acquire training in Front-end Web Development. I was appointed front-end Engineers group lead for the two main projects built during the training process.
            </h3>
          </div>
          <div className="rounded-full hover:scale-110 transition-transform duration-700 shadow-md hover:shadow-2xl w-[35%] ">
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
