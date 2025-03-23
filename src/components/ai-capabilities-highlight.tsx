import { cn } from "@/libs/utils"

export default function AICapabilitiesHighlight() {
  return (
    <div className="max-w-5xl mx-auto my-12">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        {/* Main heading with subtle accent */}
        <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 text-center relative">
          <span className="inline-block relative">
            The AI analysis and capabilities you have been waiting for
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></span>
          </span>
        </h3>

        {/* Tagline with elegant spacing */}
        <p className="text-xl md:text-2xl font-semibold text-center mb-10 text-gray-700">
          Comprehensive. Rapid. Accurate.
        </p>

        {/* Main content with improved layout */}
        <div className="grid gap-6 md:gap-8 text-gray-700 text-lg max-w-4xl mx-auto">
          <p className="leading-relaxed">
            More than simple document generation, document summary or pattern recognition
          </p>

          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
            <p className="leading-relaxed">
              Cognitive reasoning across massive scale - think millions of documents, not tens of thousands
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
            <p className="leading-relaxed">
              Obtain a value proposition, a risk assessment, or a an overall strategy that allows you to focus on your
              high value activities
            </p>
          </div>

          {/* Highlighted section with elegant styling */}
          <div className="py-4 px-6 bg-blue-50 rounded-lg text-center border-l-4 border-blue-500 my-2">
            <p className="font-medium text-xl text-gray-800">Claims. Risk. Litigation. Contracts.</p>
          </div>

          <p className="leading-relaxed">
            Virtual assistant teams. Simultaneously assessing entire datasets. Providing strengths and weaknesses.
            Establishing your path forward at the outset with clarity
          </p>
        </div>

        {/* Final statement with visual emphasis */}
        <div className="mt-10 text-center">
          <p
            className={cn(
              "text-xl md:text-2xl font-bold text-transparent bg-clip-text",
              "bg-gradient-to-r from-blue-700 to-blue-500",
            )}
          >
            THE COMPETITIVE ADVANTAGES ARE ENDLESS…
          </p>
        </div>
      </div>
    </div>
  )
}

