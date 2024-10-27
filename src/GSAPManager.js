import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const cursorAnimation = (cursorRef) => {
  useGSAP(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.4,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.4,
      ease: "power2.out",
    });

    const handleMouseMove = (event) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
};

export const NavbarAnimation = (refs) => {
  useGSAP(() => {
    const element = refs.map((ref) => ref.current).filter(Boolean);
    if (element.length) {
      gsap.from(element, {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        stagger: 0.2,
      });
    }
  }, [refs]);
};

export const HeroAnimation = (heroRefs) => {
  useGSAP(() => {
    const heroElements = heroRefs.map((ref) => ref.current).filter(Boolean);
    if (heroElements.length) {
      const t1 = gsap.timeline();
      t1.from(heroElements, {
        opacity: 0,
        x: (index) => (index === 0 ? 150 : -150),
        delay: 0.5,
        duration: 1.3,
        ease: "power2.out",
      });
    }
  }, [heroRefs]);
};
