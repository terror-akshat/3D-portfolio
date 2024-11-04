import React from "react";
import {motion} from "framer-motion"
import { fadeIn } from "../utils/motion";
const Image = ({ me }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="flex justify-center items-center mt-10 relative top-[200px] h-screen">
      <img
        className="w-full max-w-md rounded-full green-pink-gradient p-[4px] shadow-lg object-cover "
        src={me}
        alt="A portrait of Akshat"
      />
    </motion.div>
  );
};

export default Image;
