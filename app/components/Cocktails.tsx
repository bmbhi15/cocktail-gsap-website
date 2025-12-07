"use client";
import { cocktailLists, mockTailLists } from "../utils/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 10%",
        end: "center 20%",
        scrub: true,
      },
    });
    timeline2
      .to(
        "#c-left-leaf",
        {
          y: -150,
        },
        0
      )
      .to(
        "#c-right-leaf",
        {
          y: 200,
        },
        0
      );
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="Cocktail left leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="Cocktail Right leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular cocktails</h2>
          <ul>
            {cocktailLists.map((item) => (
              <li key={item.name} className="space-x-20">
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.country}
                    {" | "}
                    {item.detail}
                  </p>
                </div>
                <span>-{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails</h2>
          <ul>
            {mockTailLists.map((item) => (
              <li key={item.name} className="space-x-20">
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.country}
                    {" | "}
                    {item.detail}
                  </p>
                </div>
                <span>-{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
