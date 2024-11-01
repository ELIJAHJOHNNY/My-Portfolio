import netfli2 from "../assets/netfli2.jpg";
import handout from "../assets/handout.png";
import soundzz from "../assets/soundzz.png";
import expense from "../assets/expense-tracker.png";
import myTask from "../assets/myTask.png";
import qrCode from "../assets/qr-code.png";
import infinion from "../assets/infinionsite.png";
import unikrib from "../assets/unikr.png";

export const myWorks = [
  {
    id: 7,
    name: "INFINION",
    img: infinion,
    details:
      "This is a staging link of the official website of Infinion Technologies",
    link: "https://www.infinion.co/",
    githubLink:
      "",
    toolsUsed: [
      "Next.js",
      "Tailwind",
      "AI",
      "Typescript"
    ],
   
  },
  {
    id: 8,
    name: "UNIKRIB",
    img: unikrib,
    details:
      "This is a platform that connects students in universities within Nigeria to service providers and agents to rent an apartment.",
    link: "https://www.unikribafrica.com/",
    githubLink:
      "",
    toolsUsed: [
      "Next.js",
      "Tailwind",
      "AI",
      "Axios",
      "Typescript",
      "Redux Toolkit"
    ],
   
  },
  {
    id: 3,
    name: "SOUNDZZ",
    img: soundzz,
    details:
      "A music player built with the Spotify API that gets a user's playlists and plays the songs",
    link: "https://soundzz.netlify.app",
    githubLink: "https://github.com/ELIJAHJOHNNY/Soundz",
    moreDetails: "/project-details",
    toolsUsed: ["React", "Tailwind", "Material UI", "Axios", "Spotify API"],
  },
    {
      id: 1,
      name: "HANDOUT",
      img: handout,
      details:
        "This platform allows people to give out useful but unwanted items for free or a give away price to others who may need them.",
      link: "https://handout-stutern.web.app/",
      githubLink:
        "https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git",
      toolsUsed: [
        "React",
        "Tailwind",
        "MUI",
        "Axios",
        "Figma",
        "Ant D",
        "Firebase",
      ],
      moreDetails: "/handout-details",
    },
    {
      id: 2,
      name: "NETFLIX",
      img: netfli2,
      details: `A Netflix clone created with 'The Movie Database' API which
      displays movies of various categories and has a search
      feature`,
      link: "https://netphlix-duplicate.netlify.app/",
      githubLink: "https://github.com/ELIJAHJOHNNY/GROUP-A-PROJECT.git",
      toolsUsed: ["React", "Tailwind", "MUI", "Axios", "TMDB API", "Redux"],
    },
    
    {
      id: 4,
      name: "EXPENSE TRACKER",
      img: expense,
      details:
        "A platform to track one's expenses. User can sign in with their personal gmail and have all tracked expenses saved",
      link: "https://xpencetrack.web.app/",
      githubLink: "https://github.com/ELIJAHJOHNNY/expense-tracker",
      toolsUsed: ["React", "Tailwind", "Firebase"],
      moreDetails: "/project-details",
    },
    {
      id: 5,
      name: "MY TASKS",
      img: myTask,
      details: "A platform to manage tasks using a calendar.",
      link: "https://schoolinkatodo.web.app/",
      githubLink: "https://github.com/ELIJAHJOHNNY/task-manager",
      toolsUsed: ["React", "Tailwind", "Json Placeholder"],
      moreDetails: "/project-details",
    },
    {
      id: 6,
      name: "QR-CODE GENERATOR",
      img: qrCode,
      details: "A platform to generate QR codes for any website address.",
      link: "https://elijahjohnny.github.io/QR-Code-generator/",
      githubLink: "https://github.com/ELIJAHJOHNNY/QR-Code-generator",
      toolsUsed: ["HTML", "TailwindCSS", "Javascript"],
      moreDetails: "/project-details",
    },
  ];