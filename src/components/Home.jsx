import React from "react";
import DateView from "./DateView";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import bg from "../assets/bgpng.png";
// import bg1 from "../assets/bgpng1.png";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div
      id="home"
      className=" flex flex-col justify-center items-center h-[100vh] relative dark:bg-[#7600bc]"
    >
      <DateView />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzFDPH_lrb5HO3ZoSSYhpAKFXjmZYcHKn5Q&usqp=CAU"
        alt=""
        className="w-[100px] h-[100px] absolute left-[50px] top-[100px] dark:hidden "
      />
      {/* <img
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzFDPH_lrb5HO3ZoSSYhpAKFXjmZYcHKn5Q&usqp=CAU"
        className="w-[100px] h-[100px] absolute left-[50px] bottom-[10px]"
      /> */}
      <img
        src={bg}
        alt=""
        className="w-[100px] h-[100px] absolute right-[50px] bottom-[10px] dark:hidden"
      />
      <h3 className="font-extrabold text-[30px] font-ms text-center dark:text-[#bcc0c0]">
        Hi! I'm
      </h3>
      <div className="dark:text-[#bcc0c0]">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Raleway",
            fontSize: "60px",
            fontWeight: "bold",
          }}
          startDelay={100}
          cursorColor="transparent"
          text="Johnny K. Elijah"
          typeSpeed={70}
        />
      </div>
      {/* <h1 className="font-extrabold text-[70px] font-ms text-center hover:scale-100 ">
        Johnny K. Elijah
      </h1> */}
      <h2 className="text-center font-Raleway dark:text-[#bcc0c0] ">
        I am a creative front-end web developer <br />
        who loves to craft solid and scalable frontend products <br />
        with great user experiences.
      </h2>
      <div className=" hover:shadow-[hsl(278,100%,37%)] duration-300 hover:shadow-md flex justify-evenly w-[30%] rounded-full py-6 bg-[#bcc0c0] items-center px-5 mt-[20px] ">
        {/* <div className="">
          <FaFacebookF className=" mr-[10px] duration-300 rounded-full cursor-pointer hover:text-[#7600bc] hover:scale-150 " />
        </div> */}
        <div>
          <a href="https://github.com/ELIJAHJOHNNY" target="blank">
            <FaGithub className="mr-[10px] duration-300  rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/elijahkugbiyi" target="blank">
            <FaLinkedinIn className="mr-[10px] duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/TzElijay" target="blank">
            <FaTwitter className="mr-[10px] duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
          </a>
        </div>
        <div>
          <a href="mailto:kugbiyielijah@gmail.com" target="blank">
            <HiMail className="mr-[10px] duration-300 rounded-lg cursor-pointer hover:text-[#7600bc] hover:scale-150" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
