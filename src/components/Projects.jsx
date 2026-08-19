import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";

const Projects = ({ projects }) => {
  const orderedProjects = [...projects].reverse();

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            My Work
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base opacity-60 leading-relaxed">
            A collection of projects I have built using modern web
            technologies and development practices.
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {orderedProjects.map((project) => (
            <div
              key={project._id}
              className="
                group relative overflow-hidden
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
              <div className="relative overflow-hidden h-56">

                <img
                  src={project.photo}
                  alt={project.name}
                  className="
                    w-full h-full
                    object-cover object-center
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* Image Overlay */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                " />

                {/* Project Number */}
                <div className="
                  absolute top-4 left-4
                  px-3 py-1
                  rounded-full
                  bg-black/40
                  backdrop-blur-md
                  border border-white/10
                  text-xs font-medium
                  text-white/80
                ">
                  Project
                </div>

              </div>


              {/* Project Content */}
              <div className="p-5">

                <div className="flex items-center justify-between gap-3">

                  <h3 className="
                    text-lg md:text-xl
                    font-bold
                    truncate
                    group-hover:text-blue-400
                    transition-colors duration-300
                  ">
                    {project.name}
                  </h3>

                  <span className="
                    w-8 h-8
                    shrink-0
                    rounded-full
                    flex items-center justify-center
                    border border-white/10
                    bg-white/5
                    text-blue-400
                    transition-all duration-300
                    group-hover:bg-blue-400
                    group-hover:text-black
                  ">
                    <FaArrowRight className="text-xs" />
                  </span>

                </div>


                {/* View More */}
                <Link
                  to={`/project/${project._id}`}
                  className="
                    mt-5
                    flex items-center justify-center gap-2
                    w-full
                    py-2.5
                    rounded-xl
                    border border-blue-400/20
                    bg-blue-400/5
                    text-blue-400
                    text-sm font-semibold
                    transition-all duration-300
                    hover:bg-blue-400
                    hover:text-black
                    hover:border-blue-400
                  "
                >
                  View Project
                  <FaArrowRight className="text-xs" />
                </Link>

              </div>

            </div>
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