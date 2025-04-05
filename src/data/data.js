import {
  faGithub,
  faYoutube,
  faTwitter,
  faFacebook,
  faLinkedin,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { links, skillImage } from "../utils/constant";

export const projectsdata = [
      {
        "id": 1,
        "title": "N-Connect - Real-time Chat Application",
        "subtitle": "MERN Stack Web Application",
        "description": "Developed a real-time chat application using the MERN stack with WebSockets for instant messaging. The application supports one-on-one and group chats, user authentication, notifications, and a responsive UI.",
        "image": "./images/N-Connect.png",
        "techStack": ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Chakra UI"],
        "githubLink": "https://github.com/nileshnwani/N-connect/",
        "websiteLink": null,
        "downloadLink": null
    },
  {
    id: 2,
    title: "Voxify- Recognizer and Translator Application",
    subtitle: "Flask-based Web Application",
    description: "Developed a web application that converts speech to text using Flask and Python. The application supports multi-language transcription and ensures real-time performance.",
    image: "./images/VideotoText.png",
    techStack: ["Flask", "Python", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/nileshnwani/Voxify",
    websiteLink: "https://voxify-one.vercel.app/",
    downloadLink: null
  },
  {
    id: 3,
    title: "eCommerce Platform",
    subtitle: "Full-Stack MERN Application",
    description: "Built a complete eCommerce platform with features such as user authentication, product management, and payment integration.",
    image: "./images/ecommerce.png",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubLink: "https://github.com/nileshnwani/Nilesh_Marketplace",
    websiteLink: null,
    downloadLink: "https://github.com/nileshnwani/Nilesh_Marketplace",
  },
  {
    id: 4,
    title: "Task Manager Application",
    subtitle: "MERN Stack Application",
    description: "Developed a task manager application to help users organize and track their daily tasks efficiently.",
    image: "./images/Taskmanager.png",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubLink: null,
    websiteLink: "https://task-manager-ui-lac.vercel.app/",
    downloadLink: null
  },
  {
    id: 5,
    title: "Gym Management System",
    subtitle: "Web-Based Application",
    description: "Created a comprehensive system to manage gym operations, including user sign-in and plan management.",
    image: "./images/gymsystem.png",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "PHP"],
    githubLink: null,
    websiteLink: "https://nileshnwani.github.io/GYM_MGT_SYSTEM/",
    downloadLink: null
  },
  {
    id: 6,
    title: "Dynamic Quiz Web App",
    subtitle: "Interactive Quiz Application",
    description: "Built an interactive quiz application with timers and scoring systems to enhance user engagement.",
    image: "./images/quiz.png",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    githubLink: null,
    websiteLink: "https://nileshnwani.github.io/Dynamic_Quiz_Wabapp/",
    downloadLink: null
  },
  {
    id: 7,
    title: "Machine Learning Projects",
    subtitle: "Comprehensive ML Algorithm Implementations",
    description: "Implemented various machine learning algorithms, providing code examples and explanations for each.",
    image: "./images/ml.png",
    techStack: ["Python", "Machine Learning"],
    githubLink: "https://github.com/nileshnwani/Machine-Learning",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 8,
    title: "Data Science Projects",
    subtitle: "Multiple Data Science Projects",
    description: "Worked on multiple data science projects, including Titanic Survival Prediction and Movie Rating Prediction.",
    image: "./images/Data-Sciecne-Projects.webp",
    techStack: ["Python", "Data Science"],
    githubLink: "https://github.com/nileshnwani/DS_Projects",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 9,
    title: "The Audio Store",
    subtitle: "Product Showcase Website",
    description: "Developed a website to showcase various audio products, providing detailed information for each.",
    image: "./images/audio2.png",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    githubLink: null,
    websiteLink: "https://nileshnwani.github.io/The-Audio-Store/",
    downloadLink: null
  },
  {
  id: 10,
  title: "Predicting Length of Stay",
  subtitle: "Machine Learning Model for Healthcare",
  description: "Developed a predictive model to estimate hospital length of stay using patient data and machine learning techniques.",
  image: "./images/length_of_stay.png",
  techStack: ["Python", "Flask", "scikit-learn", "Pandas", "NumPy"],
  githubLink: "https://github.com/nileshnwani/Predicating-Length-of-stay",
  websiteLink: null,
  downloadLink: null
},
{
    id: 11,
    title: "Contact Form Application",
    subtitle: "Dynamic Contact Form",
    description: "Created a contact form application that dynamically fetches country and date information.",
    image:  "./images/contact.png",
    techStack: ["React", "Bootstrap", "CSS"],
    githubLink: null,
    websiteLink: "https://contact-form-app-vert.vercel.app/",
    downloadLink: null
  },
  {
    id: 12,
    title: "Blogging Platform",
    subtitle: "Content Sharing Platform",
    description: "Developed a blogging platform to allow users to read and share various blog posts.",
    image:"./images/blog.png",
    techStack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    githubLink: null,
    websiteLink: "https://nileshnwani.github.io/Blogging/",
    downloadLink: null
  },
  {
    id: 13,
    title: "Recruitment Landing Page",
    subtitle: "Company Recruitment Page",
    description: "Designed a landing page for recruitment purposes, providing information about the company and job openings.",
    image: "./images/Recruitment_landing_page.png",
    techStack: ["HTML", "JavaScript", "jQuery", "Bootstrap"],
    githubLink: null,
    websiteLink: "https://nileshnwani.github.io/Recruitment_landing_page/",
    downloadLink: null
  }
];


export const programskills = [
  {
    id: 1,
    image: skillImage.python
  },
  {
    id: 2,
    image: skillImage.cpp
  },
  {
    id: 3,
    image: skillImage.c
  },
  {
    id: 4,
    image: skillImage.js
  }

];

export const databaseskills = [
  {
    id: 1,
    image: skillImage.mysql
  },
  {
    id: 2,
    image: skillImage.mongodb
  },
  {
    id: 3,
    image: skillImage.oracle
  }
];

export const webskills = [
  {
    id: 1,
    image: skillImage.html
  },
  {
    id: 2,
    image: skillImage.css
  },
  {
    id: 3,
    image: skillImage.javascript
  },
  {
    id: 4,
    image: skillImage.react
  },
  {
    id: 5,
    image: skillImage.php
  }
];

export const ide = [
  {
    id: 1,
    image: skillImage.vscode
  },
  {
    id: 2,
    image: skillImage.sublime
  }
];

export const framework = [
  {
    id: 1,
    image: skillImage.node
  },
  {
    id: 2,
    image: skillImage.bootstrap
  },
  {
    id: 3,
    image: skillImage.flask
  },
  {
    id: 4,
    image: skillImage.express
  }
];

export const other = [
  {
    id: 1,
    image: skillImage.git
  },
  {
    id: 2,
    image: skillImage.postman
  },
  {
    id:3,
    image: skillImage.rest
  },
  {
    id:4,
    image: skillImage.ml
  },
  {
    id:5,
    image: skillImage.dl
  },
  {
    id:6,
    image: skillImage.ai
  }
];

export const aboutdetails = {
  name: "Nilesh Wani",
  image: "./images/nilesh.jpg",
  resumeLink: links.resumeLink,
  tagline: "Learner | Programmer | Web Developer",
  description: "I have recently completed my B.Tech in Computer Science & Engineering with a specialization in Artificial Intelligence and Machine Learning from Dr. Babasaheb Ambedkar Technological University, Aurangabad. During my web development internship at &We Media, I gained hands-on experience with HTML, CSS, JavaScript, PHP, jQuery, Ajax, React.js, Bootstrap, and MySQL. I have developed responsive web applications, ensured optimized database performance, and built full-stack projects like an eCommerce platform and a speech-to-text translation application."
};

export const experiencedata = [
  {
    id: 1,
    title: "Web Development Intern",
    subtitle: "&We Media",
    description: "Developed and deployed responsive web applications, optimized MySQL queries for better performance, and ensured dynamic content updates using technologies like PHP, React.js, and Bootstrap.",
    image: "./images/andwe.png",
    githubLink: "https://github.com/nileshnwani"
  }
];

export const socialIcon = [
  {
    id: 1,
    href: links.linkedinLink,
    className: "linkedin social",
    icon: faLinkedin,
    iconClass: "fa-bounce",
    label: "linkedin",
  },
  {
    id: 2,
    href: links.githubLink,
    className: "github social",
    icon: faGithub,
    iconClass: "fa-flip",
    label: "github",
  },
  {
    id: 3,
    href: links.instagramLink,
    className: "instagram social",
    icon: faInstagram,
    iconClass: "fa-spin",
    label: "instagram",
  }
];

export const headerdata = {
  image: "./images/avatar.png",
  name: "Nilesh Wani",
  typedarr: [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React.js Enthusiast",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Freelancer"
]
};

export const educationdata = [
  {
    id: 1,
    college: "Dr. Babasaheb Ambedkar Technological University",
    university: "Maharashtra",
    course: "B.Tech CSE (Artificial Intelligence & Machine Learning)",
    specification: "Computer Science and Engineering (AIML)",
    year: "2024"
  },
  {
    id: 2,
    college: "MGM'S POLYTECHNIC, Aurangabad",
    university: "MSBTE",
    course: "Diploma",
    specification: "Computer Science Engineering",
    year: "2021"
  },
  {
    id: 3,
    college: "NEW HIGH SCHOOL CHIKALTHANA, Aurangabad",
    university: "Maharastra State Board",
    course: "10th",
    year: ""
  }
];
