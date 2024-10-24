import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ProjectSection from "./ProjectSection";
function Container() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <ResumeSection />
      <SkillsSection />
      {/* <ProjectSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Container;
