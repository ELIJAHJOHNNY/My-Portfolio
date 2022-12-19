import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Smtp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [formState, setFormState] = useState({});
  const sendEmail = e => {
    e.preventDefault();
    const config = {
      Host: "smtp.elasticemail.com",
      Username: "kugbiyielijah@gmail.com",
      Password: "56EC8DCDD9CB9C47F84E8E86CDF7FEEBEEE6",
      port: 2525,
      To: "kugbiyielijah@gmail.com",
      From: email,
      Subject: "New message from your Portfolio",
      Body: message,
    };
    if (window.Email) {
      window.Email.send(config).then(response => {
        alert("Email sent successfully");
        console.log(response);
      });
    }
  };

  // const sendMail = e => {
  //   e.preventDefault();
  //   window.Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "johnnyelijah@yopmail.com",
  //     Password: "4F472CB2C99B90C839D421489891B56DDF60",
  //     port: 2525,
  //     To: "kugbiyielijah@gmail.com",
  //     From: email,
  //     Subject: "New message from your Portfolio",
  //     Body: "And this is the body",
  //   }).then(message => alert(message));
  // };
  // const changeHandler = event => {
  //   setFormState({ ...formState, [event.target.name]: event.target.value });
  // };
  // const sendMail = event => {
  //   event.preventDefaut();
  //   const config = {
  //     Host: "smtp.elasticemail.com",
  //     Username: "ohnnyelijah@yopmail.com",
  //     Passworrd: "4F472CB2C99B90C839D421489891B56DDF60",
  //     port: 2525,
  //     To: "johnnyelijah@yopmail.com",
  //     From: formState.email,
  //     Subject: "New message from your Portfolio",
  //     Body: `${formState.name} connected to you over email`,
  //   };
  //   if (window.Email) {
  //     window.Email.send(config).then(() => alert("Email sent successfully"));
  //   }
  // };

  return (
    <div id="contact" className="w-[100%] h-[100vh] ">
      <h2 className="text-center text-[35px] font-[700] font-Raleway mt-[100px] mb-4 flex items-center justify-center text-[#7600bc] ">
        Send me a message!
      </h2>
      <h3 className="text-center text-[20px] font-[500] font-Raleway mb-4 flex items-center justify-center text-[#7600bc] ">
        Got a question, proposal, or just <br /> want to say hello? Go ahead 😊
      </h3>
      <div className="w-[100%] flex justify-center items-center mt-[40px] ">
        <form className="w-[60%]" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <div className="w-full flex justify-between mt-[20px] ">
              <div className="flex flex-col">
                <label className=" font-Raleway font-[500] text-[14px]">
                  Name
                </label>
                <input
                  value={name}
                  // value={formState.name || ""}
                  name="name"
                  onChange={e => setName(e.target.value)}
                  // onChange={changeHandler}
                  placeholder=" Enter Your Name"
                  className="w-[300px] outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
              </div>
              <div className="flex flex-col">
                <label className=" font-Raleway font-[500] text-[14px]">
                  Email Address
                </label>
                <input
                  value={email}
                  // value={formState.email || ""}
                  name="email"
                  // onChange={changeHandler}
                  onChange={e => setEmail(e.target.value)}
                  placeholder=" Enter Your Email"
                  className="w-[300px] outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
                />
              </div>
            </div>
            <div className="flex flex-col mt-[40px] ">
              <label className=" font-Raleway font-[500] text-[14px]">
                Message
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder=" Enter Your Message 🖊"
                className=" outline-0 border-b-[1px] border-b-black mt-[16px] py-[4px] font-Raleway text-[14px] tracking-wide "
              />
            </div>
            <div className="flex items-center justify-center mt-[40px] ">
              <button
                // onClick={sendMail}
                className="w-[300px] h-[45px] border text-[16px] font-Raleway text-[#7600bc] border-[#7600bc] rounded-[4px] text-center font-[500] "
              >
                <span className="flex justify-center items-center">
                  Reach Out
                  <FaPaperPlane className=" ml-[14px] cursor-pointer text-[#7600bc] " />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Smtp;
