"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 10%",
        end: "center 40%",
        scrub: true,
      },
    });
    timeline2
      .to(
        "#f-left-leaf",
        {
          x: 50,
        },
        0
      )
      .to(
        "#f-right-leaf",
        {
          y: 200,
        },
        0
      );
  }, []);

  return (
    <section id="contact" className="noisy">
      <img
        src="/images/footer-left-leaf.png"
        alt="Footer left leaf"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="Footer left leaf"
        id="f-right-leaf"
      />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>VISIT OUR STORE</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <br />
          <p>(555) 987-6543</p>
          <p>anagh.awesome@cocktail.com</p>
        </div>
        <div>
          <h3>OPEN EVERY DAY</h3>
          <br />
          <p>Mon-Thu : 11:00am - 12am</p>
          <p>Fri : 11:00am - 2am</p>
          <p>Sat : 9:00am - 2am</p>
          <p>Sun : 9:00am - 1 am</p>
        </div>
        <div>
          <h3>SOCIALS</h3>
          <div className="flex-center gap-4">
            <a href="Facebook.com" target="_blank">
              <img src="/images/fb.png" alt="Facebook" />
            </a>
            <a href="Twitter.com" target="_blank">
              <img src="/images/x.png" alt="Twitter" />
            </a>
            <a href="https://www.Instagram.com" target="_blank">
              <img src="/images/insta.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <img src="/images/footer-drinks.png" alt="Drinks" className="drink-img" />
    </section>
  );
};

export default Contact;
