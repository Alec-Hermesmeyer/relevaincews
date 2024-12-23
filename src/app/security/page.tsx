'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui-components";

const sections = [
  {
    title: "Infrastructure Security",
    details: [
      {
        heading: "Cloud Services & Information Transfer",
        description: "Secure use and management of cloud services (e.g., NextCloud, Cloudflare) with end-to-end encryption (TLS 1.3). All data transfers are encrypted, monitored, and protected."
      },
      {
        heading: "Encryption & Cryptography",
        description: "AES-256 encryption is used for data at rest, TLS 1.3 protects data in transit, and robust key management ensures security."
      },
      {
        heading: "Access Control & Identity Management",
        description: "Multi-Factor Authentication (MFA), Role-Based Access Control (RBAC), and Identity and Access Management (IAM) are implemented."
      }
    ]
  },
  {
    title: "Organizational Security",
    details: [
      {
        heading: "Scope of the ISMS",
        description: "The ISMS scope aligns with ISO 27001 standards."
      },
      {
        heading: "Asset Management",
        description: "Assets are tracked, recovered upon termination, and sanitized before reuse."
      },
      {
        heading: "Intellectual Property & Confidentiality",
        description: "Policies protect intellectual property, and NDAs enforce confidentiality."
      }
    ]
  },
  {
    title: "Product Security",
    details: [
      {
        heading: "Source Code Access Control",
        description: "Strict access controls and monitoring protect source code."
      },
      {
        heading: "Secure Development Life Cycle (SDLC)",
        description: "Security is integrated into all stages of development."
      },
      {
        heading: "Secure Coding Standards",
        description: "Secure coding principles (e.g., OWASP Top 10) minimize vulnerabilities."
      }
    ]
  },
  {
    title: "Internal Security Procedures",
    details: [
      {
        heading: "Business Continuity & Operational Controls",
        description: "ICT readiness plans, tested backups, and redundancy ensure availability."
      },
      {
        heading: "Change & Configuration Management",
        description: "Documented change processes and consistent configurations mitigate risks."
      },
      {
        heading: "Audit & Compliance",
        description: "Internal audits ensure conformity with standards (e.g., ISO 27001)."
      }
    ]
  },
  {
    title: "Data and Privacy",
    details: [
      {
        heading: "Acceptable Use",
        description: "Rules govern the responsible use of information and associated assets."
      },
      {
        heading: "Classification & Labeling of Information",
        description: "Data is classified based on sensitivity and labeled consistently."
      },
      {
        heading: "Privacy & PII Compliance",
        description: "Processes meet legal obligations for protecting Personally Identifiable Information (PII)."
      }
    ]
  }
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-200 text-white">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20">
        <header className="text-center mb-16">
          <h1 className="text-3xl font-bold mb-4 text-[#10275E]">Comprehensive Security Controls</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We've unlocked the key to cognitive A.I. 
          </p>
        </header>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="flex overflow-x-auto w-full max-w-7xl mx-auto justify-start text-gray-900 border-b border-gray-700 pb-2 scrollbar-thin scrollbar-thumb-gray-400">
            <TabsTrigger value="overview" className="px-4 py-2 rounded-t-md hover:bg-gray-700 hover:text-white transition whitespace-nowrap">
              Overview
            </TabsTrigger>
            {sections.map((section) => (
              <TabsTrigger
                key={section.title}
                value={section.title}
                className="px-4 py-2 rounded-t-md hover:bg-gray-700 hover:text-white transition whitespace-nowrap"
              >
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <h2 className="text-xl font-semibold text-[#10275E] border-b border-gray-500 pb-2">
              Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-md font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-slate-200">
                    {section.details.map((detail, idx) => (
                      <span key={idx}>{detail.heading}{idx < section.details.length - 1 ? ', ' : '.'}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Section Tabs */}
          {sections.map((section) => (
            <TabsContent key={section.title} value={section.title} className="space-y-6">
              <h2 className="text-xl font-semibold text-[#10275E] border-b border-gray-500 pb-2">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.details.map((detail, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-md font-bold text-white mb-2">{detail.heading}</h3>
                    <p className="text-sm text-slate-200">{detail.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <footer className="bg-gray-800  py-12">
          <div className="container mx-auto px-2">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-sm text-white mb-4 md:mb-0 text-center">
                 © 2024 relevAInce All rights reserved.
              </p>

            </div>
          </div>
        </footer>
    </div>
  );
}
