import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
        delay: stagger(0.02),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-black text-white opacity-0 text-wr"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-black text-white sm:text-2xl text-lg sm:px-0 px-8 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
