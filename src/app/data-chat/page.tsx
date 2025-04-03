// import Link from 'next/link'
// import { Button } from '@/components/ui-components'
// import Image from 'next/image'

// export default function DataChatPage() {
//   return (
//     <div className="flex overflow-x-hidden flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
//       <main>
//         {/* Hero Section */}
//         <section className="relative px-6 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20 max-w-8xl w-full mx-auto bg-[#10275E] flex items-center justify-center text-center">
//           <div className="relative z-10 p-6 sm:p-10 text-center max-w-6xl">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Data Chat</h1>
//             <p className="text-blue-100 text-xl sm:text-2xl mb-8 max-w-4xl mx-auto">
//               Quickly gain insight and understanding about the relevant people, facts, issues and relationships between them
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
//                 Request Demo
//               </Button>
//               <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
//                 Learn More
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Overview Section */}
//         <section className="py-16 bg-slate-100">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="text-left">
//                 <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Data Chat Overview</h2>
                
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="text-blue-600 mr-4 mt-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="text-lg text-gray-700">Seamless integration</p>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="text-blue-600 mr-4 mt-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="text-lg text-gray-700">Processing of large datasets</p>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="text-blue-600 mr-4 mt-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     <p className="text-lg text-gray-700">Data indexed for fast retrieval</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-xl overflow-hidden">
//                 <div className="bg-gray-800 p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <div className="text-xs text-green-400 font-mono">
//                       1TB Database Connected ✓
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-100 p-3 text-xs font-mono border-b border-gray-300">
//                   <div className="flex items-center text-gray-700">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//                     </svg>
//                     <span>Data import complete: 1 TB of litigation records (3.2M documents)</span>
//                   </div>
//                   <div className="flex justify-between mt-1">
//                     <span className="text-blue-600">System: Indexing complete</span>
//                     <span>Processing time: 47 minutes</span>
//                   </div>
//                 </div>
//                 <div className="p-6 space-y-6">
//                   <div className="bg-blue-50 p-4 rounded-lg">
//                     <p className="font-medium text-gray-800">Analyze patterns in our litigation outcomes across all 1TB of case data from the past 3 years.</p>
//                   </div>
//                   <div className="bg-gray-100 p-4 rounded-lg">
//                     <p className="text-gray-800">Analysis of 1TB dataset (3.2M documents) shows a 23% increase in favorable settlements when cases included comprehensive digital evidence. Contract disputes have the highest success rate at 68%, while employment cases show the most variability in outcomes.</p>
//                     <div className="mt-3 flex justify-between items-center text-xs">
//                       <div className="text-sm text-blue-600">
//                         Sources: Case Database (2022-2025), Settlement Records Archive
//                       </div>
//                       <div className="text-gray-500">
//                         Query processed: 2.4 seconds
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-blue-50 p-4 rounded-lg">
//                     <p className="font-medium text-gray-800">Can you break that down by jurisdiction and provide the total data volume analyzed per region?</p>
//                   </div>
//                   <div className="bg-gray-100 p-4 rounded-lg">
//                     <p className="text-gray-800">Analysis by jurisdiction across the 1TB dataset:</p>
//                     <ul className="mt-2 space-y-1 list-inside list-disc text-gray-700">
//                       <li>Western District: 74% favorable outcomes (423GB / 840K documents)</li>
//                       <li>Eastern District: 52% favorable outcomes (287GB / 612K documents)</li>
//                       <li>Northern Circuit: 63% favorable outcomes (176GB / 352K documents)</li>
//                       <li>Southern Circuit: 45% favorable outcomes (114GB / 296K documents)</li>
//                     </ul>
//                     <div className="mt-3 flex justify-between items-center text-xs">
//                       <div className="text-sm text-blue-600">
//                         Sources: Jurisdictional Case Outcomes (2022-2025)
//                       </div>
//                       <div className="text-gray-500">
//                         Query processed: 3.1 seconds
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Second Snapshot - Rapid Chat Interface */}
//         <section className="py-16 bg-white">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-blueback">Rapid Query Resolution</h2>
            
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Alex Chat Interface */}
//               <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
//                 <div className="bg-[#10275E] p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="text-white font-semibold">Chat Interface</div>
//                       <div className="ml-2 px-2 py-1 bg-green-500 text-xs text-white rounded-full">Online</div>
//                     </div>
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
//                   <div className="space-y-4">
//                     <div className="flex justify-end">
//                       <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
//                         <p className="text-gray-800">What is the average settlement amount for employment discrimination cases in our Northeast region?</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex">
//                       <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
//                       <div className="bg-gray-100 p-3 rounded-lg max-w-md">
//                         <p className="text-gray-800">The average settlement amount for employment discrimination cases in the Northeast region is $212,450, based on 87 cases over the past 3 years.</p>
//                         <p className="text-gray-600 text-sm mt-2">Data analyzed: 312MB from Employment Cases Database</p>
//                         <p className="text-gray-500 text-xs mt-1">Query processed in: 1.2 seconds</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-end">
//                       <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
//                         <p className="text-gray-800">How does that compare to the same cases nationally?</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex">
//                       <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
//                       <div className="bg-gray-100 p-3 rounded-lg max-w-md">
//                         <p className="text-gray-800">The national average for employment discrimination settlements is $176,320, making the Northeast region 20.5% higher than the national average.</p>
//                         <div className="mt-3 bg-white p-2 rounded border border-gray-200">
//                           <div className="h-24 flex items-end justify-around px-2">
//                             <div className="w-16 bg-blue-500 h-16 rounded-t-md text-center pt-1 text-xs text-white font-medium">NE<br/>$212K</div>
//                             <div className="w-16 bg-gray-500 h-14 rounded-t-md text-center pt-1 text-xs text-white font-medium">National<br/>$176K</div>
//                             <div className="w-16 bg-blue-300 h-12 rounded-t-md text-center pt-1 text-xs text-white font-medium">South<br/>$154K</div>
//                             <div className="w-16 bg-blue-300 h-20 rounded-t-md text-center pt-1 text-xs text-white font-medium">West<br/>$193K</div>
//                           </div>
//                         </div>
//                         <p className="text-gray-500 text-xs mt-3">Query processed in: 2.8 seconds</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 border-t border-gray-200 bg-white">
//                   <div className="flex">
//                     <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ask a question about your data..." />
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Key Benefits with Bullet Points */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-semibold text-blueback mb-6">Efficiently and quickly interface and chat with your data</h3>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Response to user queries in seconds</h4>
//                     <p className="text-gray-600 mt-1">Get instant answers to complex questions without waiting for lengthy processing times</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Efficient exploration of massive datasets</h4>
//                     <p className="text-gray-600 mt-1">Analyze terabytes of data effortlessly with our advanced retrieval and processing engine</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Ease of interface and use</h4>
//                     <p className="text-gray-600 mt-1">Intuitive chat-based interface requires no technical knowledge to extract powerful insights</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Third Snapshot - Source References */}
//         <section className="py-16 bg-slate-100">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-blueback">Transparent & Verifiable Results</h2>
            
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Key Benefits with Bullet Points */}
//               <div className="space-y-6 order-2 md:order-1">
//                 <h3 className="text-2xl font-semibold text-blueback mb-6">Build Trust With Source Verification</h3>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Reference to sources provided</h4>
//                     <p className="text-gray-600 mt-1">Every answer includes specific citation links back to original source documents</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Allows for user verification</h4>
//                     <p className="text-gray-600 mt-1">One-click access to view source documents directly for complete transparency</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold text-gray-800">Configurable to user choice on number of sources provided</h4>
//                     <p className="text-gray-600 mt-1">Customize the number and type of references based on your specific needs</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* ALEC Source Reference Interface */}
//               <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 order-1 md:order-2">
//                 <div className="bg-[#10275E] p-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <div className="text-white font-semibold">Source Verification</div>
//                       <div className="ml-2 px-2 py-1 bg-green-500 text-xs text-white rounded-full">Active</div>
//                     </div>
//                     <div className="flex space-x-2">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
//                   <div className="space-y-4">
//                     <div className="flex justify-end">
//                       <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
//                         <p className="text-gray-800">What case precedents exist for AI copyright infringement in our jurisdiction?</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex">
//                       <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
//                       <div className="bg-gray-100 p-3 rounded-lg max-w-md">
//                         <p className="text-gray-800">There are 3 major precedents for AI copyright cases in your jurisdiction:</p>
//                         <ol className="mt-2 space-y-1 list-decimal list-inside text-gray-700">
//                           <li>Smith v. TechAI Corp (2023) - established fair use limitations</li>
//                           <li>CreativeWorks LLC v. ModelGen (2024) - defined "transformative works"</li>
//                           <li>Roberts Media v. AI Systems Inc (2024) - established licensing requirements</li>
//                         </ol>
                        
