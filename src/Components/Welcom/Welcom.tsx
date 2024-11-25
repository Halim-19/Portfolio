import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import profilImg from "/profileImg.jpg";
import { TiltCard } from "../HoverCard/HoverCard";

type WelcomPrpos = {
  onButtonClick: () => void;
};

const Welcome: React.FC<WelcomPrpos> = ({ onButtonClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <TiltCard
      section={
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="w-full h-full rounded-xl   text-white p-10 flex flex-col justify-start items-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: isInView ? 0 : "-70vw",
              y: isInView ? 0 : "-40vh",
            }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="p-1 rounded-[50%] bg-gradient-to-br from-purple-600 to-blue-500"
            style={{
              position: isInView ? "static" : "fixed",
              top: isInView ? "auto" : "20px",
              left: isInView ? "auto" : "20px",
              width: isInView ? "160px" : "50px",
              height: isInView ? "160px" : "50px",
            }}
          >
            <img
              src={profilImg}
              alt="Profile"
              className="w-full h-full rounded-[50%]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.1, delay: 0.8 }}
            className="text-xl font-bold"
          >
            <span className="opacity-70">Hello I am </span>
            <span className="opacity-100">HALIM</span>
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.1, delay: 0.6 }}
            className="text-4xl font-cursive text-center font-bold uppercase"
          >
            I build websites
          </motion.h4>

          {/* "SLIDE" indicator instead of button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.1, delay: 0.8 }}
            className="relative m-2 inline-flex items-center justify-center text-gray-400 font-medium"
            style={{ cursor: "pointer" }}
            onClick={onButtonClick}
          >
            <span className="animate-bounce">SLIDE →</span>
          </motion.div>
        </motion.div>
      }
    />
  );
};

export default Welcome;
