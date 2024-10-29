import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const cursorAnimation = (cursorRef) => {
  useGSAP(() => {
    gsap.set(cursorRef.current, { opacity: 0 });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.4,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.4,
      ease: "power2.out",
    });

    let isFirstMove = true;
    const handleMouseMove = (event) => {
      if (isFirstMove) {
        gsap.set(cursorRef.current, { opacity: 1, duration: 0.3 });
        isFirstMove = false;
      }
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
        stagger: 0.3,
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

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (scrollRefs, animationProperties) => {
  useGSAP(() => {
    const scrollElements = scrollRefs.map((ref) => ref.current).filter(Boolean);

    if (scrollElements.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollElements[0],
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          ...animationProperties.scrollTrigger,
        },
      });

      scrollElements.forEach((element, index) => {
        tl.from(
          element,
          {
            ...animationProperties,
            x:
              typeof animationProperties.x === "function"
                ? animationProperties.x(index)
                : animationProperties.x,
            scrollTrigger: undefined,
          },
          index * (animationProperties.stagger || 0)
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [scrollRefs, animationProperties]);
};
