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
        className="bg-gradient-to-br from-[#FFE4E4] via-[#FFD1D1] to-[#ffc0c0] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl mb-6 sm:mb-8 md:mb-10 mt-8 sm:mt-16 md:mt-20 lg:mt-28 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] overflow-hidden"
      >
        <SkillsSection />

      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative mt-3 sm:mt-4 md:mt-6 mb-3 sm:mb-4 md:mb-5 ml-2 sm:ml-3 md:ml-5"
        >
          <Image
            src="/heh.gif"
            alt="Portfolio showcase"
            width={800}
            height={900}
            className="rounded-lg w-full h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
          />
        </motion.div>
      </motion.div>
      

    </div>
  );
};

export default ImageSection;