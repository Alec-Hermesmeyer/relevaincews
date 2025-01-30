'use client';

import { CheckCircle } from 'lucide-react';

interface ControlItem {
  title: string;
  description: string;
}

interface ControlCategory {
  title: string;
  items: ControlItem[];
}

export default function ControlsTab() {
  const controlCategories: ControlCategory[] = [
    {
      title: "Infrastructure Security",
      items: [
        {
          title: "Cloud Services & Information Transfer",
          description: "Secure use and management of cloud services (e.g., NextCloud, Cloudflare) with end-to-end encryption (TLS 1.3). All data transfers are encrypted, monitored, and protected."
        },
        {
          title: "Encryption & Cryptography",
          description: "AES-256 encryption is used for data at rest, TLS 1.3 protects data in transit, and robust key management ensures security."
        },
        {
          title: "Access Control & Identity Management",
          description: "Multi-Factor Authentication (MFA), Role-Based Access Control (RBAC), and Identity and Access Management (IAM) are implemented."
        },
        {
          title: "Logging & Monitoring",
          description: "Comprehensive logging tracks user activity, and real-time monitoring detects threats."
        },
        {
          title: "Endpoint & Remote Security",
          description: "Remote access requires VPN, MFA, and secured endpoints."
        },
        {
          title: "Network Security",
          description: "Advanced firewalls, IDS/IPS, and Cloudflare WAF protect against emerging threats."
        }
      ]
    },
    {
      title: "Organizational Security",
      items: [
        {
          title: "Scope of the ISMS",
          description: "The ISMS scope aligns with ISO 27001 standards."
        },
        {
          title: "Asset Management",
          description: "Assets are tracked, recovered upon termination, and sanitized before reuse."
        },
        {
          title: "Intellectual Property & Confidentiality",
          description: "Policies protect intellectual property, and NDAs enforce confidentiality."
        },
        {
          title: "Competence & Awareness",
          description: "Ongoing training ensures awareness of evolving threats and responsibilities."
        },
        {
          title: "Physical Security",
          description: "Facilities are protected with secure perimeters, controlled access, and environmental safeguards."
        }
      ]
    },
    {
      title: "Product Security",
      items: [
        {
          title: "Source Code Access Control",
          description: "Strict access controls and monitoring protect source code."
        },
        {
          title: "Secure Development Life Cycle (SDLC)",
          description: "Security is integrated into all stages of development."
        },
        {
          title: "Secure Coding Standards",
          description: "Secure coding principles (e.g., OWASP Top 10) minimize vulnerabilities."
        },
        {
          title: "Security Testing",
          description: "Testing includes static analysis, dynamic testing, and penetration testing."
        },
        {
          title: "Environment Segregation",
          description: "Development, testing, and production environments are separated."
        }
      ]
    },
    {
      title: "Internal Security Procedures",
      items: [
        {
          title: "Business Continuity & Operational Controls",
          description: "ICT readiness plans, tested backups, and redundancy ensure availability."
        },
        {
          title: "Change & Configuration Management",
          description: "Documented change processes and consistent configurations mitigate risks."
        },
        {
          title: "Audit & Compliance",
          description: "Internal audits ensure conformity with standards (e.g., ISO 27001)."
        },
        {
          title: "Incident Management",
          description: "Defined processes detect, respond to, and resolve incidents promptly."
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {controlCategories.map((category) => (
        <div key={category.title} className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
          <div className="space-y-4">
            {category.items.map((item) => (
              <div key={item.title}>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <h4 className="text-md font-medium text-gray-300">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
