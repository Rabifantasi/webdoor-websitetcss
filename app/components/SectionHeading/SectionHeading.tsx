import React from "react";

interface Props {
  headingMini: string;
  headingPrimary: string;
}

const SectionHeading: React.FC<Props> = ({ headingMini, headingPrimary }) => {
  return (
    <div className="text-center p-2">
      <p className="text-[#FF0000] md:text-[16px] text-[15px]">{headingMini}</p>
      <h1 className="mt-[0.5rem] font-bold text-[22px] md:text-[30px] text-[#02073e]">
        {headingPrimary}
      </h1>
    </div>
  );
};

export default SectionHeading;