import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

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
    <div id="contact" className="w-[100%] h-auto pb-[60px] dark:bg-[#7600bc] ">
      <h2 className="text-center text-[35px] font-[700] font-Raleway pt-[60px] mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#bcc0c0] ">
        Send me a message!
      </h2>
      <h3 className="text-center text-[20px] font-[500] font-Raleway mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#bcc0c0]">
        Got a question, proposal, or just <br /> want to say hello? Go ahead 😊
      </h3>
      <div className="w-[100%] flex justify-center items-center mt-[40px] ">
        <form className="w-[60%]" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            <div className="w-full flex justify-between mt-[20px] ">
              <div className="flex flex-col">
                <label className=" font-Raleway font-[500] text-[14px]">
                  Name
                </label>
                <input
                  value={name}
                  required
                  name="user_name"
                  onChange={e => setName(e.target.value)}
                  placeholder=" Enter Your Name"
                  className="dark:bg-[#bcc0c0]  rounded-[4px] px-2 w-[300px] outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
              </div>
              <div className="flex flex-col ">
                <label className=" font-Raleway font-[500] text-[14px]">
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
                  className="w-[300px] dark:bg-[#bcc0c0]  rounded-[4px] px-2 outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
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
              <label className=" font-Raleway font-[500] text-[14px]">
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
        <div className="w-[80%] border-[1px] border-[#7600bc] dark:border-[#bcc0c0] "></div>
        <div>
          <p className="font-Raleway text-[16px] text-[#7600bc] dark:text-[#bcc0c0] pt-4 font-[700] ">
            {" "}
            Made with 💖 by Kugbiyi Elijah Johnny ©2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
