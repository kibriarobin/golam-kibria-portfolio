import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  RiTailwindCssFill,
  RiReactjsLine,
  RiNextjsFill,
} from "react-icons/ri";

import { DiNodejs } from "react-icons/di";

import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiNginx,
  SiJsonwebtokens,
  SiOpenai,
  SiRedis,
  SiPassport,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io";

import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive and user-friendly interfaces",

    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <RiReactjsLine />, name: "React.js" },
      { icon: <RiNextjsFill />, name: "Next.js" },
    ],
  },

  {
    title: "Backend Development",
    description:
      "Developing secure, scalable and maintainable backend systems",

    skills: [
      { icon: <DiNodejs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
    ],
  },

  {
    title: "Database & Caching",
    description:
      "Working with relational, NoSQL and high-performance data stores",

    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiPrisma />, name: "Prisma ORM" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },

  {
    title: "Authentication & Services",
    description:
      "Implementing secure authentication and third-party services",

    skills: [
      { icon: <SiJsonwebtokens />, name: "JWT" },
      { icon: <SiPassport />, name: "Passport.js" },
      { icon: <SiFirebase />, name: "Firebase Auth" },
      {
        icon: (
          <span className="text-sm font-bold tracking-tight">
            G
          </span>
        ),
        name: "Google OAuth",
      },
    ],
  },

  {
    title: "Tools & Services",
    description:
      "Tools and services I use for development and collaboration",

    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
    ],
  },

  {
    title: "Currently Learning",
    description:
      "Expanding my knowledge with modern technologies",

    learning: true,

    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiNginx />, name: "NGINX" },
      {
        icon: (
          <span className="text-sm font-bold tracking-tight">
            AWS
          </span>
        ),
        name: "AWS",
      },
      { icon: <SiOpenai />, name: "AI Integration" },
    ],
  },
];

const MySkills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">

        {/* Section Header */}
        <Reveal>
          <div className="mb-8 text-center md:mb-16">

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              My Expertise
            </span>

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Technologies and tools I use to build modern, responsive,
              secure and scalable web applications.
            </p>

          </div>
        </Reveal>

        {/* Skill Categories */}
        <div className="space-y-5">

          {skillCategories.map((category, categoryIndex) => (
            <Reveal
              key={category.title}
              delay={categoryIndex * 0.08}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
                  category.learning
                    ? "border-orange-400/20 bg-orange-400/[0.02] hover:border-orange-400/40"
                    : "border-white/10 bg-white/[0.025] hover:border-blue-400/30"
                }`}
              >

                {/* Hover Glow */}
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                    category.learning
                      ? "bg-orange-400/10"
                      : "bg-blue-500/10"
                  }`}
                />

                <div className="relative p-5 md:p-7">

                  {/* Category Header */}
                  <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                    <div>
                      <div className="flex flex-wrap items-center gap-3">

                        <span
                          className={`h-6 w-1 rounded-full ${
                            category.learning
                              ? "bg-orange-400"
                              : "bg-gradient-to-b from-blue-400 to-cyan-400"
                          }`}
                        />

                        <h3 className="text-lg font-semibold text-white md:text-xl">
                          {category.title}
                        </h3>

                        {category.learning && (
                          <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-2.5 py-1 text-[10px] font-semibold text-orange-400">
                            Learning
                          </span>
                        )}

                      </div>

                      <p className="ml-4 mt-2 text-xs text-slate-500 md:text-sm">
                        {category.description}
                      </p>
                    </div>

                    <span
                      className={`text-xs ${
                        category.learning
                          ? "text-orange-400/60"
                          : "text-slate-600"
                      }`}
                    >
                      {category.skills.length}{" "}
                      {category.skills.length === 1
                        ? "Skill"
                        : "Skills"}
                    </span>

                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">

                    {category.skills.map((skill, skillIndex) => (
                      <Reveal
                        key={skill.name}
                        delay={0.05 + skillIndex * 0.05}
                      >
                        <div
                          className={`flex cursor-default items-center gap-2.5 rounded-xl border px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 ${
                            category.learning
                              ? "border-orange-400/15 bg-orange-400/[0.03] hover:border-orange-400/40 hover:bg-orange-400/[0.08]"
                              : "border-white/10 bg-white/[0.03] hover:border-blue-400/40 hover:bg-blue-400/[0.08]"
                          }`}
                        >

                          <span
                            className={`text-xl ${
                              category.learning
                                ? "text-orange-400"
                                : "text-blue-400"
                            }`}
                          >
                            {skill.icon}
                          </span>

                          <span className="whitespace-nowrap text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>

                        </div>
                      </Reveal>
                    ))}

                  </div>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MySkills;