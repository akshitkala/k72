import React from 'react'
import { useEffect,useState } from 'react';
import { CiGlobe } from "react-icons/ci";
const Footer = () => {

    
     const [time, setTime] = useState(new Date().toLocaleTimeString());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(timer); // cleanup on unmount
      }, []);
  return (
    <div className="footer w-full h-[100vh] md:h-[60vh] bg-black text-white relative">
      <div className="upper p-2 flex md:flex-row  flex-col gap-90 md:gap-0 justify-between">
        <div className="btns1 flex gap-1 md:gap-4 ">
          {["FB","IG","LN","TW"].map((item)=>{
            return <div className="agence uppercase text-[6vw] md:text-[4vw] border-2 border-white w-[20%] md:w-[150px]  text-center rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]  font-bold"
          >{item}</div>
          })}
          </div>
          <div className="btns2 flex">
            <div className="agence uppercase text-[12vw] md:text-[4vw] md:px-3  border-2 border-white w-[90%] md:w-fit  text-center rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]  font-bold mx-auto"
          >Contact </div>
          </div>
      </div>
      <div className="bottom flex justify-center w-full absolute bottom-5 gap-2 items-center">
         <div className="icon "><CiGlobe className='w-[2vw] h-[2vw]' /></div>
         <div className="txt text-[5vw] md:text-lg">INDIA  {time}</div>
        

      </div>
      </div>
  )
}

export default Footer
