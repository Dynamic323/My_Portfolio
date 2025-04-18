import { images } from "./assets";
const portfolio = ["All", "Frontend", "Backend", "Mobile", "Fullstack"];
const projects = [
  {
    title: "Movieo",
    category: "Fullstack",
    imgSrc: images.movie1,
    alt: "movieo",
    description:
      "A full-stack website designed for downloading the latest movies and streaming trailers.",
    languages: ["react", "laravel", "html", "Tailwind css"],
    githubUrl: "https://github.com/Dynamic323/Dy_Em-movie",
    url: "",
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
  // {
  //   title: "Mexant",
  //   category: "Fullstack",
  //   imgSrc: images.mexant1,
  //   alt: "mexant",
  //   url: "https://mexant.com.ng/",
  //   // githubUrl: "https://github.com/yourusername/mexanto",
  //   description:
  //     "Mexanto is a forex broker website that provides comprehensive trading tools and resources for investors.",
  //   languages: ["php", "laravel", "html"],
  //   additionalImages: [images.mexant1, images.mexant2, images.mexant3],
  // },
  {
    title: "Net downloader",
    category: "Frontend",
    imgSrc: images.net_downloader1,
    alt: "netdownloader",
    url: "https://net-downloader-em.vercel.app/",
    description:
      "Netdownloader is a website that allows you to download videos from YouTube, Facebook, and TikTok. Simply copy and paste the video URL, and you can even download multiple videos at once.",
    languages: ["React", "css"],
    additionalImages: [images.net_downloader1, images.net_downloader2],
  },
  {
    title: "Sunwave Clone",
    category: "Fullstack",
    imgSrc: images.sunwaveclone1,
    alt: "joycaring",
    url: "",
    githubUrl: "https://github.com/Dynamic323/",
    description: "Sunwave clone with Php ",
    languages: ["PHP", "Html", "Css"],
    additionalImages: [
      images.sunwaveclone1,
      images.sunwaveclone3,
      images.sunwaveclone2,
    ],
  },
  {
    title: "Joycaring",
    category: "Frontend",
    imgSrc: images.joycaring1,
    alt: "joycaring",
    url: "",
    githubUrl: "https://github.com/Dynamic323/Medical_web",
    description: "A medical website ",
    languages: ["Bootstrap", "React"],
    additionalImages: [images.joycaring1, images.joycaring2],
  },
  {
    title: "Portfolio",
    category: "Frontend",
    imgSrc: images.portfoliody,
    alt: "portfolio",
    url: "",
    description: "A Simple portfolio with html and css",
    languages: ["Html", "Css"],
  },
  {
    title: "Glass from",
    category: "Frontend",
    imgSrc: images.Glass_effects,
    alt: "portfolio",
    url: "",
    // description: "A medical website ",
    languages: ["Html", "Css"],
  },
  {
    title: "Blog website",
    category: "Backend",
    imgSrc: images.laravelblog,
    alt: "blog",
    url: "",
    githubUrl: "https://github.com/Dynamic323/laravel_blog-web",

    description: "I created a blog wesite while leaning laravel ",
    languages: ["laravel", "tailwind css"],
  },
  {
    title: "Crud With PHP",
    category: "Web design",
    imgSrc: images.crud,
    alt: "crd ",
    url: "",
    description: "A crud Application With Pure php ",
    languages: ["html", "Php", "bootstrap"],
  },
  {
    title: "MyClassList",
    category: "Web design",
    imgSrc: images.myclasslist1,
    description:
      "A platform that allows users to log in and manage their own student lists, where they can view and edit only the students they have created, ensuring personalized and secure management.",

    alt: "crd ",
    url: "",
    languages: ["laravel", "tailwind"],
    additionalImages: [images.myclasslist1, images.myclasslist2],
  },
  {
    title: "Opay ui Clone",
    category: "Mobile",
    imgSrc: images.opayclone,
    description: "A Soft Opay ui clone with react Native 😊",

    alt: "crd ",
    url: "",
    languages: ["React Native"],
    additionalImages: [images.opayclone],
  },
];

export default projects;
