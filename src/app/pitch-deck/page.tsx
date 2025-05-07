"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import {
  Coins,
  TrendingDown,
  Frown,
  Squircle,
  FileCheck,
  AlertCircle,
  ClipboardCheck,
  HandCoins,
  Scale,
  Lightbulb,
  ListTodo,
  Target,
  Handshake, Laptop, TargetIcon, Download, Loader
} from "lucide-react"
import { MarketChart } from "@/components/MarketChart"
import { GrowthChart } from "@/components/growth-chart"
import { FeatureCard } from "@/components/feature-card"
import Link from "next/link"



export default function Page() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Desktop-optimized PDF generator with responsive handling
  // Reliable PDF generator with robust error handling
  // Fixed PDF generator with scope error resolved
// Fully fixed PDF generator with all TypeScript errors resolved
const handleDownloadPDF = async () => {
  setIsGenerating(true);
  
  try {
    // Import libraries dynamically
    const jsPDFModule = await import('jspdf');
    const html2canvasModule = await import('html2canvas');
    const { jsPDF } = jsPDFModule;
    const html2canvas = html2canvasModule.default;
    
    const contentElement = contentRef.current;
    if (!contentElement) {
      console.error('Content element is not available.');
      return;
    }
    
    // Get all sections
    const sections = contentElement.querySelectorAll('section');
    console.log(`Found ${sections.length} sections to process`);
    
    // Create PDF with default settings - A4 format
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });
    
    // Get PDF dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    console.log(`PDF dimensions: ${pdfWidth}mm x ${pdfHeight}mm`);
    
    // Set moderate margins
    const margins = 10;
    
    // Process each section with error handling for each section
    for (let i = 0; i < sections.length; i++) {
      // Define section outside the try block so it's available in the catch block
      const section = sections[i];
      let isBlackBackground = false;
      
      try {
        // Add a new page for each section after the first one
        if (i > 0) {
          pdf.addPage();
        }
        
        // Determine background color based on section class
        isBlackBackground = section.classList.contains('bg-black');
        console.log(`Processing section ${i + 1}/${sections.length} (${isBlackBackground ? 'black' : 'white'} background)`);
        
        // Set page background color
        if (isBlackBackground) {
          pdf.setFillColor(0, 0, 0);
          pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
        } else {
          pdf.setFillColor(255, 255, 255);
          pdf.rect(0, 0, pdfWidth, pdfHeight, 'F');
        }
        
        // Store original styles
        const originalStyles = {
          minHeight: section.style.minHeight,
          height: section.style.height,
          overflow: section.style.overflow,
          position: section.style.position,
          backgroundColor: section.style.backgroundColor
        };
        
        // Prepare section for capture
        if (isBlackBackground) {
          section.style.backgroundColor = '#000000';
        } else {
          section.style.backgroundColor = '#FFFFFF';
        }
        
        // Keep original dimensions but modify other styles for capture
        section.style.overflow = 'visible';
        section.style.position = 'relative';
        
        // Use a moderate scale that works reliably
        const scale = 2;
        
        console.log(`Capturing section ${i + 1} with html2canvas...`);
        // Capture section with basic reliable settings
        const canvas = await html2canvas(section, {
          scale: scale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: isBlackBackground ? '#000000' : '#FFFFFF',
          logging: true, // Enable logging for debugging
          imageTimeout: 15000, // Increased timeout for image loading
        });
        
        console.log(`Section ${i + 1} captured. Canvas size: ${canvas.width}x${canvas.height}`);
        
        // Convert canvas to image with good quality
        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        // Calculate dimensions to fit within page with margins
        const availableWidth = pdfWidth - (2 * margins);
        let imgWidth = availableWidth;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // If height exceeds available height, scale down proportionally
        const availableHeight = pdfHeight - (2 * margins);
        if (imgHeight > availableHeight) {
          imgHeight = availableHeight;
          imgWidth = (canvas.width * imgHeight) / canvas.height;
        }
        
        // Center the image on the page
        const xOffset = (pdfWidth - imgWidth) / 2;
        const yOffset = (pdfHeight - imgHeight) / 2;
        
        console.log(`Adding image to PDF: ${imgWidth}mm x ${imgHeight}mm at position (${xOffset}, ${yOffset})`);
        
        // Add image to PDF
        pdf.addImage(imgData, 'JPEG', xOffset, yOffset, imgWidth, imgHeight);
        
        // Restore original styles
        section.style.minHeight = originalStyles.minHeight;
        section.style.height = originalStyles.height;
        section.style.overflow = originalStyles.overflow;
        section.style.position = originalStyles.position;
        section.style.backgroundColor = originalStyles.backgroundColor;
        
        console.log(`Section ${i + 1}/${sections.length} processed successfully`);
      } catch (sectionError) {
        // Log error but continue processing other sections
        console.error(`Error processing section ${i + 1}:`, sectionError);
        
        // Add a text note about the error in the PDF
        pdf.setTextColor(isBlackBackground ? 255 : 0);
        pdf.setFontSize(12);
        pdf.text(`Error rendering section ${i + 1}. Please check console for details.`, 20, 20);
      }
    }
    
    console.log('All sections processed, saving PDF...');
    
    // Add metadata
    pdf.setProperties({
      title: 'Relevaince Investment Deck',
      subject: 'Investment Deck',
      author: 'Relevaince',
      keywords: 'AI, Investment, Relevaince',
      creator: 'Relevaince PDF Generator'
    });
    
    // Save the PDF
    pdf.save('Relevaince_Investment_Deck.pdf');
    console.log('PDF saved successfully');
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('There was an error generating the PDF. Please check the console for details.');
  } finally {
    setIsGenerating(false);
  }
};


  const features = [
    {
      title: "Real Time Fact Checking",
      icon: FileCheck,
      position: "top-[15%] left-[20%]",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "Early Risk Assessment",
      icon: AlertCircle,
      position: "top-[15%] right-[20%]",
      gradient: "from-blue-700 to-blue-900",
    },
    {
      title: "Early Case Assessment",
      icon: ClipboardCheck,
      position: "top-[35%] right-[10%]",
      gradient: "from-blue-800 to-indigo-900",
    },
    {
      title: "Enhanced Value for Clients",
      icon: HandCoins,
      position: "bottom-[35%] right-[10%]",
      gradient: "from-indigo-700 to-indigo-900",
    },
    {
      title: "Level the Playing Field",
      icon: Scale,
      position: "bottom-[15%] right-[20%]",
      gradient: "from-indigo-700 to-indigo-900",
    },
    {
      title: "Enhanced Clarity",
      icon: Lightbulb,
      position: "bottom-[15%] left-[20%]",
      gradient: "from-blue-800 to-indigo-900",
    },
    {
      title: "Allocated Time for Strategic Priorities",
      icon: ListTodo,
      position: "bottom-[35%] left-[10%]",
      gradient: "from-blue-700 to-blue-900",
    },
    {
      title: "Execution",
      icon: Target,
      position: "top-[35%] left-[10%]",
      gradient: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Download Button - Fixed position */}
      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors"
        >
          {isGenerating ? (
            <>
              <Loader className="mr-2 h-5 w-5 animate-spin" />
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </>
          )}
        </button>
      </div> */}

      {/* Content to be printed/downloaded */}
      <div ref={contentRef}>
        {/* Title Section */}
        <section className="min-h-screen relative overflow-hidden bg-black">
          {/* Decorative waves - bottom left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          {/* Decorative waves - top right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture2.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          {/* Main content */}
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full space-y-8 text-center">
              {/* Logo */}
              <div className="mx-auto w-full max-w-2xl">
                <Image
                  src="/Wordmark_w_TM - White.png" // Replace with your actual Relevaince TM logo image URL
                  alt="RELEVAINCE TM"
                  width={600}
                  height={120}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Subtitle */}
              <h2 className="text-xl md:text-3xl font-semibold max-w-3xl mx-auto leading-tight">
                Revolutionizing Document Analysis with AI-Driven Cognitive Reasoning
              </h2>

              {/* Patent text */}
              <p className="text-sm md:text-base italic opacity-80">(Patent Pending Serial No. 63/677,032)</p>

              {/* Bottom text */}
              <div className="pt-16 md:pt-24 text-xl md:text-2xl font-light">
                Investment Deck
                <span className="mx-4 text-blue-500">|</span>
                2025
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="min-h-screen relative overflow-hidden bg-white text-black px-4 py-20">
          {/* Decorative wave - top right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture2.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Title with blue lines */}
            <div className="space-y-4 mb-16">
              <div className="space-y-2">
                <div className="h-1 bg-blue-600 rounded"></div>
                <div className="h-1 bg-blue-600 rounded"></div>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold">Our Vision</h2>

              <div className="space-y-2">
                <div className="h-1 bg-blue-600 rounded"></div>
                <div className="h-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Vision Content */}
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed">
                Relevaince tranforms document analysis by leveraging cognitive AI agents to provide rapid early insights
                of your entire dataset so you can obtain an early case assessment
              </p>

              <p className="text-2xl md:text-4xl font-semibold text-blue-600 leading-tight">
                Empowering businesses to harness the full potential of their data . . .
              </p>

              <p className="text-2xl md:text-4xl font-semibold text-blue-600 leading-tight">
                Let your data work for you!
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-white text-black px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">The Problem</h2>
              <p className="text-xl md:text-3xl max-w-4xl mx-auto">
                There is currently no ability to efficiently reason across large scale datasets
              </p>
              <div className="space-y-2 max-w-4xl mx-auto">
                <div className="h-1 bg-blue-600 rounded"></div>
                <div className="h-1 bg-blue-600 rounded"></div>
              </div>
            </div>

            {/* Four Columns */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Complex Process */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto">
                  <Squircle className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold">Complex Process</h3>
                <p className="text-sm md:text-base">
                  Lawyers currently spend 80% of their time culling through documents trying to learn the case because of
                  current inadequate tools
                </p>
              </div>

              {/* User Frustration */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto">
                  <Frown className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold">User Frustration</h3>
                <p className="text-sm md:text-base">
                  Users cannot obtain accurate early assessments of either risk or value of cases because there is no way
                  to quickly glean a sufficient, comprehensive case analysis at the outset
                </p>
              </div>

              {/* Inefficiency */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto">
                  <TrendingDown className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold">Inefficiency</h3>
                <p className="text-sm md:text-base">
                  Users spend time trying to find the .1% of documents they actually usually use at trial
                </p>
              </div>

              {/* High Costs */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto">
                  <Coins className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold">High Costs</h3>
                <p className="text-sm md:text-base">
                  Current document analysis methods are expensive, leading to increased operational costs and reduced
                  profitability
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-white text-black px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">The Solution</h2>

              <div className="mx-auto w-full max-w-2xl">
                <Image
                  src="/Wordmark_w_TM - Black.png"
                  alt="RELEVAINCE TM"
                  width={600}
                  height={120}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-xl md:text-3xl max-w-4xl mx-auto">
                unlocks the key to early case evaluation and reasoning at scale
              </p>
            </div>

            {/* Two Columns */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Cognitive AI */}
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto">
                  <Image
                    src="/Picture3.png"
                    alt="Cognitive AI Icon"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">Cognitive AI</h3>
                <p className="text-lg leading-relaxed">
                  AI agents that do more than generate documents. Human-like reasoning, which allows the user obtain a true picture of facts, themes, strengths, and weakness. Find
                  the golden thread among thousands of haystacks... Risk mitigation at scale, early on... Let the
                  documents work for you.
                </p>
              </div>

              {/* Agentic AI Teams */}
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto">
                  <Image
                    src="/Picture4.png"
                    alt="Agentic AI Teams Icon"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold">Agentic AI Teams</h3>
                <p className="text-lg leading-relaxed">
                  Configurable agents with diverse skill sets - a research team to cull through the dataset and provide
                  comprehensive insights and collaborative problem-solving within minutes. Run a Claims Analyst Agentic
                  Team to obtain an early case assessment or a Privilege Review Analysis to obtain a privilege log, all
                  within minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-black text-white px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">A LEAP FORWARD FROM GENAI</h2>
              <p className="text-xl md:text-3xl">
                USERS CAN FINALLY PUT THEIR DATA TO WORK FOR THEM
              </p>
            </div>

            {/* New Feature Layout */}
            <div className="relative max-w-4xl mx-auto">
              {/* Center Circle */}
              <div className="relative z-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center shadow-lg shadow-blue-900/50">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-2 text-white">
                    <Lightbulb className="w-full h-full" />
                  </div>
                  <div className="text-lg font-semibold">COGNITIVE AI AGENTS</div>
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120%] h-[120%] border-2 border-blue-700/30 rounded-full"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[150%] h-[150%] border-2 border-blue-700/20 rounded-full"></div>
              </div>

              {/* Feature Cards - Top Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <FeatureCard icon={FileCheck} title="Real Time Fact Checking" gradient="from-blue-600 to-blue-800" />
                <FeatureCard icon={AlertCircle} title="Early Risk Assessment" gradient="from-blue-700 to-blue-900" />
                <FeatureCard icon={ClipboardCheck} title="Early Case Assessment" gradient="from-blue-800 to-indigo-900" />
                <FeatureCard
                  icon={HandCoins}
                  title="Enhanced Value for Clients"
                  gradient="from-indigo-700 to-indigo-900"
                />
              </div>

              {/* Feature Cards - Bottom Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <FeatureCard icon={Scale} title="Level the Playing Field" gradient="from-indigo-700 to-indigo-900" />
                <FeatureCard icon={Lightbulb} title="Enhanced Clarity" gradient="from-blue-800 to-indigo-900" />
                <FeatureCard
                  icon={ListTodo}
                  title="Allocated Time for Strategic Priorities"
                  gradient="from-blue-700 to-blue-900"
                />
                <FeatureCard icon={Target} title="Execution" gradient="from-blue-600 to-blue-800" />
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-black text-white px-4 py-20 relative overflow-hidden">
          {/* Decorative wave - bottom left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          {/* Decorative wave - top right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture2.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">Market Potential</h2>
              <p className="text-xl md:text-3xl max-w-4xl mx-auto">
                This market is poised for growth, offering vast opportunities for innovative AI solutions
              </p>
            </div>

            {/* Chart Section */}
            <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-center text-lg font-medium">Legal AI Market Size, By Region, 2019 - 2032</h3>
                <p className="text-center text-sm text-gray-400">(USD Billion)</p>

                <MarketChart />

                {/* Source Citation */}
                <p className="text-xs text-gray-400 text-center pt-4">Source: Polaris Market Research Analysis</p>
              </div>
            </div>
          </div>
        </section>
        {/* Future Section */}
        <section className="min-h-screen bg-black text-white px-4 py-20 relative overflow-hidden">
          {/* Decorative wave - bottom left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          {/* Decorative wave - top right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50 rotate-180"
            />
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl md:text-7xl font-bold">The Future</h2>
              <p className="text-xl md:text-3xl max-w-4xl mx-auto">How are we planning to grow?</p>
            </div>

            {/* Three Columns */}
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {/* Partnerships */}
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto">
                  <Handshake className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-bold">Partnerships</h3>
                <p className="text-lg leading-relaxed">Collaborate with indurstry leaders to expand outreach</p>
              </div>

              {/* Demos */}
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto">
                  <Laptop className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-bold">Demos</h3>
                <p className="text-lg leading-relaxed">
                  Focus on key stakeholders who need to leverage the value of our product (i.e. General Counsels, large
                  enterprises)
                </p>
              </div>

              {/* Targeted Marketing */}
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto">
                  <TargetIcon className="w-full h-full" />
                </div>
                <h3 className="text-3xl font-bold">Targeted Marketing</h3>
                <p className="text-lg leading-relaxed">Showcase platform abilities to potential clients</p>
              </div>
            </div>
          </div>
        </section>
        {/* Growth Projection Section */}
        <section className="min-h-screen bg-black text-white px-4 py-20 relative overflow-hidden">
          {/* Decorative wave - bottom left */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50"
            />
          </div>

          {/* Decorative wave - top right */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none">
            <Image
              src="/Picture1.png" // Replace with your actual wave image URL
              alt="Decorative wave pattern"
              width={400}
              height={400}
              className="object-contain opacity-50 rotate-180"
            />
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
                Proposed Growth Based on Beta and Current Client Pipeline
              </h2>
            </div>

            {/* Chart Section */}
            <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm">
              <GrowthChart />
            </div>
          </div>
        </section>
        {/* Roadmap Section */}
        <section className="min-h-screen bg-black text-white px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">Roadmap</h2>
            </div>

            {/* Timeline */}
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20"></div>

              {/* Q1 */}
              <div className="relative flex items-center mb-24">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">Q1: Product Enhancement</h3>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg">
                    Enhance AI algorithms and integrate new data sources to improve accuracy, reasoning, and speed
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="relative flex items-center mb-24">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg">Continue targeted marketing campaigns and establish new partnerships</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Q2: Market Expansion</h3>
                </div>
              </div>

              {/* Q3 */}
              <div className="relative flex items-center mb-24">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">Q3: Implement Customer Feedback</h3>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <p className="text-lg">
                    Implement customer feedback to refine the platform and improve user experience
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <p className="text-lg">
                    Expand the team and infrastructure to support growing demand and ensure seamless service
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-blue-900"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Q4: Scale Operations</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Leadership Team Section */}
        <section className="min-h-screen bg-black text-white px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">Building a Seasoned Leadership Team</h2>
            </div>

            {/* Team Grid */}
            <div className="max-w-5xl mx-auto">
              {/* Top Row - Executives */}
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Victor Nilson */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Victor.jpg"
                      alt="Victor Nilson"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Victor Nilson</h3>
                  <p className="text-xl text-gray-400">Co-Founder and CEO</p>
                </div>

                {/* Lisa Zamaludin Henry */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Lisa.jpg"
                      alt="Lisa Zamaludin Henry"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lisa Zamaludin Henry</h3>
                  <p className="text-xl text-gray-400">Co-Founder and CAO</p>
                </div>
              </div>

              {/* Bottom Row - Team Members */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Alan Fandrich */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/Alan.jpg"
                      alt="Alan Fandrich"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Alan Fandrich</h3>
                  <p className="text-gray-400">Engineer</p>
                </div>

                {/* Bhavya Giri */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/Giri.jpg"
                      alt="Bhavya Giri"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Bhavya Giri</h3>
                  <p className="text-gray-400">MLOPs Wizard</p>
                </div>

                {/* Alec Hermesmeyer */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <Image
                      src="/Alec.jpg"
                      alt="Alec Hermesmeyer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">Alec Hermesmeyer</h3>
                  <p className="text-gray-400">Dev Ops Wizard</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Advisory Board Section */}
        <section className="min-h-screen bg-black text-white px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">Advisory Board Members</h2>
            </div>

            {/* Board Members Grid */}
            <div className="max-w-5xl mx-auto">
              {/* Top Row */}
              <div className="grid md:grid-cols-3 gap-12 mb-16">
                {/* Alyssa Harvey Dawson */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Alyssa.jpg"
                      alt="Alyssa Harvey Dawson"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Alyssa Harvey Dawson</h3>
                </div>

                {/* Amy Goldstein */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Amy.jpg"
                      alt="Amy Goldstein"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Amy Goldstein</h3>
                </div>

                {/* D. Steven Henry */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Steve.jpg"
                      alt="D. Steven Henry"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">D. Steven Henry</h3>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Al Hoover */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Al.jpg"
                      alt="Al Hoover"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Al Hoover</h3>
                </div>

                {/* John Kindervag */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/John.jpg"
                      alt="John Kindervag"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">John Kindervag</h3>
                </div>

                {/* Rick Welday */}
                {/* <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <Image
                      src="/Rick.jpg"
                      alt="Rick Welday"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Rick Welday</h3>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-black text-white px-4 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mx-auto w-full max-w-2xl">
              <Image
                src="/Wordmark_w_TM - White.png" // Replace with your actual Relevaince TM logo image URL
                alt="RELEVAINCE TM"
                width={600}
                height={120}
                className="w-full h-auto mb-8"
                priority
              />
            </div>

            {/* Decorative Lines */}
            <div className="space-y-3 mb-16">
              <div className="h-2 bg-blue-600 rounded-full"></div>
              <div className="h-2 bg-blue-600 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className="text-center space-y-8 mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">
                You Are Invited To Join Us
              </h2>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto">
                Join us in revolutionizing reasoning across scale! Book a meeting to explore investment opportunities with Relevaince.
              </p>
            </div>

            {/* Decorative Lines */}
            <div className="space-y-3 mb-16">
              <div className="h-2 bg-blue-600 rounded-full"></div>
              <div className="h-2 bg-blue-600 rounded-full"></div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-32">
              <a href="#" className="text-2xl font-semibold hover:text-blue-400 transition-colors">
                Let&apos;s Talk
              </a>
              <span className="hidden md:inline text-2xl">|</span>
              <Link href="/" className="text-2xl font-semibold hover:text-blue-400 transition-colors">
                Visit our Website
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">© 2025 Relevaince LLC all rights reserved</div>
          </div>
        </section>
      </div>

      {/* Add package.json dependencies:
      "dependencies": {
        "html2canvas": "^1.4.1",
        "jspdf": "^2.5.1"
      }
      */}
    </div>
  )
}