import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";

import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <Reveal>
          <div className="mb-8 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              Get to Know Me
            </span>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed opacity-60 md:text-base">
              A little about my journey, mindset, and passion for building
              modern web applications.
            </p>
          </div>
        </Reveal>

        {/* Main About Card */}
        <Reveal delay={0.1}>
          <div
            className="
              group relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.025]
              p-6
              backdrop-blur-xl
              transition-all duration-500
              hover:border-blue-400/20
              md:p-10
            "
          >
            {/* Card Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-blue-500/10
                blur-[100px]
              "
            />

            {/* Main Content */}
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              {/* Left Content */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-400/20
                      bg-blue-400/10
                      text-blue-400
                    "
                  >
                    <FaCode />
                  </div>

                  <h3 className="text-2xl font-bold">My Journey</h3>
                </div>

                <p
                  className="
                    text-sm
                    leading-7
                    opacity-65
                    md:text-base
                    md:leading-8
                  "
                >
                  I’m a passionate{" "}
                  <span className="font-semibold text-white">
                    Full Stack Developer
                  </span>{" "}
                  focused on building modern, responsive, and user-friendly web
                  applications. I enjoy turning ideas and real-world problems
                  into clean, scalable, and maintainable solutions.
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    opacity-65
                    md:text-base
                    md:leading-8
                  "
                >
                  My current stack includes{" "}
                  <span className="font-semibold text-white">
                    TypeScript, Next.js, Node.js, PostgreSQL, and Prisma
                  </span>
                  . I’m continuously improving my skills and exploring{" "}
                  <span className="font-semibold text-blue-400">
                    AWS, Docker, NGINX, and AI-Integrated RAG & LLM Systems
                  </span>{" "}
                  to build more powerful and production-ready applications.
                </p>

                {/* Tech Stack Highlight */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "PostgreSQL",
                    "Prisma",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-blue-400/15
                        bg-blue-400/5
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {/* What I Do */}
                <Reveal delay={0.2}>
                  <div
                    className="
                      group/card
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-400/30
                      hover:bg-blue-400/[0.03]
                    "
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          bg-blue-400/10
                          text-blue-400
                          transition-transform
                          group-hover/card:scale-105
                        "
                      >
                        <FaLayerGroup />
                      </div>

                      <h4 className="text-lg font-semibold">What I Do</h4>
                    </div>

                    <p className="text-sm leading-6 opacity-50">
                      Build responsive frontend interfaces, scalable backend
                      APIs, secure authentication systems, and full-stack
                      applications.
                    </p>
                  </div>
                </Reveal>

                {/* My Mindset */}
                <Reveal delay={0.3}>
                  <div
                    className="
                      group/card
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.02]
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-400/30
                      hover:bg-blue-400/[0.03]
                    "
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-lg
                          bg-cyan-400/10
                          text-cyan-400
                          transition-transform
                          group-hover/card:scale-105
                        "
                      >
                        <FaLightbulb />
                      </div>

                      <h4 className="text-lg font-semibold">My Mindset</h4>
                    </div>

                    <p className="text-sm leading-6 opacity-50">
                      I believe in continuous learning, writing clean code,
                      solving problems efficiently, and improving through
                      real-world projects.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Bottom Highlights */}
            <div
              className="
                relative
                mt-10
                grid
                gap-4
                border-t
                border-white/10
                pt-8
                sm:grid-cols-3
              "
            >
              {/* Full Stack */}
              <Reveal delay={0.2}>
                <div
                  className="
                    group/highlight
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/30
                    hover:bg-blue-400/[0.03]
                  "
                >
                  <FaCode
                    className="
                      mx-auto
                      mb-3
                      text-xl
                      text-blue-400
                      transition-transform
                      group-hover/highlight:scale-110
                    "
                  />

                  <h4 className="text-lg font-semibold text-blue-400">
                    Full Stack
                  </h4>

                  <p className="mt-1 text-xs opacity-50">
                    Frontend & Backend Development
                  </p>
                </div>
              </Reveal>

              {/* Problem Solver */}
              <Reveal delay={0.3}>
                <div
                  className="
                    group/highlight
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.03]
                  "
                >
                  <FaLightbulb
                    className="
                      mx-auto
                      mb-3
                      text-xl
                      text-cyan-400
                      transition-transform
                      group-hover/highlight:scale-110
                    "
                  />

                  <h4 className="text-lg font-semibold text-cyan-400">
                    Problem Solver
                  </h4>

                  <p className="mt-1 text-xs opacity-50">
                    Turning ideas into solutions
                  </p>
                </div>
              </Reveal>

              {/* Always Learning */}
              <Reveal delay={0.4}>
                <div
                  className="
                    group/highlight
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-400/30
                    hover:bg-blue-400/[0.03]
                  "
                >
                  <FaRocket
                    className="
                      mx-auto
                      mb-3
                      text-xl
                      text-blue-400
                      transition-transform
                      group-hover/highlight:scale-110
                    "
                  />

                  <h4 className="text-lg font-semibold text-blue-400">
                    Always Learning
                  </h4>

                  <p className="mt-1 text-xs opacity-50">
                    Exploring modern technologies
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;