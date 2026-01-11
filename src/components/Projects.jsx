import { motion } from "framer-motion"

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "A full stack application that allows users to build resumes and enhance content using AI.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/Shaangits/resume-builder.git",
    live: "https://resume-builder-frontend-2lob.onrender.com/",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 uppercase tracking-widest text-sm">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Things I’ve Built
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group backdrop-blur-md bg-white/5 border border-white/10 
              rounded-2xl p-6 hover:border-emerald-400/50 transition flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full 
                    bg-white/10 text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg 
                  border border-white/20 hover:border-emerald-400 
                  hover:text-emerald-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg 
                  bg-emerald-400 text-black font-semibold 
                  hover:bg-emerald-300 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects
