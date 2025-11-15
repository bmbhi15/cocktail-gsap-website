"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((elem) => {
      elem.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      opacity: 0,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.04,
      delay: 1,
    });

    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    timeline1
      .to(
        ".left-leaf",
        {
          y: -200,
        },
        0
      )
      .to(
        ".right-leaf",
        {
          y: 200,
        },
        0
      );

    if (!videoRef.current) return;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "center 60%",
        end: "bottom top",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      timeline.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="hero-left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="hero-right-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="hidden lg:block space-y-4">
              <p className="subtitle">Cool Crisp Classic</p>
              <p className="subtitle text-left">
                Sip the Spirit of <br /> Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>{" "}
              <a>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          playsInline
          muted
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
