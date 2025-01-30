import { NextResponse } from 'next/server';

// API route to fetch card data
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Simulate fetching card data for demonstration
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

  if (cardData) {
    return NextResponse.json(cardData, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Card not found' }, { status: 404 });
  }
}
