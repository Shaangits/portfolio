import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I Am
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg"
          >
            <p>
              I’m <span className="text-white font-semibold">Shaan Khan</span>, a
              BTech student and aspiring Full Stack Developer who enjoys building
              modern, scalable, and user-focused web applications.
            </p>

            <p>
              I work primarily with the{" "}
              <span className="text-emerald-400">MERN stack</span> and love
              turning ideas into real-world projects that solve problems and
              deliver clean user experiences.
            </p>

            <p>
              Currently, I’m focused on strengthening my problem-solving skills,
              improving UI/UX design, and exploring how AI can be integrated into
              web applications.
            </p>
          </motion.div>

          {/* Right – Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
              <p className="text-gray-400">
                BTech in Computer Science <br />
                Focused on software development & web technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">💻 What I Do</h3>
              <p className="text-gray-400">
                Build full stack web applications using React, Node.js, Express,
                and MongoDB with modern UI practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">🚀 Goals</h3>
              <p className="text-gray-400">
                To become a skilled software developer and contribute to
                impactful products in a growth-driven tech environment.
              </p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About
