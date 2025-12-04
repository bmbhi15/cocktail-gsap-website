"use client";
import { useState } from "react";
import { sliderLists } from "../utils/constants";
import clsx from "clsx";
import { StepBack, StepForward } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Menu = () => {
  const [cocktail, setCocktail] = useState({
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  });

  const prevIndex = (cocktail.id + 2) % 4;
  const nextIndex = cocktail.id % 4;

  useGSAP(() => {
    gsap.from(`.recipe-${cocktail.id}`, {
      opacity: 0,
      yPercent: 50,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.from(`.recipe-title-${cocktail.id}`, {
      opacity: 0,
      x: -200,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.from(`.drink-${cocktail.id}`, {
      opacity: 0,
      x: -400,
      duration: 1,
      ease: "power1.inOut",
    });
  }, [cocktail]);
  return (
    <section id="menu" className="noisy">
      <img
        src="/images/slider-left-leaf.png"
        alt="Menu left leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="Menu left leaf"
        id="m-right-leaf"
      />
      <div className="cocktail-tabs">
        {sliderLists.map((item) => (
          <button
            key={item.name}
            className={clsx({ "opacity-100": item.name === cocktail.name })}
            onClick={() => setCocktail(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="arrows abs-center top-52">
          <button
            className="space-y-4"
            onClick={() => setCocktail(sliderLists[prevIndex])}
          >
            <span className="text-left">{sliderLists[prevIndex].name}</span>
            <StepBack />
          </button>
          <button
            className="space-y-4"
            onClick={() => setCocktail(sliderLists[nextIndex])}
          >
            <span className="text-right"> {sliderLists[nextIndex].name}</span>
            <StepForward className="justify-self-end" />
          </button>
        </div>
        <div className="cocktail">
          <img
            src={cocktail.image}
            alt={cocktail.name}
            className={`drink-${cocktail.id}`}
          />
        </div>
        <div className="recipe">
          <div className="info">
            <p>Recipes for:</p>
            <span id="title" className={`recipe-title-${cocktail.id}`}>
              {cocktail.name}
            </span>
          </div>
          <div className={`details recipe-${cocktail.id}`}>
            <h2>{cocktail.title}</h2>
            <p>{cocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
