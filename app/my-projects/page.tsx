"use client";
import React from "react";
import { Projects } from "../components/constants";
import ProjectCard from "../components/Projectcard";

const page = () => {
  return (
    <div
      style={{backgroundImage: "url(/mountains.jpg)"}}
      // style={{ backgroundImage: "url(atombg-comp.webp" }}
      //style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
