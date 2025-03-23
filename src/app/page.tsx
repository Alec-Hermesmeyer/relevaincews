'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardHeader, CardTitle, CardContent } from "@/components/ui-components"
import { Sparkles, Brain, Shield } from "lucide-react"
import CookieConsent from "@/components/CookieConsent";
import Image from 'next/image'
import AceSection from '@/components/ace-section'






export default function ModernLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

  

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

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setCookieConsent(true);
    } else if (consent === "false") {
      setCookieConsent(false);
    } else {
      setCookieConsent(null); // No consent given yet
    }
  }, []);

  return (
    <>
    {cookieConsent && (
      <><Script
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
          }} /><Script
            src="https://www.googletagmanager.com/gtag/js?id=G-3KSD3V3WEX"
            strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3KSD3V3WEX');
        `}
          </Script></>
      )}
      <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">

      {cookieConsent === null && <CookieConsent />}
        <main className="flex-1">
          <section className="relative  pt-24 pb-24 bg-blueback">
            {/* Clip-path Div */}
            {/* <div className="absolute w-full inset-x-0 -bottom-12 left-0 z-0 lg:left-28 md:left-28 lg:-bottom-3 md:-bottom-3">
              <div
                className="w-full h-60 bg-blueback"
                style={{ clipPath: "polygon(100% 0, 100% 100%,10% 100%)" }}
              ></div>
            </div> */}

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



              <p className="font-lora mb-4 text-center text-sm  max-w-3xl px-12 mx-auto text-white  leading-relaxed italic">
                (Patent Pending Serial No. 63/677,032)</p>

            </div>

            <h1 className="font-roboto font-extralight pt-12 text-center text-2xl drop-shadow-2xl md:text-4xl sm:text-2xl  max-w-3xl mx-auto text-[#8083a3] leading-relaxed">
              Unlock Your Competitive Advantage
            </h1>
            <div className="flex justify-center space-x-6 mb-4">

            </div>

          </section>

          <section id="ace" >
            {/* <div className="container pb-2 mx-auto px-4 relative">
              Image Container
              <div className="container pb-2 mx-auto px-4 relative">

               <div className="flex items-center justify-center">
               <p className="pb-6 pt-12 text-lg font-thin px-2 md:px-12 mx-auto text-white  leading-relaxed text-center">
               Finally... a platform that unlocks the key to cognitive reasoning across massive scale.<br></br>
               <br></br>Our unique tool empowers AI agents to act as your researchers and rapidly ingest and learn from your securely uploaded datasets. <br></br>           
                   <br></br>You can then chat with a task-oriented researcher possessing perfect knowledge of your dataset to establish a clear course for your case, conduct your desired analysis, determine your overall strategy, direction, and mitigation or risk assessment within hours.
                   <br /><br />Whether you&apos;re navigating the complexities of the legal landscape or seeking to optimize operations in any industry, the <span className="inline-flex items-center">
                <Image
                  src="/Wordmark_w_TM - Black.png"
                  alt="RelevAInce"
                  width={120}
                  height={50}
                  className="h-auto w-auto"
                />
               
              </span> &nbsp;platform puts the power of the data at your fingertips with clarity, precision, and a clear roadmap.  
                  <br /> <br />No longer will you be buried in data.  No longer will you be overwhelmed with analysis paralysis.  No longer will you be swamped with information overload.  The competitive advantages are endless.
                </p>
               </div>
                <h2 className="font-extralight font-roboto  max-w-7xl pb-3  text-4xl md:text-5xl  text-center mx-auto text-white  leading-relaxed">Join RelevAInce and ACE the competition</h2> */}

   

                {/* Cards Overlay on Background Image */}
                {/* <div
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
            </div> */}
            <section className="px-6 py-6 bg-blueback text-white text-center">
            {/* <div className="container mx-auto px-6 py-16">
            <h2 className="text-4xl font-semibold text-white mb-2 text-center">        The AI Analysis and Capabilities you’ve been waiting for
            </h2>
            <p className="text-white font-bold text-2xl text-center mb-4">Comprehensive. Rapid. Accurate.</p>
            <p className="text-white text-lg">
        More than simple document generation, summary, or pattern recognition.
      </p>

      <p className="text-white mb-4 text-lg">
        Obtain a value proposition, risk assessment, or an overall strategy that enables you to focus on high-value activities.
      </p>
      <h2 className="text-2xl font-semibold text-white">Claims. Risk. Litigation. Contracts.</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed"> */}
    
    {/* Left Column */}
    {/* <div className="space-y-5 text-center md:text-left">
      
      <p className="text-white">
        More than simple document generation, summary, or pattern recognition.
      </p>
      <p className="text-white">
        Cognitive reasoning at scale—think millions of documents, not just tens of thousands.
      </p>
      <p className="text-white">
        Obtain a value proposition, risk assessment, or an overall strategy that enables you to focus on high-value activities.
      </p>
    </div> */}

    {/* Right Column */}
    {/* <div className="space-y-10 text-center md:text-center  text-white">
      
      <p className="text-white">
        Virtual assistant teams simultaneously assess entire datasets, provide strengths and weaknesses, 
        and establish your path forward with clarity from the outset.
      </p>
    </div> */}

    {/* Centered Call-to-Action */}
    {/* <div className="col-span-1 md:col-span-2 text-center pt-10">
      <h3 className="text-xl font-bold text-white uppercase tracking-wide">
        The Competitive Advantages Are Endless…
      </h3>
    </div>
  </div>
</div> */}
<div className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-sm">
  <h2 className="text-4xl font-bold text-white mb-12 text-center">
    The AI Analysis and Capabilities You've Been Waiting For
  </h2>
  
  {/* Feature Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-4">Comprehensive</h3>
      <p className="text-gray-300 text-center">
        More than simple document generation or pattern recognition—our AI delivers cognitive reasoning at scale.
      </p>
    </div>
    
    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-4">Rapid</h3>
      <p className="text-gray-300 text-center">
        Process millions of documents simultaneously, providing immediate insights and actionable intelligence.
      </p>
    </div>
    
    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <div className="text-blue-400 text-4xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-4">Accurate</h3>
      <p className="text-gray-300 text-center">
        Obtain precise value propositions, risk assessments, and strategies that enable focus on high-value activities.
      </p>
    </div>
  </div>
  
  {/* Use Cases Section */}
  <div className="bg-blueback bg-opacity-40 p-8 rounded-lg mb-16">
    <h3 className="text-2xl font-bold text-white text-center mb-6">
      Claims. Risk. Litigation. Contracts.
    </h3>
  </div>
  
  {/* CTA Section */}
  <div className="text-center">
    <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-8">
      The Competitive Advantages Are Endless
    </h3>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
      Discover How
    </button>
  </div>
</div>

          {/* <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl  mb-12">Cognitive Reasoning</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              Whether you want to level the playing field or find the needle in the haystack… the
              <span className="inline-flex items-center">
                <Image
                  src="/Wordmark_w_TM - White.png"
                  alt="RelevAInce"
                  width={120}
                  height={50}
                  className="h-auto w-auto"
                />
                <span className="ml-1"><i> &nbsp;Platform&nbsp;</i> </span>
              </span>
              assists you in actively interpreting and reasoning through data to help make a more informed decision.
            </p>



            <div className="grid gap-8 sm:gap-8 md:gap-8 lg:gap-6 md:grid-cols-1 lg:grid-cols-3 pb-2 md:pb-20 relative w-full pt-8 px-6 md:px-4 z-10">
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Decision Making</h3>
                <p className="text-white">Enhance decision making with structured insights.</p>
              </div>
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Data Understanding</h3>
                <p className="text-white">Gain deeper analysis into complex data sets.</p>
              </div>
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Problem Solving</h3>
                <p className="text-white">Analyze and resolve complex information effectively.</p>
              </div>
            </div>
          </div> */}
        </section>

        {/* Trust and Verify Section */}
        {/* <section className="px-6 py-20 bg-blueback text-center text-blueback">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl mb-12 text-white">Trust And Verify</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 text-white">
              In obtaining the bottom line answers to your questions as you sift through your data, the&nbsp;
              <span className="inline-flex items-center">
                <Image
                  src="/Wordmark_w_TM - White.png"
                  alt="RelevAInce"
                  width={120}
                  height={50}
                  className="h-auto w-auto"
                />
                <span className="ml-1"><i>Platform</i></span>
              </span>
              &nbsp;provides you with  documentation so that you can trust AND verify your conclusions.
            </p>


            <div className="grid gap-8 sm:gap-8 md:gap-8 lg:gap-6 md:grid-cols-1 lg:grid-cols-3 pb-2 md:pb-20 relative w-full pt-8 px-6 md:px-4 z-10">
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Credibility</h3>
                <p className="text-white">Enhance credibility with verifiable data.</p>
              </div>
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Resource Allocation</h3>
                <p className="text-white">Optimize resource allocation efficiently.</p>
              </div>
              <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-sans font-thin text-white mb-2">Decision Making</h3>
                <p className="text-white">Make informed decisions with confidence.</p>
              </div>
            </div>
          </div>
        </section> */}
          </section>
          
          <section className="py-24 relative bg-blueback">
            <div className="absolute w-full inset-x-0 -bottom-4 left-0 z-0  sm:-bottom-4 md:-bottom-2 lg:-bottom-6">
              <div
                className="w-full h-36 sm:h-32 md:h-40 lg:h-48 bg-slate-200"
                style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
              ></div>
            </div>
            <div className="container mx-auto px-4">
              <h2 className="font-roboto text-4xl md:text-5xl sm:text-3xl font-extralight drop-shadow-xl text-white mb-12 text-center">How We Change The Game</h2>
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
    <h2 className="text-black text-3xl sm:text-4xl md:text-5xl drop-shadow-xl font-extralight font-roboto text-center mb-4 pt-4">
      Key Features
    </h2>
    {/* Cards Overlay on Background Image */}
    <div
      className="relative flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat h-auto py-2" 
      style={{
        backgroundImage: "url('/LogoBlue.png')",
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
            className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="text-blue-400 text-4xl mb-4 flex justify-center">
              <feature.icon className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-sans font-thin text-white text-center  mb-4">{feature.title}</h3>
            <p className="text-white text-center">
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
                 © 2025 relevAInce All rights reserved.
              </p>

            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  reversed?: boolean
}

function FeatureCard({ icon, title, description, reversed = false }: FeatureCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${reversed ? "md:translate-y-8" : ""}`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-medium text-lg mb-2">{title}</h3>
          <p className="font-thin leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}