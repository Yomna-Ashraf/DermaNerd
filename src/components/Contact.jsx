import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

function Contact() {

  return (

    <section className="relative py-32 overflow-hidden">

      {/* Glow Effects */}

      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#f600b1]/20 blur-[120px] rounded-full" />

      <div className="container-custom">

        {/* Header */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[4px] text-xs text-[#f600b1] mb-4">

            Contact Us

          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">

            Let’s talk skincare.

          </h2>

          <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">

            Have questions about your skincare routine, products,
            or the DermaNerd experience? We’d love to hear from you.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}

          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
            className="space-y-6"
          >

            {/* Card */}

            <div className="flex items-start gap-5 p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md">

              <div className="w-14 h-14 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Mail className="text-[#f600b1]" size={24} />

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold mb-2">

                  Email Us

                </h3>

                <p className="text-white/60 text-sm leading-relaxed">

                  support@dermanerd.com

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="flex items-start gap-5 p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md">

              <div className="w-14 h-14 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Phone className="text-[#f600b1]" size={24} />

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold mb-2">

                  Call Us

                </h3>

                <p className="text-white/60 text-sm leading-relaxed">

                  +20 100 000 0000

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="flex items-start gap-5 p-6 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md">

              <div className="w-14 h-14 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <MapPin className="text-[#f600b1]" size={24} />

              </div>

              <div>

                <h3 className="text-white text-lg font-semibold mb-2">

                  Location

                </h3>

                <p className="text-white/60 text-sm leading-relaxed">

                  Egypt

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}
            className="p-8 rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl"
          >

            <div className="grid gap-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#f600b1] transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-[#f600b1] transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none resize-none focus:border-[#f600b1] transition"
              />

              <button className="bg-[#f600b1] text-white py-5 rounded-2xl hover:scale-[1.02] transition duration-300 shadow-2xl">

                Send Message

              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>

  )
}

export default Contact