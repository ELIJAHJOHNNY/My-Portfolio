import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButtonUp(true);
      } else setShowButtonUp(false);
    });
  }, []);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showButtonUp && (
        <button
          type="button"
          onClick={goUp}
          className="rounded-full xs:p-[8px] md:p-4 dark:text-[#7600bc] dark:bg-[#bcc0c0] text-[#bcc0c0] bg-[#7600bc] fixed xs:bottom-[30px] md:bottom-[50px] xs:right-[8px] md:right-[50px] "
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
