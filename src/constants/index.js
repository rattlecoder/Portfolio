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
    inv,
    gfg,
    java,
    python,
    snow,
    postgres,
    cpp,
    spring,
    ffreak,
    nassist,
    atletas,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Structure and Algorithms",
      icon: mobile,
    },
    {
      title: "Data Analyst",
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
      name: "C++",
      icon: cpp,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Postgres",
      icon: postgres,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Snowflake",
      icon: snow,
    }
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "Innovaccer",
      icon: inv,
      iconBg: "#383E56",
      date: "Feb 2022 - Current",
      points: [
        "Added the custom functionality organization code for CCDA Parser and built a new logic that helped parsing the custom segments of received XMLs into CSVs and received the Spot Award for the same.",
        "Built logic making use of Slack webhooks with Python to notify when a file comes to SFTP, its details and also the detailed notification of the file when synced to Elastic Search thus reducing manual effort to validate every time.",
        "Built script to fetch the data from MixPanel API and MongoDB and migrate to some AWS S3 bucket and Postgres which would then further be used for powering up the Dashboard using PowerBI.",
      ],
    },
    {
      title: "Technical Content Writer Intern",
      company_name: "Geeks For Geeks",
      icon: gfg,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Jan 2021",
      points: [
        "Contributed articles based on Data Structures and Algorithms and Competitive Programming.",
        "Helped in improving their current articles and algorithms.",
      ],
    }
  ];
  
  
  const projects = [
    {
      name: "Atletas",
      description:
        "A web based tool where different users can create posts, upload images, comment, like or dislike on other user’s post with complete Authentication, Security and several other cool features such as Searching a post using its name and Hashtags, Pagination, Recommendation of the related posts based on the selected Post etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
      ],
      image: atletas,
      source_code_link: "https://atletas-bash.netlify.app/",
    },
    {
      name: "News Assist",
      description:
        "A simple voice recognition and news fetching tool which uses the Alan AI and news API along with React JS hooks. A user can simply ask Alan to search for different news headlines related to some specific source, topic, person etc and Alan even reads out the news to you plus many other live interactions as well.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "newsapi",
          color: "green-text-gradient",
        },
        {
          name: "alanai",
          color: "pink-text-gradient",
        },
      ],
      image: nassist,
      source_code_link: "https://alan-assist.netlify.app/",
    },
    {
      name: "Fit-Freak",
      description:
        "A conprehensive fitness app that demonstrates different exercises with detailed Animations and information with the functionality to choose different kind of exercises, muscle groups, equipments, pull related Youtube videos and display similar target muscles and exercices with full Searching and Pagination features.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
      ],
      image: ffreak,
      source_code_link: "https://fitt-freak.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };