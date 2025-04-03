import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function AvatarPresentationsPage() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Header Section */}
        <section className="py-16 bg-blueback text-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DYNAMIC AVATAR PRESENTATIONS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your content delivery with AI-powered avatars that bring your presentations to life
            </p>
          </div>
        </section>

        {/* Custom Avatar Builder Section */}
        <section className="py-16 bg-gradient-to-b from-blueback to-blueback text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">Custom Avatar Builder</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-100 mb-1">Create Customizable Presentations Based on User Inputs</h3>
                      <p className="text-gray-300">Tailor your presentations with real-time customization options that adapt to your specific requirements</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-100 mb-1">Innovative Approaches for Specific Audiences</h3>
                      <p className="text-gray-300">Leverage cutting-edge presentation techniques that cater to the specific needs of your audience and content</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-100 mb-1">Dynamically Configurable</h3>
                      <p className="text-gray-300">Adjust presentation parameters in real-time to optimize for different scenarios and contexts</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-blue-700">
                  <div className="bg-gray-800 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-xs text-blue-400 font-mono">
                        Avatar-Builder.exe
                      </div>
                    </div>
                  </div>

                  <div className="relative h-96 bg-gradient-to-b from-blue-900/50 to-indigo-900/50 overflow-hidden">
                    {/* Video Container - Replacing the animated avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <video 
                        className="w-full h-full object-cover"
                        src="/Avatar.mp4" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      />
                    </div>
                    
                    {/* Control Panel at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-sm border-t border-blue-900 z-10">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-full h-1 bg-blue-900 rounded-full">
                            <div className="w-1/2 h-1 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-full h-1 bg-blue-900 rounded-full">
                            <div className="w-3/4 h-1 bg-purple-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-teal-500"></div>
                        </div>
                        <div className="bg-gray-800 rounded p-2 flex items-center justify-center">
                          <div className="w-full h-1 bg-blue-900 rounded-full">
                            <div className="w-2/3 h-1 bg-teal-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Create a Presentation Tailor-Made for Your Audience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dynamic avatar system helps you create customized presentations that engage and resonate with your audience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Customizable Presentations */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
                <div className="text-blue-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customizable Presentations</h3>
                <p className="text-gray-700 mb-6">
                  Create presentations tailored to your specific needs with our intuitive interface that allows for customization based on:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    User-defined content topics and themes
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Audience analysis and engagement preferences
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Learning goals and presentation objectives
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Visual and audio style preferences
                  </li>
                </ul>
              </div>
              
              {/* Innovative Approaches */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
                <div className="text-purple-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Approaches</h3>
                <p className="text-gray-700 mb-6">
                  Leverage cutting-edge presentation techniques specifically designed to meet the needs of your audience through:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI-driven audience analysis and adaptation
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Interactive storytelling and scenario-based learning
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Adaptive content pacing based on engagement metrics
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Diverse learning and communication styles support
                  </li>
                </ul>
              </div>
              
              {/* Dynamically Configurable */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
                <div className="text-teal-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dynamically Configurable</h3>
                <p className="text-gray-700 mb-6">
                  Adjust and fine-tune your presentations with dynamic configuration options that allow you to:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Modify avatar appearance and behavior 
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Adjust presentation pacing based on audience feedback
                  </li>
                  
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Customize visual elements for different presentation contexts
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Presentations</h2>
            <p className="text-xl mb-8">
              Discover how our Dynamic Avatar system can help you deliver more engaging, interactive, and impactful presentations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/#demo" >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Request a Demo
              </Button>
              </Link>
              <Link href="/#demo" >
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Contact Sales
              </Button>
              </Link>
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