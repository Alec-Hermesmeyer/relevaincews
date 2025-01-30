interface Resource {
    name: string
    type: string
    icon: string
  }
  
  const resources: Resource[] = [
    {
      name: "SOC 2 Type I",
      type: "Certificates",
      icon: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "SOC 2 Type II",
      type: "Certificates",
      icon: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "ISO 27001:2022",
      type: "Certificates",
      icon: "/placeholder.svg?height=40&width=40"
    }
  ]
  
  export function ResourcesSection() {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Resources</h3>
          <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
            View all 3 resources
          </a>
        </div>
  
        <div className="space-y-2">
          <div className="text-xs font-medium text-white">Certificates</div>
          <div className="space-y-2">
            {resources.map((resource) => (
              <div
                key={resource.name}
                className="flex items-center gap-3  p-3 hover:bg-gray-800/70 transition-colors cursor-pointer hover:rounded-lg"
              >
                <div className="flex-shrink-0">
                  <img
                    src={resource.icon}
                    alt={`${resource.name} icon`}
                    className="w-8 h-8 rounded "
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-medium truncate">{resource.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  