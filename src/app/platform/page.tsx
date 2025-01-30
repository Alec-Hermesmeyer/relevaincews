import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Hero Section */}
        <section
  className="relative px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20 max-w-8xl w-full mx-auto bg-slate-100 flex items-center justify-center text-center bg-cover sm:bg-contain bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/LogoPurple.png')" }}
>
  <div className="relative z-10 p-6 sm:p-10 text-center">
    {/* Responsive Image Container */}
    <div className="flex justify-center pb-6 sm:pb-8 mt-2">
      <Image
        src="/Wordmark_w_TM - Dark Blue Gray.png"
        alt="LegalAI Pro"
        width={850}
        height={850}
        className="w-[300px] sm:w-[500px] md:w-[850px] max-w-full h-auto"
      />
    </div>

    {/* Responsive Text */}
    <p
      className="text-blueback text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-[90%] md:max-w-5xl mx-auto"
      style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 1)' }}
    >
      Our platform provides sophisticated reasoning that allows you to quickly understand causal relationships and obtain an independent, comprehensive understanding of the issues and most relevant answers to your questions with data and documentation that you can trust AND verify.
    </p>
  </div>
</section>


        {/* Cognitive Reasoning Section */}
        <section className="px-6 py-20 bg-[#10275E] text-slate-200 text-center">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">Cognitive Reasoning</h2>
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
          </div>
        </section>

        {/* Trust and Verify Section */}
        <section className="px-6 py-20 bg-slate-200 text-center text-blueback">
          <div className="w-full mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-12">Trust And Verify</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 text-gray-700">
              In obtaining the bottom line answers to your questions as you sift through your data, the&nbsp;
              <span className="inline-flex items-center">
                <Image
                  src="/Wordmark_w_TM - Black.png"
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
