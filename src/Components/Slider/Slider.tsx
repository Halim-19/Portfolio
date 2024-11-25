import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "../Welcom/Welcom";
import AboutMe from "../AboutMe/AboutMe";
import Project from "../project/Project";
import Contact from "../contactMe/Contact";

function Slider() {
  const components = [
    <Welcome onButtonClick={() => setIndex(index + 1)} />,
    <AboutMe />,
    <Project />,
    <Contact />,
    // <AnotherComponent />,
  ];

  const [index, setIndex] = useState(0); // Track the current component index

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" && index < components.length - 1) {
      setIndex(index + 1);
    } else if (event.key === "ArrowLeft" && index > 0) {
      setIndex(index - 1);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY > 0 && index < components.length - 1) {
      setIndex(index + 1);
    } else if (event.deltaY < 0 && index > 0) {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [index]);

  return (
    <div className="font-inter w-4/5 md:w-3/4 h-3/4 rounded-xl flex justify-center items-center overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index} // The index as the unique key
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.8, 0.5, 1],
          }}
          className="absolute w-4/5 md:w-3/4 h-3/4 flex justify-center items-center"
        >
          {components[index]}
        </motion.div>
      </AnimatePresence>

      {/* Scroll Tracker */}
      <div className="absolute top-10 flex gap-2">
        {components.map((_, componentIndex) => (
          <div
            key={componentIndex}
            className={`w-4 h-4 rounded-full ${
              componentIndex <= index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
