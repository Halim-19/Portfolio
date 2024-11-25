import beeImg from "/AboutPics/bee.jpg";
import soutnance from "/AboutPics/soutnance.jpg";
import child from "/AboutPics/child.jpeg";
import dev from "/AboutPics/dev.jpg";
import { TiltCard } from "../HoverCard/HoverCard";
import { Chip } from "./ChipTab";
import { Link } from "react-router-dom";
import { useState } from "react";

function myAge() {
  let d = new Date();
  let year = d.getFullYear();
  return year - 2003;
}

// Define the type for each tab's content
type TabContent = {
  desc: string;
  image: string;
};

// Define the type for the tabs object
const tabs: Record<string, TabContent> = {
  Education: {
    desc: "Computer Science student & AI student \n I learned the fondamentle of many   ",
    image: soutnance,
  },
  Skills: {
    desc: "HTML5, CSS3, JavaScript \nReactJs, NodeJs \nBootstrap, Tailwind \nFramer Motion",
    image: dev, // Replace with the correct path
  },
  Experience: {
    desc: "Founder of a sports clothing brand  \nEarned a startup diploma with an excellent grade\nExperience in marketing",
    image: beeImg, // Replace with the correct path
  },
  Intrest: {
    desc: "I enjoy working on large projects and innovative solutions.",
    image: child, // Replace with the correct path
  },
};

function AboutMe() {
  const [selected, setSelected] = useState<keyof typeof tabs>("Education");

  return (
    <TiltCard
      section={
        <div className="w-full h-full md:h-full md:w-full rounded-xl text-white p-5 pb-10 md:p-10">
          <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
            <div className="w-full h-full flex flex-col justify-start items-start">
              <h1 className="text-xl md:text-2xl font-bold uppercase mb-5">
                About Me :
              </h1>
              <p className="text-start font-inter">
                Hi, I am{" "}
                <Link to="/" className="font-semibold">
                  Bensalem Abdelhalim
                </Link>{" "}
                and I am {myAge()} years old.
              </p>
              <div className="mt-2">
                {Object.keys(tabs).map((tab) => (
                  <Chip
                    key={tab}
                    text={tab}
                    selected={selected === tab}
                    setSelected={() => setSelected(tab as keyof typeof tabs)}
                  />
                ))}
              </div>
              <p className="p-1 text-left mt-3 whitespace-pre-line">
                {tabs[selected].desc}
              </p>
            </div>
            <div className="w-full h-full flex justify-center items-center flex-row flex-wrap">
              <img
                src={tabs[selected].image}
                alt={selected}
                className="w-64 md:w-[300px] rounded hover:border-gray-700 shadow-xl shadow-black"
              />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default AboutMe;
