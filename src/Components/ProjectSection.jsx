import React from "react";
import portfolio from "../assets/portfolio.png";
function ProjectSection() {
  return (
    <>
      <section id="Projects">
        <div className="bg-[#140c1c] w-full mx-auto lg:px-16 px-4 py-20">
          <div className="max-w-[1370px] w-full grid place-items-center gap-y-3">
            <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
              Recent Projects
            </div>
            <div className="text-[18px] text-gray-300 text-center md:w-3/6 w-full">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </div>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2 my-5 gap-6 px-10">
              <div className="col-span-1 overflow-hidden rounded-2xl relative group">
                <img
                  className="group-hover:scale-105 duration-300 ease-in-out"
                  src={portfolio}
                  alt=""
                />
                <div className="bg-[#8744c7] rounded-2xl p-4 mx-4 absolute z-10 bottom-4 translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in">
                  <p className="text-[18px] text-gray-300">
                    This portfolio showcases my web development skills,
                    experience, and projects. It includes a clean and modern
                    design, interactive features, and is fully responsive across
                    all devices.
                  </p>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl relative group">
                <img
                  className="group-hover:scale-105 duration-300 ease-in-out"
                  src={portfolio}
                  alt=""
                />
                <div className="bg-[#8744c7] rounded-2xl p-4 mx-4 absolute z-10 bottom-4 translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in">
                  <p className="text-[18px] text-gray-300">
                    This portfolio showcases my web development skills,
                    experience, and projects. It includes a clean and modern
                    design, interactive features, and is fully responsive across
                    all devices.
                  </p>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl relative group">
                <img
                  className="group-hover:scale-105 duration-300 ease-in-out"
                  src={portfolio}
                  alt=""
                />
                <div className="bg-[#8744c7] rounded-2xl p-4 mx-4 absolute z-10 bottom-4 translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in">
                  <p className="text-[18px] text-gray-300">
                    This portfolio showcases my web development skills,
                    experience, and projects. It includes a clean and modern
                    design, interactive features, and is fully responsive across
                    all devices.
                  </p>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl relative group">
                <img
                  className="group-hover:scale-105 duration-300 ease-in-out"
                  src={portfolio}
                  alt=""
                />
                <div className="bg-[#8744c7] rounded-2xl p-4 mx-4 absolute z-10 bottom-4 translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-500 ease-in">
                  <p className="text-[18px] text-gray-300">
                    This portfolio showcases my web development skills,
                    experience, and projects. It includes a clean and modern
                    design, interactive features, and is fully responsive across
                    all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectSection;
