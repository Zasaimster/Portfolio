const darkBg = true;

export const darkTheme = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  dark: true,
  primary: true,
  darkText: false,
};

export const lightTheme = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: false,
  pimrary: false,
  darkText: true,
};

export const aboutTheme = {
  id: "about",
  lightBg: !darkBg,
  lightText: darkBg,
  lightTextDesc: darkBg,
  imgStart: false,
  alt: "About!",
  dark: darkBg,
  primary: darkBg,
  darkText: !darkBg,
};

export const homeObj2 = {
  id: "experience",
  lightBg: darkBg,
  lightText: !darkBg,
  lightTextDesc: !darkBg,
  topLine: "Experience",
  headline: `This is the 'About Me' headline`,
  description:
    "About Me Description. Blah blah blah. Im a second year at ucla. blah blah blah. Cs major. blah blah blah",
  buttonLabel: "idk",
  imgStart: true,
  img: require("../../images/about.svg"), // use unDraw for images
  alt: "About!",
  dark: !darkBg,
  primary: !darkBg,
  darkText: darkBg,
};

export const homeObj3 = {
  id: "projects",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: `This is the 'About Me' headline`,
  description:
    "About Me Description. Blah blah blah. Im a second year at ucla. blah blah blah. Cs major. blah blah blah",
  buttonLabel: "Check out my fucking resume bitch",
  imgStart: false,
  img: require("../../images/about.svg"), // use unDraw for images
  alt: "About!",
  dark: true,
  primary: true,
  darkText: false,
};
