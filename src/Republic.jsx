import React, { useEffect, useRef } from "react";
import joinTheRepublicDesktop from "./assets/join-the-republic.jfif";
import joinTheRepublicMobile from "./assets/join-the-republic-mobile.jfif";

const Republic = () => {
  const republicSectionRef = useRef(null);

  useEffect(() => {
    republicSectionRef.current.style.background = `url(${joinTheRepublicDesktop}) no-repeat center center/cover`;

    function setCurrentBg() {
      if (window.innerWidth < 1024) {
        republicSectionRef.current.style.background = `url(${joinTheRepublicMobile}) no-repeat center center/cover`;
      } else {
        republicSectionRef.current.style.background = `url(${joinTheRepublicDesktop}) no-repeat center center/cover`;
      }
    }

    setCurrentBg()

    window.addEventListener("resize", setCurrentBg);
  });

  return (
    <section ref={republicSectionRef} className="flex justify-end py-[7.5rem] max-md:h-[43.75rem] max-md:py-0 max-md:pt-[1.25rem] max-md:px-[1.25rem]">
      <div className="w-[33.125rem] text-white mr-[0.9375rem]">
        <h2 className="text-[2rem] font-bold max-md:text-[1.5rem] max-md:mb-[1.25rem]">THE ART OF THE ROG UNIVERSE</h2>
        <p className="max-md:text-sm">
          Technology never sleeps, nor should the action. For those keen on
          winning power, the Republic of Gamers awaits. Driven by relentless
          innovation, ROG is committed to producing out-of-this-world
          experiences for gamers and enthusiasts everywhere.
        </p>
      </div>
    </section>
  );
};

export default Republic;
