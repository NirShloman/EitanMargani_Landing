import { Benefits } from "@/components/Benefits";
import { ContactFooter } from "@/components/ContactFooter";
import { FAQ } from "@/components/FAQ";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/components/Hero";
import { MediaLinks } from "@/components/MediaLinks";
import { NavBar } from "@/components/NavBar";
import { Promotions } from "@/components/Promotions";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-ink text-white">
      <StructuredData />
      <NavBar />
      <Hero />
      <Benefits />
      <Promotions />
      <MediaLinks />
      <FAQ />
      <ContactFooter />
      <FloatingCTA />
    </main>
  );
}
