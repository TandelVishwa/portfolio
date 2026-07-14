import travelImage from "../assets/images/travel.jpg";
import headphoneImage from "../assets/images/headphone.jpg";
import calculatorImage from "../assets/images/CloudWeatherOps.png";

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
    title: "CloudWeatherOps",
    description:
      "CloudWeatherOps – A cloud-native weather application built with React, Docker, GitHub Actions, and Kubernetes.",
    tech: ["Docker", "Kubernets", "React", "GitActions"],
    github: "https://github.com/TandelVishwa/CloudWeatherOps.git",
    live: "",
    image: CloudWeatherOpsImage,
  },
];

export default projects;