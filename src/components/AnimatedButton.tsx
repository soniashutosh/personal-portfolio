import { Button } from "./ui/moving-borders";

const AnimatedButton = ({ text, link }: { text: string; link?: string }) => {
  return (
    <div className="bg-black p-4">
      <Button
        borderRadius="1.75rem"
        className="bg-black text-lg dark:bg-white-900 text-white dark:text-black border-neutral-200 dark:border-slate-800"
        duration={4000}
      >
        <a href={link}>{text}</a>
      </Button>
    </div>
  );
};

export default AnimatedButton;
