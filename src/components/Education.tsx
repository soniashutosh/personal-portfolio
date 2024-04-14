import { education } from "../constants";
import AnimatedHeading from "./AnimatedHeading";
import { HoverEffect } from "./ui/card-hover";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto pt-5 relative">
      <AnimatedHeading heading="Education" />
      <HoverEffect items={education} className="pt-3" />
      {/* <Meteors number={50} /> */}
    </div>
  );
};

export default Education;
