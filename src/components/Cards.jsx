import React from "react";

function Cards() {
  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed=".-1"  className=" flex gap-5 rounded-tl-full items-center px-20 w-full h-full bg-zinc-100 font-mono">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <div className="logo text-3xl text-[#CDEA68]">
            <div className="pokemon-logo ">
              <span>P</span>
              <span>O</span>
              <span>K</span>
              <span>É</span>
              <span>M</span>
              <span>O</span>
              <span>N</span>
            </div>
            <div className="underline bg-[#CDEA68] mt-3 w-[8vw]"></div>
          </div>
          <button className="absolute left-10 bottom-10 px-5  border-2 rounded-full">
            hey
          </button>
        </div>
      </div>
      <div className="cardcontainer relative flex gap-5 w-1/2 h-[50vh] w-1/2">
        <div className="flex items-center justify-center rounded-xl card w-1/2 h-full  bg-[#192826]">
          <div className="logo  text-xl text-[#CDEA68]">
          <div className="w-[5vw] h-[5vw] rounded-full absolute top-10 bg-[#CDEA68] flex items-center justify-center gap-3">
            <div className="w-1/3 h-1/3 rounded-full bg-zinc-100"></div>
            <div className="w-1/3 h-1/3 rounded-full bg-zinc-100"></div>
          </div>
            <div className="pokemon-logo ">
              <span>P</span>
              <span>I</span>
              <span>K</span>
              <span>A</span>
              <span>C</span>
              <span>H</span>
              <span>U</span>
            </div>
            <div className="underline bg-[#CDEA68] mt-1"></div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl card w-1/2 h-full bg-[#192826]">
        <div className="logo text-3xl text-[#CDEA68]">
            <div className="pokemon-logo ">
              <span>P</span>
              <span>O</span>
              <span>K</span>
              <span>É</span>
              <span>M</span>
              <span>O</span>
              <span>N</span>
            </div>
            <div className="underline bg-[#CDEA68] mt-3 w-[8vw]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
