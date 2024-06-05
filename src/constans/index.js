import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  wowmagazine,
  postgres,
  html,
  angular,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  python,
  zalt,
  irix,
  hogarth,
  pdfchat,
beer,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node  Developer",
    icon: backend,
  },
  {
    title: "AngularJs Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AngularJs",
    icon: angular,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Zalt",
    icon: zalt, // Cambia esto por el ícono correspondiente
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Mar 2024",
    points: [
      "Route optimization through the implementation of workers, resulting in a performance improvement of 1 second for the user, equivalent to a 30% increase in efficiency.",
      "I performed cleaning and optimization tasks on the database to improve query performance and efficiency.",
      "Successfully negotiated requirements with key stakeholders to ensure the project aligned with their budget and schedule.",
      "Successfully obtained and implemented requirements for a new inventory management system, which increased process efficiency.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Irix",
    icon: irix, // Cambia esto por el ícono correspondiente
    iconBg: "#383E56",
    date: "Ene 2023 - Oct 2023",
    points: [
      "  I led the migration of the software from Irix to Zalt during the acquisition,ensuring a successful transition and minimizing service disruption for users.",
      "        Development of integrations, new features, and bug fixes.Managed the company's IT infrastructure, ensuring availability and security of systems.",
      "Created development environments to facilitate team work and ensure the quality of produced code.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company_name: "Hogarth Argentina",
    icon: hogarth, // Cambia esto por el ícono correspondiente
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      " Development of web applications in Next.js and Node.js",
      "Creation of a CMS that managed the content of a news application.",
      "Due to my performance on this project, I was offered a full-time job at Hogarth Argentina",
    ],
  },
];
const projects = [
  {
    name: "AI chat with your pdf",
    description:
      "Web-based platform facilitating PDF uploads for interactive discussions and inquiries. Users can upload PDF documents and engage in discussions or pose questions directly within the document interface.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: pdfchat,
    source_code_link: "https://github.com/alejaramos/ai-chat-with-your-pdf",
  },
  {
    name: "WOW Magazine",
    description:
      "Web application wow magazine. The ABM (Additions, Deletions, and Modifications) project is the system through which the administrator user updates the database. The functions that can be performed within it include: Creating new articles Editing articles Adjusting the order in which elements of the article appear Modifying the layout of news displayed on the WOW magazine homepage",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: wowmagazine,
    source_code_link: "https://github.com/alejaramos/magazine-wow",
  },
  {
    name: "Beer Ecommerce",
    description:
      "The beer e-commerce project is a platform designed for purchasing beer online. It offers the following functionalities:  Browsing and purchasing a variety of beer products  Adding products to the shopping cart Managing the shopping cart contents Providing product reviews and ratings",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: beer,
    source_code_link: "https://github.com/alejaramos/Ecommerce",
  },
];

export { services, technologies, experiences,  projects };
