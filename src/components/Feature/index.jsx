"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Feature = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}>
        <div className="absolute left-[-170px] top-[100px] animate-floatingY">
          <Image
            src="/image/cube.svg"
            alt="cube"
            width={318}
            height={341}
            className="opacity-20 rotate-[-30deg]" />
        </div>
      </motion.div>

      <div className="max-w-[1440px]">
        <motion.h2
          className="ml-28 text-[64px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gradientStart to-gradientEnd"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}>
          Join the Future of Freelancing{" "}
          <span className="text-black">
            Start working with lower fees, more security, and tools that
          </span>{" "}
          make your projects seamless.
        </motion.h2>
      </div>
    </div>
  );
};

export default Feature;
