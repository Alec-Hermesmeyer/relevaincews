"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sparkles, Brain, Shield, ChevronDown, ChevronUp, MousePointer, Check } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui-components"
import { Button } from "@/components/ui-components"
import { useInView } from "react-intersection-observer"

const features = [
  {
    icon: Sparkles,
    title: "Accelerate",
    description:
      "RelevAInce allows the user to quickly and efficiently ingest (intake and learn) large datasets (e.g. terabytes, millions of files).",
    details:
      "Our proprietary data ingestion pipeline processes information at speeds 10x faster than traditional methods. This means you can upload your entire case files, research documents, or business data and have it analyzed within hours instead of weeks.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Brain,
    title: "Clarity",
    description:
      "The user may chat with task-oriented AI agents that have perfect knowledge of the dataset to distill complex information into accurate and clear responses within seconds, while providing accessible citations, links, and references.",
    details:
      "Our AI agents don't just search your data - they understand it. Ask complex questions in natural language and receive comprehensive answers with direct citations to your source material, ensuring complete transparency and accuracy.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Execute",
    description:
      "Based upon these quickly obtained and tailored answers and analysis, the user is able to achieve their goal with significant cost reduction (time, money, and effort).",
    details:
      "Turn insights into action with our execution framework. Generate reports, create action plans, and implement strategies based on the AI's analysis - all while tracking measurable improvements in efficiency and cost reduction.",
    color: "from-blue-500 to-cyan-500",
  },
]

