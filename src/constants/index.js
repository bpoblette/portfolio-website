import { } from "../assets/images";
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
    react,
    tailwindcss,
    ruby,
    vue,
    postgres,
    twobarrels,
    rubyonrails,
    aws,
    basketball,
    code,
    graph,
    dice,
    steam,
    love,
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
    {
        imageUrl: postgres,
        name: "Postgresql",
        type: "Database",
    },
    {
        imageUrl: rubyonrails,
        name: "Ruby on Rails",
        type: "Backend",
    },
    {
        imageUrl: aws,
        name: "Amazon Web Service",
        type: "Hosting"
    },
];

export const experiences = [
    {
        title: "Full-Stack Developer (Company-Sponsored Senior Design Project)",
        company_name: "Two Barrels",
        icon: twobarrels,
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
        iconUrl: basketball,
        theme: 'btn-back-red',
        name: 'NBA Winshares Predictor',
        description: 'Developed a machine learning algorithm which predicts the winshare based off several attributes.',
        link: 'https://github.com/bpoblette/NBA-WS-Predictor',
    },
    {
        iconUrl: code,
        theme: 'btn-back-green',
        name: 'MyPL',
        description: 'Created a fully functional programming language with a profiler to conduct performance analysis,',
        link: 'https://github.com/bpoblette/MyPL',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-blue',
        name: 'Multiplayer Yahtzee',
        description: 'Designed a full multiplayer yahtzee. Game configurations are changeable with an adaptable score card allowing for a true Yahtzee playing experience.',
        link: 'https://github.com/bpoblette/yahtzee',
    },
    {
        iconUrl: graph,
        theme: 'btn-back-pink',
        name: 'Nearest Neighbor Heuristic',
        description: 'Conducted performance analysis over nearest neighbor and a brute force algorithm.',
        link: 'https://github.com/bpoblette/nearest-neighbor-heuristics',
    },
    {
        iconUrl: steam,
        theme: 'btn-back-yellow',
        name: 'Steam Video Game Store Clone',
        description: 'Created a Steam video game store clone, allowing users to buy games and manage their library.',
        link: 'https://github.com/bpoblette/video-game-store',
    },
    {
        iconUrl: love,
        theme: 'btn-back-black',
        name: 'Girlfriend Website',
        description: 'Developed a cute web page for our 1 year anniversary.',
        link: 'https://github.com/bpoblette/GirlfriendWebsite',
    },
];