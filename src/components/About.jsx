import React from "react";
import img from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="dark:bg-black dark:border-none flex items-center justify-center border-solid border-2 bg-[#bcc0c0] xs:py-[40px] md:py-0 xs:h-auto md:h-[100vh] w-[100%] "
    >
      <div className="w-[80%]">
        <div className="w-full flex xs:flex-col sm:flex-row items-center justify-between ">
          <div className="rounded-full md:hover:scale-110 transition-transform duration-700 shadow-md hover:shadow-2xl xs:w-[100%] sm:w-[35%] xs:my-[30px] sm:mb-[0px] ">
            <img
              alt="My Portrait"
              src={img}
              className=" rounded-[24px] cursor-pointer"
            />
          </div>
          <div className="xs:mb-[30px] md:mb-0 flex flex-col items-center justify-center w-full text-center bg-white dark:bg-[#bcc0c0] dark:text-black rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer xs:p-2 sm:p-6 xs:leading-[18px] sm:leading-[30px] sm:w-[55%] xs:w-[100%] ">
            <h1 className="text-center xs:text-[20px] sm:text-[28px] font-[700] font-Raleway xs:mb-2 sm:mb-4 text-[#7600bc] ">
              ABOUT ME
            </h1>
            <h3 className="font-semibold font-Raleway dark:text-black xs:text-[12px] sm:text-[14px] ">
              Hi! My name is Elijah, a confident, naturally curious individual,
              perpetually working on improving my chops one design problem at a
              time, a judicious user of the AGILE manifesto, a lover of art and
              music and I always look to meet new and exciting people to work
              with or for.
              <br />
              My journey as a software engineer started in 2017, self-learning
              Python programming. Though, I couldn’t do much being an
              undergraduate in Civil Engineering. Fast forward to 2022, craving
              to bring ideas to life in a browser, I joined{" "}
              <a
                href="https://stutern.com"
                target="blank"
                className="text-[#7600bc]"
              >
                Stutern&nbsp;
              </a>
              Bootcamp to acquire training in Front-end Web Development after
              being self taught on HTML and CSS. I was appointed front-end
              Engineers group lead for the two main projects built during the
              training. I was also opportuned to participate in 2022
              Hacktoberfest, contributing to open source and earning a badge
              each from{" "}
              <a
                href="https://www.docker.com/"
                target="blank"
                className="text-[#7600bc]"
              >
                Docker
              </a>
              ,{" "}
              <a
                href="https://www.appwrite.io/"
                target="blank"
                className="text-[#7600bc]"
              >
                Appwrite
              </a>{" "}
              and{" "}
              <a
                href="https://www.digitalocean.com/go/developer-brand?utm_campaign=emea_brand_kw_en_cpc&utm_adgroup=digitalocean_exact_exact&_keyword=digitalocean&_device=c&_adposition=&utm_content=conversion&utm_medium=cpc&utm_source=google&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNHoRhunBe-Xr1HMLfZS0n0EOeO4xWU75QcZT41ykopST5dreS9cDOwaAri5EALw_wcB"
                target="blank"
                className="text-[#7600bc]"
              >
                Digital Ocean
              </a>
              .
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
