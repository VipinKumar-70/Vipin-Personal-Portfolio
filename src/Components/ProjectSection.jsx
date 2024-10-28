import React, { useRef } from "react";
import portfolio from "../assets/portfolio.png";
import { Element } from "react-scroll";
import { useScrollReveal } from "../GSAPManager";

function ProjectCard({ projectImg, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="col-span-1 overflow-hidden rounded-2xl relative group"
    >
      <img
        className="w-full group-hover:scale-105 duration-300 ease-in-out"
        src={projectImg}
        alt=""
      />
      <div className="bg-[#8844c776] w-full h-full rounded-2xl p-2 absolute z-10 bottom-0 opacity-0 group-hover:opacity-100 duration-300 ease-in grid place-content-center backdrop-blur-md">
        <a href="#">
          <button className="text-3xl text-gray-700 font-bold p-4 px-6 bg-white rounded-2xl">
            Preview
          </button>
        </a>
      </div>
    </div>
  );
}

function ProjectSection() {
  const projectRef = useRef();
  const projectBoxes = Array.from({ length: 4 }, () => useRef());
  const projectArray = [projectRef, ...projectBoxes];

  useScrollReveal(projectArray, {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    ease: "power3.out",
    scrub: 1.5,
    x: (index) => (index % 2 === 0 ? -70 : 70),
  });

  return (
    <>
      <Element name="projects">
        <section>
          <div className="bg-[#050709] w-full mx-auto lg:px-16 px-4 py-20">
            <div
              className="max-w-[1370px] w-full grid place-items-center gap-y-3"
              ref={projectRef}
            >
              <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
                Recent Projects
              </div>
              <div className="text-[18px] text-gray-300 text-center md:w-3/6 w-full">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </div>
              <div className="grid place-items-center grid-cols-1 md:grid-cols-2 my-5 gap-6 px-10 overflow-hidden">
                {projectBoxes.map((boxRef, index) => (
                  <ProjectCard
                    key={index}
                    projectImg={portfolio}
                    cardRef={boxRef}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default ProjectSection;
