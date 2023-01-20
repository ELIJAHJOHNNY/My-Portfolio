import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100vw] h-[100vh] dark:bg-black  flex items-center justify-center">
      <div className="w-[80%] h-full flex items-center justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-[30px] right-0 font-Raleway font-[700] dark:bg-[#7600bc] bg-[#bcc0c0] xs:p-1 md:px-3 md:py-2 dark:text-[#bcc0c0] text-[#7600bc] rounded-[4px] xs:text-[10px] md:text-[12px] "
        >
          Back to projects
        </button>
        <h1 className="dark:text-[#bcc0c0] text-[30px] font-[700] ">
          In Progress...
        </h1>
      </div>
    </div>
  );
};

export default ProjectDetails;
