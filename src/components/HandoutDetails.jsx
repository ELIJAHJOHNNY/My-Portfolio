import React, { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import editor from "../assets/editorcon.png";
import { useNavigate } from "react-router-dom";
import GoToTopButton from "./GoToTopButton";
import handout from "../assets/handout.png";
import loginShow from "../assets/login-show.png";
import loginButton from "../assets/login-button.png";
import loginHide from "../assets/login-hide.png";
import loginmobile from "../assets/login-mobile.png";
import dropdown from "../assets/dropdown.png";
import validemail from "../assets/validemail.png";
import confirmpassword from "../assets/confirmpassword.png";
import validpassword from "../assets/validpassword.png";
import buttonenabled from "../assets/buttonenabled.png";
import invalidpassword from "../assets/invalidpassword.png";
import browseitems from "../assets/browseitems.png";
import verifysuccess from "../assets/verifysuccess.png";
import emailtemplate from "../assets/emailtemplate.png";
import errorlogin from "../assets/errorlogin.png";
import errorsignup1 from "../assets/errorsignup1.png";
import errorsignup2 from "../assets/errorsignup2.png";
import successsignup from "../assets/successsignup.png";
import successlogin from "../assets/successlogin.png";

const HandoutDetails = () => {
  // const problems = [
  //   {
  //     probDetail:
  //       "Ensuring a consistent coding style was adopted by all frontend engineers working on the project across various editors and IDEs.",
  //     image: editor,
  //     solution:"In order to avoid inconsistency in our coding style, considering various developers from different locations across various IDEs were working on the project, this had to be implemented. Two major tools used to achieve this are:",
  //     toolList1:"🔧 An IDE (I used VSCode)",
  //     toolList2: `🔧 An extension called <a
  //     href="https://editorconfig.org/"
  //     target="blank"
  //     className="text-[#7600bc] font-[700] "
  //   >
  //     EditorConfig.
  //   </a> `
  //   },

  // ];
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="dark:bg-black dark:text-[#bcc0c0] w-full h-full flex flex-col items-center justify-center">
      <GoToTopButton />
      <div className="xs:w-[85%] md:w-[80%] flex flex-col items-center justify-center xs:pt-[30px] xs:pb-[2px] md:py-[40px] ">
        <div className="relative w-full flex justify-center items-center pb-[20px]">
          <h1 className="text-[#7600bc] xs:text-[18px] md:text-[26px] font-[700] font-Raleway">
            HANDOUT
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 xs:right-[-12px] md:right-0 font-Raleway font-[700] dark:bg-[#7600bc] bg-[#bcc0c0] xs:p-1 md:px-3 md:py-2 dark:text-[#bcc0c0] text-[#7600bc] rounded-[4px] xs:text-[10px] md:text-[12px] "
          >
            Back to projects
          </button>
        </div>
        <img alt="Netflix" src={handout} className="w-[70%]" />
        <p className="font-Raleway xs:text-[12px] md:text-[16px] text-center xs:mt-[10px] md:mt-[16px] ">
          Handout is a platform that allows people to give out useful but
          unwanted personal items for free or a give away price to others who
          may need them.
        </p>
      </div>
      <div className="xs:w-[85%] md:w-[80%] ">
        <div className="flex xs:py-[10px] md:py-4 font-Raleway">
          <h3 className="font-[700] xs:text-[12px] md:text-[16px] ">
            Project Year:&nbsp;
          </h3>
          <p className="xs:text-[12px] md:text-[16px] ">2022</p>
        </div>
        <div className="flex font-Raleway xs:pb-[10px] md:pb-4">
          <h3 className="font-[700] xs:text-[12px] md:text-[16px] ">
            Project Duration:&nbsp;
          </h3>
          <p className="xs:text-[12px] md:text-[16px] ">Six(6) Weeks</p>
        </div>
      </div>
      <div className="xs:w-[85%] md:w-[80%] xs:pb-[20px] md:pb-[40px] flex flex-col  ">
        <h2 className="xs:text-[16px] md:text-[20px] font-[700] font-Raleway flex items-center justify-center w-full">
          Project Overview
        </h2>
        <p className="font-Raleway xs:text-[12px] md:text-[16px] xs:first-letter:text-[18px] md:first-letter:text-[25px] first-letter:font-[700] first-letter:text-[#7600bc]">
          The main objective of this project is to create a platform to give
          unwanted but useful personal items at a free or giveaway price to
          people who might need them. In order to use features offered by the
          platform, one have to create an account, get verified on their e-mail
          and sign in. Such user can now upload an item to be given out with
          specified details given, including but not limited to images, the
          condition of the item and their contact details. A user having an
          account on the platform can also browse all available items on the
          platform and contact the seller on any item of interest. The project
          was a housemanship program organized by{" "}
          <a
            href="https://stutern.com"
            target="blank"
            className="text-[#7600bc] font-[700] "
          >
            Stutern&nbsp;
          </a>{" "}
          aimed at getting hands-on experience working on a hypothetical product
          that solve real-life problem.
        </p>
        <br />
        <p className="font-Raleway xs:text-[12px] md:text-[16px]">
          The team comprised of :
        </p>
        <ul className="font-Raleway xs:text-[12px] md:text-[16px] list-disc">
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
            Group of Frontend Engineers which I happened to be part of, Backend
            Engineers and UI/UX designers who are all Stutern graduates.
          </li>
        </ul>
        <br />
        <p className="font-Raleway xs:text-[12px] md:text-[16px]">
          Development made use of the AGILE manifesto which allowed working on
          requirements by breaking them up into bite-sized chunks. Sprint goals
          were assigned weekly to each developer in sprint planning sessions
          held at the start of each sprint and properly managed using ClickUp (a
          project management tool) to track work progress. Each developer writes
          a documentation on every single task implemented. A demo session holds
          on the last day of each sprint to present the sprint goal in the
          staging environment.
        </p>
        <h2 className="xs:pt-4 xs:pb-2 md:py-4 xs:text-[16px] md:text-[20px] font-[700] font-Raleway flex items-center justify-center w-full">
          Problem statements and solutions
        </h2>
        <p className="font-Raleway xs:text-[12px] md:text-[16px] pb-4">
          Some challenges a user might encounter were forecasted and used to
          guide the design process. On the course of solving these problems (the
          tasks assigned to me), some tools were used likewise some skills were
          gained by me. Here is a brief documentation of the problems,
          solutions, tools used and skills gained during the design process.
        </p>
        <ul className="font-Raleway xs:text-[12px] md:text-[16px] list-disc">
          <li className="font-[500]">
            There was need for a consistent coding style to be adopted by all
            frontend engineers working on the project across various editors and
            IDEs.
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
              <img
                src={editor}
                className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                alt="Implementing EditorConfig"
              />
            </div>
            {/* <div className="bg-[#bcc0c0] border-[1px] xs:hidden md:hidden mt-2"></div> */}
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  In order to avoid inconsistency in our coding style,
                  considering various developers from different locations across
                  various IDEs were working on the project, I had to implement
                  this. Two major tools used to achieve this are:
                </p>
                <ul className="xs:text-[12px] md:text-[16px] py-2">
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
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full flex flex-col  ">
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={loginShow}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login Page showing password"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={loginHide}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login Page hiding password"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={loginButton}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Login button enabled"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={loginmobile}
                  className=" border-[#bcc0c0] border-2 rounded-[4px] w-[40%] "
                  alt="Login mobile"
                />
              </div>
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  I designed the login page to have the show/hide password
                  feature triggered on toggling the eye icon in the password
                  input. The login (Continue) button was also designed to be
                  disabled if the email and password inputs are empty, to avoid
                  sending unnecessary data to the backend. I also designed for a
                  mobile screen to ensure the page is responsive. Tools used to
                  implement the login page design includes
                </p>
                <ul className="py-2">
                  <li>🔧 React JS</li>
                  <li>🔧 Figma</li>
                  <li>🔧 Tailwind CSS</li>
                  <li>🔧 Material UI</li>
                </ul>
                <p>
                  At the end of this task, I Learnt how to convert Figma designs
                  to code in implementing a design and also used a password
                  input component from Material UI and tailored it to the given
                  design. Click{" "}
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/tree/HDT-2_Dashboard_Features/src/pages/onboarding/login"
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
          <li className="pt-[40px] font-[500] ">
            The create account page needed a platform to have country codes to
            append to users phone number details and also validate the user
            email and passwords.
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full flex flex-col">
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={dropdown}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Create account page showing country codes dropdown"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={validemail}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="sign up page showing a valid email input"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={invalidpassword}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Sign up page showing invalid password prompt"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={validpassword}
                  className=" border-[#bcc0c0] border-2 rounded-[4px] w-[80%] "
                  alt="Sign up page showing a valid passowrd prompt"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={confirmpassword}
                  className=" border-[#bcc0c0] border-2 rounded-[4px] w-[80%] "
                  alt="Sign up page showing the confirm password input prompt"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={buttonenabled}
                  className=" border-[#bcc0c0] border-2 rounded-[4px] w-[80%] "
                  alt="Sign up page showing button is now enabled"
                />
              </div>
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  I designed a dropdown list of all countries and their
                  respective country codes for the phone number input field.
                  Validated the email and password inputs using Regex to ensure
                  a correct email format is inputed by a user likewise ensuring
                  the password pattern matches the requirement given by the
                  UI/UX team. A guide is displayed as texts to prompt users to
                  know the required inputs. Lastly, I validated the buttons to
                  ensure they are disabled until the required input fields are
                  filled. Tools I used to accomplish this includes:
                </p>
                <ul className="py-2">
                  <li>🔧 React Phone Number Input</li>
                  <li>🔧 Figma</li>
                  <li>🔧 Regex</li>
                </ul>
                <p>
                  Click{" "}
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/tree/HDT-2_Dashboard_Features/src/pages/onboarding/signUp"
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
          <li className="font-[500] pt-[40px] ">
            Users need a link that will be sent to their email on creating an
            account to verify their account and route them to the verification
            success page.
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
              <img
                src={verifysuccess}
                className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                alt="Handout verification success page"
              />
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  A task was given to me to ensure users get a link in a
                  template sent to thier email on creating an account to get
                  verified and only through the link can they navigate to the
                  verification success page. To do this, I made use of useParams
                  which is a React Router hook to navigate to the verify email
                  success page based on the user ID added in the url after being
                  generated by the backend. It was first implemented on the
                  verification success page then changes were made to the route
                  path to cater for the additional information expected from the
                  backend.
                </p>
                <p>
                  Click{" "}
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/blob/HDT-2_Dashboard_Features/src/pages/onboarding/VerifyEmail.js"
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
          <li className="font-[500] pt-[40px] ">
            Users should be able to have a feedback on creating an account or
            logging into thier account.
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full flex flex-col  ">
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={errorlogin}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Error page on login"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={errorsignup1}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Error page on signup"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={errorsignup2}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Error page on signup"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={successlogin}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Success page on login"
                />
              </div>
              <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
                <img
                  src={successsignup}
                  className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                  alt="Success page on signup"
                />
              </div>
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  In order to get a feedback on whether a login or sign up is
                  succesful or failed and navigate to the respective page based
                  on the network response received, I integrated the backend
                  endpoint into the login and create account page. The
                  integration into the login page also ensured only an
                  authenticated user can login to the platform. To do this,
                  various tools were used, namely:
                </p>
                <ul className="py-2">
                  <li>🔧 Axios</li>
                  <li>🔧 Swagger</li>
                  <li>🔧 React Router Dom</li>
                  <li>🔧 History</li>
                  <li>🔧 JS Cookie</li>
                  <li>🔧 Moment JS</li>
                </ul>
                <p>
                  A documentation given by the backend team on Swagger was used
                  to accurately integrate the given endpoints into the pages
                  with an Axios setup configured on the frontend to make all
                  network requests. History was used to help manage session
                  histories, JS-Cookie used to handle browser cookies, React
                  moment used in parsing, validating, manipulating and
                  formatting dates while navigations to pages were done using
                  React-Router-Dom.{" "}
                </p>
              </div>
            </div>
          </div>
          <li className="font-[500] pt-[40px] ">
            Users need a template that will be sent to their email on creating
            an account to complete the verification process so they can have
            access to their created account.
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
              <img
                src={emailtemplate}
                className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                alt="Handout email template"
              />
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  I made use of vanilla HTML and CSS inline styling to design
                  the email template. The few tools used for this are:
                </p>
                <ul className="py-2">
                  <li>🔧 Figma</li>
                  <li>🔧 Live Server</li>
                </ul>
                <p>
                  Click{" "}
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/blob/HDT-2_Dashboard_Features/email_template/verify_email/index.html"
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
          <li className="font-[500] pt-[40px] ">
            There is need for a page that displays all available items on the
            platform to users that are logged in
          </li>{" "}
          <br />
          <div className="w-full xs:flex xs:flex-col-reverse md:flex-row justify-between">
            <div className="w-full xs:pt-4 md-pt-0 flex items-center justify-center">
              <img
                src={browseitems}
                className="w-[80%] border-[#bcc0c0] border-2 rounded-[4px] "
                alt="Browse items page"
              />
            </div>
            <div className="w-full md:border-l-4 md:border-l-[#bcc0c0] flex ">
              <div className="pl-2 font-Raleway xs:text-[12px] md:text-[16px]">
                <p>
                  A task to implement the browse items page was assigned to me
                  and I designed the page such that all items uploaded by users
                  on the platform are displayed and filtered based on various
                  categories. It was also designed such that a particular number
                  of items are displayed on load of the page with more items
                  being loaded on click of the load more button until there are
                  no more items available. Tools used to accomplish this
                  includes:
                </p>
                <ul className="py-2">
                  <li>🔧 Figma</li>
                  <li>🔧 Axios</li>
                  <li>🔧 Tailwind CSS</li>
                  <li>🔧 Tailwind Scrollbar hide</li>
                  <li>🔧 Material UI</li>
                </ul>
                <p>
                  After the layout was designed according to the given Figma
                  layout using cards from Material UI, axios was set up to make
                  a network request to the backend endpoint to get items on the
                  platform. Though as at when this was written, dummy data was
                  displayed. Tailwind scrollbar hide was used to hide the
                  scrollbar of categories of items which extends along the width
                  of the screen. Click{" "}
                  <a
                    href="https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1/blob/HDT-2_Dashboard_Features/src/pages/dashboard/BrowseItems.js"
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
        <h2 className="xs:pt-[30px] md:pt-[40px] xs:pb-2 md:pb-3 xs:text-[16px] md:text-[20px] font-[700] font-Raleway flex items-center justify-center w-full">
          Summary
        </h2>
        <p className="font-Raleway xs:text-[12px] md:text-[16px] xs:pb-[30px] md:pb-[40px] ">
          This project have given a major boost in confidence and been helpful
          in getting hands-on experience working on a hypothetical product that
          solves real life problem and working along side other teams to launch
          a product. In general, as at the time of writing this, the layout of
          the project is completed but there are still a few works to be done on
          the functionality aspect. Part of it was to implement the backend to
          display products as dummy data were used and JSON server was also
          implemented to add items. However, with what was learnt, we will-
          definitely go ahead to get it completed and ready to be used.
        </p>
        <div className="border dark:border-0 shadow-md p-4 flex items-center justify-center rounded-lg ">
          <p className="font-Raleway italic font-[700] xs:text-[18px] md:text-[22px] text-center ">
            "Thank you for taking your time to view this project. I hope you
            found it informative and it gave you a sense of my skills and
            experience in Frontend Web Development. If you have any questions,
            or would like to discuss a pottential project, please do not
            hesitate to reach out to me. Thank you again for your interest in my
            work!" <br />
            🤗
          </p>
        </div>
      </div>
      <div className="w-[100%] flex-col h-auto py-[40px] flex items-center justify-center  ">
        <div className="w-[80%] border-[1px] border-[#7600bc] dark:border-[#bcc0c0] flex items-center justify-center"></div>
        <div className="py-[25px] xs:w-[80%] md:w-[40%] flex justify-evenly items-center">
          <div className="rounded-full xs:p-2 md:p-4 bg-[#bcc0c0] flex items-center justify-center">
            <a href="https://github.com/ELIJAHJOHNNY" target="blank">
              <FaGithub className=" duration-300 text-black  rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
            </a>
          </div>
          <div className="rounded-full xs:p-2 md:p-4 bg-[#bcc0c0] flex items-center justify-center">
            <a href="https://linkedin.com/in/elijahkugbiyi" target="blank">
              <FaLinkedinIn className="text-black duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
            </a>
          </div>
          <div className="rounded-full xs:p-2 md:p-4 bg-[#bcc0c0] flex items-center justify-center">
            <a href="https://twitter.com/TzElijay" target="blank">
              <FaTwitter className="text-black duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
            </a>
          </div>
          <div className="rounded-full xs:p-2 md:p-4 bg-[#bcc0c0] flex items-center justify-center">
            <a href="mailto:kugbiyielijah@gmail.com" target="blank">
              <HiMail className="text-black duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
            </a>
          </div>
        </div>
        <div className="flex-col w-[80%] flex items-center justify-center">
          <p className="font-Raleway text-center xs:text-[14px] md:text-[16px] text-[#7600bc] dark:text-[#bcc0c0] font-[700] ">
            {" "}
            Made with 💖 by Kugbiyi Elijah Johnny ©2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default HandoutDetails;
