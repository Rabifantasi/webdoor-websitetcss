import React from 'react'


interface Props {
    text: string;
}

const ButtonRed = ({}:Props) => {
  return <button
  className="rounded-md px-4 py-1 text-[15px] md:px-8 md:py-2.5 
  bg-red-500 text-white transition-colors duration-300 ease-out
  hover:bg-red-400"
>
  SignUp
</button>
    
}

export default ButtonRed
