import { CheckCircle } from 'lucide-react'

interface ControlItem {
  title: string
  checked: boolean
}

interface ControlCategory {
  title: string
  items: ControlItem[]
  more: number
}

const controlCategories: ControlCategory[] = [
  {
    title: "Infrastructure security",
    items: [
      { title: "Information security for use of cloud services", checked: true },
      { title: "Information transfer", checked: true },
      { title: "Use of cryptography", checked: true }
    ],
    more: 19
  },
  {
    title: "Organizational security",
    items: [
      { title: "Determining the scope of the information security management system", checked: true },
      { title: "Return of assets", checked: true },
      { title: "Intellectual property rights", checked: true }
    ],
    more: 26
  },
  {
    title: "Product security",
    items: [
      { title: "Access to source code", checked: true },
      { title: "Secure development life cycle", checked: true },
      { title: "Secure coding", checked: true }
    ],
    more: 3
  },
  {
    title: "Internal security procedures",
    items: [
      { title: "ICT readiness for business continuity", checked: true },
      { title: "Information backup", checked: true },
      { title: "Redundancy of information processing facilities", checked: true }
    ],
    more: 52
  }
]

export function ControlsSection({ detailed }: { detailed?: boolean }) {
  const controlCategories: ControlCategory[] = [
    {
      title: "Infrastructure Security",
      items: [
        { title: "Secure use and management of cloud services", checked: true },
        { title: "End-to-end encryption for information transfer", checked: true },
        { title: "AES-256 encryption for data at rest", checked: true }
      ],
      more: 7
    },
    {
      title: "Organizational Security",
      items: [
        { title: "Scope aligned with ISO 27001 standards", checked: true },
        { title: "Tracking and recovery of assets upon termination", checked: true },
        { title: "Policies to protect intellectual property", checked: true }
      ],
      more: 4
    },
    {
      title: "Product Security",
      items: [
        { title: "Strict access control for source code", checked: true },
        { title: "Secure Development Life Cycle (SDLC)", checked: true },
        { title: "Adherence to OWASP Top 10 coding standards", checked: true }
      ],
      more: 3
    },
    {
      title: "Internal Security Procedures",
      items: [
        { title: "ICT readiness plans for business continuity", checked: true },
        { title: "Regularly tested backups", checked: true },
        { title: "Documented change and configuration management", checked: true }
      ],
      more: 2
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium">Controls</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {controlCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors"
          >
            <h4 className="text-sm font-medium mb-3">{category.title}</h4>
            <div className="space-y-2">
              {category.items.map((item, index) =>
                !detailed && index >= 2 ? null : (
                  <div
                    key={item.title}
                    className="flex items-start gap-2 text-gray-400"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs">{item.title}</span>
                  </div>
                )
              )}
              {category.more > 0 && !detailed && (
                <div className="text-xs text-gray-500 pl-6">
                  + {category.more} more
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


