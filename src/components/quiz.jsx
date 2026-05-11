import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const questions = [
  {
    question: "What is your biggest skin concern?",
    options: [
      "Acne & Breakouts",
      "Dryness & Sensitivity",
      "Dark Spots & Pigmentation",
      "Anti-aging & Fine Lines"
    ]
  },
  {
    question: "What is your skin type?",
    options: ["Oily", "Dry", "Combination", "Normal"]
  },
  {
    question: "How sensitive is your skin?",
    options: ["Very sensitive", "Slightly sensitive", "Not sensitive", "I don't know"]
  }
]

function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const current = questions[step]
  const progress = (step / questions.length) * 100

  const handleSelect = (option) => {
    setAnswers({ ...answers, [step]: option })

    setTimeout(() => {
      if (step < questions.length) {
        setStep(step + 1)
      }
    }, 250)
  }

  const restart = () => {
    setStep(0)
    setAnswers({})
  }

  return (
    <section className="relative py-40 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f600b1]/25 blur-[140px] rounded-full" />

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT - QUIZ (FUNCTIONAL) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[500px] h-[500px] bg-[#f600b1]/25 blur-[140px] rounded-full" />

          <div className="relative w-full max-w-[580px] rounded-[42px] border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl">

            {/* PROGRESS */}
            {step < questions.length && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white/70 text-xs">
                    Question {step + 1} of {questions.length}
                  </p>
                  <p className="text-[#f600b1] text-xs">
                    {Math.round(progress)}%
                  </p>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f600b1] rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* QUESTIONS */}
            {step < questions.length ? (
              <>
                <h3 className="text-2xl md:text-3xl text-white font-semibold mb-8">
                  {current.question}
                </h3>

                <div className="space-y-4">
                  {current.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(option)}
                      className="w-full text-left p-5 rounded-2xl border border-white/10 bg-white/5 text-white text-base hover:border-[#f600b1] hover:bg-[#f600b1]/10 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f600b1]/20 flex items-center justify-center">
                  <Check className="text-[#f600b1]" />
                </div>

                <h3 className="text-3xl text-white font-bold mb-4">
                  Your routine is ready 
                </h3>

                <p className="text-white/70 mb-8">
                  We’ve built your personalized skincare routine.
                </p>

                <button
                  onClick={restart}
                  className="bg-[#f600b1] text-white px-7 py-4 rounded-2xl hover:scale-105 transition"
                >
                  Retake Quiz
                </button>
              </div>
            )}

          </div>
        </motion.div>

        {/* RIGHT - HEADER / CONTENT (RESTORED) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >

          <p className="uppercase tracking-[4px] text-xs text-[#f600b1] mb-4">
            Personalized Quiz
          </p>

          <h2 className="text-3xl md:text-5xl leading-tight font-bold text-white mb-8 max-w-[650px]">
            Your skincare routine, personalized in minutes.
          </h2>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Answer a few questions about your skin type, concerns,
            lifestyle, and preferences to receive a personalized skincare routine tailored for you.
          </p>

          {/* FEATURES */}
          <div className="space-y-4 mb-10">

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-9 h-9 rounded-full bg-[#f600b1]/20 flex items-center justify-center">
                <Check className="text-[#f600b1]" size={18} />
              </div>
              <p className="text-white/80 text-sm">Smart skin type analysis</p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-9 h-9 rounded-full bg-[#f600b1]/20 flex items-center justify-center">
                <Check className="text-[#f600b1]" size={18} />
              </div>
              <p className="text-white/80 text-sm">Personalized recommendations</p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="w-9 h-9 rounded-full bg-[#f600b1]/20 flex items-center justify-center">
                <Check className="text-[#f600b1]" size={18} />
              </div>
              <p className="text-white/80 text-sm">Routines built for your goals</p>
            </div>

          </div>

          <button className="bg-[#f600b1] text-white px-7 py-4 rounded-2xl hover:scale-105 transition">
            Take The Quiz
          </button>

        </motion.div>

      </div>
    </section>
  )
}

export default Quiz