import React, { useEffect, useRef } from "react";
import "./Stories.css";
import z790Motherboard from "./assets/z790-motherboard.webp";
import rogxEvangelion from "./assets/rogx-evangelion.webp";
import rogAlly from "./assets/rog-ally.webp";
import rtx4090 from "./assets/rtx4090.webp";
import scar18 from "./assets/scar-18.webp";
import LearnMoreBtn from "./components/LearnMoreBtn";

const Stories = () => {
  const story1Ref = useRef(null);
  const story2Ref = useRef(null);
  const story3Ref = useRef(null);

  const story4Ref = useRef(null);
  const story5Ref = useRef(null);

  useEffect(() => {
    story1Ref.current.style.background = `url(${z790Motherboard}) no-repeat center center/cover`;
    story2Ref.current.style.background = `url(${rogxEvangelion}) no-repeat center center/cover`;
    story3Ref.current.style.background = `url(${rogAlly}) no-repeat center center/cover`;

    story4Ref.current.style.background = `url(${rtx4090}) no-repeat center center/cover`;
    story5Ref.current.style.background = `url(${scar18}) no-repeat center center/cover`;
  });
  return (
    <section className="bg-[#1a1a1a] py-[4.6875rem]">
      <h2 className="text-white text-center font-bold text-[2rem] mb-[1.5625rem]">
        RECENT STORIES
      </h2>

      <div className="w-[95%] mx-auto mb-[3.125rem]">
        <div className="flex items-center justify-center gap-[1.25rem] mb-[1.25rem] max-lg:flex-col max-md:h-[93.75rem] max-md:flex-1">
          <a
            href="#"
            ref={story1Ref}
            className="h-[31.25rem] flex-[0.3333] flex flex-col justify-end p-[1.5625rem] text-white relative max-lg:w-full max-lg:flex-1"
          >
            <div className="z-10">
              <h5 className="font-medium text-lg">
                New Z790 motherboards from ROG pave t...
              </h5>
              <p>Wifi 7 support, more fast storage, front-panel device...</p>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
          </a>

          <a
            href="#"
            ref={story2Ref}
            className="h-[31.25rem] flex-[0.3333] flex flex-col justify-end p-[1.5625rem] text-white relative max-lg:w-full max-md:flex-1"
          >
            <div className="z-10">
              <h5 className="font-medium text-lg">
                Activate Beast Mode With ROG's new EVA-...
              </h5>
              <p>ROG x Evangelion is back, with Asuka is at the helm. I...</p>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
          </a>

          <a
            href="#"
            ref={story3Ref}
            className="h-[31.25rem] flex-[0.3333] flex flex-col justify-end p-[1.5625rem] text-white relative max-lg:w-full max-md:flex-1"
          >
            <div className="z-10">
              <h5 className="font-medium text-lg">
                ROG Ally Z1 vs Z1 Extreme Performance &...
              </h5>
              <p>We're happy to announce that the Ryzen Z1 variant of...</p>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30"></div>
          </a>
        </div>

        <div className="flex items-center justify-center gap-[1.25rem] max-md:flex-col max-md:h-[62.5rem]">
          <a
            href="#"
            ref={story4Ref}
            className="flex-[0.5] h-[21.875rem] flex flex-col justify-end p-[1.5625rem] text-white relative max-md:w-full max-md:flex-1"
          >
            <div className="z-10">
              <h5 className="font-medium text-lg">
                The ROG Matrix GeForce RTX 4090 sets eight overclocking records,
                an...
              </h5>
              <p className="text-sm">
                The pinnacle of gaming power has arrived. The ROG Matrix GeForce
                RTX 4090 redefines...
              </p>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          </a>

          <a
            href="#"
            ref={story5Ref}
            className="flex-[0.5] h-[21.875rem] flex flex-col justify-end p-[1.5625rem] text-white relative max-md:w-full max-md:flex-1"
          >
            <div className="z-10">
              <h5 className="font-medium text-lg">
                Hands-on: The ROG Strix SCAR 18 gaming laptop packs a big screen
                in...
              </h5>
              <p className="text-sm">
                The ROG Strix SCAR 18 boasts an 18-inch ROG Nebula Display and
                unbridled power for g...
              </p>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          </a>
        </div>
      </div>

      <LearnMoreBtn />
    </section>
  );
};

export default Stories;
