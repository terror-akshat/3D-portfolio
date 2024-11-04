import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, me } from "../assets";
import Image from "./Image";
import { Tooltip } from "@mui/material";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`} // Added z-index here
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Akshat</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              I develop 3D visuals and server{" "}
              <span className="sm:block hidden"></span> side applications.
            </p>
            <div className="flex gap-3">
              <Tooltip placement="bottom"  color="#fffff" title="Github">
                <a
                  href="https://github.com/terror-akshat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 bg-[#0077b5] text-white font-semibold rounded-md hover:bg-[#005582] transition z-20"
                >
                  <img src={github} className="w-5 h-5" />
                </a>
              </Tooltip>
              <Tooltip placement="bottom"  color="#fffff" title="Linkedin">
              <a
                href="https://www.linkedin.com/in/akshat-agarwal-55946a27a"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-2 bg-[#0077b5] text-white font-semibold rounded-md hover:bg-[#005582] transition z-20"
              >
                <img
                  src="https://e7.pngegg.com/pngimages/311/470/png-clipart-social-media-linkedin-youtube-social-login-business-social-media-blue-text.png"
                  className="w-5 h-5"
                />
              </a>
              </Tooltip>
            </div>
          </div>
        </div>
        <Image me={me} />
      </section>
    </>
  );
};

export default Hero;
