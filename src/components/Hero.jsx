import { motion } from 'framer-motion'
import hero from "../assets/images/hero.png"

function Hero() {

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow Effects */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-[#f600b1]/20 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#7b2cff]/20 rounded-full blur-[140px]" />

      </div>

      {/* Hero Content */}

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center pt-32 pb-20">

        {/* Left Side */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-center lg:text-left"
        >

          <p className="uppercase tracking-[4px] text-sm text-[#f600b1] mb-4">

            Smart Skincare Discovery

          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">

            Understand Your
            <br />
            Skin Like A Nerd.

          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">

            Discover personalized skincare routines, explore trusted local products,
            and learn what truly works for your skin.

          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">

            <button className="bg-[#f600b1] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-xl">

              Start Your Quiz

            </button>

            <button className="border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">

              Learn More

            </button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0, scale:0.9 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1 }}
          className="relative flex justify-center"
        >

          {/* Image Glow */}

          <div className="absolute w-[80%] h-[80%] bg-[#f600b1]/20 blur-[120px] rounded-full" />

          <img
            src={hero}
            alt="Hero"
            className="
              relative
              z-10
              w-full
              max-w-[420px]
              sm:max-w-[520px]
              md:max-w-[650px]
              lg:max-w-[850px]
              object-contain
              drop-shadow-2xl
              scale-110
            "
          />

        </motion.div>

      </div>

    </section>

  )
}

export default Hero