import React, { useRef } from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Element } from "react-scroll";
import { useScrollReveal } from "../GSAPManager";

function ContactSection() {
  const contactFormRef = useRef();
  const contactDetailRef = useRef();

  const contactArray = [contactFormRef, contactDetailRef];

  useScrollReveal(contactArray, {
    opacity: 0,
    x: (index) => (index === 0 ? -300 : 300),
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrub: 1.5,
  });
  return (
    <>
      <Element name="contact">
        <section>
          <div className="bg-[#050709] w-full mx-auto lg:px-20 px-4 p-20 flex flex-wrap-reverse items-center justify-between gap-4">
            <div
              className="lg:w-[48%] md:w-full bg-[#140c1c] lg:p-12 p-6 grid items-center rounded-2xl"
              ref={contactFormRef}
            >
              <div>
                <p className="md:text-5xl text-4xl bg-gradient-to-r from-[#8c51e4] via-[#b495e4] to-[#c1a8e7] bg-clip-text text-transparent py-2 font-bold">
                  Let’s work together!
                </p>
                <p className="md:text-[19px] text-gray-300 my-4 ">
                  I design and code beautifully simple things and i love what i
                  do. Just simple like that!
                </p>
              </div>
              <div>
                <form action="https://formspree.io/f/mdkokrep" method="POST">
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {/* Name Input */}
                    <div className="col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        required
                        className="w-full md:text-[18px] font-medium p-4 px-5 bg-[#050709] text-gray-300 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df]"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        required
                        className="w-full md:text-[18px] font-medium p-4 px-5 bg-[#050709] text-gray-300 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df]"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="col-span-2 sm:col-span-1">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        className="w-full md:text-[18px] font-medium p-4 px-5 bg-[#050709] text-gray-300 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df]"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <input
                        type="tel"
                        placeholder="Phone"
                        name="phone"
                        required
                        className="w-full md:text-[18px] font-medium p-4 px-5 bg-[#050709] text-gray-300 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df]"
                      />
                    </div>

                    {/* Select Dropdown */}
                    <div className="col-span-2 text-gray-300">
                      <select
                        className="w-full p-4 bg-[#050709] border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df] md:font-medium"
                        name="service"
                        required
                      >
                        <option
                          className="bg-gray-300 text-black font-medium"
                          value=""
                        >
                          - Please Choose an Option -
                        </option>
                        <option
                          className="bg-gray-300 text-black font-medium"
                          value="Branding Design"
                        >
                          Branding Design
                        </option>
                        <option
                          className="bg-gray-300 text-black font-medium"
                          value="Web Development"
                        >
                          Web Development
                        </option>
                        <option
                          className="bg-gray-300 text-black font-medium"
                          value="UI/UX Design"
                        >
                          UI/UX Design
                        </option>
                        <option
                          className="bg-gray-300 text-black font-medium"
                          value="Consulting"
                        >
                          Consulting
                        </option>
                      </select>
                    </div>

                    {/* Textarea */}
                    <div className="col-span-2">
                      <textarea
                        name="message"
                        placeholder="Message"
                        rows="7"
                        className="w-full md:text-[18px] font-medium p-3 bg-[#050709] text-gray-300 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-[#7a47df] resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button className="relative bg-gradient-to-r from-[#956ae9] via-[#5c34ac] to-[#311960] md:px-[20px] px-[14px] md:py-3 py-2 text-white text-[18px] rounded-3xl font-serif md:font-bold transition-all duration-500 ease-in-out overflow-hidden group">
                        <span className="absolute top-0 -left-[150%] w-[5px] h-full bg-white opacity-30 group-hover:left-[150%] transition-all duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#311960] via-[#5c34ac] to-[#956ae9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative z-10 md:text-xl">
                          Send Message
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-[48%] md:w-full grid lg:items-center gap-10 lg:p-20 p-4"
              ref={contactDetailRef}
            >
              <div className="flex justify-start items-center md:gap-4 gap-2">
                <div className="text-gray-300 p-3 bg-gradient-to-r from-[#5f3999] via-[#5d2fa1] to-[#72579a] rounded-[50%] grid items-center text-2xl">
                  <LiaPhoneVolumeSolid />
                </div>
                <div>
                  <p className="text-gray-300 md:text-[18px]">Phone</p>
                  <a
                    className="text-white lg:text-2xl text-xl  font-sans font-medium hover:text-[#7043b3] duration-300"
                    href="tel:+917678611694"
                  >
                    +917678611694
                  </a>
                </div>
              </div>
              <div className="flex justify-start items-center md:gap-4 gap-2">
                <div className="text-gray-300 p-3 bg-gradient-to-r from-[#5f3999] via-[#5d2fa1] to-[#72579a] rounded-[50%] grid items-center text-2xl font-bold">
                  <MdOutlineMail />
                </div>
                <div>
                  <p className="text-gray-300 text-[18px]">Email</p>
                  <a
                    className="text-white lg:text-2xl text-xl font-sans font-medium hover:text-[#7043b3] duration-300"
                    href="mailto:vk20140074250@gmail.com"
                  >
                    mail@vipindev.com
                  </a>
                </div>
              </div>
              <div className="flex justify-start items-center md:gap-4 gap-2">
                <div className="text-gray-300 p-3 bg-gradient-to-r from-[#5f3999] via-[#5d2fa1] to-[#72579a] rounded-[50%] grid items-center text-2xl font-bold">
                  <IoLocationOutline />
                </div>
                <div>
                  <p className="text-gray-300 text-[18px]">Address</p>
                  <a
                    className="text-white lg:text-2xl text-xl font-sans font-medium hover:text-[#7043b3] duration-300"
                    href="https://www.google.com/maps?q=48.8584,2.2945"
                    target="_blank"
                  >
                    Garhi Harsaru, Gurgaon, Haryana
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
}

export default ContactSection;
