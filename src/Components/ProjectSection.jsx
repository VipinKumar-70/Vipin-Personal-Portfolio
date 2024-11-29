import React, { useRef } from "react";
import portfolio from "../assets/portfolio.png";
import cohere from "../assets/cohere.png";
import netflix from "../assets/netflix.png";
import wizardz from "../assets/wizardz.png";
import { Element } from "react-scroll";
import { useScrollReveal } from "../GSAPManager";

function ProjectCard({ projectImg, linkRef }) {
  return (
    <div className="col-span-1 relative group w-full h-[300px] lg:h-[350px] overflow-hidden rounded-2xl">
      {/* Image */}
      <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        src={projectImg}
        alt="Project Thumbnail"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#8844c776] rounded-2xl p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in grid place-content-center backdrop-blur-md">
        <a href={linkRef} target="_blank" rel="noopener noreferrer">
          <button className="md:text-2xl text-xl text-gray-700 font-bold md:p-3 p-1 md:px-5 px-2 bg-gray-300 rounded-2xl">
            Preview
          </button>
        </a>
      </div>
    </div>
  );
}

function ProjectSection() {
  const projectRef = useRef();
  const projectBoxes = useRef([]);

  const projectData = [
    { img: cohere, link: "https://cohere-clone.vercel.app/" },
    { img: wizardz, link: "https://gsap-landing-page-three.vercel.app/" },
    { img: netflix, link: "https://tailwind-netflix-clone.vercel.app/" },
  ];

  projectBoxes.current = projectData.map(
    (_, i) => projectBoxes.current[i] ?? React.createRef()
  );

  const projectArray = [projectRef, ...projectBoxes.current];

  useScrollReveal(projectArray, {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrub: 1.5,
    x: (index) => (index % 2 === 0 ? -70 : 70),
  });

  return (
    <Element name="projects">
      <section>
        <div className="bg-[#050709] w-full mx-auto lg:px-16 px-4 py-20 font-folio">
          <div
            className="max-w-[1370px] w-full grid place-items-center gap-y-3"
            ref={projectRef}
          >
            {/* Header */}
            <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
              Recent Projects
            </div>
            <div className="text-[18px] text-gray-300 text-center md:w-3/6 w-full">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and your customers.
            </div>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5 px-10">
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  projectImg={project.img}
                  linkRef={project.link}
                  cardRef={projectBoxes.current[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default ProjectSection;
