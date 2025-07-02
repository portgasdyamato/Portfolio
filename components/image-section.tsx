"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SkillsSection from "./skills-section"; // Assuming you have a skills section component
const ImageSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full">
            <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-br from-[#FFE4E4] via-[#FFD1D1] to-[#ffc0c0] p-8 rounded-3xl  shadow-xl mb-10 mt-28 h-[450px] w-[450px] "
      >
        <SkillsSection />

      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-3xl overflow-hidden "
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative mt-6 mb-5 ml-5 "
        >
          <Image
            src="/heh.gif"
            alt="Portfolio showcase"
            width={800}
            height={900}
            className="rounded-lg "
          />
        </motion.div>
      </motion.div>
      

    </div>
  );
};

export default ImageSection;