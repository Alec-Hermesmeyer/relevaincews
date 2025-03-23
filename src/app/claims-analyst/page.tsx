import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function ClaimsAnalystPage() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Hero Section */}
        <section className="relative px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20 max-w-8xl w-full mx-auto bg-[#10275E] flex items-center justify-center text-center">
          <div className="relative z-10 p-6 sm:p-10 text-center max-w-6xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Claims Analyst</h1>
            <p className="text-blue-100 text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
              Process and analyze claims with AI-powered precision to identify patterns, detect anomalies, and generate comprehensive risk assessments.
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
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Claims Analyst Overview</h2>
                <p className="text-xl mb-6 text-gray-700">
                  The
                  <span className="inline-flex items-center">
                    <Image
                      src="/Wordmark_w_TM - Black.png"
                      alt="RelevAInce"
                      width={120}
                      height={50}
                      className="h-auto w-auto mx-2"
                    />
                  </span>
                  Claims Analyst transforms how legal professionals evaluate and process claims, using advanced AI to review documentation, analyze patterns, and assess risks with unprecedented accuracy and speed.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  By applying sophisticated algorithms to your claims data, the system can identify trends, flag potential issues, and recommend optimal strategies based on historical outcomes and legal precedents.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Reduces claims processing time by up to 75%</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Improves accuracy of risk assessments by 42%</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">Analyzes thousands of claims simultaneously</p>
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
                      Claims Database: 45,873 records ✓
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 border-b border-gray-300">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-blueback">Claim Risk Assessment</div>
                    <div className="text-xs text-gray-500">Batch ID: CL-2025-03-19-0032</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Claim Validity Score</span>
                      <span className="font-bold text-green-600">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Settlement Probability</span>
                      <span className="font-bold text-yellow-600">62%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">Financial Risk Exposure</span>
                      <span className="font-bold text-blue-600">$147,500</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      <div className="flex justify-between">
                        <span>Confidence Level:</span>
                        <span className="font-medium">93%</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span>Similar Claims Avg. Payout:</span>
                        <span className="font-medium">$152,340</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-xs text-gray-500 flex justify-between">
                    <span>Analysis completed in 3.2 seconds</span>
                    <span>Based on 432 similar cases</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Automated Risk Scoring</h3>
                <p className="text-gray-300 text-center">
                  Generate comprehensive risk scores for claims based on multiple factors including precedent, evidence quality, and jurisdiction.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Pattern Recognition</h3>
                <p className="text-gray-300 text-center">
                  Identify patterns and trends across claims to detect fraudulent activities, common issues, and successful resolution strategies.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Predictive Analytics</h3>
                <p className="text-gray-300 text-center">
                  Forecast likely outcomes and timelines based on historical data and similar cases to optimize resource allocation.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Document Analysis</h3>
                <p className="text-gray-300 text-center">
                  Automatically extract and analyze key information from claim documents, identifying inconsistencies and missing information.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Jurisdictional Analysis</h3>
                <p className="text-gray-300 text-center">
                  Evaluate how different jurisdictions have historically ruled on similar claims to provide location-specific risk assessments.
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-400 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-4">Batch Processing</h3>
                <p className="text-gray-300 text-center">
                  Process thousands of claims simultaneously with our cloud-based infrastructure, eliminating bottlenecks and backlogs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blueback">The Claims Analysis Process</h2>
            
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Process Steps */}
              <div className="space-y-12 md:space-y-0 relative">
                {/* Step 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right p-6 bg-white rounded-lg shadow-md md:mr-12">
                    <h3 className="text-xl font-semibold text-blueback mb-3">1. Data Ingestion</h3>
                    <p className="text-gray-700">Claims data is securely uploaded to the platform, including documents, images, and structured data from your existing systems.</p>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector for desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">1</div>
                </div>
                
                {/* Step 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="hidden md:block"></div>
                  <div className="p-6 bg-white rounded-lg shadow-md md:ml-12">
                    <h3 className="text-xl font-semibold text-blueback mb-3">2. Document Analysis</h3>
                    <p className="text-gray-700">AI analyzes all claim documents to extract key information, validate data consistency, and identify missing elements.</p>
                  </div>
                  {/* Circle connector for desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">2</div>
                </div>
                
                {/* Step 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right p-6 bg-white rounded-lg shadow-md md:mr-12">
                    <h3 className="text-xl font-semibold text-blueback mb-3">3. Risk Assessment</h3>
                    <p className="text-gray-700">The system evaluates claim validity, settlement probability, and financial exposure based on multiple factors and historical data.</p>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector for desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">3</div>
                </div>
                
                {/* Step 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="hidden md:block"></div>
                  <div className="p-6 bg-white rounded-lg shadow-md md:ml-12">
                    <h3 className="text-xl font-semibold text-blueback mb-3">4. Pattern Identification</h3>
                    <p className="text-gray-700">Advanced algorithms detect patterns across claims to identify fraud indicators, common factors in successful claims, and optimization opportunities.</p>
                  </div>
                  {/* Circle connector for desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">4</div>
                </div>
                
                {/* Step 5 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right p-6 bg-white rounded-lg shadow-md md:mr-12">
                    <h3 className="text-xl font-semibold text-blueback mb-3">5. Recommendations</h3>
                    <p className="text-gray-700">Based on the analysis, the system provides actionable recommendations for claim handling, resource allocation, and settlement strategies.</p>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector for desktop */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">5</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-[#10275E] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Claims Analyst Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Insurance Processing</h3>
                <p className="text-gray-300 mb-4">Streamline insurance claim processing with automated validity checks and fraud detection.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>67% faster processing time</li>
                    <li>28% reduction in fraudulent claims</li>
                    <li>$4.2M annual cost savings</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Litigation Assessment</h3>
                <p className="text-gray-300 mb-4">Evaluate litigation risks and potential outcomes to inform settlement decisions.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>42% improved outcome prediction</li>
                    <li>31% reduction in legal costs</li>
                    <li>Faster case resolution by 4.5 months</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Healthcare Claims</h3>
                <p className="text-gray-300 mb-4">Optimize healthcare claim processing, coding validation, and compliance verification.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>53% increase in processing volume</li>
                    <li>92% accuracy in coding validation</li>
                    <li>23% reduction in denial rates</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Bulk Settlement Analysis</h3>
                <p className="text-gray-300 mb-4">Analyze large sets of similar claims to determine optimal settlement strategies.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>82% batch processing efficiency</li>
                    <li>$2.8M reduction in settlement costs</li>
                    <li>3.2x faster resolution times</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fraud Detection</h3>
                <p className="text-gray-300 mb-4">Identify potentially fraudulent claims using pattern recognition and anomaly detection.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>76% detection rate improvement</li>
                    <li>12% reduction in false positives</li>
                    <li>$7.3M in prevented fraudulent payouts</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300 mb-4">Ensure claims processing meets regulatory requirements across multiple jurisdictions.</p>
                <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded">
                  <span className="text-blue-300 block mb-1">Key Results:</span>
                  <ul className="list-disc pl-5 text-blue-100 space-y-1">
                    <li>99.7% compliance verification</li>
                    <li>Zero regulatory penalties</li>
                    <li>41% reduction in compliance costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        </main>
        </div>
  )
}