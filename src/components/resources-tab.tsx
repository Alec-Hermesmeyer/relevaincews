'use client';

interface ResourceItem {
  title: string;
  description: string;
}

const resources: ResourceItem[] = [
  {
    title: "Security Documentation",
    description: "Comprehensive documentation about our security policies and procedures."
  },
  {
    title: "Best Practices",
    description: "Guidelines for using our platform securely and maintaining compliance."
  },
  {
    title: "Incident Response Plan",
    description: "Detailed steps we take to handle security incidents effectively."
  },
  {
    title: "Compliance Reports",
    description: "Access to reports that demonstrate our adherence to regulatory requirements."
  }
];

export default function ResourcesTab() {
  return (
    <div className="space-y-8">
      {resources.map((resource, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
          <p className="text-sm text-gray-400">{resource.description}</p>
        </div>
      ))}
    </div>
  );
}
