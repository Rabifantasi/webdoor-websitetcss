import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureCard from './FeatureCard';
import Icon1 from "@/public/—Pngtree—vector dark blue sewing line_2238330.png";
import Icon2 from "@/public/Capture.png";
import Icon3 from "@/public/Capture2.png";
import Icon4 from "@/public/Capture3.png";

const Features = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <SectionHeading 
        headingMini="Service at your Doorstep"
        headingPrimary="Explore the Services" 
      />
      <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
        <FeatureCard 
          title="Stitching Service" 
          image={Icon1.src} 
          description="Our stitching service provides professional sewing and alterations for garments, ensuring a perfect fit and custom designs." 
        />
        <FeatureCard 
          title="Mehendi Service" 
          image={Icon2.src} 
          description="Experience beautiful henna designs for your special occasions with our expert mehendi artists." 
        />
        <FeatureCard 
          title="Caretaker Service" 
          image={Icon3.src} 
          description="Compassionate and reliable caretaker services for your loved ones, ensuring their comfort and safety." 
        />
       <br />
       <br />
       <br />
       <br />
       <br />
        <FeatureCard 
          title="Graphic Design Service" 
          image={Icon4.src} 
          description="Get stunning graphic designs tailored to your brand’s needs, from logos to marketing materials." 
        />
      </div>
    </div>
  );
}

export default Features;