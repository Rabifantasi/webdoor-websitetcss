import React from 'react';
import ButtonBlue from '../Button/ButtonBlue';
import ButtonRed from '../Button/ButtonRed';
import Image from 'next/image';

const HeroImg = '/support.jpg';

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center w-[80%] mx-auto">
        <div className="col-span-2">
          <h1 className="text-[27px] md:text-[35px] lg:text-[40px] mb-[1rem] font-bold text-[#02073e] leading-[2.4rem] md:leading-[4rem]">
            Website to Your Door Service
          </h1>
          <p className="md:text-[17px] text-[15px] text-black opacity-90 font-[400]">
            At WebDoor, we offer a unique range of services to meet your everyday needs and creative aspirations. From expert stitching and tailoring to elegant mehendi designs, our artistry shines. We also provide compassionate caretaker services for your loved ones and professional graphic design solutions to elevate your brand. Committed to excellence and a personal touch, we invite you to explore our services and let us be part of your journey!
          </p>
          <div className="flex items-center space-x-4 md:space-x-6">
            <br />
            <br />
            <br />
            <br />
            <br />
            <ButtonBlue text="Start" />
            <ButtonRed text="Explore" />
          </div>
        </div>
        <div className="col-span-3 hidden sm:block">
          <Image
            src={HeroImg}
            alt="Hero Image"
            layout="responsive"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;