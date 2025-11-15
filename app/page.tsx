import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
