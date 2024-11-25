import React from "react";
import projectImage1 from "/AboutPics/bee.jpg";
import projectImage2 from "/profilePic.png";
import { TiltCard } from "../HoverCard/HoverCard";

// Define the type for a single project
interface Project {
  type: string;
  tech: string;
  image: string;
  link: string;
}

const MyProject: React.FC = () => {
  // Define the projects data
  const projects: Project[] = [
    {
      type: "University Website",
      tech: "HTML5, CSS3, JS",
      image: projectImage1,
      link: "https://halim-19.github.io/University/HOME",
    },
    {
      type: "Portfolio",
      tech: "HTML, CSS, JavaScript",
      image: projectImage2,
      link: "https://halim-19.github.io/University/HOME",
    },
    // Add more projects as needed
  ];

  return (
    <TiltCard
      section={
        <div className="w-full h-full   bg-[#1c2541] text-white p-5 md:p-10 rounded-xl">
          <h2 className="text-2xl font-bold font-inter uppercase mb-5 text-center">
            My Projects
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-44  border  rounded-lg shadow bg-[#1c2541] border-gray-700 overflow-hidden"
              >
                <a href={project.link} target="_blank">
                  <img
                    className="h-28 w-full object-cover"
                    src={project.image}
                    alt={project.type}
                  />
                </a>
                <div className="p-4">
                  <a href="#">
                    <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.type}
                    </h5>
                  </a>
                  <p className="text-sm font-normal text-gray-400 mb-3">
                    {project.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default MyProject;
