import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Fetch card data from a database, for example:
  // const cardData = await database.getCardById(id);

  // Simulate data for demonstration
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
    res.status(200).json(cardData);
  } else {
    res.status(404).json({ message: 'Card not found' });
  }
}
