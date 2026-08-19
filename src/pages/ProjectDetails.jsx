import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();

  const project = projects.find((p) => p._id === parseInt(id));

  // Project Not Found
  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-red-400/20 bg-red-400/10">
            <span className="text-2xl text-red-400">!</span>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Project Not Found
          </h2>

          <p className="mt-3 text-sm text-slate-400">
            Sorry, the project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400"
          >
            <FaArrowLeft className="text-xs" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  // Convert technology string into individual badges
  const technologies = project.technology
    .split(",")
    .map((tech) => tech.trim())
    .filter(Boolean);

  return (
    <section className="relative min-h-screen overflow-hidden py-20 md:py-24">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-5">
        {/* Back to Projects */}
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-all duration-300 hover:text-blue-400"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-xl">
          {/* ================= PROJECT IMAGE ================= */}
          <div className="relative h-64 overflow-hidden md:h-[420px]">
            <img
              src={project.photo}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Project Title */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                Featured Project
              </span>

              <h1 className="text-3xl font-bold text-white md:text-5xl">
                {project.name}
              </h1>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-6 md:p-10">
            {/* ================= TECHNOLOGIES ================= */}
            <div className="mb-10 rounded-2xl border border-blue-400/10 bg-blue-400/[0.025] p-5 md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
                  <FaCode />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Technologies Used
                  </h2>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Tools and technologies used to build this project
                  </p>
                </div>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-xl
                      border border-blue-400/15
                      bg-blue-400/[0.04]
                      px-4 py-2
                      text-sm font-medium
                      text-blue-300
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-blue-400/40
                      hover:bg-blue-400/10
                      hover:shadow-lg
                      hover:shadow-blue-500/5
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= ABOUT PROJECT ================= */}
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400" />

                <h2 className="text-xl font-bold text-white">
                  About the Project
                </h2>
              </div>

              <p className="text-sm leading-7 text-slate-400 md:text-base">
                {project.description}
              </p>
            </div>

            {/* ================= CHALLENGES & FUTURE ================= */}
            <div className="mb-10 grid gap-5 md:grid-cols-2">
              {/* Challenges */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-orange-400/20 hover:bg-orange-400/[0.02]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10 text-orange-400">
                    <FaLightbulb />
                  </div>

                  <h3 className="font-semibold text-white">
                    Challenges Faced
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  {project.challenges}
                </p>
              </div>

              {/* Future Plans */}
              <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-purple-400/20 hover:bg-purple-400/[0.02]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-purple-400">
                    <FaRocket />
                  </div>

                  <h3 className="font-semibold text-white">
                    Future Plans
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-400">
                  {project.futurePlans}
                </p>
              </div>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
              {/* Live Demo */}
              <a
                href={project.Live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-blue-500
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  shadow-lg shadow-blue-500/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-blue-400
                  hover:shadow-blue-500/20
                "
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </a>

              {/* View Code */}
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  px-5 py-3
                  text-sm font-semibold
                  text-slate-200
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/40
                  hover:bg-blue-400/5
                  hover:text-blue-400
                "
              >
                <FaGithub />
                View Code
              </a>

              {/* Back to Projects */}
              <Link
                to="/#projects"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  border border-white/10
                  px-5 py-3
                  text-sm font-semibold
                  text-slate-400
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/30
                  hover:text-white
                "
              >
                <FaArrowLeft className="text-xs" />
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;