// Particle animation component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; radius: number; dx: number; dy: number; color: string }[] = []
    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const dx = (Math.random() - 0.5) * 0.5
      const dy = (Math.random() - 0.5) * 0.5
      const color = `rgba(255, 255, 255, ${Math.random() * 0.2})`

      particles.push({ x, y, radius, dx, dy, color })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Update position
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.dx = -particle.dx
        }

        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.dy = -particle.dy
        }
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// Interactive text highlight component
const HighlightText = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      className={`relative inline-block px-1 py-0.5 rounded transition-colors duration-300 ${
        isHovered ? "bg-indigo-500/20 text-white" : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
      {isHovered && (
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.span>
  )
}

// Interactive paragraph component with reveal effect
const RevealParagraph = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay },
        },
      }}
      className="text-lg font-light text-indigo-100 leading-relaxed mb-4"
    >
      {children}
    </motion.p>
  )
}

// Interactive benefits list
const BenefitsList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const benefits = [
    "No longer will you be buried in data.",
    "No longer will you be overwhelmed with analysis paralysis.",
    "No longer will you be swamped with information overload.",
    "The competitive advantages are endless.",
  ]

  return (
    <motion.div
      className="mt-8 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <h4 className="text-xl text-indigo-200 mb-4 font-medium text-center">Key Benefits</h4>
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center ${
              activeIndex === index ? "bg-indigo-700/30 shadow-lg" : "bg-indigo-900/20 hover:bg-indigo-800/20"
            }`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                activeIndex === index ? "bg-indigo-500" : "bg-indigo-700/50"
              }`}
              animate={{
                rotate: activeIndex === index ? 360 : 0,
                scale: activeIndex === index ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {activeIndex === index ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <motion.span className="w-2 h-2 bg-indigo-300 rounded-full" />
              )}
            </motion.div>
            <p className="text-indigo-100">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Interactive platform description
const InteractivePlatformDescription = () => {
  const [step, setStep] = useState(1)
  const maxSteps = 3

  const steps = [
    {
      title: "Upload Your Data",
      description: "Securely upload your datasets of any size - from gigabytes to terabytes.",
      icon: "📤",
    },
    {
      title: "AI Analysis",
      description: "Our AI agents rapidly ingest and learn from your data, creating a knowledge base.",
      icon: "🧠",
    },
    {
      title: "Get Insights",
      description:
        "Chat with AI researchers who have perfect knowledge of your dataset to get clear answers and strategies.",
      icon: "💡",
    },
  ]

  return (
    <motion.div
      className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 mt-8 border border-indigo-700/50 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <h4 className="text-xl text-indigo-200 mb-4 font-medium text-center">How It Works</h4>

      <div className="relative">
        <div className="flex justify-between mb-2 relative z-10">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                step > index + 1 ? "bg-indigo-500" : step === index + 1 ? "bg-indigo-400" : "bg-indigo-800"
              }`}
              onClick={() => setStep(index + 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {step > index + 1 ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <span className="text-white font-medium">{index + 1}</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="h-1 bg-indigo-800 absolute top-4 left-4 right-4 -z-0">
          <motion.div
            className="h-full bg-indigo-500"
            initial={{ width: "0%" }}
            animate={{ width: `${((step - 1) / (maxSteps - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-center"
          >
            <div className="text-3xl mb-3">{steps[step - 1].icon}</div>
            <h5 className="text-xl text-indigo-200 mb-2">{steps[step - 1].title}</h5>
            <p className="text-indigo-100">{steps[step - 1].description}</p>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="text-indigo-200 border-indigo-700"
              >
                Previous
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(Math.min(maxSteps, step + 1))}
                disabled={step === maxSteps}
                className="text-indigo-200 border-indigo-700"
              >
                Next
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function AceSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section id="ace" className="relative py-20 bg-gradient-to-b from-slate-200 to-blueback overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-2xl font-light text-indigo-300 mb-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [0.8, 1.1, 1],
                  textShadow: [
                    "0px 0px 0px rgba(79, 70, 229, 0)",
                    "0px 0px 10px rgba(79, 70, 229, 0.5)",
                    "0px 0px 0px rgba(79, 70, 229, 0)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  times: [0, 0.5, 1],
                  repeat: 3,
                  repeatType: "reverse",
                  repeatDelay: 5,
                }}
              >
                Unlock the Power of Your Data
              </motion.span>
            </motion.h3>

            <motion.div
              className="relative mb-12 p-6 bg-indigo-900/20 backdrop-blur-sm rounded-xl border border-indigo-700/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              

              <RevealParagraph delay={0.2}>
                Finally... a platform that unlocks the key to <HighlightText>cognitive reasoning</HighlightText> across
                massive scale.
              </RevealParagraph>

              <RevealParagraph delay={0.4}>
                Our unique tool empowers <HighlightText>AI agents</HighlightText> to act as your researchers and rapidly
                ingest and learn from your securely uploaded datasets.
              </RevealParagraph>

              <RevealParagraph delay={0.6}>
                You can then chat with a <HighlightText>task-oriented researcher</HighlightText> possessing perfect
                knowledge of your dataset to establish a clear course for your case, conduct your desired analysis,
                determine your overall strategy, direction, and mitigation or risk assessment within hours.
              </RevealParagraph>

              <RevealParagraph delay={0.8}>
                Whether you're navigating the complexities of the <HighlightText>legal landscape</HighlightText> or
                seeking to optimize operations in any industry, the{" "}
                <span className="font-semibold text-indigo-300">RelevAInce</span> platform puts the power of the data at
                your fingertips with clarity, precision, and a clear roadmap.
              </RevealParagraph>

              {/* Interactive platform description */}
              <InteractivePlatformDescription />

              {/* Interactive benefits list */}
              <BenefitsList />
            </motion.div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-light text-4xl md:text-5xl text-center mx-auto text-white leading-tight mb-16"
        >
          Join RelevAInce and{" "}
          <motion.span
            initial={{ color: "#a5b4fc" }}
            animate={{ color: ["#a5b4fc", "#818cf8", "#6366f1", "#4f46e5", "#a5b4fc"] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            className="font-medium"
          >
            ACE
          </motion.span>{" "}
          the competition
        </motion.h2>

        <div className="relative">
          {/* Background Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <Image
              src="/LogoPurple.png"
              alt="RelevAInce Logo Background"
              width={800}
              height={800}
              className="object-contain"
            />
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid gap-8 md:grid-cols-3 relative z-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: expandedCard === index ? 1 : 1.02 }}
                className="h-full"
              >
                <Card
                  className={`h-full bg-indigo-900/50 backdrop-blur-sm border border-indigo-700 shadow-xl transition-all duration-500 overflow-hidden ${expandedCard === index ? "ring-2 ring-indigo-400" : ""}`}
                >
                  <CardHeader className="pb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1, type: "spring" }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl font-light text-white flex items-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-indigo-100 leading-relaxed">{feature.description}</p>

                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-indigo-700/50"
                        >
                          <p className="text-indigo-200 leading-relaxed">{feature.details}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button
                      variant="outline"
                      className="text-indigo-300 hover:text-indigo-100 hover:bg-indigo-800/50 w-full"
                      onClick={() => toggleCard(index)}
                    >
                      {expandedCard === index ? (
                        <span className="flex items-center">
                          Show Less <ChevronUp className="ml-2 h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Learn More <ChevronDown className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

