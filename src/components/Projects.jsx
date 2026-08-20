import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import Reveal from "./Reveal";

const Projects = ({ projects }) => {
  const orderedProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">

        {/* Section Header */}
        <Reveal>
          <div className="mb-8 text-center">

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              My Work
            </span>

            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed opacity-60 md:text-base">
              A collection of projects I have built using modern web
              technologies and development practices.
            </p>

          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {orderedProjects.map((project, index) => (
            <Reveal
              key={project._id}
              delay={index * 0.08}
            >
              <div
                className="
                  group relative h-full overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.025]
                  backdrop-blur-xl
                  shadow-lg
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-blue-400/40
                  hover:shadow-blue-500/10
                "
              >

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={project.photo}
                    alt={project.name}
                    className="
                      h-full w-full
                      object-cover object-center
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Project Label */}
                  <div
                    className="
                      absolute left-4 top-4
                      rounded-full
                      border border-white/10
                      bg-black/40
                      px-3 py-1
                      text-xs font-medium
                      text-white/80
                      backdrop-blur-md
                    "
                  >
                    Project
                  </div>

                </div>

                {/* Project Content */}
                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">

                    <h3
                      className="
                        truncate
                        text-lg font-bold
                        transition-colors duration-300
                        group-hover:text-blue-400
                        md:text-xl
                      "
                    >
                      {project.name}
                    </h3>

                    <span
                      className="
                        flex h-8 w-8 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/5
                        text-blue-400
                        transition-all duration-300
                        group-hover:bg-blue-400
                        group-hover:text-black
                      "
                    >
                      <FaArrowRight className="text-xs" />
                    </span>

                  </div>

                  {/* View Project */}
                  <Link
                    to={`/project/${project._id}`}
                    className="
                      mt-5
                      flex w-full
                      items-center justify-center gap-2
                      rounded-xl
                      border border-blue-400/20
                      bg-blue-400/5
                      py-2.5
                      text-sm font-semibold
                      text-blue-400
                      transition-all duration-300
                      hover:border-blue-400
                      hover:bg-blue-400
                      hover:text-black
                    "
                  >
                    View Project
                    <FaArrowRight className="text-xs" />
                  </Link>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;