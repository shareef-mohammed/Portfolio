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
  brototype,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  chargemod,
  eshop,
  foodiefrontier,
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
    title: "Full Stack Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Full Stack Developer - INTERN",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#E6DEDD",
    date: "June 2022 - May 2023",
    points: [
      "Designed and implemented interactive, user-friendly UIs for an e-commerce platform and a food blogging website, enhancing user engagement and satisfaction.",
      "Developed and maintained web applications and servers for both projects using React.js, Node.js, Express.js, MongoDB, and related technologies, ensuring high performance and scalability.",
      "Collaborated with cross-functional teams to deliver high-quality features tailored to the specific needs of the e-commerce and food blogging domains.",
      "Implemented responsive designs for both projects, ensuring seamless usability across devices and achieving cross-browser compatibility.",
      "Conducted code reviews, shared constructive feedback, and followed best practices to maintain code quality during the development of both applications.",
    ],
  },
  {
    title: "Software Developer Engineer",
    company_name: "chargeMOD",
    icon: chargemod,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developed an interactive UI/UX components using React.js.",
      "Created real time communication for IOT with MQTT, Node.Js, OCPP.",
      "Implemented payment integration using razorpay, worldline, phonepay and omniware.",
      "Create role based login and persistent login with cookies, react Context.",
      "Deployed react.Js and node.js application in AWS using github actions CI/CD.",
      "Developed and integrated APIs compliant with the OCPI 2.2.1 protocol to enable seamless communication between EV charging stations and backend systems.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const projects = [
  {
    name: "E-SHOP",
    description:
      "Developed a web-based platform for users to search, purchase, and manage electronic products. Features include wishlist and cart functionality, aggregating products from various providers to ensure convenience, efficiency, and a seamless user experience.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: eshop,
    source_code_link: "https://github.com/shareef-mohammed/E-Shop.git",
  },
  {
    name: "FoodieFrontier",
    description:
      "Developed FoodieFrontier, a food blogging platform where users can log in, post, like, share, and rate food reviews. Features include chat for interaction and options to report users, fostering an engaging and secure community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: foodiefrontier,
    source_code_link: "https://github.com/shareef-mohammed/FoodBlog-frontend.git",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
