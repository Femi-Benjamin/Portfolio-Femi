"use client";
import React from "react";
import { Projects } from "../components/constants";
import ProjectCard from "../components/Projectcard";
import Image from "next/image";

const page = () => {
  return (
    <div
      className="bg-gradient-to-tr from-[#121212] bg-purple-950 w-screen h-screen flex items-center justify-center bg-center bg-cover"
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
      <div className="absolute bottom-0 w-full h-auto">
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-10 left-0 z-10"
      />
      </div>
    </div>
  );
};

export default page;
