import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <CtaBanner />
      <Contact />
    </main>
  );
}
