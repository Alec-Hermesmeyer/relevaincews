import React from 'react';

interface BusinessCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  linkedin: string;
  photoUrl: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, title, email, phone, company, website, linkedin, photoUrl }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-xs bg-white">
      <img src={photoUrl} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="mt-4 text-xl font-bold text-center">{name}</h2>
      <p className="text-center text-gray-600">{title}</p>
      <p className="text-center text-gray-600">{email}</p>
      <p className="text-center text-gray-600">{phone}</p>
      <a href={website} className="block mt-2 text-center text-blue-600">{company}</a>
      <a href={linkedin} className="block mt-1 text-center text-blue-600">LinkedIn</a>
    </div>
  );
};

export default BusinessCard;
