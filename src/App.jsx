import React, { useEffect } from "react";
import Agence from "./pages/Agence";
import Work from "./pages/Work";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from 'gsap';

import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { Timeline } from "gsap/gsap-core";
import Home from "./pages/home";



const App = () => {
 const location=useLocation()
 
 useEffect(() => {
  const locomotivescoll= new LocomotiveScroll() 
  return () => {
      locomotivescoll.destroy(); // cleanup on unmount
    };
}, [])

useGSAP(()=>{
  let t1=gsap.timeline()

  t1.to(".main",{
    opacity:0,
    duration:0.1
  }).to(".stair",{

    height:"100vh",
    duration:0.5,
    stagger:{
      amount:0.2,
    }
  }).to(".main",{
    opacity:1,
    duration:0.1
  }).to(".stair",{
    y:"100%",
    duration:0.5,
    delay:0.5,
    stagger:{
      amount:0.2,
    }
  }).to(".stair",{
   opacity:0,
   duration:0.1
  }).to(".stair",{
    y:"0%",
    duration:0.1,
    height:"0vh"
  }).to(".stair",{
       opacity:1,
       duration:0.1
  })
  
},[location.pathname])

  return (
    <>
     
    <div className="overflow-x-hidden relative">
      <div className="preloader w-full h-0 bg-black absolute top-0 z-100 flex">
        <div className="stair bg-black w-1/5 h-0"></div>
          <div className="stair bg-black w-1/5 h-0"></div>
          <div className="stair bg-black w-1/5 h-0"></div>
          <div className="stair bg-black w-1/5 h-0"></div>
          <div className="stair bg-black w-1/5 h-0"></div>
      </div>
      <div className="main relative">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
    </div>
    </>
  );
};

export default App;
