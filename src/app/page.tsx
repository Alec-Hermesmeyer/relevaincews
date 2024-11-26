'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button, Card, CardHeader, CardTitle, CardContent } from "@/components/ui-components"
import { Sparkles, Brain, Shield } from "lucide-react"
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image'






export default function ModernLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setEmail(''); // Clear the form
        setMessage(''); // Clear the form
      } else {
        setStatus('Error sending email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error sending email.',);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NHXXZPWS');
          `,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3KSD3V3WEX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KSD3V3WEX');
        `}
      </Script>
      <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">

        <header className={`sticky top-0 z-50 bg-blueback transition-all duration-200 ${isScrolled ? 'bg-blue-700 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : ''}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <Link className="flex items-center justify-center" href="/">
              <Image src="/LogoPurple.png" alt="LegalAI Pro" width={80} height={80} className="w-20 sm:w-20 md:w-20 lg:w-20" />
            </Link>

            {/* Hamburger Menu Icon */}
            <div className="absolute top-10 right-4 md:top-10 lg:top-10 lg:right-16 md:right-16">
              <Button onClick={toggleMenu} className="text-white focus:outline-none bg-transparent hover:bg-transparent">
                {isOpen ? (
                  <XIcon className="h-8 w-8 transition duration-200 cursor-pointer" aria-hidden="true" />
                ) : (
                  <MenuIcon className="h-12 w-12 transition duration-200 cursor-pointer" aria-hidden="true" />
                )}
              </Button>
            </div>

            {/* Navigation Links - toggle visibility with transition */}
            {isOpen && (
              <nav className="absolute top-6 right-16  md:right-28 md:top-6 lg:top-6 lg:right-28 p-4  transition-transform duration-300 ease-out  scale-95 animate-fade-in">
                <Button size="sm" className="w-full bg-slate-200 hover:bg-slate-400 text-white py-3 rounded-lg">
                  <Link href="https://prod.relevaince.ai/" className="block px-4 py-2 text-black">Client Login</Link>
                </Button>
              </nav>
            )}
          </div>
        </header>
        <main className="flex-1">
          <section className="relative  pt-24 pb-72 bg-blueback">
            {/* Clip-path Div */}
            <div className="absolute w-full inset-x-0 -bottom-12 left-0 z-0 lg:left-28 md:left-28 lg:-bottom-3 md:-bottom-3">
              <div
                className="w-full h-60 bg-slate-200"
                style={{ clipPath: "polygon(100% 0, 100% 100%,10% 100%)" }}
              ></div>
            </div>

            {/* Content Div */}
            <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20">
              {/* <h1 className="font-roboto font-extralight text-center text-2xl drop-shadow-2xl md:text-4xl sm:text-2xl  pb-12 max-w-3xl mx-auto text-white leading-relaxed">
                Overwhelming Complexity to Rapid Clarity
              </h1> */}
              <div className="flex justify-center pb-8">
                <Image
                  src="/Wordmark_wo_TM - White.ai (1).png"
                  alt="LegalAI Pro"
                  width={850}
                  height={850} />
              </div>



              <p className="font-lora mb-4 text-center text-sm  max-w-3xl px-12 mx-auto text-white  leading-relaxed">
                (Patent Pending Serial No. 63/677,032)</p>

            </div>

            <h1 className="font-roboto font-extralight pt-12 text-center text-2xl drop-shadow-2xl md:text-4xl sm:text-2xl  max-w-3xl mx-auto text-[#8083a3] leading-relaxed">
              Unlock Your Competitve Advantage
            </h1>
            <div className="flex justify-center space-x-6 mb-4">

            </div>

          </section>

          <section id="ace" className="relative py-2 bg-slate-200 h-auto">
            <div className="container pb-2 mx-auto px-4 relative">
              {/* Image Container */}
              <div className="container pb-2 mx-auto px-4 relative">

               <div className="flex items-center justify-center">
               <p className="pb-6 pt-12 text-lg font-thin px-2 md:px-12 mx-auto text-black  leading-relaxed">
                  Our unique platform empowers AI agents, which act as your researchers, to ingest and learn from your securely uploaded datasets, enabling you to interface with these researchers in a matter of seconds.  
                  <br /><br/>Imagine the possibilities – the ability to chat with a task-oriented researcher that possess perfect knowledge of your dataset so that you can establish a clear course for your case, for example, conduct your desired analysis, and determine your overall strategy, direction, and mitigation or risk assessment within hours. 
                   <br /><br />Whether you&apos;re navigating the complexities of the legal landscape or seeking to optimize operations in any industry, leveraged gain with the RelevAInce platform puts the power of the data at your fingertips with clarity, precision, and a clear roadmap.  
                  <br /> <br />No longer will you be buried in data.  No longer will you be overwhelmed with analysis paralysis.  No longer will you be swamped with information overload.  The competitive advantages are endless.
                </p>
               </div>
                <h2 className="font-extralight font-roboto  max-w-7xl pb-3  text-4xl md:text-5xl  text-center mx-auto text-slate-700  leading-relaxed">Join RelevAInce and Gain Your ACE to Win</h2>



                {/* Cards Overlay on Background Image */}
                <div
                  className="relative flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat h-auto py-8"
                  style={{
                    backgroundImage: "url('/LogoPurple.png')",
                    backgroundSize: "contain",
                  }}
                >
                  <div className="grid gap-8 sm:gap-8 md:gap-8 lg:gap-6 md:grid-cols-1 lg:grid-cols-3 relative w-full px-4 md:px-0 z-10">
                    {[
                      {
                        icon: Sparkles,
                        title: "Accelerate",
                        description: "RelevAInce allows the user to quickly and efficiently ingest (intake and learn) large datasets (e.g. terabytes, millions of files).",
                      },
                      {
                        icon: Brain,
                        title: "Clarity",
                        description: "The user may chat with task-oriented AI agents that have perfect knowledge of the dataset to distill complex information into accurate and clear responses within seconds, while providing accessible citations, links, and references.",
                      },
                      {
                        icon: Shield,
                        title: "Execute",
                        description: "Based upon these quickly obtained and tailored answers and analysis, the user is able to achieve their goal with significant cost reduction (time, money, and effort).",
                      },
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center justify-center mt-8 sm:mt-4"
                      >
                        <Card className="bg-opacity-80 bg-gray-700 pt-4 pb-8 sm:pb-4 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300 w-full md:min-h-[300px] border-4 border-[#8083a3]">
                          <CardHeader>
                            <CardTitle className="text-xl sm:text-2xl font-sans font-thin text-white">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="text-md leading-relaxed text-white flex-grow">{feature.description}</CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 pb-6"
              >
                <div className="flex flex-wrap items-center justify-around mx-auto px-4 sm:px-8">
                  {[
                    { imgSrc: '/claims3.png', label: 'Claims' },
                    { imgSrc: '/contracts3.png', label: 'Contracts' },
                    { imgSrc: '/risk4.png', label: 'Risk' },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center mb-4 sm:mb-2">
                      <Image
                        className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36"
                        src={item.imgSrc}
                        alt={item.label}
                        width={150}
                        height={150} />
                      <p className="text-center text-base sm:text-lg font-bold text-black mt-2">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
          <section id="our-story" className="relative py-20 bg-slate-200 text-gray-800">
              <div className="container mx-auto px-4 relative">
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl drop-shadow-xl font-extralight font-roboto text-center mb-6">
                <small>Solving Legal Inefficiencies, One Insight at a Time:<br /> The Story Behind RelevAInce</small>
                </h2>
                <div className="max-w-4xl mx-auto text-lg leading-relaxed">
                  <p className="mb-6">
                    This company was started by two friends – one who has been in the legal industry for 40 years (gasp) and one who has been in big data and AI for about the same amount of time. And yes, we know what you&apos;re probably thinking – two old guys are starting a new company, which is exactly what we did!
                  </p>
                  <p className="mb-6">
                    After 40 years in the legal industry, I had seen my fair share of exorbitant legal bills . . . especially after I moved to in-house counsel for a large commercial construction company. Frustrated by the lack of cost-effective solutions, I shared my tale of woe with my long-time friend over a nice steak dinner one night and we decided to stop complaining and combine our expertise and tackle this problem head-on.
                  </p>
                  <p className="mb-6">
                    Thus, RelevAInce was born - a platform designed to streamline data analysis and drive actionable insights, not just for the legal industry, but across other industry sectors.
                  </p>
                  <p className="mb-6">
                    Our mission is to empower organizations of all sizes to make informed decisions quickly and cost-effectively. No longer will you be buried in data. No longer will you be overwhelmed with analysis paralysis. No longer will you be swamped with information overload.
                  </p>
                  <p className="mb-6">
                    The competitive advantages are endless. Whether you&apos;re navigating the complexities of the legal landscape or seeking to optimize operations in any industry, RelevAInce is your partner in unlocking the power of data-driven insights.
                  </p>
                </div>
              </div>

          </section>

          <section className="py-24 relative bg-blueback">
            <div className="absolute w-full inset-x-0 -bottom-4 left-0 z-0  sm:-bottom-4 md:-bottom-2 lg:-bottom-6">
              <div
                className="w-full h-36 sm:h-32 md:h-40 lg:h-48 bg-slate-200"
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
              ></div>
            </div>
            <div className="container mx-auto px-4">
              <h2 className="font-roboto text-4xl md:text-5xl sm:text-3xl font-extralight drop-shadow-xl text-white mb-12 ">How We Changed The Game</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* <!-- Scale Learning --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className=" text-2xl font-sans font-thin text-white mb-2">Scale</h3>
                  <p className="text-white ">Handle vast, intricate datasets (e.g., terabytes of data, millions of files) efficiently.</p>
                </div>

                {/* <!-- Rapid Results --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Speed</h3>
                  <p className="text-white ">Obtain results in seconds or minutes, rather than hours, days, weeks, or months.</p>
                </div>

                {/* <!-- Quality Analysis --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Accuracy</h3>
                  <p className="text-white ">Swiftly gather and analyze large datasets with high precision and effectiveness.</p>
                </div>

                {/* <!-- Task-Oriented AI --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Task-Oriented AI</h3>
                  <p className="text-white ">AI agents distill complex information into accurate and clear responses in seconds.</p>
                </div>

                {/* <!-- Trust & Verify --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Trust & Verify</h3>
                  <p className="text-white ">Accessible citations, links, and references ensure accuracy and reliability.</p>
                </div>

                {/* <!-- Privacy & Security --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Privacy & Security</h3>
                  <p className="text-white ">All interactions are fully encrypted and secure for maximum privacy.</p>
                </div>

              </div>
            </div>
          </section>




          <section id="features" className="relative py-24 bg-slate-200 mb-0 mt-0 sm:-mt-2 md:-mt-2 lg:mt-0">
            <div className="container mx-auto px-4 relative">
              <h2 className="text-black text-3xl sm:text-4xl md:text-5xl drop-shadow-xl font-extralight font-roboto text-left mb-4 pt-4">
                Key Features
              </h2>

              {/* Cards Overlay on Background Image */}
              <div
                className="relative flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat h-auto py-2" style={{
                  backgroundImage: "url('/LogoPurple.png')",
                  backgroundSize: "contain",
                }}
              >
                <div className="grid gap-8 sm:gap-8 md:gap-8 lg:gap-6 md:grid-cols-1 lg:grid-cols-3 pb-2 md:pb-20 relative w-full pt-8 px-6 md:px-4 z-10">
                  {[
                    {
                      icon: Sparkles,
                      title: "Smart Contract Analysis",
                      description: "AI-driven contract review and risk assessment in minutes.",
                    },
                    {
                      icon: Brain,
                      title: "Legal Research Assistant",
                      description: "Intelligent case law search and analysis for faster insights.",
                    },
                    {
                      icon: Shield,
                      title: "Risk Analysis",
                      description: "Automated risk analysis across jurisdictions, identifying threats in real time.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-opacity-80 bg-gray-700 px-6 w-full py-16 rounded-lg shadow-lg m-0 transform hover:-translate-y-2 transition duration-300 border-4 border-[#8083a3]"
                    >
                      <div className='flex justify-start items-center mb-2'>
                        <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-greenback mb-4 mr-2 md:mr-4" />
                        <h3 className="text-md md:text-xl font-sans font-medium mb-2 text-white">{feature.title} </h3>
                      </div>
                      <p className="text-white">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Clipped Background */}
            <div className="absolute w-full inset-x-0 -bottom-28 sm:-bottom-32 md:-bottom-44 lg:-bottom-48 z-10">
              <div
                className="w-full h-32 sm:h-48 md:h-48 lg:h-52 bg-slate-200"
                style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
              ></div>
            </div>
          </section>







          <section id="demo" className="relative py-20 bg-blueback text-white">

            <div className="container relative mx-auto  px-4 z-10">
              <div className="max-w-7xl mx-auto text-center pt-28 sm:pt-28 md:pt-44 lg:pt-52">
                <h2 className="text-4xl md:text-5xl font-extralight font-roboto mb-6 z-20 drop-shadow-2xl">
                  Experience the Future with a Personalized Demo
                </h2>
                <p className="text-lg mb-8 z-20">
                  Unlock the power of AI-driven insights and revolutionize your workflow. Let us show you how!
                </p>
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block w-full max-w-2xl mx-auto z-20">
                  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                      className="p-4 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none w-full"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <textarea
                      className="p-4 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none w-full"
                      placeholder="How can we help you?"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <Button type="submit" size="lg" className="w-full bg-blueback hover:bg-blue-900 text-white py-3 rounded-lg">
                      Request a Demo
                    </Button>
                  </form>
                  {status && <p className="mt-4 text-white">{status}</p>}
                </div>
                <p className="mt-6 text-sm text-gray-200 mb-6 z-20">
                  Our team will contact you shortly to schedule a live, personalized demo. No commitment required.
                </p>
              </div>
            </div>
          </section>



        </main>
        <footer className="bg-gray-800  py-8">
          <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-sm text-white mb-4 md:mb-0 text-center">
                RelevAInce is a registered trademark of RelevAInce LLC (US Serial No. 98/165,416) © 2024 relevAInce All rights reserved.
              </p>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
}