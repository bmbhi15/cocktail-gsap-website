"use client";
import { goodLists, featureLists } from "../utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".will-fade", {
      opacity: 0,
      stagger: 0.2,
    })
      .to(
        ".cocktail-img",
        {
          scale: 1.1,
          maskPosition: "center",
          maskSize: "400%",
          duration: 2,
          ease: "power1.inOut",
        },
        "=-0.5"
      )
      .to(".masked-content", {
        opacity: 1,
        duration: 1,
      });
  }, []);
  return (
    <section id="art">
      <h2 className="will-fade">The ART</h2>
      <div className="content w-full px-auto md:px-40">
        <ul className="flex flex-col will-fade space-y-4">
          {goodLists.map((item) => (
            <li key={item} className="flex flex-row space-x-4">
              <img alt="check-icon" src="/images/check.png" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <img
          className="cocktail-img masked-img"
          src="/images/under-img.jpg"
          alt="under image"
        />
        <ul className="flex flex-col will-fade space-y-4">
          {featureLists.map((item) => (
            <li key={item} className="flex flex-row space-x-4">
              <img alt="check-icon" src="/images/check.png" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="masked-container mt-10">
        <h2 className="will-fade">Sip-Worthy Perfection</h2>
        <div className="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>
            This isn't just a drink. It's a carefully crafted moment just for
            you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Art;
