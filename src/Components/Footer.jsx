import React from "react";
import reactLogo from "../assets/logo.png";
function Footer() {
  return (
    <section id="footer">
      <div className="bg-[#140c1c] w-full mx-auto lg:px-16 px-4 py-4">
        <div className="max-w-[1370px] w-full grid place-items-center gap-y-3">
          <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
            <img className="w-[110px]" src={reactLogo} alt="" />
          </div>
          <div>
            <ul className="flex gap-x-8 gap-y-2 flex-wrap items-center justify-center font-medium">
              {["Home", "Resume", "Skills", "Projects", "Contact"].map(
                (items, index) => (
                  <li
                    className="text-[18px] text-white font-serif relative group"
                    key={index}
                  >
                    <a href={`#${items.toLowerCase()}`}>{items}</a>
                    <div className="absolute h-[2.5px] rounded-xl w-full bg-gradient-to-r from-[#7a47df] via-[#5c34ac] to-[#311960] scale-x-0 origin-left group-hover:scale-x-100 group-hover:block transition-all duration-300 ease-out"></div>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="text-[#9a60f1] font-serif text-center my-2">
            © 2024 Created by Vipin Kumar. All Rights Reserved.
          </div>
          <div className="flex justify-center items-center flex-wrap my-5 gap-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
