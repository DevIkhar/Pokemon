import {React, useRef} from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import Ash from "../assets/Ash.png";
import { motion } from "framer-motion";




function Landing() {
  

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".-3" className=" w-full h-screen pt-1 font-sans">
      
      <div className="flex items-center justify-between mt-[13vh]">
      <div  className="textstructure mt-[8vh] px-20 font-sans">
        {["Got Catch", "'Em All'", "I Choose You!"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && 
                (
                <motion.div initial={{width:0}} animate={{width:100}} transition={{ease: [0.76, 0, 0.24, 1], duration: 2}} className={`mr-5 w-[9vw] rounded-md -top-[1.2vw]  h-[5vw]  mb-1 bg-gradient-to-b 
                 from-yellow-100 to-yellow-600`}>
                 </motion.div>
                 )}
                <h1 className="font-sans uppercase text-[6.5vw] leading-[6.7vw] tracking-tighter font-extrabold">
                {item}
              </h1>
              </div>

             
            </div>
             
          );
          
        })}
      </div>
      <motion.div  animate={{ y: [ 100, 0] }} transition={{ease: [0.76, 0, 0.24, 1], duration: 2}}>
        <img className="w-[40vw]"  src={Ash} alt="" />
        </motion.div>
      </div>
      
        

      <div className="border-t-[1px] border-zinc-700 mt-1 "></div>
      {/* <div className="flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className={`text-md  tracking-tight lending-none`}>
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-4">
          <div className="px-5 py-2 border-2 border-zinc-500 font-light text-md rounded-full uppercase">
            Start The Project
          </div>
          <div className="w-10 h-10 border-2 border-zinc-500 font-light flex items-center justify-center rounded-full "><MdOutlineArrowOutward /></div>
          
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
