import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Hero Section */}
        <section
          className="relative px-20 py-20 md:py-20 max-w-8xl w-full mx-auto bg-slate-200 flex items-center justify-center text-center bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/LogoPurple.png')" }}
        >
          <div className="relative z-10 p-10 text-center">
            <div className="text-xl font-medium text-white mb-4">
             
            </div>
            <div className="flex justify-center pb-8">
                <Image
                  src="/Wordmark_wo_TM - White.ai (1).png"
                  alt="LegalAI Pro"
                  width={850}
                  height={850} />
              </div>
            <p
              className="text-white text-2xl mb-8 max-w-5xl font-semibold mx-auto"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}
            >
              A platform that has finally unlocked the key...cognitive reasoning across massive scale.  A platform that provides sophisticated reasoning, where you can quickly and easily understand causal relationships, obtain an independent semantic understanding of the issues, and obtain the most relevant answers with verifiable data and documentation that you can trust AND verify.  <br></br><br></br>The benefits, just to name a few: 
            </p>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </section>

        {/* Cognitive Reasoning Section */}
        <section className="px-6 py-20 bg-[#10275E] text-slate-200 text-center">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">Cognitive Reasoning</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6">
  Whether you want to level the playing field or find the needle in the haystack… the <i>RelevAInce Platform</i>™ assists you in actively interpreting and reasoning through data to help make a more informed decision.
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
          </div>
        </section>

        {/* Trust and Verify Section */}
        <section className="px-6 py-20 bg-slate-200 text-center text-blueback">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">Trust And Verify</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 text-gray-700">
              In obtaining the bottom line answers to your questions as you sift through your data, the <i>RelevAInce Platform</i>™ provides you with verifiable documentation so that you can Trust AND Verify your conclusions.
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
        </section>

        <footer className="bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-white">© 2025 RelevAInce All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
