import { SlFrame } from "react-icons/sl";
import { skillProps, skills } from "../constants";
import AnimatedHeading from "./AnimatedHeading";

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-center justify-center items-center sm:pb-10 pb-3 relative"
    >
      <AnimatedHeading heading="Technologies and Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 text-white pt-8">
        {skills.map((skill: skillProps) => (
          <div
            key={skill.title}
            className="flex justify-center items-center mb-10"
          >
            <div className="border border-x-gray-800 p-6 rounded-md w-36 text-center items-center justify-center">
              <p className="text-primary-500 text-xl font-semibold pb-3">
                {skill.description}
              </p>
              <div className="mx-auto">
                {skill.icon !== undefined ? (
                  <skill.icon className="w-8 h-8 text-blue-400 mx-auto " />
                ) : (
                  <SlFrame className="w-8 h-8 text-blue-400 mx-auto" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
