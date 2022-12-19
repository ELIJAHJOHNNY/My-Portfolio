import React, { useState } from "react";

function DateView() {
  // const currentDate = new Date().toLocaleDateString();
  const date = new Date().getDate();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  console.log(new Date());
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const updateTime = () => {
    let presentTime = new Date().toLocaleTimeString();
    setTime(presentTime);
  };
  setInterval(updateTime, 1000);
  return (
    <div className=" absolute right-[40px] top-[100px] flex items-center justify-center flex-col ">
      <h1 className="text-[#7600bc] dark:text-[#bcc0c0] font-Raleway text-[25px] font-[700] ">
        {time}
      </h1>
      <h1 className="text-[#7600bc] font-Raleway text-[18px] font-[700] bg-[#bcc0c0] rounded-[4px] p-2 ">
        {weekDay[day]}, {date}-{months[month]}-{year}{" "}
      </h1>
    </div>
  );
}

export default DateView;
