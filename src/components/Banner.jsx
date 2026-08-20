import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

import banner from "../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";
import myPic from "../assets/my-pic.png";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "JWT",
  "Git",
  "GitHub",
  "Firebase",
  "Docker",
  "NGINX",
  "AWS",
  "AI Integration",
];

const Banner = () => {
  // Duplicate skills for seamless infinite slider
  const sliderSkills = [...skills, ...skills];

  return (
    <section
      id="home"
      className="relative min-h-[650px] overflow-hidden lg:min-h-[680px]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= BACKGROUND ================= */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/85" />

      {/* Blue Glow */}
      <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

      {/* Cyan Glow */}
      <div className="absolute -bottom-20 -left-40 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-3xl" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-6xl items-center px-6 py-20 lg:min-h-[680px]">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-14 lg:flex-row lg:gap-16">
          
          {/* ================= LEFT CONTENT ================= */}

          <div className="w-full max-w-2xl text-center lg:text-left">

            {/* Greeting */}
            <p className="mb-2 text-lg font-medium text-slate-300 lg:text-xl">
              Hi, I'm
            </p>

            {/* Name */}
            <h1 className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Golam{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Kibria
              </span>
            </h1>

            {/* Title */}
            <h2 className="mb-5 text-xl font-semibold text-slate-200 sm:text-2xl">
              Full Stack Developer
            </h2>

            {/* Description */}
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg lg:leading-8">
              I’m a Full Stack Developer focused on building modern,
              scalable, and user-friendly web applications with{" "}
              <span className="font-semibold text-white">
                TypeScript, Next.js, Node.js, PostgreSQL, and Prisma
              </span>
              . I enjoy turning ideas into clean and practical digital
              solutions.
            </p>

            {/* Currently Learning */}
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Currently exploring{" "}
              <span className="font-semibold text-blue-400">
                Docker, AWS, and AI-Integrated RAG & LLM Systems
              </span>{" "}
              to expand my skills and build better solutions.
            </p>

            {/* ================= SKILL SLIDER ================= */}

            <div className="mt-7 w-full overflow-hidden">

              {/* Slider Label */}
              <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies I Work With
                </span>
              </div>

              {/* Slider */}
              <div className="relative overflow-hidden">

                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-slate-950 to-transparent" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-slate-950 to-transparent" />

                {/* Moving Content */}
                <div className="flex w-max gap-3 animate-skill-slide hover:[animation-play-state:paused]">
                  {sliderSkills.map((skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="
                        whitespace-nowrap
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-4 py-2
                        text-sm
                        font-medium
                        text-slate-300
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:border-blue-400/40
                        hover:bg-blue-400/10
                        hover:text-blue-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= ACTIONS ================= */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

              {/* View Projects */}
              <a
                href="#projects"
                className="
                  btn
                  border-0
                  bg-blue-500
                  px-6
                  text-white
                  shadow-lg
                  shadow-blue-500/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-blue-600
                  hover:shadow-blue-500/30
                "
              >
                View Projects
                <FaArrowRight />
              </a>

              {/* Download Resume */}
              <a
                href="/golam-kibria-resume.pdf"
                download="golam-kibria-resume.pdf"
                className="
                  btn
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/40
                  hover:bg-white/10
                "
              >
                Download Resume
                <FaFileDownload className="text-lg" />
              </a>

              {/* Social Icons */}
              <div className="ml-1 flex items-center gap-2">

                {/* GitHub */}
                <a
                  href="https://github.com/kibriarobin"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    text-slate-200
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                    hover:text-blue-400
                  "
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/golam-kibria97"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    text-slate-200
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                    hover:text-blue-400
                  "
                >
                  <FaLinkedin className="text-xl" />
                </a>

              </div>
            </div>
          </div>

          {/* ================= RIGHT PROFILE ================= */}

          <div className="relative flex shrink-0 items-center justify-center">

            {/* Outer Glow */}
            <div
              className="
                absolute
                h-[280px]
                w-[280px]
                rounded-full
                bg-blue-500/20
                blur-3xl
                sm:h-[330px]
                sm:w-[330px]
                lg:h-[390px]
                lg:w-[390px]
              "
            />

            {/* Decorative Ring */}
            <div
              className="
                absolute
                h-[285px]
                w-[285px]
                rounded-full
                border
                border-blue-400/20
                sm:h-[335px]
                sm:w-[335px]
                lg:h-[395px]
                lg:w-[395px]
              "
            />

            {/* Profile Image */}
            <div
              className="
                relative
                h-[250px]
                w-[250px]
                overflow-hidden
                rounded-full
                border-2
                border-blue-400/70
                bg-slate-900
                shadow-2xl
                shadow-blue-500/20
                transition-transform
                duration-500
                hover:scale-[1.02]
                sm:h-[290px]
                sm:w-[290px]
                lg:h-[340px]
                lg:w-[340px]
              "
            >
              <img
                src={myPic}
                alt="Golam Kibria"
                className="h-full w-full object-cover object-top"
              />

              {/* Image Ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute
                -bottom-2
                -left-2
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-slate-900/90
                px-4
                py-2
                text-sm
                font-medium
                text-slate-200
                shadow-xl
                backdrop-blur-md
                sm:bottom-2
                sm:-left-8
              "
            >
              <HiOutlineSparkles className="text-lg text-cyan-400" />
              Building with passion
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;