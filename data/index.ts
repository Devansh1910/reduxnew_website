export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are flexible with time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Providing the Best",
    description: "We works in",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Team of tech enthusiast with a passion for building.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing Accommodation Management Software",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work with us?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "mymedicos",
    des: "Where Cutting-Edge Medicine Meets Breakthrough Technology",
    img: "../public/mnd1.svg",
    iconLists: [
      "../public/firebase.svg",
      "../public/swift.svg",
      "/ts.svg",
      "/re.svg",
      "../public/androidstudio.svg",
    ],
    link: "https://play.google.com/store/apps/details?id=com.medical.my_medicos&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "Smart AutoClicker",
    des: "Automate actions depending on what is displayed on your screen.",
    img: "../public/mnd2.svg",
    iconLists: [
      "../public/androidstudio.svg",
      "../public/swift.svg",
      "/re.svg",
      "../public/firebase.svg",
      "/c.svg",
    ],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Fixture",
    des: "A Multi Brand Ecommerce Website",
    img: "../public/mnd3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://new-ecom-pi.vercel.app/",
  },
  {
    id: 4,
    title: "DevLabs",
    des: "A Online Course Maker Website for Coachings & Tutors",
    img: "../public/mnd5.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Devansh1910/Devlabs_Updated",
  },
];

export const testimonials = [
  {
    quote:
      "Choosing ReduxCorporation was the best decision for our digital transformation. Their team developed a robust e-commerce website and mobile application that have truly elevated our customer interaction. The dedication and creativity ReduxCorporation brought to our project were outstanding.",
    name: "Emma Johnson",
    title: "CEO, GreenTech Innovations",
  },
  {
    quote:
      "ReduxCorporation's approach to software solutions is unparalleled. They delivered custom software that perfectly fits our needs, enhancing our operational efficiency. Their team's technical expertise and professional management impressed us throughout the project",
    name: "Lucas Smith",
    title: "CTO, Advanced Robotics Ltd.",
  },
  {
    quote:
      "As a startup, we were looking for a cost-effective yet impactful design solution, and ReduxCorporation exceeded our expectations. Their design team is top-notch, delivering fresh and engaging graphics that have significantly boosted our branding.",
    name: "Mia Zhang",
    title: "Founder, EcoWear Clothing",
  },
  {
    quote:
      "ReduxCorporation has been instrumental in revamping our IT infrastructure. Their comprehensive IT solutions have streamlined our processes, reduced costs, and increased security. We couldn't be happier with the results and the continuous support they provide.",
    name: "Daniel Carter",
    title: "Director of IT, HealthPlus Corp",
  },
  {
    quote:
      "Working with ReduxCorporation has been a transformative experience for our organization. Their team not only developed a state-of-the-art website that has significantly improved our online presence but also integrated seamless functionalities that enhance user experience and operational efficiency. Their commitment to excellence and customer satisfaction is truly remarkable.",
    name: "Sophia Lee",
    title: "Marketing Director, Luxe Interiors Ltd",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc: "At ReduxCorporation, we specialize in crafting bespoke websites that drive success. Our web development team ensures your site is not only visually appealing but also functionally robust, optimizing for performance and user engagement.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Application Development",
    desc: "Transform your ideas into reality with our application development services. We build custom mobile and desktop applications that deliver seamless user experiences, leveraging the latest technologies to ensure compatibility and scalability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Development",
    desc: "Our software development services cater to businesses looking to streamline operations and increase efficiency. From system analysis to design and implementation, we provide comprehensive solutions that are tailored to meet your specific business needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Designing and UI/UX Services",
    desc: "Elevate your brand with our design and UI/UX services. Our creative team designs visually stunning and user-friendly interfaces, focusing on creating engaging user experiences that foster brand loyalty and conversion.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
