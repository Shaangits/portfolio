import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section
      id="contact"
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
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let’s Work Together
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 
          border border-white/10 rounded-2xl p-10 text-center"
        >

          <p className="text-gray-300 text-lg mb-8">
            I’m currently open to internships, freelance work, and full-time
            opportunities. If you have a project or just want to say hi,
            feel free to reach out!
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:shaanhk73@gmail.com"
            className="inline-block px-8 py-3 rounded-full 
            bg-emerald-400 text-black font-semibold 
            hover:bg-emerald-300 transition"
          >
            Say Hello 👋
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center gap-6 text-gray-400"
          >
            <a
              href="https://github.com/Shaangits"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shaan-hasan-khan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shaanhk73@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              Email
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Contact
