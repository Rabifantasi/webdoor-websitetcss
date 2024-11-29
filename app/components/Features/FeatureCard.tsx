import React from 'react';
import Image from 'next/image';

interface Props {
  image: string;
  title: string;
  description: string; // Added description prop
}

const FeatureCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
      <Image 
        src={image} 
        alt={title} 
        width={80} 
        height={80} 
        className="mx-auto mb-4"
      />
      <h1 className="text-lg font-semibold text-gray-800 text-align-center">
        {title}
      </h1>
      <p className='mt-[1rem] text-black opacity-90 text-[#02073e]'>
        {description} {/* Display the specific description */}
      </p>
      <p className='mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-red-800'>
        Learn More 
      </p>
    </div>
  );
};

export default FeatureCard;