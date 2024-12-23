interface ComplianceCertificate {
    name: string
    logo: string
    repeatedName?: boolean
  }
  
  const certificates: ComplianceCertificate[] = [
    {
      name: "GDPR",
      logo: "/placeholder.svg?height=40&width=40"
    },
    {
      name: "ISO 27001:2022",
      logo: "/placeholder.svg?height=40&width=40",
      repeatedName: true
    },
    {
      name: "SOC 2 Type I",
      logo: "/placeholder.svg?height=40&width=40",
      repeatedName: true
    },
    {
      name: "SOC 2 Type II",
      logo: "/placeholder.svg?height=40&width=40",
      repeatedName: true
    }
  ]
  
  export function ComplianceSection() {
    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Compliance</h3>
        <div className="flex flex-col gap-3">
          {certificates.map((cert, index) => (
            <div
              key={`${cert.name}-${index}`}
              className="flex items-center gap-3 lg p-3 hover:bg-gray-800/70 transition-colors hover:rounded-lg"
            >
              <div className="flex-shrink-0">
                <img
                  src={cert.logo}
                  alt={`${cert.name} logo`}
                  className="w-8 h-8 rounded"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-lg font-medium truncate">{cert.name}</h4>
                {cert.repeatedName && (
                  <p className="text-xs text-white">{cert.name}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  