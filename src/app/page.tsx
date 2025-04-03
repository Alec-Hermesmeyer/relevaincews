'use client'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button, Card, CardHeader, CardTitle, CardContent } from "@/components/ui-components"
import { MessageSquare, ClipboardList, User } from "lucide-react";
import CookieConsent from "@/components/CookieConsent";
import Image from 'next/image'
import Link from 'next/link'
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
  const features = [
    {
      icon: MessageSquare,
      title: "Data Chat",
      description: "Converse with your data in seconds through natural language queries for  actionable insights",
      link: "/data-chat"
    },
    {
      icon: ClipboardList,
      title: "Claims Analyst",
      description: "Overall analysis of dataset to provide strengths, weaknesses, and strategic assessment",
      link: "/claims-analyst"
    },
    {
      icon: User,
      title: "Dynamic Avatar Presentations",
      description: "AI-powered avatars that deliver engaging, customized presentations for your audience",
      link: "/dynamic-avatar-presentations"
    }
  ];

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
            

            {/* Content Div */}
            <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20">
              
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
            
            <section className="px-6 py-6 bg-blueback text-white text-center">
            
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
        More than simple document generation or pattern recognition—our AI delivers cognitive reasoning at scale
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
        Process millions of documents simultaneously, which allow for immediate insights and analysis of large datasets
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
        Obtain value propositions, risk assessments, and strategies that enable you to focus on high-value activities
      </p>
    </div>
  </div>
  
  {/* Use Cases Section */}
  <div className="bg-blueback bg-opacity-40 p-8 rounded-lg mb-16">
    <h3 className="text-2xl font-bold text-white text-center mb-6">
      Claims | Risk | Litigation | Contracts
    </h3>
  </div>
  
  {/* CTA Section */}
  <div className="text-center">
    <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-8">
      The Competitive Advantages Are Endless
    </h3>
    
  </div>
</div>

          
        </section>

        
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
                  <p className="text-white ">Handle vast, intricate datasets (e.g., terabytes of data, millions of files) efficiently</p>
                </div>

                {/* <!-- Rapid Results --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Speed</h3>
                  <p className="text-white ">Obtain results in seconds or minutes, rather than hours, days, weeks, or months</p>
                </div>

                {/* <!-- Quality Analysis --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Accuracy</h3>
                  <p className="text-white ">Swiftly gather and analyze large datasets with high precision and effectiveness</p>
                </div>

                {/* <!-- Task-Oriented AI --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Task-Oriented AI</h3>
                  <p className="text-white ">AI agents distill complex information into accurate and clear responses in seconds</p>
                </div>

                {/* <!-- Trust & Verify --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Trust & Verify</h3>
                  <p className="text-white ">Accessible citations, links, and references ensure accuracy and reliability</p>
                </div>

                {/* <!-- Privacy & Security --> */}
                <div className="bg-opacity-80 bg-gray-700 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
                  <h3 className="text-2xl font-sans font-thin text-white mb-2">Privacy & Security</h3>
                  <p className="text-white ">All interactions are fully encrypted and secure for maximum privacy</p>
                </div>

              </div>
            </div>
          </section>




          <section id="features" className="relative py-24 bg-slate-200 mb-0 mt-0 sm:-mt-2 md:-mt-2 lg:mt-0">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl drop-shadow-xl font-extralight font-roboto text-center mb-4 pt-4">
          Our Platform
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
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <Link 
                  href={feature.link} 
                  key={index} 
                  className="block group cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg transform transition duration-300 group-hover:scale-105 h-full"
                  >
                    <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                      <IconComponent className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-sans font-thin text-white text-center mb-4">{feature.title}</h3>
                    <p className="text-white text-center">
                      {feature.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
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