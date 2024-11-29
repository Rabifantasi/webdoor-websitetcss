import React from 'react'


interface Props {
    text: string;
}

const ButtonBlue = ({ text}:Props) => {
  return <button
  className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 
  bg-blue-500 text-white transition-colors duration-300 ease-out
  hover:bg-blue-400"
>
 Login
</button>

  
    
}

export default ButtonBlue
