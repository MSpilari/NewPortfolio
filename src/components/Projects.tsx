import { projects } from "@/src/data/projects";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-yellow-500 text-3xl">Projects</h1>
      <div className="w-[90%] flex items-center justify-center flex-wrap gap-x-3 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            githubRepo={project.githubRepo}
            imageUrl={project.imageUrl}
            url={project.url}
            techs={project.techs}
            key={project.url + index}
          />
        ))}
      </div>
    </section>
  );
};

export { Projects };
