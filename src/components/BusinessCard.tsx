
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
}) => {
  // Function to download vCard
//   const handleSaveContact = () => {
//     const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// N:${name}
// FN:${name}
// ORG:${company}
// TITLE:${title}
// EMAIL:${email}
// TEL:${phone}
// URL:${website}
// END:VCARD
//     `;

//     const blob = new Blob([vCardData], { type: "text/vcard" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `${name.replace(/\s+/g, "_")}_Contact.vcf`;
//     link.click();

//     URL.revokeObjectURL(url);
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
               

      <div
        className="p-8 ml-2 mr-2  border rounded-lg shadow-lg max-w-md w-80 h-[65dvh] text-center text-white relative bg-[#10275E] overflow-hidden "
        style={{
           backgroundImage: `url('/LogoPurple.png')`,
          backgroundSize: "cover",
          backgroundPosition: "2% center", // Off-center the background image
          backgroundColor: "#10275E", // Navy-600 Hex Color as fallback
           backdropFilter: "blur(5px)",
           backgroundRepeat: "no-repeat",
         }}
      >
        <Image src='/Wordmark_wo_TM - White.ai (1).png' alt={name} height={120} width={200} className="" />
         <div className=" p-6 rounded-md z-auto absolute bottom-20 -right-1 left-1">
          
          <h2 className="mt-6 text-5xl font-extrabold text-right mb-2 font-roboto ">{name}</h2>
          <p className="text-xl font-semibold text-right mb-2">{title}</p>
          <p className="text-xl font-semibold text-right">{email}</p>
         
          
          
        </div>
       
       
      </div>
     
    </div>
  );
};

export default BusinessCard;
