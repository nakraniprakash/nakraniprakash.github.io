import Indiecampers from './indiecampers.jpeg';
import Turing from './turing.jpeg';
import Cometchat from './cometchat.jpeg';
import Csoft from './csoft.jpeg';
import Xinfin from './xinfin.jpeg';
import Chameleon from './chameleon.jpeg';
import Gtu from './gtu.jpeg';
import ProfilePhoto from './profile.jpeg';
import Resume from './Senior-Frontend-Developer-8-years-exp-Prakash-Nakrani.pdf';

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  logo: string;
  description: string[];
  stack: string[];
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  location: string;
  logo: string;
}

export interface Profile {
  name: string;
  resume: string;
  profilePhoto: string;
  title: string;
  location: string;
  email: string;
  social: SocialLinks;
  about: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}

const profile: Profile = {
  name: "Prakash Nakrani",
  profilePhoto: ProfilePhoto,
  resume: Resume,
  title: "Senior Frontend Engineer | React & TypeScript Expert | 8+ Years Experience | Product-Minded | Driving Scalable & Business-Centric Frontend Solutions",
  location: "Lisbon, Portugal 🇵🇹",
  email: "mr.prakashnakrani@gmail.com",
  social: {
    linkedin: "https://linkedin.com/in/nakraniprakash",
    github: "https://github.com/nakraniprakash"
  },
  about: "👋 I'm a frontend developer with 8+ years of experience turning ideas into seamless, high-performance web applications.\n\n🚀 From crypto to healthcare, chat platforms to e-commerce—I've built scalable, user-first interfaces that are secure, intuitive, and built to perform. My passion lies in crafting clean, efficient code that not only looks great but also 💡 minimizes server costs and 📈 maximizes impact.\n\n💻 Technologies: JavaScript, TypeScript, React, Vue, GraphQL, Redux, HTML, CSS, Next.js, Nuxt.js, React-Native, Material-UI, Styled Components, Storybook, Cypress, Jest, React Testing Library, ESLint, Webpack, AWS & more.\n\n✨ I'm always excited to tackle new challenges, explore emerging tech, and collaborate with teams who care about both code quality and user experience.",
  skills: [
    "TypeScript", "JavaScript", "React", "Vue", "Node.js", "Next.js", "Nuxt.js", "CI/CD", "AWS S3", "Git", "GraphQL", "Redux", "HTML", "CSS", "Material-UI", "Styled Components", "Storybook", "Cypress", "Jest", "React Testing Library", "ESLint", "Webpack"
  ],
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "Indiecampers",
      location: "Lisbon, Portugal",
      date: "Aug 2023 - Present",
      logo: Indiecampers,
      description: [
        "Improved page load speed by 25% by introducing a BFF layer for the client area, enhancing user experience and reducing latency.",
        "Accelerated feature delivery by creating a reusable payment component for Stripe, PayPal, Braintree, Google Pay, and Apple Pay and increased revenue by more than 35% through booking automation feature with this.",
        "Saved 100% in Stripe transaction fees by implementing Stripe CIT integration across the website and client area.",
        "Implemented a CloudFront-based feature flag mechanism to enable A/B testing, improving experiment control and feature rollout.",
        "Increased homepage engagement by 20% with interactive search widgets and a redesigned homepage for better content visibility.",
        "Improved SEO and performance by 30% by reducing load times, and optimizing Web Core Vitals (CLS, LCP, INP).",
        "Boosted team productivity through active mentoring, technical support, and hiring skilled, high-fit frontend developers."
      ],
      stack: ["TypeScript", "JavaScript", "Next.js", "Nuxt.js", "React", "Vue", "GraphQL", "Redux", "Storybook", "Cypress", "Jest", "React Testing Library", "ESLint", "Webpack", "AWS S3"]
    },
    {
      title: "Senior Frontend Engineer",
      company: "Turing (Contract)",
      location: "Lisbon, Portugal (Remote)",
      date: "Jan 2023 - Jul 2023",
      logo: Turing,
      description: [
        "Increased user profile completion rate by 25% through the implementation of a user profile lock screen feature.",
        "Boosted user engagement by 30% through the integration of the 'Add to Home' shortcut feature, increasing the accessibility of the app.",
        "Achieved 100% codebase localization without relying on third-party libraries, resulting in improved application adaptability.",
        "Successfully tracked and analyzed activities of non-logged-in users on the app by generating unique IDs, leading to a 12% improvement in targeted marketing strategies and personalized user experiences."
      ],
      stack: ["TypeScript", "JavaScript", "React", "Vue", "React Native", "Next.js", "React testing library", "Storybook", "PWA", "Tailwind CSS"]
    },
    {
      title: "Senior Frontend Engineer",
      company: "Cometchat",
      location: "Remote",
      date: "Aug 2021 - Jan 2023",
      logo: Cometchat,
      description: [
        "Developed and released UI Kit as a single codebase for the Vue framework that supports both Vue2 and Vue3",
        "Designed & architected new modular and industry standards UI Kit structure for web & mobile platforms.",
        "Improved functionalities and pipeline integration by designing and implementing cross-platform frameworks.",
        "Ensured tight cooperation with other engineers and designers through active listening, systematic communication, and leadership skills.",
        "Provided constant feedback and code review support to other team members across the platforms for better code standards. i.e. Angular, React, Vue, React-Native, Flutter, Next."  
      ],
      stack: ["TypeScript", "JavaScript", "React", "Vue", "React Native", "Next.js", "Redux", "React testing library", "Architectural Design", "Storybook", "Node.js", "Express.js"]
    },
    {
      title: "Senior Frontend Engineer",
      company: "Csoft",
      location: "Bangalore, India",
      date: "Mar 2020 - Aug 2021",
      logo: Csoft,
      description: [
        "Designed & architected frontend framework for both web and mobile, created generic middlewares & data retrieval mechanisms",
        "Created generic redux by automating state management code and reduced lines of code by almost 90%",
        "Increased performance of the existing apps by revamping the apps in React-Native",
        "Responsible for development and maintenance of 200+ reusable React JS components",
        "Responsible for development and maintenance of 8 Github packages for company use",
        "Created chatbot that helps clients to connect and retrieve data in a more user-friendly way",
        "Built app to app audio/video calling user experience in React-Native"
      ],
      stack: ["JavaScript", "React", "React Native", "Redux", "Jest", "styled-components", "Material-UI"]
    },
    {
      title: "Senior Frontend Engineer",
      company: "Xinfin",
      location: "Mumbai, India",
      date: "Dec 2018 - Mar 2020",
      logo: Xinfin,
      description: [
        "Developed a crypto wallet that provides a seamless experience and intuitive UI",
        "Designed and developed the crypto-currency exchange platform with React JS, resulting in 45% more user growth and a better user experience",
        "Refactored exchange admin panel APIs in Node js, improving the overall code standards"
      ],
      stack: ["JavaScript", "React", "React Native", "Redux", "Node.js", "Express.js", "web3"]
    },
    {
      title: "Software Engineer",
      company: "Chameleon",
      location: "Gujarat, India",
      date: "Jun 2016 - Nov 2018",
      logo: Chameleon,
      description: [
        "Worked on client AetherGPS's Real-Time GPS service",
        "Enhancing the interface and user experience based on user-escalated defects",
        "Provided features that increased the usability of the application by 30% with features such as real-time live tracking, past trips, safe zone creation, easy to use admin panel to track the details."
      ],
      stack: ["JavaScript", "jQuery", "HTML5", "CSS3", "SVG", "Android"]
    }
  ],
  education: [
    {
      school: "Gujarat Technological University",
      degree: "Bachelor of Engineering (B.E.), Computer Engineering",
      date: "2012 - 2016",
      location: "Gujarat, India",
      logo: Gtu,
    }
  ]
};

export default profile; 