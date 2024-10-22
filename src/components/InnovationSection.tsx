import { useState } from 'react';
import { FaPlane, FaChessKing, FaRobot, FaGavel } from 'react-icons/fa';

interface FlipCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ icon: Icon, title, description }) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div
      className="group perspective w-64 h-80 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative preserve-3d w-full h-full duration-700 transform ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute backface-hidden w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
          <Icon className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-center">{title}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute backface-hidden w-full h-full bg-blue-600 dark:bg-blue-700 rounded-lg shadow-lg flex items-center justify-center p-6 transform rotate-y-180">
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function InnovationSection() {
  const cards: FlipCardProps[] = [
    {
      icon: FaPlane,
      title: "Flight Innovation",
      description:
        "Humans couldn't fly—until they did. Flying machines made it real and common.",
    },
    {
      icon: FaChessKing,
      title: "AI in Chess",
      description:
        "Computers could never beat a chess grandmaster—until they did. Today, any cell phone is better than the best human chess player.",
    },
    {
      icon: FaRobot,
      title: "AI Understanding",
      description:
        "Unstructured questions requiring reasoning seemed beyond computers—until they weren't. ChatGPT and similar technologies are now transforming how we interact with AI.",
    },
    {
      icon: FaGavel,
      title: "Legal AI",
      description:
        "Computers were seen as assistants for legal work, not as cognitive partners—until now. RelevAInce is introducing next-generation legal tools that change the game.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4">
        Technology Disruptions and the Legal World

        </h2>
        <p className="text-lg md:text-xl font-bold text-center mb-12 px-36">History is full of conventional " expert wisdom" being disrupted by technology realities. Common knowledge "knew" that - 
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            
            relevAInce is introducing next generation legal tools
          </h3>
          <p className="text-lg md:text-xl font-bold text-center mb-4 px-24">
          Those who use powerful tools have a distinct advantage over those constrained by obsolete approaches. 
          </p>
          <p className="text-lg md:text-xl font-bold text-center mb-12 px-24">
          Any human can play chess against a computer - but who will win?
          Any Attorney can take the laborious approach and continue to practice as they have always done.... However, those early adopters who choose to leverage the assistance of a powerful Attorney Intelligence tool will clearly have the advantage.
          </p>
          <h4 className="text-xl font-semibold mb-4">
          Ready to Lead the Change?
          </h4>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
