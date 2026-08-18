import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  const orderedProjects = [...projects].reverse();

  return (
    <div className="my-20 max-w-7xl mx-auto">
      <h3 id="projects" className="text-3xl font-bold text-center mb-10">
        Projects
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">
        {orderedProjects.map((project) => (
          <div
            key={project._id}
            className="rounded-md shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={project.photo}
              alt={project.name}
              className="object-cover object-center w-full h-52"
            />
            <div className="p-5 flex flex-col flex-1 space-y-3">
              <h3 className="text-xl font-bold text-center">{project.name}</h3>
              <Link
                to={`/project/${project._id}`}
                className="btn btn-secondary mt-auto"
              >
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
