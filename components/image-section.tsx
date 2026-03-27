"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-full">
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
          className="relative mt-8 sm:mt-16 md:mt-20 lg:mt-28 mb-3 sm:mb-4 md:mb-5 ml-2 sm:ml-3 md:ml-5"
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
