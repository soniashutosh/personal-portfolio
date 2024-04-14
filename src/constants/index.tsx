import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt, FaJava, FaNode } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { PiFileSqlBold } from "react-icons/pi";
import { RiBootstrapLine } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandCpp, TbBrandJavascript } from "react-icons/tb";

export const aboutContent = `Welcome to my professional space! I am a proud alumnus of NIT Jaipur, where I earned my degree in Computer Science and Engineering. Presently, I am employed as a Software Development Engineer at Barclays. In my role, I skillfully balance the development of React-based frontends with robust Java-based backends, drawing on two years of intensive experience in the field. 

My technical journey has been rich and varied, highlighted by a research internship during my college days. This opportunity allowed me to delve into deep learning, focusing specifically on creating models for the detection and classification of plant diseases—a project that not only challenged me but also expanded my understanding of AI's potential applications.

Further refining my skills, I completed an internship at Winglet Technologies, where I developed React applications and engaged extensively with RESTful APIs. My passion for technology extends to a diverse project portfolio, featuring applications in React and AI, utilizing databases such as SQL, Pinecone, and Neon. Additionally, I have gained practical exposure to AWS, enabling me to support and enhance infrastructure as needed.

Through a blend of industry experience and research, I continuously strive to innovate and drive advancements in technology, ensuring I remain at the cutting edge of the field.`;

export type navLinkItemProps = {
  id: string;
  title: string;
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const education = [
  {
    title: "National Institute of Technology, Jaipur",
    description: `B.Tech CSE (2018-2022)`,
    performanceData: "CGPA : 7.98",
    link: "https://www.mnit.ac.in/",
  },
  {
    title: "Jawahar Navodaya Vidyalaya, Umaria",
    description: "Passed my 12th from here (2016-2017)",
    performanceData: "Percentage: 89.4%",
    link: "https://navodaya.gov.in/nvs/nvs-school/UMARIA/en/home/",
  },
  {
    title: "Jawahar Navodaya Vidyalaya, Umaria",
    description: "Passed my 10th from here (2014-2015",
    performanceData: "CGPA: 10",
    link: "https://navodaya.gov.in/nvs/nvs-school/UMARIA/en/home/",
  },
];

export type skillProps = {
  title: string;
  description: string;
  icon?: IconType;
};

export const skills = [
  {
    title: "cpp",
    description: "C++",
    icon: TbBrandCpp,
  },
  {
    title: "java",
    description: "Java",
    icon: FaJava,
  },
  {
    title: "springBoot",
    description: "SpringBoot",
  },
  {
    title: "javaScript",
    description: "JavaScript",
    icon: TbBrandJavascript,
  },
  {
    title: "sql",
    description: "SQL",
    icon: PiFileSqlBold,
  },
  {
    title: "html",
    description: "HTML",
    icon: IoLogoHtml5,
  },
  {
    title: "python",
    description: "Python",
    icon: SiPython,
  },
  {
    title: "react",
    description: "React",
    icon: IoLogoReact,
  },
  {
    title: "bootstrap",
    description: "Bootstrap",
    icon: RiBootstrapLine,
  },
  {
    title: "git",
    description: "Git",
    icon: FaGitAlt,
  },
  {
    title: "github",
    description: "Github",
    icon: FaGithub,
  },
  {
    title: "Node",
    description: "Node",
    icon: FaNode,
  },
] as skillProps[];

export type projectProps = {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  url?: string;
  image?: string;
};

export const projects = [
  {
    id: "chat-pdf",
    title: "Chat PDF",
    description: "Chat with your own content of the PDF.",
    githubLink: "https://github.com/soniashutosh/chat-pdf",
    url: "https://chat-pdf-six-khaki.vercel.app/",
    image: "chat-pdf.png",
  },
  {
    id: "note-making-app",
    title: "Note Making App",
    description:
      "Keep notes in local storage and filter them based on title and tags.",
    githubLink: "https://github.com/soniashutosh/note-making-app",
    url: "https://note-making-app-silk.vercel.app/",
    image: "note-making-app.png",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "A simple portfolio website.",
    githubLink: "https://github.com/soniashutosh/soniashutosh.github.io",
    url: "https://soniashutosh.github.io/",
    image: "portfolio.png",
  },
  {
    id: "deeper-light-weight-cnn",
    title: "Deeper Light Weight CNN model",
    description:
      "Deeper Light Weight CNN model for different plant disease detection and classification algorithms",
    githubLink: "https://github.com/soniashutosh/Deeper-Light-Weight-CNN-Model",
  },
  {
    id: "parallel-world",
    title: "Parallel World",
    description:
      "Repo contains various parallel algorithms and their step-wise implementation in cpp using various paradigms.",
    githubLink: "https://github.com/soniashutosh/Parallel-World",
  },
  {
    id: "image-classification-model",
    title: "Image Classification Model",
    description:
      "Repo contains various deep-learning model implementation and basic UI exposed to developers.",
    githubLink: "https://github.com/soniashutosh/Image-Classification-Model",
  },
];