//                         <div className="mt-4 bg-white p-3 rounded-lg border border-gray-200">
//                           <h5 className="text-sm font-semibold text-gray-800">Source References</h5>
//                           <div className="mt-2 space-y-2">
//                             <div className="flex items-center space-x-2 text-sm">
//                               <span className="text-blue-600 cursor-pointer underline">Case File #2023-CV-4582</span>
//                               <span className="text-xs bg-blue-100 px-2 py-1 rounded text-blue-700">Primary Source</span>
//                             </div>
//                             <div className="flex items-center space-x-2 text-sm">
//                               <span className="text-blue-600 cursor-pointer underline">Legal Journal Vol.42 "AI Copyright Framework"</span>
//                               <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Secondary</span>
//                             </div>
//                             <div className="flex items-center space-x-2 text-sm">
//                               <span className="text-blue-600 cursor-pointer underline">District Court Ruling Database</span>
//                               <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">Secondary</span>
//                             </div>
//                             <div className="text-center mt-2">
//                               <button className="text-xs text-blue-600 hover:underline">View 4 more sources</button>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="mt-3 flex justify-between items-center text-xs">
//                           <div className="flex items-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <span className="text-green-600">Verified: 7/7 sources match</span>
//                           </div>
//                           <div className="text-gray-500">
//                             Sources found: 4.2 seconds
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex justify-end">
//                       <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
//                         <p className="text-gray-800">Show me direct quotes from the Smith v. TechAI Corp case</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-4 border-t border-gray-200 bg-white">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                       </svg>
//                       Source preference: <span className="font-medium">Primary + 2 Secondary</span>
//                     </div>
//                     <button className="text-xs text-blue-600 hover:underline">Change</button>
//                   </div>
//                   <div className="flex">
//                     <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ask about source documents..." />
//                     <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Key Features Section */}
//         <section className="py-16 bg-[#10275E] text-white">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Key Features</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Natural Language Query</h3>
//                 <p className="text-gray-300 text-center">
//                   Ask questions in plain English without needing to learn complex query languages or database structures.
//                 </p>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Real-time Processing</h3>
//                 <p className="text-gray-300 text-center">
//                   Receive instant answers to your questions with our advanced backend processing technology.
//                 </p>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Verifiable Sources</h3>
//                 <p className="text-gray-300 text-center">
//                   Every insight comes with citations to source documents, ensuring transparency and trust.
//                 </p>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Conversational Memory</h3>
//                 <p className="text-gray-300 text-center">
//                   The system remembers context from previous questions, enabling natural follow-up questions.
//                 </p>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Data Visualization</h3>
//                 <p className="text-gray-300 text-center">
//                   Automatically generates appropriate charts and graphs to help visualize complex data relationships.
//                 </p>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
//                 <div className="text-blue-400 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-white text-center mb-4">Enterprise Security</h3>
//                 <p className="text-gray-300 text-center">
//                   Bank-level encryption and security protocols ensure your sensitive data remains protected.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section className="py-16 bg-slate-100">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-blueback">How It Works</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//                 <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
//                 <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">Connect Your Data</h3>
//                 <p className="text-gray-600">
//                   Securely integrate your existing databases, document repositories, and data sources.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//                 <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
//                 <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">System Indexing</h3>
//                 <p className="text-gray-600">
//                   Our AI processes and indexes your data to enable natural language understanding.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//                 <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
//                 <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">Ask Questions</h3>
//                 <p className="text-gray-600">
//                   Use plain language to ask questions about your data through our intuitive interface.
//                 </p>
//               </div>
              
