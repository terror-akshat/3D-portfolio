import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Have a look</p>
        <h2 className={styles.sectionHeadText}>Techanical Skills</h2>
      </motion.div>
      
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((tech) => {
          return (
            <div className="w-28 h-28" key={tech.name}>
              <p className="relative text-[15px] m-4 text">{tech.name}</p>
              <BallCanvas icon={tech.icon} title={tech.name} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
