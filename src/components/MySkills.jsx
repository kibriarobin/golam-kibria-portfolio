import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb, SiExpress, SiFirebase, SiTypescript, SiPostgresql, SiPrisma, SiDocker, SiNginx, SiJsonwebtokens, SiOpenai } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";


const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { icon: <FaHtml5 className="text-4xl" />, name: "HTML5" },
            { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3" },
            { icon: <RiTailwindCssFill className="text-4xl" />, name: "Tailwind CSS" },
            { icon: <IoLogoJavascript className="text-4xl" />, name: "JavaScript" },
            { icon: <SiTypescript className="text-4xl" />, name: "TypeScript" },
            { icon: <RiReactjsLine className="text-4xl" />, name: "React.js" },
            { icon: <RiNextjsFill className="text-4xl" />, name: "Next.js" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { icon: <DiNodejs className="text-4xl" />, name: "Node.js" },
            { icon: <SiExpress className="text-4xl" />, name: "Express.js" },
        ]
    },
    {
        title: "Database",
        skills: [
            { icon: <SiMongodb className="text-4xl" />, name: "MongoDB" },
            { icon: <SiPostgresql className="text-4xl" />, name: "PostgreSQL" },
            { icon: <SiPrisma className="text-4xl" />, name: "Prisma ORM" },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { icon: <FaGitAlt className="text-4xl" />, name: "Git" },
            { icon: <FaGithub className="text-4xl" />, name: "GitHub" },
            { icon: <SiFirebase className="text-4xl" />, name: "Firebase" },
            { icon: <SiJsonwebtokens className="text-4xl" />, name: "JWT Auth" },
            { icon: <SiDocker className="text-4xl" />, name: "Docker", learning: true },
            { icon: <SiNginx className="text-4xl" />, name: "NGINX", learning: true },
            { icon: <SiOpenai className="text-4xl" />, name: "AI Integration", learning: true },
        ]
    },
];

const MySkills = () => {
    return (
        <div className="my-20 max-w-7xl mx-auto px-5">
            <h3 id="skills" className="text-3xl font-bold text-center mb-10">Technical Skills</h3>

            <div className="space-y-10">
                {
                    skillCategories.map(category => (
                        <div key={category.title}>
                            <h4 className="text-xl font-semibold mb-5 text-center">
                                {category.title}
                            </h4>
                            <div className="flex flex-wrap justify-center items-center gap-6">
                                {
                                    category.skills.map(skill => (
                                        <div
                                            key={skill.name}
                                            className={`relative p-3 rounded-md flex flex-col items-center gap-2 w-24
                                                ${skill.learning
                                                    ? "border-2 border-dashed border-orange-400"
                                                    : "border-2 border-neutral-400"}`}
                                        >
                                            {skill.learning && (
                                                <span className="absolute -top-2.5 px-1.5 text-[9px] font-semibold bg-orange-400 text-black rounded-full">
                                                    Learning
                                                </span>
                                            )}
                                            {skill.icon}
                                            <span className="text-xs text-center">{skill.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MySkills;