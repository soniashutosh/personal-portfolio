import { motion } from "framer-motion";
import { projectProps, projects } from "../constants";
import AnimatedHeading from "./AnimatedHeading";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Projects = () => {
  return (
    <div className="sm:max-w-7xl max-w-[21rem] mx-auto pt-10 relative">
      <AnimatedHeading heading="Projects" />
      <BentoGrid className="max-w-7xl  mx-auto md:auto-rows-[20rem] text-white">
        {projects.map((project: projectProps) => (
          <BentoGridItem
            key={project.id}
            title={project.title}
            description={project.description}
            header={project.image ? project.image : <SkeletonOne />}
            githubUrl={project.githubLink}
            link={project.url}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] dark:bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border dark:border-neutral-100 border-white/[0.2] p-2  items-center space-x-2 dark:bg-white bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-300 to-violet-500 flex-shrink-0" />
        <div className="w-full dark:bg-gray-100 h-4 rounded-full bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border dark:border-neutral-100 border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto dark:bg-white bg-black"
      >
        <div className="w-full dark:bg-gray-100 h-4 rounded-full bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-300 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border dark:border-neutral-100 border-white/[0.2] p-2 items-center space-x-2 dark:bg-white bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-300 to-violet-500 flex-shrink-0" />
        <div className="w-full dark:bg-gray-100 h-4 rounded-full bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
