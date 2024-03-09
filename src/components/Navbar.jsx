import React from "react";
import Logo from "../assets/logo2.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="fixed backdrop-filter backdrop-blur-lg z-[999] w-full px-20 py-5 flex justify-between items-center font-mono">
      <div><img className="w-10" src={Logo} alt="" /></div>
      <div className="logo ">
        <div className="pokemon-logo font-extrabold">
          <span>P</span>
          <span>O</span>
          <span>K</span>
          <span>É</span>
          <span>M</span>
          <span>O</span>
          <span>N</span>
        </div>
        <div className="underline font-extrabold"></div>
      </div>
      <div><img className="w-10" src={Logo} alt="" /></div>
      {/* <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg font-light capitalize ${index === 4 && "ml-32" }`} >
            {item}
          </a>
        ))}
      </div> */}
    </div>
  );
}

export default Navbar;
