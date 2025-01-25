export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Voweiro was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'voweiro expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about voweiro He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'voweiro was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Glitz - Summer school tech training',
        desc: ' Glitz is a dynamic platform that makes tech education fun for kids! With interactive lessons in coding, robotics, and more, young learners dive into the exciting world of technology.',
        subdesc:
            'Built with React, Tailwind CSS, JavaScript, Framer Motion, Glitz is designed to provide a seamless learning experience for children, ensuring both engagement and educational growth in a safe, kid-friendly environment',
        href: 'https://summercode.vercel.app/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/glitzlogo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Green Clean Nigeria ',
        desc: ' Green Clean is a pioneering environmental services company dedicated to promoting sustainability and eco-friendly practices. With a strong focus on environmental cleanliness and recycling, our mission is to provide innovative solutions that help reduce waste, conserve natural resources, and mitigate the impact of human activity on the planet.',
        subdesc:
            'Built with React, Tailwind CSS, JavaScript, Framer Motion, Glitz is designed to provide a seamless learning experience for children, ensuring both engagement and educational growth in a safe, kid-friendly environment',
        href: 'https://green-nigeria-beryl.vercel.app',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/glitzlogo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
 
 
    {
        title: 'SelfMed Hub - Health Management System & Online Pharmacy',
        desc: 'SelfMed Hub is an innovative healthcare platform that streamlines essential medical processes while also serving as an online pharmacy. It simplifies patient registration, appointment scheduling, medical record management, and provides an easy way for patients to browse and purchase medications online, ensuring a seamless healthcare experience.',
        subdesc:
            'With a focus on efficiency, SelfMed Hub integrates complex forms, SMS notifications, and online drug purchases, utilizing Next.js, Appwrite, Twilio, and Sentry to enhance both operational workflows and patient convenience.',
        href: 'https://pharmastore-frontend.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Javascript',
                path: 'assets/js.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
            {
                id: 5,
                name: 'GitHub',
                path: '/assets/github.png',
            },
        ],
    },
   
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'LexTech EcoSystem limited ',
        pos: 'IT Support',
        duration: '2023 - Present',
        title: "   Provided timely and effective assistance to clients resolving technical issues with legal tech products via phone, email, and remote access. Developed and maintained in-depth knowledge of legal tech solutions to accurately address client inquiries and deliver informed support. Facilitated client onboarding, training, and product feature guidance for optimal usage. Created and updated user guides, FAQs, and training materials to enhance client understanding.  Identified, analyzed, and resolved technical issues related to software functionality, user errors, and system integration. Gathered client feedback and collaborated with the development team to address recurring issues and inform product improvements. Maintained detailed records of client interact  ",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Sky IT',
        pos: 'Web Developer',
        duration: '2021 - 2023',
        title: "    Collaborated with stakeholders during development processes to confirm creative proposals and design best practices. Contributed to projects within Scrum project management environments. Transformed native applications into mobile-friendly products.Produced websites compatible with multiple browsers. ",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'HIIT',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Completed a series of projects focused on implementing user-centric design, accessibility standards, and cross-browser compatibility, contributing to a comprehensive portfolio showcasing effective UI solutions. Assisted in the IT Help Desk, providing technical support and troubleshooting for students and staff, enhancing system efficiency and response times. Actively participated in structured code reviews led by senior instructors, refining code for readability, maintainability, and alignment with industry standards. Built strong debugging and optimization skills by resolving UI-related issues, improving the performance and user experience of web applications.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];
