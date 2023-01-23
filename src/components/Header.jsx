import React, { useState, useContext } from "react";
import "./Works.css";
import { ThemeContext } from "../App";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

function Header({ Link }) {
  //   const navigate = useNavigate();
  //   const [showAvatarDropDown, setShowAvatarDropDown] = useState(false);
  //   const [searchText, setSearchText] = useState("");

  /** Function to toggle avatar dropdown */
  //   const toggleAvatar = () => {
  //     setShowAvatarDropDown(!showAvatarDropDown);
  //   };
  const [hoverOnLight, setHoverOnLight] = useState(false);
  const [hoverOnDark, setHoverOnDark] = useState(false);
  const { handleThemeSwitch, theme } = useContext(ThemeContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      name: "Home",
      idName: "#home",
    },
    {
      id: 2,
      name: "About",
      idName: "#about",
    },
    {
      id: 3,
      name: "Skills",
      idName: "#skills",
    },
    {
      id: 4,
      name: "Projects",
      idName: "#works",
    },
    {
      id: 5,
      name: "Contact",
      idName: "#contact",
    },
  ];

  return (
    <div className="w-[100%] h-[100%]">
      <nav
        // className="bg-white/90 dark:bg-black/90 xs:w-screen sm:w-full flex items-center justify-between shadow-[#bcc0c0] shadow-md dark:shadow-none h-[10%] z-[100] fixed top-0"
        className={
          showMobileMenu
            ? "bg-white dark:bg-black xs:w-screen  sm:w-full flex flex-col items-center justify-center shadow-[#bcc0c0] shadow-md dark:shadow-none h-[100vh] z-[100] fixed top-0 transition-transform duration-500 switch"
            : "bg-white/90 dark:bg-[#000000]/80 xs:w-screen sm:w-full flex items-center justify-between shadow-[#bcc0c0] shadow-md dark:shadow-none h-[10%] z-[100] fixed top-0 transition-transform duration-500 switch "
        }
      >
        <div
          className={
            showMobileMenu ? "hidden" : " flex items-center justify-center"
          }
        >
          <Link
            to="#home"
            className="w-auto cursor-pointer flex items-center justify-center xl:ml-[78px] sm:ml-[18px] xs:ml-[20px] text-[#7600bc]"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="60px"
              viewBox="0 0 535.000000 529.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,529.000000) scale(0.100000,-0.100000)"
                fill="#7600bc"
                stroke="none"
              >
                <path
                  d="M2530 4589 c-414 -10 -472 -18 -615 -84 -235 -110 -303 -263 -320
-725 l-7 -175 -45 -113 c-50 -127 -70 -218 -59 -276 9 -49 57 -100 86 -91 19
6 20 2 20 -92 0 -54 -5 -129 -10 -168 -28 -187 -30 -297 -10 -410 15 -87 19
-167 21 -385 2 -274 1 -275 -24 -341 -59 -153 -74 -338 -31 -396 46 -62 156
-64 207 -4 l24 28 36 -26 c19 -15 53 -35 75 -45 36 -16 40 -23 65 -99 40 -121
50 -211 45 -397 -4 -163 -5 -166 -46 -286 -51 -146 -55 -211 -17 -249 34 -35
121 -36 153 -3 51 56 51 94 -3 253 -34 99 -34 101 -36 306 -2 113 0 210 4 216
4 6 2 13 -5 15 -17 6 0 28 23 28 15 0 19 -7 19 -32 0 -58 40 -88 115 -88 101
0 164 78 150 185 l-6 52 318 -2 c442 -4 758 11 879 41 23 6 24 4 24 -43 0 -27
-16 -105 -35 -174 -54 -193 -45 -271 37 -304 49 -19 78 -19 127 1 83 33 89
113 25 318 -19 61 -38 138 -41 172 l-6 60 65 32 c36 18 83 50 104 72 47 48 87
121 73 134 -13 14 -12 133 2 138 18 6 -27 97 -69 141 -30 32 -59 52 -129 92
-1 0 -12 57 -23 126 -31 191 -28 614 6 730 2 8 19 21 38 27 41 15 118 81 145
126 36 57 54 148 42 211 -14 76 -36 118 -88 170 -114 115 -327 154 -828 155
-343 1 -461 20 -536 87 -43 39 -50 63 -19 63 12 0 32 11 45 25 29 29 33 77 10
133 -15 34 -15 38 2 50 51 37 174 52 443 52 388 0 614 22 726 70 25 11 50 20
55 20 14 0 11 -134 -6 -235 -19 -116 -19 -155 1 -183 19 -28 70 -28 68 0 -1
10 2 16 6 13 17 -11 17 57 -1 178 -10 71 -19 158 -19 193 0 62 2 66 41 105
121 121 126 318 13 433 -147 148 -491 194 -1304 175z m-704 -902 c-4 -71 -17
-163 -30 -220 -37 -151 -18 -183 38 -64 38 79 84 137 109 137 17 0 20 -10 42
-155 8 -55 19 -117 24 -137 5 -20 6 -39 3 -42 -3 -4 0 -6 6 -6 7 0 12 5 12 10
0 6 11 10 25 10 20 0 26 -7 35 -37 15 -55 30 -69 74 -68 47 0 58 -20 21 -37
-25 -11 -27 -16 -21 -55 5 -38 3 -45 -19 -59 -16 -11 -34 -14 -55 -9 -23 5
-37 2 -51 -11 -22 -20 -23 -45 -7 -176 9 -78 9 -114 -1 -175 -16 -100 -65
-221 -124 -307 -36 -53 -47 -77 -47 -107 0 -35 3 -39 25 -39 15 0 31 9 41 25
36 55 55 10 32 -77 -11 -44 -10 -51 14 -95 42 -79 64 -343 28 -343 -4 0 -11
35 -15 78 -9 116 -14 129 -52 164 -86 80 -119 163 -111 281 5 75 26 130 77
197 32 42 74 143 69 166 -2 12 -10 7 -28 -21 -14 -20 -38 -45 -53 -54 -39 -23
-47 -6 -47 109 0 54 -9 146 -21 210 -16 88 -20 135 -15 200 5 67 4 82 -6 72
-34 -34 -65 3 -75 88 -9 76 15 288 42 375 13 44 29 114 35 155 17 121 21 140
27 140 3 0 3 -55 -1 -123z m760 -972 c-7 -29 -6 -29 28 -14 32 15 56 -2 56
-39 0 -24 14 -23 16 1 0 7 2 19 2 28 2 12 14 15 59 14 52 -1 58 -3 64 -25 7
-25 7 -25 8 3 1 15 5 27 11 27 12 0 31 -35 23 -44 -3 -3 -1 -6 5 -6 7 0 12 11
12 25 0 16 6 25 15 25 10 0 15 -10 15 -27 l0 -26 249 6 c218 6 415 24 464 43
27 10 32 -38 32 -336 0 -239 -3 -300 -19 -377 -10 -51 -19 -93 -20 -93 0 0
-37 7 -81 16 -55 10 -195 17 -445 23 -381 10 -430 15 -519 61 -21 10 -55 38
-74 61 -97 113 -101 330 -10 469 20 30 30 49 21 43 -11 -10 -17 -10 -26 -1
-20 20 -13 55 16 77 l27 21 -28 -6 c-26 -6 -28 -4 -25 17 2 18 10 25 32 27 36
4 46 -10 46 -72 0 -27 3 -47 6 -44 3 4 5 38 5 77 0 65 2 71 21 71 17 0 19 -4
14 -25z m-355 -457 c7 -12 15 -72 19 -132 5 -61 16 -137 25 -169 18 -61 16
-73 -10 -63 -20 7 -35 48 -37 102 -4 71 -18 50 -18 -23 1 -60 4 -73 30 -107
17 -22 30 -50 30 -63 0 -22 -4 -24 -37 -21 -36 3 -39 6 -55 53 -21 62 -23 187
-4 311 12 80 28 134 41 134 2 0 10 -10 16 -22z m1581 -635 c8 20 48 23 66 5 7
-7 12 -39 12 -74 0 -61 0 -62 -31 -66 -19 -3 -36 1 -45 9 -8 8 -14 10 -14 4 0
-6 -7 -11 -15 -11 -12 0 -15 17 -15 89 0 63 4 91 13 94 7 2 14 -9 17 -32 4
-27 7 -31 12 -18z m-1114 -43 c2 -13 11 -29 20 -36 13 -9 19 -7 33 10 10 11
20 18 24 14 11 -11 -13 -70 -41 -99 -22 -23 -33 -27 -63 -23 -77 11 -83 14
-78 36 4 14 0 26 -11 35 -16 12 -16 14 2 28 11 8 30 15 42 15 29 0 54 10 54
21 0 4 -7 6 -15 3 -15 -6 -21 7 -8 20 14 14 38 0 41 -24z"
                />
                <path
                  d="M2600 2565 c0 -1 -9 -51 -20 -111 -28 -154 -27 -199 5 -220 32 -21
71 -7 81 29 3 14 -2 83 -10 154 -9 71 -16 134 -16 140 0 7 -9 11 -20 10 -11
-1 -20 -2 -20 -2z"
                />
              </g>
            </svg>
            <div className=" sm:flex items-center justify-center font-[700] font-Raleway xs:text-[12px] sm:text-[18px] lg:text-[20px] ">
              <h1>ELIJAH JOHNNY</h1>
            </div>
          </Link>
        </div>
        <div className="flex relative">
          {navItems.map(items => (
            <Link
              to={items.idName}
              smooth
              className="xs:hidden md:flex items-center w-auto sm:mr-[8px] xl:mr-[20px] dark:hover:bg-[#7600bc]  hover:bg-[#bcc0c0] py-2 px-3 hover:rounded-[4px]"
            >
              <div className="">
                <button className="font-Raleway scroll-smooth font-[500] xs:text-[12px] sm:text-[14px] text-[#7600bc] dark:text-[#bcc0c0] dark:font-[700] ">
                  {items.name}{" "}
                </button>
              </div>
            </Link>
          ))}
          <button className="bg-[#7600bc] xs:hidden sm:block mr-[40px] text-white font-[Raleway] py-2 px-3 rounded-[4px] text-[12px] font-[700] tracking-wide ">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1hkzUchoRk4yQhEsdko6sLqX-_T1Ug9Br/view?usp=sharing"
            >
              RESUME
            </a>
          </button>

          <button
            onClick={() => setShowMobileMenu(true)}
            className={showMobileMenu ? "hidden" : "flex"}
          >
            <FaBars
              className={
                theme === "dark"
                  ? "text-[#bcc0c0] w-[25px] h-[25px] xs:flex sm:hidden mr-[10px]"
                  : "text-[#7600bc] w-[25px] h-[25px] xs:flex sm:hidden mr-[10px] "
              }
            />
          </button>
          <div className={showMobileMenu ? "hidden" : "flex"}>
            <button
              onClick={handleThemeSwitch}
              className="flex items-center justify-center xs:mr-[20px] sm:mr-[40px] font-[Raleway] rounded-[12px] text-[12px] font-[700] tracking-wide "
            >
              <BsMoonFill
                onMouseEnter={() => setHoverOnDark(true)}
                onMouseLeave={() => setHoverOnDark(false)}
                className={
                  theme === "dark"
                    ? "hidden"
                    : "text-[#7600bc] w-[20px] h-[20px]"
                }
              />
              <BsFillSunFill
                onMouseEnter={() => setHoverOnLight(true)}
                onMouseLeave={() => setHoverOnLight(false)}
                className={
                  theme === "dark"
                    ? "text-[#bcc0c0] w-[25px] h-[25px]"
                    : "hidden"
                }
              />
            </button>
          </div>
          <div className="xs:hidden md:block">
            <p
              className={
                hoverOnLight
                  ? "absolute top-[55px] right-0 px-1 bg-[#bcc0c0] text-[#7600bc] rounded-[8px] text-[12px] font-Raleway"
                  : "hidden"
              }
            >
              Turn on light mode
            </p>
            <p
              className={
                hoverOnDark
                  ? "absolute top-[55px] right-0 px-1 bg-black text-[#bcc0c0] rounded-[8px] text-[12px] font-Raleway"
                  : "hidden"
              }
            >
              Turn on dark mode
            </p>
          </div>
          {/* <div
            className={
              !showMobileMenu
                ? "xs:block md:hidden absolute top-0 right-0 w-[200%] "
                : "hidden"
            }
          >
            <p
              className={
                hoverOnLight
                  ? "absolute top-[55px] right-0 px-1 bg-[#bcc0c0] text-[#7600bc] rounded-[8px] text-[12px] font-Raleway"
                  : "hidden"
              }
            >
              Turned on light mode
            </p>
            <p
              className={
                hoverOnDark
                  ? "absolute top-[55px] right-0 px-1 bg-black text-[#bcc0c0] rounded-[8px] text-[12px] font-Raleway"
                  : "hidden"
              }
            >
              Turned on dark mode
            </p>
          </div> */}
        </div>

        {/* Displaying Menu list on a mobile screen */}
        <div className={showMobileMenu ? "flex flex-col" : "hidden"}>
          <div className="flex justify-between items-center w-[100vw] mb-[30px] relative">
            <Link
              to="#home"
              onClick={() => setShowMobileMenu(false)}
              className="w-auto cursor-pointer flex items-center justify-center xl:ml-[78px] sm:ml-[18px] xs:ml-[20px] text-[#7600bc]"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="60px"
                viewBox="0 0 535.000000 529.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,529.000000) scale(0.100000,-0.100000)"
                  fill="#7600bc"
                  stroke="none"
                >
                  <path
                    d="M2530 4589 c-414 -10 -472 -18 -615 -84 -235 -110 -303 -263 -320
-725 l-7 -175 -45 -113 c-50 -127 -70 -218 -59 -276 9 -49 57 -100 86 -91 19
6 20 2 20 -92 0 -54 -5 -129 -10 -168 -28 -187 -30 -297 -10 -410 15 -87 19
-167 21 -385 2 -274 1 -275 -24 -341 -59 -153 -74 -338 -31 -396 46 -62 156
-64 207 -4 l24 28 36 -26 c19 -15 53 -35 75 -45 36 -16 40 -23 65 -99 40 -121
50 -211 45 -397 -4 -163 -5 -166 -46 -286 -51 -146 -55 -211 -17 -249 34 -35
121 -36 153 -3 51 56 51 94 -3 253 -34 99 -34 101 -36 306 -2 113 0 210 4 216
4 6 2 13 -5 15 -17 6 0 28 23 28 15 0 19 -7 19 -32 0 -58 40 -88 115 -88 101
0 164 78 150 185 l-6 52 318 -2 c442 -4 758 11 879 41 23 6 24 4 24 -43 0 -27
-16 -105 -35 -174 -54 -193 -45 -271 37 -304 49 -19 78 -19 127 1 83 33 89
113 25 318 -19 61 -38 138 -41 172 l-6 60 65 32 c36 18 83 50 104 72 47 48 87
121 73 134 -13 14 -12 133 2 138 18 6 -27 97 -69 141 -30 32 -59 52 -129 92
-1 0 -12 57 -23 126 -31 191 -28 614 6 730 2 8 19 21 38 27 41 15 118 81 145
126 36 57 54 148 42 211 -14 76 -36 118 -88 170 -114 115 -327 154 -828 155
-343 1 -461 20 -536 87 -43 39 -50 63 -19 63 12 0 32 11 45 25 29 29 33 77 10
133 -15 34 -15 38 2 50 51 37 174 52 443 52 388 0 614 22 726 70 25 11 50 20
55 20 14 0 11 -134 -6 -235 -19 -116 -19 -155 1 -183 19 -28 70 -28 68 0 -1
10 2 16 6 13 17 -11 17 57 -1 178 -10 71 -19 158 -19 193 0 62 2 66 41 105
121 121 126 318 13 433 -147 148 -491 194 -1304 175z m-704 -902 c-4 -71 -17
-163 -30 -220 -37 -151 -18 -183 38 -64 38 79 84 137 109 137 17 0 20 -10 42
-155 8 -55 19 -117 24 -137 5 -20 6 -39 3 -42 -3 -4 0 -6 6 -6 7 0 12 5 12 10
0 6 11 10 25 10 20 0 26 -7 35 -37 15 -55 30 -69 74 -68 47 0 58 -20 21 -37
-25 -11 -27 -16 -21 -55 5 -38 3 -45 -19 -59 -16 -11 -34 -14 -55 -9 -23 5
-37 2 -51 -11 -22 -20 -23 -45 -7 -176 9 -78 9 -114 -1 -175 -16 -100 -65
-221 -124 -307 -36 -53 -47 -77 -47 -107 0 -35 3 -39 25 -39 15 0 31 9 41 25
36 55 55 10 32 -77 -11 -44 -10 -51 14 -95 42 -79 64 -343 28 -343 -4 0 -11
35 -15 78 -9 116 -14 129 -52 164 -86 80 -119 163 -111 281 5 75 26 130 77
197 32 42 74 143 69 166 -2 12 -10 7 -28 -21 -14 -20 -38 -45 -53 -54 -39 -23
-47 -6 -47 109 0 54 -9 146 -21 210 -16 88 -20 135 -15 200 5 67 4 82 -6 72
-34 -34 -65 3 -75 88 -9 76 15 288 42 375 13 44 29 114 35 155 17 121 21 140
27 140 3 0 3 -55 -1 -123z m760 -972 c-7 -29 -6 -29 28 -14 32 15 56 -2 56
-39 0 -24 14 -23 16 1 0 7 2 19 2 28 2 12 14 15 59 14 52 -1 58 -3 64 -25 7
-25 7 -25 8 3 1 15 5 27 11 27 12 0 31 -35 23 -44 -3 -3 -1 -6 5 -6 7 0 12 11
12 25 0 16 6 25 15 25 10 0 15 -10 15 -27 l0 -26 249 6 c218 6 415 24 464 43
27 10 32 -38 32 -336 0 -239 -3 -300 -19 -377 -10 -51 -19 -93 -20 -93 0 0
-37 7 -81 16 -55 10 -195 17 -445 23 -381 10 -430 15 -519 61 -21 10 -55 38
-74 61 -97 113 -101 330 -10 469 20 30 30 49 21 43 -11 -10 -17 -10 -26 -1
-20 20 -13 55 16 77 l27 21 -28 -6 c-26 -6 -28 -4 -25 17 2 18 10 25 32 27 36
4 46 -10 46 -72 0 -27 3 -47 6 -44 3 4 5 38 5 77 0 65 2 71 21 71 17 0 19 -4
14 -25z m-355 -457 c7 -12 15 -72 19 -132 5 -61 16 -137 25 -169 18 -61 16
-73 -10 -63 -20 7 -35 48 -37 102 -4 71 -18 50 -18 -23 1 -60 4 -73 30 -107
17 -22 30 -50 30 -63 0 -22 -4 -24 -37 -21 -36 3 -39 6 -55 53 -21 62 -23 187
-4 311 12 80 28 134 41 134 2 0 10 -10 16 -22z m1581 -635 c8 20 48 23 66 5 7
-7 12 -39 12 -74 0 -61 0 -62 -31 -66 -19 -3 -36 1 -45 9 -8 8 -14 10 -14 4 0
-6 -7 -11 -15 -11 -12 0 -15 17 -15 89 0 63 4 91 13 94 7 2 14 -9 17 -32 4
-27 7 -31 12 -18z m-1114 -43 c2 -13 11 -29 20 -36 13 -9 19 -7 33 10 10 11
20 18 24 14 11 -11 -13 -70 -41 -99 -22 -23 -33 -27 -63 -23 -77 11 -83 14
-78 36 4 14 0 26 -11 35 -16 12 -16 14 2 28 11 8 30 15 42 15 29 0 54 10 54
21 0 4 -7 6 -15 3 -15 -6 -21 7 -8 20 14 14 38 0 41 -24z"
                  />
                  <path
                    d="M2600 2565 c0 -1 -9 -51 -20 -111 -28 -154 -27 -199 5 -220 32 -21
71 -7 81 29 3 14 -2 83 -10 154 -9 71 -16 134 -16 140 0 7 -9 11 -20 10 -11
-1 -20 -2 -20 -2z"
                  />
                </g>
              </svg>
              <div className=" sm:flex items-center justify-center font-[700] font-Raleway xs:text-[12px] sm:text-[18px] lg:text-[20px] ">
                <h1>ELIJAH JOHNNY</h1>
              </div>
            </Link>
            <div className="flex">
              <button
                onClick={() => setShowMobileMenu(false)}
                className={showMobileMenu ? "flex" : "hidden"}
              >
                <FaTimes
                  className={
                    theme === "dark"
                      ? "text-[#bcc0c0] w-[25px] h-[25px] xs:flex sm:hidden mr-[10px] "
                      : "text-[#7600bc] w-[25px] h-[25px] xs:flex sm:hidden mr-[10px] "
                  }
                />
              </button>
              <button
                onClick={handleThemeSwitch}
                className="flex items-center justify-center xs:mr-[20px] sm:mr-[40px] font-[Raleway] rounded-[12px] text-[12px] font-[700] tracking-wide "
              >
                <BsMoonFill
                  onMouseEnter={() => setHoverOnDark(true)}
                  onMouseLeave={() => setHoverOnDark(false)}
                  className={
                    theme === "dark"
                      ? "hidden"
                      : "text-[#7600bc] w-[20px] h-[20px]"
                  }
                />
                <BsFillSunFill
                  onMouseEnter={() => setHoverOnLight(true)}
                  onMouseLeave={() => setHoverOnLight(false)}
                  className={
                    theme === "dark"
                      ? "text-[#bcc0c0] w-[25px] h-[25px]"
                      : "hidden"
                  }
                />
              </button>
              <div className="absolute top-0 right-0 w-[100%] ">
                <p
                  className={
                    hoverOnLight
                      ? "absolute top-[55px] right-0 px-1 bg-[#bcc0c0] text-[#7600bc] rounded-[8px] text-[12px] font-Raleway"
                      : "hidden"
                  }
                >
                  Turned on light mode
                </p>
                <p
                  className={
                    hoverOnDark
                      ? "absolute top-[55px] right-0 px-1 text-black bg-[#bcc0c0] rounded-[8px] text-[12px] font-Raleway"
                      : "hidden"
                  }
                >
                  Turned on dark mode
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                showMobileMenu
                  ? "flex flex-col items-center justify-center"
                  : "hidden"
              }
            >
              {navItems.map(items => (
                <Link
                  to={items.idName}
                  smooth
                  className="flex items-center  dark:hover:bg-[#7600bc]  hover:bg-[#bcc0c0] py-2 px-3 hover:rounded-[4px]"
                >
                  <div className="">
                    <button
                      onClick={() => setShowMobileMenu(false)}
                      className=" font-Raleway font-[500] xs:text-[20px] text-[#7600bc] dark:text-[#bcc0c0] dark:font-[700] "
                    >
                      {items.name}{" "}
                    </button>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center w-screen py-2">
              <button className="bg-[#7600bc] text-white font-[Raleway] py-2 px-3 rounded-[4px] text-[20px] font-[700] tracking-wide ">
                <a
                  target="blank"
                  href="https://drive.google.com/file/d/1hkzUchoRk4yQhEsdko6sLqX-_T1Ug9Br/view?usp=sharing"
                >
                  RESUME
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
