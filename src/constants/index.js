import {
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
    python,
    c,
    school,
    Prodigy,
    drill_fit,
    sport_web,
    akshay,
    Samman,
    Kuldeep,
    Kanban,
    firebase,
    chat_bot
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React JS Developer",
        icon: reactjs,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
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
        name: "git",
        icon: git,
    },
    {
        name: "C++",
        icon: c,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name:"firebase",
        icon: firebase,
    }
];

const experiences = [
    {
        title: "Schooling",
        company_name: "Vidhya Niketan High Secondary School",
        icon: school,
        iconBg: "#383E56",
        date: "march 2018 - feb 2019",
        points: [
            "I have done My 12th in PCM subject and get 78% in RBSE(Rajsthan) Board",
            "I also used to participate in different functions and learnt leadership skiil",
            "also completing in 10th from here and get 85% from RBSE(Rajasthan) Board",
            ""
        ],
    },
    {
        title: "Web Developer",
        company_name: "Prodigy",
        icon: Prodigy,
        iconBg: "#383E56",
        date: "15 may 2024 - 20 Jun 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",

        ],
    },

];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Shubham proved me wrong.",
        name: "Samman Saini",
        designation: "CFO",
        company: "Acme Co",
        image: Samman,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like shubham does.",
        name: "Akshay Patidar",
        designation: "COO",
        company: "DEF Corp",
        image: akshay,
    },
    {
        testimonial:
            "After Malviya ji optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Kuldeep gurjar",
        designation: "CTO",
        company: "456 Enterprises",
        image: Kuldeep,
    },
];

const projects = [
    {
        name: "Drill_FIT",
        description:
            "Web-based platform that allows users to explore, join, and manage their fitness journey, offering a range of gym services, personal training, and wellness programs for a healthier lifestyle.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "java-script",
                color: "pink-text-gradient",
            },
        ],
        image: drill_fit,
        source_code_link: "https://github.com/Shubhammal/Drill_FIT_",
    },
    {
        name: "Sport_web",
        description:
            "Discover Sidcup Family Golf: Your go-to online hub for all things golf. From cutting-edge facilities like our Toptracer Range to fun-filled Adventure Golf, and exciting events, we've got everything you need to elevate your game. Join us and start your golfing journey today!",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: sport_web,
        source_code_link: "https://github.com/Shubhammal/Sports_",
    },
    {
        name: "Kanban board",
        description:
            "Streamline your workflow with our Kanban board: Easily manage tasks, visualize progress, and boost productivity with our user-friendly tool.",
        tags: [
            {
                name: "react + vite",
                color: "blue-text-gradient",
            },
            {
                name: "javacript",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind-css",
                color: "pink-text-gradient",
            },
        ],
        image: Kanban,
        source_code_link: "https://github.com/Shubhammal/Kanban_board",
    },
    {
        name: "Chat=Bot App",
        description:
            "Developed a responsive and user-friendly chatbot application, enabling seamless communication with real-time messaging features, Firebase integration for backend, and ReactJS for dynamic UI.",
        tags: [
            {
                name: "react + vite",
                color: "blue-text-gradient",
            },
            {
                name: "javacript",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind-css",
                color: "pink-text-gradient",
            },
        ],
        image: chat_bot,
        source_code_link: "https://github.com/Shubhammal/Simple_ChatApp",
    },
];

export { services, technologies, experiences, testimonials, projects };