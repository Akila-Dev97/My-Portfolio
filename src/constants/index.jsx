import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
//import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Akila Wijerathna",
  role: "Full Stack Developer",
  subheading: "A Passionate Software Developer and IT Student from Sri Lanka",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Full Stack School Management App",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["Next.js", "React", "Node.js", "Express", "Docker"],
    imgSrc: project1,
    link: "https://github.com/Akila-Dev97/Full-Stack-School-Management",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project2,
    link: "https://github.com/Akila-Dev97/Chat-App-MERN",
  },
  {
    id: 3,
    title: "React Admin Dashboard",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Express"],
    imgSrc: project3,
    link: "https://github.com/Akila-Dev97/React-Admin-Dashboard",
  },
  {
    id: 4,
    title: "Bulky Web- First Web Store",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: [".NET Framework", "C#", "SQL Server", "ADO.NET"],
    imgSrc: project4,
    link: "https://github.com/Akila-Dev97/FirstWebStore",
  },
  {
    id: 5,
    title: "Billing And Inventory Management System",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: [".NET Framework", "C#", "SQL Server", "Window Forms"],
    imgSrc: project5,
    link: "https://github.com/Akila-Dev97/BillingAndInventoryManagement",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
  {
    name: ".NET Framework",
    icon: <RiGitBranchLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2023 - 2024",
    role: "Trainee Telcommunication Engineer",
    company: "Browns Engineering and Construction (Pvt) Ltd",
    description:
      "Hands-on experience in fiber fault fixing, fiber splicing, and cabinet quality control to ensure seamless connectivity. Responsibilities included evaluating telephone line quality, focusing on fiber layering, pole-to-pole quality, and coil arrangements. Conducted OTDR testing at fiber exchanges to measure fiber performance and maintained accurate inventory records to support efficient warehouse operations. Utilized Huawei's Integrated Services Digital Platform for data management and analysis and performed as-built surveys to document final dimensions, materials, and locations of construction projects.",
    techStack: [
      /*"Javascript", "React.js", "Next.js", "MongoDB"*/
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Technology (Reading)",
    institution: "University of Colombo School of Computing",
    duration: "2021 - Present",
    description:
      "Pursuing a Bachelor's degree in Information Technology, with a focus on software engineering, algorithms, and web development. Currently completing final year project - Help Desk Management System",
  },
  {
    id: 2,
    degree: "Higher National Diploma in Electrical and Electronic Engineering",
    institution: "Advance Technological Institute in Labuduwa",
    duration: "2019 - 2023",
    description:
      "Completed a Higher National Diploma in Electrical and Electronic Engineering at the Advanced Technological Institute in Labuduwa, with a focus on circuit design, power systems, and telecommunications.",
  },
  /* {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.", 
  }, */
];

export const TESTIMONIAL = {
  name: "Heshan Wijerathna",
  title: "Senior Full-Stack Software Engineer, VitalHub Innovations Lab",
  quote:
    "Working with Akila has been great. His skills in full-stack development have really helped move my projects forward. He’s focused, detail-oriented, and always ready to find solutions when challenges come up.",
  image: personImage,
};
