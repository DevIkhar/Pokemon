import React from "react";
import Background from "../assets/back.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full p-20 bg-[#CDEA68] rounded-bl-full  text-black font-mono"
    >
      <h1 className="text-4xl">
        Unleash the Poke-passion, where every journey evolves into an adventure,
        and every friendship is as enduring as a Pikachu's thunderbolt.
      </h1>
      <div className="flex w-full mt-5 pt-10 border-t-[1px] border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our Story:</h1>
          <motion.button  whileHover={{  }}
   className=" text-2xl uppercase px-10 py-4 mt-7 bg-zinc-900  rounded-full text-white flex items-center gap-5 ">
            <a href="https://www.pokemon.com/us">{"See More -->"}</a>
          </motion.button>
        </div>
        <div className="w-1/2 h-[60vh] rounded-3xl ">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full h-full rounded-xl"
            src={Background}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
