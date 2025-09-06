import React from 'react'
import gsap from 'gsap';

import { useGSAP } from "@gsap/react";
import { useLocation } from 'react-router-dom';
const Stair = () => {
    const currentpath=useLocation().pathname;
    console.log(currentpath);

     useGSAP(()=>{
    const t1=gsap.timeline();
    t1.from(".stairanimate .stair",{
        y:"-100%",
        stagger:-0.1,
        duration:0.5,
        zIndex:"10"
    })
    t1.to(".stairanimate .stair",{
        y:"100%",
        stagger:-0.2,
        duration:0.5
    })
    t1.to(".stairanimate",{
        zIndex:"-10"
    })
    t1.to(".stairanimate .stair",{
        y:"-100%"
    })
    
  },[currentpath])


  return (


    <div className="">
        <div className="stairanimate w-full h-screen flex fixed top-0 z-10">
          <div className="stair bg-black w-1/5 h-full "></div>
          <div className="stair bg-black w-1/5 h-full "></div>
          <div className="stair bg-black w-1/5 h-full "></div>
          <div className="stair bg-black w-1/5 h-full "></div>
          <div className="stair bg-black w-1/5 h-full "></div>
        </div>
      </div>
  )
}

export default Stair
