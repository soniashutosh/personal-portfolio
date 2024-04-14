import { cn } from "../../utils/cn";
import ProjectButton from "./project-button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  githubUrl,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string | React.ReactNode;
  githubUrl?: string;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 dark:shadow-input shadow-none p-4 bg-black border-white/[0.2] dark:bg-white border dark:border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {typeof header === "string" ? (
        <img src={header} className="rounded-2xl" />
      ) : (
        header
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold dark:text-neutral-600 text-neutral-200 mb-1 mt-1">
          {title}
        </div>
        <div className="font-sans font-normal dark:text-neutral-600 text-sm text-neutral-300">
          {description}
        </div>
        <div className="flex flex-row gap-2 pt-1">
          {githubUrl && <ProjectButton text="Go To Github" url={githubUrl} />}
          {link && <ProjectButton text="Visit Website" url={link} />}
        </div>
      </div>
    </div>
  );
};
