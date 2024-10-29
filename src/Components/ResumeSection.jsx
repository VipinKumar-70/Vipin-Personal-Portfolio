import React, { useRef } from "react";
import { FaAward } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { Element } from "react-scroll";
import { useScrollReveal } from "../GSAPManager";
import gsap from "gsap";

function Card({ year, title, place }) {
  return (
    <div className="group">
      <div className="bg-[#140c1c] rounded-2xl p-5 my-4 flex flex-col gap-y-1  hover:bg-gradient-to-r hover:from-[#956ae9] hover:via-[#5c34ac] hover:to-[#311960] transition-colors duration-400">
        <div className="md:text-xl text-[16px] text-[#8c51e4] font-semibold group-hover:text-white transition-colors">
          {year}
        </div>
        <div className="md:text-2xl text-xl font-bold">{title}</div>
        <div className="md:text-[16px] text-[14px] font-normal">{place}</div>
      </div>
    </div>
  );
}

function ResumeSection() {
  const expRef = useRef();
  const eduRef = useRef();

  const refArray = [expRef, eduRef];

  useScrollReveal(refArray, {
    opacity: 0,
    x: (index) => (index === 0 ? -300 : 300),
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrub: 1.5,
  });

  return (
    <Element name="resume">
      <section className="bg-[#050709] w-full mx-auto lg:px-16 px-4 py-6 text-gray-300 font-folio">
        <div className="max-w-[1370px] w-full py-20 flex md:justify-between flex-wrap gap-y-12 md:px-10 lg:px-0">
          {/* Experience Section */}
          <div
            className="experienceSection w-full md:w-[48%] px-6 flex flex-col items-start gap-y-10"
            ref={expRef}
          >
            <div className="w-full flex items-center gap-x-2">
              <FaAward className="text-5xl" />
              <h2 className="lg:text-[40px] md:text-[33px] text-[28px] p-2 font-medium bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
                My Experience
              </h2>
            </div>
            <div className="w-full">
              <Card
                year="June 2023 - October 2023"
                title="Frontend Developer"
                place="GD Solution, New Delhi"
              />
              <Card
                year="Nov 2022 - Feb 2023"
                title="IT Trainer"
                place="GDF Skills, Uttam Nagar"
              />
            </div>
          </div>

          {/* Education Section */}
          <div
            className="educationSection w-full md:w-[48%] px-6 flex flex-col items-start gap-y-10"
            ref={eduRef}
          >
            <div className="w-full flex items-center gap-x-2">
              <FaGraduationCap className="text-5xl" />
              <h2 className="lg:text-[40px] md:text-[33px] text-[28px] p-2 font-medium bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
                My Education
              </h2>
            </div>
            <div className="w-full">
              <Card
                year="2024 - Present"
                title="Master in Computer Applications"
                place="KR Mangalam University, Gurgaon"
              />
              <Card
                year="2021 - 2024"
                title="Bachelor in Computer Applications"
                place="Guru Gobind Singh Indraprastha University, New Delhi"
              />
              <Card
                year="2022 - 2023"
                title="Diploma in Information Technology"
                place="GDF Skills, Uttam Nagar"
              />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ResumeSection;
