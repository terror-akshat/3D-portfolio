import React, { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { mlProjects } from "../constants";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{ max: 45, scale: 1, speed: 0.45 }}
        className="bg-tertiary sm:w-[360px] rounded-2xl p-5 w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full object-cover rounded-2xl h-[200px]"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="rounded-full black-gradient w-10 h-10 flex justify-center items-center cursor-pointer "
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(demo_link, "blank")}
              className="rounded-full black-gradient w-10 h-10 flex justify-center items-center cursor-pointer "
            >
              <img
                src={null}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-7.5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [tab, setTab] = useState(true);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work.</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here, I showcase the projects I've worked on, reflecting my dedication
          to leveraging technology for impactful solutions. Each entry
          highlights my skills, creativity, and the collaborative efforts that
          drive successful outcomes.
        </motion.p>
      </div>
      <div className="flex flex-row justify-evenly items-center mt-10 gap-10">
        <button
          onClick={() => setTab(true)}
          className="text-[25px] border rounded-full p-5 shadow-lg green-pink-gradient cursor-pointer"
        >
          Web-Project
        </button>
        <button
          onClick={() => setTab(false)}
          className="text-[25px] border rounded-full p-5 shadow-lg green-pink-gradient cursor-pointer"
        >
          Ml-Project
        </button>
      </div>
      {tab ? (
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={`project-${index}`}
                {...project}
                index={index}
              />
            );
          })}
        </div>
      ) : (
        <div className="mt-20 flex flex-wrap gap-7">
          {mlProjects.map((project, index) => {
            return (
              <ProjectCard
                key={`project-${index}`}
                {...project}
                index={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "work");
