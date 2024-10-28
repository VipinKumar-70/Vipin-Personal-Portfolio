import React, { useEffect, useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import photo from "../assets/photo.png";
import { Element } from "react-scroll";
import { cursorAnimation, HeroAnimation } from "../GSAPManager";

function HeroSection() {
  const cursorRef = useRef(null);
  cursorAnimation(cursorRef);

  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);

  HeroAnimation([heroLeftRef, heroRightRef]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 p-4 m-2 bg-[#6941a591] rounded-full pointer-events-none z-50 hidden md:block"
      ></div>
      <Element name="home">
        <section className="w-full mx-auto lg:px-20 px-4 py-6 text-white font-serif bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#221338]">
          <div className="max-w-[1370px] w-full py-8 flex md:justify-between justify-center gap-y-4 items-center md:px-10 lg:px-0">
            <div
              className="lg:w-[50%] w-full md:px-0 px-10 flex flex-col lg:gap-4 md:gap-3"
              ref={heroLeftRef}
            >
              <div className="lg:text-5xl md:text-3xl text-3xl font-bold text-gray-300">
                I am Vipin
              </div>
              <div
                className="xl:text-7xl lg:text-6xl md:text-4xl text-3xl font-bold bg-gradient-to-r from-[#6941a5] via-[#b09bd1] to-[#cac5d1] bg-clip-text text-transparent py-2
            "
              >
                Web Developer + UX Designer
              </div>
              <div className="w-[80] h-[80] mx-auto grid place-items-center my-10 border-2 border-[#2d1651] border-solid rounded-[50%] overflow-hidden  transition-all duration-500 ease-in-out transform hover:border-[#7937db] md:hidden">
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src={photo}
                  alt="img"
                />
              </div>
              <div className="text-[18px] text-gray-300 lg:w-[70%] w-full">
                I break down complex user experience problems to create
                integrity focussed solutions that connect billions of people
              </div>
              <div className="flex items-center md:justify-start justify-center flex-wrap gap-5 my-5">
                <a
                  href="/VipinKumarResume.pdf"
                  download="Vipin Resume"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="flex items-center px-8 text-[18px] text-[#7937db] border-[#7937db] border-solid border-2 py-3 rounded-3xl hover:text-white hover:bg-[#7937db] duration-300">
                    Download CV
                    <MdOutlineFileDownload className="text-2xl ml-1 " />
                  </button>
                </a>
                <div className="flex lg:gap-2 md:gap-3 gap-4">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-[35px] text-[#7937db] border-2 border-[#7937db] rounded-3xl p-2 hover:text-white hover:bg-[#7937db] duration-300"></FaFacebookF>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vipinkumar70/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="text-[35px] text-[#7937db] border-2 border-[#7937db] rounded-3xl p-2 hover:text-white hover:bg-[#7937db] duration-300"></FaLinkedinIn>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <FaDribbble className="text-[35px] text-[#7937db] border-2 border-[#7937db] rounded-3xl p-2 hover:text-white hover:bg-[#7937db] duration-300"></FaDribbble>
                  </a>
                  <a
                    href="https://github.com/VipinKumar-70"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[35px] text-[#7937db] border-2 border-[#7937db] rounded-3xl p-2 hover:text-white hover:bg-[#7937db] duration-300"></FaGithub>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="flex lg:justify-center sm:justify-end"
              ref={heroRightRef}
            >
              <div className="xl:h-[400px] xl:w-[400px] lg:h-[350px] lg:w-[350px] bg-[#090909] place-items-center xl:mr-16 lg:mr-10 md:ml-2 mb-16 rotate-6 border-2 border-[#2d1651] border-solid rounded-2xl overflow-hidden md:w-[300px] md:h-[300px] transition-all duration-500 ease-in-out transform hover:rotate-0 hover:border-[#7937db] hidden md:block">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src={photo}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default HeroSection;
