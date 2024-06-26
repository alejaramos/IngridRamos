import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.90)}
        className="w-full green-pink-gradient p-[1.5px] rounded-[20px] shadow-card"
      >
        <div
        options = {{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon}
          alt={title}
          className="w-16 h16 object-contain"/>
          <h3 className="text-white text-[20px]
          font-bold text-center"
          >{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] mas-w-3xl leading-[30px]"
      >
        I am a bilingual developer passionate about software development, with
        experience in Next.js, Node.js, and React. I have worked on web
        application projects, including the creation of innovative solutions. My
        experience ranges from API management to the development of dynamic and
        responsive interfaces. I am confident that my experience and passion for
        learning make me a valuable candidate for web development projects,
        especially in technologies such as Node.js and React.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
