import React from "react";
import SideNav from "../navigation/SidBar";
import { SiFacebook, SiGithub, SiInstagram, SiX } from "react-icons/si";
import AboutMe from "../AboutMe/AboutMe";
import Slider from "../Slider/Slider";
import Welcome from "../Welcom/Welcom";
import { TiltCard } from "../HoverCard/HoverCard";

function Home() {
  return (
    <>
      <SideNav />
      <Slider />
    </>
  );
}

export default Home;
