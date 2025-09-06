import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const hoverlink = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const screennav = useRef(null);
  const [navstatus, setnavstatus] = useState(false);
  
  const location=useLocation()
  useGSAP(() => {


    const items = document.querySelectorAll(".item");
    let t1 = gsap.timeline({ paused: true });
    t1.to(screennav.current, {
      height: "100vh",
      duration: 0.5,
      
    }).fromTo(
      items,
      {
        rotateX: -90,
        opacity: 0,
      },
      { rotateX: 0, opacity: 1, duration: 0.3, stagger: 0.15 }
    );
    screennav.current.timeline = t1;
  }, []);
  useGSAP(() => {
    if (screennav.current?.timeline) {
      if (navstatus) {
        screennav.current.timeline.play();
      } else {
        screennav.current.timeline.reverse();
      }
    }
  }, [navstatus]);

  useGSAP(() => {
    const item = document.querySelectorAll(".item");

    item.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el.querySelector(".overtext"), {
          height: "100%",
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el.querySelector(".overtext"), {
          height: "0%",
        });
      });
    });
  });

  return (
    <div className="h-0  top-0">
      <div
        ref={screennav}
        className="w-full h-[0%] bg-black absolute z-50 text-white overflow-hidden transition-all duration-1000"
      >
        <div
          onClick={()=>setnavstatus(false)}
          className="cross absolute top-10 right-10 z-20 cursor-pointer"
        >
          <RxCross1 className="w-20 h-20" />
        </div>
        <div className="list absolute top-1/2 -translate-y-1/2 w-full">
          <div className="w-full item border-t border-b border-white h-fit relative">
            <Link to={"/work"}>
            
            <div className="text text-center text-[6vw] uppercase">Work</div>
            <div className="overtext bg-[#D3FD50] w-full h-[0%] overflow-hidden absolute top-0">
              <div className="txt w-full overflow-hidden">
                <div className="marqu whitespace-nowrap flex shrink-0 w-full items-center text-[6vw] text-black gap-20 h-full">
                  <p className="uppercase shrink-0">SEE Everything</p>
                  <p className="uppercase shrink-0">SEE Everything</p>
                  <p className="uppercase shrink-0">SEE Everything</p>
                  <p className="uppercase shrink-0">SEE Everything</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="w-full item border-t border-b border-white h-fit relative">
             <Link to={"/agence"}>
            <div className="text text-center text-[6vw] uppercase">Agency</div>
            <div className="overtext bg-[#D3FD50] w-full h-[0%] overflow-hidden absolute top-0">
              <div className="txt w-full overflow-hidden">
                <div className="marqu whitespace-nowrap flex shrink-0 w-full items-center text-[6vw] text-black gap-20 h-full">
                  <p className="uppercase shrink-0">Know us</p>
                  <p className="uppercase shrink-0">Know us</p>
                  <p className="uppercase shrink-0">Know us</p>
                  <p className="uppercase shrink-0">Know us</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="w-full item border-t border-b border-white h-fit relative">
             <Link to={"/"}>
            <div className="text text-center text-[6vw] uppercase">Contact</div>
            <div className="overtext bg-[#D3FD50] w-full h-[0%] overflow-hidden absolute top-0">
              <div className="txt w-full overflow-hidden">
                <div className="marqu whitespace-nowrap flex shrink-0 w-full items-center text-[6vw] text-black gap-20 h-full">
                  <p className="uppercase shrink-0">Send us a fact</p>
                  <p className="uppercase shrink-0">Send us a fact</p>
                  <p className="uppercase shrink-0">Send us a fact</p>
                  <p className="uppercase shrink-0">Send us a fact</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="w-full item border-t border-b border-white h-fit relative">
             <Link to={"/"}>
            <div className="text text-center text-[6vw] uppercase">Blog</div>
            <div className="overtext bg-[#D3FD50] w-full h-[0%] overflow-hidden absolute top-0">
              <div className="txt w-full overflow-hidden">
                <div className="marqu whitespace-nowrap flex shrink-0 w-full items-center text-[6vw] text-black gap-20 h-full">
                  <p className="uppercase shrink-0">Read article</p>
                  <p className="uppercase shrink-0">Read article</p>
                  <p className="uppercase shrink-0">Read article</p>
                  <p className="uppercase shrink-0">Read article</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit w-full z-20 absolute top-0 text-black flex justify-between items-start">
        <Link to={"/"} className={`logo py-2 px-4 ${location.pathname!=="/"?"":"invert"}`}>
          <img src="./k72.svg" alt="" />
        </Link >
        <div
          onMouseEnter={() => {
            hoverlink.current.style.height = "100%";
            line1.current.style.backgroundColor = "black";
            line2.current.style.backgroundColor = "black";
          }}
          onMouseLeave={() => {
            hoverlink.current.style.height = "0%";
            line1.current.style.backgroundColor = "white";
            line2.current.style.backgroundColor = "white";
          }}
          onClick={()=>setnavstatus(true)}
          className="navlink md:w-[15vw] sm:w-[20vw] w-[25vw] h-[6vh] md:h-[4vw] bg-black relative"
        >
          <div
            ref={hoverlink}
            className="overlay w-full h-0 bg-[#D3FD50] absolute top-0 z-10 transition-all"
          ></div>
          <div className="open relative w-full h-full cursor-pointer">
            <div className="absolute right-4 top-[1vw]">
              <div
                ref={line1}
                className="line bg-white w-10 h-[2px] my-1 z-20 relative"
              ></div>
              <div
                ref={line2}
                className="line bg-white w-5 h-[2px] my-1 ml-auto z-50 relative"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
