import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Globe,
  Monitor,
  Layout,
  Server,
  Database,
  Code2,
} from "lucide-react";
import cyberImage from "../assets/projects/ethicalhackingcompany.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: <Globe className="w-10 h-10 text-[#00cea8]" />,
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-10 h-10 text-[#bf61ff]" />,
  },
  {
    title: "Desktop Applications",
    icon: <Monitor className="w-10 h-10 text-[#56ccf2]" />,
  },
  {
    title: "Full Stack Solutions",
    icon: <Layout className="w-10 h-10 text-[#ff61d2]" />,
  },
];

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "reactjs" },
      { name: "HTML 5", icon: "html" },
      { name: "CSS 3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", icon: "laravel" },
      { name: "Node JS", icon: "nodejs" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Mobile & Desktop",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Electron", icon: "electron" },
      { name: "Tauri", icon: "tauri" },
    ],
  },
];

const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "AgroAlim POS System",
    icon: <Monitor />,
    iconBg: "#383E56",
    date: "Enterprise Project",
    points: [
      "Built cross-platform web and desktop applications for wholesale inventory management.",
      "Integrated complex backend APIs with Firebase for real-time data synchronization.",
      "Automated critical business workflows, improving efficiency for enterprise-level operations.",
      "Optimized system performance for handling large-scale POS transactions.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Wholesale Marketplace Platform",
    icon: <Layout />,
    iconBg: "#E6DEDD",
    date: "E-commerce Project",
    points: [
      "Developed a robust web platform using React and Laravel for wholesale product distribution.",
      "Created a high-performance mobile application using Flutter for remote buyers.",
      "Implemented seamless payment gateways and order tracking systems.",
      "Ensured multi-platform synchronization and high-availability architecture.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Self-Employed",
    icon: <Code2 />,
    iconBg: "#383E56",
    date: "Past - Present",
    points: [
      "Developed numerous interactive web applications and portfolio experiments using Three.js.",
      "Built custom desktop applications for niche business needs using Electron and Tauri.",
      "Collaborated with clients to deliver high-performance, modern software solutions.",
    ],
  },
];

const projects = [
  {
    name: "AgroAlim POS System",
    description:
      "A complete enterprise wholesale management suite featuring a web dashboard, desktop POS application, and mobile stock tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "electron", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: "", // Assets will be linked or placeholders used
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Wholesale Marketplace",
    description:
      "A multi-platform marketplace connecting wholesale distributors with remote buyers, featuring real-time inventory and Flutter mobile app.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "flutter", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Portfolio Experiments",
    description:
      "A collection of interactive 3D web apps and Three.js demos showcasing advanced animation and UI techniques.",
    tags: [
      { name: "three.js", color: "blue-text-gradient" },
      { name: "framer-motion", color: "green-text-gradient" },
      { name: "react-three-fiber", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "BDL Banque Sponsoring",
    description: "Financial sponsorship management system.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Pet Shop Ecosystem",
    description: "Complete pet shop management and sales platform.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "jquery", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Cybersecurity Website",
    description: "Professional landing page for cybersecurity services.",
    tags: [
      { name: "php-mvc", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: cyberImage,
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Clinics & Hospitals Platform",
    description: "Healthcare management system for medical facilities.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "vuejs", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "School Events App",
    description: "Event coordination mobile app for students.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Interactive 3D Portfolio",
    description: "Advanced 3D portfolio showcase with animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Modern Landing Pages",
    description: "Collection of high-converting marketing pages.",
    tags: [
      { name: "php", color: "blue-text-gradient" },
      { name: "bootstrap", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Furniture Hardware Store",
    description: "Inventory and sales for hardware retailers.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "vuejs", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Ecommerce Hub",
    description: "Scalable e-commerce platform with full checkout.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Chat AI Tool",
    description: "AI conversational interface for smart interactions.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "openai-api", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Tech Company Website",
    description: "Corporate portal for a technology startup.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Advanced Messaging App",
    description: "Real-time chat platform with messaging features.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "pusher", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Multi-Vendor Marketplace",
    description: "SaaS platform for multiple sellers and storefronts.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "stripe", color: "pink-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
  {
    name: "Restaurant Website",
    description: "Digital menu and reservation system.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "vuejs", color: "green-text-gradient" },
    ],
    image: "",
    source_code_link: "https://github.com/",
    live_demo_link: "https://demo.com/",
  },
];

export { services, skills, experiences, projects };
