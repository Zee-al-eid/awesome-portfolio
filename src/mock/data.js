import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Zee-al-eid', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zee-al-eid',
  subtitle: "I'm A Full Stack Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Parallax Portfolio',
    info: '',
    info2: '',
    url: 'https://parallax-portfolio.netlify.app',
    repo: 'https://github.com/Zee-al-eid/parallax-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Gradient Generator',
    info: '',
    info2: '',
    url: 'https://zee-al-eid.github.io/gradient-generator/',
    repo: 'https://github.com/Zee-al-eid/gradient-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Reviews Slider',
    info: '',
    info2: '',
    url: 'https://reviews-slider.netlify.app/',
    repo: 'https://github.com/Zee-al-eid/reviews-slider ', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'realzeealeid@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/zeealeid_ahmed',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/zee-al-eid',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/zee-al-eid-ahmed-7544621ba',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Zee-al-eid/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
