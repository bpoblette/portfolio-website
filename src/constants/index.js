import {  } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    ruby,
    vue,
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: ruby,
        name: "Ruby",
        type: "Backend",
    },
    {
        imageUrl: vue,
        name: "Vue",
        type: "Frontend"
    },
];

export const experiences = [
    {
        title: "Full-Stack Developer (Company-Sponsored Senior Design Project)",
        company_name: "Two Barrels",
        icon: html,
        iconBg: "#accbe1",
        date: "September 2020 - April 2021",
        points: [
            "Designed and implemented the ATS database and recruiter analytics system using Ruby on Rails, integrating PostgreSQL and Redis, crafting optimized queries, and developing the backend for recruiter insights.",
            "Built the end-to-end interview scheduling workflow with Rails, including availability checks, automated email notifications via Sidekiq/Redis, and Zoom link generation through the Zoom API.",
            "Developed the frontend recruiter analytics dashboards using Vue.js, delivering clean UI components and visual data insights.",
            "Led a team of four to design and build an Applicant Tracking System, collaborating directly with company engineers and recruiters, gathering requirements, and running weekly scrums with stakeholders and advisors.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/bpoblette',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/brandon-poblette-088233292',
    }
];

// todo
export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
];