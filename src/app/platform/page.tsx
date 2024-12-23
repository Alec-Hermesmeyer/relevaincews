"use client";
import Image from 'next/image'
import Link from 'next/link'
import { Command } from 'lucide-react'
import { Button } from '@/components/ui-components'
import { useEffect, useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<string | null>(null);
    const features = [
        "Analyze vast datasets in seconds.",
        "Verify and trust AI-generated insights.",
        "Streamline workflows with actionable intelligence.",
        "Achieve cognitive reasoning across massive scale."
      ];
      
      function AnimatedFeatureLoop() {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
          }, 3000); // Change every 3 seconds
          return () => clearInterval(interval);
        }, []);
      
        return (
          <div className="text-center my-12">
            <h2 className="text-4xl font-semibold text-slate-200 mb-4">
              What RelevAInce Can Do
            </h2>
            <div className="relative h-20">
              <p className="absolute inset-0 flex items-center justify-center text-xl text-slate-200 transition-opacity duration-500">
                {features[currentIndex]}
              </p>
            </div>
          </div>
        );
      }
    

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
    
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold">
            L
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="/security" className="text-gray-600 hover:text-gray-900">
              Security
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-gray-900">
              Careers
            </Link>
            <Link href="/customers" className="text-gray-600 hover:text-gray-900">
              Customers
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-gray-900">
              News
            </Link>
            <Button variant="default" className="bg-black text-white hover:bg-black/90">
              LOGIN
            </Button>
          </div>
        </nav>
      </header> */}

      <main className="">
        {/* Hero Section */}
        <section className="px-6 py-20 md:py-16 max-w-8xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center bg-slate-200 ">
            {/* Clip-path Div */}
            <div className="absolute w-full inset-x-0 -bottom-12 left-0 z-0 lg:left-0 md:left-28 lg:-bottom-3 md:-bottom-3 ">
              <div
                className="w-full h-60 bg-[#10275E] z-0 overflow-hidden"
                style={{ clipPath: "polygon(100% 0, 100% 100%,10% 100%)" }}
              ></div>
            </div>
          <div className='px-2 sm:px-10 md:px-20 lg:px-20'>
            <div className="text-xl font-medium mb-4"> Our Platform</div>
            <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-7xl font-semibold mb-6 text-blueback">
              RelevAInce
            </h1>
            <p className="text-gray-600 text-2xl mb-8 max-w-lg font-semibold">
            We have unlocked the key... finally reasoning across massive scale
            </p>
            
            <Link href="/#demo">
            <Button size="lg" className="w-full bg-blueback hover:bg-blue-900 text-white py-3 rounded-lg">
              Request a demo
              {/* <span className="ml-2 text-xs text-gray-400 border border-gray-400 rounded px-1">⌘</span>
              <span className="ml-1 text-xs text-gray-400 border border-gray-400 rounded px-1">K</span> */}
            </Button>
            </Link>
          </div>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/LogoPurple.png"
              alt="RelenvAInce Logo"
              fill
              className="object-contain" 
              priority
            />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="px-6 py-20 bg-[#10275E]">
  
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12 text-slate-200">
      <h2 className="text-4xl md:text-5xl font-semibold">Trust And Verify</h2>
    </div>
    <div className="text-center mb-6">
        <p className="text-xl text-slate-200 max-w-4xl mx-auto">
          Users can now finally trust and verify the answers to their complex questions or the analysis and reasoning.
        </p>
      </div>

    {/* Video and Text Section */}
    <div className="flex flex-col gap-12">
      <div className="relative">
        <video
          className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/verify.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
     
    </div>

    {/* Demo Button */}
    <div className="text-center mt-12">
      <Link href="/#demo">
        <Button
          size="lg"
          className="px-8 py-4 bg-slate-200 hover:bg-slate-300 text-blueback rounded-lg text-lg"
        >
          Request a Demo
        </Button>
      </Link>
    </div>
  </div>
</section>

<section className="px-6 py-20 bg-slate-200">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12 text-blueback">
      <h2 className="text-4xl md:text-5xl font-semibold">Cognitive Reasoning Across a Massive Scale</h2>
    </div>
    <div className="text-center mb-6">
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          Gone are the days of being buried in data. Users can finally obtain cognitive reasoning across massive scale in a matter of seconds.
        </p>
      </div>
    {/* Video and Text Section */}
    <div className="flex flex-col gap-12">
      <div className="relative">
        <video
          className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
          muted
          loop
          autoPlay
          playsInline
        >
          <source src="/cognitive.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
    </div>

    {/* Demo Button */}
    <div className="text-center mt-12">
      <Link href="/#demo">
        <Button
          size="lg"
          className="px-8 py-4 bg-blueback hover:bg-blue-900 text-white rounded-lg text-lg"
        >
          Request a Demo
        </Button>
      </Link>
    </div>
  </div>
</section>


<footer className="bg-gray-800  py-8">
          <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-sm text-white mb-4 md:mb-0 text-center">
                 © 2024 relevAInce All rights reserved.
              </p>

            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}