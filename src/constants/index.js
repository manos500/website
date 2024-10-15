import {
  unipi_logo,
  united_kingdom,
  france,
  github,
  instagram,
  twitter,
} from "../assets";

const navLinks = [
  /*
  {
    id: "about",
    title: "About",
  },
  */
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const experiences = [
  {
    title: "Master in English",
    company_name: "C2 (ECPE)-University of Michigan",
    icon: united_kingdom,
    iconBg: "#E6DEDD",
    date: "2013-2019",
    
  },
  {
    title: "Master in Frace",
    company_name: "B2 (DELF)-Ministere de l'Education Nationale",
    icon: france,
    iconBg: "#E6DEDD",
    date: "2015-2019",
   
  },
  {
    title: "Computer Science",
    company_name: "Pireus - University",
    icon: unipi_logo,
    iconBg: "#E6DEDD",
    date: "2021-now",
    
  },
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/manos_nik5/",
  },
  {
    id: "social-media-2",
    icon: github,
    link: "https://github.com/manos500",
  },
];



export {socialMedia, experiences, navLinks };