import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/images/logo.png"
function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#660941]/90 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }
      `}
    >

      <div className="container-custom flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-3xl text-white">
          DermaNerd
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10 text-white">

          <li className="cursor-pointer hover:text-gray-300 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            Quiz
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            Contact
          </li>

        </ul>

        {/* Desktop Button */}

        <button className="hidden md:block bg-white text-[var(--primary)] px-6 py-3 rounded-full hover:scale-105 transition duration-300">

          Get Started

        </button>

        {/* Mobile Icon */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {
            menuOpen
              ? <X size={32} />
              : <Menu size={32} />
          }

        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="bg-[rgba(16,31,45,0.95)] backdrop-blur-xl mt-4 mx-4 rounded-3xl p-8">

          <ul className="flex flex-col gap-6 text-white text-lg">

            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>

          </ul>

          <button className="w-full mt-8 bg-white text-[var(--primary)] py-4 rounded-full">

            Get Started

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar