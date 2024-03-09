import React, { useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Power4 } from "gsap";
import Pikachu from "../assets/Pikachu1.png";
import card5 from "../assets/card5.jpg";
import card8 from "../assets/card8.jpg";
import card6 from "../assets/card6.webp";
import card7 from "../assets/card7.webp";
import card9 from "../assets/card9.jpg";
import Ash from "../assets/Ash.png";

function Featured() {
  const Cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    Cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    Cards[index].start({ y: "100%" });
  };

  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed=".-5" className="w-full py-20 font-mono">
      <div className="w-full px-20  ">
        {/* <h1 className="text-6xl tracking-tighter font-bold font-mono text-center">Mythical Pokémon</h1> */}
        {/* <div className="underline w-[2vw] ">
          <div className="underline w-[25vw] ml-[3.6vw]"></div>
        </div> */}
      </div>
      <div className="px-20">
        

        <div className="cards flex gap-7 w-full mt-10">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer border relative  w-1/2 rounded-xl h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden font-extrabold z-[9] text-7xl tracking-tighter left-full leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"Lukario".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="w-full h-full "
                src={card7}
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer relative w-1/2 rounded-xl h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden font-bolder z-[9] text-7xl tracking-tighter right-full leading-none top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"Gengar".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden border">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="w-full h-full "
                src={card6}
                alt=""
              />
            </div>
          </motion.div>
        </div>

        <div className="cards  flex gap-7 w-full mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer bg-[black] relative  w-1/2 rounded-xl h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden font-extrabold z-[9] text-7xl tracking-tighter left-full leading-none top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"ZapDos".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="w-full h-full "
                src={card8}
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer bg-[black] relative w-1/2 rounded-xl h-[70vh] "
          >
            <h1 className="absolute flex overflow-hidden font-extrabold z-[9] text-7xl tracking-tighter right-full leading-none top-1/2 translate-x-1/2 -translate-y-1/2 text-[#CDEA68]">
              {"Meoto".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={Cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card flex items-start justify-end w-full h-full rounded-xl overflow-hidden border">
              <motion.img
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className="w-full h-full"
                src={card9}
                alt=""
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center mt-10 ">
        <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
             className=" uppercase px-10 py-4 mt-7 mb-5 bg-zinc-900  border transition-all ease-in duration-75 rounded-full text-white flex items-center gap-5 ">
              <a href="https://www.pokemon.com/us">{"See More -->"}</a>
            </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
