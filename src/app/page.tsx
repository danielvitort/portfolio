import { Header } from "@/components/Header";
import { About } from "@/pages/About";
import Hero from "@/pages/Hero";
import { Skill } from "@/pages/Skill";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
    </>
  );
}
