// App.tsx
import React from "react";
import "./App.css";
import blob from "/blob.gif";
import { motion } from "framer-motion";
import Home from "./Components/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <Home />

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        src={blob}
        alt=""
        srcSet=""
        className="absolute top-2 right-2 w-40 md:w-52 -z-10"
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        src={blob}
        alt=""
        srcSet=""
        className="absolute bottom-1/4 left-0 md:left-2 w-40 md:w-60 -z-10"
      />
    </>
  );
};

export default App;
