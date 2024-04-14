import { aboutContent } from "../constants";
import AnimatedHeading from "./AnimatedHeading";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const About = () => {
  return (
    <div className="text-center justify-center items-center sm:pb-10 pb-3 relative">
      <AnimatedHeading heading="About Me" />
      <TextGenerateEffect words={aboutContent} className="text-white" />
      {/* <Meteors number={50} /> */}
    </div>
  );
};

export default About;
