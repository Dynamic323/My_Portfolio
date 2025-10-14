import { images } from "./assets";

const portfolio = ["All", "Frontend", "Backend", "Mobile", "Fullstack"];

const projects = [
  {
    title: "Coco Mailer",
    category: "Fullstack",
    imgSrc: images.cocomailer,
    url: "https://coco-mailer.vercel.app/",
    alt: "Coco Mailer",
    description:
      "An email delivery and automation tool under the CocoBase ecosystem. My Role was redesign the UI We Had before to this curent version, and fix  some bugs to improve Smooth connections.",
    languages: ["React", "Fast Api", "Tailwind CSS"],
    additionalImages: [
      images.cocomailer,
      images.cocomailer2,
      images.cocomailer3,
    ],
  },
  {
    title: "Movieo",
    category: "Fullstack",
    imgSrc: images.movie1,
    alt: "movieo",
    description:
      "A full-stack movie website built with React and Laravel, allowing users to stream trailers and download the latest movies. It also include an Admin pannel where Admin can Post Movies that will be shown on the website. ",
    languages: ["React", "Laravel", "HTML", "Tailwind CSS"],
    githubUrl: "https://github.com/Dynamic323/Dy_Em-movie",
    additionalImages: [
      images.movie1,
      images.movie2,
      images.movie3,
      images.movie4,
      images.movie5,
      images.movie6,
      images.movie7,
      images.movie8,
    ],
  },
  {
    title: "DyshareX",
    category: "Fullstack",
    imgSrc: images.dysharex1,
    alt: "DyshareX",
    url: "https://dysharex.pxxl.click/",
    description:
      "A modern file and code sharing platform with instant link generation, privacy controls, analytics, and custom slugs.",
    languages: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    additionalImages: [images.dysharex1, images.dysharex2, images.dysharex3],
  },
  {
    title: "Net Downloader",
    category: "Frontend",
    imgSrc: images.net_downloader1,
    alt: "netdownloader",
    url: "https://net-downloader-em.vercel.app/",
    description:
      "A React web app that lets users download videos from YouTube, Facebook, ig, and TikTok. Supports batch downloads via pasted URLs.",
    languages: ["React", "CSS"],
    additionalImages: [images.net_downloader1, images.net_downloader2],
  },

  {
    title: "Replico",
    category: "Fullstack",
    imgSrc: images.replico1,
    alt: "Replico",
    description:
      "A website downloader powered by Puppeteer. Allows users to download entire websites easily with authentication via Firebase.",
    languages: ["React", "Node.js", "Express", "Coco Base"],
  },
  {
    title: "CocoBase",
    category: "Fullstack",
    imgSrc: images.cocobase1,
    url: "https://cocobaselanding.pxxl.click/",
    alt: "CocoBase",
    // description:
    //   "A Backend-as-a-Service (BaaS) platform. I worked as co-founder and front-end engineer, integrating frontend with backend and building stunning visuals.",
    description:
      "A Backend-as-a-Service (BaaS) platform. I'm working as front-end engineer, integrating frontend with backend and building stunning visuals.",
    languages: ["Next.js", "Node.js", "Firebase", "Tailwind CSS"],
  },

  {
    title: "X-Payee",
    category: "Fullstack",
    imgSrc: images.xpay,
    alt: "X-Payee",
    url: "https://www.x-payee.com/",
    description:
      "An investment and payment platform built in collaboration with senior backend developer Ace. Implemented complex investment logic and a seamless UI.",
    languages: ["React", "Express", "Node.js", "MongoDB"],
    additionalImages: [images.xpay, images.xpay2],
  },
  // {
  //   title: "Theograph",
  //   category: "Backend",
  //   imgSrc: images.theograph1,
  //   alt: "Theograph",
  //   description:
  //     "An automation tool that generates GitHub contribution graph commits automatically. Built for developers to keep their graph consistent.",
  //   languages: ["Node.js", "Express", "GitHub API"],
  // },
  {
    title: "Instantly Analytics Dashboard",
    category: "Fullstack",
    imgSrc: images.instantly,
    url: "https://instantly-analytics-project.vercel.app/",
    alt: "Instantly Analytics",
    description:
      "A React + Node.js analytics dashboard visualizing API data and complex metrics. Focused on handling large datasets and dynamic UI updates.",
    languages: ["React", "Node.js", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "Seasonal Greetings",
    category: "Fullstack",
    imgSrc: images.seasonalW1,
    alt: "Seasonal Greetings",
    url: "https://seeasonal-wishes-fnd.vercel.app/",
    description:
      "A scheduling platform where users can create personalized festival greetings that unlock automatically on the event date.",
    languages: ["React", "Firebase", "Tailwind CSS"],
    additionalImages: [images.seasonalW1, images.seasonalW2],
  },
  {
    title: "Emi Aluge Investment",
    category: "Frontend",
    imgSrc: images.emialuge3,
    alt: "Emi Aluge Investment",
    url: "https://emialugeinvestment.com/",
    description:
      "Official website for Emi Aluge Investment — a company specializing in Pure Water and Premium Bakery Water products.",
    languages: ["React", "CSS", "HTML"],
    additionalImages: [images.emialuge1, images.emialuge2, images.emialuge3],
  },
  {
    title: "Sunwave Clone",
    category: "Fullstack",
    imgSrc: images.sunwaveclone1,
    alt: "Sunwave Clone",
    githubUrl: "https://github.com/Dynamic323/",
    description:
      "A Sunwave clone web app recreated using PHP for learning and practice.",
    languages: ["PHP", "HTML", "CSS"],
    additionalImages: [
      images.sunwaveclone1,
      images.sunwaveclone2,
      images.sunwaveclone3,
    ],
  },
  {
    title: "Blog Website",
    category: "Backend",
    imgSrc: images.laravelblog,
    alt: "Blog",
    githubUrl: "https://github.com/Dynamic323/laravel_blog-web",
    description:
      "A Laravel blog website built while learning the framework. Implements authentication and CRUD features.",
    languages: ["Laravel", "Tailwind CSS"],
  },
  {
    title: "CRUD with PHP",
    category: "Frontend",
    imgSrc: images.crud,
    alt: "CRUD App",
    description:
      "A simple CRUD application built using pure PHP and Bootstrap.",
    languages: ["HTML", "PHP", "Bootstrap"],
  },
  {
    title: "MyClassList",
    category: "Fullstack",
    imgSrc: images.myclasslist1,
    alt: "MyClassList",
    description:
      "A student management platform where users can manage their own student lists securely, with authentication and CRUD features.",
    languages: ["Laravel", "Tailwind CSS"],
    additionalImages: [images.myclasslist1, images.myclasslist2],
  },
];

export default projects;
