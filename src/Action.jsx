import React, { useEffect, useRef } from "react";
import allyGames from "./assets/ally-games.webp";
import rogOpera from "./assets/rog-opera.webp";
import rogRetro from "./assets/rog-retro.webp";
import LearnMoreBtn from "./components/LearnMoreBtn";

const Action = () => {
  useEffect(() => {
    document.querySelectorAll(".polygon-left").forEach((polygon) => {
      polygon.style.clipPath = "polygon(0 0, 60% 0, 100% 100%, 0% 100%)";
    });

    document.querySelectorAll(".polygon-right").forEach((polygon) => {
      polygon.style.clipPath = "polygon(0 0, 70% 0, 100% 100%, 30% 100%)";
    });
  });

  return (
    <section className="py-[4.6875rem]">
      <h2 className="text-center mb-[3.125rem] text-[2rem] font-bold">
        ROG IN ACTON
      </h2>

      <div className="flex items-start justify-center gap-[1.25rem] mb-[3.125rem] w-[90%] mx-auto max-lg:flex-col max-lg:items-center max-lg:gap-[3.125rem]">
        <a href="#">
          <img
            src={allyGames}
            alt="Ally Games"
            className="block w-[25.9375rem] mb-[1.25rem]"
          />
          <div className="flex items-center gap-[0.3125rem]">
            <div className="polygon-left w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
            <span className="text-sm font-bold text-red-500">GAMING</span>
            <div className="polygon-right w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
          </div>
          <h5 className="text-lg font-medium">
            The best ROG Ally games to play in short bursts
          </h5>
          <p className="text-sm">
            Sometimes you have a few hours to game, sometimes you have...
          </p>
        </a>

        <a href="#">
          <img
            src={rogOpera}
            alt="Rog Opera"
            className="block w-[25.9375rem] mb-[1.25rem]"
          />
          <div className="flex items-center gap-[0.3125rem]">
            <div className="polygon-left w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
            <span className="text-sm font-bold text-red-500">GAMING</span>
            <div className="polygon-right w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
          </div>
          <h5 className="text-lg font-medium">
            ROG and Opera join forces for a special edition of...
          </h5>
          <p className="text-sm">
            The Opera GX ROG Edition browser is loaded with game-changing...
          </p>
        </a>

        <a href="#">
          <img
            src={rogRetro}
            alt="Rog Retro"
            className="block w-[25.9375rem] mb-[1.25rem]"
          />
          <div className="flex items-center gap-[0.3125rem]">
            <div className="polygon-left w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
            <span className="text-sm font-bold text-red-500">GAMING</span>
            <div className="polygon-right w-[1.5625rem] h-[0.9375rem] bg-red-600"></div>
          </div>
          <h5 className="text-lg font-medium">
            The best retro and retro revival games for the ROG...
          </h5>
          <p className="text-sm">
            The ROG Ally can play modern AAA games with excellent fidelity...
          </p>
        </a>
      </div>

      <LearnMoreBtn />
    </section>
  );
};

export default Action;
