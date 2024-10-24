import React, { useState } from "react";
import reactLogo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header className="w-full mx-auto lg:px-10 md:px-8 px-4 py-2 bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#221338]">
        <nav className="max-w-[1370px] py-8 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src={reactLogo}
                alt="logo"
                className="h-12 lg:h-20 inline-block"
              />
            </a>
            <a href="mailto:vk20140074250@gmail.com">
              <span className="hidden md:inline-block text-white hover:text-[#5c34ac] duration-300 lg:text-xl text-center font-bold font-serif">
                mail@vipindev.com
              </span>
            </a>
          </div>

          {/* Mobile Menu button (hamburger + hire me) */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Hire Me Button on Mobile */}
            <button className="bg-gradient-to-r from-[#7a47df] via-[#5c34ac] to-[#311960] px-[20px] py-2 text-white text-[16px] rounded-3xl font-serif">
              Hire me!
            </button>

            {/* Hamburger Icon */}
            <div onClick={handleNavbar}>
              {showNav ? (
                <AiOutlineClose className="text-white text-4xl cursor-pointer" />
              ) : (
                <GiHamburgerMenu className="text-white text-4xl cursor-pointer" />
              )}
            </div>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden lg:flex items-center justify-between gap-8 px-5">
            <ul className="flex gap-8">
              {[
                "Home",
                "Resume",
                "Skills",
                "Services",
                "Projects",
                "Contact",
              ].map((items, index) => (
                <li
                  className="text-[18px] text-white font-serif relative group cursor-pointer"
                  key={index}
                >
                  <Link
                    to={`${items.toLowerCase()}`}
                    smooth={true}
                    duration={500}
                  >
                    {items}
                  </Link>
                  <div className="absolute h-[2.5px] rounded-xl w-full bg-gradient-to-r from-[#7a47df] via-[#5c34ac] to-[#311960] scale-x-0 origin-left group-hover:scale-x-100 group-hover:block transition-all duration-300 ease-out"></div>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <button className="relative bg-gradient-to-r from-[#956ae9] via-[#5c34ac] to-[#311960] px-[30px] py-2 text-white text-[16px] rounded-3xl font-serif font-bold transition-all duration-500 ease-in-out overflow-hidden group">
                <span className="absolute top-0 -left-[150%] w-[5px] h-full bg-white opacity-30 group-hover:left-[150%] transition-all duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#311960] via-[#5c34ac] to-[#956ae9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10">Hire me!</span>
              </button>
            </div>
          </div>

          {/* Menu for small screens mobile/tablet */}
          {showNav && (
            <div className="lg:hidden absolute top-[100px] left-0 w-full bg-gray-900 p-8 z-10 px-5">
              <ul className="flex flex-col gap-6 items-center">
                {[
                  "Home",
                  "Resume",
                  "Skills",
                  "Services",
                  "Projects",
                  "Contact",
                ].map((items, index) => (
                  <li className="text-[18px] text-white font-serif" key={index}>
                    <Link
                      to={`#${items.toLowerCase()}`}
                      smooth={true}
                      duration={500}
                      onClick={handleNavbar}
                    >
                      {items}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
