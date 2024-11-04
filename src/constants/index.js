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
  crud,
  text,
  boston,
  calculator,
  junction,
  portfoili,
  task,
  wather,
  sentiment,
  jobit,
  express,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
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
    title: "fronEnd Developer",
    icon: web,
  },
  {
    title: "3d-visuals",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "Tailwind",
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const mlProjects = [
  {
    name: "Boston-house-prediction",
    description:
      "An prediction site where user can predict the house price with differnt paraemter how they want.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "pink-text-gradient",
      },
    ],
    image: boston,
    demo_link: "https://house-prediction-1.onrender.com/",
    source_code_link: "https://github.com/terror-akshat",
  },

  {
    name: "Brief-View",
    description:
      "A project based on text-summarization with voice recognize, video and audio file recognaize  like feature ",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "MachineLearning",
        color: "pink-text-gradient",
      },
    ],
    image: text,
    // demo_link: "https://cool-torte-631e9a.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
];

const projects = [
  {
    name: "Journey-Junction",
    description:
      "Web-based platform that allows users to unlock there right place for traveling. It helps user for there booking system, near about best hotels and proivde the path. ",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: junction,
    demo_link: "https://cool-torte-631e9a.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
  {
    name: "To-Do-List",
    description:
      "Web application that enables users to manage there daily work with this to-do-list, They can add as well as delete the daily task as per there requirement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: task,
    demo_link: "https://precious-kulfi-1d7c5b.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
  {
    name: "Port-folio",
    description: "My first portfolio which i made in my learning phase.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Sass",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: portfoili,
    demo_link: "https://incredible-cascaron-3587fa.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
  {
    name: "Crud-App",
    description:
      "This project is a simple CRUD (Create, Read, Update, Delete) API for managing products. It provides endpoints to create new products, read product information, update existing products, and delete products. The API is built using Node.js and Express.",
    tags: [
      {
        name: "Express Js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Mongo db",
        color: "pink-text-gradient",
      },
      {
        name: "Rest-api",
        color: "red-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/terror-akshat/crud-backend-app",
  },
  {
    name: "Wheater-forcast",
    description:
      "tay ahead of the weather with instant forecasts at your fingertips – your reliable guide for sunshine, rain, and everything in between",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: wather,
    demo_link: "https://dreamy-cupcake-39ffeb.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
  {
    name: "Calculator",
    description:
      "Web-application where, You go-to tool for quick, accurate calculations – simplifying math, so you can focus on what matters",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    demo_link: "https://smart-calculatorio.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
  {
    name: "Sentiment-Analysis",
    description:
      "An fully emotion  prediction project, where user provide the query some the model tell weather you are negative aur positive",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Nlp",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    demo_link: "https://resilient-dolphin-671a35.netlify.app",
    source_code_link: "https://github.com/terror-akshat",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  mlProjects,
  navLinks,
};
