// import React from 'react';
// import Image from 'next/image';

// interface BusinessCardProps {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   company: string;
//   website: string;
//   linkedin: string;
//   photoUrl: string;
// }

// const BusinessCard: React.FC<BusinessCardProps> = ({ name, title, email, phone, company, website, linkedin,  }) => {
//   return (
//     <div className="p-4 border rounded-lg shadow-lg max-w-2xl bg-white absolute top-40 left-40">
//       <Image src='/LogoPurple.png'
//       height='240' 
//       width="240" alt={name} className="w-24 h-24 rounded-full mx-auto" />
//       <h2 className="mt-4 text-xl font-bold text-center">{name}</h2>
//       <p className="text-center text-gray-600">{title}</p>
//       <p className="text-center text-gray-600">{email}</p>
//       <p className="text-center text-gray-600">{phone}</p>
//       <a href={website} className="block mt-2 text-center text-blue-600">{company}</a>
//       <a href={linkedin} className="block mt-1 text-center text-blue-600">LinkedIn</a>
//     </div>
//   );
// };

// export default BusinessCard;
import React from "react";
import Image from "next/image";

interface BusinessCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  linkedin: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  name,
  title,
  email,
  phone,
  company,
  website,
  linkedin,
}) => {
  // Function to download vCard
  const handleSaveContact = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${name}
FN:${name}
ORG:${company}
TITLE:${title}
EMAIL:${email}
TEL:${phone}
URL:${website}
END:VCARD
    `;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${name.replace(/\s+/g, "_")}_Contact.vcf`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 z-30">
               <span className=" absolute top-44  left-[37%] -z-10  border ">
               <Image src='/LogoPurple.png' height='740' width="740" alt='alt'  className="overflow-hidden " />
               </span>

      <div
        className="p-8 border rounded-lg shadow-lg max-w-md w-full h-[65dvh] text-center text-white relative bg-[#10275E] overflow-hidden -z-20"
        // style={{
        //   backgroundImage: `url('/LogoPurple.png')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "-40% center", // Off-center the background image
        //   backgroundColor: "#10275E", // Navy-600 Hex Color as fallback
        //   backdropFilter: "blur(5px)",
        // }}
      >
         <div className=" p-6 rounded-md z-auto">
          <h2 className="mt-6 text-3xl font-bold ">{name}</h2>
          <p className="text-xl ">{title}</p>
          <p className="">{email}</p>
          <p className=''>{phone}</p>
          <a
            href={website}
            className="block text-blue-300 hover:underline mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
          <a
            href={linkedin}
            className="block text-blue-300 hover:underline mt-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <div className="flex flex-col items-center space-y-4 mt-6">
            <button
              onClick={handleSaveContact}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Save Contact
            </button>
            <a
              href="/path-to-your-wallet-file.pkpass"
              download
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Add to Wallet
            </a>
          </div>
        </div>
       
       
      </div>
     
    </div>
  );
};

export default BusinessCard;
