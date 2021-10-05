import pfp from "../images/headshot.jpg";

const homePage = {
  desc1: "I'm currently a Sophomore studying Computer Science at UCLA.",
  desc2:
    "I have experience building full stack applications using various frameworks, and I'm always interested in learning new topics.",
};

const about = {
  id: "about",
  imgStart: false,
  smallHeader: "About",
  header: null,
  desc1: `Hey! My name is Saim, and I'm currently a Sophomore studying Computer Science at UCLA. When I was younger, I always enjoyed tinkering and creating things. Now, I am spending my time learning to create full stack applications and new topics that will help me assist others in our world of technology.`,
  desc2: `Today, I've had the opportunity of working at UCLA's premier professor, class, and apartment review website and at an organization that utilizes applications as an outlet for creativity. I'm currently looking for more opportunities in full stack development, and I'm looking to learn more about data analysis and embedded systems.`,
  buttonLabel: "Resume",
  image: pfp,
  alt: "",
  tags: ["React, Node.js, Django, Google Cloud, C++, JavaScript (ES6+)"],
};

const experience = [
  {
    id: "db",
    title: "Software Engineering Intern",
    company: "Daily Bruin",
    desc: [
      "Developing UCLA’s classes, professor, and apartment review website used by over 18k students yearly",
      "Assisting the redesign process of the entire website written in Django",
      "Integrated React.js into the codebase to increase functionality and customizability of components, ensuring a better user experience",
    ],
    startDate: "August 2021",
    endDate: "Present",
  },
  {
    title: "Software Engineering Intern",
    company: "Palace Properties",
    desc: [
      "Created a dashboard to streamline the process of organizing incoming reservation requests from customers",
      `Implemented a draggable kanban board where property managers can update the different statuses of reservations
            as well as adding important tags such as “Security Deposit Paid”, “Payment Needed”, and “Paid in Full”`,
      `Made multiple other front end components for property managers to adjust their property info and for clients to
            view their rented properties`,
    ],
    startDate: "June 2020",
    endDate: "January 2021",
  },
  {
    title: "Software Developer",
    company: "Creative Labs",
    desc: [
      "Collaborated with the research team to create a Firestore database to conveniently store information about small, local businesses",
      "Learned XCode, Swift, and Google Firebase to develop the backend for this iOS app",
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
    image: "",
  },
  {
    name: "ZasBot",
    desc: "Discord bot that scrapes Valorant and Fortnite statistics. Discord user data can be stored for easy accessibility.",
    tags: ["Node.js", "Discord.js", "Firebase", "Web Scraping"],
    github: "https://github.com/Zasaimster/DiscordBot",
    website:
      "https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D869731362373009468%26scope%3Dbot%2Bapplications.commands",
    image: "",
  },
  {
    name: "Paint App",
    desc: "An application to visualize many common sorting algorithms such as merge sort, quick sort, radix sort, and more with adjustable sorting speeds and array sizes.",
    tags: ["Algorithms", "Data Structures", "Visualization", "React"],
    github: "https://github.com/Zasaimster/Paint",
    website: "https://saim-sortingvisualizer.netlify.app/",
    image: "",
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

export { homePage, about, experience, projects, lightTheme, darkTheme };
