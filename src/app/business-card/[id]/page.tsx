"use client"
import { useParams } from 'next/navigation';
import BusinessCard from '@/components/BusinessCard';

const BusinessCardPage = () => {
  const { id } = useParams();

  // Example of mock card data
  const cardData = {
    id,
    name: 'Lisa Zamaludin Henry',
    title: 'Cheif Administrative Officer',
    email: 'lisa.henry@relevaince.ai ',
    phone: '+1 234 567 8901',
    company: 'YourCompany',
    website: 'https://yourcompany.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    // photoUrl: '/../../../public/LogoPurple.png',
  };

  // Render the BusinessCard with mock data
  return <BusinessCard  {...cardData} />;
};

export default BusinessCardPage;
