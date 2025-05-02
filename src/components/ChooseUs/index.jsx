"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const ChooseUsList = [
    {
      title: "Instant Payments",
      content:
        "Receive funds quickly in your preferred currency, with minimal fees and total privacy.",
    },
    {
      title: "AI-Powered Security",
      content:
        "Stay safe with our cutting-edge AI that verifies clients and jobs, monitors interactions, and ensures your work is protected.",
    },
    {
      title: "Task Management Made Simple",
      content:
        "Stay organized with intuitive project tools — from task assignment to real-time collaboration.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full flex justify-center" id="why-choose-us">
      <div className="absolute left-[-150px] top-[255px] animate-floatingY">
        <Image
          src="/image/cube.svg"
          alt="cube"
          width={318}
          height={341}
          className="opacity-20 rotate-[-30deg]" />
      </div>
      <motion.div
        className="max-w-[1440px] flex flex-col gap-14 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}>
        <div className="flex flex-col gap-8 items-center">
          <motion.h2
            className="font-medium text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gradientStart to-gradientEnd"
            variants={itemVariants}>
            <span className="text-black">Why</span> Choose Us
            <span className="text-black">?</span>
          </motion.h2>

          <motion.span className="font-jost text-base text-center" variants={itemVariants}>
            Tired of losing a chunk of your earnings to platform fees? Say
            goodbye to high costs and hello to a flat-rate
            <br />
            subscription model. Keep what you earn and enjoy instant crypto
            payments with low transaction fees.
          </motion.span>
        </div>

        <motion.div
          className="flex items-center justify-between gap-8"
          variants={containerVariants}>
          {ChooseUsList.map((item, index) => (
            <motion.div
              key={index}
              className="text-center flex flex-col items-center gap-7 max-w-[360px]"
              variants={itemVariants}>
              <div
                className="bg-gradient-to-r from-[#198BD833] to-[#F03DCE33] w-[90px] h-[90px] rounded-lg flex items-center justify-center">
                <motion.h2
                  className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gradientStart to-gradientEnd text-center"
                  variants={itemVariants}>
                  0{index + 1}
                </motion.h2>
              </div>
              <div className="flex flex-col items-center gap-3">
                <motion.h3 className="font-jost font-medium text-xl" variants={itemVariants}>
                  {item.title}
                </motion.h3>
                <motion.span className="font-jost text-base" variants={itemVariants}>
                  {item.content}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