//               <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
//                 <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">4</div>
//                 <div className="text-blue-600 text-4xl mb-4 flex justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-800">Receive Insights</h3>
//                 <p className="text-gray-600">
//                   Get instant, verifiable answers and visualizations to drive decision-making.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Use Cases Section */}
//         <section className="py-16 bg-[#10275E] text-white">
//           <div className="container mx-auto px-6 max-w-7xl">
//             <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Data Chat Use Cases</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Legal Research</h3>
//                 <p className="text-gray-300 mb-4">Instantly query case law and precedents to support your legal arguments with confidence.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "What precedents exist for copyright infringement in AI-generated content?"
//                 </div>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Contract Analysis</h3>
//                 <p className="text-gray-300 mb-4">Quickly identify risks and opportunities within complex contractual agreements.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "What liabilities are we exposed to in the new vendor agreement?"
//                 </div>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Compliance Monitoring</h3>
//                 <p className="text-gray-300 mb-4">Stay ahead of regulatory requirements with instant access to compliance information.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "How do the new GDPR amendments affect our data storage practices?"
//                 </div>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Case Strategy</h3>
//                 <p className="text-gray-300 mb-4">Develop stronger legal strategies by analyzing outcomes from similar cases.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "What factors have led to successful outcomes in similar class action suits?"
//                 </div>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Document Discovery</h3>
//                 <p className="text-gray-300 mb-4">Efficiently search through thousands of documents to find exactly what you need.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "Find all email communications mentioning the Johnson acquisition between March and June."
//                 </div>
//               </div>
              
