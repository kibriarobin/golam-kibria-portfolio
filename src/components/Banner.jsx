import { FaFileDownload, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import banner from "../assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg";
import myPic from "../assets/my-pic.png";
const Banner = () => {
  return (
    <div
      id="home"
      className="hero min-h-[300px] lg:min-h-[500px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col-reverse mt-12 lg:mt-0 lg:gap-4 lg:flex-row lg:justify-between lg:items-center w-full max-w-6xl mx-auto px-6">
        <div className="text-left text-neutral-content">
          <div className="max-w-full lg:max-w-xl lg:pt-0">
            <h1 className="mb-3 text-2xl lg:text-3xl font-bold">Hi,</h1>
            <h1 className="mb-3 text-2xl lg:text-3xl font-bold">
              I am{" "}
              <span className="text-orange-400 text-4xl">
                Golam Kibria
              </span>
            </h1>
            <h2 className="mb-3 text-xl lg:text-2xl font-semibold">
              Web Developer
            </h2>
            <p className="mb-5">
              I am a passionate <span className="font-bold">MERN</span> Stack
              Developer focused on building modern, responsive, and
              user-friendly web applications. I turn ideas into functional
              digital experiences with clean code and thoughtful design.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/golam-kibria-resume.pdf"
                download="golam-kibria-resume.pdf"
                className="btn btn-secondary"
              >
                Download Resume
                <FaFileDownload className="text-black text-xl" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/kibriarobin"
                title="GitHub"
                target="blank"
                className="flex items-center btn btn-secondary"
              >
                <p>GitHub</p>
                <FaGithubSquare className="text-black text-xl" />
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/golam-kibria97"
                title="Linkedin"
                target="blank"
                className="flex items-center btn btn-secondary"
              >
                <p>LinkedIn</p>
                <FaLinkedin className="text-black text-xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:block">
          <div className="rounded-full border-2 border-[#EF47BC] w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden mt-5 lg:mt-0">
            <img
              src={myPic}
              alt="Golam Kibria"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
