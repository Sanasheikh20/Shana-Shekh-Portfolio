import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  resumecraft,
  medinventory,
  wanderluststay
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "JAVA",
    icon: backend,
  },
  {
    title: "Project Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Salahkaar Consultant",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6CKayZgfpisg1hgVNNGSi_2tNv9d6snaQwgm_yasGlgAmRUHFgiQ3rHuLjs30JYYhsuI&usqp=CAU",
    iconBg: "#383E56",
    date: "July 2024 - December 2024",
    points: [
      "Developed and maintained responsive web applications using full-stack technologies, including React, Django, and PostgreSQL, resulting in a 20% reduction in page load time and improved user satisfaction.",
      "Led a technical team of 5 developers through project phases, resolving 95% of reported challenges on time while mentoring team members and fostering a collaborative environment.",
      "Ensured high code quality by implementing rigorous code reviews, automated testing pipelines, and debugging processes, leading to a 30% reduction in production bugs and faster deployment cycles.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Dr Vishwanath Karad World Peace University",
    date: "August 2021 - June 2025",
    points: [
      "Completed coursework in Data Structures, Algorithms, and Web Development.",
      "Participated in coding competitions and hackathons.",
      // "Graduated with honors.",
    ],
  },
  {
    degree: "12th Grade",
    institution: "Araria Public School",
    date: "April 2020 - May 2021",
    points: [
      "Graduated with a focus on Science and Mathematics.",
      // "Member of the coding club and participated in various tech-related events.",
    ],
  },
  {
    degree: "10th Grade",
    institution: "Araria Public School",
    date: "March 2018 - April 2019",
    points: [
      "Graduated with a focus on Science and Mathematics.",
      // "Member of the coding club and participated in various tech-related events.",
    ],
  },
];

const projects = [
  {
    name: "WanderLust Stays",
    description:
      "Developed Wanderlust Stays, an online marketplace connecting travelers with diverse accommodations, featuring seamless browsing, reviewing, booking, and a robust host management system.Employed the MVC framework for efficient structuring, implemented verification processes for trust and safety, and deployed the project on Render for scalability and reliability.",
    tags: [
      {
        name: "EJS template",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js & Express.js",
        color: "blue-text-gradient",
      },
    ],
    image: wanderluststay,
    source_code_link: "https://wanderlust-stays.onrender.com/listings",
  },
  {
    name: "Resume Craft",
    description:
      "This project features user authentication for secure login, allowing users to input their resume information through various fields.It then builds the resume in one of multiple customizable templates using ReactJS and stores data persistently with MongoDB.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: resumecraft,
    source_code_link: "https://github.com/Sanasheikh20/Resume-Craft",
  },
  {
    name: "MedInventory Elite",
    description:
      "The Medical Supply Management System is a web-based application that streamlines the ordering and management of medicines and products for pharmacy suppliers.It provides tools for efficient inventory and transaction management.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "MYSQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: medinventory,
    source_code_link: "https://github.com/Sanasheikh20/MEDINVENTORY-ELITE",
  },
];

export { services, technologies, experiences, projects, education };
