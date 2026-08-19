import { FaCode, FaLightbulb, FaRocket, FaLayerGroup } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get to Know Me
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Me
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base opacity-60 leading-relaxed">
            A little about my journey, mindset, and passion for building modern
            web applications.
          </p>
        </div>

        {/* Main About Card */}
        <div
          className="
            group relative
            overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/[0.025]
            backdrop-blur-xl
            p-6 md:p-10
            transition-all duration-500
            hover:border-blue-400/20
          "
        >
          {/* Card Glow */}
          <div
            className="
            absolute
            -top-32
            -right-32
            w-80 h-80
            bg-blue-500/10
            blur-[100px]
            rounded-full
            pointer-events-none
          "
          />

          {/* Main Content */}
          <div className="relative grid lg:grid-cols-[1.3fr_0.7fr] gap-10">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                  w-10 h-10
                  rounded-xl
                  flex items-center justify-center
                  bg-blue-400/10
                  border border-blue-400/20
                  text-blue-400
                "
                >
                  <FaCode />
                </div>

                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>

              <p
                className="
                text-sm md:text-base
                leading-7 md:leading-8
                opacity-65
              "
              >
                I’m a passionate{" "}
                <span className="font-semibold text-white">
                  Full Stack Developer
                </span>{" "}
                focused on building modern, responsive, and user-friendly web
                applications. I enjoy turning ideas and real-world problems into
                clean, scalable, and maintainable solutions.
              </p>

              <p
                className="
                mt-5
                text-sm md:text-base
                leading-7 md:leading-8
                opacity-65
              "
              >
                My current stack includes{" "}
                <span className="font-semibold text-white">
                  TypeScript, Next.js, Node.js, PostgreSQL, and Prisma
                </span>
                . I’m continuously improving my skills and exploring{" "}
                <span className="font-semibold text-blue-400">
                  Docker, NGINX, and AI integration
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
                      px-3 py-1.5
                      rounded-full
                      border border-blue-400/15
                      bg-blue-400/5
                      text-blue-400
                      text-xs font-medium
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* What I Do */}
              <div
                className="
                  group/card
                  p-5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:bg-blue-400/[0.03]
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="
                    w-10 h-10
                    rounded-lg
                    flex items-center justify-center
                    bg-blue-400/10
                    text-blue-400
                    group-hover/card:scale-105
                    transition-transform
                  "
                  >
                    <FaLayerGroup />
                  </div>

                  <h4 className="text-lg font-semibold">What I Do</h4>
                </div>

                <p className="text-sm leading-6 opacity-50">
                  Build responsive frontend interfaces, scalable backend APIs,
                  secure authentication systems, and full-stack applications.
                </p>
              </div>

              {/* My Mindset */}
              <div
                className="
                  group/card
                  p-5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:bg-blue-400/[0.03]
                "
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="
                    w-10 h-10
                    rounded-lg
                    flex items-center justify-center
                    bg-cyan-400/10
                    text-cyan-400
                    group-hover/card:scale-105
                    transition-transform
                  "
                  >
                    <FaLightbulb />
                  </div>

                  <h4 className="text-lg font-semibold">My Mindset</h4>
                </div>

                <p className="text-sm leading-6 opacity-50">
                  I believe in continuous learning, writing clean code, solving
                  problems efficiently, and improving through real-world
                  projects.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Highlights */}
          <div
            className="
            relative
            mt-10
            pt-8
            border-t border-white/10
            grid sm:grid-cols-3
            gap-4
          "
          >
            {/* Full Stack */}
            <div
              className="
                group/highlight
                p-5
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-center
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-400/30
                hover:bg-blue-400/[0.03]
              "
            >
              <FaCode
                className="
                mx-auto mb-3
                text-blue-400
                text-xl
                group-hover/highlight:scale-110
                transition-transform
              "
              />

              <h4 className="text-lg font-semibold text-blue-400">
                Full Stack
              </h4>

              <p className="mt-1 text-xs opacity-50">
                Frontend & Backend Development
              </p>
            </div>

            {/* Problem Solver */}
            <div
              className="
                group/highlight
                p-5
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-center
                transition-all duration-300
                hover:-translate-y-1
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.03]
              "
            >
              <FaLightbulb
                className="
                mx-auto mb-3
                text-cyan-400
                text-xl
                group-hover/highlight:scale-110
                transition-transform
              "
              />

              <h4 className="text-lg font-semibold text-cyan-400">
                Problem Solver
              </h4>

              <p className="mt-1 text-xs opacity-50">
                Turning ideas into solutions
              </p>
            </div>

            {/* Always Learning */}
            <div
              className="
                group/highlight
                p-5
                rounded-xl
                border border-white/10
                bg-white/[0.02]
                text-center
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-400/30
                hover:bg-blue-400/[0.03]
              "
            >
              <FaRocket
                className="
                mx-auto mb-3
                text-blue-400
                text-xl
                group-hover/highlight:scale-110
                transition-transform
              "
              />

              <h4 className="text-lg font-semibold text-blue-400">
                Always Learning
              </h4>

              <p className="mt-1 text-xs opacity-50">
                Exploring modern technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
