import React from "react";

const Footer = () => {
  return (
    <div className="py-[3rem] bg-gray-100">
      <div
        className="w-[90%] mx-auto grid grid-cols-1 border-b-[1.5px] border-b-slate-300 pb-[2rem]
        md:grid-cols-2 lg:grid-cols-4 gap-[2rem]"
      >
        <div>
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Company
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            About
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Stitching Service
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Mehendi Service
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Caretaker Service
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Graphic Design Service
          </p>
        </div>

        <div>
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Resources
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            My Account
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Social Media
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Directories
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Images
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Permissions
          </p>
        </div>

        <div>
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Our Information
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Return Policies
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Pricing
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Rules and Regulations
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Privacy Policy
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            Contact Us
          </p>
        </div>

        <div>
          <h1 className="text-[17px] text-gray-900 font-semibold mb-[1.5rem]">
            Quick Tools
          </h1>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            <a href="/size-guide">Size Guide</a>
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            <a href="/color-picker">Color Picker Tool</a>
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            <a href="/design-templates">Design Templates</a>
          </p>
          <p className="text-black opacity-80 mb-[1rem] text-[15px] cursor-pointer hover:text-yellow-600">
            <a href="/project-tracker">Order Tracker</a>
          </p>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-[2rem]">
        <div className="w-[90%] mx-auto text-center text-gray-400">
          <p className="text-sm">
            © 2024 Webdoor. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;