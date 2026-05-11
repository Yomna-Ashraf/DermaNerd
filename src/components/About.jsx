import { Star, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

function About() {

  return (

    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#f600b1]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#7b2cff]/20 blur-[120px] rounded-full" />

      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <h2 className="text-3xl md:text-5xl leading-tight font-bold text-white mb-8 max-w-[650px]">

            Discover the perfect skincare routine for your skin.

          </h2>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-xl">

            Our smart skincare quiz analyzes your skin type, concerns,
            lifestyle, and preferences to recommend products and routines
            tailored specifically for you.

          </p>

          <button className="bg-[#f600b1] text-white px-8 py-4 rounded-2xl hover:scale-105 transition duration-300 shadow-xl">

            Start Your Quiz

          </button>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="space-y-5 max-w-[520px] w-full mx-auto"
        >

          {/* Card 1 */}

          <div className="flex items-start gap-4 p-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm text-white">

            <div className="min-w-[60px] h-[60px] rounded-full bg-[#f600b1]/20 flex items-center justify-center">

              <Sparkles size={26} className="text-[#f600b1]" />

            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">

                Personalized Analysis

              </h3>

              <p className="text-white/60 leading-relaxed text-sm">

                Understand your skin type and concerns with a quiz
                designed to provide accurate skincare guidance.

              </p>

            </div>

          </div>

          {/* Card 2 */}

          <div className="flex items-start gap-4 p-5 rounded-[28px] border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-2xl scale-[1.03]">

            <div className="min-w-[60px] h-[60px] rounded-full bg-[#f600b1]/20 flex items-center justify-center">

              <ShieldCheck size={26} className="text-[#f600b1]" />

            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">

                Trusted Recommendations

              </h3>

              <p className="text-white/60 leading-relaxed text-sm">

                Get skincare products and routines matched to your
                specific needs and goals.

              </p>

            </div>

          </div>

          {/* Card 3 */}

          <div className="flex items-start gap-4 p-5 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm text-white">

            <div className="min-w-[60px] h-[60px] rounded-full bg-[#f600b1]/20 flex items-center justify-center">

              <Star size={26} className="text-[#f600b1]" />

            </div>

            <div>

              <h3 className="text-xl font-semibold mb-2">

                Better Skin Habits

              </h3>

              <p className="text-white/60 leading-relaxed text-sm">

                Build routines that help improve your skin consistently
                over time.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default About