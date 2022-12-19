import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      <h2 className="text-center text-[35px] font-[700] font-Raleway pt-[100px] mb-4 flex items-center justify-center text-[#7600bc] dark:text-[#bcc0c0] ">
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
                  name="user_name"
                  onChange={e => setName(e.target.value)}
                  placeholder=" Enter Your Name"
                  className="dark:bg-[#bcc0c0]  rounded-[4px] px-2 w-[300px] outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-Raleway font-[500] text-[14px]">
                  Email Address
                </label>
                <input
                  value={email}
                  name="user_email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder=" Enter Your Email"
                  className="w-[300px] dark:bg-[#bcc0c0]  rounded-[4px] px-2 outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
              </div>
            </div>
            <div className="flex flex-col mt-[40px] ">
              <label className=" font-Raleway font-[500] text-[14px]">
                Message
              </label>
              <textarea
                value={message}
                name="message"
                onChange={e => setMessage(e.target.value)}
                placeholder=" Enter Your Message 🖊"
                className="dark:bg-[#bcc0c0]  rounded-[4px] px-2 outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
              />
            </div>
            <div className="flex items-center justify-center mt-[40px] ">
              <button
                // onClick={sendMail}
                disabled={!name || !email || !message}
                className="w-[300px] h-[45px] border text-[16px] font-Raleway text-[#7600bc] dark:text-[#bcc0c0] border-[#7600bc] dark:border-[#bcc0c0] rounded-[4px] text-center font-[500] "
              >
                <span className="flex justify-center items-center">
                  Reach Out
                  <FaPaperPlane className=" ml-[14px] text-[#7600bc] dark:text-[#bcc0c0] " />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
