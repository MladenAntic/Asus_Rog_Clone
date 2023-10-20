import React, { useEffect, useRef } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LearnMoreBtn = () => {
  const learnMoreBtnRef = useRef(null);
  const underlineRef = useRef(null);

  useEffect(() => {
    learnMoreBtnRef.current.addEventListener("mouseover", () => {
      underlineRef.current.style.display = "block";
    });
    learnMoreBtnRef.current.addEventListener("mouseout", () => {
      underlineRef.current.style.display = "none";
    });
  });

  return (
    <div className="text-center">
      <a
        ref={learnMoreBtnRef}
        href="#"
        className="inline-block mx-auto text-red-500 text-xl relative duration-300 hover:text-red-700 max-md:text-sm"
      >
        LEARN MORE
        <ChevronRightIcon />
        <div
          ref={underlineRef}
          className="underline absolute w-[85%] h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"
        ></div>
      </a>
    </div>
  );
};

export default LearnMoreBtn;
