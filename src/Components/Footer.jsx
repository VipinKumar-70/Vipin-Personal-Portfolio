import React, { useRef } from "react";
import reactLogo from "../assets/logo.png";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { useScrollReveal } from "../GSAPManager";

function Footer() {
  const footerRef = useRef();
  useScrollReveal([footerRef], {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
    scrub: 1.5,
  });
  return (
    <section>
      <div className="bg-[#140c1c] w-full mx-auto lg:px-16 px-4 py-4">
        <div
          className="max-w-[1370px] w-full grid place-items-center gap-y-3"
          ref={footerRef}
        >
          <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
            <img className="w-[110px]" src={reactLogo} alt="" />
          </div>
          <div className="relative w-full">
            <ul className="flex gap-x-8 gap-y-2 flex-wrap items-center justify-center font-medium">
              {["Home", "Resume", "Skills", "Projects", "Contact"].map(
                (items, index) => (
                  <li
                    className="text-[18px] text-white font-folio relative group cursor-pointer"
                    key={index}
                  >
                    <Link
                      to={`${items.toLowerCase()}`}
                      duration={500}
                      smooth={true}
                    >
                      {items}
                    </Link>
                    <div className="absolute h-[2.5px] rounded-xl w-full bg-gradient-to-r from-[#7a47df] via-[#5c34ac] to-[#311960] scale-x-0 origin-left group-hover:scale-x-100 group-hover:block transition-all duration-300 ease-out"></div>
                  </li>
                )
              )}
            </ul>
            <button
              class="hidden md:block fixed bottom-10 right-4 cursor-pointer bg-[#311960] px-3 py-2 rounded-md text-gray-200 tracking-wider shadow-xl animate-bounce hover:animate-none"
              onClick={() => scroll.scrollToTop()}
            >
              <svg
                class="w-8 h-8"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3l7.5 7.5M12 3L4.5 10.5M12 3v18"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="text-[#9a60f1] font-folio text-center my-2">
            © 2024 Created by Vipin Kumar. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
