import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities />
      <FeaturedProjects />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}