//               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
//                 <p className="text-gray-300 mb-4">Identify potential legal and business risks before they become problems.</p>
//                 <div className="text-sm bg-gray-700 bg-opacity-50 p-3 rounded italic text-blue-100">
//                   "What are the highest risk areas in our current intellectual property portfolio?"
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-6 max-w-4xl text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blueback">Ready to Transform Your Data Experience?</h2>
//             <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
//               Experience the power of Data Chat and discover insights that drive better business decisions.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="bg-[#10275E] hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
//                 Schedule a Demo
//               </Button>
//               <Button className="bg-white border-2 border-[#10275E] hover:bg-gray-100 text-[#10275E] px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
//                 Learn More
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }
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
            <Link href="/#demo">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Request Demo
              </Button>
              </Link>
              <Link href='/#features'>
              <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Learn More
              </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blueback">Ingestion at Scale</h2>
                
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
                      Data Ingestion System
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Data Source Connected</h4>
                        <p className="text-sm text-gray-600">Corporate data warehouse</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Ready</div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Data Ingestion Progress</span>
                      <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">1TB Total Size</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                      <span>3,200,000 Documents</span>
                      <span>100% Complete</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center text-gray-700 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Data import complete</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 font-mono text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Documents processed:</span>
                        <span className="text-gray-900">3,200,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total data size:</span>
                        <span className="text-gray-900">1.0 TB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Processing time:</span>
                        <span className="text-gray-900">16 Hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">System status:</span>
                        <span className="text-green-600">Indexing complete</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-800 font-medium">System Ready</p>
                        <p className="text-xs text-gray-600 mt-1">All documents have been processed and indexed. The system is ready to respond to queries.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Snapshot - Rapid Chat Interface */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-blueback">Rapid Query Resolution</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Alex Chat Interface */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-[#10275E] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-white font-semibold">Chat Interface</div>
                      <div className="ml-2 px-2 py-1 bg-green-500 text-xs text-white rounded-full">Online</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                        <p className="text-gray-800">What is the average settlement amount for employment discrimination cases in our Northeast region?</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
                      <div className="bg-gray-100 p-3 rounded-lg max-w-md">
                        <p className="text-gray-800">The average settlement amount for employment discrimination cases in the Northeast region is $212,450, based on 87 cases over the past 3 years.</p>
                        <p className="text-gray-600 text-sm mt-2">Data analyzed: 312MB from Employment Cases Database</p>
                        <p className="text-gray-500 text-xs mt-1">Query processed in: 1.2 seconds</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                        <p className="text-gray-800">How does that compare to the same cases nationally?</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
                      <div className="bg-gray-100 p-3 rounded-lg max-w-md">
                        <p className="text-gray-800">The national average for employment discrimination settlements is $176,320, making the Northeast region 20.5% higher than the national average.</p>
                        <div className="mt-3 bg-white p-2 rounded border border-gray-200">
                          <div className="h-24 flex items-end justify-around px-2">
                            <div className="w-16 bg-blue-500 h-16 rounded-t-md text-center pt-1 text-xs text-white font-medium">NE<br/>$212K</div>
                            <div className="w-16 bg-gray-500 h-14 rounded-t-md text-center pt-1 text-xs text-white font-medium">National<br/>$176K</div>
                            <div className="w-16 bg-blue-300 h-12 rounded-t-md text-center pt-1 text-xs text-white font-medium">South<br/>$154K</div>
                            <div className="w-16 bg-blue-300 h-20 rounded-t-md text-center pt-1 text-xs text-white font-medium">West<br/>$193K</div>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs mt-3">Query processed in: 2.8 seconds</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex">
                    <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ask a question about your data..." />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Key Benefits with Bullet Points */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blueback mb-6">Efficiently and Quickly interface and chat with large datasets</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Response to user queries in seconds</h4>
                    <p className="text-gray-600 mt-1">Get instant answers to complex questions without waiting for lengthy processing times</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Efficient exploration of massive datasets</h4>
                    <p className="text-gray-600 mt-1">Analyze terabytes of data effortlessly with our advanced retrieval and processing engine</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Ease of interface and use</h4>
                    <p className="text-gray-600 mt-1">Intuitive chat-based interface requires no technical knowledge to extract powerful insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Third Snapshot - Source References */}
        <section className="py-16 bg-slate-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-blueback">Transparent & Verifiable Results</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Key Benefits with Bullet Points */}
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-semibold text-blueback mb-6">Build Trust With Source Verification</h3>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Reference to sources provided</h4>
                    <p className="text-gray-600 mt-1">Every answer includes specific citation links back to original source documents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Allows for user verification</h4>
                    <p className="text-gray-600 mt-1">One-click access to view source documents directly for complete transparency</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Configurable to user choice on number of sources provided</h4>
                    <p className="text-gray-600 mt-1">Customize the number and type of references based on your specific needs</p>
                  </div>
                </div>
              </div>
              
              {/* ALEC Source Reference Interface */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 order-1 md:order-2">
                <div className="bg-[#10275E] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-white font-semibold">Source Verification</div>
                      <div className="ml-2 px-2 py-1 bg-green-500 text-xs text-white rounded-full">Active</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-blue-100 p-3 rounded-lg max-w-xs">
                        <p className="text-gray-800">Who is responsible for the delay in completion of this project?</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-blue-600 text-white p-1 rounded-full mr-2 h-8 w-8 flex items-center justify-center font-bold">A</div>
                      <div className="bg-gray-100 p-3 rounded-lg max-w-md">
                        <p className="text-gray-800">The project delay appears to result from multiple factors and stakeholders:</p>
                        <ol className="mt-2 space-y-1 list-decimal list-inside text-gray-700">
                          <li>Vendor supply chain issues delayed material delivery by 3 weeks</li>
                        </ol>
                        
                        <div className="mt-4 bg-white p-3 rounded-lg border border-gray-200">
                          <h5 className="text-sm font-semibold text-gray-800">Source References</h5>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-blue-600 cursor-pointer underline">Project Status Report (May 15, 2024)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-blue-600 cursor-pointer underline">Change Request Log (ID: CR-2024-042, CR-2024-047)</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <span className="text-blue-600 cursor-pointer underline">Vendor Communication Email Thread (March 3-28)</span>
                            </div>
                            <div className="text-center mt-2">
                              <button className="text-xs text-blue-600 hover:underline">View 5 more sources</button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 flex justify-between items-center text-xs">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-green-600">Verified: 8/8 sources match</span>
                          </div>
                          <div className="text-gray-500">
                            Sources found: 3.8 seconds
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      </svg>
                      Source preference: <span className="font-medium">Primary + 2 Secondary</span>
                    </div>
                    <button className="text-xs text-blue-600 hover:underline">Change</button>
                  </div>
                  <div className="flex">
                    <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ask about source documents..." />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        

        {/* How It Works Section */}
        <section className="py-16 bg-[#10275E] text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Connect Your Data</h3>
                <p className="text-white">
                  Securely integrate your existing databases, document repositories, and data sources
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">System Indexing</h3>
                <p className="text-white">
                  Our AI processes and indexes your data to enable natural language understanding
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Ask Questions</h3>
                <p className="text-white">
                  Use plain language to ask questions about your data through our intuitive interface
                </p>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Receive Insights</h3>
                <p className="text-white">
                  Get instant, verifiable answers and visualizations to drive decision-making
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        

        {/* Call to Action Section */}
        <section className="py-20 bg-gray-800">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Transform Your Data Experience</h2>
    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
      Experience the power of Data Chat and discover insights that drive better business decisions
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/#demo">
      <Button className="bg-blueback hover:bg-blue-100 text-blueback px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg">
        Schedule a Demo
      </Button>
      </Link>
      <Link href="/#features">
      <Button 
        className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 shadow-lg"
        style={{ color: 'white' }} // Inline style as a fallback
      >
        Learn More
      </Button>
      </Link>
    </div>
  </div>
</section>
      </main>
    </div>
  )
}