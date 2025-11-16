"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText(".will-fade", {
      type: "lines, chars",
    });
    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });
    timeline1
      .from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
        duration: 2,
        delay: 1,
      })
      .from(
        ".top-grid img",
        {
          opacity: 0,
          y: 10,
          duration: 4,
          delay: 2,
        },
        "=-0.5"
      )
      .from(".bottom-grid img", {
        opacity: 0,
        y: 10,
        duration: 4,
      });
  }, []);
  return (
    <section id="about">
      <div className="content mb-10">
        <div className="col-span-6">
          <p className="badge"> Best Cocktails</p>
          <h2 className="will-fade">
            Where every detail <br /> matters - from muddle <br />
            to garnish
          </h2>
        </div>
        <div className="col-span-3" />
        <div className="subcontent col-span-6 md:col-span-3">
          <p>
            {" "}
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable.{" "}
          </p>
          <div>
            <span className="will-fade">4.5/5</span>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="col-span-1 md:col-span-3">
          <img src="/images/abt1.png" alt="about 1" />
        </div>
        <div className="col-span-1 md:col-span-3">
          <img src="/images/abt2.png" alt="about 2" />
        </div>
        <div className="col-span-1 md:col-span-6">
          <img src="/images/abt5.png" alt="about 5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="col-span-1 md:col-span-8">
          <img src="/images/abt3.png" alt="about 1" />
        </div>
        <div className="col-span-1 md:col-span-4">
          <img src="/images/abt4.png" alt="about 2" />
        </div>
      </div>
    </section>
  );
};

export default About;
