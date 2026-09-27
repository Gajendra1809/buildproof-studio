import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Principle } from "@/components/Principle";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatYouGet } from "@/components/WhatYouGet";
import { Exclusions } from "@/components/Exclusions";
import { Journey } from "@/components/Journey";
import { WhoItsFor } from "@/components/WhoItsFor";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Principle />
        <HowItWorks />
        <WhatYouGet />
        <Exclusions />
        <Journey />
        <WhoItsFor />
        <UseCases />
        <Pricing />
        <CtaBand />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
