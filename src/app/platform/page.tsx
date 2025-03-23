import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function DataChatPage() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Hero Section */}
        <section className="relative px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20 max-w-8xl w-full mx-auto bg-[#10275E] flex items-center justify-center text-center">
          <div className="relative z-10 p-6 sm:p-10 text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Data Chat</h1>
            <p className="text-blue-100 text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
              Quickly gain insight and understanding about the relevant people, facts, issues and relationships between them
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Request Demo
              </Button>
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Overview Section */}
          {/* Overview Section */}
          <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Data Chat Overview</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Seamless integration</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Processing of large datasets</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Data indexed for fast retrieval</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-gray-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-xs text-green-400 font-mono">
                      1TB Database Connected ✓
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 text-xs font-mono border-b border-gray-300">
                  <div className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span>Data import complete: 1 TB of litigation records (3.2M documents)</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-blue-600">System: Indexing complete</span>
                    <span>Processing time: 47 minutes</span>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-800">Analyze patterns in our litigation outcomes across all 1TB of case data from the past 3 years.</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-800">Analysis of 1TB dataset (3.2M documents) shows a 23% increase in favorable settlements when cases included comprehensive digital evidence. Contract disputes have the highest success rate at 68%, while employment cases show the most variability in outcomes.</p>
                    <div className="mt-3 flex justify-between items-center text-xs">
                      <div className="text-sm text-blue-600">
                        Sources: Case Database (2022-2025), Settlement Records Archive
                      </div>
                      <div className="text-gray-500">
                        Query processed: 2.4 seconds
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-800">Can you break that down by jurisdiction and provide the total data volume analyzed per region?</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-800">Analysis by jurisdiction across the 1TB dataset:</p>
                    <ul className="mt-2 space-y-1 list-inside list-disc text-gray-700">
                      <li>Western District: 74% favorable outcomes (423GB / 840K documents)</li>
                      <li>Eastern District: 52% favorable outcomes (287GB / 612K documents)</li>
                      <li>Northern Circuit: 63% favorable outcomes (176GB / 352K documents)</li>
                      <li>Southern Circuit: 45% favorable outcomes (114GB / 296K documents)</li>
                    </ul>
                    <div className="mt-3 flex justify-between items-center text-xs">
                      <div className="text-sm text-blue-600">
                        Sources: Jurisdictional Case Outcomes (2022-2025)
                      </div>
                      <div className="text-gray-500">
                        Query processed: 3.1 seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-[#10275E] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Natural Language Query</h3>
                <p className="text-gray-300 text-center">
                  Ask questions in plain English without needing to learn complex query languages or database structures.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Real-time Processing</h3>
                <p className="text-gray-300 text-center">
                  Receive instant answers to your questions with our advanced backend processing technology.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Verifiable Sources</h3>
                <p className="text-gray-300 text-center">
                  Every insight comes with citations to source documents, ensuring transparency and trust.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Conversational Memory</h3>
                <p className="text-gray-300 text-center">
                  The system remembers context from previous questions, enabling natural follow-up questions.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Data Visualization</h3>
                <p className="text-gray-300 text-center">
                  Automatically generates appropriate charts and graphs to help visualize complex data relationships.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Enterprise Security</h3>
                <p className="text-gray-300 text-center">
                  Bank-level encryption and security protocols ensure your sensitive data remains protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blueback">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Connect Your Data</h3>
                <p className="text-gray-600">
                  Securely integrate your existing databases, document repositories, and data sources.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">System Indexing</h3>
                <p className="text-gray-600">
                  Our AI processes and indexes your data to enable natural language understanding.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Ask Questions</h3>
                <p className="text-gray-600">
                  Use plain language to ask questions about your data through our intuitive interface.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Receive Insights</h3>
                <p className="text-gray-600">
                  Get instant, verifiable answers and visualizations to drive decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-[#10275E] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Data Chat Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Legal Research</h3>
                <p className="text-gray-300 mb-4">Instantly query case law and precedents to support your legal arguments with confidence.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "What precedents exist for copyright infringement in AI-generated content?"
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Contract Analysis</h3>
                <p className="text-gray-300 mb-4">Quickly identify risks and opportunities within complex contractual agreements.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "What liabilities are we exposed to in the new vendor agreement?"
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Compliance Monitoring</h3>
                <p className="text-gray-300 mb-4">Stay ahead of regulatory requirements with instant access to compliance information.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "How do the new GDPR amendments affect our data storage practices?"
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Case Strategy</h3>
                <p className="text-gray-300 mb-4">Develop stronger legal strategies by analyzing outcomes from similar cases.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "What factors have led to successful outcomes in similar class action suits?"
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Document Discovery</h3>
                <p className="text-gray-300 mb-4">Efficiently search through thousands of documents to find exactly what you need.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "Find all email communications mentioning the Johnson acquisition between March and June."
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
                <p className="text-gray-300 mb-4">Identify potential legal and business risks before they become problems.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
                  "What are the highest risk areas in our current intellectual property portfolio?"
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        </main>
        </div>
  )
}
        