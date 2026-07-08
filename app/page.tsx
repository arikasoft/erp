import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Services from "@/components/home/Services";
import Solutions from "@/components/home/Solutions";
import Products from "@/components/home/Products";
import Technology from "@/components/home/Technology";
import TechStack from "@/components/home/TechStack";
import GlobalPresence from "@/components/home/GlobalPresence";
import Industries from "@/components/home/Industries";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import Timeline from "@/components/home/Timeline";
import Stats from "@/components/home/Stats";
import Portfolio from "@/components/home/Portfolio";
import CaseStudies from "@/components/home/CaseStudies";
import SuccessStories from "@/components/home/SuccessStories";
import Team from "@/components/home/Team";
import Partners from "@/components/home/Partners";
import Certifications from "@/components/home/Certifications";
import Awards from "@/components/home/Awards";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import Blog from "@/components/home/Blog";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
import CTA from "@/components/home/CTA";
import FloatingContact from "@/components/home/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero */}
      <Hero />

      {/* Trusted Clients */}
      <Clients />

      {/* Services */}
      <Services />

      {/* Solutions */}
      <Solutions />

      {/* Products */}
      <Products />

      {/* Technology */}
      <Technology />

      {/* Tech Stack */}
      <TechStack />

      {/* Global Presence */}
      <GlobalPresence />

      {/* Industries */}
      <Industries />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Development Process */}
      <Process />

      {/* Timeline */}
      <Timeline />

      {/* Statistics */}
      <Stats />

      {/* Portfolio */}
      <Portfolio />

      {/* Case Studies */}
      <CaseStudies />

      {/* Success Stories */}
      <SuccessStories />

      {/* Team */}
      <Team />

      {/* Partners */}
      <Partners />

      {/* Certifications */}
      <Certifications />

      {/* Awards */}
      <Awards />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* Blog */}
      <Blog />

      {/* FAQ */}
      <FAQ />

      {/* Contact CTA */}
      <ContactCTA />

      {/* Final CTA */}
      <CTA />

      {/* Floating Contact Buttons */}
      <FloatingContact />
    </main>
  );
}