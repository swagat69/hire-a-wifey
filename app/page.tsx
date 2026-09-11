import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import StickyMobileCTA from "@/components/StickyMobileCTA";

import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ToDo from "@/components/sections/ToDo";
import Difference from "@/components/sections/Difference";
import GoodHands from "@/components/sections/GoodHands";
import Services from "@/components/sections/Services";
import BuildVisit from "@/components/sections/BuildVisit";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import RegularService from "@/components/sections/RegularService";
import WhyChoose from "@/components/sections/WhyChoose";
import Support from "@/components/sections/Support";
import ServiceArea from "@/components/sections/ServiceArea";
import HowItWorks from "@/components/sections/HowItWorks";
import TimeBack from "@/components/sections/TimeBack";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Enquiry from "@/components/sections/Enquiry";
import FinalSales from "@/components/sections/FinalSales";
import Recruitment from "@/components/sections/Recruitment";

/**
 * Section order follows the final visual hierarchy in the design spec (§48):
 * brand → human hero → trust → the household problem → why Wifey is
 * different → trust again → everything a Wifey can handle → your priorities
 * → who we help → regular service → why us → NDIS/DVA → local → how it works
 * → the time-back turn → reviews → FAQ → enquiry → the emotional close →
 * recruitment → footer.
 *
 * Recruitment sits after the entire customer journey, as the brief requires.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <ToDo />
        <Difference />
        <GoodHands />
        <Services />
        <BuildVisit />
        <WhoWeHelp />
        <RegularService />
        <WhyChoose />
        <Support />
        <ServiceArea />
        <HowItWorks />
        <TimeBack />
        <Testimonials />
        <Faq />
        <Enquiry />
        <FinalSales />
        <Recruitment />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
