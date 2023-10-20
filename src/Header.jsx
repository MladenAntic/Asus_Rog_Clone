import React, { useRef } from "react";
import rogLogo from "./assets/rogLogo.svg";
import asusLogo from "./assets/asusLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const Header = () => {
  const mobileMenuRef = useRef(null);
  const mobileMenuTopRef = useRef(null);
  const horizontalRuleRef = useRef(null);
  const asusLogoRef = useRef(null);

  function showMobileMenu() {
    mobileMenuRef.current.style.display = "block";
    mobileMenuRef.current.style.zIndex = "100";
    mobileMenuTopRef.current.style.display = "flex";
    document.querySelectorAll(".chevron").forEach((chevron) => {
      chevron.style.display = "block";
    });
    horizontalRuleRef.current.style.display = "block";
    asusLogoRef.current.style.display = "block";

    document.body.style.overflow = "hidden";

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        document.body.style.overflowY = "scroll";
      }
    });
  }

  function hideMobileMenu() {
    mobileMenuRef.current.style.display = "none";
    mobileMenuRef.current.style.zIndex = "initial";
    mobileMenuTopRef.current.style.display = "none";
    document.querySelectorAll(".chevron").forEach((chevron) => {
      chevron.style.display = "none";
    });
    horizontalRuleRef.current.style.display = "none";
    asusLogoRef.current.style.display = "none";

    document.body.style.overflowY = "scroll";
  }

  return (
    <header className="bg-black flex items-center justify-between text-white py-[1.25rem] px-[3.75rem] max-md:px-[1.875rem] sticky top-0 left-0 right-0 z-[100]">
      <div
        onClick={() => {
          showMobileMenu();
          window.addEventListener("resize", () => {
            if (window.innerWidth > 1024) {
              hideMobileMenu();
              mobileMenuRef.current.style.display = "block";
            } else {
              showMobileMenu();
            }
          });
        }}
        className="cursor-pointer hidden max-lg:block"
      >
        <MenuOutlinedIcon />
      </div>

      <a href="#">
        <img
          src={rogLogo}
          alt="ROG Logo"
          className="w-[12.5rem] max-md:w-[9.375rem]"
        />
      </a>

      <nav
        ref={mobileMenuRef}
        className="max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:left-0 max-lg:bottom-0 max-lg:bg-[#f5f5f5] max-lg:hidden"
      >
        <div
          ref={mobileMenuTopRef}
          className="items-center justify-between p-[1.875rem] hidden"
        >
          <div className="text-black">
            <PersonOutlinedIcon />
          </div>
          <div
            onClick={() => {
              hideMobileMenu();
              window.addEventListener("resize", () => {
                if (window.innerWidth < 1024) {
                  hideMobileMenu();
                }
              });
            }}
            className="text-black cursor-pointer"
          >
            <CloseOutlinedIcon />
          </div>
        </div>
        <ul className="flex items-center gap-[1.25rem] text-sm max-xl:text-[0.75rem] max-xl:gap-[0.625rem] max-lg:flex-col max-lg:items-start max-lg:gap-[1.875rem] max-lg:text-black max-lg:p-[1.875rem] max-lg:text-xl">
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">PRODUCTS</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">INNOVATION</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">DOWNLOADS</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">COMMUNITY</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">WHAT'S HOT</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
          <li className="flex items-center justify-between hover:text-red-500 duration-300 max-lg:w-full">
            <a href="#">SUPPORT</a>
            <div className="chevron hidden">
              <ChevronRightOutlinedIcon />
            </div>
          </li>
        </ul>

        <hr ref={horizontalRuleRef} className="hidden" />

        <a ref={asusLogoRef} href="#" className="mt-[1.875rem] ml-[1.875rem] hidden">
          <img src={asusLogo} alt="Asus Logo" />
        </a>
      </nav>

      <div className="flex items-center gap-[1.875rem]">
        <a href="#" className="max-lg:hidden">
          <img src={asusLogo} alt="Asus Logo" />
        </a>
        <div className="hover:text-red-500 cursor-pointer duration-300">
          <SearchIcon />
        </div>
        <div className="hover:text-red-500 cursor-pointer duration-300 max-lg:hidden">
          <PersonOutlinedIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
