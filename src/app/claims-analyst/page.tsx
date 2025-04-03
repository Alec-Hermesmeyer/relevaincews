import Link from 'next/link'
import { Button } from '@/components/ui-components'
import Image from 'next/image'

export default function ClaimsAnalystPage() {
  return (
    <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <main>
        {/* Header Section */}
        <section className="py-16 bg-blueback text-white">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CLAIMS ANALYST</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A Virtual Research Team at your Fingertips
            </p>
          </div>
        </section>

        {/* Fact Analyst Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Fact Analyst</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Comprehensive Fact Analyst</h3>
                      <p className="text-gray-600">Automatically extracts key facts from very large datasets in minutes, not weeks</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Witness Identification</h3>
                      <p className="text-gray-600">Identifies and profiles key witnesses, including their relevance to specific issues</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Chronology Creation</h3>
                      <p className="text-gray-600">Constructs timelines to visualize the sequence of events in your case</p>
                    </div>
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
                      Processing: 83% ▓▓▓▓▓▓▓▓▓░
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-100 border-b border-gray-300">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-blueback">Fact Analyst</div>
                    <div className="text-xs text-gray-500">ID: FA-3247</div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {/* Key Facts Block */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h13V7H9V5l-7 7 7 7z" />
                        </svg>
                        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Facts</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span> Contract signed on March 3, 2019
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span> Client terminated agreement in July 2020
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span> Multiple email exchanges regarding breach of contract
                        </li>
                      </ul>
                    </div>

                    {/* Key Witnesses Block */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A10.97 10.97 0 0112 15c2.003 0 3.867.588 5.414 1.596M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Witnesses</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span> Jane Doe (Project Manager)
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span> John Smith (Legal Counsel)
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-400 mr-2 mt-1">•</span> Alex Johnson (Vendor Liaison)
                        </li>
                      </ul>
                    </div>

                    {/* Key Chronology Block */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Chronology</h4>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span> 2018 - Initial project discussions
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span> 2019 - Contract finalized and signed
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span> 2020 - Dispute and termination
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span> 2021 - Lawsuit filed
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contract Analyst Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left Column - The Visual Interface (Now First) */}
      <div className="order-1 md:order-1">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-green-400 font-mono">
                Scanning: 76% ▓▓▓▓▓▓▓░░░
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-100 border-b border-gray-300">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-blue-800">Contract Analyst</div>
              <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm">ID: CA-9518</div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Analysis Cards */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Relevant Provisions</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">&bull;</span> Section 4.2: Confidentiality Clause
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">&bull;</span> Section 12.3: Delivery Timelines
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">&bull;</span> Section 18.2: Termination Terms
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Potential Violations</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">&bull;</span> Breach of delivery deadlines (Section 12.3)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">&bull;</span> Ambiguity in penalty clauses
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center mb-3">
                <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6M3 6h18" />
                </svg>
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Position Impacts</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">&bull;</span> Weakens enforceability due to vague terms
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">&bull;</span> Strengthens buyer negotiation power
                </li>
              </ul>
            </div>

            <div className="text-xs text-gray-500 flex justify-between items-center pt-4 border-t border-gray-200">
              <span>Contract Type: Service Agreement</span>
              <span>Last updated: 23 minutes ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Descriptive Content */}
      <div className="text-left order-2 md:order-2">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-800">Contract Analyst</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Analysis of Key Terms</h3>
              <p className="text-gray-600">Identifies relevant contract language and evaluates impact</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Identifies Potential Violations</h3>
              <p className="text-gray-600">Identify terms that might have been breached</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Position Impact</h3>
              <p className="text-gray-600">Assesses how contract terms impact the issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-slate-100">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Research Analyst</h2>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Legal Research</h3>
              <p className="text-gray-600">Searches multiple jurisdictions and legal databases for relevant precedents</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Case Law Identification</h3>
              <p className="text-gray-600">Identifies precedents most similar to your case facts and issues</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">Position Strength Analysis</h3>
              <p className="text-gray-600">Evaluates how case law affects the relative strength of each party's arguments</p>
            </div>
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
              Searching: 91% ▓▓▓▓▓▓▓▓▓░
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-100 border-b border-gray-300">
          <div className="flex justify-between items-center">
            <div className="font-semibold text-blueback">Research Analyst</div>
            <div className="text-xs text-gray-500">ID: RA-6123</div>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-800">Research Progress</span>
              <span className="text-sm font-medium text-blue-600">91%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "91%" }}></div>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex justify-between">
              <span>16 legal databases searched</span>
              <span>27 relevant cases found</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Smith v. Johnson (2020)</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Acme Corp v. XYZ Inc. (2022)</div>               </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-start">
                <div className="text-blue-600 mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Taylor v. Green (2021)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 flex justify-between items-center pt-4 border-t border-gray-200">
            <span>Search started: 09:32 AM</span>
            <span>Last updated: 14 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Senior Research Analyst Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-xs text-green-400 font-mono">Analyzing: 68% ▓▓▓▓▓▓░░░░</div>
      </div>
    </div>

    <div className="p-4 bg-gray-100 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-blueback">Senior Research Analyst</div>
        <div className="text-xs text-gray-500">ID: SRA-1842</div>
      </div>
    </div>

    <div className="p-6 space-y-6">
      {/* Overall Evaluation */}
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="text-sm font-semibold text-blueback mb-2">Overall Evaluation of Party Positions</h3>
        <p className="text-sm text-gray-700">
          Party A presents a stronger contractual foundation and factual consistency across analyzed evidence. Party B relies more heavily on interpretation and lacks corroborating documentation in key areas.
        </p>
      </div>

      {/* Likelihood of Assessment */}
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
        <h3 className="text-sm font-semibold text-yellow-700 mb-2">Likelihood of Assessment</h3>
        <p className="text-sm text-gray-700">
          Based on the current analysis, Party A holds a higher likelihood of prevailing on the primary claim. However, Party B may retain leverage in areas involving procedural ambiguity or undefined terms.
        </p>
      </div>

      {/* Synthesis of Findings */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Synthesis of Findings</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>Section 12.3 favors Party A&apos;s interpretation based on consistent precedent.</li>
          <li>Key witness statements align more clearly with Party A&apos;s timeline.</li>
          <li>Contract terms lack clarity in defining mutual obligations.</li>
          <li>Party B&apos;s position is weakened by absence of delivery logs.</li>
        </ul>
      </div>

      <div className="mt-6 text-xs text-gray-500 flex justify-between items-center pt-4 border-t border-gray-200">
        <span>Expected completion: 45 minutes</span>
        <span>Last updated: 31 minutes ago</span>
      </div>
    </div>
  </div>
</div>


              <div className="text-left order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Senior Research Analyst</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Comprehensive Integration</h3>
                      <p className="text-gray-600">Combines findings from facts, contracts, and case law into a unified analysis</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Strategic Assessment</h3>
                      <p className="text-gray-600">Provides position analysis with strategic recommendations</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800 mb-1">Strength/Weakness Analysis</h3>
                      <p className="text-gray-600">Quantifies relative position strengths with supporting rationale</p>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 text-white text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Claims Process</h2>
            <p className="text-xl mb-8">
              Discover how our Claims Analyst can help you process claims faster, reduce risks, and improve outcomes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Request a Demo
              </Button>
              </Link>
              <Link href="/#demo">
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
