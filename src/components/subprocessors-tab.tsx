'use client';

interface SubprocessorItem {
  name: string;
  description: string;
  compliance: string;
}

const subprocessors: SubprocessorItem[] = [
  {
    name: "Cloudflare",
    description: "Provides web performance and security services, including DDoS protection.",
    compliance: "Compliant with GDPR and other international standards."
  },
  {
    name: "NextCloud",
    description: "Manages secure storage and collaboration tools for cloud data.",
    compliance: "Compliant with ISO 27001 and GDPR."
  },
  {
    name: "AWS (Amazon Web Services)",
    description: "Hosts our infrastructure with scalable and secure solutions.",
    compliance: "Compliant with SOC 2, ISO 27001, and GDPR."
  },
  {
    name: "Okta",
    description: "Handles identity and access management for secure user authentication.",
    compliance: "Compliant with SOC 2, GDPR, and HIPAA."
  }
];

export default function SubprocessorsTab() {
  return (
    <div className="space-y-8">
      {subprocessors.map((subprocessor, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-2">{subprocessor.name}</h3>
          <p className="text-sm text-gray-400 mb-2">{subprocessor.description}</p>
          <p className="text-xs text-gray-500">Compliance: {subprocessor.compliance}</p>
        </div>
      ))}
    </div>
  );
}
