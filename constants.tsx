import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS = [
  {
    title: 'Ransomware Detection using ML',
    description: 'An ML-based project to detect whether a file has ransomware or is safe by using the file attributes.',
    image: 'ransomwareimg.png',
    tags: ['Machine Learning', 'Python', 'Data Analysis'],
    liveUrl: 'https://miniproject-3-i.onrender.com/',
    githubUrl: 'https://github.com/Batch-C8/Ransomware_Detection_using_ML',
  },
  {
    title: 'Treasure Of Ideas',
    description: 'Treasure of Ideas is an AI-powered, full-stack MERN platform where developers and students can share, discover, and collaborate on project ideas. It features a secure RESTful API, a high-performance React frontend, and a live AI generator to create unique concepts on demand.',
    image: 'treasureofideasimg.png',
    tags: [ 'React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Git'],
    liveUrl: 'https://treasure-of-ideas.netlify.app/',
    githubUrl: 'https://github.com/sahityasundara/Treasure-of-Ideas-deploy.git',
  },
  {
    title: 'Stock Portfolio Tracker',
    description: 'A modern stock portfolio tracker built with React, TypeScript, and Tailwind CSS. This responsive app allows users to manage their investments with live data and interactive charts. Its key feature is an integrated AI assistant, powered by Google Gemini, that provides insightful, on-demand analysis for any stock in the portfolio.',
    image: 'stockimg.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://stocks-portfolio-tracker.netlify.app/',
    githubUrl: 'https://github.com/sahityasundara/stock-portfolio-tracker.git',
  },
  {
    title: 'Info Hub',
    description: 'A MERN-based platform for students to stay updated on college events, programs, club selections, and campus activities.',
    image: 'infohubimg1.jpg',
    tags: [ 'React', 'Node.js','Express.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/sahityasundara/infohub',
  },
    {
    title: 'DORMEASE',
    description: 'A web app helpful for university hostel students to book rooms, view gym/mess/laundry timings, and submit complaints or feedback.',
    image: 'dormeaseimg.jpg',
    tags: ['Web App', 'Frontend', 'Backend'],
    liveUrl: 'https://sahityasundara.github.io/DormEase-Project/py4.html',
    githubUrl: 'https://github.com/sahityasundara/DormEase-Project.git',
  },
  
];

export const SKILL_CATEGORIES = [
    {
        title: 'Programming Languages',
        skills: 'Java, Python, C, Julia',
        icon: 'fas fa-code'
    },
    {
        title: 'Web Technologies',
        skills: 'HTML5, CSS3, React.js',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Backend & Frameworks',
        skills: 'Node.js, Express.js, Spring Boot',
        icon: 'fas fa-server'
    },
    {
        title: 'Database',
        skills: 'SQL, MongoDB',
        icon: 'fas fa-database'
    },
    {
        title: 'Machine Learning',
        skills: 'ML Algorithms, Data Analysis',
        icon: 'fas fa-brain'
    },
    {
        title: 'Tools & OS',
        skills: 'Microsoft Office Suite, Linux OS',
        icon: 'fas fa-tools'
    },
    {
        title: 'Data Structures',
        skills: 'Arrays, Stacks, Queues, Linked Lists, Trees',
        icon: 'fas fa-sitemap'
    }
];


export const SOCIAL_LINKS = {
    github: 'https://github.com/sahityasundara',
    linkedin: 'https://www.linkedin.com/in/sahitya-sundara-2822b4259/',
    twitter: '#',
};