import travelImage from "../assets/images/travel.jpg";
import headphoneImage from "../assets/images/headphone.jpg";
import calculatorImage from "../assets/images/calculator.jpg";

const projects = [
  {
    id: 1,
    title: "Travel Landing Page",
    description:
      "A responsive travel landing page built with React and Tailwind CSS featuring a modern UI and responsive design.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/TandelVishwa/travel-landing-page.git",
    live: "",
    image: travelImage,
  },
  {
    id: 2,
    title: "Headphone Landing Page",
    description:
      "A modern headphone landing page with responsive design and attractive product showcase.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/TandelVishwa/headphone-landing-page.git",
    live: "",
    image: headphoneImage,
  },
  {
    id: 3,
    title: "SI Calculator",
    description:
      "A simple interest calculator built using the MERN stack with MongoDB integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/TandelVishwa/si-calculator.git",
    live: "",
    image: calculatorImage,
  },
];

export default projects;