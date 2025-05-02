"use client"; // Ensure the component is client-side

import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import { Icons } from "@/icons";

const Collaborate = () => {
  // Define animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <div className="relative flex w-full justify-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}>
        <div className="absolute left-[-170px] animate-floatingY">
          <Image
            src="/image/cube.svg"
            alt="cube"
            width={318}
            height={341}
            className="opacity-20 rotate-[-30deg]" />
        </div>
      </motion.div>

      <div className="max-w-[1440px] flex flex-col gap-24">
        <motion.h2
          className="font-medium text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gradientStart to-gradientEnd text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariant}>
          <span className="text-black">Work</span> Efficiently, Collaborate{" "}
          <span className="text-black">Easily</span>
        </motion.h2>

        <div className="flex gap-12 items-center">
          <motion.div
            className="basis-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}>
            <h2
              className="mb-12 font-medium text-[86px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-gradientStart to-gradientEnd">
              Real-Time Collaboration & Communication
            </h2>
            <span className="font-jost text-xl">
              Work seamlessly, no matter the size of your team.
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
            className="basis-1/2">
            <div>
              <div className="flex items-end justify-center gap-2 relative mb-5">
                <h3 className="min-w-max font-medium text-[32px] text-black">
                  Instant Messaging
                </h3>
                <div
                  className="bg-gradient-to-r from-gradientStart to-gradientEnd h-[1px] w-full mb-3"></div>
                <Icons.chat className="absolute top-[-20px] left-[270px]" width="30" />
              </div>
              <span className="font-jost text-xl">
                Chat, send files, or jump on voice and video calls — all from
                one place.
              </span>
            </div>

            <div className="mt-20">
              <div className="flex items-end justify-center gap-2 relative mb-5">
                <h3 className="min-w-max font-medium text-[32px] text-black">
                  AI Translation
                </h3>
                <div
                  className="bg-gradient-to-r from-gradientStart to-gradientEnd h-[1px] w-full mb-3"></div>
                <Icons.translation className="absolute top-[-20px] left-[210px]" width="30" />
              </div>
              <span className="font-jost text-xl">
                Communicate across borders with real-time translation.
              </span>
            </div>

            <div className="mt-20">
              <div className="flex items-end justify-center gap-2 relative mb-5">
                <h3 className="min-w-max font-medium text-[32px] text-black">
                  Task and Project Management
                </h3>
                <div
                  className="bg-gradient-to-r from-gradientStart to-gradientEnd h-[1px] w-full mb-3"></div>
                <Icons.management className="absolute top-[-20px] left-[450px]" width="30" />
              </div>
              <span className="font-jost text-xl">
                Keep track of every project with clear timelines, task
                assignments, and milestones.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
