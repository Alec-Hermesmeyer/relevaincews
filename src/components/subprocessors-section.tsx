interface Subprocessor {
    name: string
    logo: string
    category: string
    description: string
  }
  
  const subprocessors: Subprocessor[] = [
    {
      name: "Microsoft Azure",
      logo: "/placeholder.svg?height=40&width=40",
      category: "Cloud provider",
      description: "Cloud infrastructure"
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=40&width=40",
      category: "Cloud provider",
      description: "AI/LLM models on Amazon Bedrock"
    },
    {
      name: "Cloudflare",
      logo: "/placeholder.svg?height=40&width=40",
      category: "Cloud security",
      description: ""
    },
    {
      name: "DeepL",
      logo: "/placeholder.svg?height=40&width=40",
      category: "Translation",
      description: ""
    }
  ]
  
  export function SubprocessorsSection() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Subproccesors</h3>
          <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
            View all 7 subprocessors
          </a>
        </div>
  
        <div className="space-y-4">
          {subprocessors.map((processor) => (
            <div
              key={processor.name}
              className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex-shrink-0">
                <img
                  src={processor.logo}
                  alt={`${processor.name} logo`}
                  className="w-10 h-10 rounded-lg bg-gray-700"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-medium truncate">{processor.name}</h4>
                  <span className="text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{processor.category}</span>
                </div>
                {processor.description && (
                  <p className="text-xs text-gray-400 mt-0.5">{processor.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }