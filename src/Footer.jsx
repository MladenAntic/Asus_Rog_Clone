import React, { useEffect, useRef } from "react";
import "./Footer.css";
import rogFooter from "./assets/rog-footer.jfif";
import facebookIcon from "./assets/facebook-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";
import discordIcon from "./assets/discord-icon.svg";
import youtubeIcon from "./assets/youtube-icon.svg";
import twitchIcon from "./assets/twitch-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import tiktokIcon from "./assets/tiktok-icon.svg";
import threadsIcon from "./assets/threads-icon.svg";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    footerRef.current.style.background = `url(${rogFooter}) no-repeat center center/cover`;

    const topLinks = document.querySelectorAll(".link-top");
    const topUnderlines = document.querySelectorAll(".underline-top");

    const icons = document.querySelectorAll(".icon");

    const bottomLinks = document.querySelectorAll(".link-bottom");
    const bottomUnderlines = document.querySelectorAll(".underline-bottom");

    for (let i = 0; i < topLinks.length; i++) {
      topLinks[i].addEventListener("mouseover", () => {
        topUnderlines[i].style.display = "block";
      });
      topLinks[i].addEventListener("mouseout", () => {
        topUnderlines[i].style.display = "none";
      });
    }

    for (let i = 0; i < bottomLinks.length; i++) {
      bottomLinks[i].addEventListener("mouseover", () => {
        bottomUnderlines[i].style.display = "block";
      });
      bottomLinks[i].addEventListener("mouseout", () => {
        bottomUnderlines[i].style.display = "none";
      });
    }

    icons.forEach((icon) => {
      icon.addEventListener("mouseover", () => {
        icon.style.filter =
          "invert(44%) sepia(51%) saturate(4810%) hue-rotate(334deg) brightness(95%) contrast(98%)";
      });
      icon.addEventListener("mouseout", () => {
        icon.style.filter =
          "invert(65%) sepia(0%) saturate(6424%) hue-rotate(142deg) brightness(94%) contrast(97%)";
      });
    });
  });

  return (
    <footer
      ref={footerRef}
      className="text-[#999] pt-[1.875rem] px-[3.75rem] h-[32.5rem] max-md:h-[65rem]"
    >
      <div className="flex items-center justify-between border-b border-solid border-[#999] pb-[1.875rem] max-lg:flex-col max-lg:gap-[1.5625rem]">
        <nav className="max-md:w-full">
          <ul className="flex items-center gap-[1.875rem] max-xl:text-sm max-md:flex-col max-md:items-start ">
            <li className="link-top hover:text-red-500 duration-700 relative max-md:w-full max-md:border-b max-md:border-solid max-md:border-[#999] max-md:pb-[1.875rem]">
              <a href="#">ABOUT ROG</a>
              <span className="underline-top content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
            </li>
            <li className="link-top hover:text-red-500 duration-700 relative max-md:w-full max-md:border-b max-md:border-solid max-md:border-[#999] max-md:pb-[1.875rem]">
              <a href="#">HOME</a>
              <span className="underline-top content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
            </li>
            <li className="link-top hover:text-red-500 duration-700 relative max-md:w-full max-md:border-b max-md:border-solid max-md:border-[#999] max-md:pb-[1.875rem]">
              <a href="#">NEWSROOM</a>
              <span className="underline-top content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
            </li>
            <li className="link-top hover:text-red-500 duration-700 relative max-md:w-full max-md:border-b max-md:border-solid max-md:border-[#999] max-md:pb-[1.875rem]">
              <a href="#">ACCESSIBILITY HELP</a>
              <span className="underline-top content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-[3.125rem] max-xl:gap-[2.5rem] max-md:gap-[1.25rem]">
          <a href="#" className="icon">
            {" "}
            <img src={facebookIcon} alt="Facebook Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={twitterIcon} alt="Twitter Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={discordIcon} alt="Discord Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={youtubeIcon} alt="Youtube Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={twitchIcon} alt="Twitch Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="w-[1.5625rem] max-xl:w-[1.25rem]"
            />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={tiktokIcon} alt="Tik Tok Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
          <a href="#" className="icon">
            {" "}
            <img src={threadsIcon} alt="Threads Icon" className="w-[1.5625rem] max-xl:w-[1.25rem]" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[1.25rem] max-lg:flex-col max-lg:gap-[1.5625rem] max-md:items-start">
        <a
          href="#"
          className="link-bottom flex items-center gap-[0.3125rem] hover:text-red-500 relative max-md:text-sm"
        >
          <LanguageOutlinedIcon />
          <span>Global/English</span>
          <span className="underline-bottom content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
        </a>

        <ul className="flex items-center gap-[1.25rem] text-[0.75rem] max-md:flex-wrap max-md:text-[0.625rem]">
          <li className="link-bottom relative hover:text-red-500">
            <a href="#">TERMS OF USE NOTICE</a>
            <span className="underline-bottom content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
          </li>
          <li className="link-bottom relative hover:text-red-500">
            <a href="#">PRIVACY POLICY</a>
            <span className="underline-bottom content-none absolute left-0 bottom-0 w-full h-[0.0625rem] bg-red-500 hidden"></span>
          </li>
          <li>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
