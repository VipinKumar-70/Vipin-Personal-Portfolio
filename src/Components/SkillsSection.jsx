import React from "react";
import jspng from "../assets/js.png";
import reactpng from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import nodelogo from "../assets/node.png";
import mongodblogo from "../assets/mongodb.png";
import python from "../assets/python.png";
import tailwindCSS from "../assets/tailwindCSS.png";

function SkillBox({ title, percentage, skillImg }) {
  return (
    <>
      <div className="text-center group">
        <div className="bg-[#1e122b] w-[165px] h-[165px] rounded-2xl grid place-items-center text-gray-400 font-bold text-[22px] p-5 border-transparent group-hover:bg-[#6554e452] group-hover:border-[#8e54e4] group-hover:border-[1px] duration-500 transition-all ease-in-out">
          <img
            className="w-2/4 group-hover:scale-110 transition-all ease-in-out duration-500"
            src={skillImg}
            alt=""
          />
          <p>{percentage}</p>
        </div>
        <p className="text-[#8e54e4] text-[18px] my-2">{title}</p>
      </div>
    </>
  );
}

function SkillsSection() {
  return (
    <>
      <section id="skills">
        <div className="bg-[#140c1c] w-full mx-auto lg:px-16 px-4 py-20">
          <div className="max-w-[1370px] w-full grid place-items-center gap-y-3">
            <div className="lg:text-5xl md:text-4xl text-3xl py-4 font-bold bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent">
              My Skills
            </div>
            <div className="text-[18px] text-gray-300 text-center md:w-3/6 w-full">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.
            </div>
            <div className="flex justify-center items-center flex-wrap my-5 gap-4">
              <SkillBox
                title="Bootstrap"
                percentage="96%"
                skillImg={bootstrap}
              />
              <SkillBox
                title="Tailwind CSS"
                percentage="93%"
                skillImg={tailwindCSS}
              />
              <SkillBox title="Javascript" percentage="90%" skillImg={jspng} />
              <SkillBox title="React" percentage="89%" skillImg={reactpng} />
              <SkillBox title="Node.js" percentage="79%" skillImg={nodelogo} />
              <SkillBox
                title="MongoDB"
                percentage="83%"
                skillImg={mongodblogo}
              />
              <SkillBox title="Python" percentage="90%" skillImg={python} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
