import { motion } from "framer-motion"
import { Bot, Sparkles, ArrowRight } from "lucide-react"

function Chat() {

  return (

    <section className="relative py-32 overflow-hidden">

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

          <p className="uppercase tracking-[4px] text-xs text-[#f600b1] mb-4">

            AI Skincare Assistant

          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">

            Your personal skincare expert,
            powered by AI.

          </h2>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl">

            Chat with DermaNerd AI to ask skincare questions,
            understand ingredients, build routines, and receive
            personalized recommendations anytime.

          </p>

          {/* Features */}

          <div className="space-y-5 mb-10">

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Sparkles className="text-[#f600b1]" size={18} />

              </div>

              <p className="text-white/80 text-sm">

                Smart skincare guidance

              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Sparkles className="text-[#f600b1]" size={18} />

              </div>

              <p className="text-white/80 text-sm">

                Ingredient explanations

              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Sparkles className="text-[#f600b1]" size={18} />

              </div>

              <p className="text-white/80 text-sm">

                Personalized skincare tips

              </p>

            </div>

          </div>

          <button className="bg-[#f600b1] text-white px-8 py-4 rounded-2xl hover:scale-105 transition duration-300 shadow-2xl flex items-center gap-3">

            Try The AI Assistant

            <ArrowRight size={18} />

          </button>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute w-[350px] h-[350px] bg-[#f600b1]/20 blur-[100px] rounded-full" />

          {/* Chat UI */}

          <div className="relative w-full max-w-[520px] rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-white/10 p-5">

              <div className="w-12 h-12 rounded-full bg-[#f600b1]/20 flex items-center justify-center">

                <Bot className="text-[#f600b1]" size={24} />

              </div>

              <div>

                <h3 className="text-white font-semibold">

                  DermaNerd AI

                </h3>

                <p className="text-white/50 text-xs">

                  Online Now

                </p>

              </div>

            </div>

            {/* Messages */}

            <div className="p-6 space-y-5">

              {/* AI Message */}

              <div className="flex justify-start">

                <div className="max-w-[80%] bg-white/10 border border-white/10 rounded-2xl rounded-bl-none px-5 py-4">

                  <p className="text-white/80 text-sm leading-relaxed">

                    Hi! Tell me about your skin concerns and I’ll help
                    you build the perfect skincare routine.

                  </p>

                </div>

              </div>

              {/* User Message */}

              <div className="flex justify-end">

                <div className="max-w-[80%] bg-[#f600b1] rounded-2xl rounded-br-none px-5 py-4">

                  <p className="text-white text-sm leading-relaxed">

                    I have oily skin and acne scars.

                  </p>

                </div>

              </div>

              {/* AI Message */}

              <div className="flex justify-start">

                <div className="max-w-[80%] bg-white/10 border border-white/10 rounded-2xl rounded-bl-none px-5 py-4">

                  <p className="text-white/80 text-sm leading-relaxed">

                    I’d recommend a gentle salicylic acid cleanser,
                    niacinamide serum, and lightweight moisturizer.

                  </p>

                </div>

              </div>

            </div>

            {/* Input */}

            <div className="border-t border-white/10 p-5">

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">

                <input
                  type="text"
                  placeholder="Ask DermaNerd AI..."
                  className="bg-transparent flex-1 outline-none text-white placeholder:text-white/40"
                />

                <button className="bg-[#f600b1] text-white px-5 py-2 rounded-xl hover:scale-105 transition">

                  Send

                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Chat