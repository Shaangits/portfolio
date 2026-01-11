import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-white tracking-wide">
          Shaan<span className="text-emerald-400">.dev</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>
            <a href="#about" className="hover:text-emerald-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-emerald-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </motion.nav>
  )
}

export default Navbar
