import { ViteLogo, imageError, project1, project2 } from "./index";

export const profile = {
  name: "Jonathan Kim",
  title: "Full Stack Web Developer",
  email: "JonathanKim980@gmail.com",
  phone: "7374842504",
  degree: "B.S. Computer Science",
  school: "University of Texas at Dallas",
  github: "https://github.com/jkim1998",
  linkedin: "https://www.linkedin.com/in/jkim980/",
  resume:
    "https://drive.google.com/file/d/1lcsy64CxMxMLtbo4AtM7VAqnaVwsJCIc/view?usp=sharing",
};

export const frontend = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Vite.js",
    icon: { ViteLogo },
  },
];

export const backend = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  },
  {
    name: "python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  },
];

export const others = [
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "vscode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
];

export const projects = [
  {
    name: "project 1",
    title: "Movie++",
    imgUrl: project1,
    description: "Movie Library ",
    codeLink: "https://github.com/jkim1998/Movie-DB-",
    projectLink: "https://movie-db-sand.vercel.app/",
    tags: ["Front End"],
    tech: (3)[("React", "CSS", "TMDB API")],
  },
  {
    name: "project 2",
    title: "E-Commerce",
    imgUrl: project2,
    description: "An Online Shopping website ",
    codeLink: "https://github.com/jkim1998/Gaming-Gear-Shop",
    projectLink: "https://gaming-gear-shop.vercel.app/",
    tags: ["Front End"],
    tech: (3)[("React", "CSS", "Stripe")],
  },
  {
    name: "project 3",
    title: "Finance Management App",
    imgUrl: imageError,
    description:
      "Automatic finance management app. Connected to your bank account securely.",
    codeLink: "https://github.com/jkim1998/Finance-management-app",
    projectLink: "https://www.google.com/",
    tags: ["Front End", "Back End", "Full Stack", "Database", "API", "UI/UX"],
    tech: (3)[("React", "MUI", "Plaid")],
  },
  {
    name: "project 4",
    title: "AI Chatroom",
    imgUrl: imageError,
    description: "A chatroom. But with Emotional AIs",
    codeLink: "https://github.com/jkim1998/dashboard-frontend",
    projectLink: "https://www.google.com/",
    tags: ["Front End", "Back End", "Full Stack", "Database", "API", "UI/UX"],
    tech: (3)[("React", "MUI", "Open AI API")],
  },
  // {
  //   name: "project 5",
  //   title: "Bug Tracker",
  //   imgUrl: imageError,
  //   description: "A web version Ticket management system",
  //   codeLink: "https://github.com/jkim1998/bug-tracker",
  //   projectLink: "https://www.google.com/",
  //   tags: ["Front End", "Back End", "Full Stack", "Database", "API", "UI/UX"],
  //   tech: (3)[("React", "MUI")],
  // },
];
