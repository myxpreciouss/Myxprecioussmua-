import Navbar from "@/app/components/nav";
import Hero from "@/app/components/hero";
import Spotlight from "@/app/components/spotlight";
import GetInTouch from "./components/getintouch";
import ServiceCard from "./components/ServiceCard"
import FrequentlyAsked from "./components/frequentlyasked"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Spotlight />
      <ServiceCard />
      < FrequentlyAsked/>
      <GetInTouch />
    </main>
  );
} 