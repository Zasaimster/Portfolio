import visualizer from "../images/visualizer.png";
import paint from "../images/paint.png";
import zasbot from "../images/zasbot.png";

const homePage = {
  // desc1: "I'm currently a Senior studying Computer Science at UCLA.",
  desc2:
    "I'm a California based Computer Science student with experience building full stack applications, microservices, and DevOps tools. I recently finished a Software Development internship at Yahoo where I created an automated registry scraper saving the company significant operational expenses.",
};

const about = {
  imgStart: false,
  smallHeader: "About Me",
  header: null,
  desc1: `Hey! My name is Saim, and I'm currently a Senior studying Computer Science at UCLA. When I was younger, I always enjoyed tinkering and creating things. Now, I am spending my time learning new skills that will help me contribute to new technologies and software, hopefully making the world a beter place.`,
  desc2: `Today, I've had the opportunity of working at a large web service provider, multichannel video programming distributor, a student led satellite mission, and UCLA's premier professor, class, and apartment review website. I'm currently looking for more opportunities as a software developer, and I'm looking to learn more about data analysis and embedded systems.`,
  desc3: `Here are a few technologies I use: `,
  alt: "",
  tags: [
    "React",
    "Node.js",
    "Golang",
    "AWS",
    "C++",
    "Python",
  ],
};

const listOfExperiences = ["Yahoo", "DIRECTV", "ELFIN", "Daily Bruin", "Palace Properties", "Creative Labs"];

const experience = [
  {
    title: "Software Development Engineering Intern",
    company: "Yahoo",
    link: "https://www.yahooinc.com/about",
    desc: [
        "Designed and implemented a Screwdriver pipeline to efficiently extract and delete stale images and their signatures from a Docker registry and S3 bucket, significantly reducing operational expenses by approximately 65%.",
        "Introduced effective load management techniques to handle over a terabyte of data, leveraging AWS SQS for optimal performance.",
        "Enhanced functionality by integrating a delete endpoint into a Golang API, enabling seamless removal of objects from S3.",
        "Developed a comprehensive test suite to ensure robust functionality and the ability for different critical services to handle high-volume traffic effectively.",
    ],
    startDate: "June 2023",
    endDate: "September 2023"
  },
  {
    title: "Backend Engineering Intern",
    company: "DIRECTV",
    link: "https://www.directv.com/stream/",
    desc: [
        "Redesigned an outdated location microservice for regional data mappings in the stream authentication pipeline, achieving enhanced processing speed through strategic parallelization",
        "Validated the service’s capability to handle over 1,500 transactions per second by implementing comprehensive automated and unit tests, ensuring data integrity and usability.",
        "Reduced the code footprint and provided documentation, offering better code maintainability in the future.",
    ],
    startDate: "June 2022",
    endDate: "September 2022"
  },
  {
    title: "Full Stack Developer",
    company: "ELFIN",
    link: "https://elfin.igpp.ucla.edu/",
    desc: [
        "Architected an end-to-end React web application written in Typescript coupled with a FastAPI backend that shifts the ADCS pipeline away from a CLI into a comprehensive GUI, enabling scientists to efficiently verify, generate, and model multiple satellites’ second resolution attitude data.",
        "Designed and implemented a dashboard to visualize telemetry data to assist with mission operations and verify generated maneuver data for the NASA funded mission.",
        "Developed Python API to communicate with the team's MySQL and PostgreSQL databases.",
        "Helped operate two in orbit CubeSats to efficiently collect scientific data and ensure satellite health"
    ],
    startDate: "October 2021",
    endDate: "Present"
  },
  {
    id: "db",
    title: "Software Engineering Intern",
    company: "Daily Bruin",
    link: `https://www.bruinwalk.com/`,
    desc: [
      "Developing UCLA’s classes, professor, and apartment review website used by over 18k students yearly",
      "Assisting the redesign process of the entire website written in Django",
      "Integrated React.js into the codebase to increase functionality and customizability of components, ensuring a better user experience",
    ],
    startDate: "August 2021",
    endDate: "January 2023",
  },
  {
    title: "Software Engineering Intern",
    company: "Palace Properties",
    link: `https://www.linkedin.com/company/palace-properties/about/`,
    desc: [
      "Created a dashboard to streamline the process of organizing incoming reservation requests from customers",
      `Implemented a draggable kanban board where property managers can update the different statuses of reservations`,
      `Made multiple other front end components for property managers to adjust their property info and for clients to view their rented properties`,
    ],
    startDate: "June 2020",
    endDate: "January 2021",
  },
  {
    title: "Software Developer",
    company: "Creative Labs",
    link: `https://www.creativelabsucla.com/`,
    desc: [
      "Collaborated with the research team to create a Firestore database to conveniently store information about small, local businesses",
      "Learned Swift and Google Firebase to develop the backend for the team's iOS app",
      "Wrote and tested a REST API in Swift to efficiently read and write data about local businesses to Google Firebase",
    ],
    startDate: "April 2021",
    endDate: "August 2021",
  },
];

const projects = [
  {
    name: "Sorting Algorithm Visualizer",
    desc: "An application to visualize many common sorting algorithms such as merge sort, quick sort, radix sort, and more with adjustable sorting speeds and array sizes.",
    tags: ["Algorithms", "Data Structures", "Visualization", "React"],
    github: "https://github.com/Zasaimster/Sorting-Algorithm-Visualizer",
    website: "https://saim-sortingvisualizer.netlify.app/",
    image: visualizer,
    imgStart: true,
  },
  {
    name: "ZasBot",
    desc: "A Discord bot that scrapes Valorant and Fortnite statistics. Discord user data can be stored for easy accessibility.",
    tags: ["Node.js", "Discord.js", "Firebase", "Web Scraping"],
    github: "https://github.com/Zasaimster/DiscordBot",
    website:
      "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D869731362373009468%26scope%3Dbot%2Bapplications.commands",
    image: zasbot,
    imgStart: false,
  },
  {
    name: "Paint App",
    desc: "A simple drawing application created with HTML Canvas that has undo, custom colors, and custom shape features. ",
    tags: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/Zasaimster/Paint",
    website: "https://basicpaint.netlify.app/",
    image: paint,
    imgStart: true,
  },
];

const darkTheme = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  dark: true,
  primary: true,
  darkText: false,
};

const lightTheme = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  primary: false,
  darkText: true,
};

export {
  homePage,
  about,
  listOfExperiences,
  experience,
  projects,
  lightTheme,
  darkTheme,
};
