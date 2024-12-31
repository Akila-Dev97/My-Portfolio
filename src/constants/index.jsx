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
      "A comprehensive school management application built with Next.js and Tailwind CSS. It features separate dashboards for admins, teachers, students, and parents, offering responsive tables, animated charts, and seamless navigation.",
    techStack: ["Next.js", "React", "Node.js", "Express", "Docker"],
    imgSrc: project1,
    link: "https://github.com/Akila-Dev97/Full-Stack-School-Management",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "A dynamic real-time chat application built with the MERN stack, Socket.io, and styled with TailwindCSS and DaisyUI. Features include JWT-based authentication, real-time messaging, online user status, and global state management with Zustand.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project2,
    link: "https://github.com/Akila-Dev97/Chat-App-MERN",
  },
  {
    id: 3,
    title: "React Admin Dashboard",
    description:
      "A feature-rich React-based admin dashboard built with Next.js and Tailwind CSS. It includes multiple pages for managing products, users, sales, orders, and analytics.",
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "Express"],
    imgSrc: project3,
    link: "https://github.com/Akila-Dev97/React-Admin-Dashboard",
  },
  {
    id: 4,
    title: "Bulky Web- First Web Store",
    description:
      "A e-commerce bookstore built with .NET Core, featuring an MVC architecture, Razor Pages, and Entity Framework Core. It includes a repository pattern for data management, along with features like ViewBag, ViewData, TempData, and integration of Toastr and SweetAlerts for user notifications.",
    techStack: [".NET Framework", "C#", "SQL Server", "ADO.NET"],
    imgSrc: project4,
    link: "https://github.com/Akila-Dev97/FirstWebStore",
  },
  {
    id: 5,
    title: "Billing And Inventory Management System",
    description:
      "A complete billing and inventory management system developed using Visual Studio 2022, Windows Forms, and MS SQL Server 2019. The system includes modules for users, categories, products, dealers/customers, and transactions.",
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
    name: "Next.js",
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
    description: (
      <>
        Completed a Higher National Diploma in Electrical and Electronic
        Engineering at the Advanced Technological Institute in Labuduwa, with a
        focus on circuit design, power systems, and telecommunications.
        <ul>
          <li>
            <strong>---------</strong>{" "}
          </li>
          <li>
            <strong> Academic projects </strong>{" "}
          </li>
          <li>
            <strong>---------</strong>{" "}
          </li>
          <li>
            <strong>
              {" "}
              # Robotics - Wireless Hand Motion-Controlled Robot:
            </strong>{" "}
            Developed and implemented a wireless hand motion-controlled robot
            using motion sensors and Arduino microcontrollers.
          </li>
          <li>
            <strong>
              # Design and Implementation of an Electronic Balance:
            </strong>{" "}
            Designed and implemented an electronic balance for precise weight
            measurement.
          </li>
          <li>
            <strong>
              # IoT-Based Distribution Transformer Monitoring System
            </strong>
          </li>
        </ul>
        <p>
          <strong>Technologies Used:</strong> Arduino, C/C++, Python, Arduino
          IDE, Bluetooth, Wi-Fi, Git, GitHub, Visual Studio Code
        </p>
      </>
    ),
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
