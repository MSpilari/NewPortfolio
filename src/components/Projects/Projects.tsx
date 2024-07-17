"use client";
import { projects } from "../../data";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <ProjectsList projects={projects} />
    </div>
  );
};

export { Projects };
