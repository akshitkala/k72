import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
const [hoveringtext, sethoveringtext] = useState({p1:"akshit",p2:"akshit",p3:"akshit"})
const hoveredtext=useRef()
  useGSAP(() => {
    const imgcontainer = document.querySelectorAll(".imgcontainer");
    const itemlist = document.querySelector(".itemlist");
    gsap.to(imgcontainer, {
      height: "60vh",
      // duration:1.2,
      // ease: "power1.in",
      scrollTrigger: {
        trigger: itemlist,
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
    imgcontainer.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el.querySelector(".viewtext"), {
          opacity: 1,
        });
        gsap.to(".hoveringtext",{
          translateY:"0%",
          duration:0.1,
        })
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el.querySelector(".viewtext"), {
          opacity: 0,
        });
        gsap.to(".hoveringtext",{
          translateY:"-100%",
          duration:0.1,
        })
      });
    });
  });


  function showhoveringtext(e){
    console.log("hovered")
    sethoveringtext({p1:e.name,p2:e.category,p3:e.year})
    
  }

  return (
    <div className="w-full min-h-screen relative">
      <div className="nav fixed w-full z-50">
      <Navbar/>
      </div>
      <div ref={hoveredtext} className="hoveringtext w-full fixed -translate-y-[100%]  z-40 pt-14 bg-white   overflow-hidden transition-all duration-1000"> 
        <div className="flex text-black text-[3vw] justify-between px-2 l300 border-t-2 border-b-2 border-black transition-all">
          <p>{hoveringtext.p1}</p>
          <p>{hoveringtext.p2}</p>
          <p>{hoveringtext.p3}</p>
          
        </div>
      </div>
      <div className="w-full p-2 text-black ">
        <h1 className="uppercase text-[14vw] l500 leading-[10vw] pt-90">
          Work
        </h1>
        <div className="itemlist grid grid-cols-2 gap-5 mt-5">
          {[
            {
              img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
              name: "Jean Coutu",
              category: "Everyone's Pharmacy",
              year: 2025,
            },
            {
              img: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
              name: "Widescape",
              category: "Widescape",
              year: 2024,
            },
            {
              img: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
              name: "OKA",
              category: "OKA",
              year: 2022,
            },
            {
              img: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
              name: "Opto Reseau",
              category: "Opto Reseau",
              year: 2021,
            },
            {
              img: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
              name: "Coup Fumant",
              category: "Coup Fumant",
              year: 2020,
            },
            {
              img: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
              name: "Shelton",
              category: "Shelton",
              year: 2019,
            },
          ].map((item) => {
            return (
              <div onMouseEnter={()=>{showhoveringtext(item)}} onMouseLeave={()=>{hidehoveringtext(item)}} className="imgcontainer h-[5vh]  lg:h-[20vh]  relative overflow-hidden">
                <h1 className=" viewtext uppercase whitespace-nowrap text-white text-[3vw] border-2 border-white px-10 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]  font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0">
                  View Project
                </h1>
                <img
                  className="w-full h-full object-cover hover:rounded-[50px] transition-all"
                  src={item.img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Work;
