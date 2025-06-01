// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import unified from './assets/company_logo/unified_png.png';
import onepaper from './assets/company_logo/onepaper.png';


// Education Section Logo's
import acharya from './assets/education_logo/acharya.png';
import dav from './assets/education_logo/dav.png';
import lions from './assets/education_logo/lions.png';

// Project Section Logo's

import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import aiImage from './assets/work_logo/ai2.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: unified,
      role: "Fullstack Developer",
      company: "Unified Mentor",
      date: "April 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
     id: 1,
      img: onepaper,
      role: "Data Analyst",
      company: "One Paper Research Analyst",
      date: "July 2024 - December 2024",
      desc: " Automated data cleaning and analysis workflows using Python (Pandas, NumPy) and SQL, boosting data accuracy by 20%",
      skills: [
        "Python",
        "PowerBI",
        "SQL",
        "EXCEL",
        "Pandas",
      ],
    },
    
  ];
  
  export const education = [
  
    {
      id: 0,
      img: acharya,
      school: "Acharya Institute of Technology",
      date: "Sept 2019 - July 2023",
      grade: "7 CGPA",
      desc: "I have completed my Bachelor of Engineering (BE) in Information Science and Engineering from Acharya Institute of Technology, Bengaluru. During my time at AIT, I gained a strong foundation in programming, software development. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at AIT Collage has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Information Science and Engineerng - BE",
    },
    {
      id: 1,
      img: dav,
      school: "DAV Model School, Dhanbad",
      date: "Apr 2018 - March 2019",
      grade: "69%",
      desc: "I completed my class 12 education from DAV Model School, Dhanbad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: lions,
      school: "Lions Public School, Sindri",
      date: "Apr 2016 - March 2017",
      grade: "95%",
      desc: "I completed my class 10 education from Lions Public School, Sindri, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
       {
      id: 6,
      title: "Ai Article Summarizer Extension",
      description:
        "This AI Article Summarizer Extension is built with HTML, CSS, and JavaScript, seamlessly integrating with Google Gemini AI. Designed with a striking squircle UI, it features a modern blue-black gradient background, crisp white text, and a dynamic gradient heading. The project highlights strong UI/UX principles, requiring a Gemini API key for use.",
      image: aiImage,
      tags: ["API", "Gemini Api", "CSS", "Javascript"],
       github: "https://github.com/RakeshMahatoo/AI-Summary-Extractor.git",
      // webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      // github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      // github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  