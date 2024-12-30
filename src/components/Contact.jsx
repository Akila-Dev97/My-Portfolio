import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "@remixicon/react";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-icon", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".reach-me", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="reach-me px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-lg lg:text-xl">
          Feel free to reach out me via email:{" "}
          <a href="akilawijerathna5@gmail.com" className="border-b">
            akilawijerathna5@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/akila-wijerathna-790ba4234"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my linkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://github.com/Akila-Dev97"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my github profile"
          >
            <RiGithubFill className="text-3xl" />
          </a>
          <a
            href="https://twitter.com/akila_wijerathna"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="visit my X profile"
          >
            <RiTwitterXFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
