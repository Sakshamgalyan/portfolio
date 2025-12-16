import {
    SiNextdotjs,
    SiReact,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiRedux,
    SiFfmpeg,
    SiOpencv,
    SiPytorch,
} from "react-icons/si";

export const SKILLS = [
    { name: "Next.js", category: "Full Stack", icon: SiNextdotjs },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Express", category: "Backend", icon: SiExpress },
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
    { name: "Prisma", category: "Backend", icon: SiPrisma },
    { name: "Redux", category: "Frontend", icon: SiRedux },
    { name: "FFmpeg", category: "Tools", icon: SiFfmpeg },
    { name: "YOLOv8", category: "AI/ML", icon: SiOpencv },
    { name: "Deep Learning", category: "AI/ML", icon: SiPytorch },
];

export const PROJECTS = [
    {
        title: "Full Stack Admin Dashboard",
        description: "A comprehensive dashboard with role-based access control (RBAC), user management, and analytics.",
        tags: ["Next.js", "Express", "MongoDB", "Redux"],
        link: "https://school-dashboard-sigma-pied.vercel.app/", // User can fill this
    },
    {
        title: "Object Detection (YOLOv8)",
        description: "Real-time object detection system using the YOLOv8 architecture for high accuracy and speed.",
        tags: ["Python", "YOLOv8", "Deep Learning"],
        link: "https://github.com/Sakshamgalyan/Circlip-Detection",
    },
    {
        title: "Heart Disease Prediction",
        description: "Machine learning model to predict heart disease risk based on patient data.",
        tags: ["Python", "Scikit-learn", "ML"],
        link: "https://github.com/Sakshamgalyan/Heart-Disease-Prediction",
    },
];
