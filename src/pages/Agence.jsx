import React, { use, useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Agence = () => {
 const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);



const imgarray=[
  'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  'https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

]

gsap.registerPlugin(ScrollTrigger);

  const imgdiv=useRef(null);
  const dynamicimg=useRef(null);
useGSAP(() => {
gsap.to(imgdiv.current, {
   scrollTrigger: {
    trigger: imgdiv.current,
    // markers:true,
    start:"top 36%",
    end:"bottom -30%",
    pin:true,
    scrub:true,
    onUpdate:function(dets){
      console.log(dynamicimg.src)
      let ind=Math.floor(dets.progress * (imgarray.length-1));
      console.log(ind);
      if(dynamicimg.current){
        dynamicimg.current.src=imgarray[ind];
      }

    }
    

  },
  // y:-400
}
 
)
})

  return (
    <div className='relative'>
      <div className="nav fixed top-0 w-full z-50">
      <Navbar/>
      </div>
      <div className="section1 w-full min-h-screen  relative l300 font-['Lausanne300']">
        <div ref={imgdiv} className="img bg-red-500 h-65 w-50 rounded-xl absolute left-[30vw] -translate-y-[20vh]  z-0 overflow-hidden">
          <img ref={dynamicimg} className='object-fit' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <h1 className='uppercase text-[20vw] l500 leading-[16vw] mt-100  text-center'>Seven7y <br /> two</h1>
        <div className="text2 text-[3vw] leading-[3vw] font-bold ml-auto w-[50vw] l500">We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Agence
