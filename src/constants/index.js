import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a BTech student at the National Institute of Technology, Silchar, graduating in 2025. With a strong foundation in engineering principles from NIT Silchar, I have cultivated a deep passion for coding, web development, machine learning, and problem-solving. My expertise spans across full stack development, including proficiency in HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB and SQL. I thrive on creating innovative solutions and am dedicated to leveraging my skills to build efficient and impactful technologies.`;

export const ABOUT_TEXT = `Beyond my coursework, I have actively engaged in various projects and internships that have allowed me to apply my knowledge to real-world scenarios. My current research internship focuses on integrating machine learning algorithms with web applications, further enhancing my technical expertise. I thrive on creating innovative solutions that blend advanced machine learning with seamless web interfaces, and I am dedicated to leveraging my skills to build efficient, impactful technologies.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "National Institute of Technology, Silchar",
    company: "BTech",
    description: `
    I am currently pursuing a BTech from the National Institute of Technology, Silchar, with an expected graduation in 2025.Alongside my academic pursuits, I have developed a passion for coding and development, actively enhancing my skills through various programming languages, projects, and hackathons. I am excited to merge my technical knowledge with my enthusiasm for software development to drive innovative solutions in the future.`,
    technologies: ["Programming", "Problem Solving", "Development"],
  },
  {
    year: "2024 - Present",
    role: "Summer Research Intern",
    company: "NIT Silchar",
    description: `I am currently working as a research intern in the fields of Machine Learning and Web Development. In this role, I am focusing on applying advanced machine learning algorithms to real-world problems, while also developing and optimizing web applications to support these projects. My responsibilities include data analysis, model training and evaluation, and creating user-friendly web interfaces for seamless interaction with the developed models. `,
    technologies: [ "FullStack Development","Machine Learning", "Data Science"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "TaskIt",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind","FramerMotion"],
  },
  {
    title: "BlogME",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "National Institute of Techhnology,Silchar",
  phoneNo: "+91-600-040-5413 ",
  email: "kaushikborah4080@gmail.com",
};
