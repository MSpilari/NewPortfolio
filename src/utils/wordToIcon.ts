import { AiFillApi } from "react-icons/ai";
import { DiJavascript } from "react-icons/di";
import {
  FaAngular,
  FaComputer,
  FaDatabase,
  FaDocker,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";

const wordToIcon = (technologies: string[]) => {
  return technologies.map((word) => {
    switch (word.toLowerCase()) {
      case "node":
        return FaNodeJs;
      case "java":
        return FaJava;
      case "python":
        return FaPython;
      case "typescript":
        return SiTypescript;
      case "javascript":
        return DiJavascript;
      case "database":
        return FaDatabase;
      case "docker":
        return FaDocker;
      case "webdev":
        return FaComputer;
      case "postgres":
        return SiPostgresql;
      case "mongodb":
        return SiMongodb;
      case "api":
        return AiFillApi;
      case "react":
        return FaReact;
      case "angular":
        return FaAngular;
      default:
        return GrPersonalComputer;
    }
  });
};

export { wordToIcon };
