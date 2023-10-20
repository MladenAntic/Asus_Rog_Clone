import React, { useEffect, useRef } from "react";
import "./Products.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import laptops from "./assets/laptops.png";
import motherboards from "./assets/motherboards.png";
import graphicsCards from "./assets/graphics-cards.png";
import monitors from "./assets/monitors.png";
import phones from "./assets/phones.png";

import cooling from "./assets/cooling.png";
import desktops from "./assets/desktops.png";
import psu from "./assets/psu.png";
import externalGraphicDocks from "./assets/external-graphic-docks.png";
import networking from "./assets/networking.png";

import keyboards from "./assets/keyboards.png";
import mouses from "./assets/mouses.png";
import headsets from "./assets/headsets.png";
import cases from "./assets/cases.png";
import gear from "./assets/gear.png";

const Products = () => {
  const previousRef = useRef(null);
  const nextRef = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);

  const slides = [slide1Ref, slide2Ref, slide3Ref];

  useEffect(() => {
    const productLinks = document.querySelectorAll(".productLink");
    const underlines = document.querySelectorAll(".underline");

    for (let i = 0; i < productLinks; i++) {
      productLinksddEventListener("mouseover", () => {
        underlines[i].style.display = "block";
      });

      productLinksddEventListener("mouseout", () => {
        underlines[i].style.display = "none";
      });
    }

    let index = 1;

    function changeSlides() {
      switch (index) {
        case 1:
          slide1Ref.current.style.display = "flex";

          slide2Ref.current.style.display = "none";
          slide3Ref.current.style.display = "none";
          break;
        case 2:
          slide2Ref.current.style.display = "flex";

          slide1Ref.current.style.display = "none";
          slide3Ref.current.style.display = "none";
          break;
        case 3:
          slide3Ref.current.style.display = "flex";

          slide1Ref.current.style.display = "none";
          slide2Ref.current.style.display = "none";
          break;
      }
    }

    previousRef.current.addEventListener("click", () => {
      index--;

      if (index < 1) {
        index = 3;
      }

      slides.forEach((slide) => {
        slide.current.classList.remove("slide-right");
        slide.current.classList.add("slide-left");
      });

      changeSlides();
    });

    nextRef.current.addEventListener("click", () => {
      index++;

      if (index > 3) {
        index = 1;
      }

      slides.forEach((slide) => {
        slide.current.classList.remove("slide-left");
        slide.current.classList.add("slide-right");
      });

      changeSlides();
    });
  });

  return (
    <section className="py-[4.6875rem] relative">
      <h2 className="text-center text-[2rem] text-[#202020] font-bold mb-[4.6875rem] max-md:mb-[50px]">
        EXPLORE OUR PRODUCTS
      </h2>

      <div className="flex items-center justify-center w-[80%] mx-auto overflow-hidden max-lg:flex-col">
        <div
          ref={slide1Ref}
          className="slide1 flex items-center gap-[1.875rem] max-lg:flex-col"
        >
          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={laptops} alt="Laptops" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Laptops
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img
              src={motherboards}
              alt="Motherboards"
              className="max-md:w-[100px]"
            />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Motherboards
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img
              src={graphicsCards}
              alt="Graphics Cards"
              className="max-md:w-[100px]"
            />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Graphics Cards
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={monitors} alt="Monitors" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Monitors
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={phones} alt="Phones" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Phones
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>
        </div>

        <div
          ref={slide2Ref}
          className="slide2 hidden items-center gap-[1.875rem] max-lg:flex-col"
        >
          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={cooling} alt="Cooling" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Cooling
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={desktops} alt="Desktops" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Desktops
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img
              src={psu}
              alt="Power Supply Units"
              className="max-md:w-[100px]"
            />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Power Supply Units
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img
              src={externalGraphicDocks}
              alt="External Graphic Docks"
              className="max-md:w-[100px]"
            />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              External Graphic Docks
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img
              src={networking}
              alt="Networking"
              className="max-md:w-[100px]"
            />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Networking
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>
        </div>

        <div
          ref={slide3Ref}
          className="slide3 hidden items-center gap-[1.875rem] max-lg:flex-col"
        >
          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={keyboards} alt="Keyboards" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Keyboards
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={mouses} alt="Mouses" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Mice & Mouse Pads
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={headsets} alt="Headsets" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Headsets & Audio
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={cases} alt="Cases" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Cases
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>

          <a
            href="#"
            className="productLink flex flex-col items-center justify-center text-center hover:text-red-500 duration-300"
          >
            <img src={gear} alt="Gear" className="max-md:w-[100px]" />
            <h4 className="relative w-fit mt-[1.5625rem] mx-auto font-medium max-md:text-sm">
              Apparel, Bags & Gear
              <span className="underline content-none absolute w-full h-[0.0625rem] bg-red-500 left-0 bottom-0 hidden"></span>
            </h4>
          </a>
        </div>
      </div>

      <div
        ref={previousRef}
        className="absolute top-[50%] translate-y-[-50%] left-[1.5625rem] h-[1.875rem] flex items-center justify-center text-center text-red-500 bg-black scale-150 cursor-pointer max-md:top-[96%] max-md:left-[35%]"
      >
        <ChevronLeftIcon />
      </div>

      <div
        ref={nextRef}
        className="absolute top-[50%] translate-y-[-50%] right-[1.5625rem] h-[1.875rem] flex items-center justify-center text-center text-red-500 bg-black scale-150 cursor-pointer max-md:top-[96%] max-md:right-[35%]"
      >
        <ChevronRightIcon />
      </div>
    </section>
  );
};

export default Products;
