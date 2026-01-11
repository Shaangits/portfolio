import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-emerald-400 uppercase tracking-widest text-sm mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Building <span className="text-emerald-400">Modern</span> <br />
          Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-10"
        >
          I’m Shaan Khan, a BTech student and full stack developer focused on
          building scalable and user-friendly web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition"
          >
            View Projects
          </a>

          <a
            href="/Shaan Resume Invertis[1].pdf"
            download
            className="px-8 py-3 rounded-full border border-white/20 
            hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            Download Resume 📄
          </a>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
