import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import Cocktails from "./components/Cocktails";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      {/* <Art />
      <Menu />
      <Contact /> */}
    </main>
  );
}
