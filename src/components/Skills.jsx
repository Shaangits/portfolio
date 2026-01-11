import { motion } from "framer-motion"

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
  ],
}

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Tech I Work With
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-8">

          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 
              rounded-2xl p-8 hover:border-emerald-400/50 transition"
            >
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 rounded-full text-sm 
                    bg-white/10 text-gray-200 
                    hover:bg-emerald-400 hover:text-black 
                    transition cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
