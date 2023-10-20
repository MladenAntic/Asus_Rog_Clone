import React, { useRef, useEffect, useState } from "react";
import asusZ790Desktop from "./assets/asus-z790.webp";
import evangelionDesktop from "./assets/evangelion.webp";
import giveawayDesktop from "./assets/giveaway.webp";
import rogStrixDesktop from "./assets/rog-strix.webp";
import alanWakeDesktop from "./assets/alan-wake.webp";
import rogZephyrusG14Desktop from "./assets/rog-zephyrus-g14.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Intro = () => {
  const sliderRef = useRef(null);

  const playIconRef = useRef(null);
  const pauseIconRef = useRef(null);

  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const progress1Ref = useRef(null);
  const progress2Ref = useRef(null);
  const progress3Ref = useRef(null);
  const progress4Ref = useRef(null);
  const progress5Ref = useRef(null);
  const progress6Ref = useRef(null);

  const [state, setState] = useState("play");

  useEffect(() => {
    document.querySelectorAll(".slider").forEach((slider) => {
      slider.style.clipPath = "polygon(5% 85%, 100% 85%, 95% 100%, 0% 100%)";
    });

    let cursorPositionLeft = Math.round(
      sliderRef.current.clientWidth - sliderRef.current.clientWidth * 0.8
    );

    let cursorPositionRight = Math.round(
      sliderRef.current.clientWidth - cursorPositionLeft
    );

    sliderRef.current.addEventListener("mousemove", (e) => {
      if (e.clientX < cursorPositionLeft) {
        leftArrowRef.current.style.opacity = "1";
      } else {
        leftArrowRef.current.style.opacity = "0";
      }

      if (e.clientX > cursorPositionRight) {
        rightArrowRef.current.style.opacity = "1";
      } else {
        rightArrowRef.current.style.opacity = "0";
      }
    });

    let width1 = 1;
    let width2 = 1;
    let width3 = 1;
    let width4 = 1;
    let width5 = 1;
    let width6 = 1;

    let isPaused = false;
    
    let id = setInterval(() => {
      if (!isPaused) {
        frame();
      }
    }, 50);

    pauseIconRef.current.addEventListener("click", () => {
      pauseIconRef.current.style.display = "none";
      playIconRef.current.style.display = "block";
      isPaused = true;
    });

    playIconRef.current.addEventListener("click", () => {
      playIconRef.current.style.display = "none";
      pauseIconRef.current.style.display = "block";
      isPaused = false;
    });

    function frame() {
      width1++;
      progress1Ref.current.style.width = width1 + "%";
      sliderRef.current.style.background = `url(${asusZ790Desktop}) no-repeat center center/cover`;

      if (width1 >= 100) {
        width1 = 100;
        progress1Ref.current.style.background = "#3c3c3c";
        width2++;
        progress2Ref.current.style.width = width2 + "%";
        sliderRef.current.style.background = `url(${evangelionDesktop}) no-repeat center center/cover`;
      }

      if (width2 >= 100) {
        width2 = 100;
        progress2Ref.current.style.background = "#3c3c3c";
        width3++;
        progress3Ref.current.style.width = width3 + "%";
        sliderRef.current.style.background = `url(${giveawayDesktop}) no-repeat center center/cover`;
      }

      if (width3 >= 100) {
        width3 = 100;
        progress3Ref.current.style.background = "#3c3c3c";
        width4++;
        progress4Ref.current.style.width = width4 + "%";
        sliderRef.current.style.background = `url(${rogStrixDesktop}) no-repeat center center/cover`;
      }

      if (width4 >= 100) {
        width4 = 100;
        progress4Ref.current.style.background = "#3c3c3c";
        width5++;
        progress5Ref.current.style.width = width5 + "%";
        sliderRef.current.style.background = `url(${alanWakeDesktop}) no-repeat center center/cover`;
      }

      if (width5 >= 100) {
        width5 = 100;
        progress5Ref.current.style.background = "#3c3c3c";
        width6++;
        progress6Ref.current.style.width = width6 + "%";
        sliderRef.current.style.background = `url(${rogZephyrusG14Desktop}) no-repeat center center/cover`;
      }

      if (width6 >= 100) {
        progress6Ref.current.style.background = "#3c3c3c";

        width1 = 1;
        width2 = 1;
        width3 = 1;
        width4 = 1;
        width5 = 1;
        width6 = 1;

        progress1Ref.current.style.background = "rgb(239, 68, 68)";
        progress2Ref.current.style.background = "rgb(239, 68, 68)";
        progress3Ref.current.style.background = "rgb(239, 68, 68)";
        progress4Ref.current.style.background = "rgb(239, 68, 68)";
        progress5Ref.current.style.background = "rgb(239, 68, 68)";
        progress6Ref.current.style.background = "rgb(239, 68, 68)";

        progress1Ref.current.style.width = "0";
        progress2Ref.current.style.width = "0";
        progress3Ref.current.style.width = "0";
        progress4Ref.current.style.width = "0";
        progress5Ref.current.style.width = "0";
        progress6Ref.current.style.width = "0";
      }
    }

    rightArrowRef.current.addEventListener("click", () => {
      if (width1 < 100) {
        width1 = 100;
      } else if (width2 < 100) {
        width2 = 100;
      } else if (width3 < 100) {
        width3 = 100;
      } else if (width4 < 100) {
        width4 = 100;
      } else if (width5 < 100) {
        width5 = 100;
      } else if (width6 < 100) {
        width6 = 100;
      }
    });

    leftArrowRef.current.addEventListener("click", () => {
      if (width1 < 100) {
        width1 = 100;
        width2 = 100;
        width3 = 100;
        width4 = 100;
        width5 = 100;
      } else if (width2 < 100) {
        width1 = 1;
        width2 = 1;
        progress1Ref.current.style.width = "0";
        progress1Ref.current.style.background = "rgb(239, 68, 68)";
        progress2Ref.current.style.width = "0";
      } else if (width3 < 100) {
        width2 = 1;
        width3 = 1;
        progress2Ref.current.style.width = "0";
        progress2Ref.current.style.background = "rgb(239, 68, 68)";
        progress3Ref.current.style.width = "0";
      } else if (width4 < 100) {
        width3 = 1;
        width4 = 1;
        progress3Ref.current.style.width = "0";
        progress3Ref.current.style.background = "rgb(239, 68, 68)";
        progress4Ref.current.style.width = "0";
      } else if (width5 < 100) {
        width4 = 1;
        width5 = 1;
        progress4Ref.current.style.width = "0";
        progress4Ref.current.style.background = "rgb(239, 68, 68)";
        progress5Ref.current.style.width = "0";
      } else if (width6 < 100) {
        width5 = 1;
        width6 = 1;
        progress5Ref.current.style.width = "0";
        progress5Ref.current.style.background = "rgb(239, 68, 68)";
        progress6Ref.current.style.width = "0";
      }
    });
  });

  return (
    <section className="relative overflow-hidden">
      <div className="bg-red-500 text-center text-white text-sm py-[0.625rem]">
        Log in to the ROG Elite Rewards program now!
      </div>
      <div
        ref={sliderRef}
        className="h-[34.375rem] duration-300 max-lg:h-[100vh]"
      >
        <div className="flex items-center gap-[0.3125rem] absolute bottom-[1.25rem] left-[50%] translate-x-[-50%]">
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress1Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress2Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress3Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress4Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress5Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>
          <div className="slider w-[4.6875rem] h-[1.5625rem] bg-[#3c3c3c] relative max-lg:w-[3.125rem] max-md:w-[1.875rem]">
            <div
              ref={progress6Ref}
              className="absolute top-0 left-0 right-0 bottom-0 bg-red-500 w-0"
            ></div>
          </div>

          <div className="text-[#3c3c3c] cursor-pointer mt-[0.9375rem] mb-[-0.3125rem] ml-[0.9375rem] w-[1.875rem] h-[1.875rem] bg-black flex items-center justify-center text-center rounded-full">
            <div ref={playIconRef} className="hidden">
              <PlayArrowIcon />
            </div>
            <div ref={pauseIconRef}>
              <PauseIcon />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={leftArrowRef}
        className="opacity-0 bg-black flex duration-300 absolute top-[50%] left-[0.625rem] translate-y-[-50%] border border-solid border-[#3c3c3c] text-white hover:text-red-500 cursor-pointer h-[4.6875rem] w-[2.5rem] items-center justify-center text-center max-lg:hidden"
      >
        <ChevronLeftIcon />
      </div>

      <div
        ref={rightArrowRef}
        className="opacity-0 bg-black flex duration-300 absolute top-[50%] right-[0.625rem] translate-y-[-50%] border border-solid border-[#3c3c3c] text-white hover:text-red-500 cursor-pointer h-[4.6875rem] w-[2.5rem] items-center justify-center text-center max-lg:hidden"
      >
        <ChevronRightIcon />
      </div>
    </section>
  );
};

export default Intro;
