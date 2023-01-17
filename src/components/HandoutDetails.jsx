import React from "react";
import editor from "../assets/editorcon.png";
import { useNavigate } from "react-router-dom";
import handout from "../assets/handout.png";
import loginShow from "../assets/login-show.png";
import loginButton from "../assets/login-button.png";
import loginHide from "../assets/login-hide.png";
import loginmobile from "../assets/login-mobile.png";

const HandoutDetails = () => {
  // const problems = [
  //   {
  //     probDetail:
  //       "Ensuring a consistent coding style was adopted by all frontend engineers working on the project across various editors and IDEs.",
  //     image: editor,
  //   },
  // ];
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col items-center justify-center py-[40px] ">
        <div className="relative w-full flex justify-center items-center pb-[20px]">
          <h1 className="text-[#7600bc] text-[26px] font-[700] font-Raleway">
            NETFLIX CLONE
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 right-0 font-Raleway font-[700] bg-[#7600bc] px-3 py-2 text-white rounded-[4px] text-[12px] "
          >
            Back to projects
          </button>
        </div>
        <img alt="Netflix" src={handout} className="w-[70%]" />
        <p className="font-Raleway text-[16px] text-center mt-[16px] ">
          Handout is a platform that allows people to give out useful but
          unwanted personal items for free or a give away price to others who
          may need them.
        </p>
      </div>
      <div className="w-[80%] ">
        <div className="flex py-4 font-Raleway">
          <h3 className="font-[700] ">Project Year:&nbsp;</h3>
          <p>2022</p>
        </div>
        <div className="flex font-Raleway pb-4">
          <h3 className="font-[700] ">Project Duration:&nbsp;</h3>
          <p>Eight(8) Weeks</p>
        </div>
      </div>
      <div className="w-[80%] pb-[40px] flex flex-col  ">
        <h2 className="text-[20px] font-[700] font-Raleway flex items-center justify-center w-full">
          Project Overview
        </h2>
        <p className="font-Raleway text-[16px] first-letter:text-[25px] first-letter:font-[700] first-letter:text-[#7600bc]">
          The main objective of this project is to create a platform to give
          unwanted but useful personal items at a free or giveaway price to
          people who might need them. In order to use features offered by the
          platform, one have to create an account, get verified on their e-mail
          and sign in. Such user can now upload an item to be given out with
          specified details given including images, the condition of the item
          and their contact details. A user having an account on the platform
          can also browse all available items on the platform and contact the
          seller on any item of interest. The project was a housemanship program
          organized by{" "}
          <a
            href="https://stutern.com"
            target="blank"
            className="text-[#7600bc] font-[700] "
          >
            Stutern&nbsp;
          </a>{" "}
          aimed at getting hands-on experience working on hypothetical products
          that solve real-life problems.
        </p>
        <br />
        <p className="font-Raleway text-[16px]">The team comprised of :</p>
        <ul className="font-Raleway text-[16px] list-disc">
          <li>
            Product Manager{" "}
            <a
              href="https://www.linkedin.com/in/bunmi-adewunmi"
              target="blank"
              className="text-[#7600bc] font-[700] "
            >
              (Bunmi Adewunmi)&nbsp;
            </a>
            : Led the design and execution of the program.
          </li>
          <li>
            Associate Product Manager{" "}
            <a
              href="https://www.linkedin.com/in/phillips-tunde"
              target="blank"
              className="text-[#7600bc] font-[700] "
            >
              (Tunde Philips)&nbsp;
            </a>
            : Support the daily requirement of the product development.{" "}
          </li>
          <li>
            Team lead for Frontend Development{" "}
            <a
              href="https://www.linkedin.com/in/chukwuebuka-nwoba"
              target="blank"
              className="text-[#7600bc] font-[700] "
            >
              (Chukwuebuka)&nbsp;
            </a>{" "}
            , Backend Development{" "}
            <a
              href="https://www.linkedin.com/in/faniran-olaitan-a80912115"
              target="blank"
              className="text-[#7600bc] font-[700] "
            >
              (Faniran)&nbsp;
            </a>{" "}
            and UI/UX Design{" "}
            <a
              href="https://www.linkedin.com/in/thamiframa"
              target="blank"
              className="text-[#7600bc] font-[700] "
            >
              (Thami Frama)&nbsp;
            </a>{" "}
            : Support with delivering sprint goals by reviewing tasks and giving
            initial feedback before each sprint demo.
          </li>
          <li>
            Group of Frontend Engineers, Backend Engineers and UI/UX designers
            graduates.
          </li>
        </ul>
        <br />
        <p className="font-Raleway text-[16px]">
          Development made us of the AGILE manifesto which allowed working on
          requirements by breaking them up into bite-sized chunks. Sprint goals
          were assigned weekly to each developer in sprint planning sessions
          held at the start of each sprint and properly managed using ClickUp (a
          project management tool) to track work progress. Each developer writes
          a documentation on every single task implemented. A demo session holds
          on the last day of each sprint to present the sprint goal in the
          staging environment.
        </p>
        <h2 className="py-4 text-[20px] font-[700] font-Raleway flex items-center justify-center w-full">
          Problem statements and solutions
        </h2>
        <p className="font-Raleway text-[16px] pb-4">
          Some challenges a user might encounter were forecasted and used to
          guide the design process. On the course of solving these problems (the
          tasks assigned to me), some tools were used likewise some skills were
          gained by me. Here is a brief documentation of the problems,
          solutions, tools used and skills gained during the design process.
        </p>
        <ul className="font-Raleway text-[16px] list-disc">
          <li className="font-[500]">
            Ensuring a consistent coding style was adopted by all frontend
            engineers working on the project across various editors and IDEs.
          </li>{" "}
          <br />
          <div className="w-full flex justify-between">
            <div className="w-[50%]  ">
              <img
                src={editor}
                className="w-[95%] "
                alt="Implementing EditorConfig"
              />
            </div>
            <div className="w-[50%] border-l-4 border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway text-[16px]">
                <p>
                  In order to avoid inconsistency in our coding style,
                  considering various developers from different locations across
                  various IDEs were working on the project, this had to be
                  implemented. Two major tools used to achieve this are:
                </p>
                <ul className="py-2">
                  <li>🔧 An IDE (I used VSCode).</li>
                  <li>
                    🔧 An extension called {""}
                    <a
                      href="https://editorconfig.org/"
                      target="blank"
                      className="text-[#7600bc] font-[700] "
                    >
                      EditorConfig.
                    </a>
                  </li>
                </ul>
                <p>
                  At the end of this task, I Learnt how to make use of
                  EditorConfig to make prefferred configurations to how one
                  wants his/her codes written.
                </p>
              </div>
            </div>
          </div>
          <li className="pt-[40px] font-[500] ">
            Authenticated users of the app needs a login layout they can input
            their individual data created while signing up, to access their
            personal account.
          </li>{" "}
          <br />
          <div className="w-full flex justify-between">
            <div className="w-[50%] flex flex-col  ">
              <div>
                <img
                  src={loginShow}
                  className="w-[95%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login Page showing password"
                />
              </div>
              <div className="pt-4">
                <img
                  src={loginHide}
                  className="w-[95%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login Page hiding password"
                />
              </div>
              <div className="pt-4">
                <img
                  src={loginButton}
                  className="w-[95%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login Page hiding password"
                />
              </div>
              <div className="pt-4 flex items-center justify-center w-full">
                <img
                  src={loginmobile}
                  className=" border-[#bcc0c0] border-2 rounded-[4px] w-[40%] "
                  alt="Login mobile"
                />
              </div>
            </div>
            <div className="w-[50%] border-l-4 border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway text-[16px]">
                <p>
                  The login page was designed to have the show/hide password
                  feature triggered on toggling the eye icon in the password
                  input. The login (Continue) button was also designed to be
                  disabled if the email and password inputs are empty, to avoid
                  sending unnecessary data to the backend. A mobile screen was
                  also designed to ensure the page is responsive. Tools used to
                  implement the login page design includes
                </p>
                <ul className="py-2">
                  <li>🔧 React JS.</li>
                  <li>🔧 Figma</li>
                  <li>🔧 Tailwind CSS</li>
                  <li>🔧 Material UI</li>
                </ul>
                <p>
                  At the end of this task, I Learnt how to convert Figma designs
                  to code to implement a design. Click{" "}
                  <a
                    href=" https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/tree/HDT-2_Dashboard_Features/src/pages/onboarding/login"
                    target="blank"
                    className="text-[#7600bc] font-[700] "
                  >
                    here{" "}
                  </a>
                  to go to the code on GitHub.
                </p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default HandoutDetails;
