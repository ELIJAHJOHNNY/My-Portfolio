import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  useEffect(() => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    setValidEmail(emailRegex);
  }, [email]);

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_snhv0ru",
        "template_zubtwmh",
        form.current,
        "xxbMVvB9lWX3CWcPx"
      )
      .then(
        result => {
          setName("");
          setEmail("");
          setMessage("");
          console.log(result.text);
          console.log("message sent");
          alert("Message sent: Thank you for reaching out");
        },
        error => {
          console.log(error.text);
          console.log("message not sent");
          alert("Oops! Message not sent");
        }
      );
  };

  return (
    <div id="contact" className="w-[100%] h-auto pb-[60px] dark:bg-black ">
      <h2 className="text-center text-[35px] font-[700] font-Raleway pt-[90px] mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#bcc0c0] ">
        Send me a message!
      </h2>
      <h3 className="text-center text-[20px] font-[500] font-Raleway mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#bcc0c0]">
        Got a question, proposal, or just <br /> want to say hello? Go ahead 😊
      </h3>
      <div className="w-[100%] flex justify-center items-center mt-[40px] ">
        <form className="w-[60%]" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            <div className="w-full flex xs:flex-col sm:flex-row justify-between xs:mt-[14px] sm:mt-[20px] ">
              <div className="flex flex-col">
                <label className=" font-Raleway font-[500] text-[14px] dark:text-[#7600bc]">
                  Name
                </label>
                <input
                  value={name}
                  required
                  name="user_name"
                  onChange={e => setName(e.target.value)}
                  placeholder=" Enter Your Name"
                  className="dark:bg-[#bcc0c0]  rounded-[4px] px-2 xs:w-[100%] sm:w-[300px] outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide xs:mb-[35px] sm:mb-[0px] "
                />
              </div>
              <div className="flex flex-col ">
                <label className=" font-Raleway font-[500] text-[14px] dark:text-[#7600bc]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  value={email}
                  name="user_email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder=" Enter Your Email"
                  className="xs:w-[100%] sm:w-[300px] dark:bg-[#bcc0c0]  rounded-[4px] px-2 outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
                <p
                  className={
                    (!validEmail && emailFocus && email) ||
                    (!emailFocus && !validEmail && email)
                      ? "text-[#5e1c1c] font-Raleway text-[12px] font-[700] mt-1 "
                      : "hidden"
                  }
                >
                  ❗ Please, kindly enter a valid Email address
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-[35px] ">
              <label className=" font-Raleway font-[500] text-[14px] dark:text-[#7600bc]">
                Message
              </label>
              <textarea
                required
                value={message}
                name="message"
                onChange={e => setMessage(e.target.value)}
                placeholder=" Enter Your Message 🖊"
                className="dark:bg-[#bcc0c0]  rounded-[4px] px-2 outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
              />
            </div>
            <div className="flex items-center justify-center mt-[40px] ">
              <button
                disabled={!name || !validEmail || !message}
                className={
                  !name || !validEmail || !message
                    ? "w-[300px] h-[45px] border text-[16px] font-Raleway text-[#7600bc] dark:text-[#bcc0c0] border-[#7600bc] dark:border-[#bcc0c0] rounded-[4px] text-center font-[500] "
                    : "w-[300px] h-[45px] border text-[16px] font-Raleway text-[#bcc0c0] dark:text-[#7600bc] bg-[#7600bc] border-[#7600bc] dark:bg-[#bcc0c0] rounded-[4px] text-center font-[500] "
                }
              >
                <span className="flex justify-center items-center">
                  Reach Out
                  <FaPaperPlane
                    className={
                      !name || !validEmail || !message
                        ? " ml-[14px] text-[#7600bc] dark:text-[#bcc0c0] "
                        : " ml-[14px] text-[#bcc0c0] dark:text-[#7600bc] "
                    }
                  />
                </span>
              </button>
            </div>
          </div>
        </form>
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

export default Contact;
