import React from "react";
import Video from "../Home/video";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black text-white h-screen w-full relative l500">
      <div className="nav fixed w-full z-50">
      <Navbar/>
      </div>
      <div className="fixed w-full h-screen top-0 left-0 z-0">
        <video
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          src="./video.mp4"
        />
      </div>
      <div className="relative h-screen w-full ">
        <div className="toptext  text-[12vw] lg:text-[9vw] text-center uppercase lg:pt-5 md:pt-20 sm:pt-50 pt-60">
          <div className="leading-[9vw]">The spark for</div>
          <div className=" video-clip flex items-center gap-2 sm:gap-2 lg:gap-5 justify-center leading-[9vw] overflow-clip">
            all
            <div className="videodiv lg:w-70 w-20 h-10 lg:h-30 rounded-full overflow-hidden">
              <Video />
            </div>
            Things
          </div>

          <div className=" leading-[9vw]">Creative</div>
        </div>
        <div
          className="
    middletext 
    text-right 
    ml-auto 
    px-5 sm:px-8 md:px-10  pt-10 lg:pt-0
    w-[60%] sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 
    text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
  "
        >
          K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </div>

        <div className="bottombuttons flex absolute bottom-3 left-1/2 -translate-x-1/2 gap-5">
          <Link
            to={"/Work"}
            className="work uppercase text-[5vw] border-2 border-white lg:px-25 px-10 py-2 lg:py-0 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] font-bold"
          >
            Work
          </Link>
          <Link
            to={"/Agence"}
            className="agence uppercase text-[5vw] border-2 border-white lg:px-25 px-10  py-2 lg:py-0    rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50]  font-bold"
          >
            agence
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
