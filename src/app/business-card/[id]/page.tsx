"use client"
import { useParams } from 'next/navigation';
import BusinessCard from '@/components/BusinessCard';

const BusinessCardPage = () => {
  const { id } = useParams();

  // Example of mock card data
  const cardData = {
    id,
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8901',
    company: 'YourCompany',
    website: 'https://yourcompany.com',
    linkedin: 'https://linkedin.com/in/johndoe',
    photoUrl: '/images/john-doe.jpg',
  };

  // Render the BusinessCard with mock data
  return <BusinessCard {...cardData} />;
};

export default BusinessCardPage;
