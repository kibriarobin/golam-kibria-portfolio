import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-blue-400/20 bg-blue-400/5 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            My Background
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Education
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base opacity-60">
            My academic background and educational journey.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
              group relative
              rounded-2xl
              border border-white/10
              bg-white/[0.025]
              backdrop-blur-xl
              p-6 md:p-8
              transition-all duration-500
              hover:-translate-y-1
              hover:border-blue-400/40
              hover:shadow-xl
              hover:shadow-blue-500/5
            "
          >
            {/* Top Gradient Line */}
            <div
              className="
                absolute top-0 left-10 right-10
                h-px
                bg-gradient-to-r
                from-transparent
                via-blue-400
                to-transparent
                opacity-60
              "
            />

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* Icon */}
              <div
                className="
                  shrink-0
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  bg-blue-400/10
                  border border-blue-400/20
                  text-blue-400
                  text-2xl
                  transition-all duration-300
                  group-hover:scale-105
                  group-hover:bg-blue-400/15
                "
              >
                <FaGraduationCap />
              </div>

              {/* Main Information */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3
                      className="
                        text-xl md:text-2xl
                        font-bold
                        group-hover:text-blue-400
                        transition-colors duration-300
                      "
                    >
                      Feni Ideal Polytechnic Institute
                    </h3>

                    <p className="mt-1 text-sm md:text-base opacity-60">
                      Diploma in Computer Science
                    </p>
                  </div>

                  {/* Passing Year */}
                  <div
                    className="
                      inline-flex items-center gap-2
                      w-fit
                      px-3 py-1.5
                      rounded-full
                      bg-blue-400/5
                      border border-blue-400/15
                      text-blue-400
                      text-xs font-semibold
                    "
                  >
                    <FaCalendarAlt />
                    2018
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Bottom Info */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="
                      inline-flex items-center gap-2
                      px-3 py-1.5
                      rounded-full
                      bg-white/[0.03]
                      border border-white/10
                      text-xs opacity-70
                    "
                  >
                    <FaUniversity className="text-blue-400" />
                    Polytechnic Institute
                  </span>

                  <span
                    className="
                      px-3 py-1.5
                      rounded-full
                      bg-blue-400/5
                      border border-blue-400/15
                      text-blue-400
                      text-xs font-medium
                    "
                  >
                    Computer Science & Technology